import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getBrandIdFromPath,
  getBrandConfig,
  applyBrandTheme,
  getBrandCSSVariables,
} from '../config/brandConfig';

/**
 * Custom hook for managing brand configuration and theme
 * Automatically detects brand from URL and applies theme
 * @returns {object} Brand configuration and utilities
 */
export const useBrand = () => {
  const location = useLocation();
  const [brandId, setBrandId] = useState('terravik');
  const [brand, setBrand] = useState(getBrandConfig('terravik'));
  const [cssVariables, setCssVariables] = useState({});

  // Update brand based on URL path
  useEffect(() => {
    const newBrandId = getBrandIdFromPath(location.pathname);
    setBrandId(newBrandId);
    
    const newBrand = getBrandConfig(newBrandId);
    setBrand(newBrand);
    
    const newCssVariables = getBrandCSSVariables(newBrandId);
    setCssVariables(newCssVariables);
    
    // Apply theme to document
    applyBrandTheme(newBrandId);
    
    // Update document title
    document.title = newBrand.seo.title;
    
    // Update meta description - create if doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', newBrand.seo.description);
  }, [location.pathname]);

  // Get color by name
  const getColor = useCallback((colorName) => {
    return brand.colors[colorName] || brand.colors.primary;
  }, [brand]);

  // Get gradient by name
  const getGradient = useCallback((gradientName) => {
    return brand.gradients[gradientName] || brand.gradients.primary;
  }, [brand]);

  // Get route
  const getRoute = useCallback((routeName) => {
    return brand.routes[routeName] || brand.routes.home;
  }, [brand]);

  return {
    brandId,
    brand,
    cssVariables,
    getColor,
    getGradient,
    getRoute,
    colors: brand.colors,
    gradients: brand.gradients,
    routes: brand.routes,
    contact: brand.contact,
    social: brand.social,
    seo: brand.seo,
    features: brand.features,
  };
};

export default useBrand;
