# 🚀 Quick Start Guide

## Installation & Setup (Already Done ✅)

All packages have been installed and configured:
- ✅ React Router DOM
- ✅ Tailwind CSS v4
- ✅ PostCSS & Autoprefixer
- ✅ Framer Motion
- ✅ Axios
- ✅ EmailJS

## 1️⃣ Environment Setup

Create `.env.local` file in project root:

```bash
# Copy from template
cp .env.example .env.local
```

Fill in your credentials:
```
VITE_API_BASE_URL=https://api.example.com
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## 2️⃣ Start Development Server

```bash
npm run dev
```

Opens at `http://localhost:5173`

## 3️⃣ Available Routes

### TerraVik Brand
- `http://localhost:5173/terravik` - Home
- `http://localhost:5173/terravik/products` - Products
- `http://localhost:5173/terravik/research` - Research
- `http://localhost:5173/terravik/contact` - Contact
- `http://localhost:5173/terravik/about` - About

### Hawai Agro Brand
- `http://localhost:5173/hawai-agro` - Home
- `http://localhost:5173/hawai-agro/products` - Products
- `http://localhost:5173/hawai-agro/research` - Research
- `http://localhost:5173/hawai-agro/contact` - Contact
- `http://localhost:5173/hawai-agro/about` - About

## 4️⃣ Using Tailwind CSS

### Utility Classes
```jsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
  <button className="btn-primary">Click me</button>
</div>
```

### Responsive Design
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</div>
```

### Custom Components
```jsx
<div className="card p-6">
  <h3 className="text-lg font-bold mb-2">Card Title</h3>
  <p className="text-gray-600">Card content</p>
</div>

<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<input className="input-field" placeholder="Enter text" />
```

## 5️⃣ Using Framer Motion

### Scroll-Triggered Animation
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content appears when scrolled into view
</motion.div>
```

### Hover Animation
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Hover me
</motion.button>
```

### Staggered Children
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

## 6️⃣ Using Axios API Client

### Basic Usage
```jsx
import apiClient from '@/utils/apiClient';

// GET request
const data = await apiClient.get('/products');

// POST request
const response = await apiClient.post('/products', { name: 'Product' });

// PUT request
await apiClient.put('/products/1', { name: 'Updated' });

// DELETE request
await apiClient.delete('/products/1');
```

### With Custom Hook
```jsx
import { useApi } from '@/hooks/useApi';

export const MyComponent = () => {
  const { loading, error, get, post } = useApi();

  const fetchData = async () => {
    try {
      const data = await get('/products');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};
```

## 7️⃣ Using EmailJS

### In Contact Form
```jsx
import { useState } from 'react';
import { sendContactEmail } from '@/utils/emailService';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContactEmail(
        formData.name,
        formData.email,
        formData.message,
        'Brand Name'
      );
      alert('Email sent successfully!');
    } catch (error) {
      alert('Failed to send email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};
```

## 8️⃣ Building for Production

```bash
npm run build
```

Output in `dist/` folder ready for deployment.

## 9️⃣ Customizing Brands

### Add New Brand
1. Edit `src/config/brandConfig.js`:
```javascript
export const brands = {
  newBrand: {
    id: 'new-brand',
    name: 'New Brand',
    tagline: 'Your tagline',
    description: 'Your description',
    color: '#color',
    accentColor: '#accentColor',
    logo: '/logos/new-brand-logo.png',
    routes: { /* routes */ },
  },
};
```

2. Add products in `src/data/products.js`:
```javascript
export const products = {
  newBrand: [
    { id: 1, name: 'Product', /* ... */ },
  ],
};
```

3. Add route in `src/routes/AppRoutes.jsx`:
```jsx
<Route path="/new-brand/*" element={<BrandRoute brandId="newBrand" />} />
```

## 🔟 Styling Tips

### Use Tailwind Classes
```jsx
// ✅ Good
<div className="flex items-center gap-4 p-4 bg-white rounded-lg">

// ❌ Avoid
<div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
```

### Responsive Classes
```jsx
// Mobile first
<div className="text-sm md:text-base lg:text-lg">
  Text size changes at breakpoints
</div>
```

### Custom Components
```jsx
// Use predefined components
<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<div className="card p-6">Card content</div>
<input className="input-field" />
```

## 📚 Documentation

- `README.md` - Project overview
- `SETUP_GUIDE.md` - Detailed setup
- `CONFIGURATION_SUMMARY.md` - Configuration details

## 🆘 Troubleshooting

### Tailwind styles not working?
- Ensure `src/index.css` is imported in `main.jsx`
- Restart dev server: `npm run dev`

### EmailJS not sending?
- Check `.env.local` has correct credentials
- Verify template variables match form data

### API calls failing?
- Check `VITE_API_BASE_URL` in `.env.local`
- Verify CORS settings on backend

## 🎉 You're Ready!

Start building with:
```bash
npm run dev
```

Happy coding! 🚀
