# Contact Page - Quick Reference

## What Was Created

### 1. Enhanced Contact Page (`src/pages/Contact/Contact.jsx`)
A comprehensive contact page with:
- Professional inquiry form with 5 fields
- EmailJS integration for email delivery
- Company details and contact information
- Location section
- FAQ section
- Call-to-action section
- Form validation and error handling
- Success/error feedback messages

### 2. Key Features

#### Inquiry Form (5 Fields)
- **Full Name** (required, text input)
- **Email Address** (required, email validation)
- **Phone Number** (required, 10-digit validation)
- **Product of Interest** (required, dropdown with brand-specific options)
- **Message** (required, textarea)

#### Company Details
- **Name**: Jaivik Vikalp Urja LLP
- **Location**: Near Hussainpur, Tehsil Bilari, Moradabad, Uttar Pradesh
- **Phone**: 9008383900 (clickable tel link)
- **Email**: Brand-specific (clickable mailto link)
- **Business Hours**: Weekday, Saturday, Sunday
- **Social Links**: Facebook, Instagram, Twitter, LinkedIn

#### Additional Sections
- Location/Map placeholder
- FAQ (4 common questions)
- Call-to-action with phone and email buttons

## Form Validation

| Field | Validation |
|-------|-----------|
| Name | Required, non-empty |
| Email | Required, valid email format |
| Phone | Required, 10-digit number |
| Product | Required, must select |
| Message | Required, non-empty |

## EmailJS Integration

### Setup Steps
1. Create account at emailjs.com
2. Create email service
3. Create email template
4. Add to .env file:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

### Email Template Variables
- `to_email`: Recipient email
- `from_name`: Sender name
- `from_email`: Sender email
- `from_phone`: Sender phone
- `product_interest`: Selected product
- `message`: Message content
- `brand_name`: Brand name
- `company_name`: Company name

## Product Options

### TerraVik
- Liquid Gold
- Premium Soil Mix
- Organic Compost
- Bio Stimulant
- General Inquiry

### Hawai Agro
- Fermented Organic Manure
- Bio Fertilizer
- Neem Oil Extract
- Vermicompost
- General Inquiry

## Page Sections

### 1. Header Section
- Page title: "Get In Touch"
- Subtitle: Welcoming message
- Gradient background

### 2. Contact Information (Left Column)
- Company name
- Location with icon
- Phone with clickable link
- Email with clickable link
- Business hours
- Social media links

### 3. Inquiry Form (Right Column - 2 columns)
- 5 form fields
- Error message display
- Success message display
- Submit button
- Required field indicator

### 4. Location Section
- Map placeholder
- Address information
- Brand-colored gradient

### 5. FAQ Section
- 4 common questions
- 2-column responsive layout
- Hover effects

### 6. Call-to-Action
- "Ready to Get Started?" heading
- Call Us button (tel link)
- Email Us button (mailto link)
- Brand-colored gradient

## Responsive Design

| Device | Layout |
|--------|--------|
| Mobile | 1 column (stacked) |
| Tablet | 1 column (stacked) |
| Desktop | 3 columns (info, form, form) |

## Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Form Entry | Fade + Slide Up | 0.5s |
| Error/Success | Fade + Slide | 0.3s |
| Button Hover | Scale 1.02 | 0.3s |
| Button Tap | Scale 0.98 | 0.2s |
| Social Icons | Scale 1.1 | 0.3s |

## Brand Integration

### TerraVik
- Primary: #2d5016 (Dark green)
- Secondary: #7cb342 (Light green)
- Email: info@terravik.com
- Products: Home gardening focus

### Hawai Agro
- Primary: #1b5e20 (Forest green)
- Secondary: #558b2f (Leaf green)
- Email: info@hawaiagro.com
- Products: Farming focus

## File Changes

### New/Updated Files
1. `src/pages/Contact/Contact.jsx` - Complete redesign with all features

### No Changes Required
- `src/config/brandConfig.js` - Works as-is
- `src/context/BrandContext.jsx` - Works as-is
- `src/hooks/useBrand.js` - Works as-is

## Usage Example

### Access Contact Page
```
TerraVik: /terravik/contact
Hawai Agro: /hawai-agro/contact
```

### Customize Company Details
```javascript
const companyDetails = {
  name: 'Your Company Name',
  location: 'Your Location',
  phone: 'Your Phone',
  email: 'your@email.com',
};
```

### Add Product Options
```javascript
const productOptions = [
  'Product 1',
  'Product 2',
  'Product 3',
  'General Inquiry',
];
```

### Customize FAQ
```javascript
{
  question: 'Your Question?',
  answer: 'Your Answer',
}
```

## Performance Metrics

- **Build Size**: 343.19 kB JS (108.36 kB gzipped)
- **CSS Size**: 48.27 kB (7.66 kB gzipped)
- **Modules**: 469 transformed
- **Build Time**: 6.32 seconds

## Browser Support
- Chrome/Edge: ✓
- Firefox: ✓
- Safari: ✓
- Mobile browsers: ✓

## Next Steps

1. **Setup EmailJS**: Create account and configure
2. **Add Environment Variables**: Set up .env file
3. **Test Form**: Submit test inquiries
4. **Deploy**: Push to production
5. **Monitor**: Track form submissions

## Troubleshooting

### EmailJS Not Sending?
- Verify environment variables are set
- Check EmailJS service configuration
- Verify template ID matches
- Check browser console for errors

### Form Not Validating?
- Check validation logic
- Verify field names match
- Check console for errors

### Styling Not Applying?
- Verify brand colors are correct
- Check Tailwind CSS is compiled
- Clear browser cache

### Animations Not Smooth?
- Check browser performance
- Verify Framer Motion is installed
- Check for console errors

## Support
For issues or questions, refer to:
- `CONTACT_PAGE_DOCUMENTATION.md` - Full documentation
- `src/pages/Contact/Contact.jsx` - Implementation details
- Browser console for error messages
