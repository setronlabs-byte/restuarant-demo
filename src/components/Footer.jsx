import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Utensils, Instagram, Facebook, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer({ onOpenReservation, onShowToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    onShowToast('Welcome to the Savor & Sage VIP Tasting Club! 15% voucher sent.');
    setNewsletterEmail('');
  };

  return (
    <footer id="contact" className="relative bg-obsidian border-t border-gold-500/30 pt-20 pb-12 text-stone-300">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & VIP Club */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-black font-bold">
                <Utensils className="w-5 h-5" />
              </div>
              <span className="font-serif-luxury text-2xl font-bold gold-gradient-text">
                {RESTAURANT_INFO.name}
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed">
              {RESTAURANT_INFO.tagline}. Honored with 3 Michelin Stars for sustainable culinary innovation.
            </p>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
              <span className="text-[11px] font-bold text-gold-400 tracking-wider uppercase block">
                Join VIP Club (15% Off First Tasting):
              </span>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email..."
                  className="w-full bg-stone-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-gold-500"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl gold-gradient-bg text-black font-bold text-xs shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Opening Hours & Status */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-xl font-bold text-stone-100 flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-400" /> Operating Hours
            </h4>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {RESTAURANT_INFO.hours.status} • Closes {RESTAURANT_INFO.hours.closingTime}
            </div>

            <div className="text-xs space-y-1.5 text-stone-400">
              <p><strong className="text-stone-200">Mon – Fri:</strong> {RESTAURANT_INFO.hours.weekdays}</p>
              <p><strong className="text-stone-200">Sat – Sun:</strong> {RESTAURANT_INFO.hours.weekends}</p>
              <p><strong className="text-stone-200">Sommelier Bar:</strong> Open until 1:00 AM</p>
            </div>

            <button
              onClick={onOpenReservation}
              className="mt-2 text-xs text-gold-400 font-bold uppercase tracking-wider hover:underline block"
            >
              Check Real-Time Seat Availability →
            </button>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-xl font-bold text-stone-100 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" /> Location & Contact
            </h4>

            <div className="text-xs text-stone-400 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="text-stone-200 font-medium">{RESTAURANT_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{RESTAURANT_INFO.email}</span>
              </p>
            </div>
          </div>

          {/* Interactive Map Visual Card */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-xl font-bold text-stone-100">
              Directions & Valet
            </h4>
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
                alt="Map location preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-3">
                <MapPin className="w-6 h-6 text-gold-400 mb-1 animate-bounce" />
                <span className="text-[10px] font-bold text-stone-100 uppercase tracking-wider">
                  Valet Parking Included
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-3 py-1 rounded-full bg-gold-500 text-black text-[10px] font-bold uppercase hover:scale-105 transition-transform"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Savor & Sage Fine Dining Group. All Rights Reserved. Created for Client Showcase Demo.</p>

          <div className="flex items-center gap-4 text-stone-400">
            <span className="hover:text-gold-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-gold-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-gold-400 cursor-pointer">Press Kit</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
