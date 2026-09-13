import React from 'react';
import { 
  Heart, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Package, 
  FolderCheck,
  MapPin
} from 'lucide-react';
import { Founders } from '../components/home/Founders';
import { JourneyNICHyderabad } from '../components/home/JourneyNICHyderabad';
import { PageId } from '../types';
import { LEDGER_SOFTWARE_URL } from '../data/content';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenSoftware }) => {
  const whyLedgerPoints = [
    {
      label: 'What they sold',
      desc: 'Instant recording of customer transactions without complicated double-entry balance bookkeeping.',
      icon: DollarSign
    },
    {
      label: 'What they spent',
      desc: 'Transparent operational costs and materials expenses tracked alongside each product.',
      icon: TrendingUp
    },
    {
      label: 'What they earned',
      desc: 'Real net profit calculated on the spot so owners always know what they take home.',
      icon: CheckCircle2
    },
    {
      label: 'What orders are pending',
      desc: 'Clear visibility into pending customer requests, deliveries, advances received, and dues owed.',
      icon: ShoppingBag
    },
    {
      label: 'What stock they have',
      desc: 'Real-time inventory levels with automated low-stock warnings before products run out.',
      icon: Package
    },
    {
      label: 'How their business is performing',
      desc: 'A straightforward daily and weekly overview with zero accounting jargon.',
      icon: FolderCheck
    }
  ];

  return (
    <div className="pt-8 pb-20 space-y-16 sm:space-y-24">
      {/* Header section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
          Simplifying business management for small businesses.
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
          We believe small businesses are the backbone of our economy. They deserve software that works with them, not against them.
        </p>
      </section>

      {/* Mission & Story Container */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Our Story Card */}
          <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 text-emerald-400 flex items-center justify-center font-bold text-lg">
                <Heart className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Our Story</h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Ledger started when we observed local storekeepers, home bakers, and online boutique sellers wrestling with messy paper ledgers, fragmented WhatsApp messages, and needlessly complicated accounting software.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Most existing tools were built for corporate accountants, full of confusing tax codes, complex journals, and enterprise jargon. Small business owners didn't need a 50-tab financial ERP — they just needed to know their sales, cash, orders, and profit.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                That realization became Ledger: a streamlined, practical tool designed specifically around the daily rhythm of small businesses.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs text-zinc-500">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Developed & refined through the startup journey at NIC Hyderabad</span>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white rounded-3xl p-8 border border-zinc-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Our Mission</h2>
              <blockquote className="text-xl sm:text-2xl font-medium text-emerald-300 leading-relaxed italic">
                "To make business management simpler for small businesses and entrepreneurs."
              </blockquote>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                We exist to remove the friction of business administration. By giving business owners instant clarity on their numbers, we empower them to make confident decisions, save hours every week, and sustainably grow their livelihood.
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Zero accounting barrier</span>
              <a
                href={LEDGER_SOFTWARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Experience Ledger</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ledger Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-50 rounded-3xl p-8 sm:p-12 border border-zinc-200">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-950">
              Why Ledger?
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Many small businesses don't need complicated financial software. They need something that helps them quickly understand six core essentials:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyLedgerPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-zinc-900">{item.label}</h3>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-emerald-950 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-emerald-300">All in one simple platform</h4>
              <p className="text-xs text-zinc-300 mt-0.5">
                Ledger brings these everyday business activities together without complicated setups.
              </p>
            </div>
            <a
              href={LEDGER_SOFTWARE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-xl inline-flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
            >
              <span>Open Ledger</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* NIC Hyderabad Journey */}
      <JourneyNICHyderabad />

      {/* Founders Section */}
      <Founders />

      {/* Packages Link Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-zinc-950">Looking for our packages and plans?</h3>
            <p className="text-xs sm:text-sm text-zinc-600">Explore our Starter, Growth, and Business packages designed for businesses at any stage.</p>
          </div>
          <button
            onClick={() => onNavigate('packages')}
            className="px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
          >
            <span>View Packages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
