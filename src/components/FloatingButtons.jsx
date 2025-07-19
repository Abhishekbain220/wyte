// src/components/FloatingButtons.jsx

import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center space-y-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918823881287" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+918823881287" // Replace with your phone number
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Call us"
      >
        <FaPhone size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
