'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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
  Star
} from 'lucide-react';

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
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const roadmapPhases = [
    {
      id: 'phase1',
      quarter: 'Q4 2024',
      title: 'Foundation & Launch',
      status: 'completed',
      icon: Rocket,
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      darkColor: 'from-emerald-400 via-teal-400 to-cyan-400',
      progress: 100,
      milestones: [
        { text: 'Platform Architecture Design', completed: true },
        { text: 'Smart Contract Development', completed: true },
        { text: 'Beta Testing Program', completed: true },
        { text: 'Community Building', completed: true }
      ]
    },
    {
      id: 'phase2',
      quarter: 'Q1 2025',
      title: 'Ecosystem Expansion',
      status: 'in-progress',
      icon: TrendingUp,
      color: 'from-amber-500 via-orange-500 to-red-500',
      darkColor: 'from-amber-400 via-orange-400 to-red-400',
      progress: 65,
      milestones: [
        { text: 'Pet Broadcasting Launch', completed: true },
        { text: 'NFT Marketplace Integration', completed: true },
        { text: 'Mobile App Development', completed: false },
        { text: 'Strategic Partnerships', completed: false }
      ]
    },
    {
      id: 'phase3',
      quarter: 'Q2 2025',
      title: 'Community Growth',
      status: 'in-progress',
      icon: Users,
      color: 'from-purple-500 via-violet-500 to-fuchsia-500',
      darkColor: 'from-purple-400 via-violet-400 to-fuchsia-400',
      progress: 30,
      milestones: [
        { text: 'Global Marketing Campaign', completed: false },
        { text: 'Pet Audition Platform', completed: false },
        { text: 'Staking & Rewards System', completed: false },
        { text: 'DAO Governance Launch', completed: false }
      ]
    },
    {
      id: 'phase4',
      quarter: 'Q3 2025',
      title: 'Gaming Integration',
      status: 'upcoming',
      icon: Zap,
      color: 'from-pink-500 via-rose-500 to-red-500',
      darkColor: 'from-pink-400 via-rose-400 to-red-400',
      progress: 0,
      milestones: [
        { text: 'Running Hunters Game Launch', completed: false },
        { text: 'Play-to-Earn Mechanics', completed: false },
        { text: 'Cross-Platform Integration', completed: false },
        { text: 'Tournament System', completed: false }
      ]
    },
    {
      id: 'phase5',
      quarter: 'Q4 2025',
      title: 'Global Expansion',
      status: 'upcoming',
      icon: Globe,
      color: 'from-blue-500 via-indigo-500 to-purple-500',
      darkColor: 'from-blue-400 via-indigo-400 to-purple-400',
      progress: 0,
      milestones: [
        { text: 'Multi-Language Support', completed: false },
        { text: 'Regional Partnerships', completed: false },
        { text: 'Enterprise Solutions', completed: false },
        { text: 'Metaverse Integration', completed: false }
      ]
    },
    {
      id: 'phase6',
      quarter: '2026+',
      title: 'Innovation & Beyond',
      status: 'upcoming',
      icon: Star,
      color: 'from-yellow-500 via-amber-500 to-orange-500',
      darkColor: 'from-yellow-400 via-amber-400 to-orange-400',
      progress: 0,
      milestones: [
        { text: 'AI-Powered Features', completed: false },
        { text: 'VR/AR Experiences', completed: false },
        { text: 'Blockchain Interoperability', completed: false },
        { text: 'Continuous Innovation', completed: false }
      ]
    }
  ];

  const getStatusBadge = (status) => {
    const badges = {
      'completed': {
        icon: CheckCircle2,
        text: 'COMPLETED',
        color: 'bg-emerald-500 dark:bg-emerald-600',
        textColor: 'text-white'
      },
      'in-progress': {
        icon: Clock,
        text: 'IN PROGRESS',
        color: 'bg-amber-500 dark:bg-amber-600',
        textColor: 'text-white'
      },
      'upcoming': {
        icon: Calendar,
        text: 'UPCOMING',
        color: 'bg-gray-400 dark:bg-gray-600',
        textColor: 'text-white'
      }
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
        backgroundColor: '#ffffff'
      }}
    >
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

        {/* Floating Emojis */}
        {['🚀', '🎯', '⭐', '🏆', '💎', '🌟'].map((emoji, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: typeof window !== 'undefined' ? window.innerHeight : 800,
              scale: 0
            }}
            animate={{
              y: -100,
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(217, 119, 6, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8
                bg-gradient-to-r from-amber-100 via-orange-100 to-red-100
                dark:from-amber-500/20 dark:via-orange-500/20 dark:to-red-500/20
                border-2 border-amber-300 dark:border-amber-700
                rounded-full backdrop-blur-sm shadow-lg"
            >
              <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-bold bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent tracking-wider">
                OUR JOURNEY
              </span>
              <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </motion.div>

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
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Follow our journey as we build the future of 
              <span className="font-bold text-transparent bg-gradient-to-r from-amber-700 to-orange-700 dark:from-amber-400 dark:to-orange-400 bg-clip-text"> pet-loving communities </span>
              worldwide
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-orange-400 to-red-500 dark:from-amber-600 dark:via-orange-600 dark:to-red-700 rounded-full hidden md:block" />
            
            {/* Mobile Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-orange-400 to-red-500 dark:from-amber-600 dark:via-orange-600 dark:to-red-700 rounded-full md:hidden" />

            {/* Progress Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '35%' } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-emerald-500 to-amber-500 rounded-full z-10 shadow-lg"
            />

            {/* Phases */}
            <div className="space-y-12 md:space-y-16">
              {roadmapPhases.map((phase, index) => {
                const StatusBadge = getStatusBadge(phase.status);
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={phase.id}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20"
                    >
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} blur-xl opacity-60 animate-pulse`} />
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900`}>
                          <phase.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      onHoverStart={() => setHoveredPhase(index)}
                      onHoverEnd={() => setHoveredPhase(null)}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`w-full md:w-[calc(50%-4rem)] ml-24 md:ml-0 ${
                        isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                      }`}
                    >
                      <div className="relative group">
                        {/* Glow Effect */}
                        <motion.div
                          animate={{
                            opacity: hoveredPhase === index ? 0.5 : 0,
                            scale: hoveredPhase === index ? 1.05 : 1
                          }}
                          className={`absolute -inset-1 bg-gradient-to-br ${phase.color} rounded-3xl blur-xl`}
                        />

                        {/* Card */}
                        <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-amber-200 dark:border-gray-700 shadow-xl overflow-hidden">
                          {/* Decorative Corner */}
                          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${phase.color} opacity-10 rounded-bl-full`} />

                          {/* Status Badge */}
                          <div className="flex items-center justify-between mb-4">
                            <div className={`${StatusBadge.color} ${StatusBadge.textColor} px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg`}>
                              <StatusBadge.icon className="w-4 h-4" strokeWidth={2.5} />
                              <span className="text-xs font-black tracking-wider">{StatusBadge.text}</span>
                            </div>
                            <div className="text-sm font-bold text-amber-600 dark:text-amber-400 tracking-wider">
                              {phase.quarter}
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className={`text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-wide uppercase group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${phase.color} group-hover:bg-clip-text transition-all`}>
                            {phase.title}
                          </h3>

                          {/* Progress Bar */}
                          <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Progress</span>
                              <span className="text-sm font-black text-gray-900 dark:text-white">{phase.progress}%</span>
                            </div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${phase.progress}%` } : {}}
                                transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                                className={`h-full bg-gradient-to-r ${phase.color} rounded-full shadow-lg`}
                              />
                            </div>
                          </div>

                          {/* Milestones */}
                          <div className="space-y-3">
                            {phase.milestones.map((milestone, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 1 + index * 0.1 + i * 0.05 }}
                                className="flex items-start gap-3 group/item"
                              >
                                <div className={`flex-shrink-0 w-5 h-5 mt-0.5 rounded-full flex items-center justify-center ${
                                  milestone.completed 
                                    ? 'bg-emerald-500 dark:bg-emerald-600' 
                                    : 'bg-gray-300 dark:bg-gray-600'
                                }`}>
                                  {milestone.completed && (
                                    <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                                  )}
                                </div>
                                <span className={`text-sm font-semibold ${
                                  milestone.completed 
                                    ? 'text-gray-900 dark:text-white' 
                                    : 'text-gray-500 dark:text-gray-400'
                                } group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400 transition-colors`}
                                  style={{ fontFamily: 'system-ui, sans-serif' }}
                                >
                                  {milestone.text}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* Icon Decoration */}
                          <motion.div
                            animate={{
                              scale: hoveredPhase === index ? 1.1 : 1,
                              rotate: hoveredPhase === index ? [0, -5, 5, 0] : 0
                            }}
                            className="absolute bottom-4 right-4 opacity-10 dark:opacity-5"
                          >
                            <phase.icon className="w-24 h-24" strokeWidth={1} />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="relative mt-20"
          >
            <div className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl border-4 border-white/20">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                                   radial-gradient(circle at 80% 50%, white 2px, transparent 2px)`,
                  backgroundSize: '50px 50px',
                  animation: 'moveBackground 20s linear infinite'
                }} />
              </div>

              {/* Decorative Emojis */}
              <div className="absolute top-8 right-8 text-6xl opacity-20 animate-bounce">🚀</div>
              <div className="absolute bottom-8 left-8 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>🎯</div>

              <div className="relative z-10 text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1, rotate: [0, 360] } : {}}
                  transition={{ delay: 1.5, type: "spring", duration: 1 }}
                >
                  <Award className="w-16 h-16 mx-auto mb-6 drop-shadow-2xl" strokeWidth={2.5} />
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-wider drop-shadow-lg uppercase">
                  JOIN OUR JOURNEY
                </h3>
                <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto font-sans leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Be part of something extraordinary. Together, we're building the future.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-white text-gray-900 text-lg font-black rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2 tracking-wider uppercase"
                  >
                    <span>Get Started</span>
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" strokeWidth={3} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/20 backdrop-blur-xl text-white text-lg font-black rounded-full shadow-xl hover:bg-white/30 transition-all border-2 border-white/40 tracking-wider uppercase"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes moveBackground {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
}