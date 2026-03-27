import React, { createContext, useContext } from 'react';
import { useBrand } from '../hooks/useBrand';

/**
 * Brand Context for global brand state management
 */
const BrandContext = createContext(null);

/**
 * Brand Provider Component
 * Wraps the app to provide brand configuration to all components
 */
export const BrandProvider = ({ children }) => {
  const brandData = useBrand();

  return (
    <BrandContext.Provider value={brandData}>
      {children}
    </BrandContext.Provider>
  );
};

/**
 * Custom hook to use Brand Context
 * @returns {object} Brand configuration and utilities
 */
export const useBrandContext = () => {
  const context = useContext(BrandContext);
  
  if (!context) {
    throw new Error('useBrandContext must be used within BrandProvider');
  }
  
  return context;
};

export default BrandProvider;
