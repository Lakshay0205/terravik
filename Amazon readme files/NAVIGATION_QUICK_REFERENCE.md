# React Router Navigation Quick Reference Guide

## Overview
This guide explains how to implement navigation in the Agro-Web multi-brand platform.

---

## Basic Navigation Methods

### Method 1: Using `useNavigate()` Hook (Programmatic)

```javascript
import { useNavigate } from 'react-router-dom';

export const MyComponent = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/products')}>
      Go to Products
    </button>
  );
};
```

### Method 2: Using `Link` Component (Declarative)

```javascript
import { Link } from 'react-router-dom';

export const MyComponent = () => {
  return (
    <Link to="/products">
      Go to Products
    </Link>
  );
};
```

---

## Brand-Aware Navigation

### Getting Current Brand Context

```javascript
import { useBrandContext } from '../../context/BrandContext';

export const MyComponent = () => {
  const { brandId, routes } = useBrandContext();
  
  // brandId will be 'terravik' or 'hawaiAgro'
  // routes contains pre-configured brand routes
  
  return (
    <button onClick={() => navigate(routes.products)}>
      Shop Products
    </button>
  );
};
```

### Available Routes from Context

```javascript
const { routes } = useBrandContext();

routes.home              // /terravik or /hawai-agro
routes.products          // /terravik/products or /hawai-agro/products
routes.research          // /terravik/research or /hawai-agro/research
routes.contact           // /terravik/contact or /hawai-agro/contact
routes.about             // /terravik/about or /hawai-agro/about
```

---

## Common Navigation Patterns

### 1. Navigate to Products Page

```javascript
// Using useNavigate
const navigate = useNavigate();
<button onClick={() => navigate('/products')}>Shop Now</button>

// Using Link
<Link to="/products">Shop Now</Link>

// Using brand context
const { routes } = useBrandContext();
<button onClick={() => navigate(routes.products)}>Shop Now</button>
```

### 2. Navigate to Product Details

```javascript
const navigate = useNavigate();
const productName = 'Liquid Gold';
const productSlug = productName.toLowerCase().replace(/\s+/g, '-');

<button onClick={() => navigate(`/products/${productSlug}`)}>
  View Details
</button>
```

### 3. Navigate to Contact Page

```javascript
const navigate = useNavigate();
<button onClick={() => navigate('/contact')}>Contact Us</button>
```

### 4. Navigate to Legal Pages

```javascript
const navigate = useNavigate();

// Privacy Policy
<button onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>

// Terms of Service
<button onClick={() => navigate('/terms-of-service')}>Terms of Service</button>

// Cookie Policy
<button onClick={() => navigate('/cookie-policy')}>Cookie Policy</button>
```

### 5. Smooth Scroll to Contact Form

```javascript
import { scrollToContactForm } from '../../utils/scrollUtils';

<button onClick={scrollToContactForm}>
  Inquire Now
</button>
```

---

## Navigation with Brand Prefix

### Automatic Brand Prefix (Recommended)

```javascript
import { useBrandContext } from '../../context/BrandContext';

export const MyComponent = () => {
  const navigate = useNavigate();
  const { brandId } = useBrandContext();

  // Navigate to brand-specific page
  const handleNavigate = () => {
    navigate(`/${brandId}/blog`);
  };

  return <button onClick={handleNavigate}>Read Blog</button>;
};
```

### Manual Brand Prefix

```javascript
const navigate = useNavigate();
const brandId = 'terravik'; // or 'hawaiAgro'

<button onClick={() => navigate(`/${brandId}/products`)}>
  Products
</button>
```

---

## Smooth Scrolling

### Scroll to Contact Form

```javascript
import { scrollToContactForm } from '../../utils/scrollUtils';

// In your component
<button onClick={scrollToContactForm}>
  Inquire Now
</button>
```

### Scroll to Any Element

```javascript
import { smoothScrollToElement } from '../../utils/scrollUtils';

// Scroll to element with ID "my-section"
<button onClick={() => smoothScrollToElement('my-section')}>
  Go to Section
</button>

// With offset (useful for fixed headers)
<button onClick={() => smoothScrollToElement('my-section', 80)}>
  Go to Section
</button>
```

---

## Footer Navigation Example

```javascript
import { useNavigate } from 'react-router-dom';
import { useBrandContext } from '../../context/BrandContext';

export const Footer = () => {
  const navigate = useNavigate();
  const { brandId } = useBrandContext();

  const resourceLinks = [
    { label: 'Blog', href: `/${brandId}/blog` },
    { label: 'FAQ', href: `/${brandId}/faqs` },
    { label: 'Guides', href: `/${brandId}/guides` },
    { label: 'Support', href: `/${brandId}/support` },
  ];

  return (
    <div>
      {resourceLinks.map((link) => (
        <button
          key={link.label}
          onClick={() => navigate(link.href)}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};
```

---

## Navigation with Framer Motion

```javascript
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const MyComponent = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/products')}
      className="px-8 py-3 rounded-lg font-semibold text-white"
    >
      Shop Now
    </motion.button>
  );
};
```

---

## Complete Example: Product Card

```javascript
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { scrollToContactForm } from '../../utils/scrollUtils';

export const ProductCard = ({ product, brandColor }) => {
  const navigate = useNavigate();

  const handleInquireClick = () => {
    scrollToContactForm();
  };

  const handleLearnMore = () => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${productSlug}`);
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      
      <div className="button-group">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLearnMore}
          style={{ backgroundColor: brandColor }}
        >
          Learn More
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleInquireClick}
          style={{ backgroundColor: brandColor }}
        >
          Inquire Now
        </motion.button>
      </div>
    </div>
  );
};
```

---

## Available Routes Reference

### TerraVik Routes
```
/terravik                    - Home
/terravik/products           - Products
/terravik/products/:id       - Product Details
/terravik/about              - About
/terravik/research           - Research
/terravik/contact            - Contact
/terravik/blog               - Blog
/terravik/faqs               - FAQs
/terravik/guides             - Guides
/terravik/support            - Support
/terravik/privacy-policy     - Privacy Policy
/terravik/terms-of-service   - Terms of Service
/terravik/cookie-policy      - Cookie Policy
```

### Hawai Agro Routes
```
/hawai-agro                    - Home
/hawai-agro/products           - Products
/hawai-agro/products/:id       - Product Details
/hawai-agro/about              - About
/hawai-agro/research           - Research
/hawai-agro/contact            - Contact
/hawai-agro/blog               - Blog
/hawai-agro/faqs               - FAQs
/hawai-agro/guides             - Guides
/hawai-agro/support            - Support
/hawai-agro/privacy-policy     - Privacy Policy
/hawai-agro/terms-of-service   - Terms of Service
/hawai-agro/cookie-policy      - Cookie Policy
```

---

## Best Practices

✅ **DO:**
- Use `useBrandContext()` to get brand-specific routes
- Use `useNavigate()` for programmatic navigation
- Use `Link` component for static navigation
- Use `scrollToContactForm()` for inquiry buttons
- Keep navigation consistent across pages
- Test navigation on both brands

❌ **DON'T:**
- Hardcode routes without brand prefix
- Use `window.location` for internal navigation
- Mix navigation methods in the same component
- Forget to import `useNavigate` or `Link`
- Navigate to wrong brand routes

---

## Troubleshooting

### Issue: Navigation not working
**Solution:** Make sure you've imported `useNavigate` from 'react-router-dom'

### Issue: Brand routes not working
**Solution:** Ensure you're using `useBrandContext()` to get the correct brand prefix

### Issue: Smooth scroll not working
**Solution:** Make sure the target element has the correct ID and is in the DOM

### Issue: Button not responding
**Solution:** Check that `onClick` handler is properly bound and not preventing default

---

## Additional Resources

- [React Router Documentation](https://reactrouter.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- `src/utils/scrollUtils.js` - Smooth scroll utilities
- `src/context/BrandContext.jsx` - Brand context setup
- `src/routes/AppRoutes.jsx` - Route configuration

---

**Last Updated:** 2024
**Version:** 1.0
