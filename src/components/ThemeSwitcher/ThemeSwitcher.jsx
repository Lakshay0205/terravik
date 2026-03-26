import { useNavigate } from 'react-router-dom';
import { useBrandContext } from '../../context/BrandContext';
import { getAllBrands } from '../../config/brandConfig';
import { motion } from 'framer-motion';

/**
 * Theme Switcher Component
 * Allows users to switch between brands
 */
export const ThemeSwitcher = () => {
  const navigate = useNavigate();
  const { brandId } = useBrandContext();
  const allBrands = getAllBrands();

  const handleBrandSwitch = (newBrandId) => {
    const brand = allBrands[newBrandId];
    if (brand) {
      navigate(brand.routes.home);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      {Object.entries(allBrands).map(([key, brand]) => (
        <motion.button
          key={key}
          onClick={() => handleBrandSwitch(key)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            brandId === key
              ? 'text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          style={
            brandId === key
              ? { backgroundColor: brand.colors.primary }
              : {}
          }
        >
          {brand.name}
        </motion.button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
