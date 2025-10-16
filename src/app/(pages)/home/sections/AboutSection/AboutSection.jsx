"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionTitle from "../../components/SectionTitle";

const AboutSection = () => {
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
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800"
      style={{
        fontFamily: "var(--font-luckiest-guy)",
        // url('/images/image.png'),
        backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 50% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 80% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 100% 200px, #fef3c7, transparent)
      `,
    //         backgroundRepeat: "no-repeat",
    // backgroundSize: "cover", // hoặc 'contain' tùy bạn
    // backgroundPosition: "center",
      }}
      ref={ref}
      className="py-20 md:py-32 overflow-hidden">
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
        <h2 className="text-3xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
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
};

const ValueItem = ({ title, description, icon }) => {
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
          className="font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h4>
        <p
          className="text-[16px] font-semibold text-gray-700 dark:text-gray-300"
          style={{
            fontFamily: '"SVN-Gilroy", sans-serif',
            lineHeight: "normal",
          }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutSection;
