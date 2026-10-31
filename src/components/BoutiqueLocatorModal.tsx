import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BOUTIQUES } from '../data/fragranceData';
import { X, MapPin, Phone, Clock, Sparkles, ExternalLink } from 'lucide-react';

export const BoutiqueLocatorModal: React.FC = () => {
  const { isBoutiqueOpen, setIsBoutiqueOpen } = useCart();
  const [selectedBoutique, setSelectedBoutique] = useState<string>(BOUTIQUES[0].id);
  const [reserved, setReserved] = useState(false);

  if (!isBoutiqueOpen) return null;

  const currentStore = BOUTIQUES.find((b) => b.id === selectedBoutique) || BOUTIQUES[0];

  const handleReserve = () => {
    setReserved(true);
    setTimeout(() => {
      setReserved(false);
      setIsBoutiqueOpen(false);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={() => setIsBoutiqueOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#08080a] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-gold-glow z-10 text-white animate-fadeIn my-auto">
        
        {/* Header */}
        <div className="p-6 border-b border-[#262218] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <MapPin className="w-5 h-5 text-[#f7e27d]" />
            <div>
              <h3 className="text-sm tracking-wider uppercase font-bold text-white">
                Find in Sovereign Boutiques
              </h3>
              <p className="text-xs text-[#bfb8a8]">
                Private consultations & complimentary flacon sampling
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsBoutiqueOpen(false)}
            className="p-1.5 text-[#8c8577] hover:text-white rounded hover:bg-white/5 transition-colors"
            aria-label="Close boutique locator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Boutique City Tabs */}
        <div className="flex border-b border-[#262218] bg-[#050505] overflow-x-auto">
          {BOUTIQUES.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setSelectedBoutique(b.id)}
              className={`px-6 py-3 text-xs tracking-wider uppercase font-bold whitespace-nowrap transition-colors border-b-2 ${
                selectedBoutique === b.id
                  ? 'border-[#d4af37] text-[#f7e27d] bg-[#121215]'
                  : 'border-transparent text-[#8c8577] hover:text-white'
              }`}
            >
              {b.city} {b.flagship && '★'}
            </button>
          ))}
        </div>

        {/* Boutique Details Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-2xl font-bold text-white">
                {currentStore.name}
              </h4>
              <p className="text-xs text-[#d4af37] font-semibold">
                {currentStore.neighborhood}
              </p>
            </div>
            {currentStore.flagship && (
              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-gold-gradient text-[#050505] text-[10px] font-bold tracking-wider uppercase">
                GLOBAL FLAGSHIP
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-black/60 border border-[#262218] space-y-2">
              <div className="flex items-center space-x-2 text-[#bfb8a8]">
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span className="uppercase tracking-wider text-xs font-bold text-white">Address</span>
              </div>
              <p className="text-[#bfb8a8] pl-6 font-mono">{currentStore.address}</p>
              <p className="text-[#8c8577] pl-6">{currentStore.neighborhood}</p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-[#262218] space-y-2">
              <div className="flex items-center space-x-2 text-[#bfb8a8]">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <span className="uppercase tracking-wider text-xs font-bold text-white">Hours</span>
              </div>
              <p className="text-[#bfb8a8] pl-6 font-mono">{currentStore.hours}</p>
              <div className="flex items-center space-x-2 pl-6 pt-1 text-[#8c8577]">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="font-mono">{currentStore.phone}</span>
              </div>
            </div>
          </div>

          {/* Embedded Map Thumbnail */}
          <div className="relative w-full h-44 rounded-xl overflow-hidden border border-[#262218] bg-black">
            <iframe
              title={`${currentStore.name} Map`}
              src={currentStore.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
              loading="lazy"
            />
          </div>

          {/* Reservation CTA */}
          <div className="pt-4 border-t border-[#262218] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs text-[#8c8577]">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>Complimentary private tasting coffret included with booking</span>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <a
                href={currentStore.mapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg border border-[#262218] text-xs font-bold text-[#bfb8a8] hover:text-white hover:border-[#d4af37] transition-all flex items-center space-x-1"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                type="button"
                onClick={handleReserve}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-gold-gradient text-[#050505] text-xs font-bold tracking-wider uppercase shadow-gold-glow hover:scale-[1.02] transition-all"
              >
                {reserved ? 'RESERVATION CONFIRMED' : 'RESERVE SALON VISIT'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
