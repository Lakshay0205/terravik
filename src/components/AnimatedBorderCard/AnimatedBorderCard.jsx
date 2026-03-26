import { motion } from 'framer-motion';
import { useState } from 'react';
import { useBrandContext } from '../../context/BrandContext';

export const AnimatedBorderCard = ({ children, className = '', hoverScale = 1.02, enable3D = true, ...props }) => {
  const { colors } = useBrandContext();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!enable3D) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`relative group perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Rotating gradient border */}
      <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-[-2px] animate-spin-slow"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${colors.secondary} 25%, ${colors.accent || colors.secondary} 50%, ${colors.secondary} 75%, transparent 100%)`,
            animation: 'spin 3s linear infinite',
          }}
        />
        {/* Inner mask to create border effect */}
        <div className="absolute inset-[2px] bg-white rounded-[inherit]" />
      </div>

      {/* 3D Content */}
      <motion.div
        className="relative z-10 transform-3d"
        animate={enable3D ? {
          rotateX,
          rotateY,
        } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.div>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.secondary}30, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};

export default AnimatedBorderCard;
