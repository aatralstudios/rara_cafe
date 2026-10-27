import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { CurvedUnderline, CoffeeBeanIcon, SteamWisp } from './CurvedUnderline';
import { ScrollReveal } from './ScrollReveal';
import { asset } from '../utils/asset';

export const Hero: React.FC = () => {
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=RaRa+Cafe+Karappakkam+Chennai+600097';

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] bg-wood-pattern pt-24 pb-16 lg:py-32 flex items-center overflow-hidden border-b-4 border-[#C87932]/40"
    >
      {/* Decorative Floating Beans & Vintage Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-16 left-10 animate-float">
          <CoffeeBeanIcon size={26} color="#C87932" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float-delayed">
          <CoffeeBeanIcon size={20} color="#6D7A45" />
        </div>
        <div className="absolute top-1/3 right-12 animate-float">
          <CoffeeBeanIcon size={28} color="#C87932" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT: Editorial Typography & CTAs (7 cols) */}
          <ScrollReveal animation="fade-right" duration={850} className="lg:col-span-7 text-left space-y-6 z-10">
            {/* Vintage Micro-Badges (Requirement #6) */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5A2918]/80 border border-[#C87932]/50 text-[#F4E7D0] text-xs font-serif tracking-widest uppercase">
                <Sparkles size={12} className="text-[#C87932]" />
                EST. FOR GOOD MOMENTS
              </span>
              <span className="font-hand text-sm text-[#C87932] tracking-wider font-semibold">
                ✦ COFFEE • CRUNCH • CHAT ✦
              </span>
            </div>

            {/* Oversized Headline */}
            <div className="relative">
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#FFF8EA] leading-[1.12] sm:leading-[1.08]">
                YOUR LITTLE BREAK <br />
                <span className="text-[#F4E7D0]">FROM THE </span>
                <span className="relative inline-block text-[#C87932] italic font-serif">
                  EVERYDAY.
                  <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full">
                    <CurvedUnderline color="#C87932" width="100%" />
                  </span>
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-[#F4E7D0]/90 text-sm sm:text-base md:text-lg max-w-xl font-sans leading-relaxed pt-2">
              Fresh snacks, comforting coffee and good conversations — served the <strong className="text-[#FFF8EA] font-semibold">RaRa</strong> way in the heart of Karappakkam, Chennai.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              {/* Primary CTA */}
              <a
                href="#menu"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#C87932] text-[#FFF8EA] font-bold text-sm tracking-wider hover:bg-[#b06725] transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-orange-950/50 hover:translate-x-0.5 text-center min-h-[46px]"
              >
                <span>EXPLORE THE MENU</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3A170D]/90 hover:bg-[#5A2918] border border-[#C87932]/60 text-[#F4E7D0] font-semibold text-sm tracking-wider transition-all duration-200 hover:text-white text-center min-h-[46px]"
              >
                <MapPin size={16} className="text-[#C87932]" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

            {/* Quick Micro-Detail / Location Tag */}
            <div className="pt-4 flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#F4E7D0]/70 font-sans border-t border-white/10 max-w-lg">
              <span className="w-2 h-2 rounded-full bg-[#6D7A45] shrink-0"></span>
              <span>Dine-In • Karappakkam, Rajiv Gandhi Salai (OMR) • Open Daily</span>
            </div>
          </ScrollReveal>

          {/* RIGHT: Visual Hero Composition (5 cols) */}
          <ScrollReveal animation="fade-left" duration={900} delay={150} className="lg:col-span-5 relative flex justify-center items-center">
            {/* Warm Ambient Glow behind Artwork */}
            <div className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#C87932]/20 blur-3xl pointer-events-none"></div>

            {/* Main Showcase Card with Authentic Wood & Artwork */}
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 border-[#C87932]/50 shadow-2xl bg-[#21100A] p-3 sm:p-5 group">
              {/* Vintage Inner Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#C87932]/30 bg-gradient-to-b from-[#3A170D] to-[#21100A] p-3 sm:p-4 flex flex-col items-center">
                
                {/* Official RaRa Cafe Logo Banner */}
                <div className="w-full max-w-xs mb-3 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={asset('/assets/brand/rara-logo.png')}
                    alt="RaRa Cafe Official Logo"
                    className="w-full h-auto object-contain drop-shadow-lg"
                  />
                </div>

                {/* Hand-Drawn Coffee & Fries Illustration with Rising Steam */}
                <div className="relative w-full flex flex-col items-center mt-2">
                  {/* Steam Rising above the coffee cup */}
                  <div className="absolute top-2 right-16 sm:right-20 z-20">
                    <SteamWisp className="h-10" />
                  </div>

                  <img
                    src={asset('/assets/brand/rara-hero-illustration.png')}
                    alt="Hand-drawn crispy snack fries and hot steaming coffee cup"
                    className="w-full h-auto object-contain rounded-lg filter contrast-110 drop-shadow-md"
                  />
                </div>

                {/* Hand-drawn caption stamp */}
                <div className="mt-3 w-full flex items-center justify-between px-2 pt-2 border-t border-[#C87932]/30 text-xs">
                  <span className="font-hand text-[#F4E7D0] text-sm">
                    ~ Hot &amp; Fresh Everyday ~
                  </span>
                  <span className="font-mono text-[#C87932] tracking-wider text-[11px] font-bold">
                    KARAPPAKKAM, CHENNAI
                  </span>
                </div>
              </div>

              {/* Decorative Corner Nails */}
              <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#C87932]/60 border border-[#21100A]"></span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#C87932]/60 border border-[#21100A]"></span>
              <span className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#C87932]/60 border border-[#21100A]"></span>
              <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#C87932]/60 border border-[#21100A]"></span>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
