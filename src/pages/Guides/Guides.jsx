import { motion } from 'framer-motion';
import { useBrandContext } from '../../context/BrandContext';
import { Download, BookOpen, Leaf, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Guides = () => {
  const { colors, brandId } = useBrandContext();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const guides = [
    {
      id: 1,
      title: 'Beginner\'s Guide to Home Gardening',
      description: 'Start your gardening journey with this comprehensive guide covering basics, tools, and best practices.',
      category: 'Gardening',
      icon: '🌱',
      pages: 24,
      downloadUrl: '#',
    },
    {
      id: 2,
      title: 'Organic Fertilizer Application Guide',
      description: 'Learn the correct methods and timing for applying organic fertilizers to maximize plant growth.',
      category: 'Fertilizers',
      icon: '🌾',
      pages: 18,
      downloadUrl: '#',
    },
    {
      id: 3,
      title: 'Sustainable Farming Practices',
      description: 'Comprehensive guide to sustainable farming techniques that improve yield and protect the environment.',
      category: 'Farming',
      icon: '🚜',
      pages: 32,
      downloadUrl: '#',
    },
    {
      id: 4,
      title: 'Indoor Plant Care Manual',
      description: 'Complete guide to caring for indoor plants with organic products and natural methods.',
      category: 'Gardening',
      icon: '🪴',
      pages: 20,
      downloadUrl: '#',
    },
    {
      id: 5,
      title: 'Soil Health and Improvement',
      description: 'Understand soil composition and learn techniques to improve soil health for better plant growth.',
      category: 'Soil Science',
      icon: '🔬',
      pages: 28,
      downloadUrl: '#',
    },
    {
      id: 6,
      title: 'Seasonal Gardening Calendar',
      description: 'Month-by-month guide for planning and executing gardening activities throughout the year.',
      category: 'Gardening',
      icon: '📅',
      pages: 16,
      downloadUrl: '#',
    },
    {
      id: 7,
      title: 'Pest Management Guide',
      description: 'Natural and organic methods for managing common garden pests without harmful chemicals.',
      category: 'Pest Control',
      icon: '🐛',
      pages: 22,
      downloadUrl: '#',
    },
    {
      id: 8,
      title: 'Composting at Home',
      description: 'Learn how to create your own compost at home and use it to enrich your garden soil.',
      category: 'Composting',
      icon: '♻️',
      pages: 14,
      downloadUrl: '#',
    },
  ];

  const categories = ['All', ...new Set(guides.map((g) => g.category))];
  const filteredGuides = guides.filter(
    (guide) => selectedCategory === 'All' || guide.category === selectedCategory
  );

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
              Guides & Resources
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Download comprehensive guides for gardening, farming, and organic product usage
            </p>
          </div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={
                  selectedCategory === category
                    ? { backgroundColor: colors.secondary }
                    : {}
                }
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Guides Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredGuides.map((guide) => (
              <motion.div
                key={guide.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Guide Header */}
                <div
                  className="h-40 flex items-center justify-center text-6xl font-bold"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
                  }}
                >
                  {guide.icon}
                </div>

                {/* Guide Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full w-fit"
                    style={{
                      backgroundColor: `${colors.secondary}20`,
                      color: colors.secondary,
                    }}
                  >
                    {guide.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{guide.description}</p>

                  {/* Pages Info */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
                    <BookOpen className="w-4 h-4" />
                    <span>{guide.pages} pages</span>
                  </div>

                  {/* Download Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 py-2 rounded-lg font-semibold text-white transition-all"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Results Counter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            Showing {filteredGuides.length} of {guides.length} guides
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        className="section-padding bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
              Why Download Our Guides?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Expert Knowledge',
                description: 'Created by agricultural experts and experienced gardeners',
              },
              {
                icon: Award,
                title: 'Proven Methods',
                description: 'Tested techniques that deliver real results',
              },
              {
                icon: Users,
                title: 'Community Tested',
                description: 'Feedback from thousands of satisfied users',
              },
              {
                icon: Download,
                title: 'Free Downloads',
                description: 'All guides available for free in PDF format',
              },
            ].map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <IconComponent className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="section-padding text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container text-center">
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <h2 className="text-responsive-h2 mb-6 text-white">
              Need More Help?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Can't find what you're looking for? Contact our support team for personalized assistance.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold bg-white transition-all"
              style={{ color: colors.primary }}
            >
              Contact Support
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Guides;
