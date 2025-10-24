"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function PartnersSectionComponent() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const partners = [
    {
      id: 1,
      name: "Kim",
      role: "Creative Director",
      description:
        "Creative visionary leading brand strategy and artistic direction for KLovePet's visual identity.",
      image: "/images/partner-1.png",
      category: "Creative",
      links: {},
    },
    {
      id: 2,
      name: "Han",
      role: "Creative Director",
      description:
        "Expert in K-pop culture and entertainment design, crafting immersive experiences for fans worldwide.",
      image: "/images/partner-2.png",
      category: "Creative",
      links: {},
    },
    {
      id: 3,
      name: "Jasmin",
      role: "Designer",
      description:
        "UI/UX specialist creating intuitive interfaces and stunning visual designs for the KLovePet platform.",
      image: "/images/partner-3.png",
      category: "Designer",
      links: {},
    },
    {
      id: 4,
      name: "Queenie",
      role: "Designer",
      description:
        "Graphic design expert bringing K-pop aesthetics to life through innovative visual storytelling.",
      image: "/images/partner-4.png",
      category: "Designer",
      links: {},
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Creative":
        return "from-amber-400/80 to-yellow-300/80";
      case "Designer":
        return "from-yellow-400/80 to-amber-300/80";
      default:
        return "from-amber-400/80 to-yellow-300/80";
    }
  };

  // Animation variants
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

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div
      style={{
        fontFamily: "var(--font-luckiest-guy)",
        backgroundImage: `
        radial-gradient(circle 600px at 0% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 50% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 80% 200px, #fef3c7, transparent),
        radial-gradient(circle 600px at 100% 200px, #fef3c7, transparent)
      `,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      className="relative z-[3] py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="flex flex-col items-center space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}>
          {/* Header */}
          <motion.div
            className="flex flex-col items-center space-y-4"
            variants={titleVariants}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F26457] text-center"
              //   style={{ textShadow: '0 0 20px rgba(254, 244, 205, 0.6)' }}
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#876046",
                textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                fontFamily: '"Luckiest Guy", cursive',
                lineHeight: "normal",
              }}>
              Artists
            </h2>
            <p
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#876046",
                textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                fontFamily: '"Luckiest Guy", cursive',
                lineHeight: "normal",
              }}
              className="text-lg md:text-xl text-dark text-center max-w-[600px]">
              The people and organizations supporting our journey
            </p>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {partners.map((partner, index) => (
              <HoloCard
                key={partner.id}
                partner={partner}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                getCategoryColor={getCategoryColor}
                cardVariants={cardVariants}
              />
            ))}
          </div>

          {/* Footer */}
          <motion.div
            className="flex flex-col items-center space-y-6 mt-8"
            variants={titleVariants}>
            <p className="text-sm text-white/30 mt-8 italic">
              Designed by the KLovePet artist team
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function HoloCard({
  partner,
  hoveredCard,
  setHoveredCard,
  getCategoryColor,
  cardVariants,
}) {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = x / rect.width;
    const percentY = y / rect.height;

    mouseX.set(percentX);
    mouseY.set(percentY);

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    rotateX.set(rotX);
    rotateY.set(rotY);
  };

  const handleMouseEnter = () => {
    setHoveredCard(partner.id);
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setIsActive(false);
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className="relative w-full h-[400px] md:h-[450px] cursor-pointer group perspective-[600px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        backgroundImage: 'url("/images/banner_kpoppet.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden bg-black/60 border border-white/10"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: isActive
            ? "0 0 20px 0px rgba(254, 244, 205, 0.8), 0 0 40px 0px rgba(254, 244, 205, 0.5), 0 20px 40px rgba(0,0,0,0.4)"
            : "0px 10px 20px -5px black",
          borderColor: isActive
            ? "rgba(254, 244, 205, 0.6)"
            : "rgba(255,255,255,0.1)",
          transition: "box-shadow 0.4s ease, border-color 0.2s ease",
        }}>
        <div className="relative w-full h-full">
          {/* Image */}
          <motion.img
            src={partner.image}
            alt={partner.name}
            className="w-full h-full object-cover"
            animate={{
              filter:
                hoveredCard === partner.id
                  ? "brightness(1.15) contrast(1.15)"
                  : "brightness(1) contrast(1)",
              scale: hoveredCard === partner.id ? 1.05 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              backfaceVisibility: "hidden",
              imageRendering: "optimizeQuality",
            }}
          />

          {/* Holographic Shine Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(
                  farthest-corner circle at ${mouseX.get() * 100}% ${
                mouseY.get() * 100
              }%,
                  rgba(254, 244, 205, 0.9) 0%,
                  rgba(254, 244, 205, 0.3) 25%,
                  rgba(0, 0, 0, 0.3) 90%
                ),
                repeating-linear-gradient(
                  135deg,
                  rgba(254, 244, 205, 0.7) 0%,
                  rgba(255, 237, 170, 0.6) 10%,
                  rgba(254, 244, 205, 0.6) 20%,
                  rgba(255, 250, 220, 0.6) 30%,
                  rgba(254, 244, 205, 0.6) 40%
                )
              `,
              backgroundSize: "100% 100%, 300% 300%",
              backgroundPosition: `center, ${mouseX.get() * 100}% ${
                mouseY.get() * 100
              }%`,
              backgroundBlendMode: "overlay, screen",
              opacity: isActive ? 0.5 : 0,
              mixBlendMode: "soft-light",
              filter: "brightness(1.1) contrast(1.8) saturate(1.3)",
              transition: "opacity 0.3s ease",
              transform: "translateZ(20px)",
            }}
          />

          {/* Glare Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(
                  farthest-corner circle at ${mouseX.get() * 100}% ${
                mouseY.get() * 100
              }%,
                  rgba(254, 244, 205, 0.8) 0%,
                  rgba(255, 237, 170, 0.4) 15%,
                  rgba(255, 250, 220, 0.2) 25%,
                  transparent 50%
                )
              `,
              opacity: isActive ? 0.5 : 0,
              mixBlendMode: "screen",
              transition: "opacity 0.3s ease",
              transform: "translateZ(30px)",
            }}
          />

          {/* Static gradient overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 transition-all duration-[400ms] ease-in-out"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%)",
            }}
          />

          {/* Partner Info - Always visible */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 z-[2]"
            style={{ transform: "translateZ(40px)" }}>
            <div className="flex flex-col items-start space-y-1">
              <h3
                className="text-lg font-bold text-white"
                style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)" }}>
                {partner.name}
              </h3>
              <p
                className="text-sm text-white/90"
                style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)" }}>
                {partner.role}
              </p>
            </div>
          </motion.div>

          {/* Hover overlay with description - ĐÃ SỬA */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end z-[3]"
            style={{
              background: `
                linear-gradient(180deg, 
                  transparent 0%, 
                  rgba(254, 243, 199, 0.3) 40%,
                  rgba(254, 243, 199, 0.85) 100%
                )
              `,
              backdropFilter: "blur(4px)",
              transform: "translateZ(50px)",
              height: "60%",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: hoveredCard === partner.id ? 1 : 0,
              y: hoveredCard === partner.id ? 0 : 20,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}>
            <motion.p
              className="text-gray-900 text-sm leading-relaxed font-medium"
              style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: hoveredCard === partner.id ? 0 : 20,
                opacity: hoveredCard === partner.id ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}>
              {partner.description}
            </motion.p>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            className="absolute top-4 right-4 z-[4]"
            style={{ transform: "translateZ(60px)" }}
            whileHover={{ scale: 1.05 }}>
            <span
              className={`inline-block bg-gradient-to-r ${getCategoryColor(
                partner.category
              )} text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm`}
              style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)" }}>
              {partner.category}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
