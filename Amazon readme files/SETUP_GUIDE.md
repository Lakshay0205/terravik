# Tailwind CSS & Package Configuration Guide

## ✅ Installed Packages

### Core Dependencies
- **react-router-dom** (^6.20.0) - Client-side routing
- **tailwindcss** (^4.2.1) - Utility-first CSS framework
- **postcss** (^8.5.8) - CSS transformation tool
- **autoprefixer** (^10.4.27) - Vendor prefix automation
- **framer-motion** (^12.35.2) - Animation library
- **axios** (^1.13.6) - HTTP client
- **emailjs-com** (^3.2.0) - Email service integration

## 🎨 Tailwind CSS Configuration

### Files Created
1. **tailwind.config.js** - Tailwind configuration with custom colors
2. **postcss.config.js** - PostCSS configuration
3. **src/index.css** - Tailwind directives and base styles

### Custom Colors
- **terravik** - Green palette for TerraVik brand
- **hawaiAgro** - Dark green palette for Hawai Agro brand

### Custom Components
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.btn-outline` - Outline button style
- `.card` - Card component
- `.card-hover` - Hoverable card
- `.input-field` - Form input styling
- `.section-container` - Max-width container
- `.section-padding` - Vertical padding
- `.gradient-text` - Gradient text effect

### Custom Animations
- `animate-fade-in` - Fade in animation
- `animate-slide-in-left` - Slide from left
- `animate-slide-in-right` - Slide from right
- `animate-slide-in-up` - Slide from bottom

### Responsive Typography
- `.text-responsive-h1` - Responsive heading 1
- `.text-responsive-h2` - Responsive heading 2
- `.text-responsive-h3` - Responsive heading 3

## 🚀 Framer Motion Integration

All components now use Framer Motion for smooth animations:
- **HeroSection** - Staggered animations
- **ProductCard** - Scroll-triggered animations
- **DownloadCard** - Hover animations
- **Contact Form** - Form animations
- **About Page** - Staggered section animations

## 📧 EmailJS Setup

### Configuration Steps
1. Create account at [emailjs.com](https://www.emailjs.com)
2. Create email service
3. Create email template
4. Get your credentials:
   - Public Key
   - Service ID
   - Template ID

### Environment Variables
Create `.env.local` file:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

### Usage in Contact Form
The Contact page automatically sends emails using EmailJS when the form is submitted.

## 🔌 Axios API Client

### Features
- Centralized API configuration
- Request/response interceptors
- Automatic token management
- Error handling

### Usage
```javascript
import apiClient from '@/utils/apiClient';

// GET request
const data = await apiClient.get('/endpoint');

// POST request
const response = await apiClient.post('/endpoint', { data });
```

### Custom Hook
```javascript
import { useApi } from '@/hooks/useApi';

const { loading, error, get, post } = useApi();
const data = await get('/endpoint');
```

## 🎯 Responsive Design

### Breakpoints (Tailwind Default)
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px
- `2xl` - 1536px

### Usage Examples
```jsx
// Mobile first approach
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components (Tailwind styled)
├── pages/              # Page components (Tailwind styled)
├── layouts/            # Layout components
├── config/             # Configuration files
├── data/               # Static data
├── routes/             # Route definitions
├── hooks/              # Custom React hooks
│   └── useApi.js       # API hook
├── utils/              # Utility functions
│   ├── apiClient.js    # Axios client
│   └── emailService.js # EmailJS service
├── styles/
│   └── global.css      # Global styles (minimal)
├── index.css           # Tailwind CSS entry point
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## 🎨 Styling Best Practices

### Use Tailwind Classes
```jsx
// ✅ Good
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  Content
</div>

// ❌ Avoid
<div style={{ display: 'flex', padding: '1rem' }}>
  Content
</div>
```

### Component Styling
```jsx
// Use custom components from index.css
<button className="btn-primary">Click me</button>
<div className="card">Card content</div>
<input className="input-field" />
```

### Responsive Design
```jsx
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🚀 Performance Tips

1. **Code Splitting** - React Router handles automatic code splitting
2. **Image Optimization** - Use responsive images with srcset
3. **Lazy Loading** - Use React.lazy() for route-based code splitting
4. **CSS Purging** - Tailwind automatically purges unused styles in production

## 🐛 Troubleshooting

### Tailwind Styles Not Applying
- Ensure `src/index.css` is imported in `main.jsx`
- Check that file paths in `tailwind.config.js` are correct
- Restart dev server after config changes

### EmailJS Not Working
- Verify credentials in `.env.local`
- Check EmailJS dashboard for service/template setup
- Ensure template variables match form data

### Axios Requests Failing
- Check API base URL in `.env.local`
- Verify CORS settings on backend
- Check network tab in browser DevTools

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Axios Docs](https://axios-http.com/)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Router Docs](https://reactrouter.com/)
