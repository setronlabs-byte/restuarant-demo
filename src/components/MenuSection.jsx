import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, Eye, Utensils, Check } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function MenuSection({ onAddToCart, onViewDish }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);

  const dietaryTags = ['Chef Special', 'Gluten-Free', 'Jain Option Available', 'Bestseller'];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTag = !selectedTag || item.tags.includes(selectedTag);

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  return (
    <section id="menu" className="py-24 relative bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> 100% Pure Vegetarian Sattvik Dining
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-100 mb-4">
            Royal Indian Culinary Catalog
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Every dish is handcrafted using organic Indian spices, fresh artisanal paneer, and 24-hour slow cooking methods.
          </p>
        </div>

        {/* Filters & Search Control Bar */}
        <div className="space-y-6 mb-12">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'gold-gradient-bg text-black shadow-lg shadow-gold-500/20 scale-105'
                    : 'glass-panel text-stone-300 hover:text-white hover:border-gold-500/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar & Tag pills row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-white/10">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search paneer, dal, biryani, naan..."
                className="w-full bg-stone-900/80 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-gold-500/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dietary Tags Filter */}
            <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
              <span className="text-xs text-stone-400 font-medium mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-gold-400" /> Filter:
              </span>
              {dietaryTags.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(isActive ? null : tag)}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                      isActive
                        ? 'bg-gold-500 text-black font-bold'
                        : 'bg-stone-900 text-stone-300 hover:text-white border border-white/10'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="text-xs text-gold-400 underline ml-2"
                >
                  Clear filter
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-400 mb-6 px-1">
          <span>Showing <strong>{filteredItems.length}</strong> pure veg creations</span>
          {activeCategory !== 'all' && <span>Category: <strong className="text-gold-400 uppercase">{activeCategory}</strong></span>}
        </div>

        {/* Dish Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <button
                      onClick={() => onViewDish(item)}
                      className="absolute bottom-3 right-3 p-2 rounded-full bg-black/70 text-stone-200 hover:text-gold-400 border border-white/10 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-1.5 flex-wrap mb-2">
                      <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Pure Veg
                      </span>
                      {item.tags.map((tag, idx) => (
                        tag !== "100% Pure Veg" && (
                          <span key={idx} className="text-[10px] uppercase font-bold text-gold-400 tracking-wider">
                            • {tag}
                          </span>
                        )
                      ))}
                    </div>

                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3
                        onClick={() => onViewDish(item)}
                        className="font-serif-luxury text-xl font-bold text-stone-100 hover:text-gold-400 cursor-pointer transition-colors"
                      >
                        {item.name}
                      </h3>
                      <span className="font-serif-luxury text-xl font-bold text-gold-400 shrink-0">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-stone-400 text-xs line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <button
                    onClick={() => onAddToCart(item)}
                    className="w-full py-2.5 rounded-xl glass-panel border border-gold-500/30 text-gold-300 hover:bg-gold-500 hover:text-black font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add to Order
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-panel rounded-2xl border border-white/5">
            <Utensils className="w-12 h-12 text-stone-600 mx-auto mb-3" />
            <p className="text-stone-300 text-base font-medium">No Indian pure veg creations found matching your search.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); setSelectedTag(null); }}
              className="mt-4 px-4 py-2 rounded-full gold-gradient-bg text-black text-xs font-bold uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
