import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  // Sync state with URL hash for deep-linking and browser history support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages = ['home', 'about', 'our-work', 'get-involved', 'impact', 'stories', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      case 'home':
      default:
        return <HomePage setActivePage={handlePageChange} onOpenDonate={() => setIsDonateOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-ink-900 selection:bg-magenta-100 selection:text-plum-900">
      {/* Accessible Skip-to-Content Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Primary Sticky Header */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-grow focus:outline-none">
        {renderCurrentPage()}
      </main>

      {/* Footer Landmark with Plum-900 surface */}
      <Footer
        setActivePage={handlePageChange}
        onOpenDonate={() => setIsDonateOpen(true)}
      />

      {/* Global Accessible Donate Modal Dialog */}
      <DonateModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
      />
    </div>
  );
}
