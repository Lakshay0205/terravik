import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrandContext } from '../../context/BrandContext';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';

/**
 * Enhanced Responsive Navbar with:
 * - Logo on left, menu items on right
 * - Smooth scroll animations
 * - Brand-specific designs:
 *   - TerraVik: Premium and minimal
 *   - Hawai Agro: Bold agriculture style
 */
export const Navbar = () => {
  const { brand, colors, brandId } = useBrandContext();
  const { getBrandRoute } = useBrandNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Brand-specific menu items
  const menuItems = brandId === 'terravik'
    ? [
        { label: 'Home', href: getBrandRoute('') },
        { label: 'About', href: getBrandRoute('about') },
        { label: 'Products', href: getBrandRoute('products') },
        { label: 'Our Journey', href: getBrandRoute('journey') },
        { label: 'Research', href: getBrandRoute('research') },
        { label: 'Contact', href: getBrandRoute('contact') },
      ]
    : [
        { label: 'Home', href: getBrandRoute('') },
        { label: 'About', href: getBrandRoute('about') },
        { label: 'Products', href: getBrandRoute('products') },
        { label: 'Research', href: getBrandRoute('research') },
        { label: 'Contact', href: getBrandRoute('contact') },
      ];

  // Detect scroll for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [getBrandRoute]);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 640) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Animation variants for smooth scroll
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.08,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Brand-specific styling
  const isPremium = brandId === 'terravik';
  const isBold = brandId === 'hawaiAgro';

  // Premium minimal design for TerraVik
  const premiumNavbarClass = isPremium
    ? 'shadow-sm hover:shadow-md'
    : '';

  // Bold agriculture style for Hawai Agro
  const boldNavbarClass = isBold
    ? 'shadow-lg border-b-4'
    : '';

  const boldBorderColor = isBold ? colors.secondary : 'transparent';

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${premiumNavbarClass} ${boldNavbarClass}`}
        style={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0.90)',
          backdropFilter: 'blur(20px) saturate(180%)',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: scrolled ? `${colors.primary}30` : `${colors.secondary}20`,
          boxShadow: scrolled 
            ? `0 4px 30px rgba(0,0,0,0.1), 0 0 0 1px ${colors.primary}15` 
            : `0 2px 20px rgba(0,0,0,0.08), 0 0 0 1px ${colors.secondary}10`,
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-3 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary} 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10 max-sm:px-4">
          <div className="flex justify-between items-center h-16 sm:h-28">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex-shrink-0"
            >
              <Link
                to={getBrandRoute('')}
                className="flex items-center gap-2 sm:gap-5 group relative"
                onClick={closeMenu}
              >
                {/* Logo */}
                <motion.div
                  variants={logoVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="relative">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="w-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-2xl h-10 sm:h-24"
                      style={{ 
                        maxWidth: '240px',
                        filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3)) brightness(1.1)',
                      }}
                    />
                  </div>
                </motion.div>

                {/* Brand Info */}
                <motion.div
                  className="hidden sm:block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.h1
                    className={`leading-tight transition-all duration-300 ${
                      isPremium
                        ? 'font-bold text-4xl tracking-wide'
                        : 'font-black text-4xl tracking-tight'
                    }`}
                    style={{
                      color: colors.primary,
                      textShadow: `0 2px 20px ${colors.primary}30, 0 2px 8px ${colors.secondary}20`,
                    }}
                  >
                    {brand.name}
                  </motion.h1>
                  <motion.p
                    className={`transition-all duration-300 mt-1 ${
                      isPremium
                        ? 'text-lg italic font-semibold'
                        : 'text-lg font-bold uppercase tracking-widest'
                    }`}
                    style={{
                      color: colors.secondary,
                      textShadow: `0 1px 8px ${colors.secondary}30`,
                    }}
                  >
                    {brand.tagline}
                  </motion.p>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              className="hidden sm:flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-4 lg:px-5 py-2.5 font-semibold transition-all duration-300 rounded-xl group overflow-hidden ${
                      isPremium
                        ? 'text-sm lg:text-base'
                        : 'text-sm lg:text-base'
                    }`}
                    style={{ color: colors.dark }}
                  >
                    {/* Hover Background Effect */}
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                      style={{ backgroundColor: `${colors.primary}15` }}
                    />
                    
                    {/* Text */}
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Bottom Border */}
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300 rounded-full"
                      style={{ backgroundColor: colors.primary }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Hamburger Button — mobile only */}
            <motion.button
              onClick={toggleMenu}
              className="flex sm:hidden p-3 rounded-xl transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor: isOpen ? `${colors.primary}20` : 'transparent',
                color: colors.primary,
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.svg
                    key="close"
                    className="w-7 h-7 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    className="w-7 h-7 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — only renders when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 right-0 z-40 shadow-2xl sm:hidden"
            style={{ 
              top: '64px',
              backgroundColor: colors.primary,
              borderBottom: `3px solid ${colors.secondary}`,
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="max-w-7xl mx-auto px-4 py-8 space-y-3">
              {menuItems.map((item, index) => (
                <motion.div key={index} variants={menuItemVariants}>
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className={`block px-5 py-4 text-white font-semibold rounded-xl transition-all duration-300 relative overflow-hidden group ${
                      isPremium
                        ? 'text-base hover:bg-white/10 active:bg-white/15'
                        : 'text-base hover:bg-white/20 active:bg-white/30'
                    }`}
                    style={{
                      borderLeft: `4px solid ${colors.secondary}`,
                    }}
                  >
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: `${colors.secondary}15` }}
                    />
                    <span className="relative z-10 flex items-center justify-between">
                      <span>{item.label}</span>
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm sm:hidden"
            style={{ top: '64px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
