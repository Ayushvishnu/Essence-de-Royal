import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, Currency } from '../types';
import confetti from 'canvas-confetti';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isBoutiqueOpen: boolean;
  setIsBoutiqueOpen: (open: boolean) => void;
  isFilmModalOpen: boolean;
  setIsFilmModalOpen: (open: boolean) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountInUSD: number) => string;
  totalItems: number;
  subtotal: number;
  giftWrapping: boolean;
  setGiftWrapping: (wrap: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number }> = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('celeste_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBoutiqueOpen, setIsBoutiqueOpen] = useState(false);
  const [isFilmModalOpen, setIsFilmModalOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [giftWrapping, setGiftWrapping] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem('celeste_cart', JSON.stringify(cart));
    } catch {
      // storage disabled
    }
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const id = `${item.productId}-${item.size}-${item.engraving || 'none'}`;
    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, { ...item, id }];
    });

    // Golden luxury particle celebration
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#F5E6A3', '#8A2BE2', '#FFFFFF'],
        disableForReducedMotion: true,
      });
    } catch {
      // Ignore if confetti fails
    }

    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setCart([]);

  const formatPrice = (amountInUSD: number): string => {
    const { symbol, rate } = CURRENCY_RATES[currency];
    const converted = Math.round(amountInUSD * rate);
    return `${symbol}${converted.toLocaleString()}`;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isBoutiqueOpen,
        setIsBoutiqueOpen,
        isFilmModalOpen,
        setIsFilmModalOpen,
        currency,
        setCurrency,
        formatPrice,
        totalItems,
        subtotal,
        giftWrapping,
        setGiftWrapping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
