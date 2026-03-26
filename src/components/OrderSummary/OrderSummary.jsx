import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import './OrderSummary.css';

export const OrderSummary = ({ product, quantity, setQuantity, shippingMethod }) => {
  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
  };

  const subtotal = product.price * quantity;
  const shippingCost = shippingMethod === 'cod' ? 50 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="order-summary">
      <h2 className="summary-title">Order Summary</h2>
      
      <div className="product-card">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        
        <div className="product-details">
          <h3 className="product-name">{product.fullName || product.name}</h3>
          <p className="product-type">{product.type}</p>
          
          <div className="quantity-selector">
            <button 
              onClick={() => handleQuantityChange(-1)} 
              className="quantity-btn"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="quantity-value">{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(1)} 
              className="quantity-btn"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <div className="price-info">
            <span className="price-label">Price per unit:</span>
            <span className="price-value">₹{product.price}</span>
          </div>
        </div>
      </div>
      
      <div className="price-breakdown">
        <div className="price-row">
          <span>Subtotal ({quantity} {quantity === 1 ? 'item' : 'items'})</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="price-row">
          <span>Shipping</span>
          <span className={shippingCost === 0 ? 'free-shipping' : ''}>
            {shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}
          </span>
        </div>
        <div className="price-row total-row">
          <span>Total Amount</span>
          <span className="total-amount">₹{total}</span>
        </div>
      </div>
    </div>
  );
};
