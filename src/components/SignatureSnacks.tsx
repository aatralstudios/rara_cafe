import React, { useState } from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { CurvedUnderline, CoffeeBeanIcon } from './CurvedUnderline';
import { ScrollReveal } from './ScrollReveal';

interface MenuItem {
  id: string;
  name: string;
  category: 'HOT & CRISPY' | 'COFFEE & CHAI' | 'QUICK BITES' | 'SWEET TREATS';
  description: string;
  pricePlaceholder: string;
  image: string;
  rotationClass: string;
}

export const SignatureSnacks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'HOT & CRISPY', 'COFFEE & CHAI', 'QUICK BITES', 'SWEET TREATS'];

  // Note: Prices are placeholders clearly marked per prompt instruction #31 & #9
  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Signature Masala Crunch Fries',
      category: 'HOT & CRISPY',
      description: 'Hand-cut golden potato fries tossed in special aromatic South Indian spice mix and curry leaves.',
      pricePlaceholder: '₹ -- (Placeholder)',
      image: '/assets/food/crispy-snacks.jpg',
      rotationClass: 'hover:-rotate-1 sm:-rotate-1',
    },
    {
      id: '2',
      name: 'Degree Filter Kaapi',
      category: 'COFFEE & CHAI',
      description: 'Slow-dripped dark chicory blend frothed with full-cream milk in a traditional brass dabara.',
      pricePlaceholder: '₹ -- (Placeholder)',
      image: '/assets/food/filter-coffee.jpg',
      rotationClass: 'hover:rotate-1 sm:rotate-1',
    },
    {
      id: '3',
      name: 'Kadak Ginger & Elaichi Chai',
      category: 'COFFEE & CHAI',
      description: 'Crushed ginger, fragrant cardamom pods, and strong Assam tea brewed to steaming perfection.',
      pricePlaceholder: '₹ -- (Placeholder)',
      image: '/assets/food/hot-chai.jpg',
      rotationClass: 'hover:-rotate-1 sm:-rotate-0.5',
    },
    {
      id: '4',
      name: 'Crispy Samosa Platter',
      category: 'HOT & CRISPY',
      description: 'Flaky pastry shells stuffed with spiced potatoes and peas, served with mint-coriander chutney.',
      pricePlaceholder: '₹ -- (Placeholder)',
      image: '/assets/food/crispy-snacks.jpg',
      rotationClass: 'hover:rotate-1 sm:rotate-1',
    },
    {
      id: '5',
      name: 'Classic Bun Maska',
      category: 'QUICK BITES',
      description: 'Warm, cloud-soft bakery bun slathered generously with fresh whipped butter and cardamom sugar.',
      pricePlaceholder: '₹ -- (Placeholder)',
      image: '/assets/food/cafe-ambience.jpg',
      rotationClass: 'hover:-rotate-1 sm:-rotate-1',
    },
    {
      id: '6',
      name: 'Caramelised Banana Cake',
      category: 'SWEET TREATS',
      description: 'Old-school sponge cake slice with warm jaggery drizzle, perfect companion to a hot cuppa.',
      pricePlaceholder: '₹ -- (Placeholder)',
      image: '/assets/food/filter-coffee.jpg',
      rotationClass: 'hover:rotate-1 sm:rotate-0.5',
    },
  ];

  const filteredItems =
    activeCategory === 'ALL'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#F4E7D0] relative border-b border-[#C87932]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700} className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <CoffeeBeanIcon size={16} color="#C87932" />
            <span className="font-serif text-xs uppercase tracking-widest text-[#5A2918] font-bold">
              FRESH FROM THE COUNTER
            </span>
            <CoffeeBeanIcon size={16} color="#C87932" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#21100A] tracking-tight">
            THE GOOD STUFF.
          </h2>
          
          <div className="mt-2 mx-auto w-44">
            <CurvedUnderline color="#C87932" width="100%" />
          </div>

          <p className="mt-4 font-serif text-base sm:text-lg text-[#5A2918] tracking-wide font-medium">
            CRISPY. COMFORTING. ALWAYS WORTH THE STOP.
          </p>
        </ScrollReveal>

        {/* Category Pills */}
        <ScrollReveal animation="fade-up" delay={100} duration={650} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#3A170D] text-[#FFF8EA] shadow-md scale-105'
                  : 'bg-[#FFF8EA] text-[#3A170D] hover:bg-[#ebdcc0] border border-[#C87932]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Editorial Menu Cards (Requirement #9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={(index % 3) * 120}
              duration={700}
            >
              <div
                className={`group relative bg-[#FFF8EA] rounded-2xl p-5 shadow-lg border-2 border-[#5A2918]/20 transition-all duration-300 hover:shadow-2xl hover:border-[#C87932] h-full flex flex-col justify-between ${item.rotationClass}`}
              >
                <div>
                  {/* Category Tag & Micro-Arrow Reveal */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#6D7A45] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#6D7A45]/10 border border-[#6D7A45]/30">
                      <Tag size={10} />
                      {item.category}
                    </span>

                    {/* Micro-interaction: Small hand-drawn arrow reveals upon hover (Requirement #19) */}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#C87932] font-hand text-sm font-bold flex items-center gap-1">
                      Taste this →
                    </span>
                  </div>

                  {/* Food Image with Vintage Frame */}
                  <div className="overflow-hidden rounded-xl aspect-[16/10] bg-[#3A170D] relative border border-[#3A170D]/15 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Price Placeholder badge */}
                    <div className="absolute bottom-2 right-2 bg-[#3A170D]/90 backdrop-blur-xs text-[#FFF8EA] text-xs font-mono font-bold px-2.5 py-1 rounded-md border border-[#C87932]/40">
                      {item.pricePlaceholder}
                    </div>
                  </div>

                  {/* Item Info */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl font-bold text-[#21100A] group-hover:text-[#C87932] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A2918]/80 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Handcrafted bottom accent */}
                <div className="mt-4 pt-3 border-t border-[#3A170D]/10 flex items-center justify-between text-xs text-[#5A2918]/60 font-mono">
                  <span>Dine-In Fresh</span>
                  <span className="text-[#C87932]">✦ ✦ ✦</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View Full Counter CTA */}
        <ScrollReveal animation="fade-up" delay={150} duration={650} className="mt-14 text-center">
          <a
            href="#snack-counter"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3A170D] text-[#FFF8EA] font-serif font-bold text-sm tracking-widest hover:bg-[#5A2918] transition-all duration-300 shadow-xl group border border-[#C87932]/40"
          >
            <span>VIEW PHYSICAL SNACK COUNTER</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-[#C87932]" />
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
};
