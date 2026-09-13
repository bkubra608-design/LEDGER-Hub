import React from 'react';
import { 
  DollarSign, 
  ShoppingBag, 
  Wallet, 
  Package, 
  TrendingUp, 
  FolderCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const BuiltAroundWork: React.FC = () => {
  const highlights = [
    {
      title: 'Record sales',
      description: 'Quickly log each item or service sold without complex accounting procedures. Totals and tax calculations update instantaneously.',
      icon: DollarSign,
      stat: 'Fast 1-tap entry',
      badge: 'Sales Engine'
    },
    {
      title: 'Track orders',
      description: 'Keep tabs on customer requests, packaging stages, scheduled deliveries, and fulfillment status in one clear list.',
      icon: ShoppingBag,
      stat: 'Order lifecycle',
      badge: 'Order Desk'
    },
    {
      title: 'Monitor cash',
      description: 'Always know your exact cash in register, bank balances, customer advance payments, and outstanding pending dues.',
      icon: Wallet,
      stat: 'Advances & Dues',
      badge: 'Cash Flow'
    },
    {
      title: 'Manage inventory',
      description: 'Keep accurate counts of stock units, item costs, and automatic warnings when raw materials or product counts drop low.',
      icon: Package,
      stat: 'Low stock alerts',
      badge: 'Stock Room'
    },
    {
      title: 'Understand profit',
      description: 'See real net profit calculated by deducting actual costs from daily sales. No surprises at the end of the month.',
      icon: TrendingUp,
      stat: 'Clear margins',
      badge: 'Financial Clarity'
    },
    {
      title: 'Keep business information organized',
      description: 'Replace fragmented paper notebooks, sticky receipts, and lost messaging threads with a centralized, reliable ledger.',
      icon: FolderCheck,
      stat: 'All in one place',
      badge: 'Organization'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Built around the way you actually work.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Ledger focuses on the important information a small business owner needs instead of overwhelming them with unnecessary complexity.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-zinc-200/90 bg-zinc-50/40 hover:bg-white hover:border-emerald-300/80 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-500 bg-white px-2 py-0.5 rounded-full border border-zinc-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-200/60 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.stat}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
