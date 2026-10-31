import React from 'react';
import { PERFUME_COLLECTIONS } from '../data/fragranceData';
import { Layers, ArrowRight } from 'lucide-react';

export const CollectionsSection: React.FC = () => {
  return (
    <section id="collections" className="py-20 lg:py-28 relative bg-[#050505] overflow-hidden">
      {/* Background ambient radial gold lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] ambient-glow-gold opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-4 shadow-gold-glow">
            <Layers className="w-3.5 h-3.5 text-[#f7e27d]" />
            <span className="text-[11px] tracking-[0.25em] text-gold-gradient uppercase font-bold">
              HAUTE PARFUMERIE ANTHOLOGY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4">
            Perfume <span className="text-gold-gradient">Collections</span>
          </h2>

          <p className="text-sm sm:text-base text-[#bfb8a8] max-w-xl mx-auto">
            Four masterfully orchestrated fragrance chapters, crafted in numbered batches in Grasse and preserved in hand-blown obsidian glass.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[#d4af37] text-xs">⚜</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </div>

        {/* Collections 2x2 Luxury Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PERFUME_COLLECTIONS.map((col, idx) => (
            <div
              key={col.id}
              className="relative rounded-2xl glass-card-dark border border-[#262218] hover:border-[#d4af37]/70 transition-all duration-500 overflow-hidden group flex flex-col justify-between hover:shadow-gold-glow"
            >
              {/* Top Accent & Image Background */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-b from-[#141418] to-[#070709]">
                {/* Visual Image */}
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/50 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#d4af37]/40 text-xs tracking-wider text-[#f7e27d] uppercase font-semibold">
                    CHAPTER 0{idx + 1}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-medium text-[#bfb8a8]">
                    {col.flaconsCount} Flacons
                  </span>
                </div>

                {/* Family Tag Bottom Overlay */}
                <div className="absolute bottom-4 left-6 z-10">
                  <span className="text-xs tracking-wider text-[#d4af37] uppercase font-bold block mb-1">
                    {col.family}
                  </span>
                  <h3 className="text-2xl sm:text-3xl text-white font-bold group-hover:text-[#f7e27d] transition-colors">
                    {col.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-[#0a0a0d]">
                <div>
                  <p className="text-sm text-[#f7e27d] font-medium mb-3">
                    "{col.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#bfb8a8] leading-relaxed mb-6 font-normal">
                    {col.description}
                  </p>

                  {/* Atmosphere Bar */}
                  <div className="p-3.5 rounded-lg bg-black/60 border border-[#262218] mb-6 flex items-center justify-between text-xs">
                    <span className="text-[#8c8577] font-semibold uppercase tracking-wider">Atmosphere:</span>
                    <span className="text-[#f7e27d] font-medium">{col.mood}</span>
                  </div>

                  {/* Signature Notes */}
                  <div>
                    <span className="text-xs tracking-wider text-[#8c8577] uppercase font-semibold block mb-2">
                      Key Movement Accords
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {col.signatureNotes.map((note) => (
                        <span
                          key={note}
                          className="px-3 py-1 rounded-full bg-[#131317] border border-[#262218] text-xs text-[#e5e1d8] font-normal"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Detailing Trigger */}
                <div className="pt-6 mt-6 border-t border-[#1f1b14] flex items-center justify-between">
                  <span className="text-xs text-[#8c8577]">
                    Handcrafted in Grasse, France
                  </span>

                  <a
                    href="#bestsellers"
                    className="inline-flex items-center space-x-1.5 text-xs text-[#d4af37] group-hover:text-[#f7e27d] font-bold tracking-wider uppercase transition-colors"
                  >
                    <span>VIEW FLACONS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
