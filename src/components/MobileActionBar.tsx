import React from 'react';
import { Phone, MapPin, UtensilsCrossed } from 'lucide-react';

export const MobileActionBar: React.FC = () => {
  const phone = '088087 01617';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'RaRa Cafe 1/413 Natesan Avenue Rajiv Gandhi Salai Karappakkam Chennai 600097'
  )}`;

  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#21100A]/95 backdrop-blur-lg border-t border-[#C87932]/30 px-3 py-2 shadow-[0_-8px_25px_rgba(0,0,0,0.5)]"
      aria-label="Quick mobile actions"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Action */}
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#3A170D] text-[#FFF8EA] border border-[#C87932]/30 active:scale-95 transition-transform"
          aria-label="Call RaRa Cafe directly"
        >
          <Phone size={17} className="text-[#C87932] mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-wider">CALL NOW</span>
        </a>

        {/* Directions Action */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#C87932] text-[#FFF8EA] shadow-md active:scale-95 transition-transform"
          aria-label="Open directions in Google Maps"
        >
          <MapPin size={17} className="text-[#FFF8EA] mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-wider">DIRECTIONS</span>
        </a>

        {/* Menu Action */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#3A170D] text-[#FFF8EA] border border-[#C87932]/30 active:scale-95 transition-transform"
          aria-label="Explore food and coffee menu"
        >
          <UtensilsCrossed size={17} className="text-[#C87932] mb-0.5" />
          <span className="text-[11px] font-mono font-bold tracking-wider">THE MENU</span>
        </a>
      </div>
    </aside>
  );
};
