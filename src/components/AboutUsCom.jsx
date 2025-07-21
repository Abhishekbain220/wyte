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
          src="/images/POLYESTER CANVAS - 280 (Matte).webp"
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
            DigiTech – Delivering Digital Perfection, Always.
          </motion.h2>

          <motion.p
            className="text-base text-[#1d1b41] text-justify leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            animate={isMobile ? 'show' : undefined}
            whileInView={!isMobile ? 'show' : undefined}
            viewport={!isMobile ? { once: true, amount: 0.3 } : undefined}
          >
            <strong className="text-[#76bc21] uppercase">DigiTech DIGITAL TECHNOLOGY
AND SOLUTIONS</strong> delivers premium digital printable substrates for creative professionals, brands, and event specialists. Our portfolio spans over <strong>200 high-quality media options</strong> such as Vinyls, Wallpapers, Artistic Canvases, Fabrics, Photo Papers, Translites, Leatherettes, Glass Films, and Lamination Films.
            <br /><br />
            Designed for seamless use with <strong>Eco-Solvent, Inkjet, Digital, Latex, and UV</strong> technologies, our products serve a wide array of industries—from <strong>signage, photography, fine art, and packaging</strong> to <strong>architectural graphics, décor, vehicle wraps, and installations</strong>.
            <br /><br />
            Backed by a strong national network, <strong>DigiTech</strong> is valued for its <em>consistent product performance, efficient supply chain, competitive pricing</em>, and a commitment to customer satisfaction. Our in-house R&D ensures that we stay at the forefront of innovation.
            <br /><br />
            We’re proud to have a <strong>strategic media partnership with Wyte Print</strong>, a trusted leader in the printable substrates domain—enhancing our reach and capabilities.
            <br /><br />
            Trusted by industry leaders like <span className="font-medium text-[#76bc21]">Reliance, Samsung, HUL, Bata, Blackberry, Pepsi, TimesOOH, and Fybros</span>, DigiTech continues to deliver impactful solutions to the <strong>corporate, retail, and event</strong> sectors.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsCom;
