import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Gift, Sparkles, Check, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    formatPrice,
    subtotal,
    giftWrapping,
    setGiftWrapping,
    clearCart,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'success'>('cart');

  const handleCheckout = () => {
    setCheckoutStep('success');
    setTimeout(() => {
      clearCart();
      setCheckoutStep('cart');
      setIsCartOpen(false);
    }, 3200);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#08080a] border-l border-[#262218] text-white flex flex-col shadow-2xl">

          {/* Header */}
          <div className="p-6 border-b border-[#262218] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-5 h-5 text-[#f7e27d]" />
              <h2 className="font-serif-luxury text-sm tracking-[0.2em] uppercase font-semibold text-white">
                Your Shopping Bag ({cart.length})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#8c8577] hover:text-white rounded hover:bg-white/5 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Contents */}
          {checkoutStep === 'success' ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#f7e27d] animate-bounce shadow-gold-glow">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-editorial text-3xl text-white">Order Confirmed</h3>
              <p className="text-sm text-[#bfb8a8] font-light max-w-xs font-editorial italic">
                Your bespoke Essence de Royal flacon is being prepared by our master bottlers.
              </p>
              <span className="text-xs text-[#f7e27d] font-mono">
                Order Reference: ER-2026-ROYAL
              </span>
            </div>
          ) : cart.length === 0 ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-black/60 border border-[#262218] flex items-center justify-center text-[#8c8577]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="font-serif-luxury text-sm tracking-widest uppercase">Your Bag is Empty</h3>
              <p className="text-xs text-[#8c8577] max-w-xs leading-relaxed font-light">
                Discover the nocturnal poetry of Essence de Royal or explore our most sold perfumes.
              </p>
              <a
                href="#bestsellers"
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2.5 rounded bg-gold-gradient text-[#050505] text-xs font-serif-luxury font-bold tracking-widest uppercase shadow-gold-glow"
              >
                EXPLORE BEST SELLERS
              </a>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 p-4 rounded-xl glass-card-dark border border-[#262218]"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-20 h-24 rounded-lg bg-[#050505] border border-white/5 overflow-hidden shrink-0 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Item Meta */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-editorial text-lg text-white font-normal">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#8c8577] hover:text-red-400 p-1"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-[11px] text-[#bfb8a8] font-mono">
                          Size: {item.size.toUpperCase()} · Eau de Parfum
                        </div>

                        {item.engraving && (
                          <div className="mt-1 text-[10px] text-[#f7e27d] font-serif-luxury tracking-wider">
                            Engraved: "{item.engraving}"
                          </div>
                        )}
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-[#262218] rounded bg-black/80 px-1.5 py-0.5">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-[#8c8577] hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-mono">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-[#8c8577] hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif-luxury text-sm font-semibold text-white">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Gift-Wrapping Option */}
                <div className="p-3.5 rounded-lg bg-black/60 border border-[#262218] flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Gift className="w-4 h-4 text-[#d4af37]" />
                    <div>
                      <span className="text-xs font-serif-luxury text-white block">
                        Signature Royal Gift Packaging
                      </span>
                      <span className="text-[10px] text-[#8c8577]">
                        Gold satin ribbon & wax seal · Complimentary
                      </span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={giftWrapping}
                    onChange={(e) => setGiftWrapping(e.target.checked)}
                    className="w-4 h-4 accent-[#d4af37] rounded cursor-pointer"
                  />
                </div>

                {/* Free discovery samples callout */}
                <div className="flex items-center space-x-2 text-[11px] text-[#bfb8a8] p-3 rounded bg-[#0e0e11] border border-[#d4af37]/30">
                  <Sparkles className="w-4 h-4 text-[#f7e27d] shrink-0" />
                  <span>3 Complimentary 2ml Discovery Vials automatically added at dispatch.</span>
                </div>
              </div>

              {/* Subtotal & Checkout Button */}
              <div className="p-6 border-t border-[#262218] bg-[#050505] space-y-4">
                <div className="flex items-center justify-between text-xs text-[#8c8577]">
                  <span>Delivery & Insurance</span>
                  <span className="text-[#f7e27d] font-mono">Complimentary Express</span>
                </div>

                <div className="flex items-center justify-between text-base">
                  <span className="font-serif-luxury uppercase tracking-wider text-white">
                    Subtotal
                  </span>
                  <span className="font-serif-luxury text-xl text-white font-semibold">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full bg-gold-gradient text-[#050505] py-3.5 px-6 rounded font-serif-luxury text-xs font-bold tracking-[0.2em] uppercase shadow-gold-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                >
                  <span>PROCEED TO ROYAL CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-[#8c8577]">
                  Encrypted 256-Bit SSL Checkout · Worldwide Express Courier
                </p>
              </div>
            </>
          )}















        </div>
      </div>
    </div>
  );
};
