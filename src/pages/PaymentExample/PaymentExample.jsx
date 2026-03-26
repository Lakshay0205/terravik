import { useState } from 'react';
import { motion } from 'framer-motion';
import { useBrandContext } from '../../context/BrandContext';
import { PaymentButton } from '../../components/PaymentButton';
import { Package, CheckCircle } from 'lucide-react';

export const PaymentExample = () => {
  const { colors, brand } = useBrandContext();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const product = {
    name: 'TerraVik Liquid Gold',
    description: 'Premium Liquid Organic Fermented Manure - 1 Liter',
    price: 499,
  };

  const customer = {
    name: 'John Doe',
    email: 'john@example.com',
    contact: '9876543210',
  };

  const handlePaymentSuccess = (payment) => {
    console.log('Payment successful:', payment);
    setPaymentSuccess(true);
    setPaymentDetails(payment);
  };

  const handlePaymentFailure = (error) => {
    console.error('Payment failed:', error);
    alert('Payment failed. Please try again or contact support.');
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div
            className="p-8 text-white"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            }}
          >
            <h1 className="text-3xl font-bold mb-2">Complete Your Purchase</h1>
            <p className="text-white/90">Secure payment powered by Razorpay</p>
          </div>

          <div className="p-8">
            {!paymentSuccess ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
                    Order Summary
                  </h2>
                  
                  <div className="border-2 border-gray-200 rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-20 h-20 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${colors.secondary}20` }}
                      >
                        <Package className="w-10 h-10" style={{ color: colors.secondary }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.description}</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Product Price</span>
                        <span className="font-semibold">₹{product.price}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Quantity</span>
                        <span className="font-semibold">1</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold text-green-600">FREE</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                        <span className="font-bold text-lg">Total Amount</span>
                        <span className="font-bold text-2xl" style={{ color: colors.primary }}>
                          ₹{product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
                    Payment Details
                  </h2>

                  <div className="border-2 border-gray-200 rounded-xl p-6">
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Customer Information</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-600">
                          <span className="font-semibold">Name:</span> {customer.name}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-semibold">Email:</span> {customer.email}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-semibold">Contact:</span> {customer.contact}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <PaymentButton
                        amount={product.price}
                        productName={product.name}
                        productDescription={product.description}
                        customerName={customer.name}
                        customerEmail={customer.email}
                        customerContact={customer.contact}
                        onSuccess={handlePaymentSuccess}
                        onFailure={handlePaymentFailure}
                        buttonText="Proceed to Pay"
                        buttonColor={colors.secondary}
                      />
                    </div>

                    <div className="mt-4 text-xs text-gray-500 text-center">
                      <p>🔒 Secure payment powered by Razorpay</p>
                      <p className="mt-1">Your payment information is encrypted and secure</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${colors.secondary}20` }}
                >
                  <CheckCircle className="w-16 h-16" style={{ color: colors.secondary }} />
                </div>

                <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>
                  Payment Successful!
                </h2>
                <p className="text-gray-600 mb-8">
                  Thank you for your purchase. Your order has been confirmed.
                </p>

                {paymentDetails && (
                  <div className="max-w-md mx-auto bg-gray-50 rounded-xl p-6 text-left">
                    <h3 className="font-bold mb-4">Payment Details</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600">
                        <span className="font-semibold">Payment ID:</span>{' '}
                        {paymentDetails.payment_id}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Order ID:</span> {paymentDetails.order_id}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Amount:</span> ₹{paymentDetails.amount}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Status:</span>{' '}
                        <span className="text-green-600 font-semibold">
                          {paymentDetails.status}
                        </span>
                      </p>
                    </div>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setPaymentSuccess(false);
                    setPaymentDetails(null);
                  }}
                  className="mt-8 px-8 py-3 rounded-xl text-white font-semibold"
                  style={{ backgroundColor: colors.primary }}
                >
                  Make Another Payment
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentExample;
