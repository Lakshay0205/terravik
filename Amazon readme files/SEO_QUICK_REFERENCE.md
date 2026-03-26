# SEO Optimization - Quick Reference Guide

## 🚀 Quick Start

### 1. Add SEO to a Page
```jsx
import { SEOHead } from '../../components/SEOHead'

export const YourPage = () => {
  return (
    <>
      <SEOHead page="your-page-name" />
      {/* Your page content */}
    </>
  )
}
```

### 2. Configure SEO Data
Edit `src/config/seoConfig.js`:
```javascript
export const seoConfig = {
  terravik: {
    yourPage: {
      title: 'Your Page Title (50-60 chars)',
      description: 'Your page description (150-160 chars)',
      keywords: 'keyword1, keyword2, keyword3',
      type: 'website',
      image: 'https://example.com/image.jpg',
    },
  },
}
```

### 3. Use Semantic HTML
```jsx
<main>
  <section aria-label="Section Name">
    <article>
      <h2>Heading</h2>
      <figure>
        <img alt="Descriptive alt text" src="image.jpg" />
        <figcaption>Image caption</figcaption>
      </figure>
    </article>
  </section>
</main>
```

## 📋 Meta Tags Checklist

### Essential Meta Tags
- [x] `<meta name="title">` - Page title
- [x] `<meta name="description">` - Page description
- [x] `<meta name="keywords">` - Relevant keywords
- [x] `<meta name="author">` - Author name
- [x] `<meta name="robots">` - Robots directive
- [x] `<link rel="canonical">` - Canonical URL

### Open Graph Tags
- [x] `<meta property="og:title">`
- [x] `<meta property="og:description">`
- [x] `<meta property="og:image">`
- [x] `<meta property="og:url">`
- [x] `<meta property="og:type">`

### Twitter Card Tags
- [x] `<meta property="twitter:card">`
- [x] `<meta property="twitter:title">`
- [x] `<meta property="twitter:description">`
- [x] `<meta property="twitter:image">`

## 🎯 SEO Best Practices

### Title Tags
- Length: 50-60 characters
- Include primary keyword
- Make it compelling
- Example: "TerraVik - Premium Organic Home Gardening Solutions"

### Meta Descriptions
- Length: 150-160 characters
- Include primary keyword
- Call-to-action
- Example: "Discover TerraVik premium organic gardening products..."

### Keywords
- 3-5 primary keywords
- Long-tail keywords
- Natural placement
- Example: "organic gardening, home garden, liquid fertilizer"

### Headings
- One H1 per page
- Logical hierarchy (H1 → H2 → H3)
- Include keywords naturally
- Descriptive and clear

### Images
- Descriptive alt text
- Lazy loading
- Async decoding
- Optimized file size

## ⚡ Performance Optimization

### Automatic Optimizations
```javascript
// In src/main.jsx
import { initializePerformanceOptimizations } from './utils/performanceUtils'

initializePerformanceOptimizations()
```

### Features
- Image lazy loading
- CSS optimization
- JavaScript deferring
- Resource preloading
- Service Worker caching
- Core Web Vitals monitoring

## ♿ Accessibility Optimization

### Automatic Checks (Development)
```javascript
// In src/main.jsx
import { initializeAccessibilityChecks } from './utils/accessibilityUtils'

initializeAccessibilityChecks()
```

### WCAG 2.1 Level AA Compliance
- Heading hierarchy
- Color contrast (4.5:1)
- Keyboard navigation
- ARIA labels
- Focus indicators
- Touch targets (44x44px)

## 📊 Structured Data

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png"
}
```

### Product Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "description": "Product description",
  "image": "product-image.jpg",
  "offers": {
    "@type": "Offer",
    "price": "999",
    "priceCurrency": "INR"
  }
}
```

## 🔍 SEO Utilities

### Setting Meta Tags
```javascript
import { setSEOMetaTags } from './utils/seoUtils'

setSEOMetaTags({
  title: 'Page Title',
  description: 'Page description',
  canonical: 'https://example.com/page',
  image: 'https://example.com/image.jpg',
})
```

### Generating Schemas
```javascript
import { 
  generateOrganizationSchema,
  generateProductSchema,
  generateBreadcrumbSchema,
  generateFAQSchema
} from './utils/seoUtils'

const schema = generateOrganizationSchema(brand)
```

## 📱 Responsive Images

### Lazy Loading
```jsx
<img 
  src="image.jpg" 
  alt="Descriptive text"
  loading="lazy"
  decoding="async"
/>
```

### Responsive Images
```jsx
<img 
  src="image.jpg"
  srcSet="image-small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1200w"
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
  alt="Descriptive text"
/>
```

## 🎨 Semantic HTML Elements

| Element | Purpose |
|---------|---------|
| `<main>` | Primary content |
| `<article>` | Independent content |
| `<section>` | Thematic grouping |
| `<nav>` | Navigation |
| `<header>` | Header section |
| `<footer>` | Footer section |
| `<figure>` | Images/diagrams |
| `<figcaption>` | Figure caption |
| `<aside>` | Sidebar content |

## 🔗 Internal Linking

### Best Practices
- Use descriptive anchor text
- Link to relevant pages
- Maintain logical structure
- Avoid excessive linking

### Example
```jsx
<a href="/products">Browse our organic products</a>
```

## 📈 Monitoring

### Tools
- Google Search Console
- Google Analytics 4
- Lighthouse
- PageSpeed Insights
- WAVE Accessibility Tool

### Key Metrics
- Organic traffic
- Keyword rankings
- Click-through rate
- Core Web Vitals
- Accessibility score

## 🚀 Deployment

### Pre-Deployment Checklist
- [x] SEO configuration complete
- [x] Meta tags implemented
- [x] Semantic HTML applied
- [x] Images optimized
- [x] Performance optimized
- [x] Accessibility checked
- [x] Build successful

### Post-Deployment
1. Submit sitemap to Google Search Console
2. Monitor Core Web Vitals
3. Track keyword rankings
4. Monitor organic traffic
5. Check accessibility compliance

## 📚 Documentation

- **SEO_OPTIMIZATION_GUIDE.md** - Comprehensive guide
- **SEO_IMPLEMENTATION_SUMMARY.md** - Implementation summary
- **This file** - Quick reference

## 🆘 Troubleshooting

### Meta Tags Not Updating
- Check `src/config/seoConfig.js`
- Verify page name matches config
- Clear browser cache
- Check browser console for errors

### Performance Issues
- Check image sizes
- Verify lazy loading enabled
- Monitor Core Web Vitals
- Use Lighthouse for analysis

### Accessibility Issues
- Run WAVE tool
- Check color contrast
- Verify heading hierarchy
- Test keyboard navigation

## 💡 Tips

1. **Keyword Research**: Use Google Keyword Planner
2. **Content Optimization**: Write for users, not just search engines
3. **Link Building**: Create valuable content that attracts links
4. **Mobile First**: Optimize for mobile devices
5. **Regular Updates**: Keep content fresh and relevant
6. **Monitor Analytics**: Track performance and adjust strategy
7. **Test Accessibility**: Use WAVE and Lighthouse regularly
8. **Optimize Images**: Use modern formats and compression

---

**Last Updated**: 2024
**Status**: Production Ready
**Quick Reference Version**: 1.0
