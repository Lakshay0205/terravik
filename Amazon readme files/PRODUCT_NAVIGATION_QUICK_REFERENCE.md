# Product Navigation - Quick Reference Guide

## How "Learn More" Works

### ProductCard Component
```javascript
import { useBrandNavigation } from '../../hooks/useBrandNavigation';

export const ProductCard = ({ product, brandColor, onInquiry }) => {
  const { navigateToBrand } = useBrandNavigation();

  const handleLearnMore = () => {
    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigateToBrand(`products/${productSlug}`);
  };

  return (
    <button onClick={handleLearnMore}>
      Learn More
    </button>
  );
};
```

## Navigation Examples

### From TerraVik Home
```
Click "Shop Now"
↓
/terravik/products

Click "Learn More" on "Liquid Gold"
↓
/terravik/products/liquid-gold
```

### From Hawai Agro Home
```
Click "Shop Now"
↓
/hawai-agro/products

Click "Learn More" on "Fermented Organic Manure"
↓
/hawai-agro/products/fermented-organic-manure
```

## Product Details Page Features

### Displayed Information
- ✅ Product image (emoji)
- ✅ Product name and type
- ✅ Price and volume
- ✅ Description
- ✅ Key features list
- ✅ Usage instructions (dosage & frequency)
- ✅ Product specifications
- ✅ Benefits section
- ✅ Inquiry button
- ✅ Navigation buttons

### Navigation from Product Details
```javascript
// Back to Products (maintains brand)
onClick={() => navigateToBrand('products')}

// Inquire Now (scrolls to contact form)
onClick={scrollToContactForm}

// View More Products (maintains brand)
onClick={() => navigateToBrand('products')}
```

## Product Slug Generation

### Formula
```javascript
productSlug = productName.toLowerCase().replace(/\s+/g, '-')
```

### Examples
| Product Name | Slug |
|---|---|
| Liquid Gold | liquid-gold |
| Premium Soil Mix | premium-soil-mix |
| Fermented Organic Manure | fermented-organic-manure |
| Bio Fertilizer | bio-fertilizer |

## Route Structure

### TerraVik
```
/terravik                          → Home
/terravik/products                 → Products Listing
/terravik/products/liquid-gold     → Product Details
/terravik/products/premium-soil-mix → Product Details
/terravik/products/organic-compost → Product Details
/terravik/products/bio-stimulant   → Product Details
```

### Hawai Agro
```
/hawai-agro                                    → Home
/hawai-agro/products                           → Products Listing
/hawai-agro/products/fermented-organic-manure → Product Details
/hawai-agro/products/bio-fertilizer            → Product Details
/hawai-agro/products/neem-oil-extract          → Product Details
/hawai-agro/products/vermicompost              → Product Details
```

## Using useBrandNavigation Hook

### Available Functions

#### 1. navigateToBrand(path)
Programmatic navigation with automatic brand prefix
```javascript
const { navigateToBrand } = useBrandNavigation();

// Navigate to products
navigateToBrand('products');

// Navigate to specific product
navigateToBrand('products/liquid-gold');

// Navigate to about page
navigateToBrand('about');
```

#### 2. getBrandRoute(path)
Get brand-aware route for Link components
```javascript
const { getBrandRoute } = useBrandNavigation();

<Link to={getBrandRoute('products')}>
  View Products
</Link>
```

#### 3. getProductRoute(productSlug)
Get product-specific route
```javascript
const { getProductRoute } = useBrandNavigation();

const route = getProductRoute('liquid-gold');
// Returns: /terravik/products/liquid-gold (if on TerraVik)
// Returns: /hawai-agro/products/liquid-gold (if on Hawai Agro)
```

## Brand Detection

### How It Works
```javascript
import { getBrandIdFromPath } from '../config/brandConfig';

const brandId = getBrandIdFromPath(location.pathname);
// Returns: 'terravik' or 'hawaiAgro'
```

### URL Patterns
- `/terravik/*` → brandId = 'terravik'
- `/hawai-agro/*` → brandId = 'hawaiAgro'

## Product Data Access

### Get Products for Current Brand
```javascript
import { getProductsByBrand } from '../../data/products';
import { useBrandContext } from '../../context/BrandContext';

const { brandId } = useBrandContext();
const products = getProductsByBrand(brandId);
```

### Find Specific Product
```javascript
const productSlug = 'liquid-gold';
const product = products.find(
  (p) => p.name.toLowerCase().replace(/\s+/g, '-') === productSlug
);
```

## Common Patterns

### Pattern 1: Product Card with Learn More
```javascript
const handleLearnMore = () => {
  const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
  navigateToBrand(`products/${productSlug}`);
};

<button onClick={handleLearnMore}>Learn More</button>
```

### Pattern 2: Back to Products Button
```javascript
<button onClick={() => navigateToBrand('products')}>
  Back to Products
</button>
```

### Pattern 3: Shop Now Button
```javascript
<button onClick={() => navigateToBrand('products')}>
  Shop Now
</button>
```

### Pattern 4: Product Not Found Handling
```javascript
if (!product) {
  return (
    <div>
      <h1>Product Not Found</h1>
      <button onClick={() => navigateToBrand('products')}>
        Back to Products
      </button>
    </div>
  );
}
```

## Testing Navigation

### Test Case 1: TerraVik Product Navigation
1. Go to `/terravik`
2. Click "Shop Now"
3. Verify URL is `/terravik/products`
4. Click "Learn More" on any product
5. Verify URL is `/terravik/products/{productSlug}`
6. Verify product details are displayed
7. Click "View More Products"
8. Verify URL is `/terravik/products`

### Test Case 2: Hawai Agro Product Navigation
1. Go to `/hawai-agro`
2. Click "Shop Now"
3. Verify URL is `/hawai-agro/products`
4. Click "Learn More" on any product
5. Verify URL is `/hawai-agro/products/{productSlug}`
6. Verify product details are displayed
7. Click "View More Products"
8. Verify URL is `/hawai-agro/products`

### Test Case 3: Cross-Brand Prevention
1. Go to `/terravik/products/liquid-gold`
2. Manually change URL to `/hawai-agro/products/liquid-gold`
3. Verify "Product Not Found" message appears
4. Click "Back to Products"
5. Verify URL is `/hawai-agro/products` (not `/terravik/products`)

## Troubleshooting

### Issue: "Learn More" button not working
**Solution**: Ensure `navigateToBrand` is imported from `useBrandNavigation` hook

### Issue: Product not found on details page
**Solution**: Verify product slug matches product name (lowercase, spaces replaced with hyphens)

### Issue: Navigation going to wrong brand
**Solution**: Check that `navigateToBrand` is being used instead of hardcoded routes

### Issue: Product details showing wrong brand's product
**Solution**: Verify `getProductsByBrand(brandId)` is being called with correct brandId

## Files Involved

- `src/components/ProductCard/ProductCard.jsx` - "Learn More" button implementation
- `src/pages/ProductDetails/ProductDetails.jsx` - Product details page
- `src/pages/Products/Products.jsx` - Products listing page
- `src/hooks/useBrandNavigation.js` - Navigation hook
- `src/config/brandConfig.js` - Brand detection
- `src/data/products.js` - Product data
- `src/routes/AppRoutes.jsx` - Route definitions
