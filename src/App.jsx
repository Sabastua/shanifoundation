import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurWorkPage from './pages/OurWorkPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ImpactPage from './pages/ImpactPage';
import StoriesPage from './pages/StoriesPage';
import ContactPage from './pages/ContactPage';
import MotionPlaygroundPage from './pages/MotionPlaygroundPage';

import ScrollProgress from './components/motion/ScrollProgress';
import CustomCursor from './components/motion/CustomCursor';
import Preloader from './components/motion/Preloader';
import VineTrail from './components/motion/VineTrail';
import { AnimationProvider, useAnimationContext } from './motion/hooks/useAnimationContext';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const { isReducedMotion } = useAnimationContext();

  // Sync state with URL hash for deep-linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages = [
        'home',
        'about',
        'our-work',
        'get-involved',
        'impact',
        'stories',
        'contact',
        'motion-playground',
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Move focus to main heading after transition
    setTimeout(() => {
      const heading = document.querySelector('main h1');
      if (heading) heading.focus();
    }, 320);
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage setActivePage={handlePageChange} onOpenDonate={() => setIsDonateOpen(true)} />;
      case 'our-work':
        return <OurWorkPage setActivePage={handlePageChange} onOpenDonate={() => setIsDonateOpen(true)} />;
      case 'get-involved':
        return <GetInvolvedPage setActivePage={handlePageChange} onOpenDonate={() => setIsDonateOpen(true)} />;
      case 'impact':
        return <ImpactPage setActivePage={handlePageChange} onOpenDonate={() => setIsDonateOpen(true)} />;
      case 'stories':
        return <StoriesPage setActivePage={handlePageChange} onOpenDonate={() => setIsDonateOpen(true)} />;
      case 'contact':
        return <ContactPage />;
      case 'motion-playground':
        return <MotionPlaygroundPage onOpenDonate={() => setIsDonateOpen(true)} />;
      case 'home':
      default:
        return <HomePage setActivePage={handlePageChange} onOpenDonate={() => setIsDonateOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-ink-900 selection:bg-magenta-100 selection:text-plum-900 grain-overlay">
      {/* 1. Page Load Preloader (<1.2s, skippable) */}
      <Preloader />

      {/* 2. Top Scroll Progress Indicator (3px --grad-bloom) */}
      <ScrollProgress />

      {/* 3. Soft Custom Cursor Glow for pointer:fine */}
      <CustomCursor />

      {/* 4. Desktop Vine Trail down left margin */}
      <VineTrail />

      {/* 5. Accessible Skip-to-Content Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* 6. Sticky Header with blurred glass gradient */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      {/* 7. Main Content with Route Transition */}
      <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={isReducedMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={isReducedMotion ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 8. Footer with Wave, Sprout Wiggle & Motion Pause Toggle */}
      <Footer
        setActivePage={handlePageChange}
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      {/* 9. Global Donate Modal Dialog */}
      <DonateModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AnimationProvider>
      <AppContent />
    </AnimationProvider>
  );
}
