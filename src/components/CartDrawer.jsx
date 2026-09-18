import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Tag, ArrowRight, CheckCircle2, Truck, ChefHat } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onShowToast
}) {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isCheckoutModal, setIsCheckoutModal] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const tax = Math.round((subtotal - discountAmount) * 0.05); // 5% GST in India
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const grandTotal = subtotal - discountAmount + tax + deliveryFee;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'VEDA15') {
      setDiscountPercent(15);
      onShowToast('Royal Promo code VEDA15 applied! 15% discount granted.');
    } else {
      onShowToast('Invalid code. Try using promo code VEDA15');
    }
  };

  const handleStartCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckoutModal(true);
    setCheckoutStep(1);
  };

  const handleConfirmOrder = () => {
    setCheckoutStep(2);
    setTimeout(() => setCheckoutStep(3), 2500);
    setTimeout(() => setCheckoutStep(4), 5000);
  };

  const handleFinishCheckout = () => {
    onClearCart();
    setIsCheckoutModal(false);
    onClose();
    onShowToast('Namaste! Order placed successfully! Royal delivery status: En Route.');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-obsidian border-l border-gold-500/30 text-stone-100 flex flex-col justify-between shadow-2xl animate-slideLeft">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full gold-gradient-bg flex items-center justify-center text-black font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-xl font-bold">Your Royal Order Plate</h3>
                <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider block">
                  100% Pure Veg Sattvik Items ({cartItems.length})
                </span>
              </div>
            </div>

            <button onClick={onClose} className="p-2 text-stone-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3.5 rounded-2xl glass-card border border-white/10"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-stone-900 shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif-luxury text-sm font-bold text-stone-100 truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs font-bold text-gold-400 block mb-2">
                      ₹{item.price * item.quantity}
                    </span>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-300"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold px-1">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-300"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-stone-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-stone-600 mx-auto mb-3" />
                <p className="text-stone-400 text-sm">Your royal order plate is empty.</p>
                <span className="text-xs text-gold-400 mt-2 block">Add dishes from our Pure Veg menu to order.</span>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-velvet space-y-4">
              
              {/* Promo Code Input */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (e.g. VEDA15)"
                    className="w-full bg-stone-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <button
                  onClick={handleApplyPromo}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-gold-400 text-xs font-bold uppercase"
                >
                  Apply
                </button>
              </div>

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs text-stone-400">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-stone-200 font-medium">₹{subtotal}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-gold-400">
                    <span>Royal Discount ({discountPercent}%):</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>GST (5%):</span>
                  <span className="text-stone-200 font-medium">₹{tax}</span>
                </div>
                <div className="flex justify-between">
                  <span>Royal Express Delivery:</span>
                  <span className="text-stone-200 font-medium">₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-stone-100 border-t border-white/10 pt-2 mt-2">
                  <span>Grand Total:</span>
                  <span className="gold-gradient-text">₹{grandTotal}</span>
                </div>
              </div>

              <button
                onClick={handleStartCheckout}
                className="w-full py-4 rounded-xl gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
              >
                Proceed to Royal Checkout • ₹{grandTotal}
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </div>

      {/* Simulated Live Checkout Tracker Modal */}
      {isCheckoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-lg w-full bg-obsidian rounded-3xl border border-gold-500/40 p-6 sm:p-8 space-y-6 text-stone-100">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-serif-luxury text-2xl font-bold gold-gradient-text">
                Live Royal Order Tracker Demo
              </h3>
              <button onClick={() => setIsCheckoutModal(false)} className="text-stone-400 hover:text-white">✕</button>
            </div>

            {checkoutStep === 1 && (
              <div className="space-y-4">
                <p className="text-xs text-stone-300">
                  You are ordering <strong>{cartItems.length} Pure Veg creations</strong> for total of <strong className="text-gold-400">₹{grandTotal}</strong>.
                </p>
                
                <div className="space-y-3 bg-stone-900/60 p-4 rounded-xl border border-white/10 text-xs">
                  <div className="flex justify-between"><span>Delivery Address:</span> <span className="text-stone-200">88 Maharaja Palace Road, Connaught Place, New Delhi</span></div>
                  <div className="flex justify-between"><span>Estimated Delivery:</span> <span className="text-gold-400 font-bold">30 – 40 min</span></div>
                  <div className="flex justify-between"><span>Payment Method:</span> <span className="text-stone-200">UPI / GPay / Visa •••• 8821</span></div>
                </div>

                <button
                  onClick={handleConfirmOrder}
                  className="w-full py-3.5 rounded-xl gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider"
                >
                  Place Royal Demo Order
                </button>
              </div>
            )}

            {checkoutStep > 1 && (
              <div className="space-y-6 text-center">
                <div className="space-y-4 py-4">
                  <div className={`p-4 rounded-2xl flex items-center gap-3 ${checkoutStep >= 2 ? 'bg-gold-500/20 border border-gold-500/50 text-gold-300' : 'opacity-40'}`}>
                    <CheckCircle2 className="w-5 h-5 text-gold-400" />
                    <span className="text-xs font-bold">Step 1: Order Verified & Sattvik Assurance</span>
                  </div>

                  <div className={`p-4 rounded-2xl flex items-center gap-3 ${checkoutStep >= 3 ? 'bg-gold-500/20 border border-gold-500/50 text-gold-300' : 'opacity-40'}`}>
                    <ChefHat className="w-5 h-5 text-gold-400" />
                    <span className="text-xs font-bold">Step 2: Chef Vikramaditya Crafting in Clay Tandoor</span>
                  </div>

                  <div className={`p-4 rounded-2xl flex items-center gap-3 ${checkoutStep >= 4 ? 'bg-gold-500/20 border border-gold-500/50 text-gold-300' : 'opacity-40'}`}>
                    <Truck className="w-5 h-5 text-gold-400" />
                    <span className="text-xs font-bold">Step 3: Royal Express Dispatch En Route</span>
                  </div>
                </div>

                {checkoutStep === 4 && (
                  <button
                    onClick={handleFinishCheckout}
                    className="w-full py-3 rounded-xl gold-gradient-bg text-black font-bold text-xs uppercase"
                  >
                    Complete Demo
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
