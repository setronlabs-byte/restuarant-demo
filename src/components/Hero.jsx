import React, { useState } from 'react';
import { Star, Award, ArrowRight, Play, Calendar, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onOpenReservation, onExploreMenu }) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/indian_hero_bg.jpg"
          alt="Veda Heritage Royal Indian Fine Dining Room"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-transform duration-10000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-black/70" />
        <div className="absolute inset-0 bg-gold-glow opacity-70 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        
        {/* Pure Veg Royal Award Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-gold-500/40 mb-8 animate-float shadow-xl">
          <span className="inline-flex items-center justify-center w-4 h-4 border border-emerald-400 p-0.5 rounded bg-black/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-semibold tracking-widest text-gold-300 uppercase">
            100% Pure Vegetarian • Voted #1 Royal Indian Dining 2026
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-100 max-w-5xl mx-auto leading-[1.15] mb-6">
          Royal Heritage Gastronomy & <span className="gold-gradient-text italic">Pure Sattvik Artistry</span>
        </h1>

        {/* Subtitle */}
        <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Savor centuries-old royal Mughlai, Rajasthani thalis, and regional Sattvik recipes handcrafted by Master Chef Vikramaditya Singh using 100% organic farm spices.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#menu"
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-black font-bold text-sm tracking-wider uppercase shadow-xl shadow-gold-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore Royal Menu
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-gold-500/50 text-gold-300 hover:bg-gold-500/10 font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            Reserve Haveli Table
          </button>

          <button
            onClick={() => setShowVideoModal(true)}
            className="w-full sm:w-auto px-6 py-4 rounded-full text-stone-300 hover:text-gold-400 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full border border-stone-600 group-hover:border-gold-400 flex items-center justify-center transition-colors">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-gold-400" />
            </div>
            Watch Culinary Film
          </button>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10">
          {RESTAURANT_INFO.stats.map((stat, index) => (
            <div key={index} className="p-4 rounded-2xl glass-card text-center">
              <div className="text-2xl sm:text-3xl font-bold font-serif-luxury gold-gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Culinary Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-obsidian rounded-2xl border border-gold-500/30 overflow-hidden shadow-2xl p-6">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 text-xl font-bold z-10"
            >
              ✕
            </button>
            <h3 className="font-serif-luxury text-2xl font-bold gold-gradient-text mb-4">
              Behind the Scenes: The Royal Kitchen Story
            </h3>
            <div className="aspect-video bg-stone-900 rounded-xl flex items-center justify-center border border-white/10 relative overflow-hidden group">
              <img
                src="/images/indian_signature_dish.jpg"
                alt="Royal Indian cooking preview"
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full gold-gradient-bg flex items-center justify-center text-black mb-3 shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <p className="text-stone-200 text-sm font-medium">
                  "Secrets of Royal Haveli Spices & Sattvik Artistry" — Official 4K Documentary
                </p>
                <span className="text-xs text-gold-400 mt-2">Demo Video Preview</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
