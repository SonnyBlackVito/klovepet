import { useState, useEffect } from "react";

/**
 * Custom hook để theo dõi vị trí scroll
 * @param {number} threshold - Ngưỡng scroll để kích hoạt state
 * @returns {boolean} - Trạng thái scroll
 */
export const useScrollPosition = (threshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Kiểm tra scroll ban đầu
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};
