import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../../types';
import { LEDGER_SOFTWARE_URL } from '../../data/content';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenSoftware }) => {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-emerald-100/40 via-zinc-50/20 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline & Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.15]">
            Run your business. <br />
            <span className="text-emerald-700">Know your numbers.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Ledger gives small businesses a simple way to manage sales, orders, inventory, costs, and profit — all in one place.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <a
              href={LEDGER_SOFTWARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-zinc-950 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer border border-zinc-800 hover:border-emerald-600"
            >
              <span>Open Ledger</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              onClick={() => onNavigate('product')}
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-800 font-semibold text-sm sm:text-base border border-zinc-200 transition-all shadow-xs cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
