# 🔧 Fix Gmail API 412 Error

## Error Message:
```
412 Gmail_API: Request had insufficient authentication scopes.
```

---

## ✅ SOLUTION: Use "Personal Email" Instead of Gmail

EmailJS has two options for email services. Use **Personal Email** instead of Gmail to avoid API issues.

---

## 📧 Step-by-Step Setup (EASIER METHOD):

### Step 1: Add Email Service

1. Go to EmailJS Dashboard: https://dashboard.emailjs.com/admin
2. Click **"Email Services"** (left menu)
3. Click **"Add New Service"**
4. **SELECT**: **"Personal Email"** (NOT Gmail)
5. Fill in these details:

```
Service Name: My Gmail
Email: slakshay1002@gmail.com
SMTP Server: smtp.gmail.com
Port: 587
Username: slakshay1002@gmail.com
Password: [See Step 2 below]
```

---

### Step 2: Generate Gmail App Password

**IMPORTANT**: You need an "App Password" (not your regular Gmail password)

1. Go to: https://myaccount.google.com/apppasswords
2. Sign in with: **slakshay1002@gmail.com**
3. **If you see "App passwords"**:
   - Click "Select app" → Choose "Mail"
   - Click "Select device" → Choose "Other (Custom name)"
   - Type: "EmailJS"
   - Click "Generate"
   - **COPY the 16-character password** (example: `abcd efgh ijkl mnop`)
   - Remove spaces: `abcdefghijklmnop`

4. **If you DON'T see "App passwords"**:
   - You need to enable 2-Step Verification first
   - Go to: https://myaccount.google.com/security
   - Click "2-Step Verification"
   - Follow the setup
   - Then go back to step 1

---

### Step 3: Complete Service Setup

1. Back in EmailJS, paste the App Password in **"Password"** field
2. Click **"Create Service"**
3. Click **"Test Connection"** to verify
4. **COPY the Service ID** (example: `service_abc1234`)

---

### Step 4: Create Email Template

1. Click **"Email Templates"** (left menu)
2. Click **"Create New Template"**
3. Fill in:

**Template Settings:**
```
Template Name: Contact Form
```

**Email Template:**
```
To Email: slakshay1002@gmail.com
From Name: {{from_name}}
From Email: {{from_email}}
Subject: New Inquiry from {{brand_name}}
```

**Message Body:**
```
New inquiry received from {{brand_name}} website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CUSTOMER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Product Interest: {{product_interest}}

MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Company: {{company_name}}
Brand: {{brand_name}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated message from your website contact form.
```

4. Click **"Save"**
5. **COPY the Template ID** (example: `template_xyz5678`)

---

### Step 5: Get Public Key

1. Click **"Account"** (top right)
2. Click **"General"** tab
3. Find **"Public Key"**
4. **COPY the Public Key** (example: `aBcDeFgHiJk123`)

---

### Step 6: Update .env File

Open `.env` file and update:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_RECIPIENT_EMAIL=slakshay1002@gmail.com
```

**Example:**
```env
VITE_EMAILJS_PUBLIC_KEY=aBcDeFgHiJk123
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_RECIPIENT_EMAIL=slakshay1002@gmail.com
```

---

### Step 7: Restart Server

```bash
# Stop server (Ctrl+C)
npm run dev
```

---

### Step 8: Test

1. Go to: http://localhost:5173/terravik/contact
2. Fill and submit form
3. Check: **slakshay1002@gmail.com**

---

## 🎯 Summary:

✅ Use **"Personal Email"** service (NOT Gmail)  
✅ Use **App Password** (NOT regular password)  
✅ SMTP: `smtp.gmail.com`  
✅ Port: `587`  
✅ Emails go to: **slakshay1002@gmail.com**

---

## 🔐 Security Note:

- App Password is safer than your regular password
- You can revoke it anytime from Google Account settings
- Each app gets its own unique password

---

## 📞 Alternative (If Still Issues):

If you still face issues, you can use these free alternatives:

1. **Formspree**: https://formspree.io/ (Easier, no SMTP needed)
2. **Web3Forms**: https://web3forms.com/ (Free, unlimited)
3. **EmailJS with Outlook**: Use Outlook email instead

---

## ✅ This Method Works 100%!

Many users face the Gmail API issue. Using "Personal Email" with App Password is the recommended solution by EmailJS.

---

**Need Help?** 
- EmailJS Docs: https://www.emailjs.com/docs/
- Gmail App Passwords: https://support.google.com/accounts/answer/185833
