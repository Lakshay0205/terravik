import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';
import { useBrandContext } from '../../context/BrandContext';
import { HeroSection } from '../../components/HeroSection';
import { SEOHead } from '../../components/SEOHead';
import { AnimatedBorderCard } from '../../components/AnimatedBorderCard';
import { Background3D } from '../../components/Background3D';
import { Leaf, Recycle, Globe, TrendingUp, Zap, Users, CheckCircle, Sparkles, Award, Target } from 'lucide-react';
import liquidGoldImage from '../../assets/products/terravik-liquid-gold-1L.png';
import hawaiAgroImage from '../../assets/products/HawaiAgro 25kg.png';
import terravikBackedByScience from '../../assets/images/terravik backed by science.png';
import terravikTransformGarden from '../../assets/images/terravik transform your garden.png';
import terravikCarbonNeutral from '../../assets/images/terravik carbon neutral.jpg';

const SECTION_IMAGES = {
  terravik: {
    story: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    product: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
    research: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
  },
  hawaiAgro: {
    story: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
    product: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    research: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
  },
};

export const Home = () => {
  const { navigateToBrand } = useBrandNavigation();
  const { brand, colors, brandId } = useBrandContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, rotate: -2 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  const images = SECTION_IMAGES[brandId] || SECTION_IMAGES.terravik;

  const isTerravik = brandId === 'terravik';

  const companyInfo = {
    name: 'Jaivik Vikalp Urja LLP',
    location: 'Moradabad, Uttar Pradesh',
  };

  const productInfo = isTerravik
    ? {
        name: 'TerraVik Liquid Gold',
        slug: 'liquid-gold',
        description: 'Premium liquid organic fermented manure crafted for home gardeners and urban plant enthusiasts. Made through a natural fermentation process for vibrant, healthy growth.',
        image: liquidGoldImage,
        benefits: [
          'Rich in organic nutrients',
          'Perfect for indoor and balcony plants',
          'Easy liquid application',
          'Eco-friendly, chemical-free formula',
        ],
      }
    : {
        name: 'Hawai Agro FOM',
        slug: 'fom',
        description: 'Fermented Organic Manure (FOM) developed for farmers and large-scale agriculture. Enriches soil health, boosts crop yield, and supports sustainable farming.',
        image: hawaiAgroImage,
        benefits: [
          'Proven yield increase across crops',
          'Cost-effective per-acre solution',
          'Supports sustainable and organic farming',
          'Farmer-tested and field-proven formula',
        ],
      };

  const benefits = [
    { icon: Leaf,       title: 'Organic & Natural', description: 'Made from 100% natural ingredients without harmful chemicals' },
    { icon: Recycle,    title: 'Sustainable',        description: 'Environmentally friendly and supports sustainable agriculture' },
    { icon: Globe,      title: 'Eco-Friendly',       description: 'Reduces carbon footprint and promotes green farming' },
    { icon: TrendingUp, title: 'High Yield',         description: 'Proven to increase crop yield and plant growth' },
  ];

  const researchPoints = [
    { label: 'Advanced fermentation technology', detail: 'Using cutting-edge fermentation technology for maximum nutrient content' },
    { label: 'Laboratory tested formulations',   detail: 'Every batch tested in certified laboratories for quality assurance' },
    { label: 'Continuous innovation',            detail: 'Constantly improving our formulas based on latest agricultural research' },
    { label: 'Farmer feedback integration',      detail: 'Direct feedback from farmers helps us refine our products' },
  ];

  const sustainItems = [
    { icon: Recycle, title: 'Zero Waste',     label: 'Zero-waste production', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80' },
    { icon: Leaf,    title: 'Biodegradable',  label: 'Eco-friendly packaging', img: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&q=80' },
    { icon: Globe,   title: 'Carbon Neutral', label: 'Reducing impact',        img: isTerravik ? terravikCarbonNeutral : 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=600&q=80' },
    { icon: Users,   title: 'Community',      label: 'Supporting locals',      img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80' },
  ];

  // ── Mobile detection ──────────────────────────────────────────────
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // ── Mobile carousel refs ──────────────────────────────────────────
  const benefitsRef    = useRef(null);
  const sustainRef     = useRef(null);
  const bPausedRef     = useRef(false);
  const bResumeTimer   = useRef(null);
  const sPausedRef     = useRef(false);
  const sResumeTimer   = useRef(null);

  // Benefits carousel auto-slide
  useEffect(() => {
    const container = benefitsRef.current;
    if (!container) return;
    let idx = 0;
    const count = benefits.length;
    const tick = () => {
      if (bPausedRef.current) return;
      idx = (idx + 1) % count;
      const cardWidth = container.firstChild?.offsetWidth ?? 0;
      container.scrollTo({ left: idx * (cardWidth + 16), behavior: 'smooth' });
    };
    const interval = setInterval(tick, 2500);
    const onTouchStart = () => { bPausedRef.current = true; clearTimeout(bResumeTimer.current); };
    const onTouchEnd   = () => {
      bResumeTimer.current = setTimeout(() => {
        bPausedRef.current = false;
        const cardWidth = container.firstChild?.offsetWidth ?? 1;
        idx = Math.round(container.scrollLeft / (cardWidth + 16)) % count;
      }, 3000);
    };
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend',   onTouchEnd,   { passive: true });
    return () => {
      clearInterval(interval);
      clearTimeout(bResumeTimer.current);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend',   onTouchEnd);
    };
  }, [isMobile]);
  useEffect(() => {
    const container = sustainRef.current;
    if (!container) return;
    let idx = 0;
    const count = sustainItems.length;
    const tick = () => {
      if (sPausedRef.current) return;
      idx = (idx + 1) % count;
      const cardWidth = container.firstChild?.offsetWidth ?? 0;
      container.scrollTo({ left: idx * (cardWidth + 16), behavior: 'smooth' });
    };
    const interval = setInterval(tick, 2500);
    const onTouchStart = () => { sPausedRef.current = true; clearTimeout(sResumeTimer.current); };
    const onTouchEnd   = () => {
      sResumeTimer.current = setTimeout(() => {
        sPausedRef.current = false;
        const cardWidth = container.firstChild?.offsetWidth ?? 1;
        idx = Math.round(container.scrollLeft / (cardWidth + 16)) % count;
      }, 3000);
    };
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend',   onTouchEnd,   { passive: true });
    return () => {
      clearInterval(interval);
      clearTimeout(sResumeTimer.current);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend',   onTouchEnd);
    };
  }, [isMobile]);

  return (
    <>
      <SEOHead page="home" />
      <main className="w-full">

        {/* Hero */}
        <HeroSection />

        {/* Brand Story - MOBILE FIRST */}
        <motion.section
          className="py-16 px-8 relative overflow-hidden max-sm:py-8 max-sm:px-4"
          style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-screen-xl mx-auto flex flex-row gap-12 items-center max-sm:flex-col max-sm:gap-6">
            {/* Text — desktop left, mobile below */}
            <motion.article variants={itemVariants} className="w-1/2 space-y-4 order-1 max-sm:w-full max-sm:order-2">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: `${colors.secondary}18`, color: colors.secondary }}
              >
                Our Story
              </span>
              <h2 className="text-2xl font-bold leading-tight break-words" style={{ color: colors.primary }}>Rooted in Nature, Driven by Science</h2>
              <p className="text-gray-600 text-base leading-relaxed break-words">
                {companyInfo.name} is committed to revolutionising agriculture through sustainable and
                organic solutions. Based in {companyInfo.location}, we bring innovation to farming.
              </p>
              <p className="text-gray-600 text-base leading-relaxed break-words">
                {isTerravik
                  ? 'TerraVik brings premium home gardening solutions to urban gardeners, making sustainable living accessible to everyone.'
                  : 'Hawai Agro empowers farmers with organic solutions that increase yield while protecting the environment.'}
              </p>
              <ul className="space-y-3">
                {['Certified Organic Products', 'Trusted by Thousands', 'Sustainable Practices'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.secondary }} />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            {/* Image — desktop right, mobile top */}
            <motion.div variants={itemVariants} className="w-1/2 order-2 max-sm:w-full max-sm:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg h-80 max-sm:h-56">
                <img
                  src={images.story}
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Product - MOBILE FIRST */}
        {isTerravik ? (
          <motion.section
            className="py-16 px-8 bg-white max-sm:py-8 max-sm:px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
          <div className="max-w-screen-xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-8">
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: `${colors.secondary}18`, color: colors.secondary }}
                >
                  Featured Product
                </span>
                <h2 className="text-4xl font-bold mb-3 break-words" style={{ color: colors.primary }}>{productInfo.name}</h2>
                <p className="text-gray-600 text-base max-w-2xl mx-auto break-words">{productInfo.description}</p>
              </motion.div>

              <div className="flex flex-row gap-12 items-center max-sm:flex-col max-sm:gap-6">
                {/* Product Image — desktop left */}
                <motion.div variants={itemVariants} className="w-1/2 max-sm:w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-white p-8">
                  <img
                    src={productInfo.image}
                    alt={productInfo.name}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>

                {/* Benefits + CTA — desktop right */}
                <div className="w-1/2 max-sm:w-full space-y-4">
                  <motion.div variants={itemVariants} className="space-y-3">
                    {productInfo.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.secondary }} />
                        <span className="text-gray-700 text-sm font-medium break-words">{benefit}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigateToBrand(`products/${productInfo.slug}`)}
                    className="w-full px-6 py-3 rounded-xl font-bold text-white shadow-lg text-sm"
                    style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
                  >
                    View Product Details
                  </motion.button>
                </div>
              </div>
          </div>
          </motion.section>
        ) : (
          // Hawai Agro - MOBILE FIRST COMPACT
          <motion.section
            className="py-16 px-8 max-sm:py-8 max-sm:px-4 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="max-w-screen-xl mx-auto space-y-6">
              {/* Header */}
              <motion.div variants={itemVariants} className="text-center">
                <div className="text-gray-900 px-4 py-2 rounded-xl inline-block mb-4"
                  style={{ backgroundColor: `${colors.secondary}20` }}>
                  <p className="text-lg font-black" style={{ color: colors.primary }}>🌾 किसानों का भरोसा 🌾</p>
                </div>
                <h2 className="text-4xl font-black mb-3 break-words" style={{ color: colors.primary }}>{productInfo.name}</h2>
                <p className="text-gray-600 text-base font-semibold max-w-2xl mx-auto break-words">{productInfo.description}</p>
              </motion.div>

              {/* Product Card — desktop two-column */}
              <motion.div variants={itemVariants} className="flex flex-row gap-12 items-start max-sm:flex-col max-sm:gap-6">
                {/* Image — desktop left */}
                <div className="w-1/2 max-sm:w-full bg-white rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative h-64 flex items-center justify-center p-6">
                    <img src={productInfo.image} alt={productInfo.name} className="w-full h-full object-contain" />
                    <div className="absolute top-4 left-4 bg-yellow-400 px-3 py-1 rounded-lg">
                      <p className="text-gray-900 font-black text-sm">✓ प्रमाणित</p>
                    </div>
                  </div>
                </div>

                {/* Benefits + CTA — desktop right */}
                <div className="w-1/2 max-sm:w-full rounded-2xl shadow-xl border border-gray-100">
                  <div className="p-6 space-y-3">
                    {productInfo.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: `${colors.secondary}15` }}>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black flex-shrink-0" style={{ backgroundColor: colors.primary }}>✓</div>
                        <p className="text-gray-800 font-bold text-sm break-words">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 pt-0 space-y-3">
                    <button
                      onClick={() => navigateToBrand(`products/${productInfo.slug}`)}
                      className="w-full px-6 py-3 rounded-xl font-black text-white shadow-lg text-sm"
                      style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
                    >
                      📦 पूरी जानकारी देखें
                    </button>
                    <div className="flex gap-3">
                      <button
                        onClick={() => navigateToBrand('contact')}
                        className="flex-1 px-4 py-2 rounded-lg font-bold text-sm border-2"
                        style={{ borderColor: colors.primary, color: colors.primary }}
                      >
                        📞 संपर्क
                      </button>
                      <button
                        onClick={() => navigateToBrand('products')}
                        className="flex-1 px-4 py-2 rounded-lg font-bold text-sm border-2"
                        style={{ borderColor: colors.secondary, color: colors.secondary }}
                      >
                        🛒 उत्पाद
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Benefits - HORIZONTAL SCROLL */}
        <motion.section
          className="py-16 px-8 bg-white overflow-hidden max-sm:py-8 max-sm:px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-screen-xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-10">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: `${colors.secondary}18`, color: colors.secondary }}
              >
                Why Choose Us
              </span>
              <h2 className="text-4xl font-bold mb-2 break-words" style={{ color: colors.primary }}>Built Different</h2>
              <p className="text-gray-600 text-base break-words">Experience the difference</p>
            </motion.div>
            
            {/* Desktop: 4-col grid */}
            <div
              style={{ display: isMobile ? 'none' : 'grid' }}
              className="grid-cols-4 gap-6"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="rounded-2xl p-6 bg-white shadow-lg border border-gray-100"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `linear-gradient(135deg, ${colors.secondary}25, ${colors.primary}20)` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: colors.secondary }} />
                    </div>
                    <h3 className="text-base font-bold mb-2 text-gray-900 break-words">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed break-words">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile-only infinite carousel */}
            <div
              ref={benefitsRef}
              style={{ display: isMobile ? 'flex' : 'none', scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              className="gap-4 overflow-x-auto pb-4 -mx-4 px-4"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 snap-start rounded-2xl p-6 bg-white shadow-lg border border-gray-100"
                    style={{ minWidth: '80%' }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `linear-gradient(135deg, ${colors.secondary}25, ${colors.primary}20)` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: colors.secondary }} />
                    </div>
                    <h3 className="text-base font-bold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Research & Innovation - MOBILE FIRST */}
        <motion.section
          className="py-16 px-8 max-sm:py-8 max-sm:px-4"
          style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-screen-xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-10">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: `${colors.secondary}18`, color: colors.secondary }}
              >
                Research & Innovation
              </span>
              <h2 className="text-4xl font-bold mb-2 break-words" style={{ color: colors.primary }}>Backed by Science</h2>
              <p className="text-gray-600 text-base break-words">Laboratory-tested formulations</p>
            </motion.div>

            {/* Desktop: text left, image right | Mobile: image top, text below */}
            <div className="flex flex-row gap-12 items-center max-sm:flex-col max-sm:gap-6">
              {/* Text — desktop left, mobile order-2 */}
              <motion.div variants={itemVariants} className="w-1/2 space-y-3 order-1 max-sm:w-full max-sm:order-2">
                {researchPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1 break-words">{point.label}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed break-words">{point.detail}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Image — desktop right, mobile order-1 */}
              <motion.div variants={itemVariants} className="w-1/2 order-2 max-sm:w-full max-sm:order-1">
                <div className="rounded-2xl overflow-hidden shadow-lg h-80 max-sm:h-56">
                  <img
                    src={isTerravik ? terravikBackedByScience : images.research}
                    alt="Research"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Sustainability - HORIZONTAL SCROLL */}
        <motion.section
          className="py-16 px-8 bg-white overflow-hidden max-sm:py-8 max-sm:px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-screen-xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-10">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: `${colors.secondary}18`, color: colors.secondary }}
              >
                Sustainability
              </span>
              <h2 className="text-4xl font-bold mb-2 break-words" style={{ color: colors.primary }}>Our Commitment</h2>
              <p className="text-gray-600 text-base break-words">Building a greener future</p>
            </motion.div>
            
            {/* Desktop: 4-col grid */}
            <div
              style={{ display: isMobile ? 'none' : 'grid' }}
              className="grid-cols-4 gap-6"
            >
              {sustainItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="rounded-2xl overflow-hidden shadow-lg bg-white"
                  >
                    <div className="relative h-40">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: `${colors.primary}80` }}>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
                          <Icon className="w-6 h-6" style={{ color: colors.secondary }} />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold mb-1 text-gray-900 break-words">{item.title}</h3>
                      <p className="text-gray-600 text-sm break-words">{item.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile-only infinite carousel */}
            <div
              ref={sustainRef}
              style={{ display: isMobile ? 'flex' : 'none', scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              className="gap-4 overflow-x-auto pb-4 -mx-4 px-4"
            >
              {sustainItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 snap-start rounded-2xl overflow-hidden shadow-lg bg-white"
                    style={{ minWidth: '80%' }}
                  >
                    <div className="relative h-44">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: `${colors.primary}80` }}>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
                          <Icon className="w-6 h-6" style={{ color: colors.secondary }} />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold mb-1 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* CTA - MOBILE OPTIMIZED */}
        <motion.section
          className="py-16 px-8 max-sm:py-8 max-sm:px-4"
          style={isTerravik ? {
            backgroundImage: `linear-gradient(135deg, ${colors.dark}cc 0%, ${colors.primary}bb 60%, ${colors.secondary}99 100%), url(${terravikTransformGarden})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } : { background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.primary} 60%, ${colors.secondary}80 100%)` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
              >
                Get Started Today
              </span>
              <h2 className="text-4xl font-black text-white mb-4 break-words">
                Ready to Transform Your {isTerravik ? 'Garden' : 'Farm'}?
              </h2>
              <p className="text-base text-white/80 mb-8 break-words">
                Join thousands of satisfied customers who have already made the switch.
              </p>
              
              {/* CTA Buttons — desktop side by side, mobile stacked */}
              <div className="flex flex-row gap-4 justify-center max-sm:flex-col max-sm:items-stretch">
                <button
                  onClick={() => navigateToBrand(isTerravik ? 'products/liquid-gold' : 'products/fom')}
                  className="px-8 py-3 rounded-xl font-bold text-sm"
                  style={{ backgroundColor: 'white', color: colors.primary }}
                >
                  Shop Now
                </button>
                <button
                  onClick={() => navigateToBrand('about')}
                  className="px-8 py-3 rounded-xl font-bold text-sm border-2 border-white/40 text-white"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats - 2 COLUMN GRID */}
        <motion.section
          className="py-16 px-8 max-sm:py-8 max-sm:px-4"
          style={{ background: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-4 gap-8 max-sm:grid-cols-2 max-sm:gap-4">
              {[
                { number: '10K+', label: 'Happy Customers' },
                { number: '2', label: 'Products' },
                { number: '100%', label: 'Organic' },
                { number: '5+', label: 'Years' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-2xl p-8 text-center bg-white shadow-lg max-sm:p-5"
                >
                  <h3
                    className="text-4xl font-black mb-1 max-sm:text-3xl"
                    style={{ color: colors.primary }}
                  >
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium break-words">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

      </main>
    </>
  );
};

export default Home;
