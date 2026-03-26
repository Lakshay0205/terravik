# 🎨 Brand Configuration System Documentation

## Overview

The brand configuration system provides a centralized, dynamic way to manage multiple brands within a single codebase. It automatically detects the brand from the URL path and applies the corresponding theme throughout the application.

## 🏗️ Architecture

### Core Components

1. **brandConfig.js** - Central configuration file with all brand data
2. **useBrand.js** - Custom hook for accessing brand data
3. **BrandContext.jsx** - React Context for global brand state
4. **theme.css** - CSS variables for dynamic theming
5. **ThemeSwitcher.jsx** - Component for manual brand switching

## 📋 Brand Configuration Structure

### TerraVik Brand

```javascript
{
  id: 'terravik',
  name: 'TerraVik',
  tagline: 'Liquid Gold',
  description: 'Premium home gardening products for sustainable growth',
  
  // Colors
  colors: {
    primary: '#2d5016',      // Dark green
    secondary: '#7cb342',    // Light green
    accent: '#d4af37',       // Gold
    light: '#f1f5e8',
    lighter: '#e0ebd0',
    dark: '#1b3a0a',
    darker: '#0f2305',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    info: '#2196f3',
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #2d5016 0%, #7cb342 100%)',
    accent: 'linear-gradient(135deg, #7cb342 0%, #d4af37 100%)',
    dark: 'linear-gradient(135deg, #1b3a0a 0%, #2d5016 100%)',
  },
  
  // Routes
  routes: {
    home: '/terravik',
    products: '/terravik/products',
    research: '/terravik/research',
    contact: '/terravik/contact',
    about: '/terravik/about',
  },
  
  // Contact Information
  contact: {
    email: 'info@terravik.com',
    phone: '+91-XXXX-XXXX-XX',
    address: 'Agricultural Hub, India',
    businessHours: { /* ... */ },
  },
  
  // Social Media
  social: {
    facebook: 'https://facebook.com/terravik',
    instagram: 'https://instagram.com/terravik',
    twitter: 'https://twitter.com/terravik',
    linkedin: 'https://linkedin.com/company/terravik',
  },
  
  // SEO
  seo: {
    title: 'TerraVik - Premium Home Gardening Products',
    description: 'Discover premium home gardening products...',
    keywords: 'gardening, plants, organic, home garden...',
  },
  
  // Features
  features: [
    'Premium quality products',
    'Sustainable farming practices',
    'Expert support and guidance',
    'Competitive pricing',
    'Fast and reliable delivery',
  ],
}
```

### Hawai Agro Brand

```javascript
{
  id: 'hawai-agro',
  name: 'Hawai Agro',
  tagline: 'Hariyali Ki Nayi Hawa',
  description: 'Organic fertilizers and sustainable farming solutions for farmers',
  
  // Colors
  colors: {
    primary: '#1b5e20',      // Forest green
    secondary: '#558b2f',    // Leaf green
    accent: '#81c784',       // Light green
    // ... other colors
  },
  
  // ... other properties
}
```

## 🎯 URL-Based Brand Detection

The system automatically detects the brand from the URL path:

```
/terravik → TerraVik theme
/terravik/products → TerraVik theme
/terravik/research → TerraVik theme
/terravik/contact → TerraVik theme
/terravik/about → TerraVik theme

/hawai-agro → Hawai Agro theme
/hawai-agro/products → Hawai Agro theme
/hawai-agro/research → Hawai Agro theme
/hawai-agro/contact → Hawai Agro theme
/hawai-agro/about → Hawai Agro theme
```

## 🪝 Using the Brand System

### 1. Using the useBrand Hook

```jsx
import { useBrand } from '@/hooks/useBrand';

export const MyComponent = () => {
  const { brand, colors, routes, getColor, getGradient } = useBrand();

  return (
    <div style={{ backgroundColor: colors.primary }}>
      <h1>{brand.name}</h1>
      <p>{brand.tagline}</p>
      <button style={{ backgroundColor: colors.secondary }}>
        Click me
      </button>
    </div>
  );
};
```

### 2. Using the useBrandContext Hook

```jsx
import { useBrandContext } from '@/context/BrandContext';

export const MyComponent = () => {
  const { 
    brandId, 
    brand, 
    colors, 
    gradients, 
    routes, 
    contact, 
    social, 
    features 
  } = useBrandContext();

  return (
    <div>
      <h1>{brand.name}</h1>
      <p>Email: {contact.email}</p>
    </div>
  );
};
```

### 3. Using Configuration Functions

```jsx
import {
  getBrandConfig,
  getBrandColor,
  getBrandGradient,
  getBrandIdFromPath,
  getBrandByPath,
  getBrandCSSVariables,
  applyBrandTheme,
} from '@/config/brandConfig';

// Get brand by ID
const brand = getBrandConfig('terravik');

// Get specific color
const primaryColor = getBrandColor('terravik', 'primary');

// Get gradient
const gradient = getBrandGradient('terravik', 'primary');

// Get brand from URL path
const brandId = getBrandIdFromPath('/terravik/products');

// Get brand object from path
const brand = getBrandByPath('/terravik/products');

// Get CSS variables
const cssVars = getBrandCSSVariables('terravik');

// Apply theme to document
applyBrandTheme('terravik');
```

## 🎨 CSS Variables

The system uses CSS custom properties for dynamic theming:

```css
/* Primary Colors */
--color-primary: #2d5016;
--color-secondary: #7cb342;
--color-accent: #d4af37;

/* Extended Colors */
--color-light: #f1f5e8;
--color-lighter: #e0ebd0;
--color-dark: #1b3a0a;
--color-darker: #0f2305;

/* Semantic Colors */
--color-success: #4caf50;
--color-warning: #ff9800;
--color-error: #f44336;
--color-info: #2196f3;

/* Gradients */
--gradient-primary: linear-gradient(135deg, #2d5016 0%, #7cb342 100%);
--gradient-accent: linear-gradient(135deg, #7cb342 0%, #d4af37 100%);
--gradient-dark: linear-gradient(135deg, #1b3a0a 0%, #2d5016 100%);

/* Layout */
--container-max-width: 1200px;
--card-radius: 8px;
--button-radius: 6px;
```

### Using CSS Variables in Styles

```css
.button {
  background-color: var(--color-primary);
  color: white;
  border-radius: var(--button-radius);
}

.card {
  background: var(--gradient-primary);
  border-radius: var(--card-radius);
}

.hero {
  background: var(--gradient-accent);
}
```

## 🔄 Dynamic Theme Switching

### Automatic Theme Switching

The theme automatically switches when the URL changes:

```jsx
// User navigates to /terravik
// → TerraVik theme is applied

// User navigates to /hawai-agro
// → Hawai Agro theme is applied
```

### Manual Theme Switching

Use the ThemeSwitcher component:

```jsx
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export const Header = () => {
  return (
    <header>
      <h1>My App</h1>
      <ThemeSwitcher />
    </header>
  );
};
```

## 📱 Component Integration

### Updated Components

All components have been updated to use the brand context:

1. **Navbar** - Uses brand colors and routes
2. **Footer** - Uses brand contact info and social links
3. **HeroSection** - Uses brand colors and description
4. **ProductCard** - Uses brand accent color
5. **DownloadCard** - Uses brand accent color
6. **All Pages** - Use brand data and colors

### Example: Updated Navbar

```jsx
import { useBrandContext } from '@/context/BrandContext';

export const Navbar = () => {
  const { brand, routes, colors } = useBrandContext();

  return (
    <nav style={{ backgroundColor: colors.primary }}>
      <Link to={routes.home}>{brand.name}</Link>
      {/* Navigation items */}
    </nav>
  );
};
```

## 🔧 Configuration Functions

### getBrandConfig(brandId)
Returns the complete brand configuration object.

```javascript
const brand = getBrandConfig('terravik');
```

### getAllBrands()
Returns all brands configuration.

```javascript
const allBrands = getAllBrands();
```

### getBrandIdFromPath(pathname)
Extracts brand ID from URL path.

```javascript
const brandId = getBrandIdFromPath('/terravik/products');
// Returns: 'terravik'
```

### getBrandByPath(pathname)
Returns brand configuration from URL path.

```javascript
const brand = getBrandByPath('/terravik/products');
```

### isPathForBrand(pathname, brandId)
Checks if path belongs to a specific brand.

```javascript
const isTerravik = isPathForBrand('/terravik/products', 'terravik');
// Returns: true
```

### getBrandCSSVariables(brandId)
Returns CSS variables object for a brand.

```javascript
const cssVars = getBrandCSSVariables('terravik');
// Returns: { '--color-primary': '#2d5016', ... }
```

### applyBrandTheme(brandId)
Applies brand theme to document.

```javascript
applyBrandTheme('terravik');
```

### getBrandColor(brandId, colorName)
Gets specific color from brand.

```javascript
const color = getBrandColor('terravik', 'primary');
// Returns: '#2d5016'
```

### getBrandGradient(brandId, gradientName)
Gets specific gradient from brand.

```javascript
const gradient = getBrandGradient('terravik', 'primary');
// Returns: 'linear-gradient(135deg, #2d5016 0%, #7cb342 100%)'
```

## ➕ Adding a New Brand

### Step 1: Add Brand Configuration

Edit `src/config/brandConfig.js`:

```javascript
export const brands = {
  terravik: { /* ... */ },
  hawaiAgro: { /* ... */ },
  newBrand: {
    id: 'new-brand',
    name: 'New Brand',
    tagline: 'Your tagline',
    description: 'Your description',
    colors: {
      primary: '#color1',
      secondary: '#color2',
      accent: '#color3',
      // ... other colors
    },
    gradients: {
      primary: 'linear-gradient(...)',
      // ... other gradients
    },
    routes: {
      home: '/new-brand',
      products: '/new-brand/products',
      // ... other routes
    },
    contact: { /* ... */ },
    social: { /* ... */ },
    seo: { /* ... */ },
    features: [ /* ... */ ],
  },
};
```

### Step 2: Update Path Mapping

In `getBrandIdFromPath()` function:

```javascript
const pathToBrandMap = {
  'terravik': 'terravik',
  'hawai-agro': 'hawaiAgro',
  'new-brand': 'newBrand',  // Add this
};
```

### Step 3: Add Routes

The routes are automatically handled by the existing route structure.

## 🎯 Best Practices

### 1. Always Use Brand Context in Components

```jsx
// ✅ Good
const { colors, brand } = useBrandContext();

// ❌ Avoid
const colors = { primary: '#2d5016' };
```

### 2. Use CSS Variables for Styling

```jsx
// ✅ Good
<div style={{ backgroundColor: 'var(--color-primary)' }}>

// ❌ Avoid
<div style={{ backgroundColor: '#2d5016' }}>
```

### 3. Use Configuration Functions

```jsx
// ✅ Good
const brand = getBrandConfig(brandId);

// ❌ Avoid
const brand = brands[brandId];
```

### 4. Leverage Tailwind Classes

```jsx
// ✅ Good
<div className="bg-primary text-white">

// ❌ Avoid
<div style={{ backgroundColor: colors.primary, color: 'white' }}>
```

## 🧪 Testing Brand Switching

### Test in Browser

1. Navigate to `http://localhost:5173/terravik`
   - Should show TerraVik theme (dark green)

2. Navigate to `http://localhost:5173/hawai-agro`
   - Should show Hawai Agro theme (forest green)

3. Use ThemeSwitcher component
   - Should switch between brands

### Verify Theme Application

1. Check CSS variables in DevTools
   - `--color-primary` should change
   - `--color-secondary` should change

2. Check document title
   - Should update based on brand

3. Check meta description
   - Should update based on brand

## 📊 Brand Comparison

| Property | TerraVik | Hawai Agro |
|----------|----------|-----------|
| Primary Color | #2d5016 (Dark Green) | #1b5e20 (Forest Green) |
| Secondary Color | #7cb342 (Light Green) | #558b2f (Leaf Green) |
| Accent Color | #d4af37 (Gold) | #81c784 (Light Green) |
| Tagline | Liquid Gold | Hariyali Ki Nayi Hawa |
| Focus | Home Gardening | Organic Farming |

## 🚀 Performance Considerations

- Brand detection happens on route change
- CSS variables are applied once per brand switch
- No unnecessary re-renders
- Optimized for production build

## 📚 Files Modified/Created

### New Files
- `src/config/brandConfig.js` - Brand configuration
- `src/hooks/useBrand.js` - Brand hook
- `src/context/BrandContext.jsx` - Brand context
- `src/styles/theme.css` - Theme CSS variables
- `src/components/ThemeSwitcher/ThemeSwitcher.jsx` - Theme switcher

### Updated Files
- `src/App.jsx` - Added BrandProvider
- `src/main.jsx` - Imported theme.css
- `src/components/Navbar/Navbar.jsx` - Uses brand context
- `src/components/Footer/Footer.jsx` - Uses brand context
- `src/components/HeroSection/HeroSection.jsx` - Uses brand context
- `src/pages/Home/Home.jsx` - Uses brand context
- `src/pages/Products/Products.jsx` - Uses brand context
- `src/pages/Research/Research.jsx` - Uses brand context
- `src/pages/Contact/Contact.jsx` - Uses brand context
- `src/pages/About/About.jsx` - Uses brand context
- `src/routes/AppRoutes.jsx` - Simplified routing
- `src/layouts/MainLayout.jsx` - Removed brandId prop

## ✅ Verification Checklist

- [x] Brand configuration system created
- [x] Dynamic theme switching implemented
- [x] CSS variables applied
- [x] All components updated
- [x] Brand context provider added
- [x] Theme switcher component created
- [x] Build successful
- [x] No errors or warnings

---

**Status:** ✅ COMPLETE
**Build:** ✅ SUCCESS
**Ready for:** Production
