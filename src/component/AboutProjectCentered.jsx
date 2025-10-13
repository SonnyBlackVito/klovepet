// ============================================================
// VARIANT 1: Centered Content với Strong Blur
// ============================================================
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function AboutProjectCentered() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/park_night.png"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Centered Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto px-4"
      >
        {/* Main Card */}
        <div className="bg-white/15 backdrop-blur-3xl rounded-[4rem] p-12 md:p-20 shadow-2xl border-2 border-white/30">
          <div className="text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
                K LOVE PET
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8"></div>
            </motion.div>

            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Building a Global Ecosystem
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300 mt-2">
                for Pet Lovers
              </span>
            </motion.h3>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 leading-relaxed mb-12"
            >
              A blockchain project connecting people and pets through transparency and fairness
            </motion.p>

            {/* 3 Values Inline */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <ValueBadge icon="🔗" text="Transparent" />
              <ValueBadge icon="🌐" text="Integrated" />
              <ValueBadge icon="🤝" text="Global" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ValueBadge({ icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/30 cursor-pointer hover:bg-white/20 transition-all"
    >
      <div className="text-5xl mb-2">{icon}</div>
      <div className="text-xl font-bold text-white">{text}</div>
    </motion.div>
  );
}

// ============================================================
// VARIANT 2: Split Layout - Content Left/Right
// ============================================================

export function AboutProjectSplit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/park_night.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border-2 border-white/20 shadow-2xl">
              <span className="inline-block px-4 py-2 bg-cyan-500/30 text-cyan-200 rounded-full text-sm font-bold mb-6">
                About Project
              </span>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Building a Global Ecosystem
                <span className="block text-cyan-300 mt-2">for Pet Lovers</span>
              </h2>

              <p className="text-lg text-white/90 leading-relaxed mb-8">
                K-LovePet is a blockchain project that connects people and their pets through a transparent and fair ecosystem. We believe every pet owner should participate, share, and benefit.
              </p>

              <div className="space-y-4">
                <ValueRow icon="🔗" title="Transparent Blockchain" />
                <ValueRow icon="🌐" title="Integrated Ecosystem" />
                <ValueRow icon="🤝" title="Global Community" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <StatCard number="10K+" label="Pet Owners" gradient="from-cyan-500 to-teal-500" />
            <StatCard number="50+" label="Countries" gradient="from-teal-500 to-emerald-500" />
            <StatCard number="100K+" label="Transactions" gradient="from-emerald-500 to-green-500" />
            <StatCard number="99%" label="Satisfaction" gradient="from-green-500 to-cyan-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValueRow({ icon, title }) {
  return (
    <motion.div 
      whileHover={{ x: 10 }}
      className="flex items-center gap-4 text-white"
    >
      <span className="text-3xl">{icon}</span>
      <span className="text-lg font-semibold">{title}</span>
    </motion.div>
  );
}

function StatCard({ number, label, gradient }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-gradient-to-br ${gradient} p-6 rounded-2xl shadow-xl text-white text-center cursor-pointer`}
    >
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-sm opacity-90">{label}</div>
    </motion.div>
  );
}

// ============================================================
// VARIANT 3: Minimal Top Banner
// ============================================================

export function AboutProjectMinimal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/park_night.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
      </div>

      {/* Content - Top Third */}
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building a Global<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
              Pet Ecosystem
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mb-8">
            K-LovePet connects people and pets through blockchain transparency
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-white font-semibold">
              🔗 Transparent
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-white font-semibold">
              🌐 Integrated
            </span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-white font-semibold">
              🤝 Global
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-12 left-0 right-0 z-10"
      >
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-6 border border-white/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm opacity-80">Pet Owners</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-80">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100K+</div>
                <div className="text-sm opacity-80">Transactions</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm opacity-80">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================
// VARIANT 4: Full Screen với Scroll để reveal content
// ============================================================

export function AboutProjectFullScreen() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref} className="relative min-h-[200vh]">
      {/* Sticky Background */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <Image
          src="/images/park_night.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content that appears on scroll */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto px-4"
          >
            <div className="bg-white/10 backdrop-blur-3xl rounded-[4rem] p-16 border-2 border-white/30 shadow-2xl">
              <h2 className="text-6xl md:text-8xl font-bold text-center text-white mb-8">
                K LOVE PET
              </h2>
              
              <p className="text-2xl text-center text-white/90 mb-12 max-w-3xl mx-auto">
                Building a Global Ecosystem for Pet Lovers
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center text-white">
                  <div className="text-5xl mb-4">🔗</div>
                  <h3 className="text-xl font-bold mb-2">Transparent</h3>
                  <p className="text-sm opacity-80">Blockchain Infrastructure</p>
                </div>
                <div className="text-center text-white">
                  <div className="text-5xl mb-4">🌐</div>
                  <h3 className="text-xl font-bold mb-2">Integrated</h3>
                  <p className="text-sm opacity-80">Complete Ecosystem</p>
                </div>
                <div className="text-center text-white">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-2">Global</h3>
                  <p className="text-sm opacity-80">Connected Community</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}