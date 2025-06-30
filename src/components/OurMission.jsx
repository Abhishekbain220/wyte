import React from 'react';
import { motion } from 'framer-motion';

const OurMission = () => {
  return (
    <div className="bg-[#fefefe] text-[#1b1e36] px-4 sm:px-6 lg:px-[11vw] py-20 flex flex-col md:flex-row items-center gap-12">
      {/* Text Section */}
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Our <span className="text-[#76BC21] relative">
            Mission
            
          </span>
        </h2>
        <p className="text-lg leading-relaxed text-justify mb-4">
          At <span className="font-semibold text-[#76bc21]">DigiTech</span>, our mission is to revolutionize the world of printable substrates by combining <strong>eco-conscious innovation</strong> with <strong>unmatched quality</strong>. We’re driven by the need to provide <span className="">sustainable</span> and <span className="">aesthetic</span> solutions for brands, artists, and advertisers who value impact and integrity.
        </p>
        <p className="text-lg leading-relaxed text-justify">
          Our mission is to be the creative force behind bold visuals—offering reliable, sustainable, and high-performance printable materials for every printing need, from signage to fine art.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.img
        src="/images/ARTISTIC CANVAS GLOSS.webp"
        alt="Our Mission"
        className="w-full max-w-md rounded-xl shadow-md"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      />
    </div>
  );
};

export default OurMission;
