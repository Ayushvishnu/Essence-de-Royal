import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/fragranceData';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const total = TESTIMONIALS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Smooth auto-advancing carousel: pauses when mouse is hovered, resumes when mouse leaves
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, total]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-28 relative bg-[#070709] border-t border-[#262218] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ambient-glow-gold opacity-15 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-4 shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 text-[#f7e27d]" />
            <span className="text-[11px] tracking-[0.25em] text-gold-gradient uppercase font-bold">
              CONNOISSEUR ACCLAIM
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4">
            Testimonials & <span className="text-gold-gradient">Reviews</span>
          </h2>

          <p className="text-sm sm:text-base text-[#bfb8a8] max-w-xl mx-auto">
            Celebrated by fragrance collectors, fashion editors, and patrons worldwide. Read authentic impressions of our sovereign flacons.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[#d4af37] text-xs">⚜</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </div>

        {/* Global Rating Scorecard Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl glass-card-dark border border-[#262218] flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
          <div className="flex items-center space-x-4">
            <div className="text-4xl sm:text-5xl text-gold-gradient font-bold">
              4.96
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f7e27d] text-[#f7e27d]" />
                ))}
              </div>
              <span className="text-xs text-[#8c8577] font-medium block">
                Based on 1,480+ Verified Patrons
              </span>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-10 bg-[#262218]" />

          <div className="text-center sm:text-left">
            <span className="text-sm text-white font-bold block">
              99.4% Recommendation Rate
            </span>
            <span className="text-xs text-[#8c8577]">
              Exceptional Sillage & Flacon Weight
            </span>
          </div>

          <div className="hidden sm:block w-[1px] h-10 bg-[#262218]" />

          <div className="text-center sm:text-left">
            <span className="text-sm text-white font-bold block">
              100% Authentic Handcrafted
            </span>
            <span className="text-xs text-[#8c8577]">
              Direct Dispatch from Grasse & Paris
            </span>
          </div>
        </div>

        {/* Smooth Carousel Container with onMouseEnter (pause) & onMouseLeave (resume) */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Pause / Play Status Indicator Tag */}
          <div className="flex items-center justify-between px-2 mb-3 text-xs text-[#8c8577]">
            <div className="flex items-center space-x-2">
              <span className="text-[#f7e27d] font-semibold">
                0{currentIndex + 1}
              </span>
              <span>/</span>
              <span>0{total}</span>
            </div>

            <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-[#262218] text-[11px]">
              {isHovered ? (
                <>
                  <Pause className="w-3 h-3 text-[#f7e27d]" />
                  <span className="text-[#f7e27d] font-medium">Paused on Hover</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#d4af37]" />
                  <span>Auto-Sliding (Hover to pause)</span>
                </>
              )}
            </div>
          </div>

          {/* Main Carousel Card Slide */}
          <div className="relative rounded-2xl glass-card-dark border border-[#262218] hover:border-[#d4af37]/60 p-8 sm:p-12 transition-all duration-500 shadow-gold-glow overflow-hidden">
            
            {/* Top Row: Rating & Fragrance Tag */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f7e27d] text-[#f7e27d]" />
                ))}
                <span className="text-xs text-[#f7e27d] font-bold ml-2">5.0 / 5.0</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full bg-black/80 border border-[#d4af37]/40 text-xs font-semibold text-[#f7e27d]">
                  {current.fragrance}
                </span>
                <span className="text-xs text-[#8c8577]">{current.date}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative mb-8">
              <Quote className="w-8 h-8 text-[#8c6a1d] opacity-40 mb-3" />
              <p className="text-base sm:text-xl md:text-2xl text-[#f5f4f0] font-normal leading-relaxed">
                "{current.quote}"
              </p>
            </div>

            {/* Author Profile Footer */}
            <div className="pt-6 border-t border-[#1f1b14] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gold-gradient text-[#050505] font-bold text-sm flex items-center justify-center shadow-gold-glow shrink-0">
                  {current.avatarInitials}
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-base font-bold text-white">
                      {current.author}
                    </h4>
                    {current.verified && (
                      <span className="inline-flex items-center space-x-1 text-[11px] text-[#f7e27d] bg-[#1a1712] px-2 py-0.5 rounded-full border border-[#d4af37]/30">
                        <CheckCircle2 className="w-3 h-3 text-[#d4af37]" />
                        <span>Verified Patron</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#8c8577] mt-0.5">
                    {current.title} · {current.city}, {current.country}
                  </p>
                </div>
              </div>

              {/* Prev / Next Nav Buttons */}
              <div className="flex items-center space-x-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-black/60 border border-[#262218] hover:border-[#d4af37] text-white hover:text-[#f7e27d] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-black/60 border border-[#262218] hover:border-[#d4af37] text-white hover:text-[#f7e27d] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-8 h-2 bg-gold-gradient shadow-gold-glow'
                    : 'w-2 h-2 bg-[#262218] hover:bg-[#8c6a1d]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
