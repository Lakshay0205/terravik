import { motion } from 'framer-motion';
import { useBrandContext } from '../../context/BrandContext';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Blog = () => {
  const { navigateToBrand } = useBrandNavigation();
  const { colors, brandId } = useBrandContext();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: 1,
      title: 'Getting Started with Organic Gardening',
      excerpt: 'Learn the basics of organic gardening and how to create a sustainable garden at home.',
      category: 'Gardening',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      image: '🌱',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Benefits of Fermented Organic Manure',
      excerpt: 'Discover why fermented organic manure is the best choice for your plants and soil health.',
      category: 'Fertilizers',
      author: 'Dr. Rajesh Kumar',
      date: '2024-01-12',
      image: '🌾',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Sustainable Farming Practices',
      excerpt: 'Explore sustainable farming techniques that increase yield while protecting the environment.',
      category: 'Farming',
      author: 'Priya Sharma',
      date: '2024-01-10',
      image: '🌿',
      readTime: '8 min read',
    },
    {
      id: 4,
      title: 'Indoor Plant Care Guide',
      excerpt: 'Complete guide to caring for indoor plants with organic products and natural methods.',
      category: 'Gardening',
      author: 'Michael Chen',
      date: '2024-01-08',
      image: '🪴',
      readTime: '6 min read',
    },
    {
      id: 5,
      title: 'Soil Health and Microbiomes',
      excerpt: 'Understanding soil microbiomes and how to maintain healthy soil for better plant growth.',
      category: 'Soil Science',
      author: 'Dr. Priya Verma',
      date: '2024-01-05',
      image: '🔬',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Seasonal Gardening Calendar',
      excerpt: 'Plan your gardening activities throughout the year with our comprehensive seasonal guide.',
      category: 'Gardening',
      author: 'Emma Wilson',
      date: '2024-01-01',
      image: '📅',
      readTime: '10 min read',
    },
  ];

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['All', ...new Set(articles.map((a) => a.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const displayArticles = filteredArticles.filter(
    (article) => selectedCategory === 'All' || article.category === selectedCategory
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
              Blog & Resources
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover tips, guides, and insights about organic farming and sustainable gardening
            </p>
          </div>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-300 focus:outline-none transition-colors"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
            </div>
          </motion.div>

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

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          {displayArticles.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {displayArticles.map((article) => (
                <motion.article
                  key={article.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  {/* Article Image */}
                  <div
                    className="h-48 flex items-center justify-center text-6xl font-bold"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
                    }}
                  >
                    {article.image}
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full w-fit"
                      style={{
                        backgroundColor: `${colors.secondary}20`,
                        color: colors.secondary,
                      }}
                    >
                      {article.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigateToBrand('guides')}
                      className="flex items-center justify-center gap-2 py-2 rounded-lg font-semibold text-white transition-all"
                      style={{ backgroundColor: colors.secondary }}
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-2xl text-gray-500 mb-4">No articles found</p>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}

          {/* Results Counter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            Showing {displayArticles.length} of {articles.length} articles
          </motion.p>
        </div>
      </section>

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
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Get the latest articles and tips delivered to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold bg-white transition-all"
                style={{ color: colors.primary }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
