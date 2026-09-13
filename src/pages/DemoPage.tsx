import React from 'react';
import { ArrowRight, Laptop, Sparkles, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { LEDGER_SOFTWARE_URL } from '../data/content';

interface DemoPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const DemoPage: React.FC<DemoPageProps> = ({ onNavigate, onOpenSoftware }) => {
  const demoHighlights = [
    {
      title: 'Quick Sales Recording',
      description: 'Record everyday customer sales in seconds. Net profit and margins calculate automatically by subtracting item purchase costs.'
    },
    {
      title: 'Orders, Advances & Dues',
      description: 'Keep track of customer orders, deposit advances, remaining balance dues, and fulfillment progress in one clear screen.'
    },
    {
      title: 'Inventory & Stock Alerts',
      description: 'Monitor stock counts in real time. Ledger flags low-stock items before you run out of essential products.'
    },
    {
      title: 'Customer Message Parser',
      description: 'Paste customer order messages from messaging apps. Details like item names, quantities, and addresses are extracted instantly.'
    }
  ];

  return (
    <div className="pt-8 pb-20 space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
          Experience Ledger Live
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
          Try the actual Ledger software directly in your browser. Start recording transactions, tracking orders, and viewing real-time profit numbers.
        </p>

        <div className="pt-3">
          <a
            href={LEDGER_SOFTWARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-zinc-950 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Open Ledger Software</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {demoHighlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-xs space-y-2.5 hover:border-emerald-300 transition-all"
            >
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h3 className="text-base font-bold text-zinc-900">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Device & Launch Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-200 text-center space-y-4">
          <div className="w-12 h-12 bg-white rounded-2xl border border-zinc-200 flex items-center justify-center mx-auto text-emerald-700 shadow-xs">
            <Laptop className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
            Available on any device with a web browser
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 max-w-lg mx-auto leading-relaxed">
            Works smoothly on mobile phones, tablets, laptops, and desktop computers. No complicated installation required.
          </p>

          <div className="pt-2">
            <a
              href={LEDGER_SOFTWARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Launch Ledger Software</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
