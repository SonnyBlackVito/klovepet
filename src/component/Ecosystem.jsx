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

export default function Ecosystem() {
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
      features: ["Live streaming", "Monetization", "Fan interaction"],
      stats: { value: "10K+", label: "Streamers" },
    },
    {
      id: "station",
      icon: "/images/Pet_Station.png",
      title: "Pet Station",
      subtitle: "NFT Marketplace",
      description:
        "Trade pet products and NFTs. Access exclusive merchandise and services for your pets.",
      features: ["E-commerce", "NFT items", "Pet services"],
      stats: { value: "50K+", label: "Products" },
    },
    {
      id: "audition",
      icon: "/images/Pet_Audition.png",
      title: "Pet Audition",
      subtitle: "Talent Competition",
      description:
        "Showcase your pet's talents and compete for amazing prizes. Vote for your favorites.",
      features: ["Competitions", "Voting", "Prizes"],
      stats: { value: "1M+", label: "Votes" },
    },
    {
      id: "card",
      icon: "/images/K-LovePet_Card.png",
      title: "K-LovePet Card",
      subtitle: "Digital Collectibles",
      description:
        "Collect and trade unique pet cards. Each card has special traits and benefits.",
      features: ["NFT cards", "Trading", "Rewards"],
      stats: { value: "100K+", label: "Cards" },
    },
    {
      id: "hunters",
      icon: "/images/Running_Hunter.png",
      title: "Running Hunters",
      subtitle: "Fitness & Rewards",
      description:
        "Stay active with your pet and earn rewards. Track fitness and complete challenges.",
      features: ["Fitness tracking", "Earn rewards", "Challenges"],
      stats: { value: "5K+", label: "Users" },
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
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 xl:py-45 overflow-hidden"
      style={{
        fontFamily: "var(--font-luckiest-guy)",
        backgroundImage: `
          radial-gradient(circle 600px at 0% 200px, rgba(254, 243, 199, 0.6), transparent),
          radial-gradient(circle 600px at 50% 200px, rgba(254, 243, 199, 0.5), transparent),
          radial-gradient(circle 600px at 100% 200px, rgba(254, 243, 199, 0.6), transparent)
        `,
        backgroundColor: "#ffffff",
      }}>
      {/* Dark Mode Overlay */}
      <div className="absolute inset-0 bg-gray-950 dark:opacity-95 opacity-0 transition-opacity duration-300 pointer-events-none" />

      <motion.div>
        <motion.img
          src="/images/step_left.png"
          className="w-42 h-64 absolute top-56 left-32"
          animate={{
            y: [0, -15, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 sm:top-20 -left-16 sm:-left-32 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-r from-amber-400/30 to-orange-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 60, 0],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 sm:bottom-20 -right-16 sm:-right-32 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-l from-orange-400/30 to-red-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-2 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto">
          {/* Enhanced Header & Stats Section */}
          <motion.div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Header with better animations */}
            <motion.div
              variants={itemVariants}
              className="relative flex flex-col flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  WebkitTextStrokeWidth: "1.5px",
                  WebkitTextStrokeColor: "#876046",
                  textShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                  fontFamily: '"Luckiest Guy", cursive',
                  lineHeight: "normal",
                }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl px-2 sm:px-4 sm:py-2 text-[#F26457] rounded-full font-semibold mb-3 sm:mb-3">
                ECOSYSTEM
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#876046",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
                  fontFamily: '"Luckiest Guy", cursive',
                  lineHeight: "normal",
                }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#FEE685] mb-4 sm:mb-6 leading-tight tracking-wide">
                <span className="block drop-shadow-lg text-[#FEE685]">
                  5 PLATFORMS ONE ECOSYSTEM
                </span>
              </motion.h2>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                Interconnected platforms creating value for pet lovers worldwide
              </motion.span>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="relative shrink-0 bg-amber-50/50 dark:bg-transparent grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  className="relative group z-10">
                  {/* Enhanced glow effect */}
                  <motion.div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

                  <div className="w-full sm:w-[180px] md:w-[220px] lg:w-[280px] h-[100px] sm:h-[120px] lg:h-[140px] shadow-lg hover:shadow-2xl sm:shadow-[8px_10px_10px_0_rgba(0,0,0,0.15)] relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border-2 border-amber-200 dark:border-amber-700 transition-all duration-300">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}>
                      <stat.icon
                        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 mb-1 sm:mb-2 text-amber-600 dark:text-amber-400"
                        strokeWidth={2.5}
                      />
                    </motion.div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 font-bold uppercase font-sans">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Rabbit decoration */}
              <motion.img
                src="/images/shy_rabbit.png"
                alt="Shy Rabbit"
                className="absolute w-[220px] h-[440px] sm:w-[320px] sm:h-[640px] lg:w-[700px] lg:h-[790px] -top-[220px] sm:-top-[320px] lg:-top-[450px] -right-110 -translate-x-1/2 z-5 pointer-events-none drop-shadow-2xl object-contain"
                initial={{ y: -50, opacity: 0, scale: 0.9 }}
                animate={{
                  y: [0, -10, 0],
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  opacity: { duration: 1.2 },
                  scale: { duration: 1.2 },
                  delay: 0.8,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Swiper Section */}
          <motion.div
            variants={itemVariants}
            className="relative mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#876046",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
                  fontFamily: '"Luckiest Guy", cursive',
                  lineHeight: "normal",
                }}
                className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-black text-[#FEE685]  tracking-wide uppercase">
                K-LovePet's Approach
              </motion.h3>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={false}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                480: { slidesPerView: 1.5, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 24 },
                768: { slidesPerView: 2.5, spaceBetween: 24 },
                1024: { slidesPerView: 3.5, spaceBetween: 28 },
                1280: { slidesPerView: 4.5, spaceBetween: 28 },
                1536: { slidesPerView: 5, spaceBetween: 32 },
              }}
              className="ecosystem-swiper !pb-14 !pt-4 !px-1"
              style={{ overflow: "visible" }}>
              {components.map((component, index) => (
                <SwiperSlide key={component.id} style={{ height: "auto" }}>
                  <Link href={`/ecosystem/${component.id}`}>
                    <motion.div
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      animate={{
                        scale: hoveredCard === index ? 1.1 : 1,
                        y: hoveredCard === index ? -24 : 0,
                        zIndex: hoveredCard === index ? 50 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 22,
                      }}
                      className="relative overflow-hidden cursor-pointer rounded-2xl"
                      style={{
                        boxShadow:
                          hoveredCard === index
                            ? "0 30px 60px -15px rgba(251, 146, 60, 0.5), 0 0 0 2px rgba(251, 146, 60, 0.2)"
                            : "0 10px 20px -5px rgba(0, 0, 0, 0.1)",
                      }}>
                      {/* Multi-layer background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-500/10 dark:from-amber-600/10 dark:to-orange-700/10" />

                      {/* Content Container */}
                      <div className="relative h-full w-full p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center ">
                        {/* Enhanced External Link Icon */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0, rotate: -45 }}
                          animate={{
                            opacity: hoveredCard === index ? 1 : 0,
                            scale: hoveredCard === index ? 1 : 0,
                            rotate: hoveredCard === index ? 0 : -45,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 20,
                          }}
                          className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-full flex items-center justify-center shadow-xl z-20 group/icon">
                          <ExternalLink
                            className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover/icon:scale-110 transition-transform"
                            strokeWidth={2.5}
                          />
                        </motion.div>

                        {/* Enhanced Icon */}
                        <motion.div
                          animate={{
                            scale: hoveredCard === index ? 0.85 : 1,
                            width: hoveredCard === index ? 350 : 350,
                            height: hoveredCard === index ? 368 : 284,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 22,
                          }}
                          className="mb-4 sm:mb-6 relative z-10 w-[350px] h-[284px] rounded-lg overflow-hidden">
                          <motion.img
                            src={component.icon}
                            alt={component.title}
                            className="w-full h-full object-contain drop-shadow-2xl rounded-xl"
                          />
                        </motion.div>

                        {/* Enhanced Title */}
                        <motion.h3
                          animate={{
                            y: hoveredCard === index ? -50 : 0,
                            scale: hoveredCard === index ? 0.95 : 1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 22,
                          }}
                          className="text-lg sm:text-xl lg:text-xl font-black text-gray-900 dark:text-white text-center tracking-wide uppercase leading-tight px-2 relative z-10"
                          style={{
                            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          }}>
                          {component.title}
                        </motion.h3>

                        {/* Enhanced Expanded Content */}
                        <AnimatePresence>
                          {hoveredCard === index && (
                            <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 40 }}
                              transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 22,
                              }}
                              className="absolute inset-0 p-4 sm:p-5 lg:p-6 flex flex-col justify-end bg-gradient-to-t from-white via-white/98 to-white/50 dark:from-gray-900 dark:via-gray-900/98 dark:to-gray-900/50 backdrop-blur-sm">
                              <div className="space-y-2 sm:space-y-3">
                                <p
                                  className="text-xs sm:text-sm lg:text-base font-bold text-amber-600 dark:text-amber-400 text-center"
                                  style={{
                                    fontFamily: "system-ui, sans-serif",
                                  }}>
                                  {component.subtitle}
                                </p>
                                <p
                                  className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center"
                                  style={{
                                    fontFamily: "system-ui, sans-serif",
                                  }}>
                                  {component.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Enhanced Glow Effect */}
                      <motion.div
                        animate={{
                          opacity: hoveredCard === index ? 0.7 : 0,
                          scale: hoveredCard === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute -inset-3 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-3xl blur-3xl -z-10"
                      />
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Enhanced CTA Banner */}
          <motion.div
            variants={itemVariants}
            // whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative pointer-events-none">
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              style={{
                backgroundImage: 'url("/images/banner_ecosystem.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "200px",
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/80 to-orange-500/80 group-hover:from-amber-500/70 group-hover:to-orange-500/70 transition-all duration-500 -z-10" />
              <div className="relative z-10 min-h-[200px] sm:min-h-[300px] lg:min-h-[720px]" />
            </div>
            <motion.img
              src="/images/cat_dark.png"
              alt="Shy Rabbit"
              className="absolute w-[220px] h-[440px] sm:w-[320px] sm:h-[640px] lg:w-[450px] lg:h-[790px] -top-[220px] sm:-top-[320px] lg:-top-[380px]  xl:left-40 sm:left-10 md:left-20 -translate-x-1/2 z-5 pointer-events-none drop-shadow-2xl object-contain"
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
                opacity: 1,
                scale: 1,
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: { duration: 1.2 },
                scale: { duration: 1.2 },
                delay: 0.8,
              }}
            />

            <motion.img
              src="/images/car_yellow.png"
              alt="Yellow Car"
              className="
    absolute 
    w-[40%] max-w-[220px] sm:max-w-[320px] lg:max-w-[450px] 
    -bottom-[50px] sm:-bottom-[80px] md:-bottom-[120px] lg:-bottom-[200px] xl:-bottom-[200px]
      right-[50px] sm:right-[0px] md:-right-[60px] lg:-right-12 xl:-right-20
    translate-x-1/2 sm:translate-x-0
    pointer-events-none 
    drop-shadow-2xl 
    object-contain
    z-10
  "
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
                opacity: 1,
                scale: 1,
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1.2 },
                scale: { duration: 1.2 },
                delay: 0.8,
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        .ecosystem-swiper {
          overflow: visible !important;
        }

        .ecosystem-swiper .swiper-wrapper {
          padding-bottom: 20px;
        }

        .ecosystem-swiper .swiper-button-next,
        .ecosystem-swiper .swiper-button-prev {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
          border-radius: 50%;
          color: white;
          box-shadow: 0 12px 28px rgba(245, 158, 11, 0.4);
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .ecosystem-swiper .swiper-button-next,
          .ecosystem-swiper .swiper-button-prev {
            width: 52px;
            height: 52px;
          }
        }

        .ecosystem-swiper .swiper-button-next:after,
        .ecosystem-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }

        @media (min-width: 640px) {
          .ecosystem-swiper .swiper-button-next:after,
          .ecosystem-swiper .swiper-button-prev:after {
            font-size: 22px;
          }
        }

        .ecosystem-swiper .swiper-button-next:hover,
        .ecosystem-swiper .swiper-button-prev:hover {
          background: linear-gradient(135deg, #d97706 0%, #c2410c 100%);
          transform: scale(1.15);
          box-shadow: 0 16px 32px rgba(217, 119, 6, 0.5);
        }

        .ecosystem-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .ecosystem-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .ecosystem-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
        }

        .ecosystem-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
          width: 28px;
          border-radius: 6px;
          opacity: 1;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
        }

        @media (min-width: 640px) {
          .ecosystem-swiper .swiper-pagination-bullet-active {
            width: 36px;
          }
        }

        .dark .ecosystem-swiper .swiper-pagination-bullet {
          background: #6b7280;
        }

        @media (max-width: 639px) {
          .ecosystem-swiper .swiper-button-next,
          .ecosystem-swiper .swiper-button-prev {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
}
