import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../utils/ProductContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const singleProduct = products.find((p) => String(p.id) === id);
    setProductDetails(singleProduct);
  }, [id, products]);

  if (!productDetails) return null;

  return (
    <motion.div
      className="min-h-screen bg-white px-4 sm:px-8 pt-28 pb-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="max-w-7xl mx-auto bg-[#1B1F3B] rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-12"
        variants={item}
      >
        {/* Image Section */}
        <motion.div className="flex justify-center items-center" variants={item}>
          <img
            src={`/${productDetails.image}`}
            alt={productDetails.name}
            className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition duration-500 ease-in-out"
          />
        </motion.div>

        {/* Details Section */}
        <motion.div className="space-y-8 text-white" variants={item}>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
              {productDetails.name}
            </h1>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
            {productDetails.Sizes && (
              <div>
                <span className="font-semibold text-[#7AC943]">Size:</span> {productDetails.Sizes}
              </div>
            )}
            {productDetails.Surface && (
              <div>
                <span className="font-semibold text-[#7AC943]">Surface:</span> {productDetails.Surface}
              </div>
            )}
            {productDetails.Thickness && (
              <div>
                <span className="font-semibold text-[#7AC943]">Thickness:</span> {productDetails.Thickness}
              </div>
            )}
            {productDetails.Length && (
              <div>
                <span className="font-semibold text-[#7AC943]">Length:</span> {productDetails.Length}
              </div>
            )}
            {productDetails.Glue && (
              <div>
                <span className="font-semibold text-[#7AC943]">Glue:</span> {productDetails.Glue}
              </div>
            )}
            {productDetails.Application && (
              <div>
                <span className="font-semibold text-[#7AC943]">Application:</span> {productDetails.Application}
              </div>
            )}
          </div>

          {/* Description */}
          {productDetails.Description && (
            <motion.div variants={item}>
              <h2 className="text-xl font-semibold text-white mb-2">Product Description</h2>
              <p className="text-gray-300 leading-relaxed text-justify">{productDetails.Description}</p>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div variants={item}>
            <button className="flex items-center gap-2 mt-6 px-6 py-3 bg-[#7AC943] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-[#85D44A] transition duration-300">
              Contact for Details <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SingleProduct;
