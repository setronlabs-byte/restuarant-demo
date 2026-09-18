import React, { useState, useEffect } from 'react';
import { ShoppingBag, Utensils, Phone, Menu, X, Calendar, Sparkles, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ cartCount, onOpenCart, onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Chef Specials', href: '#specials' },
    { name: 'Royal Menu', href: '#menu' },
    { name: 'Heritage Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3.5 shadow-2xl border-b border-gold-500/20' : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Pure Veg Badge */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-black font-bold shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-luxury text-2xl font-bold tracking-wider gold-gradient-text block">
                {RESTAURANT_INFO.name}
              </span>
              {/* Green Pure Veg Dot Emblem */}
              <span className="inline-flex items-center justify-center w-4 h-4 border border-emerald-500 p-0.5 rounded bg-black/60" title="100% Pure Vegetarian">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </span>
            </div>
            <span className="text-[10px] text-amber-300/90 tracking-widest uppercase block -mt-1 font-semibold">
              100% Pure Veg • Royal Dining
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-300 hover:text-gold-400 text-sm font-medium transition-colors tracking-wide relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenReservation}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/50 text-gold-300 hover:bg-gold-500/10 text-xs font-semibold tracking-wider uppercase transition-all duration-200"
          >
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            Book Table
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full gold-gradient-bg text-black hover:opacity-95 text-xs font-bold tracking-wider uppercase shadow-lg shadow-gold-500/20 transition-all duration-200 hover:scale-105"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Order Online
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-stone-900 text-gold-400 border border-gold-500 text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenCart}
            className="relative p-2 text-stone-300 hover:text-gold-400"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-gold-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-gold-400 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-gold-500/30 px-6 py-6 mt-3 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-gold-400 text-base font-medium py-1.5 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gold-500/50 text-gold-300 font-semibold text-sm"
            >
              <Calendar className="w-4 h-4" /> Book Table
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl gold-gradient-bg text-black font-bold text-sm"
            >
              <ShoppingBag className="w-4 h-4" /> Order Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
