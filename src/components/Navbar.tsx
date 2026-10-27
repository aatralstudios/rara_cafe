import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { CoffeeBeanIcon } from './CurvedUnderline';
import { asset } from '../utils/asset';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'MENU', href: '#menu' },
    { label: 'ABOUT', href: '#about' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'VISIT US', href: '#visit' },
  ];

  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=RaRa+Cafe+Karappakkam+Chennai+600097';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F4E7D0]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#C87932]/20'
          : 'bg-[#21100A]/85 backdrop-blur-sm py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Brand with Micro-interaction */}
        <a
          href="#hero"
          className="relative group flex items-center gap-2 outline-none"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          aria-label="RaRa Cafe Home"
        >
          <div className="h-10 sm:h-12 w-auto overflow-hidden rounded-md border border-[#C87932]/40 bg-[#3A170D] p-1 transition-transform group-hover:scale-105 duration-200">
            <img
              src={asset('/assets/brand/rara-logo.png')}
              alt="RaRa Cafe Logo"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Micro-interaction: Tiny coffee bean animation upon logo hover (Requirement #19) */}
          <div
            className={`transition-all duration-300 ${
              logoHovered
                ? 'opacity-100 scale-110 translate-x-0'
                : 'opacity-0 scale-75 -translate-x-2'
            }`}
            aria-hidden="true"
          >
            <CoffeeBeanIcon size={18} color="#C87932" className="animate-spin" />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-semibold tracking-widest transition-colors py-1 relative group ${
                scrolled
                  ? 'text-[#2A170F] hover:text-[#C87932]'
                  : 'text-[#F4E7D0] hover:text-[#C87932]'
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C87932] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 shadow-sm ${
              scrolled
                ? 'bg-[#3A170D] text-[#FFF8EA] hover:bg-[#C87932]'
                : 'bg-[#C87932] text-[#FFF8EA] hover:bg-[#A86124]'
            }`}
          >
            <MapPin size={14} />
            <span>GET DIRECTIONS</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-[#2A170F] hover:bg-[#e7d8bd]' : 'text-[#F4E7D0] hover:bg-white/10'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-xs z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative z-40 md:hidden bg-[#21100A] text-[#F4E7D0] border-b border-[#C87932]/30 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif tracking-wider text-[#F4E7D0] hover:text-[#C87932] transition-colors py-2.5 border-b border-[#3A170D] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#C87932] text-xs">→</span>
                </a>
              ))}

              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href={`tel:08808701617`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[#3A170D] text-[#FFF8EA] font-mono font-bold text-xs border border-[#C87932]/40 shadow-md active:scale-95 transition-transform"
                >
                  <Phone size={14} className="text-[#C87932]" />
                  <span>CALL</span>
                </a>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[#C87932] text-[#FFF8EA] font-mono font-bold text-xs tracking-wider hover:bg-[#A86124] transition-colors shadow-md active:scale-95"
                >
                  <MapPin size={14} />
                  <span>DIRECTIONS</span>
                </a>
              </div>

              <div className="pt-2 text-center text-xs text-[#F4E7D0]/60">
                <p>Karappakkam, Rajiv Gandhi Salai, Chennai</p>
                <p className="mt-1 font-mono text-[#C87932] font-semibold">088087 01617 • Open Daily</p>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
