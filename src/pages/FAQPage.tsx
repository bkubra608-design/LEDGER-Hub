import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles, 
  ArrowRight,
  MessageCircleQuestion,
  CheckCircle2
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';
import { PageId } from '../types';

interface FAQPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSoftware: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate, onOpenSoftware }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-5']);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Product', 'AI Features', 'Access', 'Finance'];

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFAQs = FAQ_ITEMS.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-8 pb-20 space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
          Frequently Asked Questions
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl mx-auto">
          Everything you need to know about Ledger, who it's for, and how it keeps your business records simple.
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto relative pt-2">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-5.5" />
          <input
            type="text"
            placeholder="Search questions (e.g., AI, profit, inventory)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-zinc-900 shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3 py-1 rounded-lg font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-zinc-200/90 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-zinc-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm sm:text-base font-bold text-zinc-900">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 bg-emerald-50 text-emerald-700' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 animate-fadeIn">
                      <p>{faq.answer}</p>
                      {faq.id === 'faq-6' || faq.id === 'faq-7' ? (
                        <div className="mt-3">
                          <button
                            onClick={onOpenSoftware}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-500 transition-colors"
                          >
                            <span>Open Ledger Now</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-zinc-200 p-6 space-y-2">
              <MessageCircleQuestion className="w-8 h-8 text-zinc-400 mx-auto" />
              <div className="text-sm font-bold text-zinc-800">No questions found matching your search.</div>
              <p className="text-xs text-zinc-500">Try clearing the search query or category filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-2 text-xs text-emerald-700 font-semibold underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still have questions? */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-zinc-900">Have a specific question not listed here?</h4>
            <p className="text-xs text-zinc-500 mt-0.5">
              Our team at NIC Hyderabad is always happy to help small business owners.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 font-semibold text-xs rounded-xl transition-colors shrink-0 shadow-xs"
          >
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};
