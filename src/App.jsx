import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChefSpecials from './components/ChefSpecials';
import MenuSection from './components/MenuSection';
import DishModal from './components/DishModal';
import ReservationModal from './components/ReservationModal';
import CartDrawer from './components/CartDrawer';
import ChefStory from './components/ChefStory';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [inspectDish, setInspectDish] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleAddToCart = (dish, specialNote = '') => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...dish, quantity: 1, specialNote }];
      }
    });
    showToast(`Added "${dish.name}" to your order plate.`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from order plate.');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-obsidian text-stone-100 font-sans-ui selection:bg-gold-500 selection:text-black">
      
      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero
          onOpenReservation={() => setIsReservationOpen(true)}
          onExploreMenu={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <ChefSpecials
          onAddToCart={handleAddToCart}
          onViewDish={(dish) => setInspectDish(dish)}
        />

        <MenuSection
          onAddToCart={handleAddToCart}
          onViewDish={(dish) => setInspectDish(dish)}
        />

        <ChefStory />

        <GallerySection />

        <Testimonials />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        onShowToast={showToast}
      />

      {/* Interactive Modals & Drawers */}
      <DishModal
        dish={inspectDish}
        onClose={() => setInspectDish(null)}
        onAddToCart={handleAddToCart}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onShowToast={showToast}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onShowToast={showToast}
      />

      {/* Floating Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
