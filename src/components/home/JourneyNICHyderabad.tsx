import React from 'react';
import { Award, CheckCircle2, ArrowRight, Flag, Sparkles, MapPin } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../../data/content';

export const JourneyNICHyderabad: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-zinc-50 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            From an idea to something real.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            The story of Ledger was shaped by working closely with small business owners who just wanted clear numbers without the complexity.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200/90 shadow-xs mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
              <p>
                Ledger started as an idea focused on making business management easier for small businesses who find traditional accounting tools overwhelming.
              </p>
              <p>
                The project was developed and refined through the startup journey at <strong>NIC Hyderabad</strong> (National Incubation Center Hyderabad), where real-world validation helped shape every feature.
              </p>
              <p className="text-zinc-600 text-xs sm:text-sm">
                The experience helped us understand the importance of building technology around real business problems. Ledger is being built with an uncompromising focus on <strong>simplicity, usefulness, and accessibility</strong>.
              </p>
            </div>

            <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase tracking-wider">
                <Award className="w-4 h-4 text-emerald-600" />
                Key Principles Learned
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Build for real pain:</strong> Shopkeepers don't want debit/credit theory; they want to know if they made a profit today.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero unnecessary steps:</strong> A sale must be recordable in fewer than 10 seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Practical AI:</strong> Parse chaotic customer chat orders into structured receipts automatically.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Visual Timeline: Idea → Development → NIC Hyderabad → Product → Future */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8">
            The Journey Timeline
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TIMELINE_MILESTONES.map((milestone, idx) => (
              <div
                key={milestone.title}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                  milestone.status === 'current'
                    ? 'bg-white border-emerald-400 shadow-md ring-1 ring-emerald-400/20'
                    : milestone.status === 'completed'
                    ? 'bg-white border-zinc-200 shadow-xs'
                    : 'bg-zinc-100/70 border-dashed border-zinc-300 text-zinc-500'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="font-bold text-zinc-400">{milestone.stage}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      milestone.status === 'current'
                        ? 'bg-emerald-100 text-emerald-800'
                        : milestone.status === 'completed'
                        ? 'bg-zinc-100 text-zinc-600'
                        : 'bg-zinc-200 text-zinc-500'
                    }`}>
                      {milestone.year}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-zinc-900 mb-1.5 flex items-center gap-1.5">
                    {milestone.title}
                    {milestone.status === 'current' && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                  </h4>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {idx < TIMELINE_MILESTONES.length - 1 && (
                  <div className="hidden lg:block pt-3 text-right text-zinc-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
