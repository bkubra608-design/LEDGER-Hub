import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  LayoutDashboard, 
  Zap, 
  Workflow, 
  PlaySquare,
  Boxes
} from 'lucide-react';
import { PageId } from '../types';
import { LedgerLogo } from './LedgerLogo';
import { LEDGER_SOFTWARE_URL } from '../data/content';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenSoftware }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 150);
  };

  const isAboutActive = ['about', 'product', 'features', 'how-it-works', 'packages', 'demo'].includes(currentPage);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo with exact user identity: diamond mark, serif Ledger, subtitle */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-left focus:outline-none cursor-pointer"
            aria-label="Ledger Home"
          >
            <LedgerLogo size="sm" showSubtitle={true} theme="light" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {/* Home Link */}
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-zinc-900 bg-zinc-100 font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              Home
            </button>

            {/* About with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => onNavigate('about')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                  isAboutActive
                    ? 'text-zinc-900 bg-zinc-100 font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
                aria-expanded={isAboutDropdownOpen}
              >
                <span>About</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isAboutDropdownOpen ? 'rotate-180 text-zinc-900' : 'text-zinc-400'
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {isAboutDropdownOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] mt-1 bg-white rounded-2xl shadow-xl border border-zinc-200/90 p-2 z-50 animate-fadeIn"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-1 space-y-1">
                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('product');
                      }}
                      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors mt-0.5">
                        <LayoutDashboard className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                          Product
                        </div>
                        <div className="text-[11px] text-zinc-500 line-clamp-1">
                          Simple business platform overview
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('features');
                      }}
                      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors mt-0.5">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                          Features
                        </div>
                        <div className="text-[11px] text-zinc-500 line-clamp-1">
                          Sales, orders, inventory, and parser
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('how-it-works');
                      }}
                      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors mt-0.5">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                          How It Works
                        </div>
                        <div className="text-[11px] text-zinc-500 line-clamp-1">
                          Four simple steps to organized numbers
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('packages');
                      }}
                      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors mt-0.5">
                        <Boxes className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                          Packages
                        </div>
                        <div className="text-[11px] text-zinc-500 line-clamp-1">
                          Starter, Growth, and Business plans
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('demo');
                      }}
                      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-50 transition-colors text-left group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors mt-0.5">
                        <PlaySquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">
                          Demo & Live Access
                        </div>
                        <div className="text-[11px] text-zinc-500 line-clamp-1">
                          Experience the software live
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Dropdown Footer */}
                  <div className="mt-1 pt-2 border-t border-zinc-100 px-3 py-2 bg-zinc-50/80 rounded-xl flex items-center justify-between">
                    <button
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        onNavigate('about');
                      }}
                      className="text-[11px] font-semibold text-zinc-700 hover:text-emerald-700 cursor-pointer"
                    >
                      Read full About Story →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Link */}
            <button
              onClick={() => onNavigate('contact')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-zinc-900 bg-zinc-100 font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              Contact
            </button>

            {/* FAQ Link */}
            <button
              onClick={() => onNavigate('faq')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentPage === 'faq'
                  ? 'text-zinc-900 bg-zinc-100 font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Right Action: Prominent "Open Ledger" Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="navbar-open-ledger-btn"
              href={LEDGER_SOFTWARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-zinc-900 hover:bg-emerald-700 active:scale-95 transition-all shadow-xs border border-zinc-800 hover:border-emerald-600 cursor-pointer"
            >
              <span>Open Ledger</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={LEDGER_SOFTWARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-emerald-700 rounded-lg flex items-center gap-1 shadow-xs"
            >
              <span>Open Ledger</span>
              <ArrowRight className="w-3 h-3 text-emerald-400" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className={`px-3 py-2 rounded-lg text-left text-sm font-medium ${
                currentPage === 'home' ? 'bg-zinc-100 text-zinc-900 font-bold' : 'text-zinc-600'
              }`}
            >
              Home
            </button>

            {/* About accordion on mobile */}
            <div className="border border-zinc-100 rounded-xl p-2 bg-zinc-50/60">
              <button
                onClick={() => {
                  onNavigate('about');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-2 py-1.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                  currentPage === 'about' ? 'text-emerald-700' : 'text-zinc-800'
                }`}
              >
                <span>About Overview</span>
                <span className="text-xs text-zinc-400">Page →</span>
              </button>

              <div className="grid grid-cols-2 gap-1.5 mt-2 pt-2 border-t border-zinc-200/60 text-xs">
                <button
                  onClick={() => {
                    onNavigate('product');
                    setIsMobileMenuOpen(false);
                  }}
                  className="p-2 rounded-lg bg-white border border-zinc-200/80 text-left font-medium text-zinc-700"
                >
                  Product
                </button>
                <button
                  onClick={() => {
                    onNavigate('features');
                    setIsMobileMenuOpen(false);
                  }}
                  className="p-2 rounded-lg bg-white border border-zinc-200/80 text-left font-medium text-zinc-700"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    onNavigate('how-it-works');
                    setIsMobileMenuOpen(false);
                  }}
                  className="p-2 rounded-lg bg-white border border-zinc-200/80 text-left font-medium text-zinc-700"
                >
                  How It Works
                </button>
                <button
                  onClick={() => {
                    onNavigate('packages');
                    setIsMobileMenuOpen(false);
                  }}
                  className="p-2 rounded-lg bg-white border border-zinc-200/80 text-left font-medium text-emerald-700 font-semibold"
                >
                  Packages
                </button>
                <button
                  onClick={() => {
                    onNavigate('demo');
                    setIsMobileMenuOpen(false);
                  }}
                  className="col-span-2 p-2 rounded-lg bg-white border border-zinc-200/80 text-left font-medium text-zinc-700"
                >
                  Demo & Live Access
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className={`px-3 py-2 rounded-lg text-left text-sm font-medium ${
                currentPage === 'contact' ? 'bg-zinc-100 text-zinc-900 font-bold' : 'text-zinc-600'
              }`}
            >
              Contact
            </button>

            <button
              onClick={() => {
                onNavigate('faq');
                setIsMobileMenuOpen(false);
              }}
              className={`px-3 py-2 rounded-lg text-left text-sm font-medium ${
                currentPage === 'faq' ? 'bg-zinc-100 text-zinc-900 font-bold' : 'text-zinc-600'
              }`}
            >
              FAQ
            </button>
          </div>

          <div className="pt-2">
            <a
              href={LEDGER_SOFTWARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-zinc-900 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Open Ledger Software</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
