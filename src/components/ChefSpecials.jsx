import React from 'react';
import { Star, Sparkles, Plus, Eye, Wine } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';

export default function ChefSpecials({ onAddToCart, onViewDish }) {
  const specials = MENU_ITEMS.filter(item => item.isPopular);

  return (
    <section id="specials" className="py-24 relative bg-velvet border-y border-white/5 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Pure Veg Royal Masterpieces
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold gold-gradient-text tracking-tight mb-4">
            Master Chef's Signature Tasting Selection
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-normal">
            Hand-selected recipes crafted by Chef Vikramaditya Singh using 24-hour slow charcoal cooking, fresh cottage cheese, and imported saffron.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border border-white/10"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

                  {/* Pure Veg Emblem & Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Pure Veg
                    </span>
                    {item.tags.map((tag, idx) => (
                      tag !== "100% Pure Veg" && (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-gold-300 border border-gold-500/30 backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      )
                    ))}
                  </div>

                  {/* Quick Inspect Button */}
                  <button
                    onClick={() => onViewDish(item)}
                    className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/70 text-stone-200 hover:text-gold-400 hover:bg-black border border-white/20 transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      onClick={() => onViewDish(item)}
                      className="font-serif-luxury text-2xl font-bold text-stone-100 group-hover:text-gold-400 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h3>
                    <span className="font-serif-luxury text-2xl font-bold text-gold-400 shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="text-stone-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Pairing hint */}
                  {item.pairing && (
                    <div className="flex items-center gap-2 text-[11px] text-stone-400 bg-white/5 p-2 rounded-lg border border-white/5 mb-4">
                      <Wine className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="truncate"><strong className="text-stone-200">{item.pairing}</strong></span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full py-3 rounded-xl border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-lg"
                >
                  <Plus className="w-4 h-4 group-hover/btn:scale-125 transition-transform" />
                  Add to Order Plate
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
