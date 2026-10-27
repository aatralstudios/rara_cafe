import React from 'react';

interface CurvedUnderlineProps {
  className?: string;
  color?: string;
  width?: number | string;
}

export const CurvedUnderline: React.FC<CurvedUnderlineProps> = ({
  className = '',
  color = '#C87932',
  width = '100%',
}) => {
  return (
    <svg
      className={`overflow-visible inline-block ${className}`}
      viewBox="0 0 280 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width }}
      aria-hidden="true"
    >
      <path
        d="M3 17C45 22 95 23 150 14C205 5 245 4 277 8"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M20 20C70 24 135 21 190 12C230 5 260 7 272 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </svg>
  );
};

export const CoffeeBeanIcon: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 20,
  color = '#C87932',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="6.5"
        transform="rotate(-30 12 12)"
        fill={color}
      />
      <path
        d="M7.5 16C9 13 11 13 13 11C15 9 15 8 16.5 8"
        stroke="#21100A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const SteamWisp: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none flex gap-1.5 justify-center ${className}`}>
      <span className="w-1 h-7 rounded-full bg-gradient-to-t from-[#F4E7D0]/60 via-[#F4E7D0]/40 to-transparent blur-[1px] animate-steam-1"></span>
      <span className="w-1 h-9 rounded-full bg-gradient-to-t from-[#F4E7D0]/70 via-[#F4E7D0]/40 to-transparent blur-[1px] animate-steam-2"></span>
      <span className="w-1 h-8 rounded-full bg-gradient-to-t from-[#F4E7D0]/60 via-[#F4E7D0]/30 to-transparent blur-[1px] animate-steam-3"></span>
    </div>
  );
};
