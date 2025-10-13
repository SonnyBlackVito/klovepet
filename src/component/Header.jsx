// src/components/Header.tsx - Version
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LaunchButton from './LaunchButton';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Whitepaper', href: '/whitepaper' },
  ];

  return (
    <>
      <motion.header
      style={{ fontFamily: 'var(--font-luckiest-guy)' }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                href="/" 
                className={`text-2xl font-bold transition-colors ${
                  isScrolled 
                    ? 'text-gray-900 dark:text-white' 
                    : 'text-white drop-shadow-lg'
                }`}
              >
                KPOPPET
              </Link>
            </motion.div>

            {/* Desktop Navigation Menu */}
            <motion.ul 
              className="hidden md:flex items-center gap-8"
              animate={{ scale: isScrolled ? 0.95 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className={`font-medium transition-all hover:scale-110 ${
                      isScrolled 
                        ? 'text-gray-900 dark:text-white hover:text-blue-600' 
                        : 'text-white hover:text-blue-200 drop-shadow-md'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </motion.ul>

            {/* Launch App Button - Desktop */}
            <motion.div
              className="hidden md:block"
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/launch"
                className={`px-6 py-2.5 rounded-full font-semibold transition-all hover:scale-105 inline-block ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    : 'bg-white text-blue-600 hover:bg-gray-100 shadow-lg drop-shadow-xl'
                }`}
              >
                Launch App
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <svg 
                    className={`w-6 h-6 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg 
                    className={`w-6 h-6 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-gray-900 z-40 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {/* Mobile Menu Items */}
                <nav className="flex-1">
                  <ul className="space-y-6">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors block"
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Launch Button */}
                {/* <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pb-8"
                >
                  <Link
                    href="/launch"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full px-6 py-4 bg-blue-600 text-white rounded-full font-semibold text-center hover:bg-blue-700 transition-all block"
                  >
                    Launch App
                  </Link>
                </motion.div> */}
                <LaunchButton />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}