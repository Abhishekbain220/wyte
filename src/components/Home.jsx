import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AboutUsCom from './AboutUsCom';
import ProductCom from './ProductCom';
import { ProductContext } from '../utils/ProductContext';
import Meta from '../utils/Meta';

const Home = () => {
  const { banners, products, product, setProduct, ProductCategory } = useContext(ProductContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const banner = banners[currentIndex] || {}; // ✅ safely derive banner

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % banners.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const handlePrevBanner = () => {
    setCurrentIndex(prev => (prev - 1 + banners.length) % banners.length);
  };

  const handleNextBanner = () => {
    setCurrentIndex(prev => (prev + 1) % banners.length);
  };

  return (
    <div className="min-h-screen overflow-hidden w-full">
      <Meta title="Home Page" description="this is a home page"/>
      {/* Page 1 - Banner Section */}
      <div
        style={{ background: banner.gradient }}
        className="relative pb-10 pt-16 px-6 md:mt-24 md:px-16 lg:px-24 h-[115vmax] md:h-[87vh] w-full"
      >
        {/* Overlay */}
        <div className="bg-black opacity-50 md:h-[73vh] md:w-[90vw] md:left-24 md:mt-0 mt-[4vh] md:top-16 absolute inset-0 z-10"></div>

        {/* Prev/Next Buttons */}
<button
  onClick={handlePrevBanner}
  className="absolute z-30 top-90 md:top-1/2 -left-3 md:left-12 -translate-y-1/2 px-5 py-4 hover:scale-125 transition-transform duration-300"
  aria-label="Previous Slide"
>
  <span className="text-7xl text-white md:text-[#2B2046] font-light">‹</span>
</button>




        <button
  onClick={handleNextBanner}
  className="absolute z-30 top-90 md:top-1/2 -right-4  md:-right-1 -translate-y-1/2 px-5 py-4 hover:scale-125 transition-transform duration-300"
  aria-label="Next Slide"
>
  <span className="text-7xl text-white md:text-black font-light">›</span>
</button>






        {/* Animated Banner Content */}
        <motion.div
          key={banner.image}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex md:mt-0 mt-[9vh] flex-col md:flex-row items-center gap-8 h-full md:w-[89vw]"
        >
          <motion.img
            key={banner.image + "_img"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="h-52 sm:h-60 md:h-[48vh] w-[90vw] md:w-[60vw] object-cover rounded-lg md:ml-6 mb-6 md:mb-[8vh]"
            src={`/images/${banner.image}`}
            alt="Banner"
          />

          <motion.div
            key={banner.title + "_text"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:pt-[6vh]"
          >
            <h1
              style={{ color: banner.textColor }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold ml-0 md:ml-[4vh]"
            >
              {banner.title}
            </h1>

            <p className="mt-6 md:mt-[6vh] text-white text-base sm:text-lg md:text-xl leading-relaxed md:leading-10 ml-0 md:ml-[2vh] max-w-3xl">
              {banner.para}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between font-semibold text-base sm:text-lg md:text-xl mt-8 md:mt-[10vh] px-0 md:px-[6vh] text-white gap-4 sm:gap-0">
              <img className="h-16 bg-white sm:h-20 rounded-full p-2" src="/images/logo.webp" alt="Logo" />
              <h2 className="text-center sm:text-right sm:mr-[4vh] sm:w-auto">{banner.name}</h2>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Page 2 - About Us */}
      <AboutUsCom />

      

      {/* Page 3 - Categories */}
      <div className="px-4 sm:px-8 md:px-[8vw] lg:pl-[11vw] flex flex-wrap gap-4 sm:gap-6 mt-[6vh] sm:mt-[10vh] lg:mt-[12vh] pt-[6vh] sm:pt-[8vh]">
        <motion.div
          className="w-full bg-gradient-to-r from-[#76bc21]/10 via-white to-[#1d1b41]/10 py-10 sm:py-14 shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-2xl sm:max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1b41] tracking-tight leading-snug">
              Our <span className="text-[#76bc21]">Categories</span>
            </h1>
          </div>
        </motion.div>
        {ProductCategory.map((p, i) => (
          <ProductCom key={i} id={p.id} name={p.name} image={p.image} navigation={`/Category/${p.name}`} />
        ))}
      </div>

      {/* Page 4 - Quote Section */}
      <div
        style={{ backgroundImage: `url("/THICKER REVERSE TRANSLITE.webp")` }}
        className="relative z-0 w-full h-[40vh] bg-cover bg-center bg-no-repeat
         after:content-[''] after:absolute after:inset-0 after:bg-black/50 after:z-10
         flex justify-center items-center px-4 sm:px-8 md:px-12"
      >
        <h1
          className="relative z-20 text-center text-white text-base sm:text-lg md:text-2xl 
         font-semibold max-w-[90vw] sm:max-w-[80vw] animate-fade-in"
        >
          "At DigiTech, we merge technology and artistry—delivering a vast spectrum of print-ready materials that elevate design, communication, and brand presence across industries."
        </h1>
      </div>
    </div>
  );
};

export default Home;
