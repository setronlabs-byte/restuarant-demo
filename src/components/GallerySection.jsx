import React, { useState } from 'react';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="gallery" className="py-24 relative bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase block mb-2">
            Visual Ambiance
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-100 mb-4">
            The Savor & Sage Atmosphere
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Take a visual tour through our candlelit dining rooms, artisanal bar, and private sommelier cellars.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card cursor-pointer group border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-stone-100 flex items-center justify-between">
                  {item.title}
                  <Maximize2 className="w-4 h-4 text-gold-400" />
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 text-stone-300 hover:text-white p-3 text-2xl font-bold z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-gold-500/30"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">
                {activeItem.category}
              </span>
              <h4 className="font-serif-luxury text-2xl font-bold text-stone-100 mt-1">
                {activeItem.title}
              </h4>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
