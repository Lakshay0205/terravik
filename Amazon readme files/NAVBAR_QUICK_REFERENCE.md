# 🎯 Navbar - Quick Reference Guide

## 🚀 Quick Start

### Import and Use
```jsx
import { Navbar } from '@/components/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      {/* Your content */}
    </>
  );
};
```

## 📦 Three Navbar Variants

### 1. Basic Navbar
```jsx
import { Navbar } from '@/components/Navbar';
```
**Features:** Sticky, mobile menu, animations, responsive

### 2. Enhanced Navbar
```jsx
import { NavbarEnhanced } from '@/components/Navbar';
```
**Features:** Basic + Search + CTA Button

### 3. Navbar with Dropdown
```jsx
import { NavbarWithDropdown } from '@/components/Navbar';
```
**Features:** Enhanced + Dropdown Menus

## 📋 Menu Items

### Default Menu
```javascript
[
  { label: 'Home', href: routes.home },
  { label: 'About Us', href: routes.about },
  { label: 'Products', href: routes.products },
  { label: 'Research & Innovation', href: routes.research },
  { label: 'Contact Us', href: routes.contact },
]
```

### With Dropdowns
```javascript
{
  label: 'Products',
  href: routes.products,
  submenu: [
    { label: 'All Products', href: routes.products },
    { label: 'Featured', href: `${routes.products}?filter=featured` },
    { label: 'New Arrivals', href: `${routes.products}?filter=new` },
  ],
}
```

## 🎨 Styling

### Navbar Container
```jsx
className="sticky top-0 z-50 shadow-lg"
style={{ backgroundColor: colors.primary }}
```

### Menu Items
```jsx
className="px-4 py-2 text-white font-medium rounded-lg hover:bg-white/10"
```

### Mobile Menu
```jsx
className="md:hidden fixed top-16 left-0 right-0 z-40"
```

### CTA Button
```jsx
className="px-6 py-2 rounded-lg font-semibold text-white"
style={{ backgroundColor: colors.secondary }}
```

## 🎬 Animations

### Hover Scale
```jsx
<motion.div whileHover={{ scale: 1.05 }}>
  Menu Item
</motion.div>
```

### Mobile Menu Stagger
```javascript
staggerChildren: 0.05,
delayChildren: 0.1,
```

### Icon Rotation
```jsx
animate={{ rotate: isOpen ? 180 : 0 }}
```

## 📱 Responsive Breakpoints

| Breakpoint | Display | Features |
|-----------|---------|----------|
| Mobile | < 768px | Hamburger menu, logo only |
| Tablet | 768px-1024px | Partial menu, logo text |
| Desktop | > 1024px | Full menu, search, CTA |

## 🔧 Customization

### Change Colors
```jsx
// Automatically uses brand colors
const { colors } = useBrandContext();
style={{ backgroundColor: colors.primary }}
```

### Add Menu Item
```javascript
const menuItems = [
  ...existingItems,
  { label: 'New Item', href: '/new' },
];
```

### Add Search
```jsx
// Use NavbarEnhanced for built-in search
import { NavbarEnhanced } from '@/components/Navbar';
```

### Add Dropdown
```jsx
// Use NavbarWithDropdown for dropdowns
import { NavbarWithDropdown } from '@/components/Navbar';
```

## 🎯 Features

### Sticky Positioning
- Navbar stays at top while scrolling
- High z-index for layering
- Smooth shadow transitions

### Mobile Hamburger Menu
- Animated icon transitions
- Smooth menu slide-in
- Overlay backdrop
- Touch-friendly

### Smooth Hover Animations
- Scale animations
- Color transitions
- Framer Motion powered
- 200ms duration

### Dynamic Brand Logo
- Animated interactions
- Brightness effects
- Responsive sizing
- Brand-aware

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints
- Responsive typography
- Flexible layout

## 💡 Common Tasks

### Task: Change Menu Items
```jsx
// Edit menuItems array in component
const menuItems = [
  { label: 'Custom', href: '/custom' },
];
```

### Task: Add Search
```jsx
// Use NavbarEnhanced
import { NavbarEnhanced } from '@/components/Navbar';
```

### Task: Add Dropdowns
```jsx
// Use NavbarWithDropdown
import { NavbarWithDropdown } from '@/components/Navbar';
```

### Task: Customize Colors
```jsx
// Uses brand context automatically
const { colors } = useBrandContext();
```

### Task: Add CTA Button
```jsx
// Use NavbarEnhanced or NavbarWithDropdown
// Already includes "Get Started" button
```

## 🎨 Color Usage

### Primary Color
```jsx
style={{ backgroundColor: colors.primary }}
```
Used for: Navbar background

### Secondary Color
```jsx
style={{ backgroundColor: colors.secondary }}
```
Used for: CTA button, accents

### White with Opacity
```jsx
className="hover:bg-white/10"
```
Used for: Hover states, overlays

## 📊 Component Structure

```
Navbar
├── Logo Section
│   ├── Logo Image
│   ├── Brand Name
│   └── Tagline
├── Desktop Menu
│   ├── Menu Items
│   └── Dropdowns (if available)
├── Mobile Menu Button
│   ├── Hamburger Icon
│   └── Close Icon
├── Mobile Menu
│   ├── Menu Items
│   ├── Dropdowns (if available)
│   └── CTA Button (if available)
└── Overlay Backdrop
```

## 🧪 Testing Checklist

- [ ] Hover over menu items
- [ ] Click logo to navigate home
- [ ] Resize to mobile view
- [ ] Tap hamburger menu
- [ ] Tap menu items
- [ ] Tap overlay to close
- [ ] Test dropdowns (if available)
- [ ] Test search (if available)
- [ ] Test CTA button (if available)
- [ ] Check responsive design

## 🚀 Performance Tips

1. **Use Lazy Loading**
   - Mobile menu only renders when open

2. **Optimize Images**
   - Use optimized logo images
   - Responsive sizing

3. **Minimize Re-renders**
   - Use React.memo for menu items
   - Optimize state updates

4. **CSS Variables**
   - Use brand colors from context
   - Avoid inline styles

## 📚 Related Files

- `src/components/Navbar/Navbar.jsx` - Basic navbar
- `src/components/Navbar/NavbarEnhanced.jsx` - Enhanced navbar
- `src/components/Navbar/NavbarWithDropdown.jsx` - Navbar with dropdowns
- `src/context/BrandContext.jsx` - Brand context
- `src/styles/theme.css` - Theme variables

## 🎓 Learning Resources

### Framer Motion
- Animations and transitions
- Gesture animations
- Layout animations

### Tailwind CSS
- Responsive design
- Utility classes
- Hover states

### React Router
- Navigation
- Link component
- Route management

## ✅ Verification

- [x] Sticky positioning works
- [x] Mobile menu functions
- [x] Hover animations smooth
- [x] Brand logo displays
- [x] Responsive on all devices
- [x] Search works (enhanced)
- [x] CTA button works (enhanced)
- [x] Dropdowns work (dropdown version)
- [x] Build successful
- [x] No errors

## 🎉 Summary

Three production-ready navbar components:

✅ **Navbar** - Basic responsive navbar
✅ **NavbarEnhanced** - With search and CTA
✅ **NavbarWithDropdown** - With dropdown menus

All features:
- Sticky positioning
- Mobile hamburger menu
- Smooth animations
- Dynamic branding
- Fully responsive
- Tailwind CSS
- Framer Motion
- Brand integration

---

**Status:** ✅ COMPLETE
**Ready for:** Production Use
