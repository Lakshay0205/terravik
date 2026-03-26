import { useState } from 'react';
import { CreditCard, Banknote, Loader2 } from 'lucide-react';
import './PaymentSection.css';

export const PaymentSection = ({ 
  shippingMethod, 
  setShippingMethod, 
  onPlaceOrder, 
  isProcessing,
  total 
}) => {
  return (
    <div className="payment-section">
      <h3 className="section-title">Shipping Method</h3>
      
      <div className="shipping-options">
        <label className={`shipping-option ${shippingMethod === 'prepaid' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="shipping"
            value="prepaid"
            checked={shippingMethod === 'prepaid'}
            onChange={(e) => setShippingMethod(e.target.value)}
          />
          <div className="option-content">
            <div className="option-header">
              <CreditCard size={20} />
              <span className="option-title">Prepaid (Online Payment)</span>
            </div>
            <span className="option-price free">FREE Shipping</span>
          </div>
        </label>

        <label className={`shipping-option ${shippingMethod === 'cod' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="shipping"
            value="cod"
            checked={shippingMethod === 'cod'}
            onChange={(e) => setShippingMethod(e.target.value)}
          />
          <div className="option-content">
            <div className="option-header">
              <Banknote size={20} />
              <span className="option-title">Cash on Delivery</span>
            </div>
            <span className="option-price">+ ₹50 Shipping</span>
          </div>
        </label>
      </div>

      <button 
        className="place-order-btn" 
        onClick={onPlaceOrder}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <>
            <Loader2 className="spinner" size={20} />
            Processing...
          </>
        ) : (
          <>
            {shippingMethod === 'prepaid' ? 'Proceed to Payment' : 'Place Order'}
            <span className="btn-amount">₹{total}</span>
          </>
        )}
      </button>

      <div className="payment-info">
        <p className="info-text">
          {shippingMethod === 'prepaid' 
            ? '🔒 Secure payment powered by Razorpay'
            : '💵 Pay cash when your order arrives'
          }
        </p>
      </div>
    </div>
  );
};
