# EmailJS Template Content

## Template Name
`contact_form_template`

## Template Subject
New Inquiry from {{brand_name}} - {{from_name}}

## Template Body (HTML Format)

Copy and paste this EXACT content into your EmailJS template editor:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #5a9a3c 0%, #9ccc65 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border: 1px solid #e0e0e0;
        }
        .field {
            margin-bottom: 20px;
            padding: 15px;
            background: white;
            border-radius: 8px;
            border-left: 4px solid #5a9a3c;
        }
        .field-label {
            font-weight: bold;
            color: #5a9a3c;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
        }
        .field-value {
            color: #333;
            font-size: 16px;
            word-wrap: break-word;
        }
        .message-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
            margin-top: 20px;
        }
        .footer {
            background: #333;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 0 0 10px 10px;
            font-size: 12px;
        }
        .divider {
            height: 1px;
            background: #e0e0e0;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🌾 New Customer Inquiry</h1>
        <p style="margin: 10px 0 0 0; font-size: 14px;">{{brand_name}} Website Contact Form</p>
    </div>
    
    <div class="content">
        <p style="font-size: 16px; margin-bottom: 25px;">
            You have received a new inquiry from your website. Here are the details:
        </p>
        
        <div class="field">
            <div class="field-label">👤 Customer Name</div>
            <div class="field-value">{{from_name}}</div>
        </div>
        
        <div class="field">
            <div class="field-label">📧 Email Address</div>
            <div class="field-value">{{from_email}}</div>
        </div>
        
        <div class="field">
            <div class="field-label">📱 Phone Number</div>
            <div class="field-value">{{from_phone}}</div>
        </div>
        
        <div class="field">
            <div class="field-label">🌱 Product of Interest</div>
            <div class="field-value">{{product_interest}}</div>
        </div>
        
        <div class="field">
            <div class="field-label">📍 Address</div>
            <div class="field-value">{{address}}</div>
        </div>
        
        <div class="divider"></div>
        
        <div class="message-box">
            <div class="field-label" style="margin-bottom: 10px;">💬 Customer Message</div>
            <div class="field-value" style="white-space: pre-wrap;">{{message}}</div>
        </div>
        
        <div class="divider"></div>
        
        <p style="font-size: 14px; color: #666; margin-top: 25px;">
            <strong>Company:</strong> {{company_name}}<br>
            <strong>Brand:</strong> {{brand_name}}<br>
            <strong>Submitted:</strong> {{reply_to}}
        </p>
    </div>
    
    <div class="footer">
        <p style="margin: 0;">This email was sent from {{brand_name}} contact form</p>
        <p style="margin: 10px 0 0 0; opacity: 0.8;">
            Please respond to the customer at: {{from_email}}
        </p>
    </div>
</body>
</html>
```

---

## Alternative: Plain Text Template (Simpler Version)

If you prefer a simpler plain text format, use this instead:

```
New Customer Inquiry from {{brand_name}}
==========================================

CUSTOMER DETAILS:
-----------------
Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Product Interest: {{product_interest}}
Address: {{address}}

CUSTOMER MESSAGE:
-----------------
{{message}}

==========================================
Company: {{company_name}}
Brand: {{brand_name}}
Submitted via: {{brand_name}} Website Contact Form

Please respond to the customer at: {{from_email}}
```

---

## Template Variables Used

Make sure these variables are available in your template:

- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email address
- `{{from_phone}}` - Customer's phone number
- `{{product_interest}}` - Selected product
- `{{address}}` - Customer's address
- `{{message}}` - Customer's message
- `{{brand_name}}` - Brand name (TerraVik or Hawai Agro)
- `{{company_name}}` - Company name (Jaivik Vikalp Urja LLP)
- `{{reply_to}}` - Reply-to email (automatically added by EmailJS)

---

## How to Add This Template to EmailJS

1. **Login to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Go to Email Templates**: Click on "Email Templates" in the left sidebar
3. **Create New Template**: Click "Create New Template" button
4. **Template Name**: Enter `contact_form_template`
5. **Subject Line**: Enter `New Inquiry from {{brand_name}} - {{from_name}}`
6. **Content**: 
   - Switch to "HTML" mode (toggle in top right)
   - Paste the HTML template content above
7. **From Name**: Enter `{{brand_name}} Website`
8. **From Email**: Use your verified email (e.g., slakshay1002@gmail.com)
9. **Reply To**: Enter `{{from_email}}` (so you can reply directly to customer)
10. **Save Template**: Click "Save" button

---

## Testing Your Template

After creating the template:

1. Click "Test It" button in EmailJS dashboard
2. Fill in sample values for all variables
3. Send test email to verify formatting
4. Check your inbox (slakshay1002@gmail.com)
5. Verify all fields display correctly

---

## Important Notes

✅ The HTML template is styled and professional
✅ All form fields are included (name, email, phone, product, address, message)
✅ Brand name and company name are displayed
✅ Reply-to is set to customer's email for easy responses
✅ Mobile-friendly and responsive design
✅ Clear visual hierarchy with color coding

---

## Troubleshooting

**If variables don't show up:**
- Make sure variable names match exactly (case-sensitive)
- Check that you're passing all variables from Contact.jsx
- Verify EmailJS service is properly configured

**If email doesn't send:**
- Check .env file has correct credentials
- Verify email service is active in EmailJS dashboard
- Check browser console for error messages

**If formatting looks wrong:**
- Make sure you're in HTML mode, not plain text
- Copy the entire HTML template including DOCTYPE
- Clear browser cache and try again
