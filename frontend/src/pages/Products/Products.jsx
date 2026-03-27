import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useBrandContext } from '../../context/BrandContext';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';
import { getProductsByBrand } from '../../data/products';
import { AnimatedBorderCard } from '../../components/AnimatedBorderCard';
import { Background3D } from '../../components/Background3D';
import { Leaf, Droplets, Sparkles, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react';

const PRODUCT_IMAGES = {
  terravik: [
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
    'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80',
  ],
  hawaiAgro: [
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
  ],
};

export const Products = () => {
  const { brandId, colors, brand } = useBrandContext();
  const { navigateToBrand } = useBrandNavigation();
  const allProducts = getProductsByBrand(brandId);
  const images = PRODUCT_IMAGES[brandId] || PRODUCT_IMAGES.terravik;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInquireClick = () => {
    console.log('Inquire Now clicked, navigating to contact');
    navigateToBrand('contact');
  };

  const handleDetailsClick = (slug) => {
    console.log('Details clicked for product:', slug);
    navigateToBrand(`products/${slug}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const benefits = [
    { icon: Leaf, title: '100% Organic', desc: 'Pure natural ingredients' },
    { icon: Droplets, title: 'Easy Application', desc: 'Simple liquid formula' },
    { icon: TrendingUp, title: 'Proven Results', desc: 'Visible growth boost' },
    { icon: Award, title: 'Lab Tested', desc: 'Quality guaranteed' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={brandId === 'terravik' 
              ? 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80'
              : 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600&q=80'
            }
            alt="Products Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.9) 0%, rgba(22,163,74,0.85) 100%)' }} />
        </div>
        <Background3D variant="particles" />
        
        <div className="section-container relative z-10 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              Our Products
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Premium {brand.name} Products
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Discover our range of organic solutions for sustainable growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <motion.section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Background3D variant="mesh" />
        <div className="section-container relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: '#22c55e20', color: '#15803d' }}
            >
              Featured Products
            </span>
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>Our Product Range</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Carefully crafted organic solutions for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <AnimatedBorderCard
                key={product.id}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl card-3d"
                enable3D={true}
                hoverScale={1.03}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      <img
                        src={images[index % images.length]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ background: 'linear-gradient(145deg, rgba(255,152,0,0.8), rgba(230,81,0,0.6))' }}
                      />
                    </>
                  )}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="w-6 h-6" style={{ color: '#ff9800' }} />
                  </motion.div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-black mb-2" style={{ color: colors.primary }}>{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.benefits?.slice(0, 2).map((benefit, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ backgroundColor: '#ff980015', color: '#e65100' }}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleInquireClick}
                      className="flex-1 px-4 py-2.5 rounded-xl font-bold text-white transition-all"
                      style={{ backgroundColor: colors.primary }}
                    >
                      Inquire Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleDetailsClick(product.slug)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-white transition-all"
                      style={{ background: 'linear-gradient(135deg, #ff9800, #e65100)' }}
                    >
                      Details
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </AnimatedBorderCard>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Background3D variant="particles" />
        <div className="section-container relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>Why Choose Our Products</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Experience the difference with premium organic solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const images = [
                'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80',
                'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80',
                'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80',
                'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
              ];
              return (
                <AnimatedBorderCard
                  key={index}
                  className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl card-3d"
                  enable3D={true}
                  hoverScale={1.03}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={images[index]}
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 opacity-50 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(145deg, #fbbf24dd, #f59e0baa)' }}
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
                      >
                        <Icon className="w-8 h-8" style={{ color: '#d97706' }} />
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm">{benefit.desc}</p>
                  </div>
                </AnimatedBorderCard>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#fff' }} />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#fff' }} />
        </div>
        <div className="section-container text-center relative z-10">
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <h2 className="text-responsive-h2 mb-6 font-black text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-10 text-white">
              Choose the perfect product for your needs and start your organic journey today
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.97 }}
              onClick={handleInquireClick}
              className="px-10 py-4 rounded-xl font-bold text-base transition-all"
              style={{ background: 'linear-gradient(135deg, #ffffff, #f0fdf4)', color: '#15803d' }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Products;
