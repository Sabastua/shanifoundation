import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, Mail, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ activePage, setActivePage, onOpenDonate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm py-2.5 border-b border-magenta-100/60'
            : 'bg-cream-50/80 backdrop-blur-sm py-4 sm:py-5'
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
                    className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-plum-900 bg-magenta-100/80 shadow-xs font-bold'
                        : 'text-ink-600 hover:text-plum-700 hover:bg-cream-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right CTAs: Donate + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenDonate}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-magenta-500 hover:bg-magenta-600 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>Donate</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full text-ink-900 hover:bg-magenta-100 transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-cream-50 flex flex-col justify-between p-6 sm:p-8 animate-fadeIn lg:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-magenta-100 pb-4">
            <Logo variant="compact" size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-cream-100 text-ink-900 hover:bg-magenta-100"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col space-y-3 my-6">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-lg font-bold text-left transition-all ${
                    isActive
                      ? 'bg-magenta-100 text-plum-900'
                      : 'text-ink-900 hover:bg-cream-100'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    className={`w-5 h-5 ${isActive ? 'text-magenta-500' : 'text-ink-400'}`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Footer CTAs & Contact */}
          <div className="space-y-4 pt-4 border-t border-magenta-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-4 rounded-full bg-magenta-500 hover:bg-magenta-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
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
        </div>
      )}
    </>
  );
}
