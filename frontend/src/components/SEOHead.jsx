import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useBrandContext } from '../context/BrandContext';
import { setSEOMetaTags, getCanonicalUrl, generateOrganizationSchema } from '../utils/seoUtils';
import { getSEOData, getPagePath } from '../config/seoConfig';

/**
 * SEO Head Component
 * Manages meta tags, Open Graph, and structured data for each page
 */
export const SEOHead = ({ page = 'home', customSEO = null }) => {
  const { brandId, brand } = useBrandContext();
  const location = useLocation();

  useEffect(() => {
    // Get SEO data for current page
    const seoData = customSEO || getSEOData(brandId, page);
    
    // Get canonical URL
    const pagePath = getPagePath(brandId, page);
    const canonicalUrl = getCanonicalUrl(pagePath);

    // Prepare SEO meta tags
    const seoMetaTags = {
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords,
      canonical: canonicalUrl,
      image: seoData.image,
      type: seoData.type || 'website',
      author: brand.name,
      robots: 'index, follow',
      language: 'en',
      structuredData: generateOrganizationSchema(brand),
    };

    // Set all SEO meta tags
    setSEOMetaTags(seoMetaTags);

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [brandId, page, brand, customSEO, location]);

  return null; // This component doesn't render anything
};

export default SEOHead;
