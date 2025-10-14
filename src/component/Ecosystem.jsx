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
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{
        fontFamily: "var(--font-luckiest-guy)",
        backgroundImage: `
          radial-gradient(circle 600px at 0% 200px, #fef3c7, transparent),
          radial-gradient(circle 600px at 50% 200px, #fef3c7, transparent),
          radial-gradient(circle 600px at 80% 200px, #fef3c7, transparent),
          radial-gradient(circle 600px at 100% 200px, #fef3c7, transparent)
        `,
        backgroundColor: "#ffffff",
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-8xl text-red-400"> ECOSYSTEM</h1>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-wide">
              <span className="block drop-shadow-lg">5 PLATFORMS</span>
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                ONE ECOSYSTEM
              </span>
            </h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans"
              style={{ fontFamily: "system-ui, sans-serif" }}>
              Interconnected platforms creating value for pet lovers worldwide
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group">
                <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-5 border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all">
                  <stat.icon
                    className="w-7 h-7 mb-2 text-amber-600 dark:text-amber-400"
                    strokeWidth={2.5}
                  />
                  <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-gray-600 dark:text-gray-400 font-bold uppercase"
                    style={{ fontFamily: "system-ui, sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Swiper Carousel */}
          <motion.div variants={itemVariants} className="relative mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-wide uppercase">
                Explore Platforms
              </h3>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.5}
              centeredSlides={false}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}
              className="ecosystem-swiper pb-12">
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
                      className="relative h-[340px] rounded-3xl overflow-hidden cursor-pointer group bg-white dark:bg-gray-800 border-2 border-amber-200 dark:border-gray-700 shadow-xl hover:shadow-2xl">
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/10 dark:from-amber-600/10 dark:to-orange-700/10" />

                      {/* Content */}
                      <div className="relative h-full p-6 flex flex-col items-center justify-center">
                        {/* External Link Icon */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: hoveredCard === index ? 1 : 0,
                            scale: hoveredCard === index ? 1 : 0,
                          }}
                          className="absolute top-4 right-4 w-10 h-10 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center shadow-lg z-10">
                          <ExternalLink
                            className="w-5 h-5 text-white"
                            strokeWidth={2.5}
                          />
                        </motion.div>

                        {/* Icon - Large by default */}
                        <motion.div
                          animate={{
                            scale: hoveredCard === index ? 0.85 : 1,
                            y: hoveredCard === index ? -20 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="mb-6">
                          <img
                            src={component.icon}
                            alt={component.title}
                            className="w-full h-40 object-contain drop-shadow-2xl"
                          />
                        </motion.div>

                        {/* Title - Always visible */}
                        <motion.h3
                          animate={{
                            scale: hoveredCard === index ? 0.9 : 1,
                          }}
                          className="text-2xl font-black text-gray-900 dark:text-white text-center tracking-wide uppercase leading-tight px-2">
                          {component.title}
                        </motion.h3>

                        {/* Expanded Content - Only on hover */}
                        <AnimatePresence>
                          {hoveredCard === index && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-white via-white/95 to-transparent dark:from-gray-800 dark:via-gray-800/95 dark:to-transparent">
                              <div className="space-y-3">
                                {/* Subtitle */}
                                <p
                                  className="text-sm font-bold text-amber-600 dark:text-amber-400 text-center"
                                  style={{
                                    fontFamily: "system-ui, sans-serif",
                                  }}>
                                  {component.subtitle}
                                </p>

                                {/* Description */}
                                <p
                                  className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center"
                                  style={{
                                    fontFamily: "system-ui, sans-serif",
                                  }}>
                                  {component.description}
                                </p>

                                {/* Stats Badge */}
                                <div className="flex justify-center">
                                  <div className="inline-flex items-center gap-2 py-2 px-4 bg-amber-100 dark:bg-amber-900/30 rounded-full border border-amber-300 dark:border-amber-700">
                                    <span className="text-lg font-black text-amber-800 dark:text-amber-300">
                                      {component.stats.value}
                                    </span>
                                    <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
                                      {component.stats.label}
                                    </span>
                                  </div>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 justify-center">
                                  {component.features.map((feature) => (
                                    <div
                                      key={feature}
                                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300"
                                      style={{
                                        fontFamily: "system-ui, sans-serif",
                                      }}>
                                      {feature}
                                    </div>
                                  ))}
                                </div>

                                {/* CTA Button */}
                                <motion.div
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full font-black text-sm uppercase tracking-wider shadow-lg mx-auto">
                                  <span>Explore</span>
                                  <ArrowRight
                                    className="w-4 h-4"
                                    strokeWidth={3}
                                  />
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Glow Effect on Hover */}
                      <motion.div
                        animate={{
                          opacity: hoveredCard === index ? 0.5 : 0,
                        }}
                        className="absolute -inset-1 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl blur-2xl -z-10"
                      />
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl "
              style={{
                backgroundImage: 'url("/images/banner_ecosystem.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
              }}></div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        .ecosystem-swiper .swiper-button-next,
        .ecosystem-swiper .swiper-button-prev {
          width: 48px;
          height: 48px;
          background: linear-gradient(to right, #f59e0b, #ea580c);
          border-radius: 50%;
          color: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .ecosystem-swiper .swiper-button-next:after,
        .ecosystem-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .ecosystem-swiper .swiper-button-next:hover,
        .ecosystem-swiper .swiper-button-prev:hover {
          background: linear-gradient(to right, #d97706, #c2410c);
          transform: scale(1.1);
        }

        .ecosystem-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
        }

        .ecosystem-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #f59e0b, #ea580c);
          width: 32px;
          border-radius: 6px;
        }

        .dark .ecosystem-swiper .swiper-pagination-bullet {
          background: #4b5563;
        }
      `}</style>
    </section>
  );
}
