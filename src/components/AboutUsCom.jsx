import React from 'react';
import { motion } from 'framer-motion';

const AboutUsCom = () => {
  return (
    <div className="w-full px-4 pt-8 pb-8 lg:pt-16 lg:pl-[11vw] flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">

      {/* Image Section */}
      <motion.img
        src="aboutImg.jpg"
        alt="About Us"
        className="w-full max-w-[600px] h-auto lg:h-[87vh] object-cover rounded-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* Text Section */}
      <motion.div
        className="w-full max-w-3xl flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>

        <motion.h2
          className="text-base md:text-lg lg:text-[3vh] font-semibold italic text-gray-700"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          WYTE for you, Elysium always.
        </motion.h2>

        <motion.p
          className="text-sm md:text-base text-justify text-gray-800 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          WYTE offers high-quality digital printable substrates for brands, events, and creative professionals,
          ensuring quality, sustainability, and excellence. We offer a wide range of products for digital printing,
          including Vinyls, Wall Papers, Artistic Canvas, Fabrics, Photo Papers, Translites, Leatherette, Glass films,
          Lamination films & 200 more such products for digital printing are being offered.
          <br /><br />
          WYTE product’ basket assimilates conventional and specialty printable medias designed for different printing
          technologies (Eco-solvent, Inkjet, Laser, Latex & UV) and for versatile applications encapsulating Signage,
          Graphic design, Photography, Fine art, Reprographics, Architecture graphics, Labels, Decor, Interiors, Artistic
          painting, Display visuals, Vehicle wraps, Outdoors, Street decor, Infra beautification, Banners, Tracing,
          Packaging and much more.
          <br /><br />
          WYTE now firmly stand as a favorable and reliable media (printable substrate) supplier across Pan-India in terms
          of consistent quality at affordable price, fair dealing, ultra efficient supply demand chain, continuous R & D
          programs to develop new products and customer’ delight driven approach.
          <br /><br />
          WYTE is spreading wings by introducing value addition products to Corporates, brands and event companies. So far
          elite Brands such as Reliance, Samsung, HUL, Bata, Blackberry, Varun Beverages(Pepsi), TimesOOH, Fybros, Pathkind labs,
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutUsCom;
