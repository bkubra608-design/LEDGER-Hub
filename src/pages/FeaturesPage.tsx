import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Package, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import { LEDGER_SOFTWARE_URL } from '../data/content';

interface FeaturesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate, onOpenSoftware }) => {
  const featuresList = [
    {
      id: 'dashboard',
      title: 'Smart Overview',
      subtitle: 'Get a clear overview of business activity.',
      description: 'See today\'s revenue, total costs, net profit, and order status at a glance. Understand your financial standing in seconds without running complex reports.',
      icon: TrendingUp,
      bulletPoints: ['Live revenue and profit margins', 'Daily order volume counter', 'Cash on hand vs pending dues']
    },
    {
      id: 'sales',
      title: 'Sales Tracking',
      subtitle: 'Record sales and understand revenue and profit.',
      description: 'Record each sale with a tap. Ledger instantly calculates your margin by matching sales against inventory purchase costs.',
      icon: DollarSign,
      bulletPoints: ['Automatic cost-of-goods deduction', 'Detailed transaction records', 'Instant calculation of profit margins']
    },
    {
      id: 'orders',
      title: 'Orders & Cash Flow',
      subtitle: 'Track orders, payments, advances, dues, and cash.',
      description: 'Never lose track of what customers owe. Record upfront customer advances, track pending balance dues, and monitor dispatch status.',
      icon: ShoppingBag,
      bulletPoints: ['Customer advances and balance dues', 'Order dispatch and delivery status', 'Clear cash inflow and outflow tracking']
    },
    {
      id: 'inventory',
      title: 'Inventory Management',
      subtitle: 'Add stock and monitor inventory.',
      description: 'Monitor stock counts in real time. Ledger highlights low-stock items so you re-order before running out of your bestselling goods.',
      icon: Package,
      bulletPoints: ['Stock unit counts and purchase cost tracking', 'Automated low-stock visual warnings', 'Seamless synchronization with recorded sales']
    },
    {
      id: 'message-parser',
      title: 'Message Parser',
      subtitle: 'Extract order details from customer messages.',
      description: 'Paste unstructured order chats from customer messaging apps. Ledger extracts customer names, items, quantities, addresses, and payments instantly.',
      icon: Sparkles,
      bulletPoints: ['Zero manual order retyping', 'Handles customer text chats', 'One-click save to active orders']
    }
  ];

  return (
    <div className="pt-8 pb-20 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
          Everything you need. <br />
          Nothing you don't.
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
          Every tool in Ledger is built specifically for small businesses: keeping business records clean, tracking cash flow, and giving you instant profit visibility.
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

      {/* Feature Grid Breakdown */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-7 border border-zinc-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">{feature.title}</h3>
                    <p className="text-xs font-semibold text-emerald-700 mt-0.5">{feature.subtitle}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{feature.description}</p>

                  <div className="space-y-2 pt-2">
                    {feature.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Included in Ledger</span>
                  <a
                    href={LEDGER_SOFTWARE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Open Ledger</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
