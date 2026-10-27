import React from 'react';
import { MapPin, Phone, Compass, Navigation, UtensilsCrossed } from 'lucide-react';
import { CurvedUnderline } from './CurvedUnderline';
import { ScrollReveal } from './ScrollReveal';
import { asset } from '../utils/asset';

export const LocationSection: React.FC = () => {
  const address = '1/413, Natesan Avenue, Rajiv Gandhi Salai, Karappakkam, Kanchipuram, Chennai, Tamil Nadu 600097';
  const phone = '088087 01617';
  const plusCode = 'W68H+8W Karappakkam, Chennai, Tamil Nadu';
  
  // Google Maps navigation link
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'RaRa Cafe 1/413 Natesan Avenue Rajiv Gandhi Salai Karappakkam Chennai 600097'
  )}`;

  return (
    <section id="visit" className="py-20 lg:py-28 bg-[#F4E7D0] relative border-b border-[#C87932]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700} className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <Compass size={18} className="text-[#C87932] animate-spin" style={{ animationDuration: '16s' }} />
            <span className="font-serif text-xs uppercase tracking-widest text-[#5A2918] font-bold">
              FIND YOUR CORNER
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#21100A] tracking-tight">
            DROP BY. GRAB A BITE.
          </h2>
          
          <div className="mt-2 mx-auto w-36 sm:w-44">
            <CurvedUnderline color="#C87932" width="100%" />
          </div>

          <p className="mt-4 text-[#5A2918]/80 text-sm sm:text-base font-sans">
            Conveniently located on Rajiv Gandhi Salai (OMR), Karappakkam.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Business Info Card (5 cols) */}
          <ScrollReveal animation="fade-right" duration={850} className="lg:col-span-5 flex flex-col justify-between bg-[#FFF8EA] rounded-2xl p-5 sm:p-8 shadow-xl border-2 border-[#5A2918]/25 space-y-6">
            <div>
              {/* Cafe Identity Badge */}
              <div className="flex items-center gap-3 pb-5 border-b border-[#3A170D]/15">
                <div className="w-14 h-14 rounded-xl bg-[#3A170D] p-1 flex items-center justify-center overflow-hidden border border-[#C87932]/40">
                  <img
                    src={asset('/assets/brand/rara-logo.png')}
                    alt="RaRa Cafe emblem"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-black text-[#21100A]">
                    RaRa Cafe
                  </h3>
                  <p className="text-xs font-mono text-[#C87932] font-bold tracking-wider uppercase">
                    Karappakkam, Chennai
                  </p>
                </div>
              </div>

              {/* Verified Details List (Requirements #1, #15, #31) */}
              <div className="space-y-4 pt-5">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F4E7D0] text-[#3A170D] shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#21100A]">
                      Address
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A2918]/85 font-sans leading-relaxed mt-0.5">
                      {address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F4E7D0] text-[#3A170D] shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#21100A]">
                      Telephone
                    </h4>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-sm font-mono font-bold text-[#C87932] hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                {/* Service */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F4E7D0] text-[#3A170D] shrink-0 mt-0.5">
                    <UtensilsCrossed size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#21100A]">
                      Service Model
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A2918]/85 font-sans">
                      Dine-in with table &amp; counter seating
                    </p>
                  </div>
                </div>

                {/* Plus Code */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F4E7D0] text-[#3A170D] shrink-0 mt-0.5">
                    <Navigation size={18} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#21100A]">
                      Plus Code
                    </h4>
                    <span className="text-xs font-mono bg-[#F4E7D0] px-2 py-0.5 rounded border border-[#C87932]/30 text-[#3A170D] font-bold">
                      {plusCode}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons: Get Directions & Call */}
            <div className="pt-4 border-t border-[#3A170D]/15 flex flex-col sm:flex-row gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#3A170D] text-[#FFF8EA] font-bold text-xs tracking-wider hover:bg-[#5A2918] transition-colors shadow-md"
              >
                <Navigation size={15} />
                <span>GET DIRECTIONS →</span>
              </a>

              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#C87932] text-[#FFF8EA] font-bold text-xs tracking-wider hover:bg-[#b06725] transition-colors shadow-md"
              >
                <Phone size={15} />
                <span>CALL US</span>
              </a>
            </div>

          </ScrollReveal>

          {/* RIGHT: Stylized Interactive Map Card (7 cols) */}
          <ScrollReveal animation="fade-left" duration={850} delay={150} className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[380px] rounded-2xl overflow-hidden border-2 border-[#5A2918]/30 shadow-xl bg-[#3A170D] group">
              
              {/* Embedded Interactive Google Map */}
              <iframe
                title="RaRa Cafe Karappakkam Location"
                src="https://maps.google.com/maps?q=1%2F413%2C+Natesan+Avenue%2C+Rajiv+Gandhi+Salai%2C+Karappakkam%2C+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0 filter contrast-105 opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                aria-label="Google Map showing RaRa Cafe Karappakkam"
              ></iframe>

              {/* Floating Vintage Location Tag Card Overlay (Requirement #16) */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-auto sm:top-4 sm:left-4 sm:right-auto sm:max-w-xs bg-[#FFF8EA]/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-2xl border-2 border-[#5A2918] pointer-events-auto">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#C87932] animate-pulse"></div>
                  <h4 className="font-serif font-black text-xs sm:text-sm text-[#21100A]">
                    RA RA CAFE
                  </h4>
                </div>
                <p className="text-[10px] sm:text-[11px] font-mono text-[#5A2918] mt-0.5 sm:mt-1 font-semibold">
                  Karappakkam, Rajiv Gandhi Salai (OMR)
                </p>
                <p className="hidden sm:block text-[10px] text-[#5A2918]/70 mt-1 font-sans">
                  Opposite / near Natesan Avenue junction.
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#C87932] hover:underline"
                >
                  <Navigation size={12} />
                  <span>Open in Google Maps ↗</span>
                </a>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
