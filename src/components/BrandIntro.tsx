import React from 'react';
import { CoffeeBeanIcon, CurvedUnderline } from './CurvedUnderline';
import { ScrollReveal } from './ScrollReveal';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-paper-texture border-b border-[#C87932]/30 relative overflow-hidden">
      {/* Decorative background watermark */}
      <div className="absolute right-4 bottom-2 pointer-events-none opacity-5">
        <CoffeeBeanIcon size={240} color="#3A170D" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Editorial Typography (7 cols) */}
          <ScrollReveal animation="fade-right" duration={800} className="lg:col-span-7 space-y-6">
            
            {/* Number Tag (Requirement #8) */}
            <div className="flex items-center gap-4">
              <span className="font-serif text-5xl sm:text-6xl font-black text-[#C87932] tracking-tight">
                01
              </span>
              <div className="h-8 w-[2px] bg-[#C87932]/40"></div>
              <span className="text-xs sm:text-sm font-serif font-bold tracking-widest text-[#5A2918] uppercase">
                COFFEE • SNACKS • GOOD TIMES
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#21100A] leading-tight">
                MORE THAN JUST A <br />
                <span className="text-[#5A2918] italic">QUICK BITE.</span>
              </h2>
              <div className="mt-2 w-48">
                <CurvedUnderline color="#C87932" width="100%" />
              </div>
            </div>

            {/* Supporting Copy */}
            <p className="text-[#3A170D]/90 text-lg sm:text-xl font-sans leading-relaxed font-normal">
              RaRa Cafe is a cosy stop for those little moments that deserve good coffee, something crispy and a little time to slow down.
            </p>

            {/* Additional Brand Ethos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#3A170D]/15">
              <div className="p-4 rounded-xl bg-[#FFF8EA]/80 border border-[#C87932]/20 shadow-xs">
                <p className="font-serif font-bold text-[#3A170D] text-base mb-1">
                  Crafted with Care
                </p>
                <p className="text-xs text-[#5A2918]/80 font-sans leading-relaxed">
                  From traditional filter brews to piping hot savouries, every recipe is made to comfort your soul.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF8EA]/80 border border-[#C87932]/20 shadow-xs">
                <p className="font-serif font-bold text-[#3A170D] text-base mb-1">
                  Chennai Nostalgia
                </p>
                <p className="text-xs text-[#5A2918]/80 font-sans leading-relaxed">
                  The warmth of an old-school neighbourhood tea stall married with the calm comfort of an artisan modern café.
                </p>
              </div>
            </div>

            {/* Handwritten stamp */}
            <div className="pt-2">
              <span className="font-hand text-lg text-[#C87932] tracking-wide font-semibold">
                “Pull up a chair. There’s always time for one more cup.”
              </span>
            </div>
          </ScrollReveal>

          {/* RIGHT: Vintage Illustrated Composition (5 cols) */}
          <ScrollReveal animation="fade-left" duration={850} delay={150} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Backing Scrapbook Layer with Angle */}
              <div className="absolute inset-0 bg-[#3A170D] rounded-2xl transform rotate-2 shadow-xl opacity-90"></div>

              {/* Main Photo Card */}
              <div className="relative rounded-2xl bg-[#FFF8EA] p-4 shadow-2xl border-2 border-[#5A2918] transform -rotate-1 transition-transform hover:rotate-0 duration-300">
                
                <div className="overflow-hidden rounded-xl aspect-[4/3] relative border border-[#3A170D]/20">
                  <img
                    src="/assets/food/cafe-ambience.jpg"
                    alt="Warm RaRa Cafe atmosphere and wooden counter"
                    className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#21100A]/85 text-[#F4E7D0] text-[11px] font-mono px-2.5 py-1 rounded-md backdrop-blur-xs">
                    📍 Karappakkam, OMR
                  </div>
                </div>

                {/* Hand-lettered caption underneath */}
                <div className="mt-4 flex items-center justify-between px-1">
                  <div>
                    <h3 className="font-serif font-bold text-[#3A170D] text-sm">
                      Dine-in Warmth
                    </h3>
                    <p className="text-xs text-[#5A2918]/70 font-sans">
                      Wooden benches, warm lights &amp; good conversations
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#F4E7D0] border border-[#C87932] flex items-center justify-center">
                    <CoffeeBeanIcon size={18} color="#C87932" />
                  </div>
                </div>
              </div>

              {/* Decorative Corner Tape Stamp */}
              <div className="absolute -top-3 left-8 bg-[#C87932]/70 text-[#FFF8EA] text-[10px] font-mono font-bold tracking-widest px-4 py-1 rotate-[-4deg] shadow-sm uppercase">
                AUTHENTIC VIBES
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
