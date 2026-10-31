import React, { useState } from 'react';
import { BEST_SELLERS } from '../data/fragranceData';
import { Sparkles, Star, Clock, Info, X } from 'lucide-react';
import type { BestSellerFragrance } from '../types';

export const BestSellersSection: React.FC = () => {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, '50ml' | '100ml'>>({
    'essence-de-royal': '100ml',
    'sovereign-noir': '100ml',
    'ambre-mystique': '100ml',
    'lor-ethere': '100ml',
    'rose-imperiale': '100ml',
  });

  const [activeDetailModal, setActiveDetailModal] = useState<BestSellerFragrance | null>(null);

  const handleSizeChange = (fragranceId: string, size: '50ml' | '100ml') => {
    setSelectedSizes((prev) => ({
      ...prev,
      [fragranceId]: size,
    }));
  };

  return (
    <section id="bestsellers" className="py-20 lg:py-28 relative bg-[#070709] border-t border-[#262218] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] ambient-glow-gold opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-4 shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 text-[#f7e27d]" />
            <span className="text-[11px] tracking-[0.25em] text-gold-gradient uppercase font-bold">
              PERFUME CATALOGUE & SHOWCASE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4">
            Most Sold <span className="text-gold-gradient">Perfumes</span>
          </h2>

          <p className="text-sm sm:text-base text-[#bfb8a8] max-w-2xl mx-auto">
            Discover our sovereign signature creations celebrated worldwide. Unrivaled botanical extraction, magnetic sillage, and hand-blown obsidian glass.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[#d4af37] text-xs">⚜</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </div>

        {/* Best Sellers Grid - Showing Perfumes & Detailed Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEST_SELLERS.map((perfume) => {
            const currentSize = selectedSizes[perfume.id] || '100ml';

            return (
              <div
                key={perfume.id}
                className="group relative rounded-2xl glass-card-dark border border-[#262218] hover:border-[#d4af37]/70 transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-gold-glow"
              >
                {/* Flacon Visual Frame */}
                <div className="relative aspect-[4/5] bg-gradient-to-b from-[#0e0e12] via-[#09090b] to-[#050505] overflow-hidden flex items-center justify-center p-6 border-b border-[#1f1b14]">
                  {/* Sales Rank Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gold-gradient text-[#050505] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-gold-glow">
                      {perfume.badge}
                    </span>
                  </div>

                  {/* Longevity Pill */}
                  <div className="absolute top-4 right-4 z-20 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/30 text-[10px] text-[#f7e27d] font-semibold">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    <span>{perfume.longevity}</span>
                  </div>

                  {/* Bottle Image with 3D Hover & Glow */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-44 h-44 rounded-full bg-radial from-[#d4af37]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      className="max-h-[82%] w-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-700 rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Perfume Details Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-[#0a0a0d]">
                  <div>
                    {/* Concentration & Ratings */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] tracking-[0.2em] text-[#d4af37] uppercase font-bold">
                        {perfume.concentration}
                      </span>
                      <div className="flex items-center space-x-1 text-xs">
                        <Star className="w-3.5 h-3.5 fill-[#f7e27d] text-[#f7e27d]" />
                        <span className="text-white font-bold">{perfume.rating}</span>
                        <span className="text-[#8c8577] text-[11px]">({perfume.reviewsCount} reviews)</span>
                      </div>
                    </div>

                    {/* Perfume Name */}
                    <h3 className="text-2xl sm:text-3xl text-white font-bold group-hover:text-gold-gradient transition-colors mb-1">
                      {perfume.name}
                    </h3>
                    <p className="text-xs text-[#9e9789] font-medium mb-4">
                      {perfume.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-[#bfb8a8] leading-relaxed mb-5">
                      {perfume.description}
                    </p>

                    {/* Key Notes Pills */}
                    <div className="mb-6">
                      <span className="text-[10px] tracking-wider text-[#8c8577] uppercase font-semibold block mb-2">
                        Movement Accords
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {perfume.keyNotes.map((note) => (
                          <span
                            key={note}
                            className="px-2.5 py-1 rounded-full bg-black/60 border border-[#262218] text-[11px] text-[#e0ded8]"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Detailing & Sizing */}
                  <div className="pt-4 border-t border-[#1f1b14] space-y-4">
                    {/* Size Selector Buttons & Sillage */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 bg-black/50 p-1 rounded-lg border border-[#262218]">
                        {(['50ml', '100ml'] as const).map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => handleSizeChange(perfume.id, size)}
                            className={`px-3 py-1 rounded text-xs font-semibold tracking-wider transition-all ${
                              currentSize === size
                                ? 'bg-[#d4af37] text-[#050505] shadow-sm'
                                : 'text-[#bfb8a8] hover:text-white'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-[#8c8577] block uppercase font-medium">Sillage</span>
                        <span className="text-xs text-[#f7e27d] font-semibold">
                          {perfume.sillage}
                        </span>
                      </div>
                    </div>

                    {/* Detailing Action Button */}
                    <button
                      type="button"
                      onClick={() => setActiveDetailModal(perfume)}
                      className="w-full py-3 rounded-lg border border-[#d4af37]/60 hover:border-[#f7e27d] bg-black/50 hover:bg-[#d4af37]/15 text-[#f7e27d] text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Info className="w-4 h-4 text-[#d4af37]" />
                      <span>EXPLORE FLACON DETAILING</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Perfume Detailing Modal */}
      {activeDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveDetailModal(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-[#0a0a0d] border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 shadow-gold-glow z-10 text-white animate-fadeIn my-auto space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#262218]">
              <div>
                <span className="text-[11px] tracking-widest text-[#d4af37] uppercase font-bold">
                  {activeDetailModal.concentration} · FLACON ARCHITECTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeDetailModal.name}
                </h3>
                <p className="text-xs text-[#8c8577]">
                  {activeDetailModal.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveDetailModal(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-[#8c8577] hover:text-white transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5 text-[#f7e27d]" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="aspect-[3/4] bg-[#050505] rounded-xl border border-[#262218] p-4 flex items-center justify-center">
                <img
                  src={activeDetailModal.image}
                  alt={activeDetailModal.name}
                  className="max-h-[85%] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
                />
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Olfactory Narrative
                  </h4>
                  <p className="text-[#bfb8a8] leading-relaxed">
                    {activeDetailModal.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-[#262218] space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#8c8577]">Concentration:</span>
                    <span className="text-[#f7e27d] font-semibold">{activeDetailModal.concentration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8c8577]">Longevity on Skin:</span>
                    <span className="text-white font-semibold">{activeDetailModal.longevity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8c8577]">Sillage Presence:</span>
                    <span className="text-white font-semibold">{activeDetailModal.sillage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8c8577]">Distillation Origin:</span>
                    <span className="text-white font-semibold">Grasse & Paris, France</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#8c8577] font-semibold mb-2">
                    Primary Accord Profile
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDetailModal.keyNotes.map((note) => (
                      <span
                        key={note}
                        className="px-2.5 py-1 rounded-full bg-[#131317] border border-[#262218] text-[#f7e27d] font-medium"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#262218] flex items-center justify-between">
              <span className="text-xs text-[#8c8577]">
                Available across all flagship salons worldwide
              </span>
              <a
                href="#contact"
                onClick={() => setActiveDetailModal(null)}
                className="px-5 py-2.5 rounded-lg bg-gold-gradient text-[#050505] text-xs font-bold tracking-wider uppercase shadow-gold-glow hover:scale-105 transition-all"
              >
                Inquire at Boutique
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
