# Brand-Aware Routing Implementation Guide

## Overview

This document explains the brand-aware routing system implemented in the Agro-Web multi-brand platform. The system ensures that all navigation respects the current brand context, preventing users from accidentally switching brands when clicking navigation buttons.

---

## Problem Statement

**Before Implementation:**
- Users browsing `/terravik/products` would click "Shop Now" and be redirected to `/products` (without brand prefix)
- This caused users to lose their brand context
- Navigation buttons didn't respect the current brand

**After Implementation:**
- Users browsing `/terravik/products` click "Shop Now" and stay within `/terravik/products`
- Users browsing `/hawai-agro/products` click "Shop Now" and stay within `/hawai-agro/products`
- All navigation automatically includes the brand prefix

---

## Solution Architecture

### 1. Brand Detection Hook: `useBrandNavigation`

**Location:** `src/hooks/useBrandNavigation.js`

This custom hook provides brand-aware navigation utilities:

```javascript
const { navigateToBrand, getBrandRoute, getProductRoute, brandId, brandPrefix } = useBrandNavigation();
```

**Functions:**

- `navigateToBrand(path)` - Navigate to a route while maintaining brand context
- `getBrandRoute(path)` - Get a full route with brand prefix
- `getProductRoute(productSlug)` - Get a product route with brand prefix
- `brandId` - Current brand ID ('terravik' or 'hawaiAgro')
- `brandPrefix` - URL-friendly brand prefix ('terravik' or 'hawai-agro')

### 2. Brand Detection from URL

**Location:** `src/config/brandConfig.js`

The `getBrandIdFromPath()` function extracts the brand from the URL:

```javascript
// URL: /terravik/products → brandId: 'terravik'
// URL: /hawai-agro/products → brandId: 'hawaiAgro'
const brandId = getBrandIdFromPath(location.pathname);
```

---

## Implementation Details

### Route Structure

```
/terravik/
  ├── (index) → Home
  ├── products → Products
  ├── products/:id → Product Details
  ├── about → About
  ├── research → Research
  ├── contact → Contact
  ├── blog → Blog
  ├── faqs → FAQs
  ├── guides → Guides
  ├── support → Support
  ├── privacy-policy → Privacy Policy
  ├── terms-of-service → Terms of Service
  └── cookie-policy → Cookie Policy

/hawai-agro/
  └── (same structure as above)
```

### Updated Components

#### 1. **Navbar Component** (`src/components/Navbar/Navbar.jsx`)

```javascript
const { getBrandRoute } = useBrandNavigation();

const menuItems = [
  { label: 'Home', href: getBrandRoute('') },
  { label: 'Products', href: getBrandRoute('products') },
  { label: 'About Us', href: getBrandRoute('about') },
  // ... more items
];

// Usage in Link
<Link to={item.href}>{item.label}</Link>
```

**Result:**
- TerraVik: Links to `/terravik/products`, `/terravik/about`, etc.
- Hawai Agro: Links to `/hawai-agro/products`, `/hawai-agro/about`, etc.

#### 2. **Home Page** (`src/pages/Home/Home.jsx`)

```javascript
const { navigateToBrand } = useBrandNavigation();

// "Shop Now" button
<button onClick={() => navigateToBrand('products')}>
  Shop Now
</button>

// "Learn More" button
<button onClick={() => navigateToBrand('about')}>
  Learn More
</button>
```

**Result:**
- TerraVik users: Navigate to `/terravik/products` and `/terravik/about`
- Hawai Agro users: Navigate to `/hawai-agro/products` and `/hawai-agro/about`

#### 3. **ProductCard Component** (`src/components/ProductCard/ProductCard.jsx`)

```javascript
const { getProductRoute } = useBrandNavigation();

const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
const productRoute = getProductRoute(productSlug);

// "Learn More" button
<button onClick={() => window.location.href = productRoute}>
  Learn More
</button>
```

**Result:**
- TerraVik: `/terravik/products/liquid-gold`
- Hawai Agro: `/hawai-agro/products/fom`

#### 4. **ProductDetails Page** (`src/pages/ProductDetails/ProductDetails.jsx`)

```javascript
const { navigateToBrand } = useBrandNavigation();

// "View More Products" button
<button onClick={() => navigateToBrand('products')}>
  View More Products
</button>

// "Back to Products" button
<button onClick={() => navigateToBrand('products')}>
  Back to Products
</button>
```

**Result:**
- Users stay within their brand when navigating back

#### 5. **Footer Component** (`src/components/Footer/Footer.jsx`)

```javascript
const { navigateToBrand, getBrandRoute } = useBrandNavigation();

// Resource links
const resourceLinks = [
  { label: 'Blog', href: getBrandRoute('blog') },
  { label: 'FAQ', href: getBrandRoute('faqs') },
  { label: 'Guides', href: getBrandRoute('guides') },
  { label: 'Support', href: getBrandRoute('support') },
];

// Legal links
const legalLinks = [
  { label: 'Privacy Policy', href: getBrandRoute('privacy-policy') },
  { label: 'Terms of Service', href: getBrandRoute('terms-of-service') },
  { label: 'Cookie Policy', href: getBrandRoute('cookie-policy') },
];

// Usage
<button onClick={() => navigateToBrand(link.href.replace(/^\/[^/]+/, ''))}>
  {link.label}
</button>
```

**Result:**
- All footer links maintain brand context

---

## Usage Examples

### Example 1: Navigate to Products Page

**TerraVik User:**
```javascript
const { navigateToBrand } = useBrandNavigation();
navigateToBrand('products');
// Result: Navigate to /terravik/products
```

**Hawai Agro User:**
```javascript
const { navigateToBrand } = useBrandNavigation();
navigateToBrand('products');
// Result: Navigate to /hawai-agro/products
```

### Example 2: Get Brand Route

**TerraVik:**
```javascript
const { getBrandRoute } = useBrandNavigation();
const route = getBrandRoute('about');
// Result: /terravik/about
```

**Hawai Agro:**
```javascript
const { getBrandRoute } = useBrandNavigation();
const route = getBrandRoute('about');
// Result: /hawai-agro/about
```

### Example 3: Product Navigation

**TerraVik:**
```javascript
const { getProductRoute } = useBrandNavigation();
const route = getProductRoute('liquid-gold');
// Result: /terravik/products/liquid-gold
```

**Hawai Agro:**
```javascript
const { getProductRoute } = useBrandNavigation();
const route = getProductRoute('fom');
// Result: /hawai-agro/products/fom
```

---

## Testing Brand-Aware Routing

### Test Case 1: TerraVik Navigation

1. Visit `/terravik`
2. Click "Shop Now" → Should navigate to `/terravik/products`
3. Click on a product → Should navigate to `/terravik/products/{product-slug}`
4. Click "Back to Products" → Should navigate to `/terravik/products`
5. Click "About Us" in navbar → Should navigate to `/terravik/about`

### Test Case 2: Hawai Agro Navigation

1. Visit `/hawai-agro`
2. Click "Shop Now" → Should navigate to `/hawai-agro/products`
3. Click on a product → Should navigate to `/hawai-agro/products/{product-slug}`
4. Click "Back to Products" → Should navigate to `/hawai-agro/products`
5. Click "About Us" in navbar → Should navigate to `/hawai-agro/about`

### Test Case 3: Footer Links

1. Visit `/terravik`
2. Click "Blog" in footer → Should navigate to `/terravik/blog`
3. Click "Privacy Policy" in footer → Should navigate to `/terravik/privacy-policy`
4. Visit `/hawai-agro`
5. Click "Blog" in footer → Should navigate to `/hawai-agro/blog`
6. Click "Privacy Policy" in footer → Should navigate to `/hawai-agro/privacy-policy`

### Test Case 4: Brand Switching

1. Visit `/terravik/products`
2. Manually navigate to `/hawai-agro/products`
3. Click "Shop Now" → Should navigate to `/hawai-agro/products` (not `/terravik/products`)
4. Verify all links use `/hawai-agro` prefix

---

## Files Modified

| File | Changes |
|------|---------|
| `src/hooks/useBrandNavigation.js` | NEW: Brand-aware navigation hook |
| `src/pages/Home/Home.jsx` | Updated CTA buttons to use `navigateToBrand()` |
| `src/pages/ProductDetails/ProductDetails.jsx` | Updated all buttons to use `navigateToBrand()` |
| `src/components/ProductCard/ProductCard.jsx` | Updated product links to use `getProductRoute()` |
| `src/components/Navbar/Navbar.jsx` | Updated menu items to use `getBrandRoute()` |
| `src/components/Footer/Footer.jsx` | Updated all footer links to use `getBrandRoute()` and `navigateToBrand()` |

---

## Best Practices

### ✅ DO:

1. **Use `useBrandNavigation()` hook** for all navigation
   ```javascript
   const { navigateToBrand, getBrandRoute } = useBrandNavigation();
   ```

2. **Use `navigateToBrand()` for programmatic navigation**
   ```javascript
   onClick={() => navigateToBrand('products')}
   ```

3. **Use `getBrandRoute()` for Link components**
   ```javascript
   <Link to={getBrandRoute('products')}>Products</Link>
   ```

4. **Use `getProductRoute()` for product links**
   ```javascript
   const route = getProductRoute(productSlug);
   ```

### ❌ DON'T:

1. **Don't hardcode routes without brand prefix**
   ```javascript
   // ❌ WRONG
   onClick={() => navigate('/products')}
   
   // ✅ CORRECT
   onClick={() => navigateToBrand('products')}
   ```

2. **Don't use absolute paths**
   ```javascript
   // ❌ WRONG
   <Link to="/about">About</Link>
   
   // ✅ CORRECT
   <Link to={getBrandRoute('about')}>About</Link>
   ```

3. **Don't mix navigation methods**
   ```javascript
   // ❌ WRONG
   const { navigate } = useNavigate();
   navigate('/products');
   
   // ✅ CORRECT
   const { navigateToBrand } = useBrandNavigation();
   navigateToBrand('products');
   ```

---

## Troubleshooting

### Issue: Links not working

**Solution:** Ensure you're using `useBrandNavigation()` hook and the correct function:
- For programmatic navigation: `navigateToBrand()`
- For Link components: `getBrandRoute()`

### Issue: Brand prefix missing from URL

**Solution:** Check that you're using the hook correctly:
```javascript
// ✅ CORRECT
const { navigateToBrand } = useBrandNavigation();
navigateToBrand('products');

// ❌ WRONG
navigate('/products');
```

### Issue: Product links not working

**Solution:** Use `getProductRoute()` for product navigation:
```javascript
// ✅ CORRECT
const route = getProductRoute(productSlug);

// ❌ WRONG
const route = `/products/${productSlug}`;
```

---

## Summary

The brand-aware routing system ensures that:

✅ All navigation respects the current brand context
✅ Users cannot accidentally switch brands
✅ URLs always include the brand prefix
✅ Product links stay within the brand namespace
✅ Footer links maintain brand context
✅ Navigation is consistent across all pages and components

**Status: PRODUCTION READY** ✅

---

**Last Updated:** 2024
**Version:** 1.0
