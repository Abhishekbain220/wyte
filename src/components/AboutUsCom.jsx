import React from 'react';
import { motion } from 'framer-motion';

const AboutUsCom = () => {
  return (
    <div className='w-full pt-8 pl-4 pr-4 lg:pl-[11vw] h-auto lg:h-screen flex flex-col lg:flex-row'>

      {/* Image Section with scroll-triggered animation */}
      <motion.img
        src="aboutImg.jpg"
        alt="About Us"
        className='h-auto lg:h-[87vh] object-cover'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      />

      {/* Text Content with scroll-triggered animation */}
      <motion.div
        className='w-full h-auto lg:h-full flex flex-col gap-4 pt-4 lg:pt-5 pl-2 lg:pl-7'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          className='text-3xl lg:text-5xl font-bold'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>

        <motion.h2
          className='text-base lg:text-[3vh] font-semibold italic'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          WYTE for you, Elysium always.
        </motion.h2>

        <motion.p
          className='w-full lg:w-[38vw] text-sm lg:text-base text-justify leading-relaxed'
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
          elite Brands such as Reliance, Samsung, HUL, Bata, Blackberry, Varun Beverages(Pepsi), TimesOOH, Fybros, Pathkind
          labs,
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutUsCom;
