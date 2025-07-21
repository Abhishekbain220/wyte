// src/components/FloatingButtons.jsx

import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  const floatScaleGlow = (color) => ({
    initial: { y: 0, scale: 1, boxShadow: `0 0 10px rgba(0,0,0,0.2)` },
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      boxShadow: [
        `0 0 10px rgba(0,0,0,0.3)`,
        `0 0 25px ${color}`,
        `0 0 10px rgba(0,0,0,0.3)`,
      ],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
    whileHover: { scale: 1.2 },
  });

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center space-y-3 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918823881287"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full"
        {...floatScaleGlow('rgba(0,255,0,0.6)')}
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+918823881287"
        aria-label="Call us"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full"
        {...floatScaleGlow('rgba(0,123,255,0.6)')}
      >
        <FaPhone size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
