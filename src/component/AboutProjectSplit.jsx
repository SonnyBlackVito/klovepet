"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AboutProjectSplit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      style={{
        fontFamily: "var(--font-luckiest-guy)",
        backgroundImage: `
          radial-gradient(circle 600px at 0% 200px, #fef3c7, transparent),
          radial-gradient(circle 600px at 50% 200px, #fef3c7, transparent),
          radial-gradient(circle 600px at 80% 200px, #fef3c7, transparent),
          radial-gradient(circle 600px at 100% 200px, #fef3c7, transparent)
        `,
      }}
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-0 overflow-hidden">
      {/* Title Section - Always Visible, but hide on desktop full screen */}
      <div className=" lg:hidden container mx-auto text-center px-4 mb-8 sm:mb-12 lg:mb-0 lg:py-16">
        <h1
          style={{
            WebkitStrokeWidth: "2px",
            WebkitTextStrokeColor: "#876046",
            textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: '"Luckiest Guy", cursive',
            lineHeight: "normal",
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl px-4 py-2 text-red-400 rounded-full font-semibold mb-4">
          About K-LovePet
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          Building a Global Ecosystem For Pet Lovers
        </h2>
      </div>

      <div className="container mx-auto px-4 lg:px-0">
        {/* MOBILE & TABLET: Text + Image Layout (< 1024px) */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center">
              <p
                style={{
                  fontFamily: "'Luckiest Guy', cursive",
                }}
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed text-center">
                K-LovePet is a blockchain project that connects people and their
                pets through a transparent and fair ecosystem.
                <br />
                <br />
                We believe that every pet owner should have the opportunity to
                participate, share, and benefit from the value they help create.
              </p>

              <div className="space-y-4 w-full max-w-md">
                <ValueItem
                  title="Transparent Blockchain Infrastructure"
                  description="Secure and fair for everyone"
                />
                <ValueItem
                  title="Integrated Ecosystem"
                  description="Content, events, and commerce unified"
                />
                <ValueItem
                  title="Global Community"
                  description="Connected by shared values"
                />
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square">
                <Image
                  src="/images/park_night.png"
                  alt="K-LovePet Banner"
                  fill
                  priority
                  quality={100}
                  className="object-cover rounded-3xl"
                />

                {/* Floating paw elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl">
                  <div className="text-2xl">🐾</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl">
                  <div className="text-2xl">🐾</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DESKTOP: Full Screen Image Layout (>= 1024px) */}
<div className="hidden lg:block">
  <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="relative w-screen h-screen"
    style={{
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
    }}
  >
    {/* Full screen image container */}
    <div className="relative w-full h-full">
      
      {/* Main Image */}
      <Image
        src="/images/banner_xl.png"
        alt="K-LovePet Banner - Connecting pet lovers worldwide"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-fit"
      />

      {/* Horizontal blur effect - ABOVE image with high z-index */}
      <div
        className="absolute top-0  left-0 right-0 pointer-events-none z-20"
        style={{
          width: '100%',
          height: '250px',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 247, 214, 0.90) 50%, rgba(255, 255, 255, 0.50) 100%)',
          filter: 'blur(60px)',
          opacity: 0.9,
        }}
        aria-hidden="true"
      />

      {/* Text overlay on blur effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[-1px] left-0 right-0 z-30 flex flex-col items-center justify-center text-center px-8"
      >
        <h1
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#876046",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
            fontFamily: '"Luckiest Guy", cursive',
            lineHeight: "normal",
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#F26457]  "
        >
          ABOUT K LOVE PET
        </h1>
        
        <h2
          style={{
            // fontFamily: '"SVN-Gilroy", sans-serif',
            fontFamily: '"Luckiest Guy", cursive',
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
          className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 max-w-8xl"
        >
          Building a Global Ecosystem for Pet Lovers.
        </h2>
      </motion.div>

      {/* Gradient Overlays */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `
            linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.2) 100%),
            linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.1) 100%)
          `
        }}
        aria-hidden="true"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? {
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5]
        } : {}}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-40"
      >
        <div className="flex flex-col items-center gap-2">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-lg">
            Scroll to explore
          </span>
        </div>
      </motion.div>
    </div>
  </motion.div>
</div>
      </div>
    </section>
  );
}

function ValueItem({ title, description }) {
  return (
    <motion.div
      className="flex items-start gap-3 sm:gap-4"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300 }}>
      <div className="flex-shrink-0 w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full mt-2" />
      <div className="flex-1">
        <h4
          style={{
            fontFamily: '"Luckiest Guy", cursive',
            lineHeight: "normal",
          }}
          className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
          {title}
        </h4>
        <p
          className="text-sm sm:text-base text-gray-600 font-semibold"
          style={{
            fontFamily: '"SVN-Gilroy", sans-serif',
            lineHeight: "normal",
          }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
