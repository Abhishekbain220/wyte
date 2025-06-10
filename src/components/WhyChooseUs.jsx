import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  'Cutting-edge Eco-Solvent & UV Compatibility',
  'Nationwide Distribution with 24/7 Support',
  'Strategic Alliance with Wyte',
  'Custom R&D and Prototyping Capabilities',
  'Trusted by Fortune 500 Clients',
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-r from-[#e9f6f4] via-white to-[#e2eafc] py-20 px-4 sm:px-6 lg:px-[11vw] text-[#1d1b41] text-center">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Why <span className="text-[#76bc21] relative">
          Choose Us
          <span className="absolute w-full h-2 bg-[#76bc21]/30 bottom-0 left-0 -z-10" />
        </span>
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-lg text-[#1d1b41]/80 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        Our commitment goes beyond product delivery — we create reliable experiences, foster creativity, and build sustainability into every roll.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="text-[#76bc21] w-6 h-6 mt-1 shrink-0" />
            <p className="text-left">{reason}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
