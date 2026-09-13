import React from 'react';
import { Store, Home, ShoppingBag, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { AUDIENCES, LEDGER_SOFTWARE_URL } from '../../data/content';
import { PageId } from '../../types';

interface SmallBusinessesProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const SmallBusinesses: React.FC<SmallBusinessesProps> = ({ onNavigate, onOpenSoftware }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store':
        return <Store className="w-5 h-5" />;
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-zinc-50 border-y border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Built for small businesses
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Running a small business already comes with enough to manage. Ledger keeps your everyday business records simple, organized, and easy to understand.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-zinc-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors mb-4">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-emerald-700 mt-1">
                  {item.summary}
                </p>

                <p className="text-xs text-zinc-500 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Ready to use
                </span>
                <a
                  href={LEDGER_SOFTWARE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Open Ledger</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
