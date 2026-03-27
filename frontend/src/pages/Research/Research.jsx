import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useBrandContext } from '../../context/BrandContext';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';
import {
  Download, FileText, Building2, FlaskConical, TrendingUp,
  Leaf, Users, CheckCircle, Calendar, HardDrive,
} from 'lucide-react';

export const Research = () => {
  const { colors, brandId } = useBrandContext();
  const { navigateToBrand } = useBrandNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const researchSections = [
    {
      id: 1,
      title: 'Research Partnership',
      icon: Users,
      description: 'Collaboration with Teerthanker Mahaveer University',
      content: [
        'Joint research initiatives for sustainable agriculture',
        'University-backed scientific validation',
        'Continuous innovation through academic partnership',
        'Student internship and research programs',
      ],
      details: brandId === 'terravik'
        ? 'TerraVik partners with Teerthanker Mahaveer University to develop premium home gardening solutions backed by rigorous scientific research. Our collaboration focuses on understanding soil microbiomes and plant nutrient uptake mechanisms.'
        : 'Hawai Agro collaborates with Teerthanker Mahaveer University to advance sustainable farming practices. Together, we conduct field trials and develop innovative solutions for large-scale agricultural challenges.',
    },
    {
      id: 2,
      title: 'Scientific Validation',
      icon: FlaskConical,
      description: 'Laboratory tested and field verified',
      content: [
        'Rigorous laboratory testing protocols',
        'Field trials across multiple regions',
        'Peer-reviewed research publications',
        'Third-party certification and validation',
      ],
      details: brandId === 'terravik'
        ? 'Every TerraVik product undergoes comprehensive laboratory testing at TMU facilities. Our formulations are validated through controlled experiments and real-world field trials to ensure maximum efficacy and safety.'
        : 'Hawai Agro products are scientifically validated through extensive field trials conducted by TMU researchers. We maintain the highest standards of quality assurance and scientific rigor in all our formulations.',
    },
    {
      id: 3,
      title: 'Sustainable Farming Innovation',
      icon: Leaf,
      description: 'Eco-friendly solutions for modern agriculture',
      content: [
        'Zero-waste production processes',
        'Biodegradable and eco-friendly packaging',
        'Carbon-neutral farming practices',
        'Soil health and biodiversity preservation',
      ],
      details: brandId === 'terravik'
        ? 'Our sustainable approach ensures that home gardeners can grow beautiful plants while protecting the environment. We use only natural, biodegradable ingredients and minimise our carbon footprint at every stage.'
        : 'Hawai Agro is committed to sustainable farming that benefits both farmers and the environment. Our innovations reduce chemical dependency while improving soil health and long-term productivity.',
    },
    {
      id: 4,
      title: 'Crop Yield Improvement',
      icon: TrendingUp,
      description: 'Proven results in productivity and quality',
      content: [
        'Average yield increase of 25–40%',
        'Improved crop quality and shelf life',
        'Reduced input costs for farmers',
        'Enhanced nutritional value of produce',
      ],
      details: brandId === 'terravik'
        ? 'TerraVik users report significantly healthier plants with better flowering and fruiting. Our products enhance nutrient availability, leading to more vigorous growth and improved plant resilience.'
        : 'Hawai Agro customers consistently achieve 25–40% yield improvements. Our scientifically formulated products optimise nutrient uptake and soil health, resulting in better harvests and improved profitability.',
    },
  ];

  const documents = [
    {
      id: 1,
      name: 'TMU Research Partnership Agreement',
      category: 'Certificates',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024',
      description: 'Official partnership agreement with Teerthanker Mahaveer University',
    },
    {
      id: 2,
      name: 'ISO 9001:2015 Certification',
      category: 'Certificates',
      type: 'PDF',
      size: '1.8 MB',
      date: '2024',
      description: 'Quality management system certification',
    },
    {
      id: 3,
      name: 'Organic Certification',
      category: 'Certificates',
      type: 'PDF',
      size: '2.1 MB',
      date: '2024',
      description: 'Official organic product certification',
    },
    {
      id: 4,
      name: 'Soil Microbiome Enhancement Study',
      category: 'Research Papers',
      type: 'PDF',
      size: '3.2 MB',
      date: '2024',
      description: 'Peer-reviewed research on microbial communities in treated soils',
    },
    {
      id: 5,
      name: 'Nutrient Bioavailability Analysis',
      category: 'Research Papers',
      type: 'PDF',
      size: '2.8 MB',
      date: '2023',
      description: 'Study on nutrient uptake efficiency and plant growth',
    },
    {
      id: 6,
      name: 'Sustainable Agriculture Impact Report',
      category: 'Research Papers',
      type: 'PDF',
      size: '4.1 MB',
      date: '2023',
      description: 'Comprehensive analysis of environmental and economic benefits',
    },
    {
      id: 7,
      name: 'Product Usage Guide — Complete',
      category: 'Usage Guides',
      type: 'PDF',
      size: '1.5 MB',
      date: '2024',
      description: 'Comprehensive guide for optimal product application',
    },
    {
      id: 8,
      name: 'Dosage and Application Manual',
      category: 'Usage Guides',
      type: 'PDF',
      size: '1.2 MB',
      date: '2024',
      description: 'Detailed instructions for different crops and conditions',
    },
    {
      id: 9,
      name: 'Troubleshooting Guide',
      category: 'Usage Guides',
      type: 'PDF',
      size: '0.9 MB',
      date: '2024',
      description: 'Solutions for common issues and best practices',
    },
  ];

  const categories = ['All', ...new Set(documents.map((d) => d.category))];
  const filteredDocuments = selectedCategory === 'All'
    ? documents
    : documents.filter((d) => d.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full">
      {/* Header */}
      <motion.section
        className="section-padding bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-container text-center">
          <h1 className="text-responsive-h1 mb-4" style={{ color: colors.primary }}>
            Research &amp; Innovation
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Advancing agriculture through scientific research and university collaboration
          </p>
        </div>
      </motion.section>

      {/* Research Sections */}
      <motion.section
        className="section-padding bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchSections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div
                    className="p-8 text-white"
                    style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
                  >
                    <Icon className="w-8 h-8 text-white mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                    <p className="text-white/80">{section.description}</p>
                  </div>
                  <div className="p-8 bg-white">
                    <p className="text-gray-600 mb-6 leading-relaxed">{section.details}</p>
                    <div className="space-y-3">
                      {section.content.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.secondary }} />
                          <span className="text-gray-700">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* TMU Partnership Highlight */}
      <motion.section
        className="section-padding"
        style={{ background: `linear-gradient(135deg, ${colors.primary}12 0%, ${colors.secondary}12 100%)` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
              Teerthanker Mahaveer University Partnership
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our collaboration with TMU represents a commitment to scientific excellence and innovation in agriculture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Research Facilities', description: 'Access to state-of-the-art laboratories and field research stations', icon: Building2 },
              { title: 'Expert Scientists', description: 'Collaboration with leading agricultural scientists and researchers', icon: Users },
              { title: 'Validation & Testing', description: 'Rigorous testing protocols ensuring product quality and efficacy', icon: CheckCircle },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                  className="bg-white rounded-xl p-8 shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 mb-4" style={{ color: colors.secondary }} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        className="section-padding bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>Research Impact</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Research Projects' },
              { number: '25–40%', label: 'Yield Improvement' },
              { number: '100+', label: 'Field Trials' },
              { number: '15+', label: 'Publications' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center p-8 rounded-xl bg-gray-50 hover:shadow-md transition-shadow"
              >
                <h3 className="text-4xl font-bold mb-2" style={{ color: colors.secondary }}>{stat.number}</h3>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Document Downloads */}
      <motion.section
        className="section-padding bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>Download Resources</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Access our research papers, certifications, and usage guides
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                style={selectedCategory === category ? { backgroundColor: colors.secondary } : {}}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => (
              <motion.div
                key={doc.id}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow"
              >
                <div className="p-6 text-white" style={{ backgroundColor: colors.primary }}>
                  <div className="flex items-start justify-between mb-3">
                    <FileText className="w-5 h-5 text-white" />
                    <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: colors.secondary }}>
                      {doc.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{doc.name}</h3>
                  <p className="text-white/80 text-sm">{doc.category}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-5 pb-5 border-b border-gray-100">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {doc.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5" /> {doc.size}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-2.5 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="section-padding text-white"
        style={{ backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container text-center">
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <h2 className="text-responsive-h2 mb-6 text-white">Interested in Our Research?</h2>
            <p className="text-lg mb-8 text-white/90">
              Contact us to learn more about our research initiatives and collaboration opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateToBrand('contact')}
                className="px-8 py-3 rounded-lg font-semibold bg-white transition-all"
                style={{ color: colors.primary }}
              >
                Contact Research Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateToBrand('contact')}
                className="px-8 py-3 rounded-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Research;
