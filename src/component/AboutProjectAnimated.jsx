// src/components/AboutProjectAnimated.tsx
// Ultra Animated Version - Park Scene với nhiều interactive elements
'use client';

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function AboutProjectAnimated() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false });
  const [activeTab, setActiveTab] = useState(0);
  const [petsPosition, setPetsPosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Multiple parallax layers
  const skyY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const cloudY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const cloudY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const mountainY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const treeY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const grassY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  // Pet walking animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPetsPosition(prev => ({
        x: (prev.x + 5) % 100,
        y: Math.sin(prev.x / 10) * 5
      }));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { 
      id: 0, 
      title: "Transparent", 
      icon: "🔗", 
      content: "Blockchain Infrastructure",
      fullText: "Built on secure and transparent blockchain technology, ensuring trust and fairness for every transaction and interaction.",
      color: "cyan"
    },
    { 
      id: 1, 
      title: "Integrated", 
      icon: "🌐", 
      content: "Ecosystem Platform",
      fullText: "Seamlessly connects content creation, pet events, and commerce in one unified platform designed for pet lovers.",
      color: "teal"
    },
    { 
      id: 2, 
      title: "Global", 
      icon: "🤝", 
      content: "Connected Community",
      fullText: "Join thousands of pet owners worldwide, sharing experiences and creating value together in a connected community.",
      color: "coral"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Layered Sky Background */}
      <motion.div 
        style={{ y: skyY }}
        className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-cyan-200"
      />

      {/* Sun */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-sm opacity-80"
      />

      {/* Animated Clouds - Multiple Layers */}
      <motion.div style={{ y: cloudY1 }} className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              x: [0, 100, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20 + i * 5, 
              repeat: Infinity,
              delay: i * 2
            }}
            className="absolute text-6xl opacity-40"
            style={{ 
              top: `${10 + i * 15}%`, 
              left: `${10 + i * 20}%` 
            }}
          >
            ☁️
          </motion.div>
        ))}
      </motion.div>

      {/* Birds Flying */}
      <motion.div
        animate={{ 
          x: [-100, window.innerWidth + 100],
          y: [50, 100, 50]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 text-3xl pointer-events-none z-20"
      >
        🦜
      </motion.div>
      <motion.div
        animate={{ 
          x: [-150, window.innerWidth + 150],
          y: [80, 120, 80]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute top-40 text-2xl pointer-events-none z-20"
      >
        🕊️
      </motion.div>

      {/* Mountains Background */}
      <motion.div 
        style={{ y: mountainY }}
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
      >
        <svg viewBox="0 0 1200 200" className="w-full h-full opacity-40">
          <path d="M0,200 L0,100 L300,50 L600,120 L900,40 L1200,100 L1200,200 Z" 
                fill="url(#mountainGradient1)" />
          <path d="M0,200 L0,130 L200,80 L500,150 L800,70 L1200,140 L1200,200 Z" 
                fill="url(#mountainGradient2)" />
          <defs>
            <linearGradient id="mountainGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Cherry Blossom Trees */}
      <motion.div style={{ y: treeY }} className="absolute inset-0 pointer-events-none">
        {/* Left Tree */}
        <div className="absolute bottom-32 left-10">
          <motion.div
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div className="text-9xl">🌸</div>
            {/* Falling petals */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, 100],
                  x: [-10, 10, -10],
                  rotate: [0, 360],
                  opacity: [1, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  delay: i * 1.5
                }}
                className="absolute top-0 left-1/2 text-2xl"
              >
                🌸
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Tree */}
        <div className="absolute bottom-32 right-10">
          <motion.div
            animate={{ rotate: [0, -2, 0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <div className="text-9xl">🌸</div>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, 120],
                  x: [10, -10, 10],
                  rotate: [0, -360],
                  opacity: [1, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  delay: i * 2
                }}
                className="absolute top-0 right-1/2 text-2xl"
              >
                🌺
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Ground with Grass */}
      <motion.div 
        style={{ y: grassY }}
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-300 via-green-200 to-transparent"
      >
        {/* Flowers in grass */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 2 + i * 0.3, 
              repeat: Infinity,
              delay: i * 0.2
            }}
            className="absolute bottom-0 text-2xl"
            style={{ left: `${i * 7}%` }}
          >
            {['🌼', '🌸', '🌺', '🌻'][i % 4]}
          </motion.div>
        ))}
      </motion.div>

      {/* Walking Pets */}
      <motion.div
        style={{ 
          x: `${petsPosition.x}%`,
          y: petsPosition.y
        }}
        className="absolute bottom-32 text-4xl pointer-events-none z-30"
      >
        🐕
      </motion.div>
      <motion.div
        style={{ 
          x: `${(petsPosition.x - 20 + 100) % 100}%`,
          y: -petsPosition.y
        }}
        className="absolute bottom-36 text-4xl pointer-events-none z-30"
      >
        🐈
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-6xl mx-auto pt-10"
        >
          {/* Logo with Animated Pets */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: "spring", duration: 1 }}
            className="text-center mb-12 relative"
          >
            <div className="inline-block relative">
              {/* Pets jumping around logo */}
              {['🐕', '🐈', '🐰', '🦊'].map((pet, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -30, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute text-4xl"
                  style={{
                    top: i === 0 || i === 1 ? '-40px' : 'auto',
                    bottom: i === 2 || i === 3 ? '-40px' : 'auto',
                    left: i % 2 === 0 ? '-60px' : 'auto',
                    right: i % 2 === 1 ? '-60px' : 'auto',
                  }}
                >
                  {pet}
                </motion.div>
              ))}

              <h2 className="text-7xl md:text-9xl font-black text-coral-500 drop-shadow-2xl mb-4">
                K LOVE PET
              </h2>
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl md:text-4xl text-teal-600 font-bold"
              >
                🐾 Caring for Pets, Enriching Life 💕
              </motion.p>
            </div>
          </motion.div>

          {/* Interactive Fountain Card */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            className="relative mb-16"
          >
            {/* Fountain Animation */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -60, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="absolute text-3xl"
                  style={{ left: `${-20 + i * 10}px` }}
                >
                  💧
                </motion.div>
              ))}
              <div className="text-7xl">⛲</div>
            </div>

            <div className="bg-white/95 backdrop-blur-lg rounded-[4rem] p-12 md:p-16 shadow-2xl border-8 border-white">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
                Building a Global Ecosystem
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-coral-500 via-pink-500 to-rose-400 mt-2">
                  for Pet Lovers
                </span>
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                K-LovePet is a blockchain project that connects people and their pets through a transparent and fair ecosystem. We believe that every pet owner should have the opportunity to participate, share, and benefit from the value they help create.
              </p>
            </div>
          </motion.div>

          {/* Interactive Tabs */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl mb-16">
            {/* Tab Headers */}
            <div className="flex justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-2xl font-bold text-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-coral-400 to-pink-400 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-2xl mr-2">{tab.icon}</span>
                  {tab.title}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h4 className="text-3xl font-bold mb-4 text-gray-800">
                  {tabs[activeTab].content}
                </h4>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {tabs[activeTab].fullText}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats with Pet Icons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Animated background pets */}
            {['🐕', '🐈', '🐰', '🦊', '🐹', '🐦'].map((pet, i) => (
              <motion.div
                key={i}
                animate={{ 
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 10 + i,
                  repeat: Infinity,
                  delay: i * 2
                }}
                className="absolute text-5xl opacity-20"
                style={{
                  top: `${20 + i * 10}%`,
                  left: `${10 + i * 15}%`
                }}
              >
                {pet}
              </motion.div>
            ))}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              <AnimatedStat number="10K+" label="Pet Owners" icon="👥" delay={0} />
              <AnimatedStat number="50+" label="Countries" icon="🌍" delay={0.1} />
              <AnimatedStat number="100K+" label="Transactions" icon="💎" delay={0.2} />
              <AnimatedStat number="99%" label="Satisfaction" icon="⭐" delay={0.3} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedStat({ number, label, icon, delay }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring" }}
      whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
      className="text-center text-white cursor-pointer"
    >
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-4xl mb-3"
      >
        {icon}
      </motion.div>
      <div className="text-4xl md:text-5xl font-black mb-2 drop-shadow-lg">{number}</div>
      <div className="text-base md:text-lg font-bold opacity-90">{label}</div>
    </motion.div>
  );
}