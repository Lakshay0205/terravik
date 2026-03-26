# Checkout System - Quick Reference

## 🚀 Quick Start

### Access Checkout
```javascript
// From Product Details page
navigate(`${brand.routes.home}/checkout`, { 
  state: { product } 
});
```

### Routes
- TerraVik: `/terravik/checkout` → `/terravik/order-success`
- Hawai Agro: `/hawai-agro/checkout` → `/hawai-agro/order-success`

---

## 📋 Form Fields

### Required Fields
| Field | Validation | Max Length |
|-------|-----------|------------|
| Phone | 10 digits | 10 |
| First Name | Non-empty | - |
| Last Name | Non-empty | - |
| Address | Non-empty | - |
| City | Non-empty | - |
| State | Dropdown | - |
| Pincode | 6 digits | 6 |

### Optional Fields
- Apartment/Suite

---

## 💳 Payment Options

### Prepaid (Default)
- **Shipping**: FREE
- **Process**: Razorpay popup → Payment → Success page
- **Icon**: 💳 Credit Card

### Cash on Delivery
- **Shipping**: ₹50
- **Process**: Direct to success page
- **Icon**: 💵 Banknote

---

## 🎨 Design Tokens

### Colors
```css
--primary: #5a9a3c
--secondary: #9ccc65
--accent: #ffd54f
--success: #4caf50
--error: #f44336
```

### Spacing
```css
--card-padding: 2rem
--section-gap: 2rem
--form-gap: 1.5rem
```

### Shadows
```css
--card-shadow: 0 4px 12px rgba(0, 0, 0, 0.08)
--button-shadow: 0 4px 12px rgba(90, 154, 60, 0.3)
```

---

## 🔧 Key Components

### CheckoutForm
- Contact information
- Delivery address
- Form validation

### OrderSummary
- Product display
- Quantity selector
- Price breakdown

### PaymentSection
- Shipping method selection
- Place order button
- Payment processing

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  /* Single column layout */
}

/* Tablet */
@media (max-width: 1024px) {
  /* Stack order summary on top */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Split layout: form left, summary right */
}
```

---

## ✅ Validation Rules

### Phone Number
```javascript
/^\d{10}$/  // Exactly 10 digits
```

### Pincode
```javascript
/^\d{6}$/   // Exactly 6 digits
```

### Required Fields
```javascript
if (!field.trim()) {
  errors[field] = 'This field is required';
}
```

---

## 🔄 State Flow

### Checkout State
```javascript
{
  product: {},
  quantity: 1,
  shippingMethod: 'prepaid',
  formData: { /* 8 fields */ },
  errors: {},
  isProcessing: false
}
```

### Order Success State
```javascript
{
  orderData: {
    product: {},
    customer: {},
    shippingMethod: '',
    total: 0
  },
  paymentId: '',
  orderId: ''
}
```

---

## 🎯 User Flow

```
Product Details
    ↓ (Click "Buy Now")
Checkout Page
    ↓ (Fill form)
Select Shipping Method
    ↓ (Click "Place Order")
[Prepaid] → Razorpay → Payment
    ↓
Order Success Page
```

---

## 🛠️ Environment Setup

```env
VITE_RAZORPAY_KEY_ID=your_key_here
VITE_PAYMENT_API_URL=http://localhost:5000
```

---

## 🐛 Common Fixes

### Razorpay Not Loading
```javascript
// Check script loaded
if (!window.Razorpay) {
  await loadRazorpayScript();
}
```

### Form Not Validating
```javascript
// Ensure validation runs before submit
if (!validateForm()) {
  return;
}
```

### Navigation State Lost
```javascript
// Always pass state in navigate
navigate(path, { state: { product } });
```

---

## 📊 Price Calculation

```javascript
const subtotal = product.price * quantity;
const shipping = shippingMethod === 'cod' ? 50 : 0;
const total = subtotal + shipping;
```

---

## 🎨 Step Indicators

```
1. Contact → 2. Shipping → 3. Payment
   [●]          [○]           [○]
```

Active step: Green gradient circle
Inactive step: Gray outline circle

---

## 📦 File Locations

```
src/pages/Checkout/
  ├── Checkout.jsx
  ├── Checkout.css
  └── index.js

src/pages/OrderSuccess/
  ├── OrderSuccess.jsx
  ├── OrderSuccess.css
  └── index.js

src/components/
  ├── CheckoutForm/
  ├── OrderSummary/
  └── PaymentSection/
```

---

## 🚨 Error Messages

```javascript
errors = {
  phone: 'Please enter a valid 10-digit phone number',
  firstName: 'First name is required',
  lastName: 'Last name is required',
  address: 'Address is required',
  city: 'City is required',
  state: 'Please select a state',
  pincode: 'Please enter a valid 6-digit pincode'
}
```

---

## 💡 Pro Tips

1. **Always validate** before payment
2. **Disable button** during processing
3. **Show loading** spinner for UX
4. **Pass product** via navigation state
5. **Handle errors** gracefully
6. **Test COD** and Prepaid separately
7. **Mobile test** on real devices
8. **Use test mode** for Razorpay initially

---

## 📞 Support

For issues or questions:
- Check console for errors
- Verify environment variables
- Test with Razorpay test mode
- Review validation logic
- Check network requests

---

**Version**: 1.0.0
**Status**: ✅ Production Ready
