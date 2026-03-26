# 📧 EmailJS Setup Instructions

## Recipient Email: slakshay1002@gmail.com

Follow these steps to receive contact form submissions:

---

## Step 1: Create EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click "Sign Up" (top right)
3. Sign up with any email (can use slakshay1002@gmail.com)
4. Verify your email

---

## Step 2: Add Gmail Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with: **slakshay1002@gmail.com**
6. Allow EmailJS permissions
7. Copy the **Service ID** (looks like: `service_abc123`)

---

## Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set **Template Name**: "Contact Form Submission"
4. Set **Subject**: `New Contact Form - {{brand_name}}`
5. Set **Content** (copy this exactly):

```
Hello,

You have received a new contact form submission from {{brand_name}} website.

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
Submitted from: {{brand_name}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated message from your website contact form.
```

6. Set **To Email**: `slakshay1002@gmail.com`
7. Click **"Save"**
8. Copy the **Template ID** (looks like: `template_xyz789`)

---

## Step 4: Get Public Key

1. Go to **"Account"** (top right)
2. Click **"General"**
3. Find **"Public Key"** section
4. Copy the **Public Key** (looks like: `aBcDeFgHiJkLmNoPqR`)

---

## Step 5: Update .env File

Open the `.env` file in your project and replace the values:

```env
VITE_EMAILJS_PUBLIC_KEY=paste_your_public_key_here
VITE_EMAILJS_SERVICE_ID=paste_your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=paste_your_template_id_here
VITE_RECIPIENT_EMAIL=slakshay1002@gmail.com
```

**Example:**
```env
VITE_EMAILJS_PUBLIC_KEY=aBcDeFgHiJkLmNoPqR
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_RECIPIENT_EMAIL=slakshay1002@gmail.com
```

---

## Step 6: Restart Development Server

After updating `.env` file:

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

---

## Step 7: Test the Form

1. Go to Contact page: `http://localhost:5173/terravik/contact`
2. Fill out the form
3. Click "Send Message"
4. Check your Gmail: **slakshay1002@gmail.com**

---

## 🎉 Done!

All contact form submissions will now be sent to: **slakshay1002@gmail.com**

---

## 📝 Notes:

- **Free Plan**: 200 emails/month
- **Emails arrive instantly** (usually within seconds)
- **Check spam folder** if you don't see emails
- **Template variables** are automatically filled from the form

---

## 🔧 Troubleshooting:

### Email not received?
1. Check spam/junk folder
2. Verify Service ID, Template ID, and Public Key are correct
3. Make sure you restarted the dev server after updating `.env`
4. Check EmailJS dashboard for error logs

### Form shows error?
1. Check browser console for errors
2. Verify all `.env` values are set
3. Make sure Gmail service is connected in EmailJS

---

## 📧 Email Preview:

When someone submits the form, you'll receive:

**Subject:** New Contact Form - TerraVik

**Body:**
```
Hello,

You have received a new contact form submission from TerraVik website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CUSTOMER DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: John Doe
Email: john@example.com
Phone: 9876543210
Product Interest: TerraVik Liquid Gold

MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I'm interested in purchasing Liquid Gold for my home garden.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Company: Jaivik Vikalp Urja LLP
Submitted from: TerraVik

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated message from your website contact form.
```

---

**Need Help?** Contact EmailJS support: https://www.emailjs.com/docs/
