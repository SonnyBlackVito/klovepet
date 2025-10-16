"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../contexts/DarkModeContext";

const DarkModeToggle = ({ className = "" }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-12 h-12 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-amber-200/50 dark:border-gray-700/50 hover:border-amber-300 dark:hover:border-gray-600 transition-all duration-300 flex items-center justify-center ${className}`}
      aria-label="Toggle dark mode"
    >
      <motion.div
        animate={{
          rotate: isDarkMode ? 180 : 0,
          scale: isDarkMode ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDarkMode ? (
          <Moon className="w-5 h-5 text-amber-400" strokeWidth={2} />
        ) : (
          <Sun className="w-5 h-5 text-amber-600" strokeWidth={2} />
        )}
      </motion.div>
      
      {/* Background glow effect */}
      <motion.div
        animate={{
          opacity: isDarkMode ? 0.3 : 0.1,
          scale: isDarkMode ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-500/20 dark:from-amber-400/30 dark:to-orange-500/30 blur-sm"
      />
    </motion.button>
  );
};

export default DarkModeToggle;
