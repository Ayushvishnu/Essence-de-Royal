import React, { useState } from 'react';
import { DETAIL_SPOTLIGHTS } from '../data/fragranceData';
import { Sparkles, ZoomIn, CheckCircle2 } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const [zoomedCard, setZoomedCard] = useState<number | null>(null);

  return (
    <section id="details" className="py-20 lg:py-28 relative bg-[#060608] border-t border-[#262218] overflow-hidden">
      {/* Decorative gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] ambient-glow-gold opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-4 shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 text-[#f7e27d]" />
            <span className="text-[11px] tracking-[0.25em] text-gold-gradient uppercase font-bold">
              CRAFTED IN DETAIL
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4">
            Wood, Glass & <span className="text-gold-gradient">Gold</span>
          </h2>

          <p className="text-sm sm:text-base text-[#bfb8a8] max-w-xl mx-auto">
            Every element of the Essence de Royal flacon is an homage to French high craftsmanship, sculpted to endure as a timeless work of art.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[#d4af37] text-xs">⚜</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </div>

        {/* Dual Spotlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {DETAIL_SPOTLIGHTS.map((detail, idx) => (
            <div
              key={detail.tag}
              className="glass-card-dark rounded-2xl overflow-hidden border border-[#262218] hover:border-[#d4af37]/70 transition-all duration-500 group flex flex-col hover:shadow-gold-glow"
            >
              {/* Image Frame with Zoom Effect */}
              <div
                className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#050505] cursor-pointer"
                onClick={() => setZoomedCard(zoomedCard === idx ? null : idx)}
              >
                <img
                  src={detail.image}
                  alt={detail.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    zoomedCard === idx ? 'scale-125' : ''
                  }`}
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-85" />

                {/* Zoom Hint Indicator */}
                <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#d4af37]/30 flex items-center space-x-1.5 text-xs text-[#f7e27d]">
                  <ZoomIn className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="uppercase tracking-wider font-semibold">
                    {zoomedCard === idx ? 'Close Zoom' : 'Inspect Detail'}
                  </span>
                </div>

                {/* Floating Tag */}
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#d4af37]/40 text-xs tracking-wider text-[#f7e27d] uppercase font-bold">
                    {detail.tag}
                  </span>
                </div>
              </div>

              {/* Text Description and Technical Specifications */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-[#0a0a0d]">
                <div>
                  <h3 className="text-2xl sm:text-3xl text-white font-bold mb-1">
                    {detail.title}
                  </h3>
                  <p className="text-xs text-[#d4af37] font-semibold mb-4">
                    {detail.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#bfb8a8] leading-relaxed mb-6">
                    {detail.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="pt-4 border-t border-[#1f1b14] grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {detail.specs.map((spec) => (
                    <div key={spec.label} className="p-3 rounded-lg bg-black/60 border border-[#262218]">
                      <span className="text-[10px] uppercase text-[#8c8577] font-semibold block mb-1">
                        {spec.label}
                      </span>
                      <span className="text-xs text-white font-semibold flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span className="truncate">{spec.value}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
