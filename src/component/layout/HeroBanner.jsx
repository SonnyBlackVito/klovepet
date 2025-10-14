// src/components/layout/HeroBanner.jsx
// Version với scroll lock - Video phải xem xong mới scroll được
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  const [showImage, setShowImage] = useState(false);

  // Lock scroll when video is playing
  useEffect(() => {
    if (!showImage) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      // Enable scroll
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    };
  }, [showImage]);

  // Handle video end
  const handleVideoEnd = () => {
    console.log('Video ended, showing image');
    setShowImage(true);
    // Dispatch custom event to show header
    window.dispatchEvent(new Event('videoComplete'));
  };

  // Handle video error
  const handleVideoError = (e) => {
    console.warn('Video error:', e);
    setShowImage(true);
    window.dispatchEvent(new Event('videoComplete'));
  };

  // Handle skip video
  const handleSkip = () => {
    console.log('Video skipped');
    setShowImage(true);
    window.dispatchEvent(new Event('videoComplete'));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {!showImage ? (
          // Video Layer
          <motion.div
            key="video"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              src="/videos/banner_pet.mp4"
              poster="/images/banner_kpoppet.png"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              onError={handleVideoError}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          // Image Layer
          <motion.div
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/banner_kpoppet.png"
              alt="K-LovePet Banner"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional: Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-black/20 pointer-events-none"
      />

      {/* Skip Video Button */}
      {!showImage && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 2 }}
          onClick={handleSkip}
          className="absolute bottom-20 right-8 px-6 py-3 bg-black/70 backdrop-blur-md text-white rounded-full font-semibold hover:bg-black/90 transition-all z-10 shadow-2xl border border-white/20"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
        >
          Skip Video →
        </motion.button>
      )}

      {/* Scroll Indicator - Only show after video ends */}
      {showImage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 bg-black/60 p-3 rounded-full backdrop-blur-sm"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))' }}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      )}

    </section>
  );
}