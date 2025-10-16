import { useState, useEffect } from "react";

/**
 * Custom hook để quản lý hiển thị header
 * @param {string} pathname - Đường dẫn hiện tại
 * @returns {object} - { isVisible, isReady }
 */
export const useHeaderVisibility = (pathname) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Kiểm tra xem video đã được xem chưa
    const checkVisibility = () => {
      try {
        const hasSeenVideo = sessionStorage.getItem('hasSeenVideo');
        const isHomePage = pathname === '/';
        
        // Hiển thị header ngay lập tức nếu:
        // 1. Không ở trang chủ, HOẶC
        // 2. Video đã được xem trước đó
        if (!isHomePage || hasSeenVideo === 'true') {
          setIsVisible(true);
          setIsReady(true);
        } else {
          setIsReady(true);
        }
      } catch (error) {
        console.warn('SessionStorage không khả dụng:', error);
        setIsVisible(true);
        setIsReady(true);
      }
    };

    checkVisibility();
  }, [pathname]);

  useEffect(() => {
    // Lắng nghe sự kiện video hoàn thành
    const handleVideoComplete = () => {
      // Thêm delay nhỏ để chuyển đổi mượt mà
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    };

    window.addEventListener('videoComplete', handleVideoComplete);
    return () => window.removeEventListener('videoComplete', handleVideoComplete);
  }, []);

  return { isVisible, isReady };
};
