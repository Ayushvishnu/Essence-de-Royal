import React, { useState, useRef } from 'react';
import { Play, Sparkles, ChevronDown } from 'lucide-react';
import { FRAGRANCE_DETAILS } from '../data/fragranceData';
import { useCart } from '../context/CartContext';

export const HeroSection: React.FC = () => {
  const { setIsFilmModalOpen } = useCart();
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Mild tilt calculation for luxury feel
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#050505]">
      {/* Background Ambient Radial Gold & Obsidian Dark Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm gold ambient halo centered behind bottle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[620px] lg:w-[860px] h-[340px] sm:h-[620px] lg:h-[860px] rounded-full ambient-glow-gold opacity-60 blur-3xl" />
        {/* Rich obsidian core glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[440px] h-[220px] sm:h-[440px] rounded-full bg-radial from-[#d4af37]/25 via-[#8c6a1d]/15 to-transparent opacity-70 blur-2xl" />
        {/* Pure dark black vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/50 to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Brand Story & Call to Action */}
          <div className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1 pt-4 lg:pt-0">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-4 sm:mb-6 shadow-gold-glow">
              <Sparkles className="w-3 h-3 text-[#f7e27d]" />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-gold-gradient uppercase font-serif-luxury font-semibold">
                {FRAGRANCE_DETAILS.house} PRESENTS
              </span>
            </div>

            {/* Main Title: Essence de Royal */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white font-bold mb-3">
              <span className="block text-white">Essence</span>
              <span className="block text-gold-gradient">
                de Royal
              </span>
            </h1>

            {/* Subtitle with divider */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6 sm:mb-8">
              <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="text-xs sm:text-sm tracking-[0.25em] text-[#d4cfc5] uppercase font-semibold">
                {FRAGRANCE_DETAILS.concentration} · EST. 2012
              </span>
              <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>

            {/* Short Brand Line */}
            <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-[#bfb8a8] leading-relaxed mb-8 sm:mb-10 font-normal">
              "{FRAGRANCE_DETAILS.character}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#collections"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gold-gradient text-[#050505] text-xs font-bold tracking-[0.2em] uppercase shadow-gold-glow hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 text-center"
              >
                EXPLORE COLLECTIONS
              </a>

              <button
                type="button"
                onClick={() => setIsFilmModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg border border-[#d4af37]/50 hover:border-[#f7e27d] text-[#f7e27d] hover:text-white hover:bg-[#d4af37]/15 text-xs font-semibold tracking-[0.18em] uppercase flex items-center justify-center space-x-2 transition-all duration-300 group"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#d4af37] group-hover:scale-110 transition-transform" />
                <span>WATCH CAMPAIGN FILM</span>
              </button>
            </div>

            {/* Luxury Trust Indicators */}
            <div className="mt-8 sm:mt-12 pt-6 border-t border-[#262218] flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 text-xs text-[#8c8577]">
              <div>
                <span className="text-[#f7e27d] block font-bold">14+ HOURS</span>
                <span>Magnetic Sillage</span>
              </div>
              <div className="w-[1px] h-6 bg-[#262218]" />
              <div>
                <span className="text-[#f7e27d] block font-bold">SINCE 2012</span>
                <span>Grasse Distillerie</span>
              </div>
              <div className="w-[1px] h-6 bg-[#262218]" />
              <div>
                <span className="text-[#f7e27d] block font-bold">24K GOLD</span>
                <span>Framed Seal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Perfume Flacon with 3D Tilt & Gold Halo */}
          <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px] aspect-[9/14] flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                perspective: 1000,
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              }}
            >
              {/* Outer Decorative Luxury Gold Frame */}
              <div className="absolute inset-4 sm:inset-6 rounded-2xl border border-[#d4af37]/25 pointer-events-none" />
              <div className="absolute inset-2 sm:inset-4 rounded-2xl border border-white/5 pointer-events-none" />

              {/* Glowing Warm Gold Aura Behind Bottle */}
              <div className="absolute w-48 sm:w-64 h-72 sm:h-96 rounded-full bg-gradient-to-t from-[#8c6a1d]/40 via-[#d4af37]/30 to-transparent blur-2xl animate-pulse pointer-events-none" />

              {/* Bottle Image with Floating Animation */}
              <div className="relative z-10 w-[82%] sm:w-[86%] h-auto max-h-[88%] flex items-center justify-center animate-float select-none">
                <img
                  src="/assets/images/essence_de_royal_hero.jpg"
                  alt="Essence de Royal luxury perfume bottle in deep obsidian flacon with black wood cap and gold typography"
                  className="w-full h-full object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] filter brightness-[1.02] contrast-[1.03] rounded-lg"
                  loading="eager"
                />

                {/* Shimmer Light Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-lg opacity-40 mix-blend-overlay" />
              </div>

              {/* Interactive Bottle Detail Tooltip Tag */}
              <div className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full glass-panel border border-[#d4af37]/50 shadow-gold-glow text-center whitespace-nowrap bg-black/80">
                <p className="text-[10px] tracking-[0.2em] text-[#f7e27d] uppercase font-bold">
                  OBSIDIAN CRYSTAL · CHARRED OAK CAP
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Arrow */}
      <a
        href="#bestsellers"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#d4af37] opacity-60 hover:opacity-100 transition-opacity p-2 hidden md:block"
        aria-label="Scroll down to most sold perfumes"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
