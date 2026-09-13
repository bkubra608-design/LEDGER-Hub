import React from 'react';
import { FOUNDERS } from '../../data/content';
import { Sparkles, Code2, Users, Briefcase, HeartHandshake } from 'lucide-react';

export const Founders: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Meet the Team
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            The people dedicated to simplifying everyday business management for small business owners and independent entrepreneurs.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="bg-zinc-50/70 rounded-2xl p-7 border border-zinc-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-bold text-xl shadow-xs">
                    {founder.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {founder.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-950">
                  {founder.name}
                </h3>

                <p className="text-sm font-semibold text-emerald-700 mt-0.5">
                  {founder.role}
                </p>

                <p className="text-sm text-zinc-600 mt-4 leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-200/70 flex items-center justify-between text-xs text-zinc-500">
                <span className="flex items-center gap-1.5 font-medium text-zinc-700">
                  {founder.role.includes('Co-Founder') ? (
                    <>
                      <Code2 className="w-3.5 h-3.5 text-emerald-600" />
                      Technology & AI Systems
                    </>
                  ) : (
                    <>
                      <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                      Product & Entrepreneurship
                    </>
                  )}
                </span>
                <span className="text-[11px] text-zinc-400">Ledger Leadership</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-center text-xs text-zinc-600 flex items-center justify-center gap-2">
          <HeartHandshake className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Built with authenticity and practical care at <strong>NIC Hyderabad</strong> to solve the real daily needs of growing businesses.
          </span>
        </div>
      </div>
    </section>
  );
};
