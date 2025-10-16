import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Custom hook để tạo animation khi element vào viewport
 * @param {object} options - Tùy chọn cho useInView
 * @returns {object} - { ref, isInView }
 */
export const useInViewAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    ...options 
  });
  
  return { ref, isInView };
};

/**
 * Animation variants cho container
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

/**
 * Animation variants cho item
 */
export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
