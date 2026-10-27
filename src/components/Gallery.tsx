import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { CurvedUnderline, CoffeeBeanIcon } from './CurvedUnderline';
import { ScrollReveal } from './ScrollReveal';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'COFFEE' | 'SNACKS' | 'AMBIENCE';
  caption: string;
  tag: string;
}

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const galleryItems: GalleryItem[] = [
    // --- COFFEE (4 Items) ---
    {
      id: 'g1',
      src: '/assets/food/filter-coffee.jpg',
      alt: 'Frothy filter coffee in traditional brass davarah',
      category: 'COFFEE',
      caption: '“The morning ritual in brass.”',
      tag: 'Traditional Filter Kaapi',
    },
    {
      id: 'g2',
      src: '/assets/food/hot-chai.jpg',
      alt: 'Steaming cutting chai poured into glasses with spices',
      category: 'COFFEE',
      caption: '“Simmered ginger & green cardamom warmth.”',
      tag: 'Kadak Cutting Chai',
    },
    {
      id: 'g3',
      src: '/assets/gallery/iced-kaapi.jpg',
      alt: 'Creamy iced South Indian filter coffee frappe in tall glass',
      category: 'COFFEE',
      caption: '“Slow-dripped chicory brew on cold milk foam.”',
      tag: 'Iced Kaapi Frappé',
    },
    {
      id: 'g4',
      src: '/assets/gallery/coffee-art.jpg',
      alt: 'Artisanal latte with rosetta microfoam in ceramic cup',
      category: 'COFFEE',
      caption: '“Velvety microfoam & rich roasted aroma.”',
      tag: 'Velveteen Latte Art',
    },

    // --- SNACKS (4 Items) ---
    {
      id: 'g5',
      src: '/assets/food/crispy-snacks.jpg',
      alt: 'Hot crispy potato fries and savoury snacks in basket',
      category: 'SNACKS',
      caption: '“Hot crunch, fresh curry leaves & masala.”',
      tag: 'Masala Crunch Basket',
    },
    {
      id: 'g6',
      src: '/assets/gallery/samosa-platter.jpg',
      alt: 'Golden flaky samosas with mint coriander and tamarind chutney',
      category: 'SNACKS',
      caption: '“Golden flaky crust with spiced potato stuffing.”',
      tag: 'Crispy Samosa Platter',
    },
    {
      id: 'g7',
      src: '/assets/gallery/bun-maska.jpg',
      alt: 'Warm bakery bun slathered with whipped butter and tea',
      category: 'SNACKS',
      caption: '“Cloud-soft bun with generous whipped butter.”',
      tag: 'Classic Bun Maska',
    },
    {
      id: 'g8',
      src: '/assets/gallery/banana-cake.jpg',
      alt: 'Caramelised banana cake slice with jaggery drizzle',
      category: 'SNACKS',
      caption: '“Old-school jaggery caramelized banana cake.”',
      tag: 'Banana Tea Cake',
    },

    // --- AMBIENCE (4 Items) ---
    {
      id: 'g9',
      src: '/assets/food/cafe-ambience.jpg',
      alt: 'Cosy wooden café seating with warm pendant lights and friends',
      category: 'AMBIENCE',
      caption: '“Warm timber, warm lighting, good chats.”',
      tag: 'Dine-In Warmth',
    },
    {
      id: 'g10',
      src: '/assets/gallery/cafe-counter.jpg',
      alt: 'Artisanal wooden cafe counter and blackboard menu',
      category: 'AMBIENCE',
      caption: '“Freshly prepared at the counter everyday.”',
      tag: 'Order Counter',
    },
    {
      id: 'g11',
      src: '/assets/gallery/cozy-nook.jpg',
      alt: 'Sunlit window seating nook with cushions and books',
      category: 'AMBIENCE',
      caption: '“A quiet corner to slow down and unwind.”',
      tag: 'Window Nook',
    },
    {
      id: 'g12',
      src: '/assets/brand/rara-brand-full.jpg',
      alt: 'Original RaRa Cafe woodcut artwork and heritage emblem',
      category: 'AMBIENCE',
      caption: '“The woodcut heritage and spirit of RaRa.”',
      tag: 'RaRa Heritage',
    },
  ];

  const filters = ['ALL', 'COFFEE', 'SNACKS', 'AMBIENCE'];

  const filteredItems =
    activeFilter === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-paper-texture border-b border-[#C87932]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700} className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Camera size={16} className="text-[#C87932]" />
            <span className="font-serif text-xs uppercase tracking-widest text-[#5A2918] font-bold">
              SNAP OF THE DAY
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#21100A] tracking-tight">
            RA RA MOMENTS
          </h2>
          
          <div className="mt-2 mx-auto w-40">
            <CurvedUnderline color="#C87932" width="100%" />
          </div>

          <p className="mt-4 text-[#5A2918]/80 text-base font-sans">
            Glimpses of daily warmth, freshly fried savouries, and slow coffee sips.
          </p>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal animation="fade-up" delay={100} duration={650} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const count =
              filter === 'ALL'
                ? galleryItems.length
                : galleryItems.filter((i) => i.category === filter).length;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === filter
                    ? 'bg-[#3A170D] text-[#FFF8EA] shadow-md scale-105'
                    : 'bg-[#FFF8EA] text-[#3A170D] hover:bg-[#ebdcc0] border border-[#C87932]/30'
                }`}
              >
                <span>{filter}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeFilter === filter ? 'bg-[#C87932] text-white' : 'bg-[#F4E7D0] text-[#5A2918]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Uniform, Gap-Free Grid: 3 cols for ALL (12 items = 4 complete rows), 4 cols for filtered categories (4 items = 1 complete row) */}
        <div
          className={
            activeFilter === 'ALL'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
          }
        >
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="zoom-in"
              delay={(index % 4) * 100}
              duration={600}
              className="w-full"
            >
              <div
                className="group relative overflow-hidden rounded-2xl border-2 border-[#5A2918]/25 bg-[#3A170D] shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#C87932] aspect-[4/3] w-full"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                  loading="lazy"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21100A]/95 via-[#21100A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  {/* Tag */}
                  <span className="inline-block self-start text-[10px] font-mono uppercase tracking-wider text-[#C87932] bg-[#21100A] px-2.5 py-0.5 rounded-full mb-1 border border-[#C87932]/40 font-bold">
                    {item.tag}
                  </span>

                  {/* Handwritten Caption (Requirement #19) */}
                  <p className="font-hand text-lg text-[#FFF8EA] leading-snug">
                    {item.caption}
                  </p>
                  <span className="font-mono text-[11px] text-[#F4E7D0]/70 mt-1">
                    RaRa Cafe • Karappakkam
                  </span>
                </div>

                {/* Corner Watermark */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                  <CoffeeBeanIcon size={18} color="#C87932" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
