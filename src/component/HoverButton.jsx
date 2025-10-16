"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HoverButton = () => {
  const [isHover, setIsHover] = useState(false);

  const handleLaunchApp = () => {
    // Add any popup logic here if needed
    console.log("Launch App clicked");
  };

  return (
    <Link
      href="https://audition.kpoproad.com"
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline"
    >
      <button
        className="
          relative overflow-hidden
          bg-white text-black font-semibold rounded-md
          cursor-pointer touch-manipulation
          w-[140px] h-[36px]
          sm:w-[150px] sm:h-[38px]
          md:w-[160px] md:h-[40px]
          lg:w-[170px] lg:h-[42px]
          px-2.5 py-2
          sm:px-3 sm:py-2.5
          md:px-4 md:py-3
          lg:px-4 lg:py-3
          text-xs sm:text-sm md:text-sm lg:text-base
          active:scale-[0.98]
          transition-transform
        "
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleLaunchApp}
      >
        {/* Left Arrow */}
        <motion.div
          className={`
            absolute 
            w-[10px] h-[10px]
            sm:w-[11px] sm:h-[11px]
            md:w-[12px] md:h-[12px]
            lg:w-[13px] lg:h-[13px]
            left-[2px] sm:left-[3px] md:left-[4px]
            ${isHover 
              ? 'bottom-[2px] sm:bottom-[3px] md:bottom-[4px]' 
              : 'top-[2px] sm:top-[3px] md:top-[4px]'
            }
          `}
          animate={{
            rotate: isHover ? 280 : 350,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <span 
           className="w-[46%] h-[46%] sm:w-[48%] sm:h-[48%] md:w-[50%] md:h-[50%] lg:w-[52%] lg:h-[52%] object-contain"
          >
            🐾
          </span>        </motion.div>

        {/* Right Arrow */}
        <motion.div
          className={`
            absolute
            w-[10px] h-[10px]
            sm:w-[11px] sm:h-[11px]
            md:w-[12px] md:h-[12px]
            lg:w-[13px] lg:h-[13px]
            ${isHover 
              ? 'top-[0px] sm:top-[1px] md:top-[2px] right-[-3px] sm:right-[-2px] md:right-[-3px] bottom-[6px] sm:bottom-[7px] md:bottom-[8px]' 
              : 'bottom-[-2px] sm:bottom-[-1px] md:bottom-[-2px] right-[-2px] sm:right-[-1px] md:right-[-2px]'
            }
          `}
          animate={{
            rotate: isHover ? 290 : 350,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <span 
           className="w-[46%] h-[46%] sm:w-[48%] sm:h-[48%] md:w-[50%] md:h-[50%] lg:w-[52%] lg:h-[52%] object-contain"
          >
            🐾
          </span>
        </motion.div>

        {/* Button Text Container */}
        <div className="relative flex items-center justify-center h-full">
          {/* Default Text */}
          <motion.div
            className="absolute text-xs sm:text-sm md:text-sm lg:text-base font-semibold"
            animate={{
              y: isHover ? [12, 15, 20] : 0,
              opacity: isHover ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            LAUNCH APP
          </motion.div>

          {/* Hover Text */}
          <motion.div
            className="absolute text-xs sm:text-sm md:text-sm lg:text-base font-semibold"
            animate={{
              y: isHover ? 0 : [-12, -15, -20],
              opacity: isHover ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            LAUNCH APP
          </motion.div>
        </div>
      </button>
    </Link>
  );
};

export default HoverButton;