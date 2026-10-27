import React from 'react';
import { CurvedUnderline, CoffeeBeanIcon } from './CurvedUnderline';

export const VisualStory: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#21100A] text-[#F4E7D0] relative overflow-hidden border-b-4 border-[#C87932]/40">
      
      {/* Background Ambience Texture */}
      <div className="absolute inset-0 opacity-10 bg-wood-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Top Headline */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#C87932]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#C87932] font-bold">
              THE RARA CULTURE
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#FFF8EA] leading-[1.08]">
            COME FOR THE SNACK. <br />
            <span className="italic text-[#C87932]">STAY FOR THE MOMENT.</span>
          </h2>

          <div className="mt-4 w-60">
            <CurvedUnderline color="#C87932" width="100%" />
          </div>
        </div>

        {/* Asymmetrical Magazine Collage (Requirement #13) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Main Feature Coffee & Spices (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C87932]/40 bg-[#3A170D] group">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/food/hot-chai.jpg"
                  alt="Aromatic spiced tea poured with spices on dark wood"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-gradient-to-t from-[#21100A] to-[#3A170D]/90 border-t border-[#C87932]/30">
                <p className="font-hand text-xl text-[#F4E7D0]">
                  “A steaming glass in hand, the world slows down.”
                </p>
                <span className="text-[11px] font-mono text-[#C87932] uppercase tracking-wider block mt-1">
                  Cardamom • Ginger • Whole Spices
                </span>
              </div>
            </div>

            {/* Overlapping Stamp */}
            <div className="absolute -top-4 -right-4 bg-[#C87932] text-[#21100A] p-3 rounded-full font-serif font-black text-xs uppercase shadow-xl rotate-12 flex flex-col items-center justify-center w-18 h-18 text-center border-2 border-[#21100A]">
              <span>KARAP</span>
              <span>PAKKAM</span>
            </div>
          </div>

          {/* Column 2: Story Text + Overlapping Snack Basket (7 cols) */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            
            {/* Editorial Paragraph */}
            <div className="space-y-4 text-base sm:text-lg text-[#F4E7D0]/90 font-sans leading-relaxed">
              <p>
                There’s something sacred about the evening snack hour in Chennai. The sizzling sound of savoury fritters meeting hot oil, the aromatic cloud of freshly roasted chicory beans, and the sudden quiet laughter between friends who paused their busy day.
              </p>
              <p className="text-[#C87932] font-serif italic text-xl">
                RaRa Cafe was built around this very feeling.
              </p>
              <p>
                We believe great cafés don’t need pretension. They need honest warmth, unwavering flavour, and a counter where anyone feels immediately welcome.
              </p>
            </div>

            {/* Overlapping Horizontal Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Card A: Crispy Snack Closeup */}
              <div className="rounded-xl overflow-hidden border border-[#C87932]/30 bg-[#3A170D] p-3 shadow-lg">
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-3">
                  <img
                    src="/assets/food/crispy-snacks.jpg"
                    alt="Crispy masala snacks on rustic paper"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#FFF8EA]">
                  The Daily Crunch
                </h4>
                <p className="text-xs text-[#F4E7D0]/70 font-sans mt-0.5">
                  Hand-cut, seasoned with fresh curry leaves and secret spice rub.
                </p>
              </div>

              {/* Card B: Filter Coffee Art */}
              <div className="rounded-xl overflow-hidden border border-[#C87932]/30 bg-[#3A170D] p-3 shadow-lg">
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-3">
                  <img
                    src="/assets/food/filter-coffee.jpg"
                    alt="South Indian filter coffee in brass dabara"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#FFF8EA]">
                  The Frothy Pour
                </h4>
                <p className="text-xs text-[#F4E7D0]/70 font-sans mt-0.5">
                  Aerated between cup and dabara to form velvety microfoam.
                </p>
              </div>

            </div>

            {/* Footer Quote Signature */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/10">
              <CoffeeBeanIcon size={20} color="#C87932" />
              <p className="font-mono text-xs text-[#F4E7D0]/60 tracking-wider">
                1/413, Natesan Avenue, Rajiv Gandhi Salai, Karappakkam
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
