"use client";

import { motion } from "framer-motion";
import styles from './SectionTitle.module.css';

const SectionTitle = ({ 
  title, 
  subtitle, 
  description,
  variant = "default",
  className = "",
  ...props 
}) => {
  const titleStyles = {
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: "#876046",
    textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
    fontFamily: '"Luckiest Guy", cursive',
    lineHeight: "normal",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`${styles.sectionTitle} ${className}`}
      {...props}
    >
      {/* Main Title */}
      <motion.h1
        style={titleStyles}
        className={styles.mainTitle}
      >
        {title}
      </motion.h1>

      {/* Subtitle */}
      {subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.subtitle}
        >
          {subtitle}
        </motion.h2>
      )}

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.description}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
