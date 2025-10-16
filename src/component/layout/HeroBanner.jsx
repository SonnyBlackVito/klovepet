'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';

// Custom hook for scroll lock
const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (!isLocked) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalHeight = document.body.style.height;
    const originalPadding = document.body.style.paddingRight;
    
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.height = originalHeight;
      document.body.style.paddingRight = originalPadding;
    };
  }, [isLocked]);
};

// Custom hook for first visit check
const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(null);

  useEffect(() => {
    try {
      const visited = sessionStorage.getItem('hasSeenVideo');
      setIsFirstVisit(visited !== 'true');
    } catch {
      setIsFirstVisit(false);
    }
  }, []);

  const markVisited = useCallback(() => {
    try {
      sessionStorage.setItem('hasSeenVideo', 'true');
    } catch (error) {
      console.warn('Cannot save to sessionStorage:', error);
    }
  }, []);

  return { isFirstVisit, markVisited };
};

export default function HeroBanner() {
  const { isFirstVisit, markVisited } = useFirstVisit();
  const [videoState, setVideoState] = useState({
    isReady: false,
    hasEnded: false,
    wasSkipped: false
  });
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hasDispatchedEventRef = useRef(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Determine if we should show video or image
  const showVideo = isFirstVisit === true && !videoState.hasEnded && !videoState.wasSkipped;
  const showImage = isFirstVisit === false || videoState.hasEnded || videoState.wasSkipped;

  // Lock scroll only when video is playing
  useScrollLock(showVideo);

  // Dispatch completion event once
  const dispatchVideoComplete = useCallback(() => {
    if (hasDispatchedEventRef.current) return;
    hasDispatchedEventRef.current = true;
    markVisited();
    window.dispatchEvent(new Event('videoComplete'));
  }, [markVisited]);

  // Enter fullscreen
  const enterFullscreen = useCallback(async () => {
    if (!containerRef.current) return;
    
    try {
      if (containerRef.current.requestFullscreen) {
        await containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        await containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        await containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.msRequestFullscreen) {
        await containerRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } catch (err) {
      console.warn('Could not enter fullscreen:', err);
    }
  }, []);

  // Exit fullscreen
  const exitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        await document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        await document.msExitFullscreen();
      }
      setIsFullscreen(false);
    } catch (err) {
      console.warn('Could not exit fullscreen:', err);
    }
  }, []);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Handle video completion (ended or skipped)
  const handleVideoComplete = useCallback(() => {
    setVideoState(prev => ({ ...prev, hasEnded: true }));
    dispatchVideoComplete();
    exitFullscreen();
  }, [dispatchVideoComplete, exitFullscreen]);

  // Handle skip
  const handleSkip = useCallback(() => {
    videoRef.current?.pause();
    setVideoState(prev => ({ ...prev, wasSkipped: true }));
    dispatchVideoComplete();
    exitFullscreen();
  }, [dispatchVideoComplete, exitFullscreen]);

  // Video event handlers
  const handleVideoLoaded = useCallback(() => {
    setVideoState(prev => ({ ...prev, isReady: true }));
    // Enter fullscreen when video is ready
    enterFullscreen();
  }, [enterFullscreen]);

  const handleVideoError = useCallback((e) => {
    console.warn('Video error:', e);
    handleVideoComplete();
  }, [handleVideoComplete]);

  // Memoized animation variants
  const videoVariants = useMemo(() => ({
    initial: { scale: 1.1, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: videoState.isReady ? 1 : 0 
    },
    exit: { 
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }), [videoState.isReady]);

  const imageVariants = useMemo(() => ({
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }), []);

  // Don't render until we know if it's first visit
  if (isFirstVisit === null) {
    return (
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-amber-500/30 border-t-amber-500 rounded-full"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full max-w-[100vw] h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {showVideo ? (
          <motion.div
            key="video"
            ref={containerRef}
            variants={videoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full z-10"
          >
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
                onEnded={handleVideoComplete}
                onError={handleVideoError}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"
              />
            </div>

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
              className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 md:bottom-16 md:right-12 
                px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
                bg-black/80 backdrop-blur-xl 
                text-white text-xs sm:text-sm md:text-base font-bold tracking-wider
                rounded-full 
                hover:bg-black/95 
                transition-all duration-300 
                z-20 
                shadow-[0_8px_32px_rgba(0,0,0,0.6)] 
                border border-white/20
                hover:border-amber-500/50
                hover:shadow-[0_8px_32px_rgba(217,119,6,0.3)]
                group"
              aria-label="Skip video introduction"
            >
              <span className="flex items-center gap-1 sm:gap-2">
                <span className="hidden xs:inline">SKIP VIDEO</span>
                <span className="xs:hidden">SKIP</span>
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

            {/* Fullscreen Toggle Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 2.2, duration: 0.4 }}
              onClick={isFullscreen ? exitFullscreen : enterFullscreen}
              className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 md:bottom-16 md:right-12 
                mr-0 sm:mr-[120px] md:mr-[180px]
                w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                bg-black/80 backdrop-blur-xl 
                text-white
                rounded-full 
                hover:bg-black/95 
                transition-all duration-300 
                z-20 
                shadow-[0_8px_32px_rgba(0,0,0,0.6)] 
                border border-white/20
                hover:border-amber-500/50
                hover:shadow-[0_8px_32px_rgba(217,119,6,0.3)]
                flex items-center justify-center
                group"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              )}
            </motion.button>

            {!videoState.isReady && (
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
        ) : showImage && (
          <motion.div
            key="image"
            {...imageVariants}
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
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none"
            />

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
          </motion.div>
        )}
      </AnimatePresence>

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
                aria-hidden="true"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>

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
    </section>
  );
}