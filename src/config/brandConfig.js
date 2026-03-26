/**
 * Brand Configuration System
 * Manages all brand-specific settings including colors, typography, and metadata
 */

import terravikLogo from '../assets/logos/terravik-logo.png';
import hawaiAgroLogo from '../assets/logos/hawai-agro-logo.png';

export const brands = {
  terravik: {
    // Brand Identity
    id: 'terravik',
    name: 'TerraVik',
    tagline: 'Liquid Gold',
    description: 'Premium home gardening products for sustainable growth',
    
    // Logo & Assets
    logo: terravikLogo,
    favicon: '/logos/terravik-favicon.ico',
    
    // Primary Colors
    colors: {
      primary: '#5a9a3c',      // Softer, brighter green
      secondary: '#9ccc65',    // Much brighter light green
      accent: '#ffd54f',       // Brighter gold
      
      // Extended Color Palette
      light: '#f1f5e8',
      lighter: '#e0ebd0',
      dark: '#1b3a0a',
      darker: '#0f2305',
      
      // Semantic Colors
      success: '#4caf50',
      warning: '#ff9800',
      error: '#f44336',
      info: '#2196f3',
    },
    
    // Gradient Colors
    gradients: {
      primary: 'linear-gradient(135deg, #2d5016 0%, #7cb342 100%)',
      accent: 'linear-gradient(135deg, #7cb342 0%, #d4af37 100%)',
      dark: 'linear-gradient(135deg, #1b3a0a 0%, #2d5016 100%)',
    },
    
    // Typography
    typography: {
      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
      headingFont: "'Segoe UI', 'Roboto', sans-serif",
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
    
    // Spacing & Layout
    spacing: {
      containerMaxWidth: '1200px',
      sectionPadding: '3rem 2rem',
      cardRadius: '8px',
      buttonRadius: '6px',
    },
    
    // Routes
    routes: {
      home: '/terravik',
      products: '/terravik/products',
      research: '/terravik/research',
      contact: '/terravik/contact',
      about: '/terravik/about',
    },
    
    // Contact Information
    contact: {
      email: 'info@terravik.com',
      phone: '+91-XXXX-XXXX-XX',
      address: 'Agricultural Hub, India',
      businessHours: {
        weekday: '9:00 AM - 6:00 PM',
        saturday: '10:00 AM - 4:00 PM',
        sunday: 'Closed',
      },
    },
    
    // Social Media
    social: {
      facebook: 'https://facebook.com/terravik',
      instagram: 'https://instagram.com/terravik',
      twitter: 'https://twitter.com/terravik',
      linkedin: 'https://linkedin.com/company/terravik',
    },
    
    // SEO & Meta
    seo: {
      title: 'TerraVik - Premium Home Gardening Products',
      description: 'Discover premium home gardening products with TerraVik. Liquid Gold for your garden.',
      keywords: 'gardening, plants, organic, home garden, premium products',
    },
    
    // Features & Highlights
    features: [
      'Premium quality products',
      'Sustainable farming practices',
      'Expert support and guidance',
      'Competitive pricing',
      'Fast and reliable delivery',
    ],
  },
  
  hawaiAgro: {
    // Brand Identity
    id: 'hawai-agro',
    name: 'Hawai Agro',
    tagline: 'Hariyali Ki Nayi Hawa',
    description: 'Organic fertilizers and sustainable farming solutions for farmers',
    
    // Logo & Assets
    logo: hawaiAgroLogo,
    favicon: '/logos/hawai-agro-favicon.ico',
    
    // Primary Colors
    colors: {
      primary: '#66bb6a',      // Softer, brighter forest green
      secondary: '#81c784',    // Much brighter leaf green
      accent: '#aed581',       // Brighter light green
      
      // Extended Color Palette
      light: '#f1f5e8',
      lighter: '#dce8d0',
      dark: '#0d3a10',
      darker: '#061f08',
      
      // Semantic Colors
      success: '#4caf50',
      warning: '#ff9800',
      error: '#f44336',
      info: '#2196f3',
    },
    
    // Gradient Colors
    gradients: {
      primary: 'linear-gradient(135deg, #1b5e20 0%, #558b2f 100%)',
      accent: 'linear-gradient(135deg, #558b2f 0%, #81c784 100%)',
      dark: 'linear-gradient(135deg, #0d3a10 0%, #1b5e20 100%)',
    },
    
    // Typography
    typography: {
      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
      headingFont: "'Segoe UI', 'Roboto', sans-serif",
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
    
    // Spacing & Layout
    spacing: {
      containerMaxWidth: '1200px',
      sectionPadding: '3rem 2rem',
      cardRadius: '8px',
      buttonRadius: '6px',
    },
    
    // Routes
    routes: {
      home: '/hawai-agro',
      products: '/hawai-agro/products',
      research: '/hawai-agro/research',
      contact: '/hawai-agro/contact',
      about: '/hawai-agro/about',
    },
    
    // Contact Information
    contact: {
      email: 'info@hawaiagro.com',
      phone: '+91-XXXX-XXXX-XX',
      address: 'Agricultural Hub, India',
      businessHours: {
        weekday: '8:00 AM - 7:00 PM',
        saturday: '9:00 AM - 5:00 PM',
        sunday: 'Closed',
      },
    },
    
    // Social Media
    social: {
      facebook: 'https://facebook.com/hawaiagro',
      instagram: 'https://instagram.com/hawaiagro',
      twitter: 'https://twitter.com/hawaiagro',
      linkedin: 'https://linkedin.com/company/hawaiagro',
    },
    
    // SEO & Meta
    seo: {
      title: 'Hawai Agro - Organic Fertilizers for Sustainable Farming',
      description: 'Hariyali Ki Nayi Hawa - Organic fertilizers and sustainable farming solutions.',
      keywords: 'organic fertilizers, farming, sustainable agriculture, organic products',
    },
    
    // Features & Highlights
    features: [
      'Organic certified products',
      'Sustainable farming practices',
      'Farmer support programs',
      'Competitive pricing',
      'Bulk delivery available',
    ],
  },
};

/**
 * Get brand configuration by brand ID
 * @param {string} brandId - The brand identifier
 * @returns {object} Brand configuration object
 */
export const getBrandConfig = (brandId) => {
  return brands[brandId] || brands.terravik;
};

/**
 * Get all available brands
 * @returns {object} All brands configuration
 */
export const getAllBrands = () => {
  return brands;
};

/**
 * Get brand ID from URL path
 * @param {string} pathname - The URL pathname
 * @returns {string} Brand ID
 */
export const getBrandIdFromPath = (pathname) => {
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0];
  
  // Map URL paths to brand IDs
  const pathToBrandMap = {
    'terravik': 'terravik',
    'hawai-agro': 'hawaiAgro',
  };
  
  return pathToBrandMap[firstSegment] || 'terravik';
};

/**
 * Get brand by URL path
 * @param {string} pathname - The URL pathname
 * @returns {object} Brand configuration object
 */
export const getBrandByPath = (pathname) => {
  const brandId = getBrandIdFromPath(pathname);
  return getBrandConfig(brandId);
};

/**
 * Check if a path belongs to a specific brand
 * @param {string} pathname - The URL pathname
 * @param {string} brandId - The brand identifier
 * @returns {boolean} True if path belongs to brand
 */
export const isPathForBrand = (pathname, brandId) => {
  return getBrandIdFromPath(pathname) === brandId;
};

/**
 * Get CSS variables for a brand
 * @param {string} brandId - The brand identifier
 * @returns {object} CSS variables object
 */
export const getBrandCSSVariables = (brandId) => {
  const brand = getBrandConfig(brandId);
  
  return {
    '--color-primary': brand.colors.primary,
    '--color-secondary': brand.colors.secondary,
    '--color-accent': brand.colors.accent,
    '--color-light': brand.colors.light,
    '--color-lighter': brand.colors.lighter,
    '--color-dark': brand.colors.dark,
    '--color-darker': brand.colors.darker,
    '--color-success': brand.colors.success,
    '--color-warning': brand.colors.warning,
    '--color-error': brand.colors.error,
    '--color-info': brand.colors.info,
    '--gradient-primary': brand.gradients.primary,
    '--gradient-accent': brand.gradients.accent,
    '--gradient-dark': brand.gradients.dark,
    '--container-max-width': brand.spacing.containerMaxWidth,
    '--card-radius': brand.spacing.cardRadius,
    '--button-radius': brand.spacing.buttonRadius,
  };
};

/**
 * Apply brand theme to document
 * @param {string} brandId - The brand identifier
 */
export const applyBrandTheme = (brandId) => {
  const cssVariables = getBrandCSSVariables(brandId);
  const root = document.documentElement;
  
  Object.entries(cssVariables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};

/**
 * Get brand color by name
 * @param {string} brandId - The brand identifier
 * @param {string} colorName - The color name
 * @returns {string} Color hex value
 */
export const getBrandColor = (brandId, colorName) => {
  const brand = getBrandConfig(brandId);
  return brand.colors[colorName] || brand.colors.primary;
};

/**
 * Get brand gradient by name
 * @param {string} brandId - The brand identifier
 * @param {string} gradientName - The gradient name
 * @returns {string} Gradient CSS value
 */
export const getBrandGradient = (brandId, gradientName) => {
  const brand = getBrandConfig(brandId);
  return brand.gradients[gradientName] || brand.gradients.primary;
};

/**
 * Validate brand ID
 * @param {string} brandId - The brand identifier
 * @returns {boolean} True if brand exists
 */
export const isValidBrand = (brandId) => {
  return Object.keys(brands).includes(brandId);
};

/**
 * Get all brand IDs
 * @returns {array} Array of brand IDs
 */
export const getAllBrandIds = () => {
  return Object.keys(brands);
};

/**
 * Get brand name by ID
 * @param {string} brandId - The brand identifier
 * @returns {string} Brand name
 */
export const getBrandName = (brandId) => {
  const brand = getBrandConfig(brandId);
  return brand.name;
};

/**
 * Get brand tagline by ID
 * @param {string} brandId - The brand identifier
 * @returns {string} Brand tagline
 */
export const getBrandTagline = (brandId) => {
  const brand = getBrandConfig(brandId);
  return brand.tagline;
};

/**
 * Get brand routes by ID
 * @param {string} brandId - The brand identifier
 * @returns {object} Brand routes
 */
export const getBrandRoutes = (brandId) => {
  const brand = getBrandConfig(brandId);
  return brand.routes;
};

/**
 * Get brand contact info by ID
 * @param {string} brandId - The brand identifier
 * @returns {object} Brand contact information
 */
export const getBrandContact = (brandId) => {
  const brand = getBrandConfig(brandId);
  return brand.contact;
};

/**
 * Get brand social media links by ID
 * @param {string} brandId - The brand identifier
 * @returns {object} Brand social media links
 */
export const getBrandSocial = (brandId) => {
  const brand = getBrandConfig(brandId);
  return brand.social;
};

/**
 * Get brand SEO metadata by ID
 * @param {string} brandId - The brand identifier
 * @returns {object} Brand SEO metadata
 */
export const getBrandSEO = (brandId) => {
  const brand = getBrandConfig(brandId);
  return brand.seo;
};

/**
 * Get brand features by ID
 * @param {string} brandId - The brand identifier
 * @returns {array} Brand features
 */
export const getBrandFeatures = (brandId) => {
  const brand = getBrandConfig(brandId);
  return brand.features;
};

export default brands;
