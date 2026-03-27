import { motion } from 'framer-motion';
import homeFooterImg from '../../assets/images/home footer.jpg';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail } from 'lucide-react';
import { useBrandContext } from '../../context/BrandContext';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';

export const Footer = () => {
  const { navigateToBrand, getBrandRoute } = useBrandNavigation();
  const { brand, colors, brandId } = useBrandContext();
  const currentYear = new Date().getFullYear();

  const companyDetails = {
    name: 'Jaivik Vikalp Urja LLP',
    description:
      brandId === 'terravik'
        ? 'Premium home gardening solutions for sustainable growth. We provide organic, eco-friendly products to help you create beautiful, thriving gardens.'
        : 'Sustainable farming solutions for modern agriculture. We empower farmers with organic products that increase yield while protecting the environment.',
    phone: '9008383900',
    email: brandId === 'terravik' ? 'info@terravik.com' : 'info@hawaiagro.com',
  };

  const quickLinks = [
    { label: 'Home',     href: getBrandRoute('') },
    { label: 'Products', href: getBrandRoute('products') },
    { label: 'Research', href: getBrandRoute('research') },
    { label: 'Contact',  href: getBrandRoute('contact') },
    { label: 'About',    href: getBrandRoute('about') },
  ];

  const socialLinks =
    brandId === 'terravik'
      ? [
          { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/terra.vik/' },
          { icon: Facebook,  label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61580561327179' },
          { icon: Youtube,   label: 'YouTube',   href: 'https://www.youtube.com/@TheTerravik' },
        ]
      : [
          { icon: Facebook,  label: 'Facebook',  href: '#' },
          { icon: Instagram, label: 'Instagram', href: '#' },
          { icon: Twitter,   label: 'Twitter',   href: '#' },
        ];

  const resourceLinks = [
    { label: 'Blog',    href: getBrandRoute('blog') },
    { label: 'FAQ',     href: getBrandRoute('faqs') },
    { label: 'Guides',  href: getBrandRoute('guides') },
    { label: 'Support', href: getBrandRoute('support') },
  ];

  const legalLinks = [
    { label: 'Privacy Policy',   href: getBrandRoute('privacy-policy') },
    { label: 'Terms of Service', href: getBrandRoute('terms-of-service') },
    { label: 'Cookie Policy',    href: getBrandRoute('cookie-policy') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer
      className="mt-auto"
      style={{
        backgroundImage: `linear-gradient(160deg, ${colors.dark}ee 0%, ${colors.primary}cc 60%, ${colors.secondary}99 100%), url(${homeFooterImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Top accent line */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${colors.secondary}, ${colors.accent || colors.secondary}, ${colors.secondary})`,
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 lg:px-8 py-16 max-sm:py-10"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={containerVariants}
      >
        {/*
          Desktop: 4-col grid (default)
          Mobile: 2-col grid
        */}
        <div className="grid grid-cols-4 gap-8 mb-12 max-sm:grid-cols-2 max-sm:gap-6 max-sm:mb-8">

          {/* Company Info — spans 1 col on desktop, 2 cols on mobile */}
          <motion.div variants={itemVariants} className="text-white max-sm:col-span-2">
            <h3 className="text-lg font-black mb-2">{brand.name}</h3>
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: colors.accent || colors.secondary }}
            >
              {brand.tagline}
            </p>
            <p className="text-white/70 text-sm mb-6 leading-relaxed max-sm:mb-4">
              {companyDetails.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    title={social.label}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-white">
            <h4
              className="text-xs font-black uppercase tracking-widest mb-4"
              style={{ color: colors.secondary }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="text-white">
            <h4
              className="text-xs font-black uppercase tracking-widest mb-4"
              style={{ color: colors.secondary }}
            >
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigateToBrand(link.href.replace(/^\/[^/]+/, ''))}
                    className="text-white/70 hover:text-white text-sm text-left transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="text-white">
            <h4
              className="text-xs font-black uppercase tracking-widest mb-4"
              style={{ color: colors.secondary }}
            >
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.secondary }} />
                <a href={`tel:${companyDetails.phone}`} className="text-white/80 hover:text-white">
                  {companyDetails.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: colors.secondary }} />
                <a href={`mailto:${companyDetails.email}`} className="text-white/80 hover:text-white break-all">
                  {companyDetails.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8 max-sm:mb-5" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/*
          Bottom bar
          Desktop: flex-row, space-between (default)
          Mobile: flex-col, centered
        */}
        <motion.div
          variants={itemVariants}
          className="flex flex-row items-center justify-between gap-4 text-sm max-sm:flex-col max-sm:text-center"
        >
          <p className="text-white/60">
            &copy; {currentYear}{' '}
            <span className="font-semibold text-white/80">{companyDetails.name}</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => navigateToBrand(link.href.replace(/^\/[^/]+/, ''))}
                className="text-white/50 hover:text-white/90 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
