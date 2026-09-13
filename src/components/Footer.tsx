import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { LedgerLogo } from './LedgerLogo';
import { LEDGER_SOFTWARE_URL } from '../data/content';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSoftware }) => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-12 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none"
            >
              <LedgerLogo theme="dark" size="md" showSubtitle={true} />
            </button>
            
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Simple business management for small businesses and entrepreneurs. Keep track of sales, orders, cash flow, inventory, and net profit — all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Product Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Features & Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packages')}
                  className="hover:text-white transition-colors text-left cursor-pointer text-emerald-400"
                >
                  Packages & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('demo')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Live Software Access
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About Ledger
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li className="pt-2">
                <a
                  href={LEDGER_SOFTWARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-xs cursor-pointer"
                >
                  <span>Open Ledger</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div>
            © {new Date().getFullYear()} Ledger. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={LEDGER_SOFTWARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium"
            >
              Open Ledger Software →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
