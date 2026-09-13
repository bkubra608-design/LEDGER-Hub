import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { InteractiveLedgerSoftware } from './software/InteractiveLedgerSoftware';

interface SoftwareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SoftwareModal: React.FC<SoftwareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-zinc-900 text-white flex items-center justify-between border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-zinc-950 text-sm">
              L
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight">Ledger Software</span>
                <span className="bg-emerald-950 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-700/60">
                  Ready to Use
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">Simple business management & cash flow platform</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close Ledger Software view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Interactive Ledger Workspace */}
        <div className="p-3 sm:p-5 overflow-y-auto grow bg-zinc-50">
          <div className="mb-3 flex items-center justify-between bg-emerald-50 border border-emerald-200/80 rounded-xl px-4 py-2.5 text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Welcome to Ledger!</strong> You are testing the live interactive workspace. Try switching tabs, adding quick sales, and parsing customer messages.
              </span>
            </div>
            <button
              onClick={() => {
                window.open('#', '_blank');
              }}
              className="hidden sm:flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 text-xs shrink-0 ml-3"
            >
              <span>Full Screen</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <InteractiveLedgerSoftware initialTab="dashboard" />
        </div>
      </div>
    </div>
  );
};
