"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from './HeroSection.module.css';

const HeroSection = () => {
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
        console.warn('SessionStorage không khả dụng:', error);
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
      console.warn('Không thể lưu vào sessionStorage:', error);
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
    console.log('Video kết thúc, hiển thị hình ảnh');
    setShowImage(true);
    completeVideoSequence();
  };

  // Handle video error
  const handleVideoError = (e) => {
    console.warn('Lỗi video:', e);
    setShowImage(true);
    completeVideoSequence();
  };

  // Handle skip video
  const handleSkip = () => {
    console.log('Bỏ qua video');
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowImage(true);
    completeVideoSequence();
  };

  return (
    <section className={styles.heroSection}>
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
            className={styles.videoContainer}
          >
            {/* Video Container - Full Screen */}
            <div className={styles.videoWrapper}>
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
                className={styles.video}
              />

              {/* Video Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className={styles.videoOverlay}
              />
            </div>

            {/* Skip Video Button */}
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
              className={styles.skipButton}
            >
              <span className={styles.skipButtonContent}>
                BỎ QUA VIDEO
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className={styles.skipArrow}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            {/* Loading indicator */}
            {!isVideoReady && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.loadingContainer}
              >
                <div className={styles.loadingContent}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className={styles.loadingSpinner}
                  />
                  <p className={styles.loadingText}>
                    Đang tải...
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          // Image Layer
          <motion.div
            key="image"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={styles.imageContainer}
          >
            <Image
              src="/images/banner_kpoppet.png"
              alt="K-LovePet Banner"
              fill
              priority
              quality={100}
              sizes="100vw"
              className={styles.heroImage}
            />

            {/* Image Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className={styles.imageOverlay}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
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
            className={styles.scrollIndicator}
          >
            <div className={styles.scrollIndicatorContainer}>
              <svg
                className={styles.scrollIcon}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>

            {/* Scroll text hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1 }}
              className={styles.scrollText}
            >
              Cuộn để khám phá
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative corner elements */}
      {showImage && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.decorativeElement1}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className={styles.decorativeElement2}
          />
        </>
      )}
    </section>
  );
};

export default HeroSection;
