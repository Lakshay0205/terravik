# 🚀 QUICK START - EmailJS Setup (5 Minutes)

## 📧 Emails will be sent to: slakshay1002@gmail.com

---

## Step 1: Create EmailJS Account (1 min)

1. Go to: **https://dashboard.emailjs.com/sign-up**
2. Sign up with: **slakshay1002@gmail.com**
3. Verify your email

---

## Step 2: Add Gmail Service (2 min)

1. Click **"Email Services"** in left menu
2. Click **"Add New Service"** button
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Login with: **slakshay1002@gmail.com**
6. Click **"Allow"** to give permissions
7. **COPY THIS**: Service ID (example: `service_abc1234`)

---

## Step 3: Create Template (1 min)

1. Click **"Email Templates"** in left menu
2. Click **"Create New Template"**
3. **Template Name**: Contact Form
4. **To Email**: slakshay1002@gmail.com
5. **Subject**: New Inquiry from {{brand_name}}
6. **Content**: (paste this)

```
New inquiry received!

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Product: {{product_interest}}

Message:
{{message}}

---
From: {{brand_name}}
Company: {{company_name}}
```

7. Click **"Save"**
8. **COPY THIS**: Template ID (example: `template_xyz5678`)

---

## Step 4: Get Public Key (30 sec)

1. Click **"Account"** (top right)
2. Click **"General"** tab
3. Find **"Public Key"** section
4. **COPY THIS**: Public Key (example: `aBcDeFgHiJk123`)

---

## Step 5: Update .env File (30 sec)

Open `.env` file and replace with YOUR values:

```env
VITE_EMAILJS_PUBLIC_KEY=paste_your_public_key_here
VITE_EMAILJS_SERVICE_ID=paste_your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=paste_your_template_id_here
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

## Step 6: Restart Server (10 sec)

```bash
# Press Ctrl+C to stop server
# Then run:
npm run dev
```

---

## Step 7: Test It! (30 sec)

1. Go to: http://localhost:5173/terravik/contact
2. Fill the form
3. Click "Send Message"
4. Check: **slakshay1002@gmail.com** inbox

---

## ✅ DONE!

All inquiries will now arrive at: **slakshay1002@gmail.com**

---

## 🔧 Troubleshooting:

### Still getting error?
- Make sure you **restarted the server** after updating `.env`
- Check that all 3 IDs are correct (no spaces, no quotes)
- Verify Gmail service is connected in EmailJS dashboard

### Email not received?
- Check **spam/junk** folder
- Wait 1-2 minutes (sometimes delayed)
- Check EmailJS dashboard for logs

---

## 📞 Contact Details in Error Message:

If EmailJS is not configured, users will see:
- Email: **slakshay1002@gmail.com**
- Phone: **9008383900**

So they can still contact you directly! ✅
