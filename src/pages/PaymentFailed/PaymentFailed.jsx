import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { XCircle, RefreshCw, Home, Phone, Clock, ShieldCheck } from 'lucide-react';
import { useBrand } from '../../hooks/useBrand';

export const PaymentFailed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { brand } = useBrand();

  const { orderData, error, type } = location.state || {};

  useEffect(() => {
    if (!orderData) navigate(brand.routes.home);
  }, [orderData, navigate, brand]);

  if (!orderData) return null;

  const isVerificationFail = type === 'verification';

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #ffe4e4 100%)' }}>
      <motion.div
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Red header */}
        <div className="bg-red-500 px-8 py-8 text-center">
          <motion.div
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            <XCircle className="w-10 h-10 text-red-500" />
          </motion.div>
          <h1 className="text-2xl font-bold text-white">Payment Failed</h1>
          <p className="text-red-100 mt-1 text-sm">
            {isVerificationFail
              ? 'Payment was received but verification failed'
              : 'Your payment could not be processed'}
          </p>
        </div>

        <div className="px-8 py-6 space-y-5">
          {/* Refund notice — only if money may have been debited */}
          {isVerificationFail && (
            <motion.div
              className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-800">Money debited? Don't worry.</p>
                <p className="text-sm text-amber-700 mt-0.5">
                  If any amount was deducted from your account, it will be automatically refunded within <strong>5–7 working days</strong> by your bank or payment provider.
                </p>
              </div>
            </motion.div>
          )}

          {/* What happened */}
          <div className="p-4 bg-gray-50 rounded-xl space-y-2">
            <p className="text-sm font-semibold text-gray-700">Order details</p>
            <p className="text-sm text-gray-600">Product: <span className="font-medium">{orderData.product.name}</span></p>
            <p className="text-sm text-gray-600">Amount: <span className="font-medium">₹{orderData.total}</span></p>
          </div>

          {/* What to do next */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-700">What you can do:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                Check your internet connection and try again
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                Try a different payment method (UPI, card, net banking)
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                Choose Cash on Delivery if online payment keeps failing
              </li>
            </ul>
          </div>

          {/* Contact support */}
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
            <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-800">
              Need help? Contact us at <strong>support@terravik.in</strong> or call <strong>9008383900</strong>
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(-1)}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-sm"
              style={{ background: 'linear-gradient(135deg, #5a9a3c, #7bc05a)' }}
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(brand.routes.home)}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-gray-700 text-sm border-2 border-gray-200"
            >
              <Home className="w-4 h-4" />
              Go Home
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentFailed;
