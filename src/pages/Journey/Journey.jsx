import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';
import { AnimatedBorderCard } from '../../components/AnimatedBorderCard';
import {
  Leaf, Factory, Droplets, Microscope, Sprout,
  ArrowRight, Recycle, FlaskConical, Heart,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: '01',
    title: 'Ethical Sourcing',
    description: 'Collection of organic biomass and agricultural waste from local farmers.',
    icon: Leaf,
    color: '#7cb342',
    bg: '#7cb34218',
  },
  {
    number: '02',
    title: 'Anaerobic Digestion',
    description: 'Organic material is processed in oxygen-free digesters at a compressed biogas plant.',
    icon: Factory,
    color: '#2d5016',
    bg: '#2d501618',
  },
  {
    number: '03',
    title: 'Extraction of Liquid Gold',
    description: 'The digestion process produces nutrient-rich Liquid Organic Fermented Manure (LOFM).',
    icon: Droplets,
    color: '#d4af37',
    bg: '#d4af3718',
  },
  {
    number: '04',
    title: 'Quality Testing',
    description: 'Each batch is tested in collaboration with Teerthanker Mahaveer University.',
    icon: Microscope,
    color: '#2d5016',
    bg: '#2d501618',
  },
  {
    number: '05',
    title: 'To Your Garden',
    description: 'The final concentrated liquid is bottled and delivered to customers.',
    icon: Sprout,
    color: '#7cb342',
    bg: '#7cb34218',
  },
];

const cycleNodes = [
  { label: 'Farm Waste', icon: Leaf, angle: 270 },
  { label: 'Biogas Plant', icon: Factory, angle: 342 },
  { label: 'Liquid Gold', icon: Droplets, angle: 54 },
  { label: 'Gardens', icon: Sprout, angle: 126 },
  { label: 'Soil Health', icon: Heart, angle: 198 },
];

const whyPoints = [
  { icon: Recycle, title: 'Zero Waste', body: 'Agricultural waste is fully converted — nothing is discarded.' },
  { icon: FlaskConical, title: 'Science-Backed', body: 'Every batch validated by Teerthanker Mahaveer University.' },
  { icon: Leaf, title: '100% Organic', body: 'No synthetic chemicals at any stage of production.' },
  { icon: Heart, title: 'Soil First', body: 'Restores microbial life and long-term soil fertility.' },
];

// ─── Timeline Step ────────────────────────────────────────────────────────────

const TimelineStep = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isLeft = index % 2 === 0;
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative flex items-center justify-center min-h-[120px]">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="absolute z-10 w-6 h-6 rounded-full border-4 border-white shadow-md left-1/2 -translate-x-1/2"
        style={{ backgroundColor: step.color }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.25 }}
        className="w-full pl-10 md:hidden"
      >
        <StepCard step={step} Icon={Icon} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.25 }}
        className={`hidden md:block w-5/12 ${isLeft ? 'mr-auto pr-10' : 'ml-auto pl-10'}`}
      >
        <StepCard step={step} Icon={Icon} isLeft={isLeft} />
      </motion.div>
    </div>
  );
};

const StepCard = ({ step, Icon, isLeft }) => (
  <motion.div
    whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-shadow"
    style={{
      borderLeft: isLeft !== false ? `4px solid ${step.color}` : undefined,
      borderRight: isLeft === false ? `4px solid ${step.color}` : undefined,
    }}
  >
    <div className="flex items-center gap-3 mb-3">
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.2 }}
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: step.bg }}
      >
        <Icon size={22} style={{ color: step.color }} />
      </motion.div>
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: step.color }}>
        Step {step.number}
      </span>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
  </motion.div>
);

// ─── Circular Sustainability Diagram ─────────────────────────────────────────

const RADIUS = 130;
const CENTER = 180;
const SVG_SIZE = 360;

const CycleNode = ({ node, index, isInView }) => {
  const rad = (node.angle * Math.PI) / 180;
  const x = CENTER + RADIUS * Math.cos(rad);
  const y = CENTER + RADIUS * Math.sin(rad);
  const Icon = node.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
      className="absolute flex flex-col items-center gap-1"
      style={{
        left: `${(x / SVG_SIZE) * 100}%`,
        top: `${(y / SVG_SIZE) * 100}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2"
        style={{ borderColor: '#7cb342' }}
      >
        <Icon size={20} style={{ color: '#2d5016' }} />
      </motion.div>
      <span className="text-xs font-bold text-gray-700 whitespace-nowrap">{node.label}</span>
    </motion.div>
  );
};

const CircleDiagram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative mx-auto" style={{ width: SVG_SIZE, height: SVG_SIZE, maxWidth: '100%' }}>
        <svg width={SVG_SIZE} height={SVG_SIZE} className="absolute inset-0" style={{ overflow: 'visible' }}>
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="#e0ebd0"
            strokeWidth="2"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="#7cb342"
            strokeWidth="1.5"
            strokeDasharray={`${2 * Math.PI * RADIUS * 0.15} ${2 * Math.PI * RADIUS * 0.85}`}
            strokeLinecap="round"
            initial={{ rotate: 0 }}
            animate={isInView ? { rotate: 360 } : {}}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
          />
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <div
            className="w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg"
            style={{ background: 'linear-gradient(135deg, #2d5016 0%, #7cb342 100%)' }}
          >
            <Recycle size={28} className="text-white" />
          </div>
          <p className="mt-2 text-xs font-bold text-gray-500 uppercase tracking-widest">Cycle</p>
        </motion.div>

        {cycleNodes.map((node, i) => (
          <CycleNode key={node.label} node={node} index={i} isInView={isInView} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex flex-wrap justify-center gap-3 mt-6 md:hidden"
      >
        {cycleNodes.map((n, i) => {
          const Icon = n.icon;
          return (
            <div key={n.label} className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
              <Icon size={14} style={{ color: '#7cb342' }} />
              {n.label}
              {i < cycleNodes.length - 1 && <ArrowRight size={10} className="text-gray-400" />}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

export const Journey = () => {
  const { navigateToBrand } = useBrandNavigation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <div className="w-full overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(160deg, #10b981 0%, #059669 50%, #047857 100%)' }}>
        {/* Background illustrations */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity: 0.06 }}>
          <motion.path
            d="M100,50 Q120,30 140,50 T180,50"
            fill="none"
            stroke="white"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <circle cx="80" cy="80" r="40" fill="white" opacity="0.3" />
          <circle cx="1300" cy="150" r="60" fill="white" opacity="0.2" />
          <path d="M1200,300 Q1220,280 1240,300 T1280,300" fill="none" stroke="white" strokeWidth="3" opacity="0.4" />
          <ellipse cx="200" cy="400" rx="50" ry="30" fill="white" opacity="0.25" />
          <ellipse cx="1100" cy="450" rx="70" ry="40" fill="white" opacity="0.2" />
        </svg>

        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 bg-white" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10 bg-white" />

        <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold tracking-widest uppercase mb-4"
            style={{ color: '#fde68a' }}
          >
            TerraVik — Sustainability Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-responsive-h1 text-white font-bold mb-6 leading-tight"
          >
            The Journey of{' '}
            <span style={{ color: '#fde68a' }}>Liquid Gold</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-white/85 text-lg leading-relaxed mb-8"
          >
            From organic biomass collected at local farms to the concentrated bottle
            in your hands — every drop of TerraVik Liquid Gold follows a rigorous,
            zero-waste, sustainable process.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Zero Waste', 'Science-Backed', '100% Organic'].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full text-sm font-semibold border border-white/30 text-white/90"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none" style={{ height: 48 }}>
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="relative section-padding" style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
        {/* Leaf pattern background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity: 0.03 }}>
          <defs>
            <pattern id="leafPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M50,100 Q70,80 90,100 T130,100" fill="none" stroke="#2d5016" strokeWidth="2" />
              <ellipse cx="70" cy="90" rx="15" ry="25" fill="#7cb342" opacity="0.5" />
              <ellipse cx="110" cy="90" rx="15" ry="25" fill="#2d5016" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leafPattern)" />
        </svg>

        <div className="section-container max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <h2 className="text-responsive-h2 text-gray-900 mb-3">
              The 5-Step Process
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A transparent look at how Liquid Gold is made
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 origin-top -translate-x-1/2"
              style={{ backgroundColor: '#e0ebd0' }}
            />

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 origin-top"
              style={{ backgroundColor: '#e0ebd0' }}
            />

            <div className="flex flex-col gap-10 md:gap-14">
              {steps.map((step, index) => (
                <TimelineStep key={step.number} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden leading-none" style={{ backgroundColor: 'white' }}>
        <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none" style={{ height: 48 }}>
          <path d="M0,0 C360,48 1080,48 1440,0 L1440,48 L0,48 Z" fill="#f1f5e8" />
        </svg>
      </div>

      {/* ── Circular Sustainability ── */}
      <section className="relative section-padding" style={{ background: 'linear-gradient(180deg, #fce4ec 0%, #f8bbd0 100%)' }}>
        {/* Organic soil texture */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity: 0.04 }}>
          <defs>
            <pattern id="soilTexture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="#2d5016" />
              <circle cx="60" cy="40" r="2" fill="#7cb342" />
              <circle cx="80" cy="70" r="2.5" fill="#2d5016" />
              <circle cx="30" cy="80" r="2" fill="#7cb342" />
              <path d="M10,50 Q30,45 50,50" stroke="#2d5016" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#soilTexture)" />
        </svg>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <h2 className="text-responsive-h2 mb-3" style={{ color: '#2d5016' }}>
              A Circular Sustainability Model
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nothing is wasted. Farm waste becomes the fuel that feeds your garden,
              which returns nutrients back to the soil.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <CircleDiagram />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-4"
            >
              {cycleNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div key={node.label} variants={itemVariants} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: '#2d501618', border: '2px solid #7cb342' }}
                    >
                      <Icon size={18} style={{ color: '#2d5016' }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-sm">{node.label}</p>
                    </div>
                    {i < cycleNodes.length - 1 && (
                      <ArrowRight size={16} className="text-gray-300 flex-shrink-0" />
                    )}
                  </motion.div>
                );
              })}
              <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: '#d4af3718', border: '2px solid #d4af37' }}
                >
                  <Recycle size={18} style={{ color: '#d4af37' }} />
                </div>
                <p className="font-bold text-sm" style={{ color: '#d4af37' }}>Back to Soil — Cycle Repeats</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden leading-none" style={{ backgroundColor: '#f1f5e8' }}>
        <svg viewBox="0 0 1440 48" className="w-full" preserveAspectRatio="none" style={{ height: 48 }}>
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="white" />
        </svg>
      </div>

      {/* ── Why This Matters ── */}
      <section className="relative section-padding" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)' }}>
        {/* Organic wave pattern */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity: 0.025 }}>
          <defs>
            <pattern id="wavePattern" x="0" y="0" width="300" height="150" patternUnits="userSpaceOnUse">
              <path d="M0,75 Q75,50 150,75 T300,75" stroke="#7cb342" strokeWidth="2" fill="none" />
              <path d="M0,100 Q75,75 150,100 T300,100" stroke="#2d5016" strokeWidth="1.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wavePattern)" />
        </svg>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <h2 className="text-responsive-h2 mb-3" style={{ color: '#2d5016' }}>
              Why This Matters
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Every bottle of Liquid Gold is a step toward a healthier planet
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {whyPoints.map((pt, idx) => {
              const Icon = pt.icon;
              const images = [
                'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80',
                'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
                'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80',
                'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
              ];
              return (
                <AnimatedBorderCard
                  key={idx}
                  className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl card-3d"
                  enable3D={true}
                  hoverScale={1.03}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={images[idx]}
                      alt={pt.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 opacity-60 group-hover:opacity-50 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(135deg, #10b981dd 0%, #059669aa 100%)' }}
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
                        <Icon size={28} style={{ color: '#047857' }} />
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-6 bg-white text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pt.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{pt.body}</p>
                  </div>
                </AnimatedBorderCard>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative section-padding text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2d5016 0%, #4a7c2f 50%, #7cb342 100%)' }}
      >
        {/* Subtle droplet pattern */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity: 0.05 }}>
          <circle cx="100" cy="100" r="20" fill="white" />
          <circle cx="300" cy="200" r="15" fill="white" />
          <circle cx="1200" cy="150" r="25" fill="white" />
          <circle cx="1000" cy="300" r="18" fill="white" />
          <ellipse cx="600" cy="250" rx="30" ry="20" fill="white" />
        </svg>

        <div className="section-container text-center max-w-2xl mx-auto relative z-10">
          <h2 className="text-responsive-h2 text-white mb-4">
            Experience Liquid Gold
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Bring the power of this sustainable process to your home garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateToBrand('products/liquid-gold')}
              className="px-8 py-3 rounded-lg font-semibold bg-white transition-all"
              style={{ color: '#4a7c2f' }}
            >
              View Product
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
        </div>
      </motion.section>

    </div>
  );
};

export default Journey;
