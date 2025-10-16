"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Rocket,
  Target,
  Zap,
  Globe,
  Sparkles,
  CheckCircle2,
  Clock,
  Calendar,
  TrendingUp,
  Users,
  Award,
  Star,
  ArrowRight,
} from "lucide-react";

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
      icon: Rocket,
      color: "from-emerald-500 via-teal-500 to-cyan-500",
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
      icon: TrendingUp,
      color: "from-amber-500 via-orange-500 to-red-500",
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
      icon: Users,
      color: "from-purple-500 via-violet-500 to-fuchsia-500",
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
      icon: Zap,
      color: "from-pink-500 via-rose-500 to-red-500",
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
      icon: Globe,
      color: "from-blue-500 via-indigo-500 to-purple-500",
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
      icon: Star,
      color: "from-yellow-500 via-amber-500 to-orange-500",
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
        {/* Gradient Orbs */}
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
            className="text-center mb-16 md:mb-20">
            {/* Badge */}
            <h1
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#876046",
                textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                fontFamily: '"Luckiest Guy", cursive',
                lineHeight: "normal",
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl px-4 py-2 text-red-400 rounded-full font-semibold mb-4 text-center leading-tight">
              OUR JOURNEY
            </h1>
            {/* <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8
                bg-gradient-to-r from-amber-100 via-orange-100 to-red-100
                dark:from-amber-500/20 dark:via-orange-500/20 dark:to-red-500/20
                border-2 border-amber-300 dark:border-amber-700
                rounded-full backdrop-blur-sm shadow-lg">
              <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-bold bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent tracking-wider">
                OUR JOURNEY
              </span>

              <h1
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "#876046",
                  textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                  fontFamily: '"Luckiest Guy", cursive',
                  lineHeight: "normal",
                }}
                className=" text-8xl px-4 py-2  text-red-400 rounded-full  font-semibold mb-4">
                About K-LovePet
              </h1>
              <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </motion.div> */}

            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-wide">
              <span className="block drop-shadow-lg">ROADMAP TO</span>
              <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent drop-shadow-2xl">
                SUCCESS
              </span>
            </h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans"
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
              {/* Wave Line Container */}
              <div className="relative h-[800px] mb-10">
                {/* SVG Wave Background */}
                <svg
                  className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none"
                  viewBox="0 0 1400 200"
                  preserveAspectRatio="none"
                  style={{ height: "200px" }}>
                  {/* Background Wave */}
                  <path
                    d="M 0 100 Q 233 30, 466 100 T 932 100 T 1400 100"
                    stroke="rgba(217, 119, 6, 0.15)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="10 5"
                  />

                  {/* Main Wave */}
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

                      {/* Phase Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{
                          delay: 0.6 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className={`absolute left-1/2 -translate-x-1/2 ${
                          isTop ? "bottom-[-8px]" : "top-[-8px]"
                        } z-20`}
                        onMouseEnter={() => setHoveredPhase(index)}
                        onMouseLeave={() => setHoveredPhase(null)}>
                        <div className="relative">
                          {/* Glow */}
                          <motion.div
                            animate={{
                              scale: hoveredPhase === index ? [1, 1.3, 1] : 1,
                              opacity:
                                hoveredPhase === index ? [0.5, 0.8, 0.5] : 0.3,
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`absolute -inset-3 bg-gradient-to-br ${phase.color} rounded-full blur-xl`}
                          />

                          {/* Dot */}
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            className={`relative w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900 cursor-pointer`}>
                            <phase.icon
                              className="w-8 h-8 text-white"
                              strokeWidth={2.5}
                            />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Phase Card */}
                      <motion.div
                        initial={{ opacity: 0, y: isTop ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                        onMouseEnter={() => setHoveredPhase(index)}
                        onMouseLeave={() => setHoveredPhase(null)}
                        whileHover={{ y: isTop ? -10 : 10, scale: 1.05 }}
                        className={`${
                          isTop ? "pb-[170px]" : "pt-[170px]"
                        } cursor-pointer`}>
                        {/* Card Glow */}
                        <motion.div
                          animate={{
                            opacity: hoveredPhase === index ? 0.6 : 0,
                            scale: hoveredPhase === index ? 1.1 : 1,
                          }}
                          className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-3xl blur-2xl`}
                        />

                        {/* Card */}
                        <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-5 border-2 border-amber-200 dark:border-gray-700 shadow-2xl overflow-hidden">
                          {/* Decorative Corner */}
                          <div
                            className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${phase.color} opacity-10 rounded-bl-full`}
                          />

                          {/* Status Badge */}
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

                          {/* Quarter */}
                          <div className="text-xs font-black text-amber-600 dark:text-amber-400 tracking-widest mb-2">
                            {phase.quarter}
                          </div>

                          {/* Title */}
                          <h3
                            className={`text-lg font-black text-gray-900 dark:text-white mb-3 tracking-wide uppercase leading-tight`}>
                            {phase.title}
                          </h3>

                          {/* Progress */}
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

                          {/* Milestones */}
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

                          {/* Decorative Icon */}
                          <motion.div
                            animate={{
                              scale: hoveredPhase === index ? 1.1 : 1,
                              rotate: hoveredPhase === index ? 10 : 0,
                              opacity: hoveredPhase === index ? 0.15 : 0.08,
                            }}
                            className="absolute -bottom-2 -right-2">
                            <phase.icon className="w-16 h-16" strokeWidth={1} />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tablet View - 2 columns */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
              {roadmapPhases.map((phase, index) => {
                const StatusBadge = getStatusBadge(phase.status);
                return (
                  <motion.div
                    key={phase.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="relative">
                    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border-2 border-amber-200 dark:border-gray-700 shadow-xl">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            type: "spring",
                          }}
                          className="flex-shrink-0">
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-full blur-lg opacity-50`}
                            />
                            <div
                              className={`relative w-14 h-14 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center shadow-xl border-3 border-white dark:border-gray-900`}>
                              <phase.icon
                                className="w-7 h-7 text-white"
                                strokeWidth={2.5}
                              />
                            </div>
                          </div>
                        </motion.div>

                        <div className="flex-1">
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
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="mb-4">
                        <div className="flex justify-between mb-1.5">
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-bold">
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

                      {/* Milestones */}
                      <div className="space-y-2">
                        {phase.milestones.map((milestone, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div
                              className={`w-3.5 h-3.5 rounded-full ${
                                milestone.completed
                                  ? "bg-emerald-500"
                                  : "bg-gray-400"
                              }`}
                            />
                            <span
                              className="text-xs text-gray-700 dark:text-gray-300 font-semibold"
                              style={{ fontFamily: "system-ui" }}>
                              {milestone.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile View */}
            <div className="grid md:hidden gap-6">
              {roadmapPhases.map((phase, index) => {
                const StatusBadge = getStatusBadge(phase.status);

                return (
                  <motion.div
                    key={phase.id}
                    variants={itemVariants}
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
                        <div className="relative">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${phase.color} rounded-full blur-xl opacity-50`}
                          />
                          <div
                            className={`relative w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-900`}>
                            <phase.icon
                              className="w-8 h-8 text-white"
                              strokeWidth={2.5}
                            />
                          </div>
                        </div>
                      </motion.div>

                      <div className="flex-1 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-5 border-2 border-amber-200 dark:border-gray-700 shadow-xl">
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className={`${StatusBadge.color} ${StatusBadge.textColor} px-2 py-1 rounded-full flex items-center gap-1 text-xs font-black`}>
                            <StatusBadge.icon className="w-3 h-3" />
                            {StatusBadge.text}
                          </div>
                          <div className="text-xs font-bold text-amber-600">
                            {phase.quarter}
                          </div>
                        </div>

                        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                          {phase.title}
                        </h3>

                        <div className="mb-3">
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-gray-600 dark:text-gray-400">
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
                                className="text-xs text-gray-700 dark:text-gray-300"
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

          {/* CTA Section */}
          {/* <motion.div
            style={{
              backgroundImage: 'url("/images/banner_ecosystem.png")',
              backgroundSize: "fill",
              backgroundPosition: "center",
            }}
            variants={itemVariants}
            className="relative mt-10">
            <div className="relative bg-gradient-to-br  rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl border-4 border-white/20">
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                                     radial-gradient(circle at 80% 50%, white 2px, transparent 2px)`,
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>

              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 text-6xl opacity-20">
                🐾
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-8 left-8 text-6xl opacity-20">
                🐾
              </motion.div>

              <div className="relative z-10 text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1, rotate: [0, 360] } : {}}
                  transition={{ delay: 1.5, type: "spring", duration: 1 }}>
                  <Award
                    className="w-20 h-20 mx-auto mb-6 drop-shadow-2xl"
                    strokeWidth={2}
                  />
                </motion.div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-wider drop-shadow-lg uppercase">
                  JOIN OUR JOURNEY
                </h3>
                <p
                  className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto font-sans leading-relaxed"
                  style={{ fontFamily: "system-ui, sans-serif" }}>
                  Be part of something extraordinary. Together, we're building
                  the future of pet communities.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-5 bg-white text-gray-900 text-lg font-black rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 tracking-wider uppercase">
                    <span>Get Started</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}>
                      <ArrowRight className="w-6 h-6" strokeWidth={3} />
                    </motion.div>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white/20 backdrop-blur-xl text-white text-lg font-black rounded-full shadow-xl hover:bg-white/30 transition-all border-2 border-white/40 tracking-wider uppercase">
                    Learn More
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
