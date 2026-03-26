# Footer Component - Visual Guide & Code Examples

## Footer Layout Overview

```
┌─────────────────────────────────────────────────────────┐
│                    MAIN FOOTER CONTENT                   │
│              (4-COLUMN GRID ON DESKTOP)                  │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │
│  │ COMPANY INFO │ │ QUICK LINKS  │ │ RESOURCES    │    │
│  │              │ │              │ │              │    │
│  │ Brand Name   │ │ → Home       │ │ 📚 Blog      │    │
│  │ Tagline      │ │ → Products   │ │ 📚 FAQ       │    │
│  │              │ │ → Research   │ │ 📚 Guides    │    │
│  │ Description  │ │ → Contact    │ │ 📚 Support   │    │
│  │ (2-3 lines)  │ │ → About      │ │              │    │
│  │              │ │              │ │              │    │
│  │ Social Icons │ │              │ │              │    │
│  │ 📘 📷 🐦 💼 │ │              │ │              │    │
│  └──────────────┘ └──────────────┘ └──────────────┘    │
│  ┌──────────────────────────────────────────────────┐   │
│  │ CONTACT INFO                                     │   │
│  │ 📞 PHONE: 9008383900 (clickable)                │   │
│  │ ✉️ EMAIL: info@terravik.com (clickable)        │   │
│  │ 📍 LOCATION: Near Hussainpur, Tehsil Bilari... │   │
│  └──────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│                      DIVIDER                             │
├─────────────────────────────────────────────────────────┤
│              BOTTOM SECTION (3-COLUMN GRID)              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │
│  │ COPYRIGHT    │ │ LEGAL LINKS  │ │ BRAND INFO   │    │
│  │              │ │              │ │              │    │
│  │ © 2024       │ │ Privacy      │ │ Brand Name   │    │
│  │ Company Name │ │ Terms        │ │ Tagline      │    │
│  │ All rights   │ │ Cookies      │ │              │    │
│  │ reserved     │ │              │ │              │    │
│  └──────────────┘ └──────────────┘ └──────────────┘    │
├─────────────────────────────────────────────────────────┤
│                    BOTTOM BAR                            │
│  Powered by | Tagline | Made with ❤️                   │
└─────────────────────────────────────────────────────────┘
```

## Company Information Card

```
┌─────────────────────────────────┐
│ TerraVik                        │
│ Liquid Gold (italic)            │
│                                 │
│ Premium home gardening          │
│ solutions for sustainable       │
│ growth. We provide organic,     │
│ eco-friendly products...        │
│                                 │
│ Social Media:                   │
│ 📘 📷 🐦 💼                     │
│ (hover: scale 1.2x)             │
└─────────────────────────────────┘
```

## Quick Links Card

```
┌─────────────────────────────────┐
│ → QUICK LINKS                   │
├─────────────────────────────────┤
│ › Home                          │
│ › Products                      │
│ › Research                      │
│ › Contact                       │
│ › About                         │
│                                 │
│ (hover: arrow appears, color    │
│  changes from white/70 to white)│
└─────────────────────────────────┘
```

## Contact Information Card

```
┌─────────────────────────────────┐
│ 📞 CONTACT                      │
├─────────────────────────────────┤
│ PHONE                           │
│ 9008383900 (clickable)          │
│                                 │
│ EMAIL                           │
│ info@terravik.com (clickable)   │
│                                 │
│ 📍 LOCATION                     │
│ Near Hussainpur, Tehsil Bilari  │
│ Moradabad, Uttar Pradesh        │
└─────────────────────────────────┘
```

## Code Examples

### Example 1: Customize Company Details

```javascript
// In src/components/Footer/Footer.jsx
const companyDetails = {
  name: 'Your Company Name',
  description: brandId === 'terravik'
    ? 'Your TerraVik description...'
    : 'Your Hawai Agro description...',
  location: 'Your Location Address',
  phone: 'Your Phone Number',
  email: brandId === 'terravik' ? 'info@terravik.com' : 'info@hawaiagro.com',
};
```

### Example 2: Add Quick Links

```javascript
// In src/components/Footer/Footer.jsx
const quickLinks = [
  { label: 'Home', href: brand.routes.home },
  { label: 'Products', href: brand.routes.products },
  { label: 'Research', href: brand.routes.research },
  { label: 'Contact', href: brand.routes.contact },
  { label: 'About', href: brand.routes.about },
  { label: 'Blog', href: '/blog' }, // Add new link
];
```

### Example 3: Update Social Links

```javascript
// In src/components/Footer/Footer.jsx
const socialLinks = [
  { icon: '📘', label: 'Facebook', href: 'https://facebook.com/yourpage' },
  { icon: '📷', label: 'Instagram', href: 'https://instagram.com/yourprofile' },
  { icon: '🐦', label: 'Twitter', href: 'https://twitter.com/yourhandle' },
  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/company/yourcompany' },
];
```

### Example 4: Add Resources

```javascript
// In src/components/Footer/Footer.jsx
const resourceLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Guides', href: '/guides' },
  { label: 'Support', href: '/support' },
  { label: 'Documentation', href: '/docs' }, // Add new resource
];
```

### Example 5: Customize Legal Links

```javascript
// In src/components/Footer/Footer.jsx
const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Accessibility', href: '/accessibility' }, // Add new link
];
```

## Responsive Behavior

### Mobile (< 640px)
```
┌─────────────────┐
│ Company Info    │
│ (Full Width)    │
├─────────────────┤
│ Quick Links     │
│ (Full Width)    │
├─────────────────┤
│ Resources       │
│ (Full Width)    │
├─────────────────┤
│ Contact Info    │
│ (Full Width)    │
├─────────────────┤
│ Divider         │
├─────────────────┤
│ Copyright       │
│ (Full Width)    │
├─────────────────┤
│ Legal Links     │
│ (Full Width)    │
├─────────────────┤
│ Brand Info      │
│ (Full Width)    │
├─────────────────┤
│ Bottom Bar      │
│ (Full Width)    │
└─────────────────┘
```

### Tablet (640-1024px)
```
┌──────────────────────────────┐
│ Company | Quick Links        │
│ Info    | (2 columns)        │
├──────────────────────────────┤
│ Resources | Contact Info     │
│ (2 columns)                  │
├──────────────────────────────┤
│ Divider                      │
├──────────────────────────────┤
│ Copyright | Legal | Brand    │
│ (3 columns)                  │
├──────────────────────────────┤
│ Bottom Bar (Full Width)      │
└──────────────────────────────┘
```

### Desktop (> 1024px)
```
┌────────────────────────────────────────┐
│ Company | Quick | Resources | Contact  │
│ Info    | Links | (4 columns)          │
├────────────────────────────────────────┤
│ Divider                                │
├────────────────────────────────────────┤
│ Copyright | Legal Links | Brand Info   │
│ (3 columns)                            │
├────────────────────────────────────────┤
│ Bottom Bar (Full Width)                │
└────────────────────────────────────────┘
```

## Animation Sequences

### Container Entry Animation
```
1. Footer loads
   - Container opacity: 0 → 1
   - Duration: 0.5s
   - Easing: ease-out

2. Items stagger
   - Each item delays 0.1s
   - Creates cascading effect
   - Opacity: 0 → 1
   - Y position: 20px → 0
```

### Social Icon Hover Animation
```
1. Mouse enters icon
   - Icon scale: 1 → 1.2
   - Duration: 0.3s
   - Easing: ease-out

2. Mouse leaves icon
   - Icon scale: 1.2 → 1
   - Duration: 0.3s
   - Easing: ease-in
```

### Link Hover Animation
```
1. Mouse enters link
   - Arrow opacity: 0 → 1
   - Text color: white/70 → white
   - Duration: 0.2s

2. Mouse leaves link
   - Arrow opacity: 1 → 0
   - Text color: white → white/70
   - Duration: 0.2s
```

### Bottom Bar Animation
```
1. Footer loads (delayed)
   - Bottom bar opacity: 0 → 1
   - Duration: 0.5s
   - Delay: 0.5s
   - Easing: ease-out
```

## Testing Scenarios

### Scenario 1: Footer Displays Correctly
1. User scrolls to bottom of page
2. Footer displays with all sections
3. All content is visible
4. Layout is responsive

### Scenario 2: Navigate Using Footer Links
1. User clicks quick link
2. Page navigates to selected section
3. URL updates correctly
4. Page content loads

### Scenario 3: Contact Company
1. User sees phone number
2. User clicks phone → Phone dialer opens
3. Or user clicks email → Email client opens
4. User can contact company

### Scenario 4: Follow on Social Media
1. User sees social icons
2. User hovers over icon → Icon scales up
3. User clicks icon → Social media profile opens
4. User can follow company

### Scenario 5: View Legal Information
1. User scrolls to bottom
2. User clicks legal link
3. Page navigates to legal page
4. Legal content displays

### Scenario 6: Responsive Design
1. User views on mobile
2. Footer stacks vertically
3. All content is readable
4. Links are clickable

## Performance Optimization Tips

### 1. Lazy Load Footer
```javascript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
>
  {/* Footer content */}
</motion.div>
```

### 2. Memoize Footer Component
```javascript
import { memo } from 'react';

export const Footer = memo(() => {
  // Component code
});
```

### 3. Optimize Social Icons
```javascript
// Use emoji instead of SVG for better performance
const socialLinks = [
  { icon: '📘', label: 'Facebook', href: '#' },
  // More efficient than SVG icons
];
```

## Accessibility Features

- Semantic HTML structure (footer, nav, ul, li, a)
- ARIA labels on social icons
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast meets WCAG standards
- Descriptive link text
- Proper heading hierarchy

## SEO Optimization

- Semantic footer structure
- Descriptive link text
- Mobile-friendly responsive design
- Fast page load times
- Structured data for contact information
- Proper heading hierarchy
- Internal linking strategy

---

**Version**: 1.0
**Last Updated**: 2024
**Status**: Production Ready
