# Product Catalog - Visual Guide & Code Examples

## Page Layout Overview

```
┌─────────────────────────────────────────────────────────┐
│                    HEADER SECTION                        │
│  "TerraVik - Products"                                  │
│  "Explore our complete range of..."                     │
├─────────────────────────────────────────────────────────┤
│                   SEARCH BAR                             │
│  [🔍 Search products...]                                │
├─────────────────────────────────────────────────────────┤
│              CATEGORY FILTER BUTTONS                     │
│  [All] [Liquid Fertilizer] [Soil] [Compost] [...]      │
│  Showing 4 of 4 products                                │
├─────────────────────────────────────────────────────────┤
│                  PRODUCTS GRID                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   💧         │  │   🌱         │  │   ♻️         │  │
│  │ Liquid Gold  │  │ Premium Soil │  │ Org. Compost│  │
│  │ 1L bottle    │  │ 5kg bag      │  │ 10kg bag    │  │
│  │ ₹499         │  │ ₹599         │  │ ₹799        │  │
│  │ [Inquire]    │  │ [Inquire]    │  │ [Inquire]   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│  ┌──────────────┐                                       │
│  │   🌿         │                                       │
│  │ Bio Stimulant│                                       │
│  │ 500ml bottle │                                       │
│  │ ₹349         │                                       │
│  │ [Inquire]    │                                       │
│  └──────────────┘                                       │
└─────────────────────────────────────────────────────────┘
```

## Product Card Detailed View

```
┌─────────────────────────────────┐
│          💧 (Emoji)             │  ← Product Image
├─────────────────────────────────┤
│ [LIQUID FERTILIZER]             │  ← Category Badge
│ Liquid Gold                     │  ← Product Name
│ Liquid Organic Fermented Manure │  ← Product Type
│ 📦 1L bottle                    │  ← Volume
│                                 │
│ Premium liquid organic fermented│  ← Description
│ manure designed for home...     │
│                                 │
│ Key Features:                   │  ← Features Section
│ ✓ Enhances soil fertility       │
│ ✓ Boosts root growth            │
│ ✓ Improves plant vigor          │
│ +2 more features                │
│                                 │
│ ┌─────────────────────────────┐ │  ← Usage Box
│ │ Usage:                      │ │
│ │ Dosage: Mix 5–10 ml per 1L │ │
│ │ Frequency: Every 15 days   │ │
│ └─────────────────────────────┘ │
│                                 │
│ Benefits:                       │  ← Benefits Tags
│ [Rich in nutrients] [Easy to]  │
│ [Eco-friendly] [Indoor plants] │
│                                 │
│ ₹499          [Inquire]         │  ← Price & Button
└─────────────────────────────────┘
```

## Inquiry Modal

```
┌──────────────────────────────────────────────────────┐
│ 💧 Liquid Gold                              ✕        │  ← Header
│ Liquid Organic Fermented Manure                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Product Information    │  Usage Instructions        │
│ Volume: 1L bottle      │  Dosage: Mix 5–10 ml...   │
│ Price: ₹499            │  Frequency: Every 15 days │
│ Category: Liquid...    │                            │
│                                                      │
│ Key Features                                         │
│ ✓ Enhances soil fertility                           │
│ ✓ Boosts root growth                                │
│ ✓ Improves plant vigor                              │
│ ✓ High organic carbon                               │
│ ✓ Balanced pH                                       │
│                                                      │
│ Benefits                                             │
│ [Rich in nutrients] [Perfect for indoor]            │
│ [Easy to apply] [Eco-friendly]                      │
│                                                      │
│ Send Inquiry                                         │
│ [Your Name          ] [Your Email         ]         │
│ [Your Phone                              ]         │
│ [Your Message (optional)                 ]         │
│ [                                        ]         │
│                                                      │
│ [Submit Inquiry]  [Cancel]                          │
└──────────────────────────────────────────────────────┘
```

## Code Examples

### 1. Adding a New Product

```javascript
// In src/data/products.js
{
  id: 5,
  name: 'Mycorrhizal Fungi',
  type: 'Soil Microbe Inoculant',
  volume: '250g bag',
  description: 'Beneficial fungi for enhanced nutrient uptake and root development',
  price: 449,
  image: '🍄',
  category: 'Soil Enhancer',
  features: [
    'Enhances nutrient absorption',
    'Improves drought tolerance',
    'Increases root surface area',
    'Boosts plant immunity',
    'Reduces transplant shock',
  ],
  usage: {
    dosage: 'Mix 5g per 1L soil',
    frequency: 'Apply at planting',
  },
  benefits: [
    'Better nutrient uptake',
    'Stronger root system',
    'Improved plant health',
    'Sustainable solution',
  ],
}
```

### 2. Customizing the Inquiry Form

```javascript
// In src/pages/Products/Products.jsx
// Add new field to form state
const [inquiryForm, setInquiryForm] = useState({
  name: '',
  email: '',
  phone: '',
  message: '',
  quantity: '', // NEW FIELD
  deliveryDate: '', // NEW FIELD
});

// Add input fields in the modal form
<input
  type="number"
  name="quantity"
  placeholder="Quantity needed"
  value={inquiryForm.quantity}
  onChange={handleFormChange}
  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
/>

<input
  type="date"
  name="deliveryDate"
  placeholder="Preferred delivery date"
  value={inquiryForm.deliveryDate}
  onChange={handleFormChange}
  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
/>
```

### 3. Integrating with Backend

```javascript
// In src/pages/Products/Products.jsx
const handleSubmitInquiry = async (e) => {
  e.preventDefault();
  
  try {
    // Send to backend API
    const response = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product: selectedProduct,
        ...inquiryForm,
      }),
    });
    
    if (response.ok) {
      // Show success message
      alert('Inquiry submitted successfully!');
      setSelectedProduct(null);
      setInquiryForm({ name: '', email: '', phone: '', message: '' });
    }
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    alert('Failed to submit inquiry. Please try again.');
  }
};
```

### 4. Adding Product Sorting

```javascript
// In src/pages/Products/Products.jsx
const [sortBy, setSortBy] = useState('name'); // 'name', 'price-low', 'price-high'

// Add sorting logic
const sortedProducts = [...filteredProducts].sort((a, b) => {
  if (sortBy === 'name') {
    return a.name.localeCompare(b.name);
  } else if (sortBy === 'price-low') {
    return a.price - b.price;
  } else if (sortBy === 'price-high') {
    return b.price - a.price;
  }
  return 0;
});

// Add sort buttons
<div className="flex gap-3 justify-center mb-8">
  <button
    onClick={() => setSortBy('name')}
    className={sortBy === 'name' ? 'active' : ''}
  >
    Sort by Name
  </button>
  <button
    onClick={() => setSortBy('price-low')}
    className={sortBy === 'price-low' ? 'active' : ''}
  >
    Price: Low to High
  </button>
  <button
    onClick={() => setSortBy('price-high')}
    className={sortBy === 'price-high' ? 'active' : ''}
  >
    Price: High to Low
  </button>
</div>
```

### 5. Adding Wishlist Feature

```javascript
// In src/pages/Products/Products.jsx
const [wishlist, setWishlist] = useState([]);

const toggleWishlist = (productId) => {
  setWishlist((prev) =>
    prev.includes(productId)
      ? prev.filter((id) => id !== productId)
      : [...prev, productId]
  );
};

// In ProductCard component
<motion.button
  whileHover={{ scale: 1.1 }}
  onClick={() => toggleWishlist(product.id)}
  className="text-2xl"
>
  {wishlist.includes(product.id) ? '❤️' : '🤍'}
</motion.button>
```

## Search & Filter Examples

### Example 1: Search for "Liquid"
```
Input: "liquid"
Results:
- Liquid Gold (TerraVik)
- Fermented Organic Manure (Hawai Agro)
- Bio Stimulant (TerraVik) - contains "liquid" in description
```

### Example 2: Filter by "Compost"
```
Selected Category: Compost
Results:
- Organic Compost (TerraVik)
- Vermicompost (Hawai Agro)
```

### Example 3: Search + Filter Combined
```
Search: "organic"
Category: "Liquid Fertilizer"
Results:
- Liquid Gold (TerraVik)
- Fermented Organic Manure (Hawai Agro)
```

## Responsive Behavior

### Mobile (< 640px)
```
┌─────────────────┐
│   Search Bar    │
├─────────────────┤
│ [All] [Liquid]  │
│ [Soil] [Compost]│
├─────────────────┤
│  ┌───────────┐  │
│  │ Product 1 │  │
│  └───────────┘  │
│  ┌───────────┐  │
│  │ Product 2 │  │
│  └───────────┘  │
│  ┌───────────┐  │
│  │ Product 3 │  │
│  └───────────┘  │
└─────────────────┘
```

### Tablet (640-1024px)
```
┌──────────────────────────────┐
│      Search Bar              │
├──────────────────────────────┤
│ [All] [Liquid] [Soil] [...]  │
├──────────────────────────────┤
│ ┌──────────┐  ┌──────────┐  │
│ │Product 1 │  │Product 2 │  │
│ └──────────┘  └──────────┘  │
│ ┌──────────┐  ┌──────────┐  │
│ │Product 3 │  │Product 4 │  │
│ └──────────┘  └──────────┘  │
└──────────────────────────────┘
```

### Desktop (> 1024px)
```
┌────────────────────────────────────────────┐
│           Search Bar                       │
├────────────────────────────────────────────┤
│ [All] [Liquid] [Soil] [Compost] [...]     │
├────────────────────────────────────────────┤
│ ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│ │Product 1 │  │Product 2 │  │Product 3 │ │
│ └──────────┘  └──────────┘  └──────────┘ │
│ ┌──────────┐                              │
│ │Product 4 │                              │
│ └──────────┘                              │
└────────────────────────────────────────────┘
```

## Animation Sequences

### Card Hover Animation
```
1. Mouse enters card
   - Shadow elevation: 0.5rem → 1rem
   - Product image scale: 1 → 1.1
   - Duration: 0.3s

2. Mouse leaves card
   - Shadow elevation: 1rem → 0.5rem
   - Product image scale: 1.1 → 1
   - Duration: 0.3s
```

### Modal Open Animation
```
1. User clicks "Inquire"
   - Modal scale: 0.9 → 1
   - Modal opacity: 0 → 1
   - Duration: 0.3s
   - Easing: ease-out

2. Modal closes
   - Modal scale: 1 → 0.9
   - Modal opacity: 1 → 0
   - Duration: 0.3s
   - Easing: ease-in
```

### Filter Button Click
```
1. User clicks category button
   - Button scale: 1 → 0.95 (tap)
   - Duration: 0.1s

2. Button releases
   - Button scale: 0.95 → 1
   - Duration: 0.1s
   - Background color changes to brand color
```

## Performance Optimization Tips

### 1. Lazy Load Product Images
```javascript
<img
  src={product.image}
  alt={product.name}
  loading="lazy"
/>
```

### 2. Memoize ProductCard
```javascript
import { memo } from 'react';

export const ProductCard = memo(({ product, brandColor, onInquiry }) => {
  // Component code
});
```

### 3. Debounce Search
```javascript
import { useCallback } from 'react';

const handleSearch = useCallback(
  debounce((term) => setSearchTerm(term), 300),
  []
);
```

## Testing Scenarios

### Scenario 1: User Searches for Product
1. User types "Liquid" in search box
2. Products filter to show only liquid products
3. Results counter updates to "2 of 4"
4. User sees Liquid Gold and Fermented Organic Manure

### Scenario 2: User Filters by Category
1. User clicks "Compost" category
2. Products filter to show only compost products
3. Button highlights with brand color
4. Results counter updates to "2 of 4"

### Scenario 3: User Sends Inquiry
1. User clicks "Inquire" on Liquid Gold
2. Modal opens with product details
3. User fills form (name, email, phone, message)
4. User clicks "Submit Inquiry"
5. Form data is submitted
6. Modal closes
7. Success message appears

### Scenario 4: User Resets Filters
1. User has active search and category filter
2. User clicks "All" category
3. User clears search box
4. All products display again
5. Results counter shows "4 of 4"

## Accessibility Features

- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast meets WCAG standards
- Form labels associated with inputs
- Error messages clearly displayed

## SEO Optimization

- Semantic heading hierarchy (h1, h2, h3)
- Descriptive product names and descriptions
- Meta tags for product pages
- Structured data for products
- Mobile-friendly responsive design
- Fast page load times

---

**Version**: 1.0
**Last Updated**: 2024
**Status**: Production Ready
