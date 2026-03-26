import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, XCircle, Loader } from 'lucide-react';

/**
 * PaymentButton Component
 * Handles Razorpay payment integration
 * 
 * Props:
 * - amount: number (in rupees)
 * - productName: string
 * - productDescription: string
 * - customerName: string
 * - customerEmail: string
 * - customerContact: string
 * - onSuccess: function (called after successful payment)
 * - onFailure: function (called after failed payment)
 * - buttonText: string (optional, default: "Pay Now")
 * - buttonColor: string (optional, default: "#5a9a3c")
 */
export const PaymentButton = ({
  amount,
  productName = 'Product',
  productDescription = '',
  customerName = '',
  customerEmail = '',
  customerContact = '',
  onSuccess,
  onFailure,
  buttonText = 'Pay Now',
  buttonColor = '#5a9a3c',
}) => {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success', 'failed', null
  const razorpayRef = useRef(null);
  const pendingOpenRef = useRef(false);

  // Open Razorpay only after React has committed the loading state to the DOM
  useEffect(() => {
    if (loading && pendingOpenRef.current && razorpayRef.current) {
      pendingOpenRef.current = false;
      razorpayRef.current.open();
    }
  }, [loading]);

  // Backend API URL
  const API_URL = import.meta.env.VITE_PAYMENT_API_URL || 'http://localhost:5000';

  console.log('PaymentButton rendered with amount:', amount);

  /**
   * Create Razorpay order via backend
   */
  const createOrder = async () => {
    try {
      const response = await fetch(`${API_URL}/api/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
          notes: {
            product_name: productName,
            customer_name: customerName,
          },
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Failed to create order');
      }

      return data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  /**
   * Verify payment via backend
   */
  const verifyPayment = async (paymentData) => {
    try {
      const response = await fetch(`${API_URL}/api/verify-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Payment verification failed');
      }

      return data;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  };

  /**
   * Handle payment process
   */
  const handlePayment = async () => {
    console.log('🔵 Button clicked! Starting payment process...');
    try {
      setPaymentStatus(null);

      // Validation
      if (!amount || amount <= 0) {
        alert('Invalid amount');
        setLoading(false);
        return;
      }

      // Check if Razorpay is loaded
      if (typeof window.Razorpay === 'undefined') {
        alert('Payment system not loaded. Please refresh the page and try again.');
        setLoading(false);
        return;
      }

      console.log('Creating order for amount:', amount);

      // Create order
      const orderData = await createOrder();
      console.log('Order created:', orderData);

      // Razorpay options
      const options = {
        key: orderData.key_id,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: 'TerraVik / Hawai Agro',
        description: productDescription || productName,
        order_id: orderData.order.id,
        handler: async function (response) {
          try {
            console.log('Payment response received:', response);
            // Verify payment
            const verificationResult = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            console.log('Payment verified:', verificationResult);
            setPaymentStatus('success');
            setLoading(false);

            // Call success callback
            if (onSuccess) {
              onSuccess(verificationResult.payment);
            }
          } catch (error) {
            console.error('Payment verification failed:', error);
            setPaymentStatus('failed');
            setLoading(false);

            // Call failure callback
            if (onFailure) {
              onFailure(error);
            }
          }
        },
        prefill: {
          name: customerName,
          email: customerEmail,
          contact: customerContact,
        },
        notes: {
          product_name: productName,
        },
        theme: {
          color: buttonColor,
        },
        modal: {
          ondismiss: function () {
            console.log('Payment modal dismissed');
            setLoading(false);
            setPaymentStatus('failed');
            if (onFailure) {
              onFailure(new Error('Payment cancelled by user'));
            }
          },
        },
      };

      console.log('Opening Razorpay checkout with options:', options);

      // Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', function (response) {
        console.error('Payment failed:', response.error);
        setPaymentStatus('failed');
        setLoading(false);
        if (onFailure) {
          onFailure(response.error);
        }
      });
      razorpayRef.current = razorpay;
      pendingOpenRef.current = true;
      setLoading(true); // trigger re-render, useEffect will open after paint
    } catch (error) {
      console.error('Payment error:', error);
      alert(error.message || 'Payment failed. Please try again.');
      setLoading(false);
      setPaymentStatus('failed');

      if (onFailure) {
        onFailure(error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Payment Button */}
      <motion.button
        onClick={handlePayment}
        disabled={loading || !amount || amount <= 0}
        className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-base shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: buttonColor }}
        whileHover={{ scale: loading ? 1 : 1.05 }}
        whileTap={{ scale: loading ? 1 : 0.95 }}
      >
        {loading ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <CreditCard className="w-5 h-5" />
            <span>{buttonText}</span>
            <span className="ml-auto text-lg font-bold">₹{amount}</span>
          </>
        )}
      </motion.button>

      {/* Payment Status Messages */}
      {paymentStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-3 bg-green-50 border-2 border-green-500 rounded-lg text-green-800 text-sm font-semibold"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Payment Successful!</span>
        </motion.div>
      )}

      {paymentStatus === 'failed' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-3 bg-red-50 border-2 border-red-500 rounded-lg text-red-800 text-sm font-semibold"
        >
          <XCircle className="w-5 h-5" />
          <span>Payment Failed. Please try again.</span>
        </motion.div>
      )}
    </div>
  );
};

export default PaymentButton;
