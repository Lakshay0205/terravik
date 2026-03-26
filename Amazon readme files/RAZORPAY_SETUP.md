# Razorpay Payment Integration - Complete Guide

## 📁 Project Structure

```
agro-websites/
├── backend/                    # Node.js Express Backend
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   ├── .env                   # Backend environment variables
│   └── .gitignore            # Git ignore file
│
├── src/                       # React Frontend
│   ├── components/
│   │   └── PaymentButton/    # Reusable payment component
│   │       ├── PaymentButton.jsx
│   │       └── index.js
│   │
│   └── pages/
│       └── PaymentExample/   # Example payment page
│           ├── PaymentExample.jsx
│           └── index.js
│
└── .env                      # Frontend environment variables
```

---

## 🚀 Setup Instructions

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

This will install:
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
- `razorpay` - Razorpay SDK
- `nodemon` - Development server (dev dependency)

### Step 2: Configure Backend Environment

The `backend/.env` file is already configured with your test credentials:

```env
RAZORPAY_KEY_ID=rzp_test_SVDZYqETKDVh9a
RAZORPAY_KEY_SECRET=RHCMOmfBVU1GPTnhc0FqpJwJ
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Step 3: Start Backend Server

```bash
# From backend directory
npm run dev
```

Server will start on `http://localhost:5000`

You should see:
```
✅ Payment server running on port 5000
✅ Environment: development
✅ Frontend URL: http://localhost:5173
```

### Step 4: Configure Frontend Environment

The frontend `.env` file has been updated with:

```env
VITE_PAYMENT_API_URL=http://localhost:5000
```

### Step 5: Start Frontend Server

```bash
# From root directory (agro-websites)
npm run dev
```

Frontend will start on `http://localhost:5173`

---

## 🧪 Testing the Integration

### Option 1: Use the Example Payment Page

1. Add route to `src/routes/AppRoutes.jsx`:

```jsx
import { PaymentExample } from '../pages/PaymentExample';

// Add this route inside TerraVik or Hawai Agro routes:
<Route path="payment-test" element={<PaymentExample />} />
```

2. Visit: `http://localhost:5173/terravik/payment-test`

3. Click "Proceed to Pay" button

4. Use Razorpay test cards:
   - **Card Number:** 4111 1111 1111 1111
   - **CVV:** Any 3 digits
   - **Expiry:** Any future date
   - **Name:** Any name

### Option 2: Use PaymentButton Component Anywhere

```jsx
import { PaymentButton } from '../components/PaymentButton';

<PaymentButton
  amount={499}
  productName="TerraVik Liquid Gold"
  productDescription="Premium Organic Fertilizer"
  customerName="John Doe"
  customerEmail="john@example.com"
  customerContact="9876543210"
  onSuccess={(payment) => {
    console.log('Payment successful:', payment);
    // Handle success
  }}
  onFailure={(error) => {
    console.error('Payment failed:', error);
    // Handle failure
  }}
  buttonText="Buy Now"
  buttonColor="#5a9a3c"
/>
```

---

## 🔐 Security Features

### Backend Security:
✅ Secret key never exposed to frontend
✅ HMAC SHA256 signature verification
✅ CORS protection
✅ Input validation
✅ Error handling

### Frontend Security:
✅ Only receives public key_id
✅ Payment verification through backend
✅ No direct Razorpay secret access

---

## 📡 API Endpoints

### 1. Create Order
**POST** `/api/create-order`

**Request Body:**
```json
{
  "amount": 499,
  "currency": "INR",
  "receipt": "receipt_123",
  "notes": {
    "product_name": "TerraVik Liquid Gold"
  }
}
```

**Response:**
```json
{
  "success": true,
  "order": {
    "id": "order_xyz123",
    "amount": 49900,
    "currency": "INR",
    "receipt": "receipt_123"
  },
  "key_id": "rzp_test_SVDZYqETKDVh9a"
}
```

### 2. Verify Payment
**POST** `/api/verify-payment`

**Request Body:**
```json
{
  "razorpay_order_id": "order_xyz123",
  "razorpay_payment_id": "pay_abc456",
  "razorpay_signature": "signature_hash"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment verified successfully",
  "payment": {
    "order_id": "order_xyz123",
    "payment_id": "pay_abc456",
    "amount": 499,
    "currency": "INR",
    "status": "captured"
  }
}
```

### 3. Get All Payments (Testing)
**GET** `/api/payments`

**Response:**
```json
{
  "success": true,
  "count": 5,
  "payments": [...]
}
```

### 4. Get Single Payment
**GET** `/api/payment/:payment_id`

---

## 🧪 Razorpay Test Cards

### Successful Payment:
- **Card:** 4111 1111 1111 1111
- **CVV:** 123
- **Expiry:** 12/25

### Failed Payment:
- **Card:** 4000 0000 0000 0002
- **CVV:** 123
- **Expiry:** 12/25

### UPI Test:
- **UPI ID:** success@razorpay

---

## 🔄 Switching to Live Mode

### Step 1: Get Live API Keys
1. Login to Razorpay Dashboard
2. Complete KYC verification
3. Go to Settings → API Keys
4. Generate Live API Keys

### Step 2: Update Backend .env
```env
RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_LIVE_KEY_SECRET
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
```

### Step 3: Update Frontend .env
```env
VITE_PAYMENT_API_URL=https://api.yourdomain.com
```

### Step 4: Deploy Backend
Deploy to:
- Heroku
- AWS EC2
- DigitalOcean
- Vercel (serverless)
- Railway

### Step 5: Update CORS
In `backend/server.js`, update CORS origin to your production domain.

---

## 🎨 Customization

### Change Button Color
```jsx
<PaymentButton
  buttonColor="#ff6b6b"  // Any hex color
  buttonText="Buy Now"
/>
```

### Add Loading State
The component already includes loading state with spinner.

### Custom Success/Failure Handling
```jsx
<PaymentButton
  onSuccess={(payment) => {
    // Send to analytics
    // Update database
    // Redirect to success page
    // Send confirmation email
  }}
  onFailure={(error) => {
    // Log error
    // Show custom error message
    // Retry logic
  }}
/>
```

---

## 📊 Payment Flow

```
1. User clicks "Pay Now" button
   ↓
2. Frontend calls /api/create-order
   ↓
3. Backend creates Razorpay order
   ↓
4. Backend returns order_id and key_id
   ↓
5. Frontend opens Razorpay checkout
   ↓
6. User completes payment
   ↓
7. Razorpay returns payment details
   ↓
8. Frontend calls /api/verify-payment
   ↓
9. Backend verifies signature
   ↓
10. Backend returns verification result
    ↓
11. Frontend shows success/failure message
```

---

## 🐛 Troubleshooting

### Backend not starting:
```bash
# Check if port 5000 is available
netstat -ano | findstr :5000

# Kill process if needed
taskkill /PID <PID> /F

# Restart backend
npm run dev
```

### CORS Error:
- Ensure backend FRONTEND_URL matches your React app URL
- Check if backend is running
- Verify CORS middleware is configured

### Payment not opening:
- Check browser console for errors
- Verify Razorpay script is loaded
- Check API_URL in frontend .env

### Signature verification failed:
- Ensure RAZORPAY_KEY_SECRET is correct
- Check if payment_id, order_id, signature are passed correctly

### Amount issues:
- Amount must be in rupees (not paisa) in frontend
- Backend converts to paisa automatically
- Minimum amount: ₹1

---

## 📝 Important Notes

1. **Test Mode:**
   - Use test API keys for development
   - No real money is charged
   - Use test cards only

2. **Production:**
   - Complete KYC before going live
   - Use HTTPS for production
   - Store payment records in database
   - Add webhook for payment notifications

3. **Security:**
   - Never commit .env files
   - Keep secret key secure
   - Validate all inputs
   - Use HTTPS in production

4. **Database:**
   - Current implementation uses in-memory storage
   - Replace with MongoDB/PostgreSQL for production
   - Store: order_id, payment_id, amount, status, customer details

---

## 🎯 Next Steps

1. ✅ Test payment flow with test cards
2. ✅ Integrate into product pages
3. ✅ Add payment history page
4. ✅ Set up webhooks for payment notifications
5. ✅ Add database for payment records
6. ✅ Complete Razorpay KYC
7. ✅ Switch to live mode
8. ✅ Deploy to production

---

## 📞 Support

- **Razorpay Docs:** https://razorpay.com/docs/
- **Razorpay Support:** support@razorpay.com
- **Test Dashboard:** https://dashboard.razorpay.com/test/dashboard

---

## ✅ Checklist

- [x] Backend server created
- [x] Razorpay SDK integrated
- [x] Payment verification implemented
- [x] Frontend component created
- [x] Example page created
- [x] Environment variables configured
- [x] Security measures implemented
- [x] Documentation completed

**Your Razorpay integration is ready to use! 🎉**
