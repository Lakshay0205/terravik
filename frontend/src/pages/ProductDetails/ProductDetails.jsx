import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBrandContext } from '../../context/BrandContext';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';
import { getProductsByBrand } from '../../data/products';
import { scrollToContactForm } from '../../utils/scrollUtils';
import { PaymentButton } from '../../components/PaymentButton';
import DosageCalculator from '../../components/DosageCalculator/DosageCalculator';
import { CheckCircle, Droplet, Package, AlertCircle, Sprout, Archive, Wheat, FlaskConical, Shovel, Layers, Waves, XCircle, Heart, Leaf, Shield, FileText, BookOpen, BadgeCheck, Download, Quote, ShoppingCart } from 'lucide-react';

// Import Hawai Agro application method images
import soilPrepImage from '../../assets/images/Hawai agro Soil Preparation.jpg';
import incorporationImage from '../../assets/images/Hawai agro Incorporation.jpg';
import moistureImage from '../../assets/images/Hawai agro Moisture.jpg';

export const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { navigateToBrand, getBrandRoute } = useBrandNavigation();
  const { brandId, colors, brand } = useBrandContext();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Get product from data — match by explicit slug field
  const allProducts = getProductsByBrand(brandId);
  const product = allProducts.find((p) => p.slug === productId) || allProducts[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full">
      {/* Product Details Section */}
      <motion.section
        className="section-padding bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <motion.div variants={itemVariants} className="relative">
              <div
                className="rounded-lg overflow-hidden shadow-xl h-96 md:h-[500px] flex items-center justify-center bg-white p-8"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Product Header */}
              <div>
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${colors.secondary}20`,
                    color: colors.secondary,
                  }}
                >
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 font-semibold mb-4">{product.type}</p>
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Price and Volume */}
              <div className="flex items-center gap-8 py-6 border-y border-gray-200">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Price</p>
                  <p className="text-3xl font-bold text-gray-900">₹{product.price}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Package className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Volume</p>
                    <p className="font-semibold text-gray-900">{product.volume}</p>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-4">
                {/* Buy Now Button - Navigate to Checkout */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(`${brand.routes.home}/checkout`, { state: { product } })}
                  className="w-full px-8 py-4 rounded-lg font-bold text-white text-lg transition-all shadow-lg flex items-center justify-center gap-3"
                  style={{ backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}
                >
                  <ShoppingCart size={24} />
                  Buy Now - ₹{product.price}
                </motion.button>

                {/* Other Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigateToBrand('contact')}
                    className="flex-1 px-8 py-3 rounded-lg font-semibold text-white transition-all border-2"
                    style={{ backgroundColor: colors.primary, borderColor: colors.primary }}
                  >
                    Inquire Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigateToBrand('contact')}
                    className="flex-1 px-8 py-3 rounded-lg font-semibold transition-all border-2"
                    style={{ borderColor: colors.primary, color: colors.primary }}
                  >
                    Contact Us
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Usage Instructions */}
      <motion.section
        className="section-padding bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
              Usage Instructions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Follow these guidelines for optimal results
            </p>
          </motion.div>

          {/* TerraVik — three detailed cards */}
          {product.usage.dilution ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Droplet,
                  label: 'Dilution',
                  value: product.usage.dilution,
                  accent: colors.secondary,
                  tip: 'Use clean water at room temperature',
                },
                {
                  icon: Sprout,
                  label: 'Application',
                  value: product.usage.application,
                  accent: colors.primary,
                  tip: 'Best applied in early morning or evening',
                },
                {
                  icon: Package,
                  label: 'Frequency',
                  value: product.usage.frequency,
                  accent: colors.secondary,
                  tip: 'Consistent application gives best results',
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                    className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-shadow"
                  >
                    {/* Card top accent bar */}
                    <div className="h-1.5 w-full" style={{ backgroundColor: card.accent }} />

                    <div className="p-7 flex flex-col flex-grow">
                      {/* Icon + label */}
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${card.accent}18` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: card.accent }} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{card.label}</h3>
                      </div>

                      {/* Main instruction */}
                      <p className="text-gray-700 text-base leading-relaxed font-medium flex-grow">
                        {card.value}
                      </p>

                      {/* Tip */}
                      <p
                        className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400 italic"
                      >
                        {card.tip}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* FOM — two generic cards */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div variants={itemVariants} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Droplet className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Dosage</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{product.usage.dosage}</p>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Frequency</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{product.usage.frequency}</p>
              </motion.div>
            </div>
          )}
        </div>
      </motion.section>

      {/* Dosage Calculator Section */}
      <motion.section
        className="section-padding bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <DosageCalculator productType={brandId === 'terravik' ? 'terravik' : 'hawai'} />
      </motion.section>

      {/* Product Specifications — conditional table for all products with specs */}
      {product.specs && (
        <motion.section
          className="section-padding bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="section-container">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
                Product Specifications
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Complete technical details for {product.fullName}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: colors.primary }}>
                        <th className="px-6 py-4 text-left text-white font-semibold uppercase tracking-wider w-1/3">
                          Specification
                        </th>
                        <th className="px-6 py-4 text-left text-white font-semibold uppercase tracking-wider">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">

                      {/* Product Name — plain string (TerraVik) or variants list (FOM) */}
                      <tr className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-semibold text-gray-900 align-top">
                          <div className="flex items-center gap-2">
                            <FlaskConical className="w-4 h-4 flex-shrink-0" style={{ color: colors.secondary }} />
                            Product Name
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          {product.specs.variants ? (
                            <div className="space-y-3">
                              {product.specs.variants.map((v, i) => (
                                <div key={i}>
                                  <p className="font-semibold text-gray-900">{v.name}</p>
                                  <p className="text-gray-500 text-xs mt-0.5">{v.description}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="font-semibold text-gray-900">{product.specs.productName}</p>
                          )}
                        </td>
                      </tr>

                      {/* Bottle Size — TerraVik only */}
                      {product.specs.bottleSize && (
                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                          <td className="px-6 py-5 font-semibold text-gray-900 align-top">
                            <div className="flex items-center gap-2">
                              <Droplet className="w-4 h-4 flex-shrink-0" style={{ color: colors.secondary }} />
                              Bottle Size
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white"
                              style={{ backgroundColor: colors.secondary }}
                            >
                              {product.specs.bottleSize}
                            </span>
                          </td>
                        </tr>
                      )}

                      {/* Packaging — FOM only */}
                      {product.specs.packaging && (
                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                          <td className="px-6 py-5 font-semibold text-gray-900 align-top">
                            <div className="flex items-center gap-2">
                              <Archive className="w-4 h-4 flex-shrink-0" style={{ color: colors.secondary }} />
                              Packaging Size
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex flex-wrap gap-2">
                              {product.specs.packaging.map((pkg, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white"
                                  style={{ backgroundColor: colors.secondary }}
                                >
                                  {pkg}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}

                      {/* Key Benefits */}
                      <tr className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-semibold text-gray-900 align-top">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: colors.secondary }} />
                            Key Benefits
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          <ul className="space-y-2">
                            {product.specs.keyBenefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span
                                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: colors.secondary }}
                                />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>

                      {/* Target Audience — TerraVik only */}
                      {product.specs.targetAudience && (
                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                          <td className="px-6 py-5 font-semibold text-gray-900 align-top">
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 flex-shrink-0" style={{ color: colors.secondary }} />
                              Target Audience
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex flex-wrap gap-2">
                              {product.specs.targetAudience.map((audience, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
                                  style={{ borderColor: colors.secondary, color: colors.primary }}
                                >
                                  {audience}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}

                      {/* Suitable Crops — FOM only */}
                      {product.specs.suitableCrops && (
                        <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                          <td className="px-6 py-5 font-semibold text-gray-900 align-top">
                            <div className="flex items-center gap-2">
                              <Wheat className="w-4 h-4 flex-shrink-0" style={{ color: colors.secondary }} />
                              Suitable Crops
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex flex-wrap gap-2">
                              {product.specs.suitableCrops.map((crop, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
                                  style={{ borderColor: colors.secondary, color: colors.primary }}
                                >
                                  {crop}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}

                      {/* Application */}
                      <tr className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-semibold text-gray-900 align-top">
                          <div className="flex items-center gap-2">
                            <Sprout className="w-4 h-4 flex-shrink-0" style={{ color: colors.secondary }} />
                            Application
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-700">
                          {product.specs.application}
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Application Method — only for products with applicationSteps */}
      {product.specs?.applicationSteps && (
        <motion.section
          className="section-padding bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="section-container">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
                Application Method for Farmers
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Follow these steps for best results with {product.fullName}
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {/* Application steps with images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {product.specs.applicationSteps.map((s, idx) => {
                  const images = [soilPrepImage, incorporationImage, moistureImage];
                  const icons = [Shovel, Layers, Waves];
                  const IconComponent = icons[idx];
                  const stepImage = images[idx];
                  
                  return (
                    <motion.div
                      key={s.step}
                      variants={itemVariants}
                      whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
                    >
                      {/* Image Section */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={stepImage}
                          alt={s.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay gradient */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                        />
                        {/* Step number badge */}
                        <div className="absolute top-4 right-4">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg"
                            style={{ backgroundColor: colors.primary }}
                          >
                            {s.step}
                          </div>
                        </div>
                        {/* Icon badge */}
                        <div className="absolute bottom-4 left-4">
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg"
                            style={{ backgroundColor: `${colors.secondary}95` }}
                          >
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <span
                          className="text-xs font-bold uppercase tracking-widest mb-2 block"
                          style={{ color: colors.secondary }}
                        >
                          Step {s.step}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{s.detail}</p>
                      </div>

                      {/* Bottom accent bar */}
                      <div className="h-1.5 w-full" style={{ backgroundColor: colors.secondary }} />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Soil Health Comparison — only for FOM */}
      {product.specs?.applicationSteps && (
        <motion.section
          className="section-padding bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="section-container">
            {/* Section header */}
            <motion.div variants={itemVariants} className="text-center mb-6">
              <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
                Soil Health, Crop Health, Human Health
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Excessive use of inorganic fertilizers compacts and acidifies soil over time, destroys
                beneficial microbial communities, and can leave chemical residues in crops that
                eventually reach your plate. Choosing organic alternatives like Hawai Agro FOM breaks
                this cycle — restoring the soil, protecting the crop, and safeguarding human health.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 max-w-4xl mx-auto mb-12">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">The Difference</span>
              <div className="flex-1 h-px bg-gray-200" />
            </motion.div>

            {/* Comparison grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

              {/* Chemical Fertilizers column */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl overflow-hidden border border-red-100 shadow-md"
              >
                <div className="bg-red-50 px-6 py-5 flex items-center gap-3 border-b border-red-100">
                  <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-red-700">Chemical Fertilizers</h3>
                </div>
                <ul className="divide-y divide-red-50">
                  {[
                    { icon: Layers,  text: 'Soil hardening over time' },
                    { icon: XCircle, text: 'Loss of beneficial microbes' },
                    { icon: Waves,   text: 'Fast nutrient leaching' },
                    { icon: AlertCircle, text: 'Chemical residues in crops' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-4 px-6 py-4 bg-white hover:bg-red-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-red-400" />
                        </div>
                        <span className="text-gray-700 text-sm">{item.text}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>

              {/* Hawai Agro FOM column */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl overflow-hidden border shadow-md"
                style={{ borderColor: `${colors.secondary}40` }}
              >
                <div
                  className="px-6 py-5 flex items-center gap-3 border-b"
                  style={{ backgroundColor: `${colors.secondary}12`, borderColor: `${colors.secondary}30` }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${colors.secondary}25` }}
                  >
                    <CheckCircle className="w-5 h-5" style={{ color: colors.secondary }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: colors.primary }}>Hawai Agro FOM</h3>
                </div>
                <ul className="divide-y" style={{ borderColor: `${colors.secondary}15` }}>
                  {[
                    { icon: Layers,       text: 'Improves soil structure' },
                    { icon: Sprout,       text: 'Restores microbial life' },
                    { icon: Leaf,         text: 'Slow-release nutrients' },
                    { icon: Shield,       text: 'Safer crop production' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-4 px-6 py-4 bg-white transition-colors hover:bg-opacity-50"
                        style={{ '--hover-bg': `${colors.secondary}08` }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = `${colors.secondary}08`}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${colors.secondary}20` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: colors.secondary }} />
                        </div>
                        <span className="text-gray-700 text-sm">{item.text}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Benefits Section */}
      <motion.section
        className="section-padding bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
              Why Choose This Product?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {product.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    ✓
                  </div>
                  <p className="text-gray-700 font-semibold">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      {product.testimonials?.length > 0 && (
        <motion.section
          className="section-padding bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="section-container">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
                What Gardeners Say
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                Real results from real people
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {product.testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                  className="relative bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col transition-shadow"
                >
                  {/* Large decorative quote mark */}
                  <Quote
                    className="absolute top-6 right-6 w-10 h-10 opacity-10"
                    style={{ color: colors.secondary }}
                  />

                  {/* Accent bar */}
                  <div
                    className="w-10 h-1 rounded-full mb-6"
                    style={{ backgroundColor: colors.accent }}
                  />

                  <p className="text-gray-700 text-lg leading-relaxed flex-grow italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: colors.secondary }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Downloads Section */}
      {product.downloads?.length > 0 && (
        <motion.section
          className="section-padding bg-gray-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="section-container">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-responsive-h2 mb-4" style={{ color: colors.primary }}>
                Downloads
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Everything you need to know about {product.fullName}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {product.downloads.map((doc, idx) => {
                const icons = [FileText, BookOpen, FlaskConical, BadgeCheck];
                const Icon = icons[idx] ?? FileText;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                    className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-shadow"
                  >
                    <div className="h-1.5 w-full" style={{ backgroundColor: colors.secondary }} />
                    <div className="p-6 flex flex-col flex-grow">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${colors.secondary}18` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: colors.secondary }} />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-1">{doc.label}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-grow">{doc.description}</p>
                      <a
                        href={doc.file}
                        download
                        className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: colors.primary }}
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section
        className="section-padding text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="section-container text-center">
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <h2 className="text-responsive-h2 mb-6 text-white">
              Ready to Order?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Have questions about {product.name}? Contact us today for more information.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`${brand.routes.home}/checkout`, { state: { product } })}
              className="px-8 py-3 rounded-lg font-semibold bg-white transition-all"
              style={{ color: colors.primary }}
            >
              Buy Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProductDetails;
