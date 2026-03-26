# Agro Websites - Multi-Brand Agriculture Platform

A production-level React + Vite application supporting multiple agriculture brands in a single codebase.

## 🌾 Brands

### TerraVik
- **Tagline:** Liquid Gold
- **Focus:** Premium home gardening products
- **Routes:** `/terravik`, `/terravik/products`, `/terravik/research`, `/terravik/contact`

### Hawai Agro
- **Tagline:** Hariyali Ki Nayi Hawa
- **Focus:** Organic fertilizers for farmers
- **Routes:** `/hawai-agro`, `/hawai-agro/products`, `/hawai-agro/research`, `/hawai-agro/contact`

## 📁 Project Structure

```
src/
├── assets/                 # Static assets
│   ├── logos/             # Brand logos
│   ├── products/          # Product images
│   └── images/            # General images
├── components/            # Reusable components
│   ├── Navbar/           # Navigation component
│   ├── Footer/           # Footer component
│   ├── ProductCard/      # Product display card
│   ├── HeroSection/      # Hero banner
│   └── DownloadCard/     # Download resource card
├── layouts/              # Layout components
│   └── MainLayout.jsx    # Main layout wrapper
├── pages/                # Page components
│   ├── Home/            # Home page
│   ├── Products/        # Products listing
│   ├── Research/        # Research & resources
│   ├── Contact/         # Contact form
│   └── About/           # About page
├── config/              # Configuration files
│   └── brandConfig.js   # Brand configuration
├── data/                # Data files
│   └── products.js      # Product data
├── routes/              # Routing
│   └── AppRoutes.jsx    # Route definitions
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── styles/              # Global styles
│   └── global.css       # Global CSS
├── App.jsx              # Main App component
└── main.jsx             # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
cd agro-websites
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm preview
```

## 🎨 Architecture Highlights

### Brand Configuration
All brand-specific settings are centralized in `src/config/brandConfig.js`:
- Colors, logos, and taglines
- Route definitions
- Brand metadata

### Reusable Components
- **Navbar:** Adapts to brand colors and routes
- **Footer:** Dynamic footer with brand info
- **ProductCard:** Flexible product display
- **HeroSection:** Customizable hero banner
- **DownloadCard:** Resource download cards

### Scalable Routing
- Nested routes for each brand
- Shared page components that accept `brandId` prop
- Easy to add new brands or pages

### Data Management
- Centralized product data in `src/data/products.js`
- Brand-specific product filtering
- Easy to integrate with APIs

## 🔄 Adding a New Brand

1. Add brand config to `src/config/brandConfig.js`
2. Add products to `src/data/products.js`
3. Routes automatically work with the new brand ID

## 📦 Dependencies

- **react:** UI library
- **react-dom:** React DOM rendering
- **react-router-dom:** Client-side routing
- **vite:** Build tool
- **@vitejs/plugin-react:** React support for Vite

## 🎯 Features

✅ Multi-brand support in single codebase
✅ Responsive design
✅ Modular component architecture
✅ Centralized configuration
✅ Easy to scale and maintain
✅ Production-ready structure
✅ TypeScript support
✅ Fast development with Vite

## 📝 Available Routes

### TerraVik
- `/terravik` - Home
- `/terravik/products` - Products
- `/terravik/research` - Research
- `/terravik/contact` - Contact
- `/terravik/about` - About

### Hawai Agro
- `/hawai-agro` - Home
- `/hawai-agro/products` - Products
- `/hawai-agro/research` - Research
- `/hawai-agro/contact` - Contact
- `/hawai-agro/about` - About

## 🛠️ Customization

### Adding New Pages
1. Create component in `src/pages/[PageName]/`
2. Add route in `src/routes/AppRoutes.jsx`
3. Add navigation link in `src/components/Navbar/Navbar.jsx`

### Styling
- Global styles: `src/styles/global.css`
- Component styles: Co-located CSS files
- Brand colors: Defined in `src/config/brandConfig.js`

## 📄 License

MIT
