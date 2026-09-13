import React from 'react';
import { Check, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { LEDGER_SOFTWARE_URL } from '../data/content';

interface PackagesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onNavigate, onOpenSoftware }) => {
  return (
    <div className="pt-8 pb-20 space-y-14 sm:space-y-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
          Transparent packages for <br />
          every stage of business.
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
          No hidden fees, no complicated pricing matrices. Start completely free during public beta or choose the package tailored to your operations.
        </p>
      </section>

      {/* Packages Grid - Replicating screenshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          
          {/* Card 1: Starter */}
          <div className="bg-white rounded-[28px] p-7 sm:p-9 border border-zinc-200/90 shadow-xs flex flex-col justify-between transition-all hover:shadow-md hover:border-zinc-300">
            <div className="space-y-6">
              {/* Header Info */}
              <div className="space-y-3 min-h-[88px]">
                <h3
                  className="text-3xl font-bold text-zinc-950 font-serif tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Starter
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  For individuals, artisans, and new micro businesses getting started.
                </p>
              </div>

              {/* Pricing */}
              <div className="space-y-1.5 pt-1">
                <div
                  className="text-4xl sm:text-5xl font-bold text-zinc-950 font-serif tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Rs. 0
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 font-medium">
                  Free forever during public beta
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-6">
                <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-700">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Sales recording & history</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Real-time net profit calculation</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Basic executive dashboard</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Order status pipeline</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Basic inventory counter</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Printable monochrome receipts</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Local JSON database backup</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-8">
              <a
                href={LEDGER_SOFTWARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-zinc-950 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Growth (MOST POPULAR) */}
          <div className="bg-white rounded-[28px] p-7 sm:p-9 border-2 border-zinc-950 shadow-lg flex flex-col justify-between relative transition-all">
            {/* Pill Badge at the very top */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="bg-[#d9f99d] text-zinc-950 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-xs border border-lime-300">
                MOST POPULAR
              </span>
            </div>

            <div className="space-y-6">
              {/* Header Info */}
              <div className="space-y-3 min-h-[88px]">
                <h3
                  className="text-3xl font-bold text-zinc-950 font-serif tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Growth
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  For active online sellers & shops managing daily courier orders.
                </p>
              </div>

              {/* Pricing */}
              <div className="space-y-1.5 pt-1">
                <div
                  className="text-4xl sm:text-5xl font-bold text-zinc-950 font-serif tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Rs. 1,499
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 font-medium flex-wrap">
                  <span>Per month</span>
                  <span className="border border-dashed border-amber-400 bg-amber-50/70 text-amber-800 text-[11px] font-medium px-2 py-0.5 rounded">
                    [Editable Benchmark]
                  </span>
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-6">
                <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-700">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-bold text-zinc-950">Everything in Starter</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Advanced cash-flow tracking & cash in hand</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Courier Cash-on-Delivery (COD) reconciliation</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Customer database & payment dues record</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>AI Message Parser (unlimited WhatsApp/IG parsing)</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Low-stock warning badges</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-8">
              <a
                href={LEDGER_SOFTWARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <span>Start with Growth</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Business */}
          <div className="bg-white rounded-[28px] p-7 sm:p-9 border border-zinc-200/90 shadow-xs flex flex-col justify-between transition-all hover:shadow-md hover:border-zinc-300">
            <div className="space-y-6">
              {/* Header Info */}
              <div className="space-y-3 min-h-[88px]">
                <h3
                  className="text-3xl font-bold text-zinc-950 font-serif tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Business
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  For expanding retail merchants and high-volume commercial workflows.
                </p>
              </div>

              {/* Pricing */}
              <div className="space-y-1.5 pt-1">
                <div
                  className="text-4xl sm:text-5xl font-bold text-zinc-950 font-serif tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Rs. 3,999
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 font-medium flex-wrap">
                  <span>Per month</span>
                  <span className="border border-dashed border-amber-400 bg-amber-50/70 text-amber-800 text-[11px] font-medium px-2 py-0.5 rounded">
                    [Editable Benchmark]
                  </span>
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-6">
                <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-700">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-bold text-zinc-950">Everything in Growth</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Multi-location inventory tracking</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Staff & cashier permission levels</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Advanced business analytics & AOV breakdown</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Automated daily sales summaries</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Priority startup onboarding & dedicated support</span>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>Custom export formats & audit tools</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-8">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Talk to Sales</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Trust & Guarantee Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-50 rounded-3xl p-6 sm:p-8 border border-zinc-200 text-center space-y-3">
          <h4 className="text-base sm:text-lg font-bold text-zinc-900">
            Have questions about custom requirements?
          </h4>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Whether you run a single boutique stall, a busy catering kitchen, or a wholesale retail store, our team can help you configure the right setup.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-white hover:bg-zinc-100 text-zinc-800 text-xs sm:text-sm font-semibold rounded-xl border border-zinc-200 transition-colors shadow-2xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
