import { motion, AnimatePresence } from 'framer-motion';
import { useBrandContext } from '../../context/BrandContext';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FAQs = () => {
  const { colors, brandId } = useBrandContext();
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      category: 'Products',
      questions: [
        {
          id: 1,
          question: 'What is the difference between liquid and solid fertilizers?',
          answer: 'Liquid fertilizers are quickly absorbed by plants and provide immediate nutrients, while solid fertilizers release nutrients slowly over time. Liquid fertilizers are ideal for quick nutrient boosts, whereas solid fertilizers provide long-term soil enrichment.',
        },
        {
          id: 2,
          question: 'Are your products certified organic?',
          answer: 'Yes, all our products are certified organic and meet international standards. We maintain strict quality control and third-party testing to ensure the highest standards of purity and effectiveness.',
        },
        {
          id: 3,
          question: 'Can I use these products on all types of plants?',
          answer: 'Our products are designed to be safe for most plants. However, we recommend checking the specific product instructions for any plant-specific guidelines. Generally, our organic formulations are suitable for vegetables, fruits, flowers, and ornamental plants.',
        },
      ],
    },
    {
      category: 'Usage & Application',
      questions: [
        {
          id: 4,
          question: 'How often should I apply the fertilizer?',
          answer: 'Application frequency depends on the specific product and plant type. Generally, liquid fertilizers are applied every 10-15 days, while solid fertilizers are applied seasonally. Always refer to the product label for specific recommendations.',
        },
        {
          id: 5,
          question: 'What is the correct dosage for my plants?',
          answer: 'Dosage varies based on plant type and soil conditions. For liquid products, typically 5-10 ml per liter of water is recommended. For solid products, 20-30% mixing ratio with existing soil is standard. Always follow the instructions on the product packaging.',
        },
        {
          id: 6,
          question: 'Can I overdose on fertilizer?',
          answer: 'Yes, over-fertilizing can harm plants by causing nutrient burn or salt accumulation in soil. Always follow recommended dosages and avoid applying more than suggested. If over-fertilization occurs, flush the soil with water.',
        },
      ],
    },
    {
      category: 'Shipping & Delivery',
      questions: [
        {
          id: 7,
          question: 'What are your shipping options?',
          answer: 'We offer standard and express shipping options. Standard shipping typically takes 5-7 business days, while express shipping takes 2-3 business days. Shipping costs vary based on location and order size.',
        },
        {
          id: 8,
          question: 'Do you ship internationally?',
          answer: 'Currently, we ship within India. International shipping options may be available for bulk orders. Please contact our support team for international inquiries.',
        },
        {
          id: 9,
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for unopened products in original packaging. If you receive a damaged product, please contact us immediately for a replacement or refund.',
        },
      ],
    },
    {
      category: 'Sustainability',
      questions: [
        {
          id: 10,
          question: 'Are your packaging materials eco-friendly?',
          answer: 'Yes, we use biodegradable and recyclable packaging materials. Our commitment to sustainability extends from production to packaging to ensure minimal environmental impact.',
        },
        {
          id: 11,
          question: 'How do you ensure sustainable production?',
          answer: 'We implement zero-waste production processes, use renewable energy where possible, and maintain carbon-neutral operations. Our products are designed to support sustainable agriculture practices.',
        },
        {
          id: 12,
          question: 'Can I recycle the product containers?',
          answer: 'Yes, all our containers are recyclable. We encourage customers to recycle or reuse containers. Some containers can be repurposed for storage or gardening use.',
        },
      ],
    },
  ];

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <motion.section
        className="section-padding bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-container">
          <div className="text-center mb-12">
            <h1 className="text-responsive-h1 mb-4" style={{ color: colors.primary }}>
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our products, usage, and services
            </p>
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {faqCategories.map((category, categoryIdx) => (
              <motion.div key={categoryIdx} variants={itemVariants}>
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <motion.div
                      key={faq.id}
                      className="rounded-lg border-2 border-gray-200 overflow-hidden hover:border-gray-300 transition-colors"
                    >
                      {/* Question Header */}
                      <motion.button
                        onClick={() => toggleExpanded(faq.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        whileHover={{ backgroundColor: '#f9fafb' }}
                      >
                        <h3 className="text-lg font-semibold text-gray-900 text-left">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        </motion.div>
                      </motion.button>

                      {/* Answer */}
                      <AnimatePresence>
                        {expandedId === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-gray-200 bg-gray-50"
                          >
                            <p className="px-6 py-4 text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <motion.section
        className="section-padding bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container text-center">
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
              Still Have Questions?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all"
              style={{ backgroundColor: colors.secondary }}
            >
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default FAQs;
