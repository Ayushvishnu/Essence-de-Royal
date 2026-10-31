import React, { useState } from 'react';
import { NOTE_MOVEMENTS } from '../data/fragranceData';
import { Sparkles, Clock, Compass } from 'lucide-react';

export const NotesSection: React.FC = () => {
  const [activeMovement, setActiveMovement] = useState<number>(0);

  return (
    <section id="notes" className="py-20 lg:py-28 relative bg-[#050505] overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 ambient-glow-gold opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 ambient-glow-gold opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 border-b border-[#262218]">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] text-[#d4af37] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#f7e27d]" />
              <span className="text-gold-gradient font-bold">OLFACTORY PYRAMID</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight">
              The <span className="text-gold-gradient">Notes</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 max-w-md text-sm sm:text-base text-[#bfb8a8] text-left md:text-right font-normal">
            A composition in three movements, unfolding on the skin from golden top radiance to eternal dry-down.
          </p>
        </div>

        {/* The Three Movements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {NOTE_MOVEMENTS.map((movement, idx) => {
            const isActive = activeMovement === idx;
            return (
              <div
                key={movement.id}
                onClick={() => setActiveMovement(idx)}
                className={`relative rounded-xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? 'glass-card-dark border-[#d4af37] shadow-gold-glow scale-[1.02]'
                    : 'bg-[#0a0a0d] border-[#262218] hover:border-[#d4af37]/50 hover:bg-[#0e0e11]'
                }`}
              >
                {/* Roman Numeral Header */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className={`text-4xl sm:text-5xl font-bold transition-colors ${
                      isActive ? 'text-[#f7e27d]' : 'text-[#8c6a1d]'
                    }`}
                  >
                    {movement.numeral}
                  </span>

                  <div className="flex items-center space-x-1.5 text-xs text-[#bfb8a8] bg-black/60 px-3 py-1 rounded-full border border-[#262218]">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    <span className="font-medium">{movement.duration}</span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-sm sm:text-base tracking-wider text-white uppercase font-bold mb-3">
                  {movement.title}
                </h3>

                <p className="text-xs text-[#9e9789] leading-relaxed mb-6">
                  {movement.description}
                </p>

                {/* Characteristics Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {movement.characteristics.map((char) => (
                    <span
                      key={char}
                      className={`text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full font-semibold ${
                        isActive
                          ? 'bg-[#d4af37]/20 text-[#f7e27d] border border-[#d4af37]/50'
                          : 'bg-black/50 text-[#8c8577] border border-[#262218]'
                      }`}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Movement Expanded Details */}
        <div className="glass-card-dark rounded-2xl p-6 sm:p-10 border border-[#262218] shadow-gold-glow">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#262218]">
            <div className="flex items-center space-x-3">
              <Compass className="w-5 h-5 text-[#d4af37]" />
              <h3 className="text-base sm:text-lg tracking-wider uppercase text-white font-bold">
                Movement {NOTE_MOVEMENTS[activeMovement].numeral}: Key Ingredients Breakdown
              </h3>
            </div>
            <span className="text-xs text-[#d4af37] font-semibold hidden sm:inline">
              Distilled in Grasse, France
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {NOTE_MOVEMENTS[activeMovement].notes.map((note) => (
              <div
                key={note.name}
                className="p-5 rounded-xl bg-[#050505] border border-[#262218] hover:border-[#d4af37]/40 transition-colors"
              >
                <span className="text-[10px] tracking-wider text-[#d4af37] uppercase font-bold block mb-1">
                  {note.category}
                </span>
                <h4 className="text-xl sm:text-2xl text-white font-bold mb-2">
                  {note.name}
                </h4>
                <p className="text-xs text-[#9e9789] leading-relaxed">
                  {note.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
