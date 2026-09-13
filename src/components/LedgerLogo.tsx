import React from 'react';

interface LedgerLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  theme?: 'dark' | 'light';
}

export const LedgerLogo: React.FC<LedgerLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  theme = 'light'
}) => {
  const isLight = theme === 'light';

  // Dimension scaling
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-2xl';
  const subtitleSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[11px]';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Brand Icon: Rounded black/white square with concentric diamond */}
      <div
        className={`${iconSize} rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-xs transition-transform ${
          isLight ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-950'
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[60%] h-[60%]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 50 14 L 86 50 L 50 86 L 14 50 Z M 50 32 L 68 50 L 50 68 L 32 50 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center leading-tight">
        <span
          className={`${titleSize} font-bold font-serif tracking-tight ${
            isLight ? 'text-zinc-950' : 'text-white'
          }`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Ledger
        </span>
        {showSubtitle && (
          <span
            className={`${subtitleSize} font-medium tracking-wide ${
              isLight ? 'text-zinc-700' : 'text-zinc-300'
            }`}
          >
            Micro POS . Smart Ledger
          </span>
        )}
      </div>
    </div>
  );
};
