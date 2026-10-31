import React, { useState, useEffect } from 'react';
import { Menu, X, Play, ChevronRight, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { setIsFilmModalOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Clean navigation links without Most Sold, Notes, Reviews, FAQ
  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'COLLECTIONS', href: '#collections' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#262218] py-3.5 shadow-lg'
            : 'bg-gradient-to-b from-[#050505]/90 via-[#050505]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Royal Crest */}
          <a
            href="#hero"
            className="group flex items-center space-x-3 focus:outline-none"
            aria-label="Essence de Royal Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#d4af37]/50 flex items-center justify-center bg-black/70 group-hover:border-[#f7e27d] transition-all duration-300 shadow-gold-glow">
              <span className="text-base sm:text-lg text-gold-gradient font-bold leading-none">
                ⚜
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="tracking-[0.2em] text-sm sm:text-base font-bold text-white group-hover:text-[#f7e27d] transition-colors leading-tight">
                ESSENCE <span className="text-gold-gradient">DE ROYAL</span>
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.3em] text-[#c9a227] uppercase font-semibold">
                HAUTE PARFUMERIE · EST. 2012
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-[#d4cfc5] hover:text-[#f7e27d] transition-colors duration-200 relative group py-1 font-semibold"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#8c6a1d] via-[#f7e27d] to-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Tools: Watch Film & Mobile Menu Toggle (Cart & Buy buttons removed) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Campaign Film Trigger */}
            <button
              type="button"
              onClick={() => setIsFilmModalOpen(true)}
              className="flex items-center space-x-2 text-xs tracking-wider text-[#d4af37] hover:text-[#f7e27d] py-2 px-3.5 rounded-full border border-[#d4af37]/40 hover:border-[#f7e27d] transition-all duration-300 bg-black/40 hover:bg-[#d4af37]/15"
              title="Watch Campaign Film"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#d4af37]" />
              <span className="uppercase tracking-[0.15em] font-semibold text-[11px]">Watch Film</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#f7e27d] hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#050505]/98 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#262218]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-black shadow-gold-glow">
              <span className="text-[#f7e27d] font-bold">⚜</span>
            </div>
            <div className="flex flex-col">
              <span className="tracking-[0.2em] text-base font-bold text-white">
                ESSENCE <span className="text-gold-gradient">DE ROYAL</span>
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#c9a227]">
                PARIS & GRASSE · SINCE 2012
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-[#9e9789] hover:text-white rounded-full hover:bg-white/5 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6 text-[#f7e27d]" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 overflow-y-auto py-8 px-6 flex flex-col justify-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 text-lg tracking-[0.2em] font-semibold text-[#e8e4dc] hover:text-[#f7e27d] border-b border-[#1c1914] transition-all group"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-5 h-5 text-[#8c6a1d] group-hover:text-[#f7e27d] group-hover:translate-x-1 transition-all" />
            </a>
          ))}

          {/* Action button inside mobile menu */}
          <div className="pt-6">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsFilmModalOpen(true);
              }}
              className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-lg border border-[#d4af37]/50 text-[#f7e27d] text-xs tracking-[0.2em] uppercase font-bold bg-black/50"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Watch Campaign Film</span>
            </button>
          </div>
        </nav>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-[#262218] text-center bg-[#09090b]">
          <div className="flex items-center justify-center space-x-2 text-xs text-[#9e9789]">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>14 Place Vendôme, Paris · Grasse, France</span>
          </div>
        </div>
      </div>
    </>
  );
};
