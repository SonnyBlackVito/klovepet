// ============================================================
// VARIANT 1: Cute & Playful với Illustrations
// ============================================================
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function AboutProjectCute() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-sky-100 via-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Cute decorative clouds */}
      <div className="absolute top-10 left-10 text-6xl opacity-20">☁️</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20">☁️</div>
      <div className="absolute bottom-10 left-1/4 text-4xl opacity-20">🌸</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo Style Header */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-black text-coral-500 mb-2 drop-shadow-lg">
              K LOVE PET
            </h2>
            <p className="text-xl md:text-2xl text-teal-600 font-semibold">
              Caring for Pets, Enriching Life
            </p>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-4 border-cyan-200 mb-16"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              K-LovePet is a blockchain project that connects people and their pets through a transparent and fair ecosystem. We believe that every pet owner should have the opportunity to participate, share, and benefit from the value they help create.
            </p>
          </motion.div>

          {/* 3 Values - Cute Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CuteValueCard
              emoji="🔗"
              title="Transparent"
              subtitle="Blockchain Infrastructure"
              bgColor="bg-cyan-100"
              borderColor="border-cyan-300"
              delay={0.3}
              isInView={isInView}
            />
            <CuteValueCard
              emoji="🌐"
              title="Integrated"
              subtitle="Content, Events, Commerce"
              bgColor="bg-teal-100"
              borderColor="border-teal-300"
              delay={0.4}
              isInView={isInView}
            />
            <CuteValueCard
              emoji="🤝"
              title="Global"
              subtitle="Connected Community"
              bgColor="bg-emerald-100"
              borderColor="border-emerald-300"
              delay={0.5}
              isInView={isInView}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CuteValueCard({ emoji, title, subtitle, bgColor, borderColor, delay, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      className={`${bgColor} ${borderColor} border-4 rounded-3xl p-6 shadow-lg cursor-pointer`}
    >
      <div className="text-6xl mb-3">{emoji}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{subtitle}</p>
    </motion.div>
  );
}

// ============================================================
// VARIANT 2: Korean Park Theme (giống hình)
// ============================================================

export function AboutProjectPark() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-sky-200 via-cyan-100 to-teal-100 relative overflow-hidden">
      {/* Park elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-200/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with pets */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="text-5xl">🐕</span>
              <h2 className="text-5xl md:text-6xl font-black text-coral-500 drop-shadow-lg">
                K LOVE PET
              </h2>
              <span className="text-5xl">🐈</span>
            </div>
            <p className="text-2xl text-teal-700 font-semibold mb-8">
              Building a Global Ecosystem for Pet Lovers
            </p>
          </motion.div>

          {/* Main content card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 border-4 border-white"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              K-LovePet is a blockchain project that connects people and their pets through a transparent and fair ecosystem. We believe that every pet owner should have the opportunity to participate, share, and benefit from the value they help create.
            </p>
          </motion.div>

          {/* Values in a row with icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🔗", title: "Transparent Blockchain", color: "from-cyan-400 to-sky-400" },
              { icon: "🌐", title: "Integrated Ecosystem", color: "from-teal-400 to-emerald-400" },
              { icon: "🤝", title: "Global Community", color: "from-coral-400 to-rose-400" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-white text-center shadow-xl cursor-pointer`}
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// VARIANT 3: Clean Modern với Gradient Accents
// ============================================================

export function AboutProjectModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: "🔗",
      title: "Transparent Blockchain Infrastructure",
      description: "Built on secure and transparent blockchain technology",
      accent: "bg-gradient-to-br from-cyan-400 to-teal-500"
    },
    {
      icon: "🌐", 
      title: "Integrated Ecosystem",
      description: "Content, events, and commerce unified in one platform",
      accent: "bg-gradient-to-br from-emerald-400 to-green-500"
    },
    {
      icon: "🤝",
      title: "Global Community", 
      description: "Join thousands of pet owners worldwide",
      accent: "bg-gradient-to-br from-coral-400 to-pink-500"
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-6 py-2 bg-gradient-to-r from-coral-100 to-pink-100 text-coral-600 rounded-full text-sm font-bold mb-6"
            >
              About K-LovePet
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Building a Global Ecosystem
              <span className="block bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">
                for Pet Lovers
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Connecting people and their pets through a transparent and fair blockchain ecosystem
            </motion.p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${feature.accent} rounded-t-2xl`}></div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 pt-10 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// VARIANT 4: Split Layout with Illustration Space
// ============================================================

export function AboutProjectSplit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-cyan-50 to-sky-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-coral-100 text-coral-600 rounded-full text-sm font-bold mb-6">
              🐾 About K-LovePet
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Building a Global Ecosystem{" "}
              <span className="text-coral-500">for Pet Lovers</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              K-LovePet is a blockchain project that connects people and their pets through a transparent and fair ecosystem. We believe that every pet owner should have the opportunity to participate, share, and benefit from the value they help create.
            </p>

            <div className="space-y-4">
              <ValueItem icon="🔗" title="Transparent Blockchain" desc="Secure and fair for everyone" />
              <ValueItem icon="🌐" title="Integrated Ecosystem" desc="Content, events, and commerce unified" />
              <ValueItem icon="🤝" title="Global Community" desc="Connected by shared values" />
            </div>
          </motion.div>

          {/* Right - Illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-200 to-teal-200 flex items-center justify-center overflow-hidden border-8 border-white shadow-2xl">
              {/* Placeholder cho illustration - có thể thay bằng Image */}
              <div className="text-center">
                <div className="text-8xl mb-4">🐕🐈</div>
                <div className="text-2xl font-bold text-teal-700">K LOVE PET</div>
                <div className="text-teal-600">Caring for Pets</div>
              </div>
            </div>
            
            {/* Floating pets */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
            >
              <span className="text-4xl">🐾</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
            >
              <span className="text-4xl">💕</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValueItem({ icon, title, desc }) {
  return (
    <motion.div 
      whileHover={{ x: 10 }}
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors"
    >
      <span className="text-3xl">{icon}</span>
      <div>
        <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}