// ============================================================
// VARIANT 1: Split Layout với Image
// ============================================================
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AboutProjectSplit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      style={{
        fontFamily: "var(--font-luckiest-guy)",
        // url('/images/image.png'),
        backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 50% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 80% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 100% 200px, #fef3c7, transparent)
      `,
      }}
      ref={ref}
      className="py-20 md:py-32 overflow-hidden ">
      <div className="container mx-auto text-center">
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
        <h2 className="text-3xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-black">
          Building a Global Ecosystem For Pet Lovers
          {/* {" "} */}
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            for Pet Lovers
          </span> */}
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <p
              style={{
                fontFamily: "'Luckiest Guy', cursive",
              }}
              className="text-[22px] text-gray-600 dark:text-gray-500 mb-8 leading-relaxed">
              K-LovePet is a blockchain project that connects people and their
              pets through a transparent and fair ecosystem.
              <br />
              We believe that every pet owner should have the opportunity to
              participate, share, and benefit from the value they help create.
            </p>

            <div className="space-y-4 text-[#737373] font-semibold text-[16px]">
              <ValueItem
                title="Transparent Blockchain Infrastructure"
                description="Secure and fair for everyone"
              />
              <ValueItem
                title="Integrated Ecosystem"
                description="Content, events, and commerce unified"
              />
              <ValueItem
                title="Global Community"
                description="Connected by shared values"
              />
            </div>
          </motion.div>

          {/* Right - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center">
            <div className="relative rounded-4xl overflow-hidden  p-1 w-[500px] h-[500px]">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl flex items-center justify-center">
                <motion.div
                  key="image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="relative w-full h-full">
                  <Image
                    src="/images/park_night.png"
                    alt="K-LovePet Banner"
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl">🐾</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl">🐾</div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function ValueItem({ icon, title, description }) {
  return (
    <motion.div
      className="flex items-start gap-4"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300 }}>
      <div className="text-3xl">{icon}</div>
      <div>
        <h4
          style={{
            fontFamily: '"Luckiest Guy", cursive',
            lineHeight: "normal",
          }}
          className="font-semibold text-gray-900 dark:text-gray-900 mb-1">
          {title}
        </h4>
        <p
          className="text-[16px] font-semibold"
          style={{
            fontFamily: '"SVN-Gilroy", sans-serif',
            lineHeight: "normal",
          }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================================
// VARIANT 2: Minimal Clean Version
// ============================================================

export function AboutProjectMinimal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-20 h-1  mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
              Building a Global Ecosystem
              <br />
              <span className="font-bold">for Pet Lovers</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              K-LovePet connects people and their pets through a transparent and
              fair blockchain ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div>
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-lg font-semibold mb-2">Transparent</h3>
              <p className="text-sm text-gray-400">Blockchain Infrastructure</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold mb-2">Integrated</h3>
              <p className="text-sm text-gray-400">Content, Events, Commerce</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2">Global</h3>
              <p className="text-sm text-gray-400">Connected Community</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// VARIANT 3: Cards với Hover Effects
// ============================================================

export function AboutProjectCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cards = [
    {
      icon: "",
      title: "Transparent Blockchain",
      description:
        "Built on secure blockchain technology ensuring trust and fairness",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "",
      title: "Integrated Ecosystem",
      description: "Content, events, and commerce unified in one platform",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "",
      title: "Global Community",
      description: "Thousands of pet owners connected worldwide",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{
            color: "#F26457",
            WebkitTextStroke: "2px #876046",
            fontFamily: "'Luckiest Guy', cursive",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 dark:text-black">
            Building a Global Ecosystem for Pet Lovers
            {/* {" "} */}
            {/* <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              for Pet Lovers
            </span> */}
          </h2>
          <p
            style={{
              color: "#F26457",
              WebkitTextStroke: "2px #876046",
              fontFamily: "'Luckiest Guy', cursive",
            }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            K-LovePet is a blockchain project that connects people and their
            pets through a transparent and fair ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 h-full shadow-xl">
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}>
                  {card.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// VARIANT 4: Timeline Style
// ============================================================

export function AboutProjectTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    { icon: "🔗", title: "Transparent", subtitle: "Blockchain Infrastructure" },
    { icon: "🌐", title: "Integrated", subtitle: "Ecosystem Platform" },
    { icon: "🤝", title: "Global", subtitle: "Connected Community" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Building a Global Ecosystem
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                for Pet Lovers
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              K-LovePet connects people and their pets through transparency and
              fairness
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block"></div>

            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:text-left md:pl-12"
                  }`}>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.subtitle}
                  </p>
                </div>

                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl shadow-lg md:mx-0 mr-4 flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}>
                  {value.icon}
                </motion.div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
