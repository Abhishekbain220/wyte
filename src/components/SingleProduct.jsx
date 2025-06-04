import React, { useContext, useEffect, useState, useRef } from 'react';
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

  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const magnifierSize = 160;
  const zoomLevel = 2.5;

  useEffect(() => {
    const singleProduct = products.find((p) => String(p.id) === id);
    setProductDetails(singleProduct);
  }, [id, products]);

  if (!productDetails) return null;

  const handleMouseMove = (e) => {
    const { top, left, width, height } = imgRef.current.getBoundingClientRect();

    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;

    const posX = Math.max(0, Math.min(x, width));
    const posY = Math.max(0, Math.min(y, height));

    setMagnifierPosition({ x: posX, y: posY });
  };

  return (
    <motion.div
      className="min-h-screen flex items-center bg-white px-4 sm:px-8 md:pt-37 pt-28 pb-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="max-w-7xl mx-auto bg-[#1B1F3B] rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-12"
        variants={item}
      >
        {/* Image Section */}
        <motion.div className="flex justify-center items-center relative" variants={item}>
          <div
            className="overflow-hidden rounded-2xl shadow-lg relative cursor-default"
            onMouseEnter={() => setShowMagnifier(true)}
            onMouseLeave={() => setShowMagnifier(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              ref={imgRef}
              src={`/${productDetails.image}`}
              alt={productDetails.name}
              className="w-full max-w-md transform transition-transform duration-500 ease-in-out hover:scale-110"
              style={{ display: 'block' }}
            />

            {/* Alternative Magnifier Lens */}
            {showMagnifier && (
              <div
                style={{
                  position: 'absolute',
                  pointerEvents: 'none',
                  top: magnifierPosition.y - magnifierSize / 2 - 30, // offset lens slightly up
                  left: magnifierPosition.x - magnifierSize / 2 + 30, // offset lens slightly right
                  width: magnifierSize,
                  height: magnifierSize,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                  animation: 'pulse 2s infinite',
                  backgroundColor: 'rgba(0,0,0,0.15)',

                  // background zoom effect
                  backgroundImage: `url(/${productDetails.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: `${imgRef.current.width * zoomLevel}px ${imgRef.current.height * zoomLevel}px`,
                  backgroundPositionX: `-${magnifierPosition.x * zoomLevel - magnifierSize / 2}px`,
                  backgroundPositionY: `-${magnifierPosition.y * zoomLevel - magnifierSize / 2}px`,
                  filter: 'brightness(1.1)',
                  border: 'none',
                }}
              />
            )}
          </div>
        </motion.div>

        {/* Details Section */}
        <motion.div className="space-y-8 text-white" variants={item}>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{productDetails.name}</h1>
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

        {/* CSS for pulse animation */}
        <style>{`
          @keyframes pulse {
            0% { box-shadow: 0 0 10px rgba(0,0,0,0.3); }
            50% { box-shadow: 0 0 20px rgba(0,0,0,0.5); }
            100% { box-shadow: 0 0 10px rgba(0,0,0,0.3); }
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
};

export default SingleProduct;
