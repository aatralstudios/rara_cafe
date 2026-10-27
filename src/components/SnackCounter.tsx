import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { CurvedUnderline, CoffeeBeanIcon } from './CurvedUnderline';
import { ScrollReveal } from './ScrollReveal';

interface CounterItem {
  id: string;
  badge: string;
  name: string;
  tamilTag?: string;
  note: string;
  price: string;
  iconType: 'coffee' | 'fries' | 'chai' | 'snack';
}

export const SnackCounter: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const counterItems: CounterItem[] = [
    {
      id: 'c1',
      badge: 'HOUSE SPECIAL',
      name: 'South Indian Filter Kaapi',
      tamilTag: 'டிகிரி காபி',
      note: 'Dabara set • Slow drip decoction • Frothy',
      price: '₹ --',
      iconType: 'coffee',
    },
    {
      id: 'c2',
      badge: 'TOP CRUNCH',
      name: 'Crispy Peri-Peri Fries',
      tamilTag: 'மசாலா பொரியல்',
      note: 'Freshly fried • Spicy house rub • Crisp',
      price: '₹ --',
      iconType: 'fries',
    },
    {
      id: 'c3',
      badge: 'EVENING MUST',
      name: 'Cutting Masala Chai',
      tamilTag: 'கட்டிங் டீ',
      note: 'Cardamom & ginger punch • Piping hot',
      price: '₹ --',
      iconType: 'chai',
    },
    {
      id: 'c4',
      badge: 'CLASSIC BITE',
      name: 'Hot Onion & Potato Samosa',
      tamilTag: 'சூடான சமோசா',
      note: 'Flaky crust • Mint chutney dip • Savoury',
      price: '₹ --',
      iconType: 'snack',
    },
    {
      id: 'c5',
      badge: 'CHILL PICK',
      name: 'Cold Filter Brew & Cream',
      tamilTag: 'குளிர் காபி',
      note: 'Rich iced chicory milk blend • Refreshing',
      price: '₹ --',
      iconType: 'coffee',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="snack-counter" className="py-20 bg-[#21100A] bg-wood-pattern relative overflow-hidden border-b-4 border-[#C87932]/40">
      
      {/* Decorative Wood Counter Beam Top */}
      <div className="h-4 bg-[#3A170D] border-b border-[#C87932]/40 shadow-inner w-full mb-8"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Physical Café Board Aesthetic */}
        <ScrollReveal animation="fade-up" duration={700} className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame size={18} className="text-[#C87932] animate-bounce" />
              <span className="font-mono text-xs tracking-widest text-[#C87932] font-bold uppercase">
                THE PHYSICAL CAFE COUNTER
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FFF8EA]">
              WHAT’S HOT?
            </h2>
            <div className="w-32 mt-2">
              <CurvedUnderline color="#C87932" width="100%" />
            </div>
            <p className="text-[#F4E7D0]/70 text-sm font-sans mt-2">
              Step up to the counter. Everything made fresh to order.
            </p>
          </div>

          {/* Desktop Scroll Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-[#3A170D] border border-[#C87932]/50 text-[#F4E7D0] hover:bg-[#C87932] hover:text-white transition-all shadow-md cursor-pointer"
              aria-label="Scroll snack counter left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-[#3A170D] border border-[#C87932]/50 text-[#F4E7D0] hover:bg-[#C87932] hover:text-white transition-all shadow-md cursor-pointer"
              aria-label="Scroll snack counter right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </ScrollReveal>

        {/* Horizontal Scrolling Board (Swipeable on mobile) */}
        <ScrollReveal animation="fade-up" delay={150} duration={750}>
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
          {counterItems.map((item, index) => (
            <div
              key={item.id}
              className="shrink-0 w-72 sm:w-80 snap-start bg-[#FFF8EA] rounded-xl p-5 shadow-2xl border-4 border-[#5A2918] flex flex-col justify-between relative group hover:-translate-y-1.5 transition-transform duration-300"
            >
              {/* Top wooden clip / badge */}
              <div className="flex items-center justify-between border-b-2 border-[#5A2918]/20 pb-3 mb-3">
                <span className="bg-[#5A2918] text-[#FFF8EA] text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-sm uppercase">
                  {item.badge}
                </span>
                <span className="font-mono text-xs font-bold text-[#3A170D]">
                  No. 0{index + 1}
                </span>
              </div>

              {/* Board Body */}
              <div className="space-y-2 py-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-xl font-black text-[#21100A] leading-snug">
                    {item.name}
                  </h3>
                </div>

                {item.tamilTag && (
                  <p className="font-serif text-xs text-[#C87932] font-semibold">
                    {item.tamilTag}
                  </p>
                )}

                <p className="text-xs text-[#5A2918]/80 font-hand text-sm pt-1">
                  {item.note}
                </p>
              </div>

              {/* Price Tag Slate at bottom */}
              <div className="mt-4 pt-3 border-t-2 border-dashed border-[#5A2918]/30 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <CoffeeBeanIcon size={16} color="#5A2918" />
                  <span className="text-[11px] font-mono text-[#5A2918]">COUNTER PRICE</span>
                </div>
                <span className="font-mono text-base font-extrabold text-[#3A170D] bg-[#F4E7D0] px-3 py-0.5 rounded-md border border-[#C87932]/40">
                  {item.price}
                </span>
              </div>

              {/* Corner Nail Accents */}
              <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#3A170D]"></span>
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#3A170D]"></span>
            </div>
          ))}
        </div>
        </ScrollReveal>

        {/* Micro-hint on Mobile */}
        <p className="text-center text-xs text-[#F4E7D0]/60 font-sans mt-2 md:hidden">
          ← Swipe left or right to explore counter specials →
        </p>

      </div>
    </section>
  );
};
