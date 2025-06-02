import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AboutUsCom = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const textWrapperVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const headingVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { delay: 0.1 } },
  };

  const subheadingVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { delay: 0.3 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };

  return (
    <div className="w-full bg-gradient-to-br from-white via-[#f2f8ff] to-[#eafaf1] py-16 px-4 sm:px-6 lg:px-[11vw] overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Image Section */}
        <motion.img
          src="aboutImg.jpg"
          alt="About Us"
          className="w-full max-w-[600px] h-auto lg:h-[85vh] object-cover rounded-xl shadow-md"
          variants={imageVariants}
          initial="hidden"
          animate={isMobile ? 'show' : undefined}
          whileInView={!isMobile ? 'show' : undefined}
          viewport={!isMobile ? { once: true, amount: 0.5 } : undefined}
        />

        {/* Text Section */}
        <motion.div
          className="w-full max-w-3xl flex flex-col gap-6"
          variants={textWrapperVariants}
          initial="hidden"
          animate={isMobile ? 'show' : undefined}
          whileInView={!isMobile ? 'show' : undefined}
          viewport={!isMobile ? { once: true, amount: 0.4 } : undefined}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-[#1d1b41]"
            variants={headingVariants}
            initial="hidden"
            animate={isMobile ? 'show' : undefined}
            whileInView={!isMobile ? 'show' : undefined}
            viewport={!isMobile ? { once: true } : undefined}
          >
            About <span className="text-[#76bc21]">Us</span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl italic font-medium text-[#1d1b41]/70"
            variants={subheadingVariants}
            initial="hidden"
            animate={isMobile ? 'show' : undefined}
            whileInView={!isMobile ? 'show' : undefined}
            viewport={!isMobile ? { once: true } : undefined}
          >
            WYTE for you, Elysium always.
          </motion.h2>

          <motion.p
            className="text-base text-[#1d1b41] text-justify leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            animate={isMobile ? 'show' : undefined}
            whileInView={!isMobile ? 'show' : undefined}
            viewport={!isMobile ? { once: true, amount: 0.3 } : undefined}
          >
            <strong className="text-[#76bc21]">WYTE</strong> offers high-quality digital printable substrates for brands, events, and creative professionals, ensuring quality, sustainability, and excellence. We offer a wide range of products for digital printing, including Vinyls, Wall Papers, Artistic Canvas, Fabrics, Photo Papers, Translites, Leatherette, Glass films, Lamination films & over 200 more digital printing products.
            <br /><br />
            Our product range is compatible with Eco-solvent, Inkjet, Laser, Latex & UV technologies. Applications include Signage, Graphic design, Photography, Fine art, Architecture graphics, Labels, Décor, Vehicle wraps, Outdoor & Indoor installations, Packaging, and much more.
            <br /><br />
            With a strong presence Pan-India, <span className="font-semibold">WYTE</span> is known for consistent quality, competitive pricing, efficient supply chain, R&D innovation, and customer-centric values.
            <br /><br />
            Trusted by brands like <span className="font-medium text-[#76bc21]">Reliance, Samsung, HUL, Bata, Blackberry, Pepsi, TimesOOH, Fybros</span>, and many more, <span className="font-semibold">WYTE</span> continues to expand into value-added products for corporates, retail, and event industries.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsCom;
