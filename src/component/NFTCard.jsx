// app/components/NFTCarousel.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import Image from "next/image";

export default function NFTCard() {
  const [activeIndex, setActiveIndex] = useState(2);

  const cards = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=400&h=600&fit=crop",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=600&fit=crop",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=600&fit=crop",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop",
    },
  ];

  // const getCardPosition = (index) => {
  //   const position = index - activeIndex;
  //   if (position === 0) {
  //     return {
  //       transform:
  //         "translateX(0) translateY(-30px) scale(1.15) translateZ(100px)",
  //       zIndex: 50,
  //       opacity: 1,
  //     };
  //   }

  //   // Card bên trái
  //   if (position < 0) {
  //     const distance = Math.abs(position);
  //     return {
  //       transform: `translateX(${position * 260}px) scale(${
  //         0.85 - distance * 0.05
  //       }) translateZ(${-distance * 80}px)`,
  //       zIndex: 50 - distance,
  //       opacity: Math.max(0.4, 1 - distance * 0.2),
  //     };
  //   }

  //   // Card bên phải
  //   if (position > 0) {
  //     return {
  //       transform: `translateX(${position * 260}px) scale(${
  //         0.85 - position * 0.05
  //       }) translateZ(${-position * 80}px)`,
  //       zIndex: 50 - position,
  //       opacity: Math.max(0.4, 1 - position * 0.2),
  //     };
  //   }
  // };

  const getCardPosition = (index) => {
    const position = index - activeIndex;
    const baseTranslateX = 140; 
    const baseTranslateZ = 100; 
    const baseScale = 1;

    if (position === 0) {
      // Card trung tâm
      return {
        transform: `
        translateX(0)
        translateY(-10px)
        scale(1.15)
        rotateY(0deg)
        translateZ(120px)
      `,
        zIndex: 60,
        opacity: 1,
      };
    }

    const distance = Math.abs(position);
    const scale = Math.max(0.8, 1 - distance * 0.1);
    const translateZ = -distance * baseTranslateZ;
    const translateX = position * baseTranslateX;
    const rotateY = position < 0 ? 12 * distance : -12 * distance; 
    const opacity = Math.max(0.5, 1 - distance * 0.2);

    return {
      transform: `
      translateX(${translateX}px)
      translateY(${distance * 4}px)
      scale(${scale})
      rotateY(${rotateY}deg)
      translateZ(${translateZ}px)
    `,
      zIndex: 60 - distance,
      opacity,
    };
  };
  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < cards.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
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
      className="min-h-screen  flex flex-col items-center justify-center p-4">
      {/* Title */}

      <div
        style={{
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#876046",
          textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
          fontFamily: '"Luckiest Guy", cursive',
          lineHeight: "normal",
        }}
        className="
    text-[#F26457]
    text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
    px-4 sm:px-6 md:px-8
    py-4 sm:py-6 md:py-10 lg:py-12 xl:py-16
    rounded-full font-semibold
    text-center leading-tight
  ">
        <h1 className="font-black tracking-tight">NFT & Digital Assets</h1>
        <h2
          className="
    text-center 
    font-['Luckiest_Guy'] 
    text-[#FEE685] 
    font-normal 
    tracking-tight 
    leading-normal 
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl
  "
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#876046",
            textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
          }}>
          Digital Assets with Real Value.
        </h2>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full max-w-6xl h-[360px] sm:h-[400px] md:h-[420px] lg:h-[440px]"
        style={{ perspective: "1200px" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="
          absolute
          w-[140px] h-[200px]       /* mobile */
          sm:w-[180px] sm:h-[260px] /* tablet */
          md:w-[220px] md:h-[320px] /* laptop */
          lg:w-[260px] lg:h-[360px] /* desktop */
          xl:w-[300px] xl:h-[420px] /* large screen */
          transition-all duration-700 ease-out cursor-pointer
        "
              style={{
                ...getCardPosition(index),
                transformStyle: "preserve-3d",
              }}
              onClick={() => setActiveIndex(index)}>
              <div className="w-full h-full bg-gray-200 rounded-xl overflow-hidden border-4 border-orange-400 shadow-2xl relative">
                <Image
                  src={card.image}
                  alt={`NFT Card ${card.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500/90 hover:bg-orange-600 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all z-[60] shadow-lg backdrop-blur-sm">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={activeIndex === cards.length - 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500/90 hover:bg-orange-600 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all z-[60] shadow-lg backdrop-blur-sm">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex gap-2 mt-16">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "bg-orange-500 w-10 h-3"
                : "bg-gray-600 hover:bg-gray-500 w-3 h-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
