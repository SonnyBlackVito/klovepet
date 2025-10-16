"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  ArrowRight,
  Sparkles,
  Users,
  Shield,
  TrendingUp,
  Heart,
  ExternalLink,
} from "lucide-react";

const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const components = [
    {
      id: "broadcasting",
      icon: "/images/Pet_Broadcasting.png",
      title: "Pet Broadcasting",
      subtitle: "Live Streaming Platform",
      description:
        "Connect with fans through live streaming. Share your pet's moments and monetize your content.",
    },
    {
      id: "station",
      icon: "/images/Pet_Station.png",
      title: "Pet Station",
      subtitle: "NFT Marketplace",
      description:
        "Trade pet products and NFTs. Access exclusive merchandise and services for your pets.",
    },
    {
      id: "audition",
      icon: "/images/Pet_Audition.png",
      title: "Pet Audition",
      subtitle: "Talent Competition",
      description:
        "Showcase your pet's talents and compete for amazing prizes. Vote for your favorites.",
    },
    {
      id: "card",
      icon: "/images/K-LovePet_Card.png",
      title: "K-LovePet Card",
      subtitle: "Digital Collectibles",
      description:
        "Collect and trade unique pet cards. Each card has special traits and benefits.",
    },
    {
      id: "hunters",
      icon: "/images/Running_Hunter.png",
      title: "Running Hunters",
      subtitle: "Fitness & Rewards",
      description:
        "Stay active with your pet and earn rewards. Track fitness and complete challenges.",
    },
  ];

  const stats = [
    { icon: Users, value: "150K+", label: "Community" },
    { icon: TrendingUp, value: "$2M+", label: "Value" },
    { icon: Sparkles, value: "500K+", label: "Transactions" },
    { icon: Shield, value: "99.9%", label: "Security" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800"
      style={{
        fontFamily: "var(--font-luckiest-guy)",
        backgroundImage: `
          radial-gradient(circle 600px at 0% 200px, #fef3c7, transparent),
          radial-gradient(circle 600px at 50% 200px, #fef3c7, transparent),
          radial-gradient(circle 600px at 80% 200px, #fef3c7, transparent),
          radial-gradient(circle 600px at 100% 200px, #fef3c7, transparent)
        `,
      }}>
      {/* Dark Mode Overlay */}
      <div className="absolute inset-0 bg-gray-950 dark:opacity-95 opacity-0 transition-opacity duration-300 pointer-events-none" />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-l from-orange-400/20 to-red-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#876046",
                textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                fontFamily: '"Luckiest Guy", cursive',
                lineHeight: "normal",
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl px-2 sm:px-4 py-1 sm:py-2 text-red-400 rounded-full font-semibold mb-2 sm:mb-4">
              ECOSYSTEM
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white mb-4 sm:mb-5 md:mb-6 leading-tight tracking-wide">
              <span className="block drop-shadow-lg">5 PLATFORMS</span>
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                ONE ECOSYSTEM
              </span>
            </h2>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans px-4 sm:px-0"
              style={{ fontFamily: "system-ui, sans-serif" }}>
              Interconnected platforms creating value for pet lovers worldwide
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group">
                <div className="absolute inset-0 bg-amber-500/20 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all">
                  <stat.icon
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-2 sm:mb-3 text-amber-600 dark:text-amber-400"
                    strokeWidth={2.5}
                  />
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div
                    className="text-xs sm:text-sm md:text-sm text-gray-600 dark:text-gray-400 font-bold uppercase"
                    style={{ fontFamily: "system-ui, sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Swiper Carousel */}
          <motion.div variants={itemVariants} className="relative z-30 mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-wide uppercase">
                Explore Platforms
              </h3>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1.1}
              centeredSlides={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.3,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                640: {
                  slidesPerView: 1.8,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
                1536: {
                  slidesPerView: 4.5,
                  spaceBetween: 24,
                  centeredSlides: false,
                },
              }}
              className="ecosystem-swiper pb-8 sm:pb-12 relative z-20">
              {components.map((component, index) => (
                <SwiperSlide key={component.id}>
                  <Link href={`/ecosystem/${component.id}`}>
                    <motion.div
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      whileHover={{ y: -12, scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`relative h-[300px] sm:h-[320px] md:h-[340px] lg:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group bg-white dark:bg-gray-800 border-2 border-amber-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                        hoveredCard === index ? 'z-[9999]' : 'z-10'
                      }`}>
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/10 dark:from-amber-600/10 dark:to-orange-700/10" />

                      {/* Content */}
                      <div className="relative h-full p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center">
                        {/* External Link Icon */}
                        <div className={`absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-300 ease-out ${
                          hoveredCard === index 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-0'
                        }`}>
                          <ExternalLink
                            className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white"
                            strokeWidth={2.5}
                          />
                        </div>

                        {/* Icon - Large by default */}
                        <div className={`mb-4 sm:mb-5 md:mb-6 transition-all duration-300 ease-out ${
                          hoveredCard === index 
                            ? 'scale-85 -translate-y-5' 
                            : 'scale-100 translate-y-0'
                        }`}>
                          <img
                            src={component.icon}
                            alt={component.title}
                            className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-contain drop-shadow-2xl"
                          />
                        </div>

                        {/* Title - Always visible */}
                        <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-black text-gray-900 dark:text-white text-center tracking-wide uppercase leading-tight px-2 sm:px-3 md:px-2 transition-all duration-300 ease-out ${
                          hoveredCard === index 
                            ? 'scale-90' 
                            : 'scale-100'
                        }`}>
                          {component.title}
                        </h3>

                        {/* Expanded Content - Only on hover */}
                        <div className={`absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end bg-gradient-to-t from-white via-white/95 to-transparent dark:from-gray-800 dark:via-gray-800/95 dark:to-transparent transition-all duration-300 ease-out ${
                          hoveredCard === index 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-5 pointer-events-none'
                        }`}>
                          <div className="space-y-2 sm:space-y-3">
                            {/* Subtitle */}
                            <p
                              className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 text-center"
                              style={{
                                fontFamily: "system-ui, sans-serif",
                              }}>
                              {component.subtitle}
                            </p>

                            {/* Description */}
                            <p
                              className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center"
                              style={{
                                fontFamily: "system-ui, sans-serif",
                              }}>
                              {component.description}
                            </p>

                            {/* CTA Button */}
                            <div className="flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg mx-auto transition-transform duration-200 hover:scale-105 active:scale-95">
                              <span>Explore</span>
                              <ArrowRight
                                className="w-3 h-3 sm:w-4 sm:h-4"
                                strokeWidth={3}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Glow Effect on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl sm:rounded-3xl blur-xl -z-10 transition-opacity duration-300 ease-out ${
                        hoveredCard === index 
                          ? 'opacity-50' 
                          : 'opacity-0'
                      }`} />
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="relative">
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: 'url("/images/banner_ecosystem.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "250px",
              }}>
              {/* Mobile overlay for better text readability */}
              <div className="sm:hidden absolute inset-0 bg-black/20"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        /* Hide navigation arrows on all screen sizes */
        .ecosystem-swiper .swiper-button-next,
        .ecosystem-swiper .swiper-button-prev {
          display: none !important;
        }

        /* Enhanced pagination styling */
        .ecosystem-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 24px;
          bottom: auto !important;
          left: auto !important;
          transform: none !important;
          width: 100% !important;
          text-align: center;
        }

        .ecosystem-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50%;
          margin: 0 6px !important;
          cursor: pointer;
        }

        .ecosystem-swiper .swiper-pagination-bullet:hover {
          background: #9ca3af;
          transform: scale(1.1);
        }

        .ecosystem-swiper .swiper-pagination-bullet-active {
          width: 32px;
          height: 10px;
          background: linear-gradient(90deg, #f59e0b, #ea580c);
          border-radius: 6px;
          transform: scale(1);
          margin: 0 6px !important;
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
        }

        .ecosystem-swiper .swiper-pagination-bullet-active:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.6);
        }

        /* Dark mode pagination */
        .dark .ecosystem-swiper .swiper-pagination-bullet {
          background: #4b5563;
        }

        .dark .ecosystem-swiper .swiper-pagination-bullet:hover {
          background: #6b7280;
        }

        /* Responsive pagination sizing */
        @media (min-width: 640px) {
          .ecosystem-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            margin: 0 8px !important;
          }
          
          .ecosystem-swiper .swiper-pagination-bullet-active {
            width: 36px;
            height: 12px;
            margin: 0 8px !important;
          }
        }

        @media (min-width: 1024px) {
          .ecosystem-swiper .swiper-pagination-bullet {
            width: 14px;
            height: 14px;
            margin: 0 10px !important;
          }
          
          .ecosystem-swiper .swiper-pagination-bullet-active {
            width: 40px;
            height: 14px;
            margin: 0 10px !important;
          }
        }

        /* Ensure proper spacing for all screen sizes */
        @media (max-width: 640px) {
          .ecosystem-swiper .swiper-pagination {
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default EcosystemSection;
