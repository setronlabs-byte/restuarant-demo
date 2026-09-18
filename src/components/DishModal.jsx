import React, { useState } from 'react';
import { X, Plus, Minus, Wine, Clock, Flame, Sparkles, Check } from 'lucide-react';

export default function DishModal({ dish, onClose, onAddToCart }) {
  if (!dish) return null;

  const [quantity, setQuantity] = useState(1);
  const [specialNote, setSpecialNote] = useState('');

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(dish, specialNote);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-2xl w-full bg-obsidian rounded-3xl border border-gold-500/40 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-stone-300 hover:text-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="md:w-1/2 relative bg-stone-900 aspect-square md:aspect-auto">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent md:hidden" />
        </div>

        {/* Dish Details */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                100% Pure Veg
              </span>
              {dish.tags.map((tag, idx) => (
                tag !== "100% Pure Veg" && (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-500/10 text-gold-400 border border-gold-500/30"
                  >
                    {tag}
                  </span>
                )
              ))}
            </div>

            <h3 className="font-serif-luxury text-3xl font-bold text-stone-100 mb-2">
              {dish.name}
            </h3>

            <div className="font-serif-luxury text-2xl font-bold text-gold-400 mb-4">
              ₹{dish.price}
            </div>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
              {dish.description}
            </p>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 text-xs text-stone-400 mb-6 bg-white/5 p-3 rounded-xl border border-white/5">
              {dish.prepTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold-400" /> {dish.prepTime}
                </span>
              )}
              {dish.calories && (
                <span className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-orange-400" /> {dish.calories}
                </span>
              )}
            </div>

            {/* Ingredients */}
            {dish.ingredients && (
              <div className="mb-6">
                <span className="text-xs uppercase font-bold text-stone-400 tracking-wider block mb-2">
                  Organic Sattvik Ingredients:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {dish.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-[11px] bg-stone-900 text-stone-300 border border-white/10"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Beverage Pairing */}
            {dish.pairing && (
              <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/30 mb-6 flex items-start gap-2.5">
                <Wine className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider block">
                    Royal Beverage Pairing Recommendation:
                  </span>
                  <span className="text-xs text-stone-200 font-medium">
                    {dish.pairing}
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-stone-300">Quantity:</span>
              <div className="flex items-center gap-3 bg-stone-900 px-3 py-1.5 rounded-full border border-white/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-stone-400 hover:text-white p-1"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-bold text-gold-400 w-4 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-stone-400 hover:text-white p-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full py-3.5 rounded-xl gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:scale-[1.02] transition-transform"
            >
              Add {quantity} to Plate • ₹{dish.price * quantity}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
