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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
      gradient: "from-[#fef3c7] to-[#fecc00]",
    },
    {
      icon: "/images/NFT_ASSETIZATION.png",
      title: "NFT Assetization",
      subtitle: "Digital Ownership",
      description: "True ownership of digital assets and content",
      gradient: "from-[#fef3c7] to-[#fecc00]",
    },
    {
      icon: "/images/OPEN_MODEL.png",
      title: "Open Model",
      subtitle: "Inclusive Participation",
      description: "Everyone can participate and benefit equally",
      gradient: "from-[#fef3c7] to-[#fecc00]",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen relative"
      style={{
        fontFamily: "var(--font-luckiest-guy)",
        backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 50% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 80% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 100% 200px, #fef3c7, transparent)
      `,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      }}
      >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
              {/* Parrot - Positioned at top right, floating above */}
              <motion.div
                variants={itemVariants}
                className="absolute sm:-top-8 mg:-top-8 xl:-top-45 right-0 sm:right-8 md:right-16 lg:right-0 z-20">
                <motion.img
                  src="/images/parrot.png"
                  alt="Parrot"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0, -2, 0],
                    scaleY: [1, 0.90, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="z-50 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-160 xl:h-110 object-contain drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 10px 30px rgba(252, 252, 252, 0.3))",
                    transformOrigin: "center",
                  }}
                />
              </motion.div>

              {/* Main Content */}
              <div className="relative pt-20 sm:pt-24 md:pt-32 lg:pt-20">
                {/* Title - Left aligned, below parrot */}
                <motion.div variants={itemVariants} className="">
                  <h1
                    style={{
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "#876046",
                      textShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
                      fontFamily: '"Luckiest Guy", cursive',
                      lineHeight: "0.95",
                    }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F26457] font-semibold">
                    MARKET
                    <br />
                    ANALYSIS
                  </h1>
                </motion.div>

                {/* Subtitle - Bottom */}
                <motion.div variants={itemVariants}>
                  <h2
                    style={{
                      fontFamily: '"Luckiest Guy", cursive',
                      lineHeight: "1.2",
                    }}
                    className="text-xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold text-black uppercase">
                    A GROWING INDUSTRY LACKING TRANSPARENCY
                  </h2>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Market Size Card */}
          <motion.div
            style={{
              backgroundImage:
                'url("/images/Market Analysis_banner_center.png")',
              backgroundSize: "cover", 
              backgroundPosition: "center",
            }}
            variants={itemVariants}
            className="shrink-0  sm:h-[280px] md:h-[480px] lg:h-[480px] xl:h-[480px] bg-gradient-to-br rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 mb-8 md:mb-16 shadow-2xl relative overflow-hidden">
            {/* Decorative elements - ẩn trên mobile nhỏ */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center my-auto flex flex-col items-center justify-center h-full">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-block">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-[#3F9F39]  drop-shadow-2xl">
                  $300B
                </div>
                <div className="text-[#5B5B5B] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold  font-[SVN-Gilroy] mb-2">
                  Global Pet Industry 2024
                  <br />
                  Growing rapidly year over year
                </div>
                {/* <div className="text-[#5B5B5B] text-sm sm:text-base md:text-lg lg:text-xl font-[SVN-Gilroy] font-semibold">
                  Growing rapidly year over year
                </div> */}
              </motion.div>
              <motion.img
                src="/images/cat-chart.png"
                alt="Cat chart"
                // width={422}
                // height={328}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-92 xl:h-72 -top-8 sm:-top-12 md:-top-16 lg:-top-20 xl:-top-0 right-0 sm:right-4 md:right-8 xl:right-30 opacity-100"
              />
            </div>
          </motion.div>

          {/* Problems Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#876046",
                textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                fontFamily: '"Luckiest Guy", cursive',
                lineHeight: "normal",
              }}
              className="text-3xl md:text-4xl font-bold text-center text-amber-200 mb-4">
              But Behind That Growth...
            </h3>
            <p className="text-xl text-center text-gray-600  mb-12 max-w-3xl mx-auto">
              Unresolved problems preventing true value creation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white  rounded-2xl p-6 shadow-lg border-2 border-red-100  hover:border-red-300 dark:hover:border-red-700 transition-all cursor-pointer group">
                  <motion.img
                    src={problem.icon}
                    alt={problem.title}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-62 h-41 mb-4 mx-auto"
                  />
                  <h4 className="text-xl font-bold text-[#F26457]  mb-2 group-hover:text-[#F26457] transition-colors">
                    {problem.title}
                  </h4>
                  <p className=" text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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
              {/* <div className="pt-5 absolute -right-20 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-400 dark:text-gray-500">
                Our Solution
              </div> */}
            </div>
          </motion.div>
          <div className="flex justify-center mb-8">
            <motion.img
              src="/images/snake.png"
              className="
      w-[120px] h-[160px]        
      sm:w-[150px] sm:h-[200px]   /* >= 640px */
      md:w-[140px] md:h-[200px]   /* >= 768px */
      lg:w-[180px] lg:h-[260px]   /* >= 1024px */
      xl:w-[220px] xl:h-[300px]   /* >= 1280px */
    "
            />
          </div>

          {/* Solutions Section */}
          <motion.div variants={itemVariants}>
            <h3
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#876046",
                textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                fontFamily: '"Luckiest Guy", cursive',
                lineHeight: "normal",
              }}
              className="text-3xl md:text-4xl font-bold text-center text-amber-200 white:text-white  mb-12">
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
                  <div className="relative bg-white  rounded-3xl p-8 shadow-xl border-1 border-[#5EB658]   group-hover:border-[#5EB658] group-hover:border-2  transition-all overflow-hidden">
                    {/* Top accent */}
                    {/* <div
                      className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${solution.gradient}`}></div> */}

                    {/* Icon */}
                    <motion.img
                      src={solution.icon}
                      alt={solution.title}
                      // whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-62 h-41 mb-4 mx-auto"
                    />

                    {/* Content */}
                    <h4 className="text-2xl text-[#5EB658] font-bold   mb-2 text-center">
                      {solution.title}
                    </h4>
                    <p className="text-cyan-600  font-semibold mb-3 text-center">
                      {solution.subtitle}
                    </p>
                    <p className="text-gray-600  leading-relaxed text-center">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="text-center py-32 ">
            <div className="relative inline-block">
              <motion.img
                src="/images/snake_coil.png"
                className="absolute -top-24 right-1/2 translate-x-1/2 z-20  h-auto"
                width={273}
                hight={120}
                alt="Snake Coil"
              />
              <motion.button
                style={{
                  borderRadius: "99px",
                  background:
                    "linear-gradient(270deg, #F26457 0%, #FFDCD9 100%)",
                  display: "flex",
                  width: "352px",
                  height: "57px",
                  padding: "12px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flexShrink: 0,
                }}
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
                className="text-dark text-lg font-bold shadow-xl hover:shadow-2xl transition-all relative z-10 ">
                Learn More About Our Solution →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
