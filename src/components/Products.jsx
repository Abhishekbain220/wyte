import React, { useContext, useEffect, useState } from 'react';
import ProductCom from './ProductCom';
import { ProductContext } from '../utils/ProductContext';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const { products,ProductCategory } = useContext(ProductContext);
  const [isMobile, setIsMobile] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen w-full pt-32 sm:pt-36 bg-gradient-to-br from-[#f1fcfc] via-[#eef7ff] to-[#eafff0]">
      {/* Page Heading Banner */}
      <motion.div
        className="w-full bg-gradient-to-r from-[#76bc21]/10 via-white to-[#1d1b41]/10 py-10 sm:py-14 shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-2xl sm:max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1b41] tracking-tight leading-snug">
            Explore Our <span className="text-[#76bc21]">Products</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Premium substrates tailored for digital printing excellence.
          </p>
        </div>
      </motion.div>

      {/* Product List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {ProductCategory.map((p, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate="show"
              variants={itemVariants}
              className="w-full sm:w-auto"
            >
              <ProductCom id={p.id} name={p.name} image={p.image} navigation={`/Category/${p.name}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
