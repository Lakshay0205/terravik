# 🚀 Quick Start - Razorpay Payment Integration

## ⚡ Start in 3 Steps

### 1️⃣ Install Backend Dependencies
```bash
cd backend
npm install
```

### 2️⃣ Start Backend Server
```bash
npm run dev
```
✅ Server running on http://localhost:5000

### 3️⃣ Start Frontend (in new terminal)
```bash
cd ..
npm run dev
```
✅ Frontend running on http://localhost:5173

---

## 🧪 Test Payment Now

### Add Test Route

Open `src/routes/AppRoutes.jsx` and add:

```jsx
import { PaymentExample } from '../pages/PaymentExample';

// Inside TerraVik routes, add:
<Route path="payment-test" element={<PaymentExample />} />
```

### Visit Test Page
Go to: `http://localhost:5173/terravik/payment-test`

### Use Test Card
- **Card:** 4111 1111 1111 1111
- **CVV:** 123
- **Expiry:** 12/25
- **Name:** Test User

---

## ✅ What's Configured

✅ Backend API: http://localhost:5000
✅ Razorpay Test Keys: Already configured
✅ Payment Component: Ready to use
✅ Example Page: Created

---

## 🎯 Use Payment Button Anywhere

```jsx
import { PaymentButton } from '../components/PaymentButton';

<PaymentButton
  amount={499}
  productName="TerraVik Liquid Gold"
  customerName="John Doe"
  customerEmail="john@example.com"
  customerContact="9876543210"
  onSuccess={(payment) => console.log('Success:', payment)}
  onFailure={(error) => console.log('Failed:', error)}
/>
```

---

## 📚 Full Documentation
See `RAZORPAY_SETUP.md` for complete guide.

---

**Ready to accept payments! 💰**
