import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ShieldCheck } from 'lucide-react';
import { CheckoutForm } from '../../components/CheckoutForm';
import { OrderSummary } from '../../components/OrderSummary';
import { PaymentSection } from '../../components/PaymentSection';
import { useBrand } from '../../hooks/useBrand';
import { createRazorpayOrder, initiateRazorpayPayment, verifyRazorpayPayment } from '../../utils/razorpayUtils';
import { sendPaymentFailedEmail, sendCODOrderEmails } from '../../utils/emailService';
import './Checkout.css';

export const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { brand } = useBrand();
  
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(1);
  const [shippingMethod, setShippingMethod] = useState('prepaid');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    pincode: '',
  });
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!product) {
      navigate(brand.routes.products);
    }
  }, [product, navigate, brand]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!formData.state) {
      newErrors.state = 'Please select a state';
    }
    
    if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateTotal = () => {
    const subtotal = product.price * quantity;
    const shippingCost = shippingMethod === 'cod' ? 50 : 0;
    return subtotal + shippingCost;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      alert('Please fill all required fields correctly');
      return;
    }

    setIsProcessing(true);

    try {
      const orderData = {
        product: {
          id: product.id,
          name: product.fullName || product.name,
          price: product.price,
          quantity,
        },
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: {
            line1: formData.address,
            line2: formData.apartment,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
          },
        },
        shippingMethod,
        total: calculateTotal(),
        brandName: brand.name, // Pass brand name for emails
      };

      if (shippingMethod === 'prepaid') {
        const orderResponse = await createRazorpayOrder(orderData.total, {
          productName: orderData.product.name,
          quantity: orderData.product.quantity,
        });

        await initiateRazorpayPayment({
          amount: orderData.total,
          orderId: orderResponse.order.id,
          keyId: orderResponse.key_id,
          productName: orderData.product.name,
          customerName: orderData.customer.name,
          customerContact: orderData.customer.phone,
          onSuccess: async (response) => {
            setIsVerifying(true);
            try {
              const verifyResponse = await verifyRazorpayPayment({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderData,
              });
              navigate(`${brand.routes.home}/order-success`, {
                state: {
                  orderData,
                  paymentId: response.razorpay_payment_id,
                  orderId: verifyResponse.orderId,
                  emailSent: true,
                },
              });
            } catch (error) {
              setIsVerifying(false);
              setIsProcessing(false);
              navigate(`${brand.routes.home}/payment-failed`, {
                state: { orderData, error: error.message, type: 'verification' },
              });
            }
          },
          onFailure: async (error) => {
            setIsProcessing(false);
            try { await sendPaymentFailedEmail(orderData); } catch (_) {}
            navigate(`${brand.routes.home}/payment-failed`, {
              state: { orderData, error: String(error), type: 'payment' },
            });
          },
        });
      } else {
        // COD order - send COD emails via backend
        try {
          const result = await sendCODOrderEmails(orderData);
          
          navigate(`${brand.routes.home}/order-success`, {
            state: {
              orderData,
              orderId: result.orderId,
              paymentMethod: 'cod',
              emailSent: true,
            },
          });
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
          // Still navigate to success page even if email fails
          navigate(`${brand.routes.home}/order-success`, {
            state: {
              orderData,
              paymentMethod: 'cod',
              emailSent: false,
            },
          });
        }
      }
    } catch (error) {
      setIsProcessing(false);
      alert('Failed to process order. Please try again.');
      console.error('Order error:', error);
    }
  };

  if (!product) return null;

  return (
    <>
      {/* Payment Verifying Overlay */}
      <AnimatePresence>
        {isVerifying && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center gap-6 text-center px-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative">
                <Loader2 className="w-16 h-16 animate-spin" style={{ color: '#5a9a3c' }} />
                <ShieldCheck className="w-7 h-7 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ color: '#5a9a3c' }} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Confirming Your Payment</h2>
              <p className="text-gray-500 text-base max-w-sm">
                Please wait while we securely verify your payment. Do not close or refresh this page.
              </p>
              <div className="flex gap-1.5 mt-2">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#5a9a3c' }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <h1 className="checkout-title">Checkout</h1>
          <div className="step-indicators">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Contact</span>
            </div>
            <div className="step-divider"></div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Shipping</span>
            </div>
            <div className="step-divider"></div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Payment</span>
            </div>
          </div>
        </div>

        <div className="checkout-layout">
          <div className="checkout-left">
            <CheckoutForm 
              formData={formData} 
              setFormData={setFormData} 
              errors={errors}
            />
            <PaymentSection
              shippingMethod={shippingMethod}
              setShippingMethod={setShippingMethod}
              onPlaceOrder={handlePlaceOrder}
              isProcessing={isProcessing}
              total={calculateTotal()}
            />
          </div>

          <div className="checkout-right">
            <OrderSummary
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
              shippingMethod={shippingMethod}
            />
          </div>
        </div>
      </div>
    </>
  );
};
