import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, ArrowRight, Star, Play } from 'lucide-react';
import { useBrandContext } from '../../context/BrandContext';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';

const HERO_IMAGES = {
  terravik: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80&fit=crop',
  hawaiAgro: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80&fit=crop',
};

export const HeroSection = () => {
  const { navigateToBrand } = useBrandNavigation();
  const { brand, colors, brandId } = useBrandContext();
  const isTerravik = brandId === 'terravik';
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const heroImage = isTerravik ? HERO_IMAGES.terravik : HERO_IMAGES.hawaiAgro;

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src={heroImage}
          alt="hero background"
          className="w-full h-full object-cover scale-110"
        />
        {/* Dark overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(110deg, ${colors.dark}f0 0%, ${colors.primary}cc 45%, ${colors.primary}80 70%, transparent 100%)`,
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* Animated grain texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '128px' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-8 py-40 w-full max-sm:px-4 max-sm:py-28"
        style={{ y: textY, opacity }}
      >
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border"
              style={{
                backgroundColor: `${colors.secondary}25`,
                borderColor: `${colors.secondary}50`,
                color: colors.accent || '#d4af37',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              India's Premium Organic Brand
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp}>
            <h1
              className="font-black text-white leading-[1.0] tracking-tight mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
            >
              {brand.name}
            </h1>
            <p
              className="font-light tracking-[0.3em] uppercase text-base mb-6 max-sm:text-sm"
              style={{ color: colors.accent || '#d4af37' }}
            >
              {brand.tagline}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-xl leading-relaxed mb-10 max-w-xl max-sm:text-lg"
            style={{ color: 'rgba(255,255,255,0.78)' }}
          >
            {isTerravik
              ? "Premium liquid organic fermented manure for your home garden. Transform your plants with nature's finest formula."
              : 'Advanced fermented organic manure for sustainable farming. Proven to increase yield while protecting the environment.'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: `0 24px 48px ${colors.secondary}60` }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigateToBrand(isTerravik ? 'products/liquid-gold' : 'products/fom')}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-base"
              style={{
                background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent || colors.secondary}cc)`,
                boxShadow: `0 8px 32px ${colors.secondary}50`,
              }}
            >
              {isTerravik ? 'Explore Liquid Gold' : 'Explore FOM'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigateToBrand('about')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base text-white"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              <Play className="w-4 h-4 fill-current" />
              Our Story
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
            {['100% Organic', 'Lab Certified', 'Eco-Friendly', 'Farmer Trusted'].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: colors.secondary }} />
                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating stats card */}
        <motion.div
          className="absolute right-4 lg:right-8 bottom-16 hidden lg:block"
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="rounded-3xl p-6 shadow-2xl"
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.2)',
              minWidth: '220px',
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '10K+', l: 'Customers' },
                { n: '100%', l: 'Organic' },
                { n: '5+', l: 'Years' },
                { n: '2', l: 'Products' },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-2xl font-black text-white">{s.n}</p>
                  <p className="text-xs text-white/60 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
