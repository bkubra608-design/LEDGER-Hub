import React from 'react';
import { 
  ArrowRight, 
  Check, 
  X as XIcon
} from 'lucide-react';
import { SmallBusinesses } from '../components/home/SmallBusinesses';
import { PageId } from '../types';
import { LEDGER_SOFTWARE_URL } from '../data/content';

interface ProductPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ onNavigate, onOpenSoftware }) => {
  const comparisonItems = [
    {
      feature: 'Setup Time',
      enterprise: 'Weeks of setup, accountant consultation required',
      ledger: 'Under 2 minutes, start recording right away'
    },
    {
      feature: 'Terminology',
      enterprise: 'Double-entry, debits/credits, contra accounts, ledger codes',
      ledger: 'Sales, costs, cash, inventory, net profit'
    },
    {
      feature: 'Order Entry',
      enterprise: 'Manual invoice generation, tax line items, complex forms',
      ledger: 'Quick 1-tap entry or message parsing from chats'
    },
    {
      feature: 'Daily Clarity',
      enterprise: '50-page financial statements you need a CPA to read',
      ledger: 'Instant answer to: "Did I make money today?"'
    },
    {
      feature: 'Device Accessibility',
      enterprise: 'Heavy desktop software or clunky web portals',
      ledger: 'Lightweight, works smoothly on mobile, tablet, or desktop'
    }
  ];

  return (
    <div className="pt-8 pb-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
          Intentionally simple. <br />
          Built for how you actually work.
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
          Ledger is a lightweight business management and smart ledger application. It eliminates enterprise clutter so you can focus on making sales, satisfying customers, and growing your cash flow.
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

      {/* Comparison: Complex Enterprise vs Ledger */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Why small businesses switch to Ledger
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500">
              We took everything frustrating about traditional business software and threw it away.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-500">
                  <th className="py-3 px-4 font-semibold">Capability</th>
                  <th className="py-3 px-4 font-semibold text-zinc-400">Complex Enterprise Tools</th>
                  <th className="py-3 px-4 font-bold text-emerald-700 bg-emerald-50/50 rounded-t-xl">Ledger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {comparisonItems.map((item, i) => (
                  <tr key={i} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-zinc-900">{item.feature}</td>
                    <td className="py-3.5 px-4 text-zinc-500 flex items-center gap-2">
                      <XIcon className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{item.enterprise}</span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-zinc-900 bg-emerald-50/30">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item.ledger}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 text-emerald-700 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-base font-bold text-zinc-900">Unified Business Hub</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              No need to switch between an inventory app, an invoice generator, and a paper notebook. Everything syncs into one clear ledger view.
            </p>
          </div>

          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 text-emerald-700 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-base font-bold text-zinc-900">Message Extractor</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Take incoming WhatsApp, Instagram, or SMS customer inquiries and convert raw sentences into items, quantities, delivery addresses, and advance payments.
            </p>
          </div>

          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 text-emerald-700 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-base font-bold text-zinc-900">Immediate Profit Insights</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Automated margin calculation deducts item costs from revenue in real time so you immediately see your net profit and cash position.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <SmallBusinesses onNavigate={onNavigate} onOpenSoftware={onOpenSoftware} />
    </div>
  );
};
