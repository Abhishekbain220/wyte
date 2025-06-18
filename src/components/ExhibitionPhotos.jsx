import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const exhibitionPhotos = [
  { url: 'https://bykerwin.com/wp-content/uploads/2024/10/IMG_9839-Large-crypt-main-wall-landscape-wordpress.jpeg' },
  { url: 'https://www.discoverhongkong.com/content/dam/dhk/intl/explore/arts-entertainment/artsinhk/2025/gallery_art-basel.jpg' },
  { url: 'https://media.assettype.com/freepressjournal/2025-06-15/vsb62k54/4pic15-swaraj-bavan.JPG' },
  { url: 'https://d1nn9x4fgzyvn4.cloudfront.net/2025-04/SC495880_16x9.jpg' },
  { url: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&auto=format&fit=crop&q=60' },
  { url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&auto=format&fit=crop&q=60' },
  { url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&auto=format&fit=crop&q=60' },
  { url: 'https://images.unsplash.com/photo-1676563110936-9d902b6eb937?w=600&auto=format&fit=crop&q=60' },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
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
      setBannerIndex((prev) => (prev + 1) % exhibitionPhotos.length);
    }, 4000);
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
    const newIndex = (currentIndex + 1) % exhibitionPhotos.length;
    setCurrentIndex([newIndex, 1]);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + exhibitionPhotos.length) % exhibitionPhotos.length;
    setCurrentIndex([newIndex, -1]);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY * -0.002;
    setZoom((prevZoom) => {
      const newZoom = Math.min(3, Math.max(1, prevZoom + delta));
      return newZoom;
    });
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
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={bannerIndex}
            src={exhibitionPhotos[bannerIndex].url}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] to-[#00000066] z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Discover Our <span className="text-[#76bc21]">Exhibitions</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A visual journey through iconic moments, captivating artistry, and timeless gallery experiences.
          </motion.p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {exhibitionPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group bg-white"
              onClick={() => openFullscreen(idx)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={photo.url}
                alt="Exhibition"
                className="w-full h-[60vh] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
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
          <button className="absolute left-4 sm:left-10 text-white z-50 hidden sm:block" onClick={prevImage}>
            <ChevronLeft size={48} />
          </button>
          <button className="absolute right-4 sm:right-10 text-white z-50 hidden sm:block" onClick={nextImage}>
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
              src={exhibitionPhotos[currentIndex].url}
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
