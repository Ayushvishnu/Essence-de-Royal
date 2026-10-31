import React, { useState } from 'react';
import { FRAGRANCE_DETAILS } from '../data/fragranceData';
import { useCart } from '../context/CartContext';
import { MapPin, ShieldCheck, Edit3, Award, Feather } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const { setIsBoutiqueOpen } = useCart();
  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml'>('100ml');
  const [engravingText, setEngravingText] = useState('ROYAL-2026');
  const [showEngraving, setShowEngraving] = useState(true);

  return (
    <section id="product" className="py-20 lg:py-28 relative bg-[#070709] border-t border-[#262218] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] ambient-glow-gold opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Product Flacon Showcase */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[9/13] glass-card-dark rounded-2xl p-6 sm:p-8 border border-[#d4af37]/40 shadow-gold-glow flex flex-col items-center justify-between group">
              {/* Size Badge */}
              <div className="self-end px-3 py-1 rounded-full bg-black/70 border border-[#d4af37]/40 text-xs tracking-wider text-[#f7e27d] font-semibold shadow-sm">
                {selectedSize.toUpperCase()} · EDP ARCHIVE
              </div>

              {/* Bottle Visual */}
              <div className="relative my-auto w-full max-h-[78%] flex items-center justify-center">
                <img
                  src="/assets/images/essence_de_royal_bottle.jpg"
                  alt="Essence de Royal Flacon"
                  className="max-h-[380px] sm:max-h-[440px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-105 rounded-lg"
                />

                {/* Engraving Preview Overlay if entered */}
                {showEngraving && engravingText.trim() && (
                  <div className="absolute bottom-16 px-4 py-1.5 bg-black/85 backdrop-blur-sm rounded-lg border border-[#d4af37] text-xs tracking-widest text-[#f7e27d] uppercase shadow-gold-glow animate-fadeIn font-semibold">
                    Engraved: "{engravingText.toUpperCase()}"
                  </div>
                )}
              </div>

              {/* Bottom Hallmark Note */}
              <div className="w-full text-center pt-4 border-t border-[#1f1b14] text-xs text-[#8c8577]">
                MAISON ESSENCE DE ROYAL · PLACE VENDÔME, PARIS
              </div>
            </div>
          </div>

          {/* Right Column: Flacon Detailing & Craftsmanship */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Brand Title */}
            <div>
              <div className="text-xs tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-2">
                {FRAGRANCE_DETAILS.house}
              </div>

              <h2 className="text-3xl sm:text-5xl text-white font-bold mb-2">
                Essence <span className="text-gold-gradient">de Royal</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#8c8577] tracking-wider uppercase font-semibold">
                {FRAGRANCE_DETAILS.concentration} · SILLAGE: {FRAGRANCE_DETAILS.sillage} · {FRAGRANCE_DETAILS.longevity}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#bfb8a8] leading-relaxed">
              {FRAGRANCE_DETAILS.character}
            </p>

            {/* Flacon Specifications Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-black/60 border border-[#262218]">
                <span className="text-[10px] uppercase text-[#8c8577] block font-semibold mb-1">
                  Flacon Crystal
                </span>
                <span className="text-xs text-white font-medium">
                  {FRAGRANCE_DETAILS.flaconSpecs.glass}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-[#262218]">
                <span className="text-[10px] uppercase text-[#8c8577] block font-semibold mb-1">
                  Flacon Cap
                </span>
                <span className="text-xs text-white font-medium">
                  {FRAGRANCE_DETAILS.flaconSpecs.cap}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-[#262218]">
                <span className="text-[10px] uppercase text-[#8c8577] block font-semibold mb-1">
                  Gilded Hallmark
                </span>
                <span className="text-xs text-white font-medium">
                  {FRAGRANCE_DETAILS.flaconSpecs.seal}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-[#262218]">
                <span className="text-[10px] uppercase text-[#8c8577] block font-semibold mb-1">
                  Artisanal Provenance
                </span>
                <span className="text-xs text-white font-medium">
                  {FRAGRANCE_DETAILS.flaconSpecs.origin}
                </span>
              </div>
            </div>

            {/* Size Presentation Selector */}
            <div>
              <span className="text-xs tracking-wider text-white uppercase font-bold block mb-2">
                Available Volume Sizes
              </span>

              <div className="grid grid-cols-2 gap-3">
                {(['50ml', '100ml'] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-xl border text-left transition-all ${
                      selectedSize === size
                        ? 'bg-black/80 border-[#d4af37] shadow-gold-glow'
                        : 'bg-[#0a0a0d] border-[#262218] hover:border-[#d4af37]/40 text-[#bfb8a8]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-white uppercase">
                        {size} Flacon
                      </span>
                      <span className="text-xs text-[#f7e27d] font-semibold">
                        {size === '100ml' ? 'Collector' : 'Travel Edition'}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#8c8577] block mt-1">
                      {size === '100ml' ? 'Heavy obsidian plinth' : 'Portable coffret'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 24K Gold Flacon Engraving Customization Preview */}
            <div className="p-4 rounded-xl bg-black/60 border border-[#262218] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#f7e27d] uppercase">
                  <Edit3 className="w-4 h-4 text-[#d4af37]" />
                  <span>Interactive 24K Gold Engraving Preview</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowEngraving(!showEngraving)}
                  className="text-xs text-[#8c8577] hover:text-white"
                >
                  {showEngraving ? 'Hide' : 'Show'}
                </button>
              </div>

              {showEngraving && (
                <div className="space-y-2">
                  <input
                    type="text"
                    maxLength={20}
                    value={engravingText}
                    onChange={(e) => setEngravingText(e.target.value)}
                    placeholder="Type custom initials or name..."
                    className="w-full bg-[#050505] border border-[#262218] focus:border-[#d4af37] px-3.5 py-2 rounded-lg text-xs text-white placeholder-[#686255] focus:outline-none uppercase tracking-wider font-semibold"
                  />
                  <p className="text-[11px] text-[#8c8577]">
                    Hot-stamped by master engravers in Paris with genuine 24K gold foil directly onto crystal.
                  </p>
                </div>
              )}
            </div>

            {/* Detailing Action Links */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="flex-1 py-3.5 px-6 rounded-lg bg-gold-gradient text-[#050505] text-xs font-bold tracking-[0.18em] uppercase shadow-gold-glow hover:scale-[1.01] transition-all text-center"
              >
                REQUEST SALON CONSULTATION
              </a>

              <button
                type="button"
                onClick={() => setIsBoutiqueOpen(true)}
                className="py-3.5 px-6 rounded-lg border border-[#262218] hover:border-[#d4af37] text-xs text-[#bfb8a8] hover:text-[#f7e27d] tracking-wider uppercase font-semibold transition-colors flex items-center justify-center space-x-2 bg-black/50"
              >
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>FIND IN SALON</span>
              </button>
            </div>

            {/* Heritage Guarantees */}
            <div className="pt-4 border-t border-[#262218] grid grid-cols-3 gap-2 text-center text-xs text-[#8c8577]">
              <div>
                <ShieldCheck className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                <span>100% Certified Pure</span>
              </div>
              <div>
                <Award className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                <span>Prix de Haute Parfumerie</span>
              </div>
              <div>
                <Feather className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                <span>Grasse Hand Harvest</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
