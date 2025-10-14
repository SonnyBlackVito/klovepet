// src/components/MarketProblem.jsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MarketProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const problems = [
    {
      icon: "/images/Opaque_Revenue.png",
      title: "Opaque Revenue",
      description:
        "Content creators don't see where their revenue goes or how it's calculated",
    },
    {
      icon: "/images/Weak_Competition.png",
      title: "Weak Competition",
      description:
        "Small businesses struggle to compete with large platforms and middlemen",
    },
    {
      icon: "/images/Unfair_Voting.png",
      title: "Unfair Voting",
      description:
        "Event voting systems lack transparency and can be easily manipulated",
    },
    {
      icon: "/images/No_Rewards.png",
      title: "No Rewards",
      description:
        "Community members contribute value but receive no meaningful rewards",
    },
  ];

  const solutions = [
    {
      icon: "/images/FULL_TRANSPARENCY.png",
      title: "Full Transparency",
      subtitle: "Through Blockchain",
      description: "Every transaction visible and verifiable on-chain",
      gradient: "from-cyan-400 to-sky-400",
    },
    {
      icon: "/images/NFT_ASSETIZATION.png",
      title: "NFT Assetization",
      subtitle: "Digital Ownership",
      description: "True ownership of digital assets and content",
      gradient: "from-teal-400 to-emerald-400",
    },
    {
      icon: "/images/OPEN_MODEL.png",
      title: "Open Model",
      subtitle: "Inclusive Participation",
      description: "Everyone can participate and benefit equally",
      gradient: "from-coral-400 to-pink-400",
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        fontFamily: "var(--font-luckiest-guy)",
        backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 50% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 80% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 100% 200px, #fef3c7, transparent)
      `,
      }}
      className="py-20 md:py-32  ">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            {/* <h1 className="inline-block text-red-400  text-6xl px-6 py-3 font-bold mb-6">
              Market Analysis
            </h1> */}

        <h1
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#876046",
            textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: '"Luckiest Guy", cursive',
            lineHeight: "normal",
          }}
          className=" text-8xl px-4 py-2  text-red-400 rounded-full  font-semibold mb-4">
          Market Analysis
        </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
              A Growing Industry
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-coral-500 via-pink-500 to-rose-400 mt-2">
                Lacking Transparency
              </span>
            </h2>
          </motion.div>

          {/* Market Size Card */}
          <motion.div
            style={{
              backgroundImage:
                'url("/images/Market Analysis_banner_center.png")',
              backgroundSize: "fill",
              backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              // backgroundAttachment: "fixed",
            }}
            variants={itemVariants}
            className="bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 rounded-[3rem] p-12 md:p-16 mb-16 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-block">
                <div className="text-7xl md:text-9xl font-black text-[#b9ed51]  mb-4 drop-shadow-2xl">
                  $300B 📈
                </div>
                <div className="text-red-400 text-2xl md:text-3xl font-bold  mb-2">
                  Global Pet Industry 2024
                </div>
                <div className="text-lg md:text-xl text-black">
                  Growing rapidly year over year
                </div>
              </motion.div>

              {/* Growth indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-8 flex justify-center items-center gap-2 text-white">
                <span className="text-3xl">📈</span>
                <span className="text-xl text-cyan-300 font-semibold">
                  Continuous Growth
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Problems Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-amber-200 dark:text-white mb-4">
              But Behind That Growth...
            </h3>
            <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Unresolved problems preventing true value creation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-red-100 dark:border-red-900/30 hover:border-red-300 dark:hover:border-red-700 transition-all cursor-pointer group">
                  <motion.img
                    src={problem.icon}
                    alt={problem.title}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-40 h-40 mb-4 mx-auto"
                  />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors">
                    {problem.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow Transition */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12">
            <div className=" flex flex-col">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl">
                ⬇️
              </motion.div>
              {/* <div className="pt-5 absolute -right-20 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-400 dark:text-gray-500">
                Our Solution
              </div> */}
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 white:text-white dark:text-white mb-12">
              K-LovePet's Approach
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -15, rotateY: 5 }}
                  className="relative group"
                  style={{ transformStyle: "preserve-3d" }}>
                  {/* Glow effect */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity`}></motion.div>

                  {/* Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-2 border-gray-100 dark:border-gray-700 group-hover:border-cyan-300 dark:group-hover:border-cyan-600 transition-all overflow-hidden">
                    {/* Top accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${solution.gradient}`}></div>

                    {/* Icon */}
                    <motion.img
                      src={solution.icon}
                      alt={solution.title}
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-40 h-40 mb-4 mx-auto"
                    />

                    {/* Content */}
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                      {solution.title}
                    </h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-3 text-center">
                      {solution.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      {solution.description}
                    </p>

                    {/* Checkmark */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      className="absolute top-6 right-6 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                      ✓
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-coral-500 to-pink-500 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all">
              Learn More About Our Solution →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
