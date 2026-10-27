import React from 'react';
import { CurvedUnderline, CoffeeBeanIcon } from './CurvedUnderline';
import { ScrollReveal } from './ScrollReveal';

export const WhyRara: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'FRESHLY SERVED',
      tagline: 'Never Pre-Made, Always Hot',
      desc: 'Whether it is a crackling samosa or an aromatic brew, each order is prepared fresh at the counter right when you ask for it.',
      // Custom SVG line art
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#C87932]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 28c0-8 6-14 12-14s12 6 12 14v6H12v-6z" />
          <path d="M8 34h32v4H8z" />
          <path d="M24 6v4" />
          <path d="M18 8l2 2" />
          <path d="M30 8l-2 2" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'CRISPY & COMFORTING',
      tagline: 'The Crunch You Crave',
      desc: 'Golden-fried delicacies and spiced snacks with just the right crunch to elevate your evening tea breaks.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#C87932]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 16l4 24h12l4-24" />
          <path d="M10 16h28" />
          <path d="M16 16V8l4-2 4 2v8" />
          <path d="M24 16v-8" />
          <path d="M28 16V8l4-2 4 2v8" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'COFFEE WORTH PAUSING FOR',
      tagline: 'Soulful Chicory Decoction',
      desc: 'Slow-dripped decoction frothed high into brass tumblers — the timeless South Indian ritual that makes every pause worthwhile.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#C87932]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 20h22v12a8 8 0 01-8 8H18a8 8 0 01-8-8V20z" />
          <path d="M32 23h4a4 4 0 010 8h-4" />
          <path d="M6 42h30" />
          <path d="M16 10c0-2 2-3 2-5" />
          <path d="M22 10c0-2 2-3 2-5" />
          <path d="M28 10c0-2 2-3 2-5" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'A PLACE TO HANG OUT',
      tagline: 'Good People, Good Company',
      desc: 'Wooden tables, warm lighting, and a welcoming neighbourhood vibe where you can unwind with friends or read your book.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#C87932]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="18" r="6" />
          <circle cx="32" cy="18" r="6" />
          <path d="M8 36v-4a8 8 0 0116 0v4" />
          <path d="M24 36v-4a8 8 0 0116 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-paper-texture border-b border-[#C87932]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700} className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <CoffeeBeanIcon size={16} color="#C87932" />
            <span className="font-serif text-xs uppercase tracking-widest text-[#5A2918] font-bold">
              THE RARA PROMISE
            </span>
            <CoffeeBeanIcon size={16} color="#C87932" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#21100A] tracking-tight">
            WHY RARA?
          </h2>
          
          <div className="mt-2 mx-auto w-36">
            <CurvedUnderline color="#C87932" width="100%" />
          </div>

          <p className="mt-4 text-[#5A2918]/80 text-base font-sans">
            Four simple reasons people keep coming back to our Karappakkam corner.
          </p>
        </ScrollReveal>

        {/* 4 Visual Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, index) => (
            <ScrollReveal
              key={p.num}
              animation="fade-up"
              delay={index * 120}
              duration={650}
            >
              <div
                className="relative bg-[#FFF8EA] rounded-2xl p-6 sm:p-7 border-2 border-[#5A2918]/20 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 h-full flex flex-col justify-between"
              >
                <div>
                  {/* Pillar Number Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-4xl font-black text-[#C87932] group-hover:text-[#3A170D] transition-colors">
                      {p.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#F4E7D0] border border-[#C87932]/30 group-hover:rotate-6 transition-transform">
                      {p.icon}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#21100A] tracking-tight group-hover:text-[#C87932] transition-colors">
                    {p.title}
                  </h3>
                  
                  <p className="text-xs font-mono font-bold text-[#6D7A45] uppercase tracking-wider mt-1 mb-3">
                    {p.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5A2918]/80 font-sans leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {/* Bottom decorative corner */}
                <div className="mt-6 pt-3 border-t border-[#3A170D]/10 flex items-center justify-between text-[11px] font-mono text-[#5A2918]/60">
                  <span>RaRa Standard</span>
                  <span>✦</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
