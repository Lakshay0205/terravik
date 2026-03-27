import { motion } from 'framer-motion';
import { useBrandNavigation } from '../../hooks/useBrandNavigation';
import { Package, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { scrollToContactForm } from '../../utils/scrollUtils';

export const ProductCard = ({ product, brandColor, onInquiry }) => {
  const { navigateToBrand } = useBrandNavigation();
  const [isHovered, setIsHovered] = useState(false);

  const handleInquireClick = () => {
    if (onInquiry) onInquiry(product);
    scrollToContactForm();
  };

  const handleLearnMore = () => {
    navigateToBrand(`products/${product.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <div
        className="h-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 flex flex-col bg-white border border-gray-100"
        style={{ transition: 'box-shadow 0.3s ease, transform 0.3s ease' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div
          className="relative h-56 flex items-center justify-center overflow-hidden"
          style={{ background: `linear-gradient(145deg, ${brandColor}15, ${brandColor}30)` }}
        >
          {/* Category badge */}
          <span
            className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10"
            style={{ backgroundColor: brandColor, color: 'white' }}
          >
            {product.category}
          </span>

          <motion.div
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex items-center justify-center"
          >
            {typeof product.image === 'string' && !product.image.includes('/') ? (
              <span className="text-6xl">{product.image}</span>
            ) : (
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            )}
          </motion.div>

          {/* Shine overlay on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)' }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-black text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm font-medium mb-3" style={{ color: brandColor }}>{product.type}</p>

          <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-grow">{product.description}</p>

          {/* Volume */}
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
            <Package className="w-4 h-4" style={{ color: brandColor }} />
            <span>{product.volume}</span>
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Key Features</h4>
            <ul className="space-y-1.5">
              {product.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: brandColor }} />
                  <span>{feature}</span>
                </li>
              ))}
              {product.features.length > 3 && (
                <li className="text-xs italic" style={{ color: brandColor }}>+{product.features.length - 3} more features</li>
              )}
            </ul>
          </div>

          {/* Usage */}
          <div
            className="mb-4 p-3 rounded-xl text-xs"
            style={{ backgroundColor: `${brandColor}08`, border: `1px solid ${brandColor}20` }}
          >
            <p className="text-gray-700 mb-1"><span className="font-bold">Dosage:</span> {product.usage.dosage}</p>
            <p className="text-gray-700"><span className="font-bold">Frequency:</span> {product.usage.frequency}</p>
          </div>

          {/* Benefits tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {product.benefits.map((benefit, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ backgroundColor: `${brandColor}15`, color: brandColor }}
              >
                {benefit}
              </span>
            ))}
          </div>

          {/* Price & Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
            <div>
              <span className="text-2xl font-black" style={{ color: brandColor }}>₹{product.price}</span>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleLearnMore}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-sm font-bold transition-all"
                style={{ background: `linear-gradient(135deg, ${brandColor}, ${brandColor}cc)`, boxShadow: `0 4px 14px ${brandColor}40` }}
              >
                Details <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleInquireClick}
                className="px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all"
                style={{ borderColor: brandColor, color: brandColor }}
              >
                Inquire
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
