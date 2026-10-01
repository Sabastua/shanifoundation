import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Phone, Mail, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useAnimationContext } from '../motion/hooks/useAnimationContext';

export default function Navbar({ activePage, setActivePage, onOpenDonate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isReducedMotion } = useAnimationContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'our-work', label: 'Our Work' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'impact', label: 'Impact' },
    { id: 'stories', label: 'Stories' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={isReducedMotion ? {} : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-grad-glass shadow-sm'
            : 'py-5 bg-cream-50/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-1 transition-transform"
              aria-label="Shani Foundation Homepage"
            >
              <Logo
                variant={isScrolled ? 'compact' : 'full'}
                size={isScrolled ? 'sm' : 'md'}
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="group relative px-3.5 py-2 text-sm font-semibold text-ink-600 hover:text-plum-900 transition-colors"
                  >
                    <span className={isActive ? 'text-plum-900 font-bold' : ''}>
                      {item.label}
                    </span>

                    {/* Animated underline growing from center with --grad-gold */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-grad-gold transition-all duration-300 transform origin-center ${
                        isActive
                          ? 'scale-x-100 opacity-100'
                          : 'scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-100'
                      }`}
                      style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Right CTAs: Donate + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Donate button with shimmer sweep & gentle heartbeat on hover */}
              <motion.button
                onClick={onOpenDonate}
                whileHover={
                  isReducedMotion
                    ? {}
                    : {
                        scale: [1, 1.03, 1],
                        transition: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' },
                      }
                }
                whileTap={{ scale: 0.97 }}
                className="shimmer-btn-container hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-grad-brand text-white font-semibold text-sm shadow-md hover:shadow-brand transition-all duration-200"
              >
                {!isReducedMotion && <span className="shimmer-sweep" />}
                <Heart className="w-4 h-4 fill-white text-white relative z-10" />
                <span className="relative z-10">Donate</span>
              </motion.button>

              {/* Mobile Hamburger / Morphing Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full text-ink-900 hover:bg-magenta-100 transition-colors relative z-50"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-6 h-5 flex flex-col justify-between items-center relative">
                  <span
                    className={`h-0.5 w-6 bg-ink-900 rounded-full transition-all duration-300 transform ${
                      mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 w-6 bg-ink-900 rounded-full transition-all duration-300 ${
                      mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`h-0.5 w-6 bg-ink-900 rounded-full transition-all duration-300 transform ${
                      mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu with Circular Clip-Path Reveal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={
              isReducedMotion
                ? { opacity: 0 }
                : { clipPath: 'circle(0% at calc(100% - 32px) 32px)', opacity: 0 }
            }
            animate={
              isReducedMotion
                ? { opacity: 1 }
                : { clipPath: 'circle(150% at calc(100% - 32px) 32px)', opacity: 1 }
            }
            exit={
              isReducedMotion
                ? { opacity: 0 }
                : { clipPath: 'circle(0% at calc(100% - 32px) 32px)', opacity: 0 }
            }
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 bg-cream-50 flex flex-col justify-between p-6 sm:p-8 lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-magenta-100 pb-4">
              <Logo variant="compact" size="sm" />
            </div>

            {/* Staggered Navigation Links */}
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.15,
                  },
                },
              }}
              className="flex flex-col space-y-3 my-6"
            >
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <motion.button
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold text-left transition-all ${
                      isActive
                        ? 'bg-magenta-100 text-plum-900 shadow-xs'
                        : 'text-ink-900 hover:bg-cream-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      className={`w-5 h-5 ${
                        isActive ? 'text-magenta-500' : 'text-ink-400'
                      }`}
                    />
                  </motion.button>
                );
              })}
            </motion.nav>

            {/* Footer CTAs & Contact */}
            <div className="space-y-4 pt-4 border-t border-magenta-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="w-full py-4 rounded-full bg-grad-brand text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Heart className="w-5 h-5 fill-white" />
                <span>Donate Now</span>
              </button>

              <div className="flex flex-col gap-2 text-xs text-ink-600 px-2">
                <a
                  href="tel:+254119575385"
                  className="flex items-center gap-2 hover:text-plum-700"
                >
                  <Phone className="w-3.5 h-3.5 text-magenta-500" />
                  <span>+254 119575385 (Nairobi, Kenya)</span>
                </a>
                <a
                  href="mailto:shanifoundation231@gmail.com"
                  className="flex items-center gap-2 hover:text-plum-700"
                >
                  <Mail className="w-3.5 h-3.5 text-magenta-500" />
                  <span>shanifoundation231@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
