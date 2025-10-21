"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2, Clock, Calendar } from "lucide-react";

// SVG Component cho Dog Mascot
const DogMascotSVG = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="68"
    height="68"
    viewBox="0 0 68 68"
    fill="none"
    className={className}>
    <path
      d="M53.2213 27.2145C48.8657 24.5841 41.5701 24.2797 38.5212 28.8232C37.6066 30.3015 37.171 31.9754 36.1475 32.0624C35.2981 32.2363 33.9262 31.3667 32.4453 30.758C21.8612 26.6058 13.4549 38.9538 17.2225 47.5191C19.4874 54.3017 25.4545 58.9539 31.7048 62.454C35.995 64.9105 42.0928 68.4758 46.4484 65.9975L46.7316 65.8236C56.1832 58.5844 64.9596 34.932 53.2213 27.2145Z"
      fill="#B7896B"
    />
    <path
      d="M14.8272 37.4536C16.8526 35.3015 16.3953 31.584 13.8255 29.1927C11.2557 26.7796 7.50987 26.584 5.5063 28.7579C3.50274 30.9319 3.93834 34.6275 6.50813 37.0189C9.07792 39.4319 12.8237 39.6276 14.8272 37.4536Z"
      fill="#B7896B"
    />
    <path
      d="M23.6686 27.1707C27.2838 25.6489 28.6558 20.7358 26.7175 16.1923C24.8011 11.6705 20.293 9.23571 16.6997 10.7575C13.0846 12.2792 11.7126 17.1923 13.6508 21.7358C15.5672 26.2576 20.0753 28.6924 23.6686 27.1707Z"
      fill="#B7896B"
    />
    <path
      d="M55.4643 12.7578C52.5679 12.1273 49.6061 14.3882 48.8439 17.823C48.0817 21.2579 49.8021 24.5622 52.6985 25.2144C55.595 25.8666 58.5568 23.584 59.319 20.1492C60.0813 16.7143 58.3608 13.41 55.4643 12.7578Z"
      fill="#B7896B"
    />
    <path
      d="M38.7617 21.9533C42.6599 21.4316 45.2732 17.062 44.6417 12.1923C43.9883 7.32273 40.3079 3.77923 36.4314 4.30097C32.5332 4.82271 29.9198 9.19232 30.5514 14.0619C31.1829 18.9315 34.8852 22.4751 38.7617 21.9533Z"
      fill="#B7896B"
    />
  </svg>
);

// SVG Component tối giản với icon con chó - Màu cam
const RoadmapPhaseSVG = ({ phase, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}>
      {/* Background circle - đơn giản, chỉ 1 màu */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        fill="#f5f5f5"
        className="dark:fill-gray-800"
      />
      <circle 
        cx="50" 
        cy="50" 
        r="25" 
        fill="#ffffff"
        className="dark:fill-gray-700"
      />
      
      {/* Dog Icon màu cam */}
      <g transform="translate(34, 34) scale(0.47)">
        <path
          d="M53.2213 27.2145C48.8657 24.5841 41.5701 24.2797 38.5212 28.8232C37.6066 30.3015 37.171 31.9754 36.1475 32.0624C35.2981 32.2363 33.9262 31.3667 32.4453 30.758C21.8612 26.6058 13.4549 38.9538 17.2225 47.5191C19.4874 54.3017 25.4545 58.9539 31.7048 62.454C35.995 64.9105 42.0928 68.4758 46.4484 65.9975L46.7316 65.8236C56.1832 58.5844 64.9596 34.932 53.2213 27.2145Z"
          fill="#f97316"
        />
        <path
          d="M14.8272 37.4536C16.8526 35.3015 16.3953 31.584 13.8255 29.1927C11.2557 26.7796 7.50987 26.584 5.5063 28.7579C3.50274 30.9319 3.93834 34.6275 6.50813 37.0189C9.07792 39.4319 12.8237 39.6276 14.8272 37.4536Z"
          fill="#f97316"
        />
        <path
          d="M23.6686 27.1707C27.2838 25.6489 28.6558 20.7358 26.7175 16.1923C24.8011 11.6705 20.293 9.23571 16.6997 10.7575C13.0846 12.2792 11.7126 17.1923 13.6508 21.7358C15.5672 26.2576 20.0753 28.6924 23.6686 27.1707Z"
          fill="#f97316"
        />
        <path
          d="M55.4643 12.7578C52.5679 12.1273 49.6061 14.3882 48.8439 17.823C48.0817 21.2579 49.8021 24.5622 52.6985 25.2144C55.595 25.8666 58.5568 23.584 59.319 20.1492C60.0813 16.7143 58.3608 13.41 55.4643 12.7578Z"
          fill="#f97316"
        />
        <path
          d="M38.7617 21.9533C42.6599 21.4316 45.2732 17.062 44.6417 12.1923C43.9883 7.32273 40.3079 3.77923 36.4314 4.30097C32.5332 4.82271 29.9198 9.19232 30.5514 14.0619C31.1829 18.9315 34.8852 22.4751 38.7617 21.9533Z"
          fill="#f97316"
        />
      </g>
    </svg>
  );
};

export default function RoadMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredPhase, setHoveredPhase] = useState(null);

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
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const roadmapPhases = [
    {
      id: "phase1",
      quarter: "Q4 2024",
      title: "Foundation",
      status: "completed",
      color: "from-emerald-300 via-teal-400 to-cyan-500",
      darkColor: "from-emerald-400 via-teal-400 to-cyan-400",
      progress: 100,
      position: "top",
      milestones: [
        { text: "Platform Design", completed: true },
        { text: "Smart Contracts", completed: true },
        { text: "Beta Testing", completed: true },
      ],
    },
    {
      id: "phase2",
      quarter: "Q1 2025",
      title: "Expansion",
      status: "in-progress",
      color: "from-amber-400 via-orange-500 to-red-400",
      darkColor: "from-amber-400 via-orange-400 to-red-400",
      progress: 65,
      position: "bottom",
      milestones: [
        { text: "Broadcasting Launch", completed: true },
        { text: "NFT Marketplace", completed: true },
        { text: "Mobile App", completed: false },
      ],
    },
    {
      id: "phase3",
      quarter: "Q2 2025",
      title: "Growth",
      status: "in-progress",
      color: "from-indigo-400 via-purple-500 to-fuchsia-500",
      darkColor: "from-purple-400 via-violet-400 to-fuchsia-400",
      progress: 30,
      position: "top",
      milestones: [
        { text: "Global Marketing", completed: false },
        { text: "Audition Platform", completed: false },
        { text: "DAO Governance", completed: false },
      ],
    },
    {
      id: "phase4",
      quarter: "Q3 2025",
      title: "Gaming",
      status: "upcoming",
      color: "from-pink-400 via-rose-500 to-red-500",
      darkColor: "from-pink-400 via-rose-400 to-red-400",
      progress: 0,
      position: "bottom",
      milestones: [
        { text: "Game Launch", completed: false },
        { text: "Play-to-Earn", completed: false },
        { text: "Tournaments", completed: false },
      ],
    },
    {
      id: "phase5",
      quarter: "Q4 2025",
      title: "Global",
      status: "upcoming",
      color: "from-sky-400 via-blue-500 to-indigo-500",
      darkColor: "from-blue-400 via-indigo-400 to-purple-400",
      progress: 0,
      position: "top",
      milestones: [
        { text: "Multi-Language", completed: false },
        { text: "Partnerships", completed: false },
        { text: "Metaverse", completed: false },
      ],
    },
    {
      id: "phase6",
      quarter: "2026+",
      title: "Future",
      status: "upcoming",
      color: "from-lime-400 via-emerald-400 to-teal-500",
      darkColor: "from-yellow-400 via-amber-400 to-orange-400",
      progress: 0,
      position: "bottom",
      milestones: [
        { text: "AI Features", completed: false },
        { text: "VR/AR", completed: false },
        { text: "Innovation", completed: false },
      ],
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      completed: {
        icon: CheckCircle2,
        text: "COMPLETED",
        color: "bg-emerald-500 dark:bg-emerald-600",
        textColor: "text-white",
      },
      "in-progress": {
        icon: Clock,
        text: "IN PROGRESS",
        color: "bg-amber-500 dark:bg-amber-600",
        textColor: "text-white",
      },
      upcoming: {
        icon: Calendar,
        text: "UPCOMING",
        color: "bg-gray-400 dark:bg-gray-600",
        textColor: "text-white",
      },
    };
    return badges[status];
  };

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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-r from-amber-400/20 to-orange-500/20 dark:from-amber-600/20 dark:to-orange-700/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-l from-purple-400/20 to-pink-500/20 dark:from-purple-600/20 dark:to-pink-700/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="relative text-center mb-16 md:mb-20">
            <h1
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#876046",
                textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                fontFamily: '"Luckiest Guy", cursive',
                lineHeight: "normal",
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl px-4 py-2 text-[#F26457] rounded-full font-semibold mb-4 text-center leading-tight">
              OUR JOURNEY
            </h1>

            {/* Dog Mascot SVG */}
            <motion.div
              className="
                absolute z-0
                w-[200px] h-[130px]
                sm:w-[300px] sm:h-[200px]
                md:w-[400px] md:h-[270px]
                lg:w-[500px] lg:h-[330px]
                xl:w-[567px] xl:h-[378px]
                -right-13 sm:-right-2 md:-right-6 lg:-right-8
                -top-10 sm:-top-16 md:-top-24 lg:-top-32
              ">
              {/* <DogMascotSVG className="w-full h-full" /> */}
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-wide">
              <span className="block drop-shadow-lg">ROADMAP TO</span>
              <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent drop-shadow-2xl">
                SUCCESS
              </span>
            </h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-sans"
              style={{ fontFamily: "system-ui, sans-serif" }}>
              Follow our journey as we build the future of
              <span className="font-bold text-transparent bg-gradient-to-r from-amber-700 to-orange-700 dark:from-amber-400 dark:to-orange-400 bg-clip-text">
                {" "}
                pet-loving communities{" "}
              </span>
              worldwide
            </motion.p>
          </motion.div>

          {/* Horizontal Timeline Container */}
          <div className="relative mb-20">
            {/* Desktop View */}
            <div className="hidden lg:block">
              <div className="relative h-[800px] mb-10">
                {/* SVG Wave Background */}
                <svg
                  className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none"
                  viewBox="0 0 1400 200"
                  preserveAspectRatio="none"
                  style={{ height: "200px" }}>
                  <path
                    d="M 0 100 Q 233 30, 466 100 T 932 100 T 1400 100"
                    stroke="rgba(217, 119, 6, 0.15)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="10 5"
                  />
                  <motion.path
                    d="M 0 100 Q 233 30, 466 100 T 932 100 T 1400 100"
                    stroke="url(#roadmapGradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 0.35 } : {}}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient
                      id="roadmapGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="35%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d1d5db" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Phases positioned absolutely */}
                {roadmapPhases.map((phase, index) => {
                  const StatusBadge = getStatusBadge(phase.status);
                  const leftPosition =
                    (100 / (roadmapPhases.length + 1)) * (index + 1);
                  const isTop = phase.position === "top";

                  return (
                    <div
                      key={phase.id}
                      className="absolute"
                      style={{
                        left: `${leftPosition}%`,
                        top: isTop ? "0" : "auto",
                        bottom: isTop ? "auto" : "0",
                        transform: "translateX(-50%)",
                        width: "220px",
                      }}>
                      {/* Connecting Line */}
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                        className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b ${
                          phase.color
                        } ${
                          isTop ? "bottom-0 origin-bottom" : "top-0 origin-top"
                        }`}
                        style={{ height: "150px" }}
                      />

                      {/* Phase Dot - SVG tối giản */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{
                          delay: 0.6 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className={`absolute left-1/2 -translate-x-1/2 ${
                          isTop ? "bottom-[-12px]" : "top-[-12px]"
                        } z-20`}
                        onMouseEnter={() => setHoveredPhase(index)}
                        onMouseLeave={() => setHoveredPhase(null)}>
                        <div className="relative">
                          <motion.div
                            animate={{
                              scale: hoveredPhase === index ? [1, 1.3, 1] : 1,
                              opacity:
                                hoveredPhase === index ? [0.5, 0.8, 0.5] : 0.3,
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`absolute   `}
                          />
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="relative w-32 h-32 cursor-pointer">
                            <RoadmapPhaseSVG
                              phase={phase.id}
                              className="w-full h-full "
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Phase Card với màu sắc gradient */}
                      <motion.div
                        initial={{ opacity: 0, y: isTop ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                        onMouseEnter={() => setHoveredPhase(index)}
                        onMouseLeave={() => setHoveredPhase(null)}
                        whileHover={{ y: isTop ? -10 : 10, scale: 1.05 }}
                        className={`${
                          isTop ? "pb-[180px]" : "pt-[180px]"
                        } cursor-pointer`}>
                        <motion.div
                          animate={{
                            opacity: hoveredPhase === index ? 0.6 : 0,
                            scale: hoveredPhase === index ? 1.1 : 1,
                          }}
                          className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-3xl blur-2xl`}
                        />

                        <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-5 border-2 border-amber-200 dark:border-gray-700 shadow-2xl overflow-hidden">
                          <div
                            className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${phase.color} opacity-10 rounded-bl-full`}
                          />

                          <div className="flex items-center justify-between mb-3">
                            <div
                              className={`${StatusBadge.color} ${StatusBadge.textColor} px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg`}>
                              <StatusBadge.icon
                                className="w-3.5 h-3.5"
                                strokeWidth={2.5}
                              />
                              <span className="text-[10px] font-black tracking-wider">
                                {StatusBadge.text}
                              </span>
                            </div>
                          </div>

                          <div className="text-xs font-black text-amber-600 dark:text-amber-400 tracking-widest mb-2">
                            {phase.quarter}
                          </div>

                          <h3 className="text-lg font-black text-gray-900 dark:text-white mb-3 tracking-wide uppercase leading-tight">
                            {phase.title}
                          </h3>

                          <div className="mb-3">
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase">
                                Progress
                              </span>
                              <span className="text-sm font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                {phase.progress}%
                              </span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={
                                  isInView
                                    ? { width: `${phase.progress}%` }
                                    : {}
                                }
                                transition={{
                                  duration: 1.5,
                                  delay: 1.3 + index * 0.1,
                                  ease: "easeOut",
                                }}
                                className={`h-full bg-gradient-to-r ${phase.color} rounded-full shadow-lg`}
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            {phase.milestones.map((milestone, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                  delay: 1.5 + index * 0.1 + i * 0.05,
                                }}
                                className="flex items-center gap-2">
                                <div
                                  className={`flex-shrink-0 w-3.5 h-3.5 rounded-full flex items-center justify-center ${
                                    milestone.completed
                                      ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                                      : "bg-gray-300 dark:bg-gray-600"
                                  }`}>
                                  {milestone.completed && (
                                    <CheckCircle2
                                      className="w-2 h-2 text-white"
                                      strokeWidth={3}
                                    />
                                  )}
                                </div>
                                <span
                                  className={`text-[11px] font-semibold ${
                                    milestone.completed
                                      ? "text-gray-900 dark:text-white"
                                      : "text-gray-500 dark:text-gray-400"
                                  }`}
                                  style={{
                                    fontFamily: "system-ui, sans-serif",
                                  }}>
                                  {milestone.text}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Watermark SVG tối giản */}
                          <motion.div
                            animate={{
                              scale: hoveredPhase === index ? 1.1 : 1,
                              rotate: hoveredPhase === index ? 10 : 0,
                              opacity: hoveredPhase === index ? 0.15 : 0.08,
                            }}
                            className="absolute -bottom-3 -right-3 w-24 h-24">
                            <RoadmapPhaseSVG
                              phase={phase.id}
                              className="w-full h-full opacity-50"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile & Tablet Views */}
            <div className="grid lg:hidden gap-6 max-w-2xl mx-auto">
              {roadmapPhases.map((phase, index) => {
                const StatusBadge = getStatusBadge(phase.status);

                return (
                  <motion.div
                    key={phase.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="relative">
                    <div className="flex gap-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                        }}
                        className="flex-shrink-0">
                        <div className="w-20 h-20">
                          <RoadmapPhaseSVG
                            phase={phase.id}
                            className="w-full h-full drop-shadow-lg"
                          />
                        </div>
                      </motion.div>

                      <div className="flex-1 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-5 border-2 border-amber-200 dark:border-gray-700 shadow-xl">
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className={`${StatusBadge.color} ${StatusBadge.textColor} px-2 py-1 rounded-full flex items-center gap-1 text-xs font-black`}>
                            <StatusBadge.icon className="w-3 h-3" />
                            {StatusBadge.text}
                          </div>
                          <div className="text-xs font-bold text-amber-600 dark:text-amber-400">
                            {phase.quarter}
                          </div>
                        </div>

                        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                          {phase.title}
                        </h3>

                        <div className="mb-3">
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                              Progress
                            </span>
                            <span className="text-sm font-black text-gray-900 dark:text-white">
                              {phase.progress}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={
                                isInView ? { width: `${phase.progress}%` } : {}
                              }
                              transition={{
                                duration: 1.5,
                                delay: 1 + index * 0.1,
                              }}
                              className={`h-full bg-gradient-to-r ${phase.color}`}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          {phase.milestones.map((milestone, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div
                                className={`w-3 h-3 rounded-full ${
                                  milestone.completed
                                    ? "bg-emerald-500"
                                    : "bg-gray-400"
                                }`}
                              />
                              <span
                                className="text-xs text-gray-700 dark:text-gray-300 font-medium"
                                style={{ fontFamily: "system-ui" }}>
                                {milestone.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}