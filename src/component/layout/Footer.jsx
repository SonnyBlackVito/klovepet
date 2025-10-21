'use client';
import { motion } from "framer-motion";
import { 
  Github, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  HelpCircle,
  Heart,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState({});

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { text: "Analytics", href: "#analytics" },
        { text: "Consent Management Platform", href: "#cmp" },
        { text: "First-Party Server", href: "#fps" },
        { text: "Product Information Management", href: "#pim" },
        { text: "Single Sign On", href: "#sso" },
        { text: "Shield of Privacy", href: "#privacy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", href: "#docs" },
        { text: "Press & Blogs", href: "#press" },
        { text: "Roadmap", href: "#roadmap" },
        { text: "Our Story", href: "#story" },
        { text: "Whitepaper", href: "#whitepaper" },
        { text: "dApp", href: "#dapp" },
      ],
    },
    {
      title: "Support",
      links: [
        { text: "About Us", href: "#about" },
        { text: "Careers", href: "#careers" },
        { text: "Contact Us", href: "#contact" },
        { text: "Pricing & Plans", href: "#pricing" },
      ],
    },
    {
      title: "Partnership Opportunities",
      links: [
        { text: "Become a Partner", href: "#partner" },
        { text: "Connect with a Partner", href: "#connect" },
        { text: "Become a Community Investor", href: "#investor" },
        { text: "Tokenomics", href: "#tokenomics" },
      ],
    },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  const toggleSection = (title) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <footer
      style={{ fontFamily: "var(--font-luckiest-guy)" }}
      className="w-full bg-white border-t border-gray-200"
    >
      {/* Top Section - Logo, Help & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 border-b border-gray-200">
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Logo and Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wider mb-1 sm:mb-2">
              KLOVE PET
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 italic">
              "Your pet's happiness is our priority"
            </p>
          </div>

          {/* Help & Newsletter */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <a 
              href="#help"
              className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2 group"
            >
              <HelpCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm sm:text-base">Need Help?</span>
            </a>
            
            <a 
              href="#newsletter"
              className="flex items-start gap-2 group flex-1 sm:flex-initial"
            >
              <Heart className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="text-sm">
                <p className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  Join the KLove Pet Newsletter
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Stay Informed. Stay Connected.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links - Desktop Grid / Mobile Accordion */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xs sm:text-sm block hover:translate-x-1 transition-transform"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="md:hidden space-y-2">
          {footerSections.map((section) => (
            <div key={section.title} className="border-b border-gray-200">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <h3 className="text-sm font-bold text-gray-900">
                  {section.title}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                    openSections[section.title] ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openSections[section.title] ? "auto" : 0,
                  opacity: openSections[section.title] ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pb-4">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm block py-1"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-4 lg:hidden">
            {/* Social Links */}
            <div className="flex justify-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <button className="w-full sm:w-auto sm:mx-auto px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium">
              Join our Community
            </button>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
              <a href="#terms" className="text-gray-600 hover:text-gray-900">
                Terms
              </a>
              <span className="text-gray-400">•</span>
              <a href="#privacy" className="text-gray-600 hover:text-gray-900">
                Privacy
              </a>
              <span className="text-gray-400">•</span>
              <a href="#refund" className="text-gray-600 hover:text-gray-900">
                Refund
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-600 text-xs sm:text-sm text-center">
              © {currentYear} KLove Pet. All rights reserved.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between gap-6">
            {/* Left: Legal & Copyright */}
            <div className="flex items-center gap-4 text-sm">
              <a href="#terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#refund" className="text-gray-600 hover:text-gray-900 transition-colors">
                Refund Policy
              </a>
              <span className="text-gray-400">|</span>
              <p className="text-gray-600">© {currentYear} KLove Pet</p>
            </div>

            {/* Center: Awards */}
            <div className="flex items-center gap-3">
              <div className="h-12 px-4 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-semibold text-gray-700 whitespace-nowrap">
                🏆 Award 2025
              </div>
              <div className="h-12 px-4 bg-white border border-gray-200 rounded flex items-center justify-center text-xs font-semibold text-gray-700 whitespace-nowrap">
                ⭐ Featured
              </div>
            </div>

            {/* Right: CTA & Social */}
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 text-sm font-medium whitespace-nowrap">
                Join our Community
              </button>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-700 transition-all hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
