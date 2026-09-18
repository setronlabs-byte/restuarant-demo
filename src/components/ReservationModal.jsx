import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, Sparkles, CheckCircle2, Ticket } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ReservationModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1); // 1: Select Details, 2: Guest Info, 3: Confirmation Ticket
  const [date, setDate] = useState('2026-09-20');
  const [time, setTime] = useState('07:30 PM');
  const [guests, setGuests] = useState('2 Guests');
  const [seating, setSeating] = useState('Royal Haveli Main Hall');
  
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  const [ticketId, setTicketId] = useState('');

  const timeSlots = ['12:30 PM', '01:30 PM', '07:00 PM', '08:15 PM', '09:30 PM'];
  const seatingOptions = [
    { name: 'Royal Haveli Main Hall', desc: 'Candlelit arches, live sitar melodies' },
    { name: 'Garden Jharokha Terrace', desc: 'Rooftop courtyard with fountain views' },
    { name: 'Maharaja Private Dining', desc: 'Exclusive alcove for VIP family dining' },
    { name: "Chef's Tandoor Bar", desc: 'Front-row view of live clay tandoor' }
  ];

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    const generatedTicket = 'VEDA-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setStep(3);
    onShowToast(`Reservation confirmed! Haveli Ticket #${generatedTicket}`);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-xl w-full bg-obsidian rounded-3xl border border-gold-500/40 overflow-hidden shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 text-xl font-bold"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" /> Royal Haveli Reservation Wizard
          </div>
          <h3 className="font-serif-luxury text-3xl font-bold text-stone-100">
            {step === 3 ? 'Royal Seat Confirmed' : 'Reserve Your Pure Veg Feast'}
          </h3>
        </div>

        {/* Step Indicator */}
        {step < 3 && (
          <div className="flex items-center justify-center gap-4 mb-8 text-xs">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-gold-400 font-bold' : 'text-stone-500'}`}>
              <span className="w-5 h-5 rounded-full border border-gold-400 flex items-center justify-center text-[10px]">1</span>
              <span>Date & Haveli</span>
            </div>
            <span className="text-stone-600">—</span>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-gold-400 font-bold' : 'text-stone-500'}`}>
              <span className="w-5 h-5 rounded-full border border-gold-400 flex items-center justify-center text-[10px]">2</span>
              <span>Guest Details</span>
            </div>
          </div>
        )}

        {/* STEP 1: Date, Time & Seating Selector */}
        {step === 1 && (
          <div className="space-y-6">
            
            {/* Date & Guest Count Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1.5">Select Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1.5">Party Size</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-gold-500"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5-6 Family Group</option>
                  <option>7+ Royal Maharaja Feast</option>
                </select>
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <label className="text-xs font-medium text-stone-300 block mb-1.5">Preferred Dining Time</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`py-2 px-1 rounded-xl text-xs font-semibold transition-all ${
                      time === slot
                        ? 'gold-gradient-bg text-black font-bold shadow-md'
                        : 'bg-stone-900 text-stone-300 border border-white/10 hover:border-gold-500/40'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Seating Location options */}
            <div>
              <label className="text-xs font-medium text-stone-300 block mb-1.5">Haveli Ambience & Seating Area</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {seatingOptions.map((opt) => (
                  <div
                    key={opt.name}
                    onClick={() => setSeating(opt.name)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      seating === opt.name
                        ? 'bg-gold-500/10 border-gold-500 text-stone-100'
                        : 'bg-stone-900/60 border-white/10 text-stone-400 hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-bold block text-stone-200">{opt.name}</span>
                    <span className="text-[10px] text-stone-400 block">{opt.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3.5 rounded-xl gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider hover:scale-[1.01] transition-transform"
            >
              Continue to Guest Details →
            </button>

          </div>
        )}

        {/* STEP 2: Contact Details */}
        {step === 2 && (
          <form onSubmit={handleSubmitBooking} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-stone-300 block mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Vikramaditya Singhania"
                className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-stone-300 block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  placeholder="vikram@singhania.com"
                  className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-stone-300 block mb-1">Dietary Preferences & Special Occasion</label>
              <textarea
                rows="2"
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                placeholder="100% Jain food preference, anniversary celebration, mild spice level..."
                className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-gold-500 resize-none"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl border border-white/10 text-stone-300 text-xs font-semibold"
              >
                ← Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider"
              >
                Confirm Royal Reservation
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Digital Confirmation Ticket */}
        {step === 3 && (
          <div className="space-y-6 text-center animate-scaleUp">
            
            <div className="w-14 h-14 rounded-full gold-gradient-bg flex items-center justify-center text-black mx-auto shadow-2xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <p className="text-stone-300 text-xs sm:text-sm">
              Namaste! We look forward to welcoming you to <strong>Veda Heritage</strong>. Confirmation details have been dispatched.
            </p>

            {/* Ticket Card */}
            <div className="glass-panel p-5 rounded-2xl border border-gold-500/40 text-left space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500 text-black text-[10px] font-extrabold uppercase rounded-bl-xl">
                ROYAL VIP CONFIRMED
              </div>

              <div className="flex items-center gap-2 text-gold-400 font-serif-luxury text-lg font-bold">
                <Ticket className="w-5 h-5" /> Ticket #{ticketId}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs border-t border-white/10 pt-3">
                <div>
                  <span className="text-stone-500 block text-[10px]">Guest Name:</span>
                  <strong className="text-stone-100">{guestName || 'Valued Guest'}</strong>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">Date & Time:</span>
                  <strong className="text-gold-300">{date} at {time}</strong>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">Party Size:</span>
                  <strong className="text-stone-100">{guests}</strong>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">Seating Area:</span>
                  <strong className="text-stone-100">{seating}</strong>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-black font-bold text-xs uppercase"
            >
              Done & Close
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
