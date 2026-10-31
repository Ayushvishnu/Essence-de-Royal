import React from 'react';
import { FRAGRANCE_DETAILS } from '../data/fragranceData';
import { Sparkles, Moon, Sun, Feather, ShieldCheck } from 'lucide-react';

export const FragranceStory: React.FC = () => {
  const sensoryPillars = [
    {
      icon: <Moon className="w-5 h-5 text-[#f7e27d]" />,
      title: 'The Nocturnal Mood',
      desc: 'Envisioned for twilight encounters, where dark shadows meet luminous golden candlelight.',
    },
    {
      icon: <Feather className="w-5 h-5 text-[#f7e27d]" />,
      title: 'The Velvety Texture',
      desc: 'Unfolds like royal silk against pulse points, evolving continuously through three distinct movements.',
    },
    {
      icon: <Sun className="w-5 h-5 text-[#f7e27d]" />,
      title: 'Solar Resonance',
      desc: 'A vibrant contrast between radiant Italian citrus and subterranean aged amberwood resins.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#f7e27d]" />,
      title: 'Imperial Lineage',
      desc: 'Formulated in Grasse following centuries of bespoke royal perfumery archives since 2012.',
    },
  ];

  return (
    <section id="fragrance" className="py-20 lg:py-28 relative bg-[#060608] border-t border-b border-[#262218] overflow-hidden">
      {/* Background Decorative Gold Halo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] rounded-full ambient-glow-gold opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header Tag */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-6 shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-[#f7e27d]" />
          <span className="text-[11px] tracking-[0.25em] text-gold-gradient uppercase font-bold">
            THE SIGNATURE COMPOSITION
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15] mb-6 sm:mb-8 max-w-3xl mx-auto">
          {FRAGRANCE_DETAILS.storyHeadline}
        </h2>

        {/* Divider Emblem */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span className="text-[#d4af37] text-sm">⚜</span>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        {/* Body Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-[#bfb8a8] leading-relaxed max-w-3xl mx-auto mb-16 font-normal">
          {FRAGRANCE_DETAILS.storyDescription}
        </p>

        {/* Sensory Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {sensoryPillars.map((item, idx) => (
            <div
              key={idx}
              className="glass-card-dark p-6 rounded-xl border border-[#262218] hover:border-[#d4af37]/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-gold-glow"
            >
              <div className="w-10 h-10 rounded-lg bg-black/70 border border-[#d4af37]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-gold-glow">
                {item.icon}
              </div>
              <h3 className="text-sm tracking-wide text-white uppercase font-bold mb-2 group-hover:text-[#f7e27d] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#9e9789] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
