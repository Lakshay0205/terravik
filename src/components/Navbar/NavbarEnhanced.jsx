import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrandContext } from '../../context/BrandContext';

/**
 * Enhanced Navbar Component with Search and CTA
 * Features:
 * - Sticky positioning
 * - Mobile hamburger menu
 * - Smooth animations
 * - Dynamic brand logo
 * - Search functionality
 * - Call-to-action button
 * - Responsive design
 */
export const NavbarEnhanced = () => {
  const { brand, routes, colors } = useBrandContext();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Menu items configuration
  const menuItems = [
    { label: 'Home', href: routes.home },
    { label: 'About Us', href: routes.about },
    { label: 'Products', href: routes.products },
    { label: 'Research & Innovation', href: routes.research },
    { label: 'Contact Us', href: routes.contact },
  ];

  // Animation variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: 'auto', opacity: 1 },
    exit: { width: 0, opacity: 0 },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 shadow-lg transition-shadow duration-300 backdrop-blur-sm bg-opacity-95"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <Link
              to={routes.home}
              className="flex items-center gap-3 group flex-shrink-0"
              onClick={closeMenu}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:brightness-110"
                />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-lg md:text-xl leading-tight">
                  {brand.name}
                </h1>
                <p className="text-white/80 text-xs md:text-sm italic">
                  {brand.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-white font-medium text-sm rounded-lg transition-all duration-200 hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Section - Search and CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Search Bar */}
              <motion.form
                onSubmit={handleSearch}
                className="relative"
                initial={false}
              >
                <AnimatePresence mode="wait">
                  {searchOpen ? (
                    <motion.div
                      key="search-input"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 'auto', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200"
                      />
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <motion.button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </motion.button>
              </motion.form>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-lg font-semibold text-white transition-all duration-200"
                style={{ backgroundColor: colors.secondary }}
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.svg
                    key="close"
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-16 left-0 right-0 z-40 shadow-lg"
            style={{ backgroundColor: colors.primary }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div key={index} variants={menuItemVariants}>
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/10 active:bg-white/20"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.button
                variants={menuItemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-3 rounded-lg font-semibold text-white transition-all duration-200 mt-4"
                style={{ backgroundColor: colors.secondary }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-30 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarEnhanced;
