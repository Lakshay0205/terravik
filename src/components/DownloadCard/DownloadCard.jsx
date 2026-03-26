import { motion } from 'framer-motion';

export const DownloadCard = ({ title, description, fileType, brandColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card text-center p-6 hover:shadow-xl transition-shadow"
    >
      <motion.div 
        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-sm"
        style={{ backgroundColor: brandColor }}
        whileHover={{ scale: 1.1 }}
      >
        {fileType}
      </motion.div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-gray-600 mb-6 line-clamp-3">
        {description}
      </p>
      
      <motion.button 
        className="px-6 py-2 border-2 rounded-lg font-semibold transition-all"
        style={{ borderColor: brandColor, color: brandColor }}
        whileHover={{ backgroundColor: brandColor, color: 'white' }}
      >
        Download
      </motion.button>
    </motion.div>
  );
};
