import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  const pressLogos = [
    "Michelin Guide 2026",
    "The New York Times",
    "Food & Wine",
    "Bon Appétit",
    "Gourmet Traveller"
  ];

  return (
    <section id="reviews" className="py-24 relative bg-velvet border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase block mb-2">
            Critical Acclaim
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-100">
            Praise From Culinary Critics & Guests
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-2xl text-center">
          
          <Quote className="w-12 h-12 text-gold-500/20 mx-auto mb-6" />

          {/* Rating Stars */}
          <div className="flex justify-center gap-1.5 mb-6 text-gold-400">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          {/* Quote Text */}
          <p className="font-serif-luxury text-2xl sm:text-3xl italic text-stone-100 max-w-3xl mx-auto leading-relaxed mb-8">
            "{current.quote}"
          </p>

          {/* Reviewer Details */}
          <div className="flex flex-col items-center justify-center">
            <img
              src={current.avatar}
              alt={current.author}
              className="w-14 h-14 rounded-full object-cover border-2 border-gold-400 mb-3 shadow-lg"
            />
            <h4 className="font-serif-luxury text-xl font-bold text-stone-100">
              {current.author}
            </h4>
            <span className="text-xs text-gold-400 uppercase tracking-widest font-semibold mt-0.5">
              {current.role}
            </span>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between absolute inset-y-1/2 left-4 right-4 -translate-y-1/2 pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full glass-card text-stone-300 hover:text-gold-400 hover:border-gold-500 pointer-events-auto transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full glass-card text-stone-300 hover:text-gold-400 hover:border-gold-500 pointer-events-auto transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Press Badges Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-stone-500 font-serif-luxury text-lg tracking-wider">
          {pressLogos.map((logo, idx) => (
            <span key={idx} className="hover:text-gold-400 transition-colors cursor-default">
              ★ {logo}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
