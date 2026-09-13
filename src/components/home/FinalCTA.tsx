import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../../types';
import { LEDGER_SOFTWARE_URL } from '../../data/content';

interface FinalCTAProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate, onOpenSoftware }) => {
  return (
    <section className="py-16 sm:py-20 bg-zinc-900 text-white relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-radial from-emerald-950/40 via-zinc-900 to-zinc-950 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          Your business deserves a simpler way to stay organized.
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed">
          Start keeping track of your business with Ledger. Manage sales, orders, cash flow, inventory, and net profit — all in one place.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <a
            href={LEDGER_SOFTWARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Open Ledger</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-sm sm:text-base border border-zinc-700 transition-all cursor-pointer"
          >
            Talk to Our Team
          </button>
        </div>
      </div>
    </section>
  );
};
