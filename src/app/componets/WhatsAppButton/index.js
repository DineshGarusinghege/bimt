import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      window.open("https://wa.me/94771777730", "_blank");
      setShowPopup(false); // Close popup after opening WhatsApp
    }, 1000); // Delay to show the popup effect
  };

  return (
    <div>
      {/* WhatsApp Button */}
      <motion.button
        onClick={handleButtonClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 md:p-5"
      >
        <FaWhatsapp size={30} className="md:size-25" />
      </motion.button>

      {/* Popup Message */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-20 right-5 bg-white text-black p-4 rounded-lg shadow-lg"
          >
            <p className="text-sm font-medium">Opening BIMT Campus WhatsApp Chat...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;
