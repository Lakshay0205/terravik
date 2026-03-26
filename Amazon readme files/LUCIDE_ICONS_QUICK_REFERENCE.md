# Lucide React Icons - Quick Reference Guide

## Installation
```bash
npm install lucide-react
```

## Basic Usage Pattern

### Import Icons
```javascript
import { IconName, AnotherIcon } from 'lucide-react';
```

### Render Icon
```javascript
<IconName className="w-5 h-5" style={{ color: colors.secondary }} />
```

## Icon Sizing Convention

| Size | Class | Usage |
|------|-------|-------|
| Extra Small | `w-3 h-3` | Inline badges |
| Small | `w-4 h-4` | Inline with text |
| Medium | `w-5 h-5` | Standard (default) |
| Large | `w-6 h-6` | Prominent |
| Extra Large | `w-12 h-12` | Hero sections |
| Massive | `w-16 h-16` or `w-32 h-32` | Feature icons |

## Common Icons Used in Project

### Social Media
```javascript
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
```

### Navigation & UI
```javascript
import { Search, X, Menu, ChevronDown } from 'lucide-react';
```

### Contact & Communication
```javascript
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
```

### Content & Documents
```javascript
import { FileText, Download, BookOpen, AlertCircle } from 'lucide-react';
```

### Status & Feedback
```javascript
import { CheckCircle, AlertCircle, Info } from 'lucide-react';
```

### Nature & Environment
```javascript
import { Leaf, Sprout, Droplet, Globe, Recycle } from 'lucide-react';
```

### Business & Analytics
```javascript
import { TrendingUp, Users, Building2, Zap } from 'lucide-react';
```

### Science & Research
```javascript
import { FlaskConical, Microscope, Beaker } from 'lucide-react';
```

## Styling Examples

### Basic Icon
```javascript
<Leaf className="w-5 h-5" />
```

### Colored Icon
```javascript
<Leaf className="w-5 h-5 text-green-600" />
```

### Icon with Brand Color
```javascript
<Leaf className="w-5 h-5" style={{ color: colors.secondary }} />
```

### Icon with Background
```javascript
<div className="w-10 h-10 rounded-full flex items-center justify-center" 
     style={{ backgroundColor: colors.secondary }}>
  <Leaf className="w-5 h-5 text-white" />
</div>
```

### Icon with Text
```javascript
<div className="flex items-center gap-2">
  <Phone className="w-5 h-5" />
  <span>9008383900</span>
</div>
```

### Icon with Hover Effect
```javascript
<motion.button
  whileHover={{ scale: 1.1 }}
  className="flex items-center gap-2"
>
  <Download className="w-5 h-5" />
  Download
</motion.button>
```

## Alignment Utilities

### Flex Alignment
```javascript
// Center align
className="flex items-center gap-2"

// Start align
className="flex items-start gap-2"

// Justify center
className="flex justify-center items-center"
```

## Color Application Methods

### Method 1: Tailwind Classes
```javascript
<Leaf className="w-5 h-5 text-green-600" />
```

### Method 2: Inline Style
```javascript
<Leaf className="w-5 h-5" style={{ color: '#22c55e' }} />
```

### Method 3: Brand Color Variable
```javascript
<Leaf className="w-5 h-5" style={{ color: colors.secondary }} />
```

## Animation Examples

### Hover Scale
```javascript
<motion.div whileHover={{ scale: 1.1 }}>
  <Leaf className="w-5 h-5" />
</motion.div>
```

### Rotating Icon
```javascript
<motion.div animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity }}>
  <Sprout className="w-6 h-6" />
</motion.div>
```

### Bounce Animation
```javascript
<motion.div animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}>
  <Droplet className="w-6 h-6" />
</motion.div>
```

## Component Integration Examples

### In Footer
```javascript
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
];

{socialLinks.map((social) => {
  const IconComponent = social.icon;
  return <IconComponent className="w-5 h-5" key={social.label} />;
})}
```

### In Forms
```javascript
import { Mail, Phone, AlertCircle, CheckCircle } from 'lucide-react';

// Error state
{error && (
  <div className="flex items-start gap-2">
    <AlertCircle className="w-5 h-5 text-red-600" />
    <span>{error}</span>
  </div>
)}

// Success state
{submitted && (
  <div className="flex items-start gap-2">
    <CheckCircle className="w-5 h-5 text-green-600" />
    <span>Success!</span>
  </div>
)}
```

### In Lists
```javascript
import { CheckCircle } from 'lucide-react';

{items.map((item) => (
  <div key={item.id} className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
    <span>{item.text}</span>
  </div>
))}
```

## Best Practices

### 1. Consistent Sizing
```javascript
// ✅ Good - Consistent sizing
<Phone className="w-5 h-5" />
<Mail className="w-5 h-5" />

// ❌ Bad - Inconsistent sizing
<Phone className="w-4 h-4" />
<Mail className="w-6 h-6" />
```

### 2. Proper Alignment
```javascript
// ✅ Good - Properly aligned
<div className="flex items-center gap-2">
  <Icon className="w-5 h-5" />
  <span>Text</span>
</div>

// ❌ Bad - Misaligned
<div>
  <Icon className="w-5 h-5" />
  <span>Text</span>
</div>
```

### 3. Color Consistency
```javascript
// ✅ Good - Using brand colors
<Icon style={{ color: colors.secondary }} />

// ❌ Bad - Hardcoded colors
<Icon style={{ color: '#ff0000' }} />
```

### 4. Semantic Usage
```javascript
// ✅ Good - Semantic icon choice
<Phone className="w-5 h-5" /> {/* For phone numbers */}
<Mail className="w-5 h-5" /> {/* For emails */}

// ❌ Bad - Wrong icon for context
<Heart className="w-5 h-5" /> {/* For phone numbers */}
```

## Troubleshooting

### Icon Not Showing
```javascript
// Check 1: Import statement
import { IconName } from 'lucide-react'; // ✅

// Check 2: Component rendering
<IconName className="w-5 h-5" /> // ✅

// Check 3: Parent container
<div className="flex items-center">
  <IconName className="w-5 h-5" />
</div> // ✅
```

### Icon Color Not Applying
```javascript
// Method 1: Tailwind
<Icon className="w-5 h-5 text-blue-600" /> // ✅

// Method 2: Inline style
<Icon className="w-5 h-5" style={{ color: 'blue' }} /> // ✅

// Method 3: Parent color
<div style={{ color: 'blue' }}>
  <Icon className="w-5 h-5" />
</div> // ✅
```

### Icon Size Issues
```javascript
// Always use both width and height
<Icon className="w-5 h-5" /> // ✅
<Icon className="w-5" /> // ❌ Missing height

// Use flex-shrink-0 to prevent shrinking
<div className="flex items-center gap-2">
  <Icon className="w-5 h-5 flex-shrink-0" />
  <span>Text</span>
</div> // ✅
```

## Available Icons Reference

Visit [lucide.dev](https://lucide.dev) for complete icon library with:
- 1000+ icons
- Search functionality
- Copy import code
- Live preview
- Size variations

## Performance Tips

1. **Import only needed icons**
   ```javascript
   // ✅ Good
   import { Phone, Mail } from 'lucide-react';
   
   // ❌ Bad
   import * as Icons from 'lucide-react';
   ```

2. **Use dynamic imports for large lists**
   ```javascript
   const IconComponent = iconMap[iconName];
   <IconComponent className="w-5 h-5" />
   ```

3. **Memoize icon components**
   ```javascript
   const MemoizedIcon = React.memo(({ icon: Icon }) => (
     <Icon className="w-5 h-5" />
   ));
   ```

## Resources

- **Official Docs:** https://lucide.dev
- **GitHub:** https://github.com/lucide-icons/lucide
- **NPM Package:** https://www.npmjs.com/package/lucide-react
- **Icon Search:** https://lucide.dev/icons

---

**Last Updated:** 2024
**Status:** Production Ready
