import liquidGoldImage from '../assets/products/terravik-liquid-gold-1L.png';
import hawaiAgroImage from '../assets/products/HawaiAgro 25kg.png';

import tvBrochure from '../assets/downloads/terravik-liquid-gold-brochure.pdf';
import tvManual from '../assets/downloads/terravik-liquid-gold-usage-manual.pdf';
import tvResearch from '../assets/downloads/terravik-liquid-gold-research-summary.pdf';
import tvCert from '../assets/downloads/terravik-liquid-gold-organic-certifications.pdf';

import fomBrochure from '../assets/downloads/hawai-agro-fom-brochure.pdf';
import fomManual from '../assets/downloads/hawai-agro-fom-usage-manual.pdf';
import fomResearch from '../assets/downloads/hawai-agro-fom-research-summary.pdf';
import fomCert from '../assets/downloads/hawai-agro-fom-organic-certifications.pdf';

export const products = {
  terravik: [
    {
      id: 1,
      slug: 'liquid-gold',
      name: 'Liquid Gold',
      fullName: 'TerraVik Liquid Gold',
      type: 'Premium Liquid Organic Fermented Manure',
      volume: '1 Liter bottle',
      description: 'TerraVik Liquid Gold is a premium liquid organic fermented manure crafted for home gardeners, balcony growers, and urban plant enthusiasts. Made through a natural fermentation process, it delivers instant nutrient uptake, boosts flowering and fruiting, and builds long-term soil microbial health.',
      price: 499,
      image: liquidGoldImage,
      category: 'Liquid Fertilizer',
      features: [
        'Instant nutrient uptake for rapid plant response',
        'Boosts flowering and fruiting cycles',
        'Enhances natural pest resistance',
        'Builds soil microbial health over time',
        'Balanced pH safe for all plant types',
      ],
      usage: {
        dilution: 'Mix 5–10 ml of TerraVik Liquid Gold in 1 litre of water.',
        application: 'Root drenching or foliar spray directly onto leaves and stems.',
        frequency: 'Apply every 10–15 days for best results.',
      },
      benefits: [
        'Instant nutrient uptake',
        'Boosts flowering and fruiting',
        'Enhances natural pest resistance',
        'Builds soil microbial health',
      ],
      specs: {
        productName: 'TerraVik Liquid Gold',
        bottleSize: '1 Liter',
        keyBenefits: [
          'Instant nutrient uptake for rapid plant response',
          'Boosts flowering and fruiting cycles',
          'Enhances natural pest resistance',
          'Builds soil microbial health over time',
        ],
        targetAudience: [
          'Home Gardeners',
          'Balcony Gardeners',
          'Terrace Gardeners',
          'Floriculturists',
        ],
        application: 'Dilute 5–10 ml in 1 litre of water. Apply directly to soil or as a foliar spray every 15 days.',
      },
      downloads: [
        { label: 'Product Brochure', description: 'Full product overview and features', file: tvBrochure },
        { label: 'Usage Manual', description: 'Step-by-step application guide', file: tvManual },
        { label: 'Research Summary', description: 'Scientific backing and trial results', file: tvResearch },
        { label: 'Organic Certifications', description: 'Certification and compliance documents', file: tvCert },
      ],
      testimonials: [
        {
          quote: 'My balcony garden has never looked this vibrant. The flowering on my hibiscus tripled within three weeks.',
          name: 'Anjali S.',
          title: 'Urban Gardener',
        },
        {
          quote: 'TerraVik feels gentle yet incredibly powerful. The bottle lasts long because it is concentrated.',
          name: 'Rajesh M.',
          title: 'Terrace Farmer',
        },
      ],
    },
  ],
  hawaiAgro: [
    {
      id: 1,
      slug: 'fom',
      name: 'Fermented Organic Manure',
      fullName: 'Hawai Agro FOM',
      type: 'Fermented Organic Manure (FOM)',
      volume: '25kg / 50kg HDPE woven bags',
      description: 'Hawai Agro FOM (Fermented Organic Manure) is a high-performance organic fertilizer developed for farmers and large-scale agriculture. Produced through a controlled fermentation process, it enriches soil health, boosts crop yield, and supports sustainable farming practices.',
      price: 1299,
      image: hawaiAgroImage,
      category: 'Organic Manure',
      features: [
        'Improves soil structure and aeration',
        'Enhances water retention capacity',
        'Provides slow-release NPK nutrition',
        'Restores beneficial soil microbes',
        'High organic carbon and humic acid content',
      ],
      usage: {
        dosage: 'Basal dressing: 2–4 bags per acre during land preparation; Top dressing: 1–2 bags per acre at crop establishment',
        frequency: 'Apply at land preparation or as top dressing during crop establishment',
      },
      benefits: [
        'Proven yield increase across crops',
        'Cost-effective per-acre solution',
        'Supports sustainable and organic farming',
        'Farmer-tested and field-proven formula',
      ],
      specs: {
        variants: [
          { name: 'Hawai Agro FOM Standard', description: 'General-purpose fermented organic manure for all soil types' },
          { name: 'Hawai Agro PROM', description: 'Phosphate-Rich Organic Manure — enhanced phosphate content for phosphorus-deficient soils' },
        ],
        packaging: ['25 kg HDPE woven bag', '50 kg HDPE woven bag'],
        keyBenefits: [
          'Improves soil structure and aeration',
          'Enhances water retention',
          'Provides slow-release NPK',
          'Restores beneficial soil microbes',
        ],
        suitableCrops: ['Rice', 'Wheat', 'Pulses', 'Sugarcane', 'Fruit Orchards', 'Vegetables'],
        application: 'Basal dressing during land preparation or top dressing at crop establishment stage.',
        applicationSteps: [
          {
            step: 1,
            title: 'Soil Preparation',
            detail: 'Apply 200–500 kg per acre depending on soil health and crop requirement.',
          },
          {
            step: 2,
            title: 'Incorporation',
            detail: 'Mix thoroughly into the top 6–8 inches of soil using a tiller or cultivator.',
          },
          {
            step: 3,
            title: 'Moisture',
            detail: 'Ensure the soil is adequately moist to activate microbial colonies and nutrient release.',
          },
        ],
      },
      downloads: [
        { label: 'Product Brochure', description: 'Full product overview and features', file: fomBrochure },
        { label: 'Usage Manual', description: 'Step-by-step application guide for farmers', file: fomManual },
        { label: 'Research Summary', description: 'Field trial data and yield results', file: fomResearch },
        { label: 'Organic Certifications', description: 'Certification and compliance documents', file: fomCert },
      ],
    },
  ],
};

export const getProductsByBrand = (brandId) => {
  return products[brandId] || [];
};
