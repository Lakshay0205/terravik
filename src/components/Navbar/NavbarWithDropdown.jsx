import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useBrandContext } from '../../context/BrandContext';

/**
 * Navbar with Dropdown Menus
 * Features:
 * - Dropdown menus for categories
 * - Sticky positioning
 * - Mobile hamburger menu
 * - Smooth animations
 * - Dynamic brand logo
 * - Responsive design
 */
export const NavbarWithDropdown = () => {
  const { brand, routes, colors } = useBrandContext();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Menu items with dropdowns
  const menuItems = [
    { label: 'Home', href: routes.home },
    {
      label: 'Products',
      href: routes.products,
      submenu: [
        { label: 'All Products', href: routes.products },
        { label: 'Featured', href: `${routes.products}?filter=featured` },
        { label: 'New Arrivals', href: `${routes.products}?filter=new` },
        { label: 'Best Sellers', href: `${routes.products}?filter=bestsellers` },
      ],
    },
    {
      label: 'Resources',
      href: routes.research,
      submenu: [
        { label: 'Research & Innovation', href: routes.research },
        { label: 'Growing Guides', href: `${routes.research}?type=guides` },
        { label: 'Blog', href: `${routes.research}?type=blog` },
        { label: 'FAQs', href: `${routes.research}?type=faqs` },
      ],
    },
    { label: 'About Us', href: routes.about },
    { label: 'Contact Us', href: routes.contact },
  ];

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 shadow-lg transition-shadow duration-300"
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
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-white font-medium text-sm rounded-lg transition-all duration-200 hover:bg-white/10 cursor-pointer flex items-center gap-1"
                  >
                    <Link to={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    )}
                  </motion.div>

                  {/* Desktop Dropdown */}
                  {item.submenu && (
                    <AnimatePresence>
                      <motion.div
                        className="absolute left-0 mt-0 w-48 rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                        style={{ backgroundColor: colors.primary }}
                        initial="hidden"
                        whileHover="visible"
                        variants={dropdownVariants}
                      >
                        {item.submenu.map((subitem, subindex) => (
                          <motion.div
                            key={subindex}
                            variants={dropdownItemVariants}
                          >
                            <Link
                              to={subitem.href}
                              onClick={closeMenu}
                              className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm"
                            >
                              {subitem.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
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
            className="md:hidden fixed top-16 left-0 right-0 z-40 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
            style={{ backgroundColor: colors.primary }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.submenu ? (
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full text-left px-4 py-3 text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/10 active:bg-white/20 flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{
                            rotate: activeDropdown === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </motion.svg>
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-white font-medium rounded-lg transition-all duration-200 hover:bg-white/10 active:bg-white/20"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>

                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {item.submenu && activeDropdown === index && (
                      <motion.div
                        className="pl-4 space-y-1 mt-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.submenu.map((subitem, subindex) => (
                          <motion.div
                            key={subindex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subindex * 0.05 }}
                          >
                            <Link
                              to={subitem.href}
                              onClick={closeMenu}
                              className="block px-4 py-2 text-white/80 rounded-lg transition-all duration-200 hover:bg-white/10 text-sm"
                            >
                              {subitem.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
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

export default NavbarWithDropdown;
