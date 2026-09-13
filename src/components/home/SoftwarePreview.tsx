import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Package, 
  Sparkles, 
  ArrowRight,
  MousePointerClick
} from 'lucide-react';
import { InteractiveLedgerSoftware } from '../software/InteractiveLedgerSoftware';
import { PageId } from '../../types';

interface SoftwarePreviewProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const SoftwarePreview: React.FC<SoftwarePreviewProps> = ({ onNavigate, onOpenSoftware }) => {
  const highlights = [
    {
      title: 'Dashboard',
      desc: 'See revenue, costs, profit, and business performance at a glance.',
      icon: TrendingUp
    },
    {
      title: 'Sales',
      desc: 'Record sales and automatically calculate important numbers.',
      icon: DollarSign
    },
    {
      title: 'Orders & Cash Flow',
      desc: 'Keep track of orders, payments, advances, dues, and cash.',
      icon: ShoppingBag
    },
    {
      title: 'Inventory',
      desc: 'Monitor your stock and quickly identify items that need attention.',
      icon: Package
    },
    {
      title: 'AI Message Parser',
      desc: 'Turn order information from messages into structured order details.',
      icon: Sparkles
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-semibold text-emerald-400">
            <MousePointerClick className="w-3.5 h-3.5" />
            Interactive Software Replica
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Simple on the inside. <br className="hidden sm:block" />
            <span className="text-emerald-400">Powerful where it matters.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            Experience the real Ledger software interface below. Switch tabs, test quick sales, and explore the built-in AI message order parser.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenSoftware}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <span>Launch Full Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Highlight Badges around software */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div 
                key={i} 
                className="bg-zinc-800/80 border border-zinc-700/80 rounded-xl p-3 text-left hover:border-emerald-500/60 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1">
                  <Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{h.title}</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug line-clamp-2">
                  {h.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Embedded Browser Mockup Container */}
        <div className="rounded-2xl border border-zinc-700 bg-zinc-950 p-2 sm:p-4 shadow-2xl">
          <InteractiveLedgerSoftware initialTab="dashboard" />
        </div>
      </div>
    </section>
  );
};
