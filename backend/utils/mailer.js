const nodemailer = require('nodemailer');
const {
  generateOrderId,
  orderSuccessUserTemplate,
  orderSuccessAdminTemplate,
  paymentFailedTemplate,
  inquiryUserTemplate,
  inquiryAdminTemplate,
} = require('../templates/emailTemplates');

/**
 * Nodemailer Email Service
 * Production-ready email system using Gmail SMTP
 */

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });
};

/**
 * Main email sending function
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML content
 * @param {string} options.from - Sender email (optional)
 * @returns {Promise} Email send result
 */
const sendMail = async ({ to, subject, html, from }) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: from || `"${process.env.COMPANY_NAME || 'TerraVik'}" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

/**
 * Send order confirmation email to customer
 */
const sendOrderConfirmationEmail = async (orderData) => {
  const html = orderSuccessUserTemplate(orderData);

  return await sendMail({
    to: orderData.customer.email,
    subject: `Order Confirmed - ${orderData.orderId}`,
    html,
  });
};

/**
 * Send new order notification to admin
 */
const sendAdminOrderNotification = async (orderData) => {
  const html = orderSuccessAdminTemplate(orderData);

  return await sendMail({
    to: process.env.ADMIN_EMAIL,
    subject: `🔔 New Order - ${orderData.orderId}`,
    html,
  });
};

/**
 * Send payment failure email to customer
 */
const sendPaymentFailureEmail = async (orderData) => {
  const html = paymentFailedTemplate(orderData);

  return await sendMail({
    to: orderData.customer.email,
    subject: 'Payment Failed - Please Try Again',
    html,
  });
};

/**
 * Send inquiry confirmation to customer
 */
const sendInquiryConfirmationEmail = async (inquiryData) => {
  const html = inquiryUserTemplate(inquiryData);

  return await sendMail({
    to: inquiryData.email,
    subject: 'Inquiry Received - We\'ll Contact You Soon',
    html,
  });
};

/**
 * Send new inquiry notification to admin
 */
const sendAdminInquiryNotification = async (inquiryData) => {
  const html = inquiryAdminTemplate(inquiryData);

  return await sendMail({
    to: process.env.ADMIN_EMAIL,
    subject: `📩 New Inquiry - ${inquiryData.productInterest}`,
    html,
  });
};

module.exports = {
  sendMail,
  generateOrderId,
  sendOrderConfirmationEmail,
  sendAdminOrderNotification,
  sendPaymentFailureEmail,
  sendInquiryConfirmationEmail,
  sendAdminInquiryNotification,
};
