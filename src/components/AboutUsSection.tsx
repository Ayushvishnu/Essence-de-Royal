import React, { useState } from 'react';
import { COMPANY_MILESTONES } from '../data/fragranceData';
import { Award, Feather, CheckCircle } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  const stats = [
    { value: '2012', label: 'FOUNDED IN GRASSE', desc: '14+ Years of Sovereign Lineage' },
    { value: '100%', label: 'RARE BOTANICALS', desc: 'Certified Pre-Dawn Hand Harvest' },
    { value: '48+', label: 'GLOBAL SALONS', desc: 'Paris, London, NYC & Dubai' },
    { value: '98K+', label: 'ROYAL PATRONS', desc: 'Discerning Scent Connoisseurs' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#060608] border-t border-[#262218] overflow-hidden">
      {/* Background ambient gold lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] ambient-glow-gold opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] ambient-glow-gold opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-4 shadow-gold-glow">
            <Award className="w-3.5 h-3.5 text-[#f7e27d]" />
            <span className="text-[11px] tracking-[0.25em] text-gold-gradient uppercase font-bold">
              MAISON ESSENCE DE ROYAL · EST. 2012
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4">
            Haute Parfumerie <span className="text-gold-gradient">Since 2012</span>
          </h2>

          <p className="text-sm sm:text-base text-[#bfb8a8] max-w-2xl mx-auto">
            Born fourteen years ago in the historic perfume capital of Grasse, France. Reimagining ancient royal court distillation with modern obsidian and gold craftsmanship.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[#d4af37] text-xs">⚜</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </div>

        {/* Brand Story Two-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="text-xs tracking-[0.2em] text-[#d4af37] uppercase font-bold block mb-1">
                OUR LINEAGE & PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-4xl text-white font-bold leading-snug">
                Where French Aristocracy Meets Nocturnal Alchemy
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#bfb8a8] leading-relaxed">
              In 2012, master noses in Grasse envisioned a perfume house uninhibited by mass production. While modern commercial fragrances diluted essences to cut costs, Maison Essence de Royal pledged absolute devotion to royal potency: aging Tuscan iris concrete for three full winters underground and extracting wild Bulgarian violet during the coldest pre-dawn hours.
            </p>

            <p className="text-sm sm:text-base text-[#bfb8a8] leading-relaxed">
              Today, our signature flacons — crowned with tactile charred oak and hot-stamped 24K gold foil — grace the dressing tables of sovereign collectors, dignitaries, and artists worldwide from our private atelier at Place Vendôme, Paris.
            </p>

            {/* Master Perfumer Quote Box */}
            <div className="p-6 rounded-xl glass-card-dark border-l-4 border-l-[#d4af37] border-t border-r border-b border-[#262218] relative">
              <Feather className="w-5 h-5 text-[#d4af37] mb-3" />
              <blockquote className="text-base sm:text-lg text-white mb-3 leading-relaxed font-normal">
                "True luxury does not clamor for attention; it commands presence through undeniable gravity and eternal memory."
              </blockquote>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#f7e27d] uppercase tracking-wider font-bold">
                  Jean-Luc de Céleste
                </span>
                <span className="text-[#8c8577]">
                  Head Nose & Founder · Grasse
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame & Flacon Craftsmanship */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-2 bg-gradient-to-br from-[#8c6a1d]/30 via-transparent to-[#d4af37]/20 border border-[#d4af37]/30 shadow-gold-glow">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#050505]">
                <img
                  src="/assets/images/cap_label_detail.jpg"
                  alt="Essence de Royal Craftsmanship Detail"
                  className="w-full h-full object-cover filter brightness-95 contrast-105"
                  loading="lazy"
                />
                
                {/* Floating Heritage Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-lg bg-black/80 backdrop-blur-md border border-[#d4af37]/50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-widest text-[#d4af37] uppercase font-bold block">
                      AUTHENTIC FRENCH LINEAGE
                    </span>
                    <span className="text-sm text-white font-medium">
                      Place Vendôme, Paris & Grasse, France
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-[#050505] font-bold text-sm shadow-gold-glow">
                    ⚜
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Heritage Timeline: Milestones Since 2012 */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.25em] text-[#d4af37] uppercase font-bold block mb-2">
              FOURTEEN YEARS OF HERITAGE
            </span>
            <h3 className="text-2xl sm:text-4xl text-white font-bold">
              The Sovereign Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_MILESTONES.map((m, idx) => {
              const isActive = activeMilestone === idx;
              return (
                <div
                  key={m.year}
                  onClick={() => setActiveMilestone(idx)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? 'glass-card-dark border-[#d4af37] shadow-gold-glow scale-[1.02]'
                      : 'bg-[#0a0a0d] border-[#262218] hover:border-[#d4af37]/40'
                  }`}
                >
                  <div>
                    {/* Year Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl sm:text-4xl font-bold text-gold-gradient">
                        {m.year}
                      </span>
                      <span className="text-[10px] tracking-widest text-[#8c8577] font-mono uppercase">
                        Stage 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-sm tracking-wider text-white uppercase font-bold mb-1">
                      {m.title}
                    </h4>
                    <p className="text-xs text-[#d4af37] font-semibold mb-3">
                      {m.subtitle}
                    </p>
                    <p className="text-xs text-[#bfb8a8] leading-relaxed">
                      {m.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1f1b14] flex items-center space-x-1.5 text-xs text-[#f7e27d]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Archived in Royal Registry</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Pillars / Statistics Counter Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl glass-card-dark border border-[#262218] text-center group hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl text-gold-gradient font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.15em] text-white uppercase font-bold mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-[#8c8577]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
