import React from 'react';
import { Coffee, CupSoda, Flame, Sparkles } from 'lucide-react';
import { CurvedUnderline, CoffeeBeanIcon, SteamWisp } from './CurvedUnderline';
import { ScrollReveal } from './ScrollReveal';
import { asset } from '../utils/asset';

export const CoffeeSection: React.FC = () => {
  const beverageCategories = [
    {
      title: 'FILTER COFFEE',
      subtitle: 'Traditional South Indian Chicory Decoction',
      icon: Coffee,
      items: [
        { name: 'Traditional Degree Filter Kaapi', note: 'Strong chicory blend, fresh frothy milk', price: '₹ -- (Placeholder)' },
        { name: 'Pure Coffee (No Chicory)', note: '100% Arabica & Robusta dark roast', price: '₹ -- (Placeholder)' },
        { name: 'Kaapi with Jaggery (Naatu Sakkarai)', note: 'Naturally sweetened, authentic rustic cup', price: '₹ -- (Placeholder)' },
      ],
    },
    {
      title: 'TEA & CHAI',
      subtitle: 'Simmered with Fresh Spices & Milk',
      icon: Flame,
      items: [
        { name: 'Cutting Masala Chai', note: 'Crushed ginger, green cardamom, strong brew', price: '₹ -- (Placeholder)' },
        { name: 'Inji (Ginger) Chai', note: 'Zesty fresh ginger crush, immune booster', price: '₹ -- (Placeholder)' },
        { name: 'Sulaimani Black Tea', note: 'Spiced black tea with a splash of fresh lemon', price: '₹ -- (Placeholder)' },
      ],
    },
    {
      title: 'COFFEE SPECIALS',
      subtitle: 'Contemporary Café Favorites',
      icon: Sparkles,
      items: [
        { name: 'Classic Espresso Shot', note: 'Intense, aromatic crema-topped single shot', price: '₹ -- (Placeholder)' },
        { name: 'Velveteen Cappuccino', note: 'Steamed milk with rich espresso head', price: '₹ -- (Placeholder)' },
        { name: 'Café Mocha', note: 'Dark melted cocoa blended with bold espresso', price: '₹ -- (Placeholder)' },
      ],
    },
    {
      title: 'COLD DRINKS',
      subtitle: 'Chilled Refreshers for Hot Chennai Days',
      icon: CupSoda,
      items: [
        { name: 'Iced Kaapi Frappé', note: 'Chilled filter decoction blended with creamy milk', price: '₹ -- (Placeholder)' },
        { name: 'Fresh Lime Soda (Sweet/Salt)', note: 'Squeezed fresh lime with effervescent soda', price: '₹ -- (Placeholder)' },
        { name: 'Rose Milk Nostalgia', note: 'Old-school fragrant rose milk, served ice-cold', price: '₹ -- (Placeholder)' },
      ],
    },
  ];

  return (
    <section id="coffee" className="py-24 bg-[#21100A] text-[#F4E7D0] relative overflow-hidden border-b-4 border-[#C87932]/40">
      
      {/* Background Decorative Bean Sprinkles */}
      <div className="absolute top-10 right-8 opacity-20 pointer-events-none">
        <CoffeeBeanIcon size={80} color="#C87932" />
      </div>
      <div className="absolute bottom-12 left-10 opacity-15 pointer-events-none">
        <CoffeeBeanIcon size={64} color="#6D7A45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <ScrollReveal animation="fade-up" duration={700} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <CoffeeBeanIcon size={18} color="#C87932" />
            <span className="font-serif text-xs uppercase tracking-widest text-[#C87932] font-bold">
              THE HEART OF RARA
            </span>
            <CoffeeBeanIcon size={18} color="#C87932" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#FFF8EA] tracking-tight">
            BREWED FOR GOOD MOMENTS.
          </h2>
          
          <div className="mt-3 mx-auto w-40 sm:w-52">
            <CurvedUnderline color="#C87932" width="100%" />
          </div>

          <p className="mt-4 text-[#F4E7D0]/80 text-sm sm:text-base md:text-lg font-sans max-w-xl mx-auto">
            From the brass dabara to the contemporary mug, our brews are crafted to awaken, comfort, and bring people together.
          </p>
        </ScrollReveal>

        {/* Centerpiece Showcase: Illustrated Coffee Cup & Cream Menu Slate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: Illustrated Brass Dabara Feature Image with Rising Steam (5 cols) */}
          <ScrollReveal animation="fade-right" duration={850} className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#3A170D] to-[#21100A] p-4 sm:p-6 border-2 border-[#C87932]/40 shadow-2xl">
              
              {/* Steaming Animation above Dabara */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <SteamWisp className="h-12" />
              </div>

              {/* Photo with vintage frame */}
              <div className="relative rounded-xl overflow-hidden aspect-square border border-[#C87932]/40 shadow-inner">
                <img
                  src={asset('/assets/food/filter-coffee.jpg')}
                  alt="Authentic South Indian filter coffee in brass dabara tumbler"
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#21100A] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-hand text-xl text-[#F4E7D0] block">
                    ~ Poured with Passion ~
                  </span>
                  <p className="text-[11px] font-mono text-[#C87932] tracking-wider uppercase mt-0.5">
                    FRESH DECOCTION EVERY HOUR
                  </p>
                </div>
              </div>

              {/* Coffee Ethos Banner */}
              <div className="mt-5 p-3 rounded-lg bg-[#3A170D]/80 border border-[#C87932]/30 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6D7A45]"></span>
                  <span>Pure Chicory-Coffee Balance</span>
                </div>
                <span className="text-[#C87932] font-bold">100% DINE-IN FRESH</span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Cream-Colored Menu Panel (7 cols) */}
          <ScrollReveal animation="fade-left" duration={850} delay={150} className="lg:col-span-7">
            <div className="bg-[#FFF8EA] text-[#2A170F] rounded-2xl p-4 sm:p-8 shadow-2xl border-4 border-[#5A2918] relative">
              
              {/* Vintage Board Top Header */}
              <div className="border-b-2 border-[#3A170D]/20 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-black text-[#21100A]">
                    HOT &amp; COLD ROSTER
                  </h3>
                  <p className="text-xs text-[#5A2918]/80 font-mono mt-0.5">
                    ORDER AT THE COUNTER • DINE-IN SERVICE
                  </p>
                </div>
                <div className="hidden sm:block font-hand text-lg text-[#C87932] font-bold">
                  “The best brew in Karappakkam”
                </div>
              </div>

              {/* 4 Drink Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {beverageCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={cat.title}
                      className="p-4 rounded-xl bg-[#F4E7D0]/60 border border-[#C87932]/25 space-y-3"
                    >
                      <div className="flex items-center gap-2 border-b border-[#3A170D]/15 pb-2">
                        <div className="p-1.5 rounded-md bg-[#3A170D] text-[#FFF8EA]">
                          <Icon size={14} />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-sm text-[#21100A] tracking-wide">
                            {cat.title}
                          </h4>
                          <p className="text-[10px] text-[#5A2918]/70 font-sans">
                            {cat.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        {cat.items.map((drink) => (
                          <div key={drink.name} className="flex justify-between items-start gap-2">
                            <div>
                              <p className="font-serif font-semibold text-xs text-[#3A170D]">
                                {drink.name}
                              </p>
                              <p className="text-[10px] text-[#5A2918]/70 font-sans leading-tight">
                                {drink.note}
                              </p>
                            </div>
                            <span className="shrink-0 text-[11px] font-mono font-bold text-[#C87932] bg-[#FFF8EA] px-2 py-0.5 rounded border border-[#C87932]/30">
                              {drink.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Notice */}
              <div className="mt-6 pt-4 border-t border-[#3A170D]/15 flex items-center justify-between text-xs text-[#5A2918]/70 font-mono">
                <span>* Freshly brewed on order</span>
                <span className="text-[#C87932] font-bold">CUSTOM SUGAR / SWEETNESS ON REQUEST</span>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
