import React, { useState, useEffect } from 'react';
import { SteamWisp } from './CurvedUnderline';

export const LoadingScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Keep loading brief and swift as requested in spec #28
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 900);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 1300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#21100A] transition-opacity duration-400 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-live="polite"
      aria-label="Loading RaRa Cafe website"
    >
      <div className="relative flex flex-col items-center px-4 text-center">
        {/* Steam animation above logo */}
        <div className="mb-2">
          <SteamWisp className="h-10" />
        </div>

        {/* RaRa Cafe Logo */}
        <div className="w-56 sm:w-72 overflow-hidden rounded-xl shadow-2xl border border-[#C87932]/30 bg-[#3A170D] p-2 transition-transform duration-500 scale-100">
          <img
            src="/assets/brand/rara-logo.png"
            alt="RaRa Cafe Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Brewing tag */}
        <div className="mt-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C87932] animate-ping"></span>
          <p className="font-serif tracking-widest text-[#F4E7D0] text-sm uppercase">
            BREWING SOMETHING GOOD...
          </p>
        </div>

        <p className="font-sans text-xs tracking-wider text-[#C87932]/80 mt-2">
          COFFEE • SNACKS • CONVERSATIONS
        </p>
      </div>
    </div>
  );
};
