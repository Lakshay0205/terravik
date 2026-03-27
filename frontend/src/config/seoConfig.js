/**
 * SEO Configuration for all pages
 */

export const seoConfig = {
  terravik: {
    home: {
      title: 'TerraVik - Premium Organic Home Gardening Solutions | Sustainable Agriculture',
      description: 'Discover TerraVik premium organic gardening products. Liquid Gold, soil mixes, and eco-friendly solutions for urban gardeners. 100% organic, certified, and sustainable.',
      keywords: 'organic gardening, home garden, liquid fertilizer, eco-friendly, sustainable farming, urban gardening, organic products',
      type: 'website',
      image: 'https://example.com/terravik-home.jpg',
    },
    products: {
      title: 'TerraVik Products - Organic Gardening Solutions | Premium Quality',
      description: 'Browse TerraVik premium organic gardening products including Liquid Gold, Premium Soil Mix, Organic Compost, and Bio Stimulant. All certified organic.',
      keywords: 'organic fertilizer, gardening products, liquid gold, soil mix, organic compost, bio stimulant, home gardening',
      type: 'website',
      image: 'https://example.com/terravik-products.jpg',
    },
    research: {
      title: 'TerraVik Research & Innovation - Scientific Agriculture Solutions',
      description: 'Explore TerraVik research partnerships with Teerthanker Mahaveer University. Discover our scientific validation, sustainable farming innovation, and yield improvement studies.',
      keywords: 'agricultural research, sustainable farming, scientific validation, university partnership, crop yield, organic research',
      type: 'website',
      image: 'https://example.com/terravik-research.jpg',
    },
    contact: {
      title: 'Contact TerraVik - Get In Touch | Organic Gardening Support',
      description: 'Contact TerraVik for inquiries about our organic gardening products. Phone: 9008383900. Email: info@terravik.com. Located in Moradabad, Uttar Pradesh.',
      keywords: 'contact terravik, customer support, gardening help, organic products inquiry, terravik contact',
      type: 'website',
      image: 'https://example.com/terravik-contact.jpg',
    },
    about: {
      title: 'About TerraVik - Our Story & Mission | Sustainable Gardening',
      description: 'Learn about TerraVik mission to revolutionize home gardening with premium organic solutions. Discover our commitment to sustainability and innovation.',
      keywords: 'about terravik, company mission, organic gardening company, sustainable agriculture, terravik story',
      type: 'website',
      image: 'https://example.com/terravik-about.jpg',
    },
  },
  hawaiAgro: {
    home: {
      title: 'Hawai Agro - Advanced Organic Farming Solutions | Sustainable Agriculture',
      description: 'Hawai Agro provides advanced organic farming solutions for sustainable agriculture. Fermented organic manure, bio fertilizers, and proven yield improvement products.',
      keywords: 'organic farming, sustainable agriculture, bio fertilizer, fermented manure, crop yield, farming solutions, agricultural products',
      type: 'website',
      image: 'https://example.com/hawaiagro-home.jpg',
    },
    products: {
      title: 'Hawai Agro Products - Organic Farming Solutions | Premium Quality',
      description: 'Explore Hawai Agro premium organic farming products including Fermented Organic Manure, Bio Fertilizer, Neem Oil Extract, and Vermicompost. Proven results.',
      keywords: 'organic fertilizer, farming products, fermented manure, bio fertilizer, neem oil, vermicompost, agricultural solutions',
      type: 'website',
      image: 'https://example.com/hawaiagro-products.jpg',
    },
    research: {
      title: 'Hawai Agro Research & Innovation - Scientific Farming Solutions',
      description: 'Discover Hawai Agro research partnerships with Teerthanker Mahaveer University. Learn about scientific validation, sustainable farming innovation, and yield improvement.',
      keywords: 'agricultural research, sustainable farming, scientific validation, university partnership, crop yield, farming research',
      type: 'website',
      image: 'https://example.com/hawaiagro-research.jpg',
    },
    contact: {
      title: 'Contact Hawai Agro - Get In Touch | Farming Support',
      description: 'Contact Hawai Agro for inquiries about our organic farming products. Phone: 9008383900. Email: info@hawaiagro.com. Located in Moradabad, Uttar Pradesh.',
      keywords: 'contact hawaiagro, customer support, farming help, organic products inquiry, hawaiagro contact',
      type: 'website',
      image: 'https://example.com/hawaiagro-contact.jpg',
    },
    about: {
      title: 'About Hawai Agro - Our Story & Mission | Sustainable Farming',
      description: 'Learn about Hawai Agro mission to empower farmers with organic solutions. Discover our commitment to sustainability, innovation, and yield improvement.',
      keywords: 'about hawaiagro, company mission, organic farming company, sustainable agriculture, hawaiagro story',
      type: 'website',
      image: 'https://example.com/hawaiagro-about.jpg',
    },
  },
};

export const getSEOData = (brandId, page) => {
  const brand = brandId === 'terravik' ? 'terravik' : 'hawaiAgro';
  return seoConfig[brand][page] || seoConfig[brand].home;
};

export const getPagePath = (brandId, page) => {
  const basePath = brandId === 'terravik' ? '/terravik' : '/hawai-agro';
  const pagePath = page === 'home' ? '' : `/${page}`;
  return `${basePath}${pagePath}`;
};
