import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../utils/ProductContext';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

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
  const { id, productName } = useParams();
  const { products } = useContext(ProductContext);
  const [productDetails, setProductDetails] = useState(null);

  const imgRef = useRef(null);
  const [transformOrigin, setTransformOrigin] = useState('center center');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const product = products.find((p) => String(p.array) === productName);
    const productItem = product?.items?.find((i) => String(i.id) === id);
    setProductDetails(productItem);
  }, [id, products, productName]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleMouseMove = (e) => {
    const bounds = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  const handleWheelZoom = (e) => {
    e.preventDefault();
    const newScale = Math.min(3, Math.max(1, zoomScale + e.deltaY * -0.002));
    setZoomScale(newScale);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMoveModal = (e) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  if (!productDetails) return null;

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
            className="overflow-hidden rounded-2xl shadow-lg relative group cursor-zoom-in"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
            onClick={() => {
              setZoomScale(1);
              setPan({ x: 0, y: 0 });
              setIsModalOpen(true);
            }}
          >
            <img
              ref={imgRef}
              src={`/${productDetails.image}`}
              alt={productDetails.name}
              className={`w-full max-w-xl transition-transform duration-300 ease-out ${
                isZoomed ? 'scale-[2.5]' : 'scale-100'
              }`}
              style={{
                transformOrigin: transformOrigin,
                maxHeight: '550px',
              }}
            />
          </div>
        </motion.div>

        {/* Details Section */}
        <motion.div className="space-y-8 text-white" variants={item}>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
              {productDetails.Heading}
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
            {productDetails.Sizes && (
              <div>
                <span className="font-semibold text-[#7AC943]">Size (in Inches):</span> {productDetails.Sizes}
              </div>
            )}
            {productDetails["Base Substrate"] && (
              <div>
                <span className="font-semibold text-[#7AC943]">Base Substrate:</span> {productDetails["Base Substrate"]}
              </div>
            )}
            {productDetails.Thickness && (
              <div>
                <span className="font-semibold text-[#7AC943]">Thickness:</span> {productDetails.Thickness}
              </div>
            )}
            {productDetails.Application && (
              <div>
                <span className="font-semibold text-[#7AC943]">Application:</span> {productDetails.Application}
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
            {productDetails["Compatible with"] && (
              <div>
                <span className="font-semibold text-[#7AC943]">Compatible with:</span> {productDetails["Compatible with"]}
              </div>
            )}
            {productDetails["Product Code"] && (
              <div>
                <span className="font-semibold text-[#7AC943]">Product Code:</span> {productDetails["Product Code"]}
              </div>
            )}
            {productDetails.Category && (
              <div>
                <span className="font-semibold text-[#7AC943]">Category:</span> {productDetails.Category}
              </div>
            )}
          </div>

          {productDetails.Description && (
            <motion.div variants={item}>
              <h2 className="text-xl font-semibold text-white mb-2">Product Description</h2>
              <p className="text-gray-300 leading-relaxed text-justify">{productDetails.Description}</p>
            </motion.div>
          )}

          <motion.div variants={item}>
            <a href="tel:+918823881287">
              <button  className="flex items-center gap-2 mt-6 px-6 py-3 bg-[#7AC943] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-[#85D44A] transition duration-300">
              Contact for Details <ArrowRight className="w-4 h-4" />
            </button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMoveModal}
          onMouseUp={handleMouseUp}
          onWheel={handleWheelZoom}
        >
          <img
            src={`/${productDetails.image}`}
            alt={productDetails.name}
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomScale})`,
              transition: isDragging ? 'none' : 'transform 0.2s ease',
              maxWidth: '90%',
              maxHeight: '90%',
            }}
            className="select-none"
            draggable={false}
          />
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default SingleProduct;
