"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import HoverButton from "./HoverButton";


const NavLink = ({ children, href, onClick, onClose, isActive = false }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
    if (onClose) onClose();
  };

  const linkClasses = `
    relative py-2 px-1 font-semibold text-[15px] tracking-wider
    transition-all duration-200 cursor-pointer
    ${isActive 
      ? 'text-transparent bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text' 
      : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-amber-700 hover:to-orange-800 hover:bg-clip-text'
    }
    hover:-translate-y-0.5
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 
    after:h-0.5 after:bg-gradient-to-r after:from-amber-700 after:to-orange-800 after:rounded-full
    ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
    after:transition-transform after:duration-300 after:origin-center
  `;

  if (href) {
    return (
      <Link href={href} className={linkClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <span className={linkClasses} onClick={handleClick}>
      {children}
    </span>
  );
};

const AppHeader = ({ onHome, onAbout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Check visibility only after client-side mount
  useEffect(() => {
    setMounted(true);
    const hasVisitedBefore = sessionStorage.getItem('headerVisible');
    if (hasVisitedBefore === 'true' || pathname !== '/') {
      setIsVisible(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isDrawerOpen]);

  // Listen for custom event from HeroBanner
  useEffect(() => {
    const handleVideoComplete = () => {
      setIsVisible(true);
      sessionStorage.setItem('headerVisible', 'true');
    };

    window.addEventListener('videoComplete', handleVideoComplete);
    return () => window.removeEventListener('videoComplete', handleVideoComplete);
  }, []);

  const handleScrollToTop = useCallback(() => {
    setActiveSection("home");
    if (pathname !== "/") {
      router.push("/");
      return;
    }
    if (onHome) return onHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, router, onHome]);

  const handleGoAbout = useCallback(() => {
    setActiveSection("about");
    if (pathname !== "/") {
      router.push("/#about");
      return;
    }
    if (onAbout) return onAbout();
  }, [pathname, router, onAbout]);

  const handleGoNews = useCallback(() => {
    setActiveSection("news");
    router.push("/news");
  }, [router]);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          fontFamily: "'Luckiest Guy', cursive",
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
        className={`
          ${isScrolled ? 'fixed' : 'relative bg-amber-100'} 
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
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`
            mx-auto w-full px-4 md:px-8 lg:px-10 py-3 md:py-3.5
            flex items-center justify-between
            transition-all duration-300
            ${isScrolled 
              ? 'bg-black/60 backdrop-blur-xl border-b border-amber-900/30 shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_80px_rgba(217,119,6,0.15)]' 
              : 'bg-transparent'
            }
          `}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center flex-1 gap-0">
            <motion.img
              src="/logo.png"
              alt="KPOPPET"
              className="h-8 cursor-pointer mr-12"
              onClick={handleScrollToTop}
              whileHover={{ 
                scale: 1.08,
                filter: "drop-shadow(0 0 8px rgba(217, 119, 6, 0.5))"
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Centered Navigation */}
            <div className="flex items-center justify-center gap-8 flex-1">
              <NavLink onClick={handleScrollToTop} isActive={activeSection === "home"}>
                HOME
              </NavLink>
              <NavLink onClick={handleGoAbout} isActive={activeSection === "about"}>
                ABOUT
              </NavLink>
              <NavLink href="https://docs.kpoproad.com">WHITEPAPER</NavLink>
              <NavLink onClick={handleGoNews} isActive={activeSection === "news"}>
                NEWS
              </NavLink>
            </div>
          </div>

          {/* Mobile Logo */}
          <motion.img
            src="/logo.png"
            alt="KPOPPET"
            className="h-7 cursor-pointer lg:hidden"
            onClick={handleScrollToTop}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-amber-900/20 active:bg-amber-900/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </motion.button>

          {/* Desktop Action Button */}
          <div className="hidden lg:block ml-12">
            <HoverButton />
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000]"
              onClick={closeDrawer}
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200 
              }}
              className="fixed top-0 left-0 w-[300px] h-screen bg-gradient-to-b from-black/98 to-amber-950/98 text-white z-[1001] shadow-[0_0_50px_rgba(217,119,6,0.3)]"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-5 border-b border-amber-900/30">
                <motion.img
                  src="/logo.png"
                  alt="KPOPPET"
                  className="h-7 cursor-pointer"
                  onClick={() => {
                    handleScrollToTop();
                    closeDrawer();
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  onClick={closeDrawer}
                  className="text-white p-2 rounded-lg hover:bg-amber-900/20 hover:text-orange-400 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Drawer Navigation */}
              <div className="flex flex-col gap-6 p-6 mt-4">
                {[
                  { label: "HOME", onClick: handleScrollToTop, isActive: activeSection === "home" },
                  { label: "ABOUT", onClick: handleGoAbout, isActive: activeSection === "about" },
                  { label: "WHITEPAPER", href: "https://docs.kpoproad.com" },
                  { label: "NEWS", onClick: handleGoNews, isActive: activeSection === "news" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      {...(item.href ? { href: item.href } : { onClick: item.onClick })}
                      onClose={closeDrawer}
                      isActive={item.isActive}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}

                {/* Action Button in Drawer */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <HoverButton />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppHeader;