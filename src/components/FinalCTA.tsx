import React from 'react';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { CurvedUnderline, CoffeeBeanIcon, SteamWisp } from './CurvedUnderline';
import { ScrollReveal } from './ScrollReveal';

export const FinalCTA: React.FC = () => {
  const phone = '088087 01617';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'RaRa Cafe 1/413 Natesan Avenue Rajiv Gandhi Salai Karappakkam Chennai 600097'
  )}`;

  return (
    <section className="py-24 lg:py-32 bg-[#21100A] bg-wood-pattern text-[#F4E7D0] relative overflow-hidden border-b-4 border-[#C87932]">
      
      {/* Decorative Floating Beans & Steam */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-12 left-16 animate-float">
          <CoffeeBeanIcon size={32} color="#C87932" />
        </div>
        <div className="absolute bottom-16 right-20 animate-float-delayed">
          <CoffeeBeanIcon size={28} color="#6D7A45" />
        </div>
      </div>

      <ScrollReveal animation="zoom-in" duration={800} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Steam Animation */}
        <div className="mb-4">
          <SteamWisp className="h-10" />
        </div>

        {/* Small Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#5A2918]/80 border border-[#C87932]/40 text-[#F4E7D0] text-xs font-serif tracking-widest uppercase mb-6">
          <CoffeeBeanIcon size={14} color="#C87932" />
          <span>YOUR KARAPPAKKAM STOP</span>
          <CoffeeBeanIcon size={14} color="#C87932" />
        </div>

        {/* Large Text (Requirement #30) */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#FFF8EA] tracking-tight leading-tight">
          READY FOR A <br />
          <span className="text-[#C87932] italic">LITTLE BREAK?</span>
        </h2>

        <div className="mt-3 mx-auto w-56">
          <CurvedUnderline color="#C87932" width="100%" />
        </div>

        {/* Supporting Text */}
        <p className="mt-6 text-[#F4E7D0]/90 text-lg sm:text-xl font-sans max-w-xl mx-auto leading-relaxed">
          Coffee, something crispy and a place to slow down.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C87932] text-[#FFF8EA] font-bold text-sm tracking-wider hover:bg-[#b06725] transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <MapPin size={16} />
            <span>GET DIRECTIONS →</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#3A170D] hover:bg-[#5A2918] border border-[#C87932]/50 text-[#F4E7D0] font-bold text-sm tracking-wider transition-all duration-200 hover:scale-105"
          >
            <Phone size={16} className="text-[#C87932]" />
            <span>CALL RARA CAFE</span>
          </a>
        </div>

        {/* Address subtext */}
        <p className="mt-8 text-xs font-mono text-[#F4E7D0]/60 tracking-wider">
          1/413, Natesan Avenue, Rajiv Gandhi Salai, Karappakkam, Chennai 600097
        </p>

      </ScrollReveal>
    </section>
  );
};
