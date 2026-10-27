import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { CurvedUnderline, CoffeeBeanIcon } from './CurvedUnderline';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: 'ALL' | 'COFFEE' | 'SNACKS' | 'AMBIENCE';
  caption: string;
  tag: string;
  aspectClass: string;
}

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      src: '/assets/food/filter-coffee.jpg',
      alt: 'Frothy filter coffee in traditional brass davarah',
      category: 'COFFEE',
      caption: '“The morning ritual in brass.”',
      tag: 'Filter Kaapi',
      aspectClass: 'aspect-[4/5] sm:row-span-2',
    },
    {
      id: 'g2',
      src: '/assets/food/crispy-snacks.jpg',
      alt: 'Hot crispy potato fries and savoury snacks in basket',
      category: 'SNACKS',
      caption: '“Hot crunch, fresh curry leaves & masala.”',
      tag: 'Crunch Basket',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'g3',
      src: '/assets/food/cafe-ambience.jpg',
      alt: 'Cosy wooden café seating with warm pendant lights',
      category: 'AMBIENCE',
      caption: '“Warm timber, warm lighting, good chats.”',
      tag: 'Café Corner',
      aspectClass: 'aspect-[16/10] sm:col-span-2',
    },
    {
      id: 'g4',
      src: '/assets/food/hot-chai.jpg',
      alt: 'Steaming cutting chai poured into glasses with spices',
      category: 'COFFEE',
      caption: '“Simmered ginger & green cardamom warmth.”',
      tag: 'Cutting Chai',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'g5',
      src: '/assets/brand/rara-brand-reference.jpg',
      alt: 'Original RaRa Cafe brand artwork with woodcut illustration',
      category: 'AMBIENCE',
      caption: '“The original woodcut brand emblem.”',
      tag: 'RaRa Heritage',
      aspectClass: 'aspect-square',
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
        <div className="text-center max-w-xl mx-auto mb-12">
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
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#3A170D] text-[#FFF8EA] shadow-md'
                  : 'bg-[#FFF8EA] text-[#3A170D] hover:bg-[#ebdcc0] border border-[#C87932]/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Style Grid with Hover Handwritten Captions (Requirement #19) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border-2 border-[#5A2918]/25 bg-[#3A170D] shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#C87932] ${item.aspectClass}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#21100A]/90 via-[#21100A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                {/* Tag */}
                <span className="inline-block self-start text-[10px] font-mono uppercase tracking-wider text-[#C87932] bg-[#21100A] px-2.5 py-0.5 rounded-full mb-1 border border-[#C87932]/40">
                  {item.tag}
                </span>

                {/* Handwritten Caption (Requirement #19) */}
                <p className="font-hand text-lg text-[#FFF8EA] leading-snug">
                  {item.caption}
                </p>
                <span className="font-mono text-[11px] text-[#F4E7D0]/60 mt-1">
                  RaRa Cafe • Karappakkam
                </span>
              </div>

              {/* Corner Watermark */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <CoffeeBeanIcon size={18} color="#C87932" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
