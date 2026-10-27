import React from 'react';
import { Phone, MapPin, Heart } from 'lucide-react';
import { CurvedUnderline, CoffeeBeanIcon } from './CurvedUnderline';
import { asset } from '../utils/asset';

export const Footer: React.FC = () => {
  const phone = '088087 01617';
  const address = '1/413, Natesan Avenue, Rajiv Gandhi Salai, Karappakkam, Chennai, Tamil Nadu 600097';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'RaRa Cafe 1/413 Natesan Avenue Rajiv Gandhi Salai Karappakkam Chennai 600097'
  )}`;

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: 'Counter Specials', href: '#snack-counter' },
    { label: 'Coffee & Brews', href: '#coffee' },
    { label: 'About Us', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#visit' },
  ];

  return (
    <footer className="bg-[#180B07] text-[#F4E7D0] pt-16 pb-12 border-t border-[#C87932]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Motto (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            {/* Logo */}
            <div className="w-56 overflow-hidden rounded-xl border border-[#C87932]/40 bg-[#3A170D] p-2 shadow-lg">
              <img
                src={asset('/assets/brand/rara-logo.png')}
                alt="RaRa Cafe Logo"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Triad Motto (Requirement #17) */}
            <div className="pt-2">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF8EA] tracking-wide leading-snug">
                GOOD FOOD. <br />
                GOOD COFFEE. <br />
                <span className="text-[#C87932]">GOOD COMPANY.</span>
              </p>
              <div className="w-40 mt-2">
                <CurvedUnderline color="#C87932" width="100%" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F4E7D0]/70 font-sans max-w-sm leading-relaxed">
              Your neighbourhood stop in Karappakkam for hot crispy snacks, signature filter coffee, and memorable breaks.
            </p>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm tracking-widest text-[#C87932] uppercase flex items-center gap-2">
              <CoffeeBeanIcon size={14} color="#C87932" />
              <span>NAVIGATION</span>
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#F4E7D0]/80 hover:text-[#C87932] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[#C87932] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm tracking-widest text-[#C87932] uppercase flex items-center gap-2">
              <CoffeeBeanIcon size={14} color="#C87932" />
              <span>VISIT &amp; CONTACT</span>
            </h4>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#F4E7D0]/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#C87932] shrink-0 mt-1" />
                <p className="leading-relaxed">
                  {address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#C87932] shrink-0" />
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="font-mono text-sm font-bold text-[#FFF8EA] hover:text-[#C87932] transition-colors"
                >
                  {phone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3A170D] border border-[#C87932]/40 text-xs font-mono text-[#F4E7D0] hover:bg-[#C87932] hover:text-white transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Requirement #17) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F4E7D0]/50">
          <p>© 2026 RaRa Cafe. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart size={12} className="text-[#C87932] fill-[#C87932]" />
            <span>for Karappakkam, Chennai</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
