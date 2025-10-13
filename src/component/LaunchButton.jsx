// src/components/LaunchButton.jsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LaunchButton() {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href="https://audition.kpoproad.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.button
        whileTap={{ scale: 0.98 }}
        className="relative px-4 md:px-6 py-2.5 md:py-3 bg-white text-black font-semibold rounded-md overflow-hidden min-w-[140px] sm:min-w-[150px] md:min-w-[160px] lg:min-w-[170px] h-[36px] sm:h-[38px] md:h-[40px] lg:h-[42px] cursor-pointer text-xs sm:text-sm lg:text-base"
      >
        {/* Left Arrow */}
        <motion.div
          className="absolute w-[10px] sm:w-[11px] md:w-[12px] lg:w-[13px] h-[10px] sm:h-[11px] md:h-[12px] lg:h-[13px]"
          animate={{
            top: isHover ? 'auto' : '2px',
            bottom: isHover ? '2px' : 'auto',
            left: '3px',
            rotate: isHover ? 280 : 350,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Image
            src="/left_arrow.svg"
            alt="left arrow"
            width={12}
            height={12}
            className="w-[46%] sm:w-[48%] md:w-[50%] lg:w-[52%] h-auto object-contain"
          />
        </motion.div>

        {/* Right Arrow */}
        <motion.div
          className="absolute w-[10px] sm:w-[11px] md:w-[12px] lg:w-[13px] h-[10px] sm:h-[11px] md:h-[12px] lg:h-[13px]"
          animate={{
            top: isHover ? '1px' : 'auto',
            bottom: isHover ? '7px' : '-2px',
            right: isHover ? '-3px' : '-2px',
            rotate: isHover ? 290 : 350,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Image
            src="/right_arrow.svg"
            alt="right arrow"
            width={12}
            height={12}
            className="w-[46%] sm:w-[48%] md:w-[50%] lg:w-[52%] h-auto object-contain"
          />
        </motion.div>

        {/* Button Text Container */}
        <div className="relative flex items-center justify-center h-full">
          {/* Default Text */}
          <motion.span
            className="absolute text-xs sm:text-sm lg:text-base font-semibold"
            animate={{
              y: isHover ? 20 : 0,
              opacity: isHover ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            LAUNCH APP
          </motion.span>

          {/* Hover Text */}
          <motion.span
            className="absolute text-xs sm:text-sm lg:text-base font-semibold"
            animate={{
              y: isHover ? 0 : -20,
              opacity: isHover ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            LAUNCH APP
          </motion.span>
        </div>
      </motion.button>
    </Link>
  );
}