# Brand-Aware Routing - Quick Reference

## Import the Hook

```javascript
import { useBrandNavigation } from '../../hooks/useBrandNavigation';
```

## Use in Component

```javascript
const { navigateToBrand, getBrandRoute, getProductRoute, brandId, brandPrefix } = useBrandNavigation();
```

---

## Three Main Functions

### 1. `navigateToBrand(path)` - Programmatic Navigation

**Use for:** Button clicks, form submissions, conditional navigation

```javascript
// Navigate to products page
<button onClick={() => navigateToBrand('products')}>
  Shop Now
</button>

// Navigate to about page
<button onClick={() => navigateToBrand('about')}>
  Learn More
</button>

// Navigate to contact page
<button onClick={() => navigateToBrand('contact')}>
  Contact Us
</button>
```

**Result:**
- TerraVik: `/terravik/products`, `/terravik/about`, `/terravik/contact`
- Hawai Agro: `/hawai-agro/products`, `/hawai-agro/about`, `/hawai-agro/contact`

---

### 2. `getBrandRoute(path)` - Link Components

**Use for:** `<Link>` components, href attributes

```javascript
// In Link component
<Link to={getBrandRoute('products')}>
  Products
</Link>

// In menu items
const menuItems = [
  { label: 'Home', href: getBrandRoute('') },
  { label: 'Products', href: getBrandRoute('products') },
  { label: 'About', href: getBrandRoute('about') },
];

// In footer links
<a href={getBrandRoute('privacy-policy')}>
  Privacy Policy
</a>
```

**Result:**
- TerraVik: `/terravik/products`, `/terravik/about`, `/terravik/privacy-policy`
- Hawai Agro: `/hawai-agro/products`, `/hawai-agro/about`, `/hawai-agro/privacy-policy`

---

### 3. `getProductRoute(productSlug)` - Product Links

**Use for:** Product card links, product navigation

```javascript
// Get product route
const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
const productRoute = getProductRoute(productSlug);

// Use in button
<button onClick={() => window.location.href = productRoute}>
  Learn More
</button>

// Use in link
<a href={getProductRoute('liquid-gold')}>
  View Product
</a>
```

**Result:**
- TerraVik: `/terravik/products/liquid-gold`
- Hawai Agro: `/hawai-agro/products/fom`

---

## Available Routes

```javascript
// All these paths work with getBrandRoute() and navigateToBrand()
''                    // Home
'products'            // Products
'products/:id'        // Product Details
'about'               // About
'research'            // Research
'contact'             // Contact
'blog'                // Blog
'faqs'                // FAQs
'guides'              // Guides
'support'             // Support
'privacy-policy'      // Privacy Policy
'terms-of-service'    // Terms of Service
'cookie-policy'       // Cookie Policy
```

---

## Common Patterns

### Pattern 1: Navigation Button

```javascript
<button onClick={() => navigateToBrand('products')}>
  Shop Now
</button>
```

### Pattern 2: Menu Item

```javascript
<Link to={getBrandRoute('about')}>
  About Us
</Link>
```

### Pattern 3: Product Card

```javascript
const productRoute = getProductRoute(productSlug);
<button onClick={() => window.location.href = productRoute}>
  Learn More
</button>
```

### Pattern 4: Footer Link

```javascript
<button onClick={() => navigateToBrand('privacy-policy')}>
  Privacy Policy
</button>
```

### Pattern 5: Conditional Navigation

```javascript
const handleClick = () => {
  if (condition) {
    navigateToBrand('products');
  } else {
    navigateToBrand('contact');
  }
};
```

---

## What NOT to Do

❌ **Don't hardcode routes:**
```javascript
// WRONG
navigate('/products')
<Link to="/about">About</Link>
```

✅ **Do use the hook:**
```javascript
// CORRECT
navigateToBrand('products')
<Link to={getBrandRoute('about')}>About</Link>
```

---

## Brand Information

```javascript
const { brandId, brandPrefix } = useBrandNavigation();

// brandId: 'terravik' or 'hawaiAgro'
// brandPrefix: 'terravik' or 'hawai-agro'

// Use in conditionals
if (brandId === 'terravik') {
  // TerraVik specific logic
}

if (brandId === 'hawaiAgro') {
  // Hawai Agro specific logic
}
```

---

## Real-World Examples

### Example 1: Home Page CTA

```javascript
import { useBrandNavigation } from '../../hooks/useBrandNavigation';

export const Home = () => {
  const { navigateToBrand } = useBrandNavigation();

  return (
    <div>
      <button onClick={() => navigateToBrand('products')}>
        Shop Now
      </button>
      <button onClick={() => navigateToBrand('about')}>
        Learn More
      </button>
    </div>
  );
};
```

### Example 2: Navbar Menu

```javascript
import { useBrandNavigation } from '../../hooks/useBrandNavigation';

export const Navbar = () => {
  const { getBrandRoute } = useBrandNavigation();

  const menuItems = [
    { label: 'Home', href: getBrandRoute('') },
    { label: 'Products', href: getBrandRoute('products') },
    { label: 'About', href: getBrandRoute('about') },
    { label: 'Contact', href: getBrandRoute('contact') },
  ];

  return (
    <nav>
      {menuItems.map(item => (
        <Link key={item.label} to={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
```

### Example 3: Product Card

```javascript
import { useBrandNavigation } from '../../hooks/useBrandNavigation';

export const ProductCard = ({ product }) => {
  const { getProductRoute } = useBrandNavigation();

  const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
  const productRoute = getProductRoute(productSlug);

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => window.location.href = productRoute}>
        Learn More
      </button>
    </div>
  );
};
```

### Example 4: Footer Links

```javascript
import { useBrandNavigation } from '../../hooks/useBrandNavigation';

export const Footer = () => {
  const { navigateToBrand, getBrandRoute } = useBrandNavigation();

  return (
    <footer>
      <div>
        <h4>Resources</h4>
        <button onClick={() => navigateToBrand('blog')}>Blog</button>
        <button onClick={() => navigateToBrand('faqs')}>FAQs</button>
        <button onClick={() => navigateToBrand('guides')}>Guides</button>
      </div>
      <div>
        <h4>Legal</h4>
        <a href={getBrandRoute('privacy-policy')}>Privacy Policy</a>
        <a href={getBrandRoute('terms-of-service')}>Terms of Service</a>
        <a href={getBrandRoute('cookie-policy')}>Cookie Policy</a>
      </div>
    </footer>
  );
};
```

---

## Testing

### Test TerraVik
1. Visit `/terravik`
2. Click "Shop Now" → Should go to `/terravik/products`
3. Click product → Should go to `/terravik/products/{slug}`
4. Click "About" → Should go to `/terravik/about`

### Test Hawai Agro
1. Visit `/hawai-agro`
2. Click "Shop Now" → Should go to `/hawai-agro/products`
3. Click product → Should go to `/hawai-agro/products/{slug}`
4. Click "About" → Should go to `/hawai-agro/about`

### Test Brand Switching
1. Visit `/terravik/products`
2. Manually go to `/hawai-agro/products`
3. Click any button → Should use `/hawai-agro` prefix

---

## Troubleshooting

**Links not working?**
- Check you're using `useBrandNavigation()` hook
- Verify you're using the correct function (`navigateToBrand`, `getBrandRoute`, or `getProductRoute`)

**Brand prefix missing?**
- Don't hardcode routes like `/products`
- Always use `navigateToBrand('products')` or `getBrandRoute('products')`

**Product links broken?**
- Use `getProductRoute(productSlug)` for product navigation
- Ensure product slug is lowercase with hyphens

---

**Version:** 1.0
**Status:** Production Ready ✅
