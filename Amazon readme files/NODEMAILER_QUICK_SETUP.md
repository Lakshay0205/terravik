# Nodemailer Quick Setup Guide

## 🚀 5-Minute Setup

### Step 1: Install Nodemailer
```bash
cd backend
npm install nodemailer
```

### Step 2: Get Gmail App Password
1. Go to https://myaccount.google.com/
2. Click "Security"
3. Enable "2-Step Verification" (if not already enabled)
4. Go back to Security
5. Click "App passwords"
6. Select "Mail" and "Other (Custom name)"
7. Enter "Agro Website Backend"
8. Click "Generate"
9. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

### Step 3: Update Backend .env
```env
# Email Configuration (Gmail SMTP)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
ADMIN_EMAIL=slakshay1002@gmail.com

# Company Information
COMPANY_NAME=TerraVik
COMPANY_PHONE=9008383900
```

### Step 4: Remove EmailJS from Frontend
```bash
cd ..
npm uninstall emailjs-com
```

### Step 5: Update Frontend .env
```env
# Remove all EmailJS variables, keep only:
VITE_PAYMENT_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Step 6: Start Backend
```bash
cd backend
npm run dev
```

### Step 7: Test
1. Start frontend: `npm run dev`
2. Test inquiry form
3. Check email delivery

---

## ✅ Verification Checklist

- [ ] Nodemailer installed in backend
- [ ] Gmail App Password generated
- [ ] Backend .env updated with email credentials
- [ ] emailjs-com removed from frontend
- [ ] Frontend .env cleaned up
- [ ] Backend server running
- [ ] Test email sent successfully

---

## 🧪 Quick Test

### Test Inquiry Email
1. Go to Contact page
2. Fill inquiry form
3. Submit
4. Check admin email inbox
5. Check customer email inbox

### Test Order Email
1. Go to product page
2. Click "Buy Now"
3. Fill checkout form
4. Complete payment (test mode)
5. Check both email inboxes

---

## 🐛 Quick Troubleshooting

### "Invalid login" error
- Use App Password, not regular password
- Ensure 2FA is enabled
- Generate new App Password

### Emails not sending
- Check EMAIL_USER and EMAIL_PASSWORD in .env
- Restart backend server
- Check backend console for errors

### Emails in spam
- Mark as "Not Spam" once
- Use verified Gmail account
- Check email content

---

## 📧 Email Templates Included

1. **Order Confirmation** (Customer)
2. **New Order Notification** (Admin)
3. **Payment Failure** (Customer)
4. **Inquiry Confirmation** (Customer)
5. **New Inquiry** (Admin)

All templates are:
- ✅ Responsive HTML
- ✅ Professional design
- ✅ Dynamic data injection
- ✅ Mobile-friendly

---

## 🎯 What Changed

### Removed
- ❌ EmailJS dependency
- ❌ EmailJS configuration
- ❌ Frontend email templates
- ❌ EmailJS API calls

### Added
- ✅ Nodemailer backend utility
- ✅ Backend email endpoints
- ✅ HTML email templates in backend
- ✅ Gmail SMTP integration

---

## 📊 System Flow

```
Old (EmailJS):
Frontend → EmailJS API → Email

New (Nodemailer):
Frontend → Backend API → Nodemailer → Gmail SMTP → Email
```

---

## 🎉 Benefits

✅ **No EmailJS account needed**
✅ **Full control over emails**
✅ **Backend security**
✅ **Production-ready**
✅ **Free with Gmail**
✅ **Unlimited customization**

---

**Setup Time**: ~5 minutes
**Status**: Ready to use
