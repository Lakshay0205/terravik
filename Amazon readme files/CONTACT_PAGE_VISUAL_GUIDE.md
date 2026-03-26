# Contact Page - Visual Guide & Code Examples

## Page Layout Overview

```
┌─────────────────────────────────────────────────────────┐
│                    HEADER SECTION                        │
│  "Get In Touch"                                         │
│  "Have questions about our products?..."               │
├─────────────────────────────────────────────────────────┤
│              MAIN CONTACT SECTION (3-COLUMN)            │
│  ┌──────────────┐  ┌──────────────────────────────────┐ │
│  │ CONTACT INFO │  │      INQUIRY FORM                │ │
│  │              │  │                                  │ │
│  │ Company Name │  │ [Full Name]                      │ │
│  │ 📍 Location  │  │ [Email Address]                  │ │
│  │ 📞 Phone     │  │ [Phone Number]                   │ │
│  │ ✉️ Email     │  │ [Product Dropdown]               │ │
│  │ 🕐 Hours     │  │ [Message Textarea]               │ │
│  │ Follow Us    │  │ [Error/Success Message]          │ │
│  │ 📘📷🐦💼    │  │ [Submit Button]                  │ │
│  └──────────────┘  └──────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│                   LOCATION SECTION                       │
│  "Visit Us"                                             │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ 📍 Location Map Placeholder                         │ │
│  │ Near Hussainpur, Tehsil Bilari                      │ │
│  │ Moradabad, Uttar Pradesh                            │ │
│  └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│                   FAQ SECTION (2-COLUMN)                │
│  "Frequently Asked Questions"                           │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ Q: Response time?│  │ Q: Delivery?     │            │
│  │ A: 24 hours      │  │ A: Multiple opts │            │
│  └──────────────────┘  └──────────────────┘            │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ Q: Bulk discount?│  │ Q: Returns?      │            │
│  │ A: Yes, contact  │  │ A: 30-day policy │            │
│  └──────────────────┘  └──────────────────┘            │
├─────────────────────────────────────────────────────────┤
│              CALL-TO-ACTION SECTION                      │
│  "Ready to Get Started?"                                │
│  "Fill out the form or call us directly"               │
│  [📞 Call Us] [✉️ Email Us]                            │
└─────────────────────────────────────────────────────────┘
```

## Contact Information Card

```
┌─────────────────────────────────┐
│ CONTACT INFORMATION             │
├─────────────────────────────────┤
│ COMPANY                         │
│ Jaivik Vikalp Urja LLP          │
│                                 │
│ 📍 LOCATION                     │
│ Near Hussainpur, Tehsil Bilari  │
│ Moradabad, Uttar Pradesh        │
│                                 │
│ 📞 PHONE                        │
│ 9008383900 (clickable)          │
│                                 │
│ ✉️ EMAIL                        │
│ info@terravik.com (clickable)   │
│                                 │
│ 🕐 BUSINESS HOURS               │
│ Weekdays: 9:00 AM - 6:00 PM    │
│ Saturday: 10:00 AM - 4:00 PM   │
│ Sunday: Closed                  │
│                                 │
│ FOLLOW US                       │
│ 📘 📷 🐦 💼                     │
└─────────────────────────────────┘
```

## Inquiry Form Card

```
┌─────────────────────────────────────────┐
│ SEND US A MESSAGE                       │
├─────────────────────────────────────────┤
│ Full Name *                             │
│ [John Doe                            ]  │
│                                         │
│ Email Address *                         │
│ [john@example.com                    ]  │
│                                         │
│ Phone Number *                          │
│ [9876543210                          ]  │
│                                         │
│ Product of Interest *                   │
│ [Select a product...                 ▼] │
│                                         │
│ Message *                               │
│ [Tell us about your inquiry...       ]  │
│ [                                    ]  │
│ [                                    ]  │
│                                         │
│ [⚠️ Error Message (if any)]             │
│ [✅ Success Message (if any)]           │
│                                         │
│ [📧 Send Message]                       │
│                                         │
│ * All fields are required               │
└─────────────────────────────────────────┘
```

## Code Examples

### Example 1: Setup EmailJS

```javascript
// In .env file
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here

// In Contact.jsx
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    to_email: companyDetails.email,
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    product_interest: formData.productInterest,
    message: formData.message,
    brand_name: brand.name,
    company_name: companyDetails.name,
  }
);
```

### Example 2: Form Validation

```javascript
const validateForm = () => {
  if (!formData.name.trim()) {
    setError('Name is required');
    return false;
  }
  if (!formData.email.trim()) {
    setError('Email is required');
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    setError('Please enter a valid email');
    return false;
  }
  if (!formData.phone.trim()) {
    setError('Phone number is required');
    return false;
  }
  if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
    setError('Please enter a valid 10-digit phone number');
    return false;
  }
  if (!formData.productInterest) {
    setError('Please select a product of interest');
    return false;
  }
  if (!formData.message.trim()) {
    setError('Message is required');
    return false;
  }
  return true;
};
```

### Example 3: Handle Form Submission

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }

  setLoading(true);
  setError(null);

  try {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        to_email: companyDetails.email,
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        product_interest: formData.productInterest,
        message: formData.message,
        brand_name: brand.name,
        company_name: companyDetails.name,
      }
    );

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      productInterest: '',
      message: '',
    });
    
    setTimeout(() => setSubmitted(false), 5000);
  } catch (error) {
    console.error('Error sending email:', error);
    setError('Failed to send message. Please try again or contact us directly.');
  } finally {
    setLoading(false);
  }
};
```

### Example 4: Customize Company Details

```javascript
// In Contact.jsx
const companyDetails = {
  name: 'Your Company Name',
  location: 'Your Location Address',
  phone: 'Your Phone Number',
  email: brandId === 'terravik' ? 'info@terravik.com' : 'info@hawaiagro.com',
};
```

### Example 5: Add Custom Product Options

```javascript
// In Contact.jsx
const productOptions = brandId === 'terravik'
  ? [
      'Liquid Gold',
      'Premium Soil Mix',
      'Organic Compost',
      'Bio Stimulant',
      'Custom Product 1',
      'Custom Product 2',
      'General Inquiry',
    ]
  : [
      'Fermented Organic Manure',
      'Bio Fertilizer',
      'Neem Oil Extract',
      'Vermicompost',
      'Custom Product 1',
      'Custom Product 2',
      'General Inquiry',
    ];
```

## Responsive Behavior

### Mobile (< 640px)
```
┌─────────────────┐
│   Header        │
├─────────────────┤
│ Contact Info    │
│ (Full Width)    │
├─────────────────┤
│ Inquiry Form    │
│ (Full Width)    │
├─────────────────┤
│ Location        │
│ (Full Width)    │
├─────────────────┤
│ FAQ 1           │
├─────────────────┤
│ FAQ 2           │
├─────────────────┤
│ FAQ 3           │
├─────────────────┤
│ FAQ 4           │
├─────────────────┤
│ CTA             │
└─────────────────┘
```

### Tablet (640-1024px)
```
┌──────────────────────────────┐
│         Header               │
├──────────────────────────────┤
│ Contact Info | Inquiry Form  │
│ (1 col)      | (1 col)       │
├──────────────────────────────┤
│ Location (Full Width)        │
├──────────────────────────────┤
│ FAQ 1 | FAQ 2                │
│ FAQ 3 | FAQ 4                │
├──────────────────────────────┤
│ CTA (Full Width)             │
└──────────────────────────────┘
```

### Desktop (> 1024px)
```
┌────────────────────────────────────────┐
│              Header                    │
├────────────────────────────────────────┤
│ Contact | Inquiry Form | Inquiry Form  │
│ Info    | (continues)  | (continues)   │
├────────────────────────────────────────┤
│ Location (Full Width)                  │
├────────────────────────────────────────┤
│ FAQ 1 | FAQ 2 | FAQ 3 | FAQ 4          │
├────────────────────────────────────────┤
│ CTA (Full Width)                       │
└────────────────────────────────────────┘
```

## Animation Sequences

### Form Entry Animation
```
1. Page loads
   - Form opacity: 0 → 1
   - Form y position: 20px → 0
   - Duration: 0.5s
   - Easing: ease-out

2. Form fields stagger
   - Each field delays 0.1s
   - Creates cascading effect
```

### Error Message Animation
```
1. Validation fails
   - Error opacity: 0 → 1
   - Error y position: -10px → 0
   - Duration: 0.3s
   - Easing: ease-out

2. User corrects field
   - Error opacity: 1 → 0
   - Error y position: 0 → -10px
   - Duration: 0.3s
   - Easing: ease-in
```

### Success Message Animation
```
1. Form submitted successfully
   - Success opacity: 0 → 1
   - Success y position: -10px → 0
   - Duration: 0.3s
   - Easing: ease-out

2. After 5 seconds
   - Success opacity: 1 → 0
   - Success y position: 0 → -10px
   - Duration: 0.3s
   - Easing: ease-in
```

### Button Hover Animation
```
1. Mouse enters button
   - Button scale: 1 → 1.02
   - Duration: 0.3s

2. Mouse leaves button
   - Button scale: 1.02 → 1
   - Duration: 0.3s

3. Mouse clicks button
   - Button scale: 1 → 0.98
   - Duration: 0.2s
```

## Form Submission Flow

```
User Fills Form
    ↓
User Clicks Submit
    ↓
Validate Form
    ├─ Invalid → Show Error Message → User Corrects
    └─ Valid → Continue
    ↓
Show "Sending..." State
    ↓
Send Email via EmailJS
    ├─ Success → Show Success Message
    │           Reset Form
    │           Auto-hide after 5s
    └─ Error → Show Error Message
    ↓
Enable Form Again
```

## Testing Scenarios

### Scenario 1: Valid Form Submission
1. User fills all fields correctly
2. User clicks "Send Message"
3. Button shows "Sending..."
4. Email is sent successfully
5. Success message displays
6. Form resets
7. Success message auto-hides

### Scenario 2: Invalid Email
1. User enters invalid email
2. User clicks "Send Message"
3. Error message: "Please enter a valid email"
4. Form doesn't submit
5. User corrects email
6. Error clears

### Scenario 3: Invalid Phone
1. User enters invalid phone (not 10 digits)
2. User clicks "Send Message"
3. Error message: "Please enter a valid 10-digit phone number"
4. Form doesn't submit
5. User corrects phone
6. Error clears

### Scenario 4: Missing Required Field
1. User leaves a field empty
2. User clicks "Send Message"
3. Error message: "[Field] is required"
4. Form doesn't submit
5. User fills field
6. Error clears

### Scenario 5: Contact via Phone
1. User sees phone number
2. User clicks phone number
3. Phone dialer opens
4. User can call directly

### Scenario 6: Contact via Email
1. User sees email address
2. User clicks email address
3. Email client opens
4. User can send email directly

## Performance Optimization Tips

### 1. Lazy Load Sections
```javascript
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
>
  {/* Content */}
</motion.section>
```

### 2. Memoize Form Component
```javascript
import { memo } from 'react';

const ContactForm = memo(({ formData, onSubmit }) => {
  // Component code
});
```

### 3. Debounce Form Changes
```javascript
import { useCallback } from 'react';

const handleChange = useCallback(
  debounce((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, 300),
  []
);
```

## Accessibility Features

- Semantic HTML structure (form, label, input, textarea, select)
- ARIA labels on form fields
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast meets WCAG standards
- Form labels associated with inputs
- Error messages clearly displayed
- Success messages announced

## SEO Optimization

- Semantic heading hierarchy (h1, h2, h3)
- Descriptive form labels
- Meta tags for contact page
- Mobile-friendly responsive design
- Fast page load times
- Structured data for contact information
- Descriptive link text

---

**Version**: 1.0
**Last Updated**: 2024
**Status**: Production Ready
