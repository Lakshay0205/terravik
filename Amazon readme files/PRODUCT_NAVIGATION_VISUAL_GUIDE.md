# Product Navigation - Visual Guide

## Navigation Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     BRAND DETECTION LAYER                       │
│                                                                 │
│  URL: /terravik/products/liquid-gold                           │
│  ↓                                                              │
│  getBrandIdFromPath() → 'terravik'                             │
│  ↓                                                              │
│  brandPrefix = 'terravik'                                      │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   NAVIGATION HOOK LAYER                         │
│                                                                 │
│  useBrandNavigation()                                           │
│  ├─ navigateToBrand('products/liquid-gold')                   │
│  ├─ getBrandRoute('products')                                 │
│  └─ getProductRoute('liquid-gold')                            │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    COMPONENT LAYER                              │
│                                                                 │
│  ProductCard                                                    │
│  ├─ handleLearnMore()                                          │
│  │  └─ navigateToBrand('products/liquid-gold')               │
│  └─ [Learn More] button                                        │
│                                                                 │
│  ProductDetails                                                 │
│  ├─ [View More Products] → navigateToBrand('products')        │
│  ├─ [Back to Products] → navigateToBrand('products')          │
│  └─ [Inquire Now] → scrollToContactForm()                     │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    ROUTE LAYER                                  │
│                                                                 │
│  /terravik/products/liquid-gold                                │
│  /hawai-agro/products/fermented-organic-manure                 │
└─────────────────────────────────────────────────────────────────┘
```

## User Journey - TerraVik

```
START
  ↓
┌─────────────────────────────────────┐
│ /terravik (Home Page)               │
│                                     │
│ [Shop Now] [Learn More]             │
└─────────────────────────────────────┘
  ↓ Click "Shop Now"
┌─────────────────────────────────────┐
│ /terravik/products (Products List)  │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Product Card: Liquid Gold       │ │
│ │ 💧                              │ │
│ │ Price: ₹499                     │ │
│ │ [Learn More] [Inquire]          │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Product Card: Premium Soil Mix  │ │
│ │ 🌱                              │ │
│ │ Price: ₹599                     │ │
│ │ [Learn More] [Inquire]          │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
  ↓ Click "Learn More" on Liquid Gold
┌─────────────────────────────────────┐
│ /terravik/products/liquid-gold      │
│ (Product Details)                   │
│                                     │
│ 💧 Liquid Gold                      │
│ Liquid Organic Fermented Manure     │
│ Price: ₹499 | Volume: 1L bottle     │
│                                     │
│ Description:                        │
│ Premium liquid organic fermented    │
│ manure designed for home gardening  │
│ and indoor plants                   │
│                                     │
│ Key Features:                       │
│ ✓ Enhances soil fertility           │
│ ✓ Boosts root growth                │
│ ✓ Improves plant vigor              │
│                                     │
│ Usage Instructions:                 │
│ Dosage: Mix 5–10 ml per 1L water   │
│ Frequency: Apply every 15 days      │
│                                     │
│ Specifications:                     │
│ Name: Liquid Gold                   │
│ Type: Liquid Organic Fermented...   │
│ Category: Liquid Fertilizer         │
│ Volume: 1L bottle                   │
│ Price: ₹499                         │
│ Availability: In Stock              │
│                                     │
│ Benefits:                           │
│ • Rich in organic nutrients         │
│ • Perfect for indoor plants         │
│ • Easy to apply                     │
│ • Eco-friendly formula              │
│                                     │
│ [Inquire Now] [View More Products]  │
│ [Back to Products]                  │
└─────────────────────────────────────┘
  ↓ Click "View More Products"
┌─────────────────────────────────────┐
│ /terravik/products (Products List)  │
│ (Back to products listing)          │
└─────────────────────────────────────┘
  ↓
END
```

## User Journey - Hawai Agro

```
START
  ↓
┌─────────────────────────────────────┐
│ /hawai-agro (Home Page)             │
│                                     │
│ [Shop Now] [Learn More]             │
└─────────────────────────────────────┘
  ↓ Click "Shop Now"
┌─────────────────────────────────────┐
│ /hawai-agro/products (Products List)│
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Product Card: Fermented Organic │ │
│ │ Manure                          │ │
│ │ 🌾                              │ │
│ │ Price: ₹1299                    │ │
│ │ [Learn More] [Inquire]          │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Product Card: Bio Fertilizer    │ │
│ │ 🦠                              │ │
│ │ Price: ₹599                     │ │
│ │ [Learn More] [Inquire]          │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
  ↓ Click "Learn More" on Fermented Organic Manure
┌─────────────────────────────────────┐
│ /hawai-agro/products/               │
│ fermented-organic-manure            │
│ (Product Details)                   │
│                                     │
│ 🌾 Fermented Organic Manure         │
│ Liquid Organic Fertilizer           │
│ Price: ₹1299 | Volume: 20L drum     │
│                                     │
│ Description:                        │
│ Premium fermented organic manure    │
│ for large-scale farming and         │
│ sustainable agriculture             │
│                                     │
│ Key Features:                       │
│ ✓ Increases soil fertility          │
│ ✓ Boosts crop yield                 │
│ ✓ Improves soil structure           │
│                                     │
│ Usage Instructions:                 │
│ Dosage: Mix 50–100 ml per 10L water│
│ Frequency: Apply every 20 days      │
│                                     │
│ Specifications:                     │
│ Name: Fermented Organic Manure      │
│ Type: Liquid Organic Fertilizer     │
│ Category: Liquid Fertilizer         │
│ Volume: 20L drum                    │
│ Price: ₹1299                        │
│ Availability: In Stock              │
│                                     │
│ Benefits:                           │
│ • Proven yield increase             │
│ • Cost-effective solution           │
│ • Sustainable farming               │
│ • Farmer-tested formula             │
│                                     │
│ [Inquire Now] [View More Products]  │
│ [Back to Products]                  │
└─────────────────────────────────────┘
  ↓ Click "View More Products"
┌─────────────────────────────────────┐
│ /hawai-agro/products (Products List)│
│ (Back to products listing)          │
└─────────────────────────────────────┘
  ↓
END
```

## Product Card Component

```
┌─────────────────────────────────────────────────────────┐
│                    PRODUCT CARD                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │                                                   │  │
│  │              💧 (Product Image)                  │  │
│  │                                                   │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  [LIQUID FERTILIZER] (Category Badge)                  │
│                                                         │
│  Liquid Gold (Product Name)                            │
│  Liquid Organic Fermented Manure (Type)                │
│                                                         │
│  📦 1L bottle (Volume)                                 │
│                                                         │
│  Premium liquid organic fermented manure designed      │
│  for home gardening and indoor plants (Description)   │
│                                                         │
│  Key Features:                                         │
│  ✓ Enhances soil fertility                            │
│  ✓ Boosts root growth                                 │
│  ✓ Improves plant vigor                               │
│  +2 more features                                      │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │ Usage:                                          │  │
│  │ Dosage: Mix 5–10 ml per 1L water               │  │
│  │ Frequency: Apply every 15 days                 │  │
│  └─────────────────────────────────────────────────┘  │
│                                                         │
│  Benefits:                                             │
│  [Rich in organic nutrients] [Perfect for indoor]     │
│  [Easy to apply] [Eco-friendly formula]               │
│                                                         │
│  ₹499                [Learn More] [Inquire]           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Product Details Page Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ ← Back to Products                                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────────────────┐ │
│  │                      │  │ [LIQUID FERTILIZER]              │ │
│  │                      │  │                                  │ │
│  │        💧            │  │ Liquid Gold                      │ │
│  │                      │  │ Liquid Organic Fermented Manure  │ │
│  │   (Product Image)    │  │                                  │ │
│  │                      │  │ Premium liquid organic fermented │ │
│  │                      │  │ manure designed for home         │ │
│  │                      │  │ gardening and indoor plants      │ │
│  │                      │  │                                  │ │
│  │                      │  │ ₹499 | 📦 1L bottle              │ │
│  │                      │  │                                  │ │
│  │                      │  │ Key Benefits:                    │ │
│  │                      │  │ ✓ Enhances soil fertility        │ │
│  │                      │  │ ✓ Boosts root growth            │ │
│  │                      │  │ ✓ Improves plant vigor          │ │
│  │                      │  │ ✓ High organic carbon           │ │
│  │                      │  │ ✓ Balanced pH                   │ │
│  │                      │  │                                  │ │
│  │                      │  │ [Inquire Now] [View More]        │ │
│  └──────────────────────┘  └──────────────────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ USAGE INSTRUCTIONS                                              │
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │ 💧 Dosage            │  │ 📦 Frequency         │            │
│  │                      │  │                      │            │
│  │ Mix 5–10 ml per 1L   │  │ Apply every 15 days  │            │
│  │ water                │  │                      │            │
│  └──────────────────────┘  └──────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ PRODUCT SPECIFICATIONS                                          │
│                                                                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Product Details          │ Packaging & Pricing             │ │
│  │                          │                                 │ │
│  │ Product Name: Liquid Gold│ Volume: 1L bottle               │ │
│  │ Type: Liquid Organic...  │ Price: ₹499                     │ │
│  │ Category: Liquid...      │ Availability: In Stock          │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ WHY CHOOSE THIS PRODUCT?                                        │
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │ ✓ Rich in organic    │  │ ✓ Perfect for indoor │            │
│  │   nutrients          │  │   plants             │            │
│  └──────────────────────┘  └──────────────────────┘            │
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │ ✓ Easy to apply      │  │ ✓ Eco-friendly       │            │
│  │                      │  │   formula            │            │
│  └──────────────────────┘  └──────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ READY TO ORDER?                                                 │
│                                                                 │
│ Have questions about Liquid Gold? Contact us today for more    │
│ information.                                                    │
│                                                                 │
│ [Inquire Now] [View All Products]                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Route Navigation Flow

```
                    TERRAVIK ROUTES
                         │
        ┌────────────────┼────────────────┐
        │                │                │
    /terravik        /terravik/        /terravik/
    (Home)           products          products/:productId
                     (Listing)         (Details)
        │                │                │
        │                │                │
    [Shop Now]      [Learn More]      [View More]
        │                │                │
        └────────────────┴────────────────┘
                         │
                    HAWAI AGRO ROUTES
                         │
        ┌────────────────┼────────────────┐
        │                │                │
    /hawai-agro     /hawai-agro/      /hawai-agro/
    (Home)          products          products/:productId
                    (Listing)         (Details)
        │                │                │
        │                │                │
    [Shop Now]      [Learn More]      [View More]
        │                │                │
        └────────────────┴────────────────┘
```

## Product Slug Generation

```
Product Name Input
        │
        ↓
.toLowerCase()
        │
        ↓
.replace(/\s+/g, '-')
        │
        ↓
Product Slug Output

Examples:
─────────────────────────────────────────────────────
Input: "Liquid Gold"
↓
Output: "liquid-gold"
─────────────────────────────────────────────────────
Input: "Premium Soil Mix"
↓
Output: "premium-soil-mix"
─────────────────────────────────────────────────────
Input: "Fermented Organic Manure"
↓
Output: "fermented-organic-manure"
─────────────────────────────────────────────────────
```

## Brand Detection Flow

```
Current URL
    │
    ↓
/terravik/products/liquid-gold
    │
    ↓
getBrandIdFromPath()
    │
    ├─ Extract path segments
    │
    ├─ Check first segment
    │
    ├─ If 'terravik' → return 'terravik'
    │
    └─ If 'hawai-agro' → return 'hawaiAgro'
    │
    ↓
brandId = 'terravik'
    │
    ↓
brandPrefix = 'terravik'
    │
    ↓
Used in all navigation functions
```

## Navigation Hook Usage

```
Component
    │
    ├─ Import useBrandNavigation
    │
    ├─ const { navigateToBrand } = useBrandNavigation()
    │
    ├─ User clicks button
    │
    ├─ navigateToBrand('products/liquid-gold')
    │
    ├─ Hook detects current brand from URL
    │
    ├─ Hook prepends brand prefix
    │
    ├─ navigateToBrand() becomes:
    │  /terravik/products/liquid-gold (if on TerraVik)
    │  /hawai-agro/products/liquid-gold (if on Hawai Agro)
    │
    ├─ React Router navigates to new URL
    │
    └─ Component re-renders with new product data
```

## Cross-Brand Prevention

```
User on /terravik/products/liquid-gold
    │
    ├─ Clicks "View More Products"
    │
    ├─ navigateToBrand('products') is called
    │
    ├─ Hook detects brand from URL: 'terravik'
    │
    ├─ Route becomes: /terravik/products
    │
    └─ User stays on TerraVik (NOT redirected to Hawai Agro)

User on /hawai-agro/products/fermented-organic-manure
    │
    ├─ Clicks "View More Products"
    │
    ├─ navigateToBrand('products') is called
    │
    ├─ Hook detects brand from URL: 'hawaiAgro'
    │
    ├─ Route becomes: /hawai-agro/products
    │
    └─ User stays on Hawai Agro (NOT redirected to TerraVik)
```

---

This visual guide provides a comprehensive overview of the product navigation system and how all components work together to maintain brand context throughout the user journey.
