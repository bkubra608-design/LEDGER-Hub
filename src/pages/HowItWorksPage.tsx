import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import { LEDGER_SOFTWARE_URL } from '../data/content';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onOpenSoftware }) => {
  const stepDetails = [
    {
      step: '01',
      title: 'Record',
      subtitle: 'Add your sales, orders, costs, and inventory.',
      description: 'Quickly log daily transactions through one-tap entry or paste order messages straight from customer chats into our message parser.',
      tip: 'Takes less than 10 seconds per sale.',
      previewText: 'Customer buys items → Tap Quick Sale → Done.'
    },
    {
      step: '02',
      title: 'Organize',
      subtitle: 'Ledger keeps your business information in one place.',
      description: 'No more scattered notebooks, disconnected spreadsheets, or lost slips. Everything is neatly sorted by date, customer, and category.',
      tip: 'Automatic categorization without formulas.',
      previewText: 'Sales, customer advances, dues, and stock live in one dashboard.'
    },
    {
      step: '03',
      title: 'Understand',
      subtitle: 'See revenue, costs, profit, orders, and stock clearly.',
      description: 'Interactive cards show your exact financial health instantly: what came in, what went out, and what you actually earned today.',
      tip: 'Instant net profit = Revenue minus true costs.',
      previewText: 'Clear margin percentages and cash-in-hand totals.'
    },
    {
      step: '04',
      title: 'Grow',
      subtitle: 'Use better information to make better business decisions.',
      description: 'Identify your most profitable items, replenish low stock on time, collect pending dues, and build a resilient business with clarity.',
      tip: 'Confidence rooted in real numbers.',
      previewText: 'Re-invest wisely and scale your operations without stress.'
    }
  ];

  return (
    <div className="pt-8 pb-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
          Getting started takes minutes.
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
          No complicated tutorials. No accounting courses. Four simple steps connect your everyday operations to complete financial clarity.
        </p>

        <div className="pt-2">
          <a
            href={LEDGER_SOFTWARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Open Ledger</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>
      </section>

      {/* 4 Steps Visual Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          {stepDetails.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-sm hover:border-emerald-300 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-900 text-emerald-400 font-extrabold text-xl sm:text-2xl flex items-center justify-center shrink-0 shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {item.step}
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Step {item.step}
                    </span>
                    <span className="text-zinc-300">•</span>
                    <span className="text-xs text-zinc-500">{item.tip}</span>
                  </div>

                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                    {item.title}
                  </h2>

                  <h3 className="text-sm font-semibold text-zinc-800">
                    {item.subtitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Preview Tag Box */}
              <div className="w-full md:w-64 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 shrink-0">
                <div className="flex items-center gap-1.5 font-bold text-zinc-900 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>How it looks</span>
                </div>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  {item.previewText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 border border-zinc-800 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to organize your business records in minutes?
          </h3>

          <p className="text-zinc-300 text-sm max-w-lg mx-auto">
            Experience the simplicity of Ledger without complicated onboarding. Start recording your sales and knowing your true profits today.
          </p>

          <div className="pt-2">
            <a
              href={LEDGER_SOFTWARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Open Ledger</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
