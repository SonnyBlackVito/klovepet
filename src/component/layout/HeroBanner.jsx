'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  const [showImage, setShowImage] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef(null);
  const hasCompletedRef = useRef(false);

  // Check if first visit
  useEffect(() => {
    const checkFirstVisit = () => {
      try {
        const visited = sessionStorage.getItem('hasSeenVideo');
        const isFirst = !visited || visited !== 'true';
        setIsFirstVisit(isFirst);
        
        // If not first visit, show image immediately
        if (!isFirst) {
          setShowImage(true);
          completeVideoSequence();
        }
      } catch (error) {
        console.warn('SessionStorage not available:', error);
        setIsFirstVisit(false);
        setShowImage(true);
        completeVideoSequence();
      }
    };

    checkFirstVisit();
  }, []);

  // Lock scroll during first visit video
  useEffect(() => {
    if (isFirstVisit && !showImage) {
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Lock scroll
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      
      // Also lock html element
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Unlock scroll
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    };
  }, [isFirstVisit, showImage]);

  // Complete video sequence function
  const completeVideoSequence = () => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;

    try {
      sessionStorage.setItem('hasSeenVideo', 'true');
    } catch (error) {
      console.warn('Cannot save to sessionStorage:', error);
    }

    // Dispatch event to show header
    window.dispatchEvent(new Event('videoComplete'));
  };

  // Handle video loaded
  const handleVideoLoaded = () => {
    setIsVideoReady(true);
  };

  // Handle video end
  const handleVideoEnd = () => {
    console.log('Video ended, showing image');
    setShowImage(true);
    completeVideoSequence();
  };

  // Handle video error
  const handleVideoError = (e) => {
    console.warn('Video error:', e);
    setShowImage(true);
    completeVideoSequence();
  };

  // Handle skip video
  const handleSkip = () => {
    console.log('Video skipped');
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowImage(true);
    completeVideoSequence();
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {isFirstVisit && !showImage ? (
          // Video Layer - Full Screen
          <motion.div
            key="video"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: isVideoReady ? 1 : 0 
            }}
            exit={{ 
              opacity: 0,
              scale: 1.05,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full z-10"
          >
            {/* Video Container - Full Screen */}
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                src="/videos/banner_pet.mp4"
                poster="/images/banner_kpoppet.png"
                autoPlay
                muted
                playsInline
                preload="auto"
                onLoadedData={handleVideoLoaded}
                onEnded={handleVideoEnd}
                onError={handleVideoError}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />

              {/* Video Overlay - Subtle vignette effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"
              />
            </div>

            {/* Skip Video Button - Enhanced design */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 2, duration: 0.4 }}
              onClick={handleSkip}
              className="absolute bottom-12 right-8 md:bottom-16 md:right-12 
                px-6 py-3 md:px-8 md:py-4 
                bg-black/80 backdrop-blur-xl 
                text-white text-sm md:text-base font-bold tracking-wider
                rounded-full 
                hover:bg-black/95 
                transition-all duration-300 
                z-20 
                shadow-[0_8px_32px_rgba(0,0,0,0.6)] 
                border border-white/20
                hover:border-amber-500/50
                hover:shadow-[0_8px_32px_rgba(217,119,6,0.3)]
                group"
              style={{ 
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                fontFamily: "'Luckiest Guy', cursive"
              }}
            >
              <span className="flex items-center gap-2">
                SKIP VIDEO
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="text-amber-500 group-hover:text-amber-400"
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            {/* Loading indicator while video is loading */}
            {!isVideoReady && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black z-30"
              >
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full"
                  />
                  <p className="text-white/80 text-sm font-semibold tracking-wider">
                    Loading...
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          // Image Layer - Shown after video or on repeat visits
          <motion.div
            key="image"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/banner_kpoppet.png"
              alt="K-LovePet Banner"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />

            {/* Image Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator - Only show after video ends or on repeat visits */}
      <AnimatePresence>
        {showImage && (
          <motion.div
            key="scroll-indicator"
            initial={{ opacity: 0, y: -30 }}
            animate={{ 
              opacity: [0.6, 1, 0.6], 
              y: [0, 10, 0] 
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="bg-black/70 backdrop-blur-md p-3 md:p-4 rounded-full border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.3))' }}
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>

            {/* Scroll text hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-white/80 text-xs md:text-sm font-semibold tracking-wider"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
            >
              Scroll to explore
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative corner elements - only visible with image */}
      {showImage && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-500 to-transparent blur-3xl pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-500 to-transparent blur-3xl pointer-events-none"
          />
        </>
      )}
    </section>
  );
}