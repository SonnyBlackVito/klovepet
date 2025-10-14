'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Users, Shield, TrendingUp } from 'lucide-react';

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax effects
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({
  //       x: (e.clientX / window.innerWidth - 0.5) * 20,
  //       y: (e.clientY / window.innerHeight - 0.5) * 20,
  //     });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const components = [
    {
      id: 'broadcasting',
      icon: '/images/Pet_Broadcasting.png',
      title: 'Pet Broadcasting',
      description: 'Live streaming platform for pet content creators to share moments and connect with fans worldwide',
      color: 'from-amber-500 via-orange-500 to-red-500',
      darkColor: 'from-amber-400 via-orange-400 to-red-400',
      accentColor: 'amber',
      features: ['Live streaming', 'Monetization', 'Fan interaction'],
      stats: { value: '10K+', label: 'Streamers' },
      badge: 'Popular'
    },
    {
      id: 'station',
      icon: '/images/Pet_Station.png',
      title: 'Pet Station',
      description: 'Marketplace for pet products, services, and exclusive merchandise with seamless transactions',
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      darkColor: 'from-emerald-400 via-teal-400 to-cyan-400',
      accentColor: 'emerald',
      features: ['E-commerce', 'NFT items', 'Pet services'],
      stats: { value: '50K+', label: 'Products' },
      badge: 'New'
    },
    {
      id: 'audition',
      icon: '/images/Pet_Audition.png',
      title: 'Pet Audition',
      description: 'Talent competition platform where pets showcase skills and win amazing rewards',
      color: 'from-pink-500 via-rose-500 to-red-500',
      darkColor: 'from-pink-400 via-rose-400 to-red-400',
      accentColor: 'pink',
      features: ['Competitions', 'Voting', 'Prizes'],
      stats: { value: '1M+', label: 'Votes' },
      badge: 'Hot'
    },
    {
      id: 'card',
      icon: '/images/K-LovePet_Card.png',
      title: 'K-LovePet Card',
      description: 'Digital collectible cards featuring pets with unique traits, benefits and trading capabilities',
      color: 'from-purple-500 via-violet-500 to-fuchsia-500',
      darkColor: 'from-purple-400 via-violet-400 to-fuchsia-400',
      accentColor: 'purple',
      features: ['NFT cards', 'Trading', 'Rewards'],
      stats: { value: '100K+', label: 'Cards' },
      badge: 'Trending'
    },
    {
      id: 'hunters',
      icon: '/images/Running_Hunter.png',
      title: 'Running Hunters',
      description: 'Gamified fitness app where users earn rewards for activities with their beloved pets',
      color: 'from-orange-500 via-amber-500 to-yellow-500',
      darkColor: 'from-orange-400 via-amber-400 to-yellow-400',
      accentColor: 'orange',
      features: ['Fitness tracking', 'Earn rewards', 'Challenges'],
      stats: { value: '5K+', label: 'Active Users' },
      badge: 'Featured'
    }
  ];

  const stats = [
    { icon: Users, value: '150K+', label: 'Community Members', color: 'amber' },
    { icon: TrendingUp, value: '$2M+', label: 'Total Value', color: 'orange' },
    { icon: Sparkles, value: '500K+', label: 'Transactions', color: 'yellow' },
    { icon: Shield, value: '99.9%', label: 'Security', color: 'red' }
  ];

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
          className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-l from-orange-400/20 to-red-500/20 dark:from-orange-600/20 dark:to-red-700/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/15 to-amber-500/15 dark:from-yellow-600/15 dark:to-amber-700/15 rounded-full blur-3xl"
        />

        {/* Floating Particles - Paw Prints & Hearts */}
        {/* {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: typeof window !== 'undefined' ? window.innerHeight : 800,
              scale: 0,
              opacity: 0
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
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            {i % 3 === 0 ? '🐾' : i % 3 === 1 ? '💕' : '✨'}
          </motion.div>
        ))} */}

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
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 mb-8
                bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100
                dark:from-amber-500/20 dark:via-orange-500/20 dark:to-yellow-500/20
                border-2 border-amber-300 dark:border-amber-700
                rounded-full backdrop-blur-sm shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-bold bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent tracking-wider">
                COMPLETE ECOSYSTEM
              </span>
              <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </motion.div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-wide">
              <span className="block drop-shadow-lg">A COMPLETE</span>
              <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent drop-shadow-2xl">
                DIGITAL ECOSYSTEM
              </span>
            </h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Five interconnected platforms working together to create 
              <span className="font-bold text-transparent bg-gradient-to-r from-amber-700 to-orange-700 dark:from-amber-400 dark:to-orange-400 bg-clip-text"> unprecedented value </span>
              for pet lovers worldwide
            </motion.p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 dark:from-amber-600/30 dark:to-orange-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-700 shadow-lg hover:shadow-2xl transition-all">
                  <stat.icon className="w-8 h-8 mb-3 text-amber-600 dark:text-amber-400" strokeWidth={2.5} />
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1 tracking-wide">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Components Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {components.map((component, index) => (
              <motion.div
                key={component.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative group ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    opacity: hoveredCard === index ? 0.5 : 0,
                    scale: hoveredCard === index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute -inset-1 bg-gradient-to-br ${component.color} rounded-3xl blur-2xl`}
                />

                {/* Card */}
                <Link href={`/ecosystem/${component.id}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl p-8 
                      border-2 border-amber-200 dark:border-gray-700 
                      shadow-xl hover:shadow-2xl 
                      transition-all duration-300 
                      overflow-hidden cursor-pointer
                      ${index === 0 ? 'md:p-10' : ''}`}
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${component.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

                    {/* Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      className={`absolute top-4 right-4 px-3 py-1.5
                        bg-gradient-to-r ${component.color} 
                        text-white text-xs font-black rounded-full 
                        shadow-lg tracking-wider uppercase`}
                    >
                      {component.badge}
                    </motion.div>

                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <motion.div
                        animate={{
                          scale: hoveredCard === index ? 1.1 : 1,
                          rotate: hoveredCard === index ? [0, -5, 5, 0] : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        {/* Icon Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${component.color} opacity-20 blur-2xl rounded-full`} />
                        
                        {/* Icon */}
                        <img 
                          className={`relative w-24 h-24 ${index === 0 ? 'md:w-32 md:h-32' : ''} object-contain drop-shadow-2xl`}
                          src={component.icon}
                          alt={component.title}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      {/* Title */}
                      <h3 className={`text-2xl ${index === 0 ? 'md:text-3xl' : ''} font-black text-gray-900 dark:text-white mb-3 
                        group-hover:text-transparent group-hover:bg-gradient-to-r 
                        group-hover:${component.color} group-hover:bg-clip-text 
                        transition-all duration-300 tracking-wide uppercase`}>
                        {component.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${index === 0 ? 'md:text-lg' : ''}`}
                         style={{ fontFamily: 'system-ui, sans-serif' }}>
                        {component.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`px-4 py-2 bg-gradient-to-r ${component.color} bg-opacity-10 rounded-full border-2 border-current`}
                             style={{ borderColor: 'rgba(217, 119, 6, 0.2)' }}>
                          <span className={`text-lg font-black bg-gradient-to-r ${component.darkColor} bg-clip-text text-transparent`}>
                            {component.stats.value}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2 font-bold">
                            {component.stats.label}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {component.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="px-3 py-1.5 bg-amber-100 dark:bg-gray-700 rounded-full text-xs font-bold text-gray-800 dark:text-gray-200 border border-amber-300 dark:border-gray-600 tracking-wide uppercase"
                            style={{ fontFamily: 'system-ui, sans-serif' }}
                          >
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      {/* Arrow */}
                      <motion.div
                        animate={{
                          x: hoveredCard === index ? 5 : 0,
                        }}
                        className="flex items-center gap-2 text-gray-900 dark:text-white font-black tracking-wider"
                      >
                        <span className="text-sm uppercase">Explore More</span>
                        <ArrowRight className="w-5 h-5" strokeWidth={3} />
                      </motion.div>
                    </div>

                    {/* Decorative Corner */}
                    <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${component.color} opacity-5 rounded-tl-full`} />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Connection Visualization */}
          <motion.div
            variants={itemVariants}
            className="relative mb-16 hidden lg:block"
          >
            <div className="relative h-64 bg-gradient-to-r from-amber-100/50 via-orange-100/50 to-yellow-100/50 dark:from-gray-800/80 dark:via-gray-800/80 dark:to-gray-800/80 rounded-3xl p-8 overflow-hidden border-2 border-amber-300 dark:border-gray-700 shadow-xl backdrop-blur-sm">
              {/* Central Hub */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 blur-2xl opacity-50 animate-pulse" />
                  <div className="relative w-32 h-32 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30">
                    <div className="text-center text-white">
                      <Users className="w-12 h-12 mb-2 mx-auto" strokeWidth={2.5} />
                      <div className="font-black text-sm tracking-wider">COMMUNITY</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              {components.map((comp, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { 
                    scale: 1, 
                    opacity: 1,
                    rotate: 360 
                  } : {}}
                  transition={{ 
                    delay: 1.2 + i * 0.1,
                    rotate: {
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  className="absolute top-1/2 left-1/2 w-14 h-14"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-100px)`
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-500/30 blur-xl rounded-full" />
                    <img 
                      src={comp.icon} 
                      alt={comp.title}
                      className="relative w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </motion.div>
              ))}

              {/* Connection Lines */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                  className="absolute top-1/2 left-1/2 w-24 h-1 origin-left"
                  style={{
                    background: `linear-gradient(to right, rgba(217, 119, 6, 0.6), transparent)`,
                    transform: `translateY(-50%) rotate(${i * 72}deg)`
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="relative"
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
              {/* <div className="absolute top-8 right-8 text-6xl opacity-20 animate-bounce">🐾</div>
              <div className="absolute bottom-8 left-8 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>💕</div> */}

              <div className="relative z-10 text-center text-white">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1, rotate: [0, 360] } : {}}
                  transition={{ delay: 1.5, type: "spring", duration: 1 }}
                >
                  <Zap className="w-16 h-16 mx-auto mb-6 drop-shadow-2xl" strokeWidth={2.5} />
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-wider drop-shadow-lg uppercase">
                  READY TO EXPLORE?
                </h3>
                <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto font-sans leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Join our thriving community and discover endless possibilities
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/ecosystem">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group px-8 py-4 bg-white text-gray-900 text-lg font-black rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2 tracking-wider uppercase"
                    >
                      <span>View Ecosystem</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                    </motion.button>
                  </Link>
                  <Link href="/whitepaper">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white/20 backdrop-blur-xl text-white text-lg font-black rounded-full shadow-xl hover:bg-white/30 transition-all border-2 border-white/40 tracking-wider uppercase"
                    >
                      Read Whitepaper
                    </motion.button>
                  </Link>
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