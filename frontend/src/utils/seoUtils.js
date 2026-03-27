/**
 * SEO Utility for managing meta tags, Open Graph, and structured data
 */

export const setSEOMetaTags = (seoData) => {
  // Set title
  if (seoData.title) {
    document.title = seoData.title;
    updateMetaTag('og:title', seoData.title);
    updateMetaTag('twitter:title', seoData.title);
  }

  // Set description
  if (seoData.description) {
    updateMetaTag('description', seoData.description);
    updateMetaTag('og:description', seoData.description);
    updateMetaTag('twitter:description', seoData.description);
  }

  // Set canonical URL
  if (seoData.canonical) {
    updateCanonicalTag(seoData.canonical);
    updateMetaTag('og:url', seoData.canonical);
  }

  // Set Open Graph image
  if (seoData.image) {
    updateMetaTag('og:image', seoData.image);
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
    updateMetaTag('twitter:image', seoData.image);
  }

  // Set Open Graph type
  if (seoData.type) {
    updateMetaTag('og:type', seoData.type);
  }

  // Set Twitter card
  updateMetaTag('twitter:card', 'summary_large_image');

  // Set additional meta tags
  if (seoData.keywords) {
    updateMetaTag('keywords', seoData.keywords);
  }

  if (seoData.author) {
    updateMetaTag('author', seoData.author);
  }

  // Set robots meta tag
  if (seoData.robots) {
    updateMetaTag('robots', seoData.robots);
  }

  // Set language
  if (seoData.language) {
    document.documentElement.lang = seoData.language;
  }

  // Set structured data (JSON-LD)
  if (seoData.structuredData) {
    setStructuredData(seoData.structuredData);
  }
};

const updateMetaTag = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    const isProperty = name.startsWith('og:') || name.startsWith('twitter:');
    if (isProperty) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

const updateCanonicalTag = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
};

const setStructuredData = (data) => {
  let script = document.querySelector('script[type="application/ld+json"]');
  
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(data);
};

export const getCanonicalUrl = (path) => {
  const baseUrl = window.location.origin;
  return `${baseUrl}${path}`;
};

export const generateOrganizationSchema = (brand) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    url: window.location.origin,
    logo: brand.logo,
    description: brand.description,
    sameAs: [
      'https://www.facebook.com/yourpage',
      'https://www.instagram.com/yourpage',
      'https://www.twitter.com/yourpage',
      'https://www.linkedin.com/company/yourpage',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-9008383900',
      email: brand.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Hussainpur, Tehsil Bilari',
      addressLocality: 'Moradabad',
      addressRegion: 'Uttar Pradesh',
      postalCode: '244001',
      addressCountry: 'IN',
    },
  };
};

export const generateProductSchema = (product, brand) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: brand.name,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };
};

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateFAQSchema = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

export const generateArticleSchema = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
  };
};
