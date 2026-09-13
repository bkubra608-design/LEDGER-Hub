import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PackagesPage } from './pages/PackagesPage';
import { DemoPage } from './pages/DemoPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { LEDGER_SOFTWARE_URL } from './data/content';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = ['home', 'about', 'product', 'features', 'how-it-works', 'packages', 'demo', 'contact', 'faq'];
      if (validPages.includes(hash as PageId)) {
        return hash as PageId;
      }
      const path = window.location.pathname.replace('/', '').toLowerCase();
      if (validPages.includes(path as PageId)) {
        return path as PageId;
      }
    }
    return 'home';
  });

  // Sync route changes with URL and scroll to top
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.history.pushState(null, '', page === 'home' ? '/' : `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = ['home', 'about', 'product', 'features', 'how-it-works', 'packages', 'demo', 'contact', 'faq'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenSoftware = () => {
    window.open(LEDGER_SOFTWARE_URL, '_blank', 'noopener,noreferrer');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenSoftware={handleOpenSoftware} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} onOpenSoftware={handleOpenSoftware} />;
      case 'product':
        return <ProductPage onNavigate={handleNavigate} onOpenSoftware={handleOpenSoftware} />;
      case 'features':
        return <FeaturesPage onNavigate={handleNavigate} onOpenSoftware={handleOpenSoftware} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} onOpenSoftware={handleOpenSoftware} />;
      case 'packages':
        return <PackagesPage onNavigate={handleNavigate} onOpenSoftware={handleOpenSoftware} />;
      case 'demo':
        return <DemoPage onNavigate={handleNavigate} onOpenSoftware={handleOpenSoftware} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} onOpenSoftware={handleOpenSoftware} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} onOpenSoftware={handleOpenSoftware} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenSoftware={handleOpenSoftware} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSoftware={handleOpenSoftware}
      />

      {/* Main Page View Area */}
      <main className="grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSoftware={handleOpenSoftware}
      />
    </div>
  );
}
