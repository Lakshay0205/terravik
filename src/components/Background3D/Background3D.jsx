import { motion } from 'framer-motion';
import { useBrandContext } from '../../context/BrandContext';

export const Background3D = ({ variant = 'mesh' }) => {
  const { colors } = useBrandContext();

  if (variant === 'mesh') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-mesh animate-gradient opacity-60" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: colors.secondary, top: '10%', left: '10%' }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: colors.accent || colors.secondary, top: '60%', right: '15%' }}
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: colors.primary, bottom: '10%', left: '50%' }}
          animate={{
            y: [0, 30, 0],
            x: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(${colors.secondary}40 1px, transparent 1px), linear-gradient(90deg, ${colors.secondary}40 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Noise texture */}
        <div className="absolute inset-0 noise-texture" />
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: colors.secondary,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default Background3D;
