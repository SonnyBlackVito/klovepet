"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback, useMemo, memo } from "react";
import { Menu, X, Home, Info, FileText, Newspaper } from "lucide-react";
import HoverButton from "./HoverButton";
import DarkModeToggle from "./DarkModeToggle";

// ============ CUSTOM HOOKS ============
const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};

const useHeaderVisibility = (pathname) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if video has been seen
    const checkVisibility = () => {
      try {
        const hasSeenVideo = sessionStorage.getItem('hasSeenVideo');
        const isHomePage = pathname === '/';
        
        // Show header immediately if:
        // 1. Not on homepage, OR
        // 2. Video has been seen before
        if (!isHomePage || hasSeenVideo === 'true') {
          setIsVisible(true);
          setIsReady(true);
        } else {
          setIsReady(true);
        }
      } catch (error) {
        console.warn('SessionStorage not available:', error);
        setIsVisible(true);
        setIsReady(true);
      }
    };

    checkVisibility();
  }, [pathname]);

  useEffect(() => {
    // Listen for video completion event
    const handleVideoComplete = () => {
      // Add slight delay for smooth transition
      setTimeout(() => {
        setIsVisible(true);
      }, 300);
    };

    window.addEventListener('videoComplete', handleVideoComplete);
    return () => window.removeEventListener('videoComplete', handleVideoComplete);
  }, []);

  return { isVisible, isReady };
};

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isLocked]);
};

// ============ MEMOIZED COMPONENTS ============
const NavLink = memo(({ children, href, onClick, onClose, isActive = false, icon: Icon }) => {
  const handleClick = useCallback((e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
    if (onClose) onClose();
  }, [onClick, onClose]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  }, [handleClick]);

  const linkClasses = `
    group relative flex items-center gap-2 py-2 px-1 font-semibold text-[15px] tracking-wider
    transition-all duration-300 cursor-pointer
    ${isActive 
      ? 'text-transparent bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 bg-clip-text' 
      : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-amber-500 hover:via-orange-600 hover:to-amber-700 hover:bg-clip-text'
    }
    hover:-translate-y-0.5 hover:scale-105
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 
    after:h-[2px] after:bg-gradient-to-r after:from-amber-500 after:via-orange-600 after:to-amber-700 after:rounded-full
    ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
    after:transition-all after:duration-300 after:origin-center
    before:content-[''] before:absolute before:inset-0 before:bg-amber-500/0 before:blur-xl before:rounded-lg
    ${isActive ? 'before:bg-amber-500/20' : 'hover:before:bg-amber-500/10'}
    before:transition-all before:duration-300
  `;

  const content = (
    <>
      {Icon && (
        <Icon 
          size={16} 
          className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" 
          strokeWidth={2.5}
        />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={linkClasses} 
        onClick={handleClick} 
        prefetch={true}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <span 
      className={linkClasses} 
      onClick={handleClick} 
      role="button" 
      tabIndex={0} 
      onKeyDown={handleKeyDown}
    >
      {content}
    </span>
  );
});

NavLink.displayName = 'NavLink';

const Logo = memo(({ onClick, isMobile = false }) => {
  return (
    <motion.img
      src={isMobile ? "/images/logo_header.png" : "/images/logo_header.png"}
      alt="KPOPPET Logo"
      className={`${isMobile ? 'h-7' : 'h-8'} cursor-pointer ${isMobile ? 'lg:hidden' : ''}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.08,
        filter: "drop-shadow(0 0 12px rgba(217, 119, 6, 0.6))",
        rotate: [0, -2, 2, 0],
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      loading="eager"
    />
  );
});

Logo.displayName = 'Logo';

// ============ MAIN COMPONENT ============
const AppHeader = ({ onHome, onAbout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();
  const pathname = usePathname();
  
  const isScrolled = useScrollPosition();
  const { isVisible, isReady } = useHeaderVisibility(pathname);
  useBodyScrollLock(isDrawerOpen);

  // Navigation handlers
  const navigationHandlers = useMemo(() => ({
    handleScrollToTop: () => {
      setActiveSection("home");
      if (pathname !== "/") {
        router.push("/");
        return;
      }
      if (onHome) {
        onHome();
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    handleGoAbout: () => {
      setActiveSection("about");
      if (pathname !== "/") {
        router.push("/#about");
        return;
      }
      if (onAbout) {
        onAbout();
      }
    },
    handleGoNews: () => {
      setActiveSection("news");
      router.push("/news");
    },
  }), [pathname, router, onHome, onAbout]);

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);

  // Navigation items config
  const navItems = useMemo(() => [
    { 
      label: "HOME", 
      onClick: navigationHandlers.handleScrollToTop, 
      isActive: activeSection === "home", 
      icon: Home 
    },
    { 
      label: "ABOUT", 
      onClick: navigationHandlers.handleGoAbout, 
      isActive: activeSection === "about", 
      icon: Info 
    },
    { 
      label: "WHITEPAPER", 
      href: "https://docs.kpoproad.com", 
      icon: FileText 
    },
    { 
      label: "NEWS", 
      onClick: navigationHandlers.handleGoNews, 
      isActive: activeSection === "news", 
      icon: Newspaper 
    },
  ], [activeSection, navigationHandlers]);

  // Don't render until ready to prevent flash
  if (!isReady) {
    return null;
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1],
          delay: isVisible ? 0.2 : 0 
        }}
        style={{
          fontFamily: "'Luckiest Guy', cursive",
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
        className={`
          ${isScrolled ? 'fixed' : 'absolute bg-transparent'} 
          top-0 left-0 right-0 z-[100]
          transition-all duration-300
          ${isScrolled ? 'pt-5' : 'pt-6'}
        `}
      >
        <motion.div
          animate={{
            maxWidth: isScrolled ? "min(1400px, 90vw)" : "100vw",
            borderRadius: isScrolled ? "9999px" : "0",
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className={`
            mx-auto w-full px-4 md:px-8 lg:px-10 py-3 md:py-3.5
            flex items-center justify-between
            transition-all duration-300
            ${isScrolled 
              ? 'bg-black/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-amber-900/40 dark:border-amber-700/40 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_100px_rgba(217,119,6,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]' 
              : 'bg-transparent'
            }
          `}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center flex-1 gap-0">
            <div className="mr-12">
              <Logo onClick={navigationHandlers.handleScrollToTop} />
            </div>

            {/* Centered Navigation */}
            <nav 
              className="flex items-center justify-center gap-10 flex-1" 
              role="navigation" 
              aria-label="Main navigation"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: isVisible ? 0.3 + (index * 0.1) : 0,
                    duration: 0.4 
                  }}
                >
                  <NavLink
                    {...(item.href ? { href: item.href } : { onClick: item.onClick })}
                    isActive={item.isActive}
                    icon={item.icon}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Mobile Logo */}
          <Logo onClick={navigationHandlers.handleScrollToTop} isMobile={true} />

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: isVisible ? 0.4 : 0 }}
            onClick={openDrawer}
            className="lg:hidden relative text-white p-2.5 rounded-xl hover:bg-amber-900/30 active:bg-amber-900/40 transition-all group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open navigation menu"
            aria-expanded={isDrawerOpen}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/20 to-amber-600/0 group-hover:animate-pulse" />
            <Menu size={22} className="relative z-10" strokeWidth={2.5} />
          </motion.button>

          {/* Desktop Action Buttons */}
          <motion.div 
            className="hidden lg:flex items-center gap-4 ml-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: isVisible ? 0.6 : 0, duration: 0.4 }}
          >
            <DarkModeToggle />
            <HoverButton />
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence mode="wait">
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[1000]"
              onClick={closeDrawer}
              aria-hidden="true"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 250,
                mass: 0.8
              }}
              className="fixed top-0 left-0 w-[320px] max-w-[85vw] h-screen bg-gradient-to-br from-black via-amber-950/95 to-black text-white z-[1001] shadow-[0_0_60px_rgba(217,119,6,0.4)] border-r border-amber-900/50 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 animate-pulse pointer-events-none" />
              
              {/* Drawer Header */}
              <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-amber-900/40 backdrop-blur-sm bg-black/50">
                <Logo 
                  onClick={() => {
                    navigationHandlers.handleScrollToTop();
                    closeDrawer();
                  }} 
                  isMobile={true} 
                />
                
                <motion.button
                  onClick={closeDrawer}
                  className="relative text-white p-2 rounded-xl hover:bg-amber-900/30 hover:text-orange-400 transition-all group"
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close navigation menu"
                >
                  <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/20 rounded-xl transition-all duration-300" />
                  <X size={20} className="relative z-10" strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Drawer Navigation */}
              <nav className="relative flex flex-col gap-5 p-6 mt-6" role="navigation" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.08,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <NavLink
                      {...(item.href ? { href: item.href } : { onClick: item.onClick })}
                      onClose={closeDrawer}
                      isActive={item.isActive}
                      icon={item.icon}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-amber-900/50 to-transparent my-4"
                />

                {/* Action Buttons */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  className="mt-4 flex items-center justify-center gap-4"
                >
                  <DarkModeToggle />
                  <HoverButton />
                </motion.div>
              </nav>

              {/* Decorative glow */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(AppHeader);