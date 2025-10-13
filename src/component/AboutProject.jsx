// src/components/AboutProject.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AboutProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const features = [
    {
      icon: "🔗",
      title: "Transparent Blockchain Infrastructure",
      description: "Built on secure and transparent blockchain technology, ensuring trust and fairness for every transaction and interaction."
    },
    {
      icon: "🌐",
      title: "Integrated Ecosystem",
      description: "Seamlessly connects content creation, pet events, and commerce in one unified platform designed for pet lovers."
    },
    {
      icon: "🤝",
      title: "Global Community",
      description: "Join thousands of pet owners worldwide, sharing experiences and creating value together in a connected community."
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
              About Project
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900 dark:text-white leading-tight"
          >
            Building a Global Ecosystem
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              for Pet Lovers
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            K-LovePet is a blockchain project that connects people and their pets through a transparent and fair ecosystem. We believe that every pet owner should have the opportunity to participate, share, and benefit from the value they help create.
          </motion.p>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <StatItem number="10K+" label="Pet Owners" />
            <StatItem number="50+" label="Countries" />
            <StatItem number="100K+" label="Transactions" />
            <StatItem number="99%" label="Satisfaction" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ number, label }) {
  return (
    <motion.div 
      className="text-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-3xl md:text-4xl font-bold mb-2">{number}</div>
      <div className="text-sm md:text-base opacity-90">{label}</div>
    </motion.div>
  );
}