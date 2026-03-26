# 🎨 Brand Configuration - Quick Reference

## 🚀 Quick Start

### Access Brand Data in Components

```jsx
import { useBrandContext } from '@/context/BrandContext';

export const MyComponent = () => {
  const { brand, colors, routes, contact } = useBrandContext();
  
  return (
    <div style={{ backgroundColor: colors.primary }}>
      <h1>{brand.name}</h1>
      <p>{brand.tagline}</p>
    </div>
  );
};
```

## 🎯 Available Brand Data

### Brand Object
```javascript
{
  id: 'terravik',
  name: 'TerraVik',
  tagline: 'Liquid Gold',
  description: 'Premium home gardening products...',
  logo: '/logos/terravik-logo.png',
  favicon: '/logos/terravik-favicon.ico',
}
```

### Colors Object
```javascript
{
  primary: '#2d5016',      // Main brand color
  secondary: '#7cb342',    // Secondary color
  accent: '#d4af37',       // Accent color
  light: '#f1f5e8',        // Light variant
  lighter: '#e0ebd0',      // Lighter variant
  dark: '#1b3a0a',         // Dark variant
  darker: '#0f2305',       // Darker variant
  success: '#4caf50',      // Success state
  warning: '#ff9800',      // Warning state
  error: '#f44336',        // Error state
  info: '#2196f3',         // Info state
}
```

### Routes Object
```javascript
{
  home: '/terravik',
  products: '/terravik/products',
  research: '/terravik/research',
  contact: '/terravik/contact',
  about: '/terravik/about',
}
```

### Contact Object
```javascript
{
  email: 'info@terravik.com',
  phone: '+91-XXXX-XXXX-XX',
  address: 'Agricultural Hub, India',
  businessHours: {
    weekday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
}
```

### Social Object
```javascript
{
  facebook: 'https://facebook.com/terravik',
  instagram: 'https://instagram.com/terravik',
  twitter: 'https://twitter.com/terravik',
  linkedin: 'https://linkedin.com/company/terravik',
}
```

### Features Array
```javascript
[
  'Premium quality products',
  'Sustainable farming practices',
  'Expert support and guidance',
  'Competitive pricing',
  'Fast and reliable delivery',
]
```

## 🎨 Using Colors

### In JSX with Inline Styles
```jsx
<div style={{ backgroundColor: colors.primary }}>
  <button style={{ backgroundColor: colors.secondary }}>
    Click me
  </button>
</div>
```

### In Tailwind Classes
```jsx
<div className="bg-primary text-white">
  <button className="bg-secondary hover:bg-accent">
    Click me
  </button>
</div>
```

### Using CSS Variables
```jsx
<div style={{ backgroundColor: 'var(--color-primary)' }}>
  Content
</div>
```

## 🔗 Using Routes

### Navigate to Brand Routes
```jsx
import { useNavigate } from 'react-router-dom';
import { useBrandContext } from '@/context/BrandContext';

export const MyComponent = () => {
  const navigate = useNavigate();
  const { routes } = useBrandContext();

  return (
    <button onClick={() => navigate(routes.products)}>
      Go to Products
    </button>
  );
};
```

### Link to Brand Routes
```jsx
import { Link } from 'react-router-dom';
import { useBrandContext } from '@/context/BrandContext';

export const MyComponent = () => {
  const { routes } = useBrandContext();

  return (
    <Link to={routes.products}>Products</Link>
  );
};
```

## 📧 Using Contact Information

```jsx
import { useBrandContext } from '@/context/BrandContext';

export const ContactInfo = () => {
  const { contact } = useBrandContext();

  return (
    <div>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>
      <p>Hours: {contact.businessHours.weekday}</p>
    </div>
  );
};
```

## 🌐 Using Social Links

```jsx
import { useBrandContext } from '@/context/BrandContext';

export const SocialLinks = () => {
  const { social } = useBrandContext();

  return (
    <div>
      <a href={social.facebook}>Facebook</a>
      <a href={social.instagram}>Instagram</a>
      <a href={social.twitter}>Twitter</a>
      <a href={social.linkedin}>LinkedIn</a>
    </div>
  );
};
```

## 📋 Using Features

```jsx
import { useBrandContext } from '@/context/BrandContext';

export const FeaturesList = () => {
  const { features } = useBrandContext();

  return (
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  );
};
```

## 🎯 Brand URLs

### TerraVik
- Home: `http://localhost:5173/terravik`
- Products: `http://localhost:5173/terravik/products`
- Research: `http://localhost:5173/terravik/research`
- Contact: `http://localhost:5173/terravik/contact`
- About: `http://localhost:5173/terravik/about`

### Hawai Agro
- Home: `http://localhost:5173/hawai-agro`
- Products: `http://localhost:5173/hawai-agro/products`
- Research: `http://localhost:5173/hawai-agro/research`
- Contact: `http://localhost:5173/hawai-agro/contact`
- About: `http://localhost:5173/hawai-agro/about`

## 🎨 Brand Colors

### TerraVik
- Primary: `#2d5016` (Dark Green)
- Secondary: `#7cb342` (Light Green)
- Accent: `#d4af37` (Gold)

### Hawai Agro
- Primary: `#1b5e20` (Forest Green)
- Secondary: `#558b2f` (Leaf Green)
- Accent: `#81c784` (Light Green)

## 🔄 Theme Switching

### Automatic (URL-based)
```
Navigate to /terravik → TerraVik theme
Navigate to /hawai-agro → Hawai Agro theme
```

### Manual (ThemeSwitcher Component)
```jsx
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export const Header = () => {
  return (
    <header>
      <ThemeSwitcher />
    </header>
  );
};
```

## 📝 Common Patterns

### Pattern 1: Brand-Aware Button
```jsx
const { colors } = useBrandContext();

<button style={{ backgroundColor: colors.secondary }}>
  Click me
</button>
```

### Pattern 2: Brand-Aware Card
```jsx
const { colors } = useBrandContext();

<div 
  className="card p-6"
  style={{ borderTop: `4px solid ${colors.primary}` }}
>
  Card content
</div>
```

### Pattern 3: Brand-Aware Hero
```jsx
const { brand, colors } = useBrandContext();

<section style={{ backgroundColor: colors.primary }}>
  <h1>{brand.name}</h1>
  <p>{brand.tagline}</p>
</section>
```

### Pattern 4: Brand-Aware Navigation
```jsx
const { brand, routes, colors } = useBrandContext();

<nav style={{ backgroundColor: colors.primary }}>
  <Link to={routes.home}>{brand.name}</Link>
  <Link to={routes.products}>Products</Link>
</nav>
```

### Pattern 5: Brand-Aware Footer
```jsx
const { brand, contact, social } = useBrandContext();

<footer>
  <h3>{brand.name}</h3>
  <p>Email: {contact.email}</p>
  <a href={social.facebook}>Facebook</a>
</footer>
```

## 🔧 Configuration Functions

### Get Brand by ID
```javascript
import { getBrandConfig } from '@/config/brandConfig';

const brand = getBrandConfig('terravik');
```

### Get Brand from URL
```javascript
import { getBrandByPath } from '@/config/brandConfig';

const brand = getBrandByPath('/terravik/products');
```

### Get Brand ID from URL
```javascript
import { getBrandIdFromPath } from '@/config/brandConfig';

const brandId = getBrandIdFromPath('/terravik/products');
```

### Get All Brands
```javascript
import { getAllBrands } from '@/config/brandConfig';

const allBrands = getAllBrands();
```

### Get Specific Color
```javascript
import { getBrandColor } from '@/config/brandConfig';

const color = getBrandColor('terravik', 'primary');
```

### Get Gradient
```javascript
import { getBrandGradient } from '@/config/brandConfig';

const gradient = getBrandGradient('terravik', 'primary');
```

## 💡 Tips & Tricks

### Tip 1: Use CSS Variables for Consistency
```css
.button {
  background-color: var(--color-primary);
  color: white;
}
```

### Tip 2: Combine with Tailwind
```jsx
<div className="bg-primary text-white p-4 rounded-lg">
  Content
</div>
```

### Tip 3: Use Gradients for Visual Impact
```jsx
const { gradients } = useBrandContext();

<div style={{ background: gradients.primary }}>
  Hero section
</div>
```

### Tip 4: Leverage Contact Info
```jsx
const { contact } = useBrandContext();

<a href={`mailto:${contact.email}`}>
  Email us
</a>
```

### Tip 5: Display Features Dynamically
```jsx
const { features } = useBrandContext();

{features.map((feature, i) => (
  <li key={i}>{feature}</li>
))}
```

## ✅ Checklist for New Components

- [ ] Import `useBrandContext`
- [ ] Destructure needed properties
- [ ] Use `colors.primary` for main color
- [ ] Use `colors.secondary` for secondary color
- [ ] Use `brand.name` for brand name
- [ ] Use `routes` for navigation
- [ ] Use `contact` for contact info
- [ ] Test with both brands

---

**Last Updated:** 2024
**Status:** ✅ COMPLETE
