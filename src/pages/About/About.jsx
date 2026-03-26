import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useBrandContext } from '../../context/BrandContext';
import { AnimatedBorderCard } from '../../components/AnimatedBorderCard';
import { Background3D } from '../../components/Background3D';
import { Target, Eye, Award, Users, Leaf, TrendingUp, Heart, Shield, CheckCircle, Sparkles } from 'lucide-react';

const ABOUT_IMAGES = {
  terravik: {
    hero: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80',
    mission: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80',
    vision: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    team: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
  },
  hawaiAgro: {
    hero: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80',
    mission: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    vision: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    team: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
  },
};

export const About = () => {
  const { brand, colors, features, brandId } = useBrandContext();
  const images = ABOUT_IMAGES[brandId] || ABOUT_IMAGES.terravik;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.hero} alt="About Hero" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${colors.dark}f5 0%, ${colors.primary}dd 50%, ${colors.secondary}99 100%)` }}
          />
        </div>
        <Background3D variant="particles" />
        
        <div className="section-container relative z-10 text-white py-20">
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
              About Us
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              About {brand.name}
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {brand.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Background3D variant="mesh" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent || colors.secondary})` }}
                >
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl font-black" style={{ color: colors.primary }}>Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {brand.name} is dedicated to providing {brand.description.toLowerCase()} 
                that help farmers and gardeners achieve sustainable growth and better yields.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe in the power of organic solutions to transform agriculture while protecting our planet for future generations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Organic', 'Sustainable', 'Innovative'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-bold"
                    style={{ backgroundColor: `${colors.secondary}20`, color: colors.primary }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <AnimatedBorderCard className="rounded-3xl overflow-hidden shadow-2xl h-96 card-3d" enable3D={true}>
              <div className="relative group h-full">
                <img
                  src={images.mission}
                  alt="Our Mission"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `linear-gradient(145deg, ${colors.primary}cc, ${colors.secondary}99)` }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="w-20 h-20 text-white/20" />
                </motion.div>
              </div>
            </AnimatedBorderCard>
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Background3D variant="particles" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedBorderCard className="rounded-3xl overflow-hidden shadow-2xl h-96 card-3d order-2 md:order-1" enable3D={true}>
              <div className="relative group h-full">
                <img
                  src={images.vision}
                  alt="Our Vision"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `linear-gradient(145deg, ${colors.secondary}cc, ${colors.primary}99)` }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Eye className="w-24 h-24 text-white drop-shadow-2xl" />
                </motion.div>
              </div>
            </AnimatedBorderCard>

            <motion.div variants={itemVariants} className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
                >
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl font-black" style={{ color: colors.primary }}>Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We envision a future where agriculture is sustainable, productive, and accessible 
                to everyone. Our tagline "{brand.tagline}" reflects our commitment to bringing 
                positive change to the agricultural sector.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Through innovation and dedication, we aim to become the leading provider of organic agricultural solutions in India.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)' }}
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
              style={{ backgroundColor: `${colors.secondary}18`, color: colors.secondary }}
            >
              Why Choose Us
            </span>
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>What Makes Us Different</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Experience the difference with our premium organic solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const icons = [Award, Shield, Leaf, TrendingUp, Heart, Users];
              const images = [
                'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80',
                'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
                'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80',
                'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80',
                'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
                'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
              ];
              const Icon = icons[index] || CheckCircle;
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
                      alt={feature}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 opacity-50 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ background: `linear-gradient(145deg, ${colors.primary}dd, ${colors.secondary}99)` }}
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
                        <Icon className="w-8 h-8" style={{ color: colors.secondary }} />
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-gray-700 text-center font-semibold leading-relaxed">{feature}</p>
                  </div>
                </AnimatedBorderCard>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="section-padding relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.primary} 60%, ${colors.secondary}80 100%)` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.secondary }} />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.accent }} />
        </div>

        <div className="section-container text-center relative z-10">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-white">
            <h2 className="text-responsive-h2 mb-6 font-black">Our Core Values</h2>
            <p className="text-lg mb-12" style={{ color: 'rgba(255,255,255,0.8)' }}>
              These principles guide everything we do at {brand.name}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Leaf, title: 'Sustainability', desc: 'Protecting our planet for future generations' },
                { icon: Heart, title: 'Quality', desc: 'Premium products you can trust' },
                { icon: Users, title: 'Community', desc: 'Supporting farmers and gardeners' },
              ].map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="rounded-3xl p-8 text-white relative overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-white/75 text-sm">{value.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
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
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>Our Commitment</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Dedicated to bringing you the best organic solutions
            </p>
          </motion.div>

          <AnimatedBorderCard className="rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto card-3d" enable3D={true}>
            <div className="relative h-96">
              <img
                src={images.team}
                alt="Our Team"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(to top, ${colors.primary}f0 0%, transparent 50%)` }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-black mb-2">Jaivik Vikalp Urja LLP</h3>
                <p className="text-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Based in Moradabad, Uttar Pradesh
                </p>
              </div>
            </div>
          </AnimatedBorderCard>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
