import React from 'react';
import { COMPANION_COLLECTION } from '../data/fragranceData';
import { Sparkles } from 'lucide-react';

export const SignatureCollection: React.FC = () => {
  return (
    <section id="signature-archive" className="py-20 lg:py-28 relative bg-[#050505] overflow-hidden border-t border-[#262218]">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ambient-glow-gold opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-4 shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 text-[#f7e27d]" />
            <span className="text-[11px] tracking-[0.25em] text-gold-gradient uppercase font-bold">
              COMPANION FLACONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4">
            The Sovereign <span className="text-gold-gradient">Flacon Series</span>
          </h2>

          <p className="text-sm sm:text-base text-[#bfb8a8] max-w-xl mx-auto">
            Discover the companion creations composed by master noses in Grasse, each embodying a distinctive chapter of royal olfactory poetry.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[#d4af37] text-xs">⚜</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </div>

        {/* 4 Flacons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COMPANION_COLLECTION.map((fragrance) => (
            <div
              key={fragrance.id}
              className="glass-card-dark rounded-xl overflow-hidden border border-[#262218] hover:border-[#d4af37]/70 transition-all duration-500 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-gold-glow"
            >
              {/* Product Visual Container with Pedestal Lighting */}
              <div className="relative aspect-[3/4] bg-gradient-to-b from-[#111115] to-[#070709] overflow-hidden flex items-center justify-center p-4">
                {/* Badge if available */}
                {fragrance.badge && (
                  <div className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-full bg-gold-gradient text-[#050505] text-[10px] font-bold tracking-wider uppercase shadow-gold-glow">
                    {fragrance.badge}
                  </div>
                )}

                {/* Glowing Aura behind flacon */}
                <div className="absolute inset-0 bg-radial from-[#d4af37]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Bottle Image */}
                <img
                  src={fragrance.image}
                  alt={fragrance.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Product Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#0a0a0d]">
                <div>
                  <div className="text-xs tracking-wider text-[#d4af37] uppercase font-bold mb-1">
                    {fragrance.concentration}
                  </div>
                  <h3 className="text-xl text-white font-bold group-hover:text-[#f7e27d] transition-colors">
                    {fragrance.name}
                  </h3>
                  <p className="text-xs text-[#8c8577] font-medium mb-3">
                    {fragrance.subtitle}
                  </p>
                  <p className="text-xs text-[#bfb8a8] leading-relaxed mb-4 line-clamp-2">
                    {fragrance.description}
                  </p>
                </div>

                <div>
                  {/* Notes Pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {fragrance.notes.map((n) => (
                      <span
                        key={n}
                        className="text-[10px] px-2.5 py-0.5 rounded bg-black/60 border border-[#262218] text-[#e0ded8]"
                      >
                        {n}
                      </span>
                    ))}
                  </div>

                  {/* Detailing Link */}
                  <div className="pt-3 border-t border-[#1f1b14] flex items-center justify-between">
                    <span className="text-xs text-[#8c8577]">
                      100ml Obsidian Edition
                    </span>
                    <a
                      href="#contact"
                      className="text-xs text-[#f7e27d] hover:underline font-bold uppercase tracking-wider"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
