import { useLocation, useNavigate } from 'react-router-dom';
import { getBrandIdFromPath } from '../config/brandConfig';

/**
 * Custom hook for brand-aware navigation
 * Automatically prepends the current brand prefix to all routes
 * @returns {object} Navigation utilities with brand awareness
 */
export const useBrandNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get current brand from URL
  const brandId = getBrandIdFromPath(location.pathname);
  
  // Convert brandId to URL format
  const brandPrefix = brandId === 'hawaiAgro' ? 'hawai-agro' : 'terravik';
  
  /**
   * Navigate to a route while maintaining brand context
   * @param {string} path - The path to navigate to (without brand prefix)
   * @param {object} options - Navigation options
   */
  const navigateToBrand = (path, options = {}) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // Construct full path with brand prefix
    const fullPath = `/${brandPrefix}/${cleanPath}`;
    
    navigate(fullPath, options);
  };
  
  /**
   * Get a brand-aware route
   * @param {string} path - The path (without brand prefix)
   * @returns {string} Full path with brand prefix
   */
  const getBrandRoute = (path) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${brandPrefix}/${cleanPath}`;
  };
  
  /**
   * Get a brand-aware product route
   * @param {string} productSlug - The product slug
   * @returns {string} Full product path with brand prefix
   */
  const getProductRoute = (productSlug) => {
    return `/${brandPrefix}/products/${productSlug}`;
  };
  
  return {
    brandId,
    brandPrefix,
    navigateToBrand,
    getBrandRoute,
    getProductRoute,
    navigate, // Expose native navigate for advanced use cases
  };
};

export default useBrandNavigation;
