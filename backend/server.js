const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const Razorpay = require('razorpay');
const {
  generateOrderId,
  sendOrderConfirmationEmail,
  sendAdminOrderNotification,
  sendPaymentFailureEmail,
  sendInquiryConfirmationEmail,
  sendAdminInquiryNotification,
} = require('./utils/mailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: '*', // Allow all origins in development
  credentials: true
}));

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// In-memory storage for payment records (replace with database in production)
const paymentRecords = [];

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Payment server is running' });
});

/**
 * POST /api/create-order
 * Creates a Razorpay order
 * Body: { amount: number (in rupees), currency: string, receipt: string }
 */
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt, notes } = req.body;

    // Validation
    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid amount. Amount must be greater than 0',
      });
    }

    // Convert amount to paisa (Razorpay expects amount in smallest currency unit)
    const amountInPaisa = Math.round(amount * 100);

    // Create order options
    const options = {
      amount: amountInPaisa,
      currency: currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {},
    };

    // Create order using Razorpay API
    const order = await razorpay.orders.create(options);

    console.log('Order created:', order.id);

    res.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      },
      key_id: process.env.RAZORPAY_KEY_ID, // Send key_id to frontend
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message,
    });
  }
});

/**
 * POST /api/verify-payment
 * Verifies Razorpay payment signature and sends emails
 * Body: { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderData }
 */
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderData } = req.body;

    // Validation
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: 'Missing required payment details',
      });
    }

    // Create signature verification string
    const sign = razorpay_order_id + '|' + razorpay_payment_id;

    // Generate expected signature using HMAC SHA256
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest('hex');

    // Compare signatures
    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Fetch payment details from Razorpay
      const payment = await razorpay.payments.fetch(razorpay_payment_id);

      // Generate unique order ID
      const orderId = generateOrderId();

      // Store payment record
      const paymentRecord = {
        order_id: orderId,
        razorpay_order_id,
        payment_id: razorpay_payment_id,
        signature: razorpay_signature,
        amount: payment.amount / 100,
        currency: payment.currency,
        status: payment.status,
        method: payment.method,
        email: payment.email,
        contact: payment.contact,
        created_at: new Date(payment.created_at * 1000),
        verified_at: new Date(),
      };

      paymentRecords.push(paymentRecord);

      console.log('Payment verified successfully:', razorpay_payment_id);

      // Send emails after successful payment verification
      if (orderData) {
        try {
          const emailData = {
            ...orderData,
            orderId,
            paymentId: razorpay_payment_id,
          };

          // Send customer confirmation email
          await sendOrderConfirmationEmail(emailData);
          console.log('Customer confirmation email sent');

          // Send admin notification email
          await sendAdminOrderNotification(emailData);
          console.log('Admin notification email sent');
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
          // Don't fail the payment verification if email fails
        }
      }

      res.json({
        success: true,
        message: 'Payment verified successfully',
        orderId,
        payment: {
          order_id: orderId,
          razorpay_order_id,
          payment_id: razorpay_payment_id,
          amount: paymentRecord.amount,
          currency: paymentRecord.currency,
          status: paymentRecord.status,
        },
      });
    } else {
      console.error('Payment verification failed: Signature mismatch');
      res.status(400).json({
        success: false,
        message: 'Payment verification failed',
      });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to verify payment',
      error: error.message,
    });
  }
});

/**
 * POST /api/payment-failed
 * Handle payment failure and send email
 * Body: { orderData }
 */
app.post('/api/payment-failed', async (req, res) => {
  try {
    const { orderData } = req.body;

    if (!orderData) {
      return res.status(400).json({
        success: false,
        message: 'Order data is required',
      });
    }

    // Send payment failure email
    await sendPaymentFailureEmail(orderData);
    console.log('Payment failure email sent');

    res.json({
      success: true,
      message: 'Payment failure email sent',
    });
  } catch (error) {
    console.error('Error sending payment failure email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send payment failure email',
      error: error.message,
    });
  }
});

/**
 * POST /api/cod-order
 * Handle COD order and send emails
 * Body: { orderData }
 */
app.post('/api/cod-order', async (req, res) => {
  try {
    const { orderData } = req.body;

    if (!orderData) {
      return res.status(400).json({
        success: false,
        message: 'Order data is required',
      });
    }

    // Validate required fields
    if (!orderData.customer || !orderData.product) {
      return res.status(400).json({
        success: false,
        message: 'Customer and product information required',
      });
    }

    // Generate COD order ID
    const orderId = generateOrderId();
    const emailData = {
      ...orderData,
      orderId,
    };

    // Send customer confirmation email
    await sendOrderConfirmationEmail(emailData);
    console.log('COD customer confirmation email sent');

    // Send admin notification email
    await sendAdminOrderNotification(emailData);
    console.log('COD admin notification email sent');

    res.json({
      success: true,
      message: 'COD order emails sent',
      orderId,
    });
  } catch (error) {
    console.error('Error sending COD order emails:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send COD order emails',
      error: error.message,
    });
  }
});

/**
 * POST /api/inquiry
 * Handle inquiry form submission and send emails
 * Body: { name, email, phone, productInterest, message, address, brandName }
 */
app.post('/api/inquiry', async (req, res) => {
  try {
    const inquiryData = req.body;

    // Validation
    if (!inquiryData.name || !inquiryData.email || !inquiryData.phone || !inquiryData.message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    // Send admin notification email
    await sendAdminInquiryNotification(inquiryData);
    console.log('Admin inquiry notification sent');

    // Send customer confirmation email
    await sendInquiryConfirmationEmail(inquiryData);
    console.log('Customer inquiry confirmation sent');

    res.json({
      success: true,
      message: 'Inquiry emails sent successfully',
    });
  } catch (error) {
    console.error('Error sending inquiry emails:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send inquiry emails',
      error: error.message,
    });
  }
});
/**
 * GET /api/payments
 * Get all payment records (for admin/testing purposes)
 */
app.get('/api/payments', (req, res) => {
  res.json({
    success: true,
    count: paymentRecords.length,
    payments: paymentRecords,
  });
});

/**
 * GET /api/payment/:payment_id
 * Get specific payment record
 */
app.get('/api/payment/:payment_id', (req, res) => {
  const { payment_id } = req.params;
  const payment = paymentRecords.find(p => p.payment_id === payment_id);

  if (payment) {
    res.json({
      success: true,
      payment,
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Payment not found',
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Payment server running on port ${PORT}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`✅ CORS: Enabled for all origins`);
});

module.exports = app;
