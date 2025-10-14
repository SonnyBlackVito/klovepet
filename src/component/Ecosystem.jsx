// src/components/Ecosystem.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const components = [
    {
      id: 'broadcasting',
      icon: 'images/Pet_Broadcasting.png',
      title: 'Pet Broadcasting',
      description: 'Live streaming platform for pet content creators to share moments and connect with fans',
      color: 'from-cyan-400 to-sky-400',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      features: ['Live streaming', 'Monetization', 'Fan interaction']
    },
    {
      id: 'station',
      icon: 'images/Pet_Station.png',
      title: 'Pet Station',
      description: 'Marketplace for pet products, services, and exclusive merchandise',
      color: 'from-teal-400 to-emerald-400',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      borderColor: 'border-teal-200 dark:border-teal-800',
      features: ['E-commerce', 'NFT items', 'Pet services']
    },
    {
      id: 'audition',
      icon: 'images/Pet_Audition.png',
      title: 'Pet Audition',
      description: 'Talent competition platform where pets can showcase skills and win rewards',
      color: 'from-coral-400 to-pink-400',
      bgColor: 'bg-coral-50 dark:bg-coral-900/20',
      borderColor: 'border-coral-200 dark:border-coral-800',
      features: ['Competitions', 'Voting', 'Prizes']
    },
    {
      id: 'card',
      icon: '💳',
      title: 'K-LovePet Card',
      description: 'Digital collectible cards featuring pets with unique traits and benefits',
      color: 'from-purple-400 to-pink-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      features: ['NFT cards', 'Trading', 'Rewards']
    },
    {
      id: 'hunters',
      icon: '🏃',
      title: 'Running Hunters',
      description: 'Gamified fitness app where users earn rewards for activities with their pets',
      color: 'from-emerald-400 to-green-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      features: ['Fitness tracking', 'Earn rewards', 'Challenges']
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-cyan-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-6xl opacity-20 pointer-events-none hidden lg:block">🐾</div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-20 pointer-events-none hidden lg:block">💕</div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-bold mb-6 border-2 border-cyan-200 dark:border-cyan-800">
              🌐 Complete Ecosystem
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              A Complete Ecosystem
              <span className="block bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                with Community at Its Core
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Five interconnected platforms working together to create value for pet lovers worldwide
            </p>
          </motion.div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {components.map((component, index) => (
              <motion.div
                key={component.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: hoveredCard === index ? 0.6 : 0,
                    scale: hoveredCard === index ? 1.05 : 1
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${component.color} rounded-3xl blur-xl`}
                ></motion.div>

                {/* Card */}
                <Link href={`/ecosystem/${component.id}`}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative ${component.bgColor} ${component.borderColor} border-2 rounded-3xl p-8 cursor-pointer transition-all shadow-lg hover:shadow-2xl h-full`}
                  >
                    {/* Icon */}
                    {/* <motion.div
                      animate={{
                        scale: hoveredCard === index ? [1, 1.2, 1.1] : 1,
                        rotate: hoveredCard === index ? [0, 10, -10, 0] : 0
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-7xl mb-4"
                    >
                      {component.icon}
                    </motion.div> */}

                    <motion.img 
                    animate={{
                        scale: hoveredCard === index ? [1, 1.2, 1.1] : 1,
                        rotate: hoveredCard === index ? [0, 10, -10, 0] : 0
                      }}
                    transition={{ duration: 0.5 }}
                      className="h-50 w-50 mb-4 items-center justify-center flex flex-col text-center"
                      src={component.icon}
                      alt={component.title}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    />

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {component.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {component.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {component.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <motion.div
                      animate={{
                        x: hoveredCard === index ? 5 : 0,
                        opacity: hoveredCard === index ? 1 : 0.5
                      }}
                      className="absolute bottom-6 right-6 text-2xl"
                    >
                      →
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Center Connection Diagram (Hidden on mobile) */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:block relative h-64 mb-12"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central hub */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.8, type: "spring" }}
                className="relative z-10 w-40 h-40 bg-gradient-to-br from-cyan-400 via-teal-400 to-emerald-400 rounded-full flex items-center justify-center shadow-2xl"
              >
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🐾</div>
                  <div className="font-bold">Community</div>
                </div>
              </motion.div>

              {/* Connection lines */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="absolute w-32 h-1 bg-gradient-to-r from-cyan-400 to-transparent origin-left"
                  style={{
                    transform: `rotate(${angle}deg)`,
                    left: '50%',
                    top: '50%'
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Explore Our Ecosystem
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Discover how each component works together to create value
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/ecosystem">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
                  >
                    View Full Ecosystem →
                  </motion.button>
                </Link>
                <Link href="/whitepaper">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 dark:border-gray-600"
                  >
                    Read Whitepaper
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}