import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, MapPin, CreditCard, Phone } from 'lucide-react';
import { useBrand } from '../../hooks/useBrand';
import './OrderSuccess.css';

export const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { brand } = useBrand();
  
  const { orderData, paymentId, orderId, paymentMethod } = location.state || {};

  useEffect(() => {
    if (!orderData) {
      navigate(brand.routes.home);
    }
  }, [orderData, navigate, brand]);

  if (!orderData) return null;

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="order-success-page">
      <div className="success-container">
        <div className="success-header">
          <div className="success-icon">
            <CheckCircle size={64} />
          </div>
          <h1 className="success-title">Order Placed Successfully!</h1>
          <p className="success-subtitle">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
        </div>

        <div className="order-details-card">
          <h2 className="card-title">Order Details</h2>
          
          <div className="detail-section">
            <div className="detail-icon">
              <Package size={24} />
            </div>
            <div className="detail-content">
              <h3 className="detail-label">Product</h3>
              <p className="detail-value">{orderData.product.name}</p>
              <p className="detail-meta">
                Quantity: {orderData.product.quantity} × ₹{orderData.product.price}
              </p>
            </div>
          </div>

          <div className="detail-section">
            <div className="detail-icon">
              <MapPin size={24} />
            </div>
            <div className="detail-content">
              <h3 className="detail-label">Delivery Address</h3>
              <p className="detail-value">{orderData.customer.name}</p>
              <p className="detail-meta">
                {orderData.customer.address.line1}
                {orderData.customer.address.line2 && `, ${orderData.customer.address.line2}`}
              </p>
              <p className="detail-meta">
                {orderData.customer.address.city}, {orderData.customer.address.state} - {orderData.customer.address.pincode}
              </p>
            </div>
          </div>

          <div className="detail-section">
            <div className="detail-icon">
              <Phone size={24} />
            </div>
            <div className="detail-content">
              <h3 className="detail-label">Contact</h3>
              <p className="detail-value">{orderData.customer.phone}</p>
            </div>
          </div>

          <div className="detail-section">
            <div className="detail-icon">
              <CreditCard size={24} />
            </div>
            <div className="detail-content">
              <h3 className="detail-label">Payment Method</h3>
              <p className="detail-value">
                {orderData.shippingMethod === 'prepaid' ? 'Online Payment (Prepaid)' : 'Cash on Delivery'}
              </p>
              {paymentId && (
                <p className="detail-meta">Payment ID: {paymentId}</p>
              )}
              {orderId && (
                <p className="detail-meta">Order ID: {orderId}</p>
              )}
            </div>
          </div>

          <div className="order-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{orderData.product.price * orderData.product.quantity}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{orderData.shippingMethod === 'cod' ? '₹50' : 'FREE'}</span>
            </div>
            <div className="summary-row total">
              <span>Total Amount</span>
              <span>₹{orderData.total}</span>
            </div>
          </div>
        </div>

        <div className="delivery-info-card">
          <h3 className="info-title">Estimated Delivery</h3>
          <p className="delivery-date">
            {estimatedDelivery.toLocaleDateString('en-IN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className="info-text">
            Your order will be delivered within 5-7 business days. You'll receive tracking information via SMS and email.
          </p>
        </div>

        <div className="action-buttons">
          <button 
            className="btn-primary"
            onClick={() => navigate(brand.routes.products)}
          >
            Continue Shopping
          </button>
          <button 
            className="btn-secondary"
            onClick={() => navigate(brand.routes.home)}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
