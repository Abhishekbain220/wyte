import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Meta from '../utils/Meta';

const exhibitionPhotoCategories = [
  {
    category: "Awards and Recognitions",
    photos: [
      { url: "/images/pic1_1.webp" },
      { url: "/images/pic1_2.webp" },
      { url: "/images/pic1_3.webp" },
      { url: "/images/pic1_4.webp" },
      { url: "/images/pic1_5.webp" },
      { url: "/images/pic1_6.webp" },
    ],
  },
  {
    category: "Exhibitions",
    photos: [
      { url: "/images/pic2_1.webp" },
      { url: "/images/pic2_2.webp" },
      { url: "/images/pic5_2.webp" },
      { url: "/images/pic5_6.webp" },
      { url: "/images/pic5_14.webp" },
      { url: "/images/pic5_12.webp" },
      { url: "/images/pic5_19.webp" },
      { url: "/images/pic9_4.webp" },
      { url: "/images/pic9_5.webp" },
      { url: "/images/pic9_6.webp" },







    ],
  },
  {
    category: "Product Applications",
    photos: [
      { url: "/images/pic3_1.webp" },
      { url: "/images/pic3_2.webp" },
      { url: "/images/pic3_3.webp" },
      { url: "/images/pic3_4.webp" },
      { url: "/images/pic4_1.webp" },
      { url: "/images/pic4_2.webp" },
      { url: "/images/pic4_3.webp" },
      { url: "/images/pic4_4.webp" },
      { url: "/images/pic4_5.webp" },
      { url: "/images/pic9_2.webp" },
      { url: "/images/pic9_3.webp" },


    ],
  },
  {
    category: "Participations",
    photos: [
      { url: "/images/pic6_2.webp" },
      { url: "/images/pic6_3.webp" },
      { url: "/images/pic6_4.webp" },
      { url: "/images/pic7_1.webp" },
      { url: "/images/pic7_2.webp" },
      { url: "/images/pic7_3.webp" },
      { url: "/images/pic7_4.webp" },
      { url: "/images/pic8_1.webp" },
      { url: "/images/pic8_3.webp" },
      { url: "/images/pic8_4.webp" },
      { url: "/images/pic8_5.webp" },
      { url: "/images/pic8_6.webp" },

    ],
  },
  {
    category: "Happy Feelings",
    photos: [

      { url: "/images/pic2_3.webp" },
      { url: "/images/pic2_4.webp" },
      { url: "/images/pic9_1.webp" },
      { url: "/images/pic9_9.webp" },



    ],
  },
  

];

const allPhotos = exhibitionPhotoCategories.flatMap((cat) => cat.photos);

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1, zIndex: 1 },
  exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
};

const ExhibitionPhotos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % allPhotos.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    const handlePopState = () => setIsOpen(false);

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('popstate', handlePopState);
      window.history.pushState({ fullscreen: true }, '', window.location.href);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen, currentIndex]);

  useEffect(() => {
    if (zoom === 1) {
      setOffset({ x: 0, y: 0 });
    }
  }, [zoom]);

  const openFullscreen = (index) => {
    setCurrentIndex([index, 0]);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setIsOpen(true);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % allPhotos.length;
    setCurrentIndex([newIndex, 1]);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    setCurrentIndex([newIndex, -1]);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.002;
    setZoom((prevZoom) => Math.min(3, Math.max(1, prevZoom + delta)));
  };

  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const delta = touchStart.current - touchEnd.current;
    if (delta > 50) nextImage();
    else if (delta < -50) prevImage();
    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <section className="bg-[#EDF5FA] md:mt-24 min-h-screen">
      <Meta title="Gallery Page" description="This is a Gallery page" />

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={bannerIndex}
            src={allPhotos[bannerIndex].url}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={() => setBannerIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white bg-black/50 hover:bg-black/70 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={() => setBannerIndex((prev) => (prev + 1) % allPhotos.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white bg-black/50 hover:bg-black/70 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <motion.div
            className="backdrop-blur-sm bg-black/40 rounded-lg px-6 py-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
              Discover Our <span className="text-[#76bc21]">Exhibitions</span>
            </motion.h1>
            <p className="mt-3 text-base sm:text-xl text-gray-100 tracking-wide">
              A visual journey through iconic moments, captivating artistry, and timeless gallery experiences.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categorized Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {exhibitionPhotoCategories.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 tracking-wide relative z-10"
            >
              {section.category}
              <span className="block h-1 w-16 bg-gradient-to-r from-[#76bc21] to-[#a4e455] mt-2 rounded-full"></span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {section.photos.map((photo, idx) => {
                const globalIndex = exhibitionPhotoCategories
                  .slice(0, sectionIdx)
                  .reduce((acc, cat) => acc + cat.photos.length, 0) + idx;

                return (
                  <motion.div
                    key={globalIndex}
                    className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer bg-white/20 backdrop-blur-lg"
                    onClick={() => openFullscreen(globalIndex)}
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={photo.url}
                      alt="Exhibition"
                      className="w-full h-[60vh] object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <div className="text-white text-lg font-semibold bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
                        View Photo
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4 overflow-hidden"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <button className="absolute top-6 right-6 text-white z-50" onClick={() => setIsOpen(false)}>
            <X size={36} />
          </button>
          <button className="absolute left-4 sm:left-10 text-white z-50" onClick={prevImage}>
            <ChevronLeft size={48} />
          </button>
          <button className="absolute right-4 sm:right-10 text-white z-50" onClick={nextImage}>
            <ChevronRight size={48} />
          </button>

          <motion.div
            style={{
              transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out',
              cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
            }}
            className="absolute"
          >
            <motion.img
              key={currentIndex}
              src={allPhotos[currentIndex].url}
              alt="Fullscreen"
              className="select-none max-h-[90vh] max-w-full shadow-2xl object-contain"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              draggable={false}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ExhibitionPhotos;
