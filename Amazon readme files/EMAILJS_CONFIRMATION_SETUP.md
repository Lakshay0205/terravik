# EmailJS Setup Guide - With User Confirmation Email

## Overview
The contact form now sends TWO emails:
1. **To Company** - Notification about new inquiry
2. **To User** - Confirmation that their message was received

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your email account
5. Note down the **Service ID**

### 3. Create Template #1 - Company Notification

**Template Name:** Contact Form Submission

**Template ID:** Save this for `.env` file

**Subject:** 
```
New Contact Form Submission from {{brand_name}}
```

**Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2d5016 0%, #7cb342 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2d5016; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #7cb342; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🌿 New Contact Form Submission</h2>
            <p>From: {{brand_name}} Website</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value">{{from_phone}}</div>
            </div>
            
            <div class="field">
                <div class="label">🎯 Product Interest:</div>
                <div class="value">{{product_interest}}</div>
            </div>
            
            <div class="field">
                <div class="label">📍 Address:</div>
                <div class="value">{{address}}</div>
            </div>
            
            <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">{{message}}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was sent from {{company_name}} contact form</p>
            <p>Submitted on: {{current_date}}</p>
        </div>
    </div>
</body>
</html>
```

**To Email:** 
```
slakshay1002@gmail.com
```

### 4. Create Template #2 - User Confirmation

**Template Name:** Contact Form Confirmation

**Template ID:** Save this for `.env` file as `VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID`

**Subject:**
```
Thank you for contacting {{brand_name}} - We've received your message!
```

**Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2d5016 0%, #7cb342 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
        .message-box { background: white; padding: 20px; border-left: 4px solid #7cb342; margin: 20px 0; }
        .info-box { background: #e8f5e9; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .contact-info { margin: 20px 0; }
        .contact-item { margin: 10px 0; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; background: #f5f5f5; border-radius: 0 0 8px 8px; }
        .button { display: inline-block; padding: 12px 30px; background: #7cb342; color: white; text-decoration: none; border-radius: 6px; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✅ Message Received!</h1>
            <p style="font-size: 18px; margin-top: 10px;">Thank you for contacting {{brand_name}}</p>
        </div>
        
        <div class="content">
            <p>Dear <strong>{{to_name}}</strong>,</p>
            
            <p>Thank you for reaching out to us! We have successfully received your inquiry and our team will review it shortly.</p>
            
            <div class="info-box">
                <p style="margin: 0;"><strong>📋 Your Inquiry Details:</strong></p>
                <p style="margin: 10px 0 0 0;">Product Interest: <strong>{{product_interest}}</strong></p>
            </div>
            
            <div class="message-box">
                <p style="margin: 0; color: #666; font-size: 14px;"><strong>Your Message:</strong></p>
                <p style="margin: 10px 0 0 0;">{{user_message}}</p>
            </div>
            
            <p><strong>What happens next?</strong></p>
            <ul>
                <li>Our team will review your inquiry within 24 hours</li>
                <li>We'll contact you via email or phone to discuss your requirements</li>
                <li>You'll receive personalized recommendations based on your needs</li>
            </ul>
            
            <div class="contact-info">
                <p><strong>Need immediate assistance?</strong></p>
                <div class="contact-item">📞 Phone: <strong>{{company_phone}}</strong></div>
                <div class="contact-item">📧 Email: <strong>{{company_email}}</strong></div>
            </div>
            
            <p style="margin-top: 30px;">We look forward to serving you!</p>
            <p style="margin-top: 20px;">Best regards,<br><strong>{{company_name}} Team</strong></p>
        </div>
        
        <div class="footer">
            <p><strong>{{brand_name}}</strong> - {{company_name}}</p>
            <p>This is an automated confirmation email. Please do not reply to this email.</p>
            <p style="margin-top: 10px; font-size: 11px;">If you did not submit this form, please contact us immediately.</p>
        </div>
    </div>
</body>
</html>
```

**To Email:**
```
{{to_email}}
```

### 5. Update Environment Variables

Create or update `.env` file in project root:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_company_template_id_here
VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=your_confirmation_template_id_here
```

### 6. Get Your Public Key
1. Go to **Account** in EmailJS dashboard
2. Find **Public Key** (also called API Key)
3. Copy and paste into `.env` file

### 7. Test the Setup

1. Restart your development server:
```bash
npm run dev
```

2. Fill out the contact form
3. Submit the form
4. Check:
   - ✅ Company email (slakshay1002@gmail.com) receives inquiry
   - ✅ User receives confirmation email
   - ✅ Success message shows on website

## Email Flow

```
User Submits Form
       ↓
   Validation
       ↓
   ┌─────────────────┐
   │  Send Email #1  │ → Company (slakshay1002@gmail.com)
   │  (Inquiry)      │    "New Contact Form Submission"
   └─────────────────┘
       ↓
   ┌─────────────────┐
   │  Send Email #2  │ → User (their email)
   │  (Confirmation) │    "Thank you for contacting us"
   └─────────────────┘
       ↓
   Success Message
```

## Template Variables Reference

### Company Notification Template
- `{{brand_name}}` - TerraVik or Hawai Agro
- `{{company_name}}` - Jaivik Vikalp Urja LLP
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{from_phone}}` - User's phone
- `{{product_interest}}` - Selected product
- `{{address}}` - User's address
- `{{message}}` - User's message

### User Confirmation Template
- `{{to_email}}` - User's email (auto-filled)
- `{{to_name}}` - User's name
- `{{brand_name}}` - TerraVik or Hawai Agro
- `{{company_name}}` - Jaivik Vikalp Urja LLP
- `{{company_phone}}` - 9008383900
- `{{company_email}}` - Brand-specific email
- `{{product_interest}}` - Selected product
- `{{user_message}}` - User's message

## Troubleshooting

### Confirmation Email Not Sending
- Check if `VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID` is set in `.env`
- Verify template ID is correct in EmailJS dashboard
- Check browser console for errors
- Note: Main email will still send even if confirmation fails

### Both Emails Not Sending
- Verify all environment variables are set correctly
- Check EmailJS service is active
- Ensure email service is connected properly
- Check monthly email quota (free tier: 200 emails/month)

### User Not Receiving Confirmation
- Check spam/junk folder
- Verify email address is correct
- Check EmailJS logs in dashboard
- Ensure template has `{{to_email}}` in "To Email" field

## Free Tier Limits

EmailJS Free Tier:
- ✅ 200 emails per month
- ✅ 2 email services
- ✅ Unlimited templates
- ✅ Basic support

**Note:** Each form submission = 2 emails (company + user confirmation)
So 200 emails = 100 form submissions per month

## Security Notes

- ✅ Never commit `.env` file to Git
- ✅ Add `.env` to `.gitignore`
- ✅ Use environment variables for all sensitive data
- ✅ EmailJS public key is safe to expose (it's meant to be public)
- ✅ Email addresses are validated before sending

## Success Message

After successful submission, user sees:
```
✅ Message sent successfully!
We've sent a confirmation email to [user's email]. 
We'll get back to you soon.
```

## Benefits of Confirmation Email

1. ✅ **User Assurance** - User knows their message was received
2. ✅ **Professional Image** - Shows company is organized
3. ✅ **Reference** - User has email record of their inquiry
4. ✅ **Contact Info** - User has company details for follow-up
5. ✅ **Reduces Anxiety** - User doesn't wonder if form worked

## Next Steps

1. Set up EmailJS account
2. Create both templates
3. Add environment variables
4. Test the form
5. Monitor EmailJS dashboard for submissions

---

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
