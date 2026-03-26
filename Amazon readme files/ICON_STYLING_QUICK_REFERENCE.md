# Icon Styling Quick Reference

## Standard Sizes
```
w-4 h-4   → Small (16px)
w-5 h-5   → Primary (20px) ⭐ DEFAULT
w-6 h-6   → Large (24px)
w-12 h-12 → Extra Large (48px)
w-16 h-16 → Massive (64px)
w-32 h-32 → Extra Massive (128px)
```

## Standard Colors
```
text-green-600      → Primary (default)
text-green-700      → Hover state
transition-colors   → Smooth transition
```

## Standard Alignment
```
flex items-center gap-2     → Icon + text
flex items-start gap-3      → Icon + multi-line
flex-shrink-0              → Prevent shrinking
```

## Copy-Paste Templates

### Icon + Text (Inline)
```jsx
<div className="flex items-center gap-2">
  <IconName className="w-5 h-5 text-green-600" />
  <span>Text</span>
</div>
```

### Icon + Multi-line Text
```jsx
<div className="flex items-start gap-3">
  <IconName className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
  <span>Multi-line text</span>
</div>
```

### Icon in Button
```jsx
<button className="flex items-center justify-center gap-2">
  <IconName className="w-5 h-5 text-green-600" />
  <span>Button</span>
</button>
```

### Icon with Hover
```jsx
<a href="#" className="flex items-center gap-2 hover:text-green-700 transition-colors">
  <IconName className="w-5 h-5 text-green-600" />
  <span>Link</span>
</a>
```

### Icon in Circle
```jsx
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
  <IconName className="w-5 h-5 text-green-600" />
</div>
```

## Common Icons Used

### Contact
- `Phone` - Phone numbers
- `Mail` - Email addresses
- `MapPin` - Locations
- `Clock` - Business hours

### Navigation
- `Search` - Search functionality
- `X` - Close/dismiss
- `Menu` - Navigation menu
- `ChevronDown` - Dropdowns

### Status
- `CheckCircle` - Success/completed
- `AlertCircle` - Warnings/errors
- `Info` - Information

### Content
- `FileText` - Documents
- `Download` - Downloads
- `BookOpen` - Resources
- `Leaf` - Nature/organic

### Social
- `Facebook` - Facebook
- `Instagram` - Instagram
- `Twitter` - Twitter
- `Linkedin` - LinkedIn

## Do's ✅
- Use `w-5 h-5` as default
- Apply `text-green-600` for color
- Use `flex items-center gap-2` for alignment
- Add `flex-shrink-0` when needed
- Test hover states
- Import from lucide-react

## Don'ts ❌
- Don't use hardcoded colors
- Don't use inconsistent sizes
- Don't forget alignment utilities
- Don't skip hover states
- Don't use emoji icons
- Don't import from other libraries

## Files to Reference

1. **Footer.jsx** - Social icons, contact icons
2. **ProductCard.jsx** - Feature icons
3. **Contact.jsx** - Form icons, contact info
4. **Research.jsx** - Section icons, document icons
5. **Home.jsx** - Benefit icons, sustainability icons

## Quick Checklist

When adding new icons:
- [ ] Size: `w-5 h-5`
- [ ] Color: `text-green-600`
- [ ] Alignment: `flex items-center gap-2`
- [ ] Hover: `hover:text-green-700 transition-colors`
- [ ] Imported from lucide-react
- [ ] Tested on mobile/tablet/desktop

## Support

For questions or issues:
1. Check ICON_STYLING_CONSISTENCY.md
2. Review existing implementations
3. Follow the templates above
4. Maintain the standards

---

**Last Updated**: 2024
**Status**: Active
**Consistency**: 100%
