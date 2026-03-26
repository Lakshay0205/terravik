# EmailJS Quick Setup Guide

## 🚀 5-Minute Setup

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for free account
3. Verify your email

### Step 2: Create Email Service
1. Go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail/Outlook/etc.
4. Connect your email account
5. Note the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Templates

Create 7 templates with these IDs:

#### Template 1: Order Success - User
- **Template ID**: `template_order_success_user`
- **Subject**: Your Order has been Placed Successfully
- **Variables**: `{{customer_name}}`, `{{product_name}}`, `{{total_amount}}`, `{{order_id}}`, `{{delivery_address}}`, `{{phone_number}}`

#### Template 2: Order Success - Admin
- **Template ID**: `template_order_success_admin`
- **Subject**: New Order Received
- **Variables**: `{{customer_name}}`, `{{customer_email}}`, `{{customer_phone}}`, `{{product_name}}`, `{{total_amount}}`, `{{order_id}}`

#### Template 3: Payment Failed
- **Template ID**: `template_payment_failed`
- **Subject**: Payment Failed
- **Variables**: `{{customer_name}}`, `{{product_name}}`, `{{attempted_amount}}`

#### Template 4: COD Order - User
- **Template ID**: `template_cod_order_user`
- **Subject**: Order Placed - Cash on Delivery
- **Variables**: Same as Template 1

#### Template 5: COD Order - Admin
- **Template ID**: `template_cod_order_admin`
- **Subject**: New COD Order Received
- **Variables**: Same as Template 2

#### Template 6: Inquiry - Admin
- **Template ID**: `template_inquiry_admin`
- **Subject**: New Inquiry Received
- **Variables**: `{{from_name}}`, `{{from_email}}`, `{{from_phone}}`, `{{product_interest}}`, `{{message}}`

#### Template 7: Inquiry - User
- **Template ID**: `template_inquiry_user`
- **Subject**: Inquiry Received
- **Variables**: `{{to_name}}`, `{{brand_name}}`, `{{product_interest}}`

### Step 4: Get Your Keys
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `LpEi-J-dSElnjj8c0`)

### Step 5: Update .env File
```env
# EmailJS Core
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here

# Inquiry Templates
VITE_EMAILJS_TEMPLATE_ID=template_inquiry_admin
VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=template_inquiry_user

# Purchase Flow Templates
VITE_EMAILJS_ORDER_SUCCESS_USER_TEMPLATE=template_order_success_user
VITE_EMAILJS_ORDER_SUCCESS_ADMIN_TEMPLATE=template_order_success_admin
VITE_EMAILJS_PAYMENT_FAILED_TEMPLATE=template_payment_failed
VITE_EMAILJS_COD_ORDER_USER_TEMPLATE=template_cod_order_user
VITE_EMAILJS_COD_ORDER_ADMIN_TEMPLATE=template_cod_order_admin

# Admin Email
VITE_RECIPIENT_EMAIL=your_admin_email@company.com
```

### Step 6: Test
1. Restart your dev server
2. Test inquiry form
3. Test checkout flow
4. Check email delivery

---

## 📧 Sample Email Templates

### Order Success - User Template
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #5a9a3c; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .details { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #5a9a3c; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Order Confirmed!</h1>
    </div>
    
    <div class="content">
      <p>Dear <strong>{{customer_name}}</strong>,</p>
      <p>Thank you for your order! Your order has been confirmed and will be delivered soon.</p>
      
      <div class="details">
        <h3>Order Details</h3>
        <p><strong>Product:</strong> {{product_name}}</p>
        <p><strong>Quantity:</strong> {{quantity}}</p>
        <p><strong>Total Amount:</strong> ₹{{total_amount}}</p>
        <p><strong>Payment Method:</strong> {{payment_method}}</p>
        <p><strong>Order ID:</strong> {{order_id}}</p>
      </div>
      
      <div class="details">
        <h3>Delivery Address</h3>
        <p>{{delivery_address}}</p>
        <p><strong>Phone:</strong> {{phone_number}}</p>
      </div>
      
      <p>Your order will be delivered within 5-7 business days.</p>
      <p>If you have any questions, please contact us.</p>
    </div>
    
    <div class="footer">
      <p>Thank you for choosing us!</p>
      <p>© 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
```

### Order Success - Admin Template
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2c5f2d; color: white; padding: 20px; }
    .content { padding: 20px; background: #f9f9f9; }
    .section { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #2c5f2d; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 New Order Received</h1>
    </div>
    
    <div class="content">
      <div class="section">
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> {{customer_name}}</p>
        <p><strong>Email:</strong> {{customer_email}}</p>
        <p><strong>Phone:</strong> {{customer_phone}}</p>
        <p><strong>Address:</strong> {{full_address}}</p>
      </div>
      
      <div class="section">
        <h3>Order Details</h3>
        <p><strong>Product:</strong> {{product_name}}</p>
        <p><strong>Quantity:</strong> {{quantity}}</p>
        <p><strong>Total:</strong> ₹{{total_amount}}</p>
        <p><strong>Payment:</strong> {{payment_method}}</p>
        <p><strong>Order ID:</strong> {{order_id}}</p>
        <p><strong>Payment ID:</strong> {{payment_id}}</p>
      </div>
      
      <p><strong>Action Required:</strong> Process this order and arrange delivery.</p>
    </div>
  </div>
</body>
</html>
```

### Payment Failed Template
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #d32f2f; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .button { display: inline-block; padding: 12px 24px; background: #5a9a3c; color: white; text-decoration: none; border-radius: 5px; margin-top: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>❌ Payment Failed</h1>
    </div>
    
    <div class="content">
      <p>Dear <strong>{{customer_name}}</strong>,</p>
      <p>Unfortunately, your payment for <strong>{{product_name}}</strong> could not be processed.</p>
      <p><strong>Amount:</strong> ₹{{attempted_amount}}</p>
      <p>Please try again or contact our support team if you continue to face issues.</p>
      <a href="#" class="button">Try Again</a>
    </div>
  </div>
</body>
</html>
```

### Inquiry - Admin Template
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2c5f2d; color: white; padding: 20px; }
    .content { padding: 20px; background: #f9f9f9; }
    .section { background: white; padding: 15px; margin: 15px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 New Inquiry Received</h1>
    </div>
    
    <div class="content">
      <div class="section">
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> {{from_name}}</p>
        <p><strong>Email:</strong> {{from_email}}</p>
        <p><strong>Phone:</strong> {{from_phone}}</p>
        <p><strong>Product Interest:</strong> {{product_interest}}</p>
      </div>
      
      <div class="section">
        <h3>Message</h3>
        <p>{{message}}</p>
      </div>
      
      <p><strong>Action Required:</strong> Follow up with this inquiry within 24 hours.</p>
    </div>
  </div>
</body>
</html>
```

### Inquiry - User Template
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #5a9a3c; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Inquiry Received</h1>
    </div>
    
    <div class="content">
      <p>Dear <strong>{{to_name}}</strong>,</p>
      <p>Thank you for your interest in <strong>{{product_interest}}</strong>!</p>
      <p>We have received your inquiry and our team will contact you within 24 hours.</p>
      <p>If you have any urgent questions, please call us directly.</p>
      <p>Best regards,<br><strong>{{brand_name}}</strong></p>
    </div>
  </div>
</body>
</html>
```

---

## ✅ Verification Checklist

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] All 7 templates created
- [ ] Template IDs match .env file
- [ ] Public key added to .env
- [ ] Service ID added to .env
- [ ] Admin email configured
- [ ] Dev server restarted
- [ ] Inquiry form tested
- [ ] Checkout flow tested
- [ ] Emails received successfully

---

## 🐛 Troubleshooting

### Emails not sending
1. Check console for errors
2. Verify .env variables loaded
3. Check EmailJS dashboard for errors
4. Verify template IDs are correct

### Wrong data in emails
1. Check template variables match code
2. Review emailService.js data mapping
3. Test with console.log

### Emails in spam
1. Use verified sender email
2. Configure SPF/DKIM in EmailJS
3. Avoid spam trigger words

---

## 📞 Support

For issues:
1. Check EmailJS dashboard
2. Review console errors
3. Verify environment variables
4. Test with EmailJS playground

---

**Quick Start Time**: ~15 minutes
**Status**: Ready to use
