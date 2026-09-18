import React from 'react';
import { Leaf, Award, Compass, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { CHEF_INFO } from '../data/restaurantData';

export default function ChefStory() {
  const commitments = [
    {
      icon: ShieldCheck,
      title: "100% Pure Sattvik",
      desc: "Guaranteed 100% vegetarian kitchen using organic pulses, pure ghee, and unadulterated cold-pressed oils."
    },
    {
      icon: Award,
      title: "Royal Palace Recipes",
      desc: "Authentic recipes preserved from historical Mewar & Awadhi royal court manuscripts."
    },
    {
      icon: Leaf,
      title: "Farm Spices & Herbs",
      desc: "Sourced directly from organic spice estates in Kerala, Kashmir, and Rajasthan."
    },
    {
      icon: Heart,
      title: "Atithi Devo Bhava",
      desc: "Embodying the sacred ancient philosophy that every guest is treated like a divine deity."
    }
  ];

  return (
    <section id="story" className="py-24 relative bg-velvet border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Chef Portrait */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl aspect-[4/5] bg-stone-900 group">
              <img
                src={CHEF_INFO.image}
                alt={CHEF_INFO.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-2xl border border-white/10">
                <span className="text-xs uppercase font-bold text-gold-400 tracking-wider block mb-1">
                  Master Executive Culinary Director
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-stone-100">
                  {CHEF_INFO.name}
                </h3>
              </div>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: Culinary Philosophy & Commitments */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Royal Heritage & Philosophy
              </div>
              <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold text-stone-100 leading-tight mb-6">
                Preserving Royal Heritage Through <span className="gold-gradient-text italic">Sattvik Artistry</span>
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
                {CHEF_INFO.bio}
              </p>
              
              <blockquote className="p-4 rounded-xl glass-card border-l-4 border-gold-500 italic text-gold-300 text-sm font-serif-luxury">
                "{CHEF_INFO.philosophy}"
              </blockquote>
            </div>

            {/* Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {commitments.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl glass-card border border-white/5 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif-luxury text-lg font-bold text-stone-100">
                      {item.title}
                    </h4>
                    <p className="text-stone-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
