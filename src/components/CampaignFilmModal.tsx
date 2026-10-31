import React, { useRef } from 'react';
import { useCart } from '../context/CartContext';
import { X, Volume2, Sparkles } from 'lucide-react';

export const CampaignFilmModal: React.FC = () => {
  const { isFilmModalOpen, setIsFilmModalOpen } = useCart();
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!isFilmModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Dark theater backdrop */}
      <div
        className="fixed inset-0 bg-black/95 backdrop-blur-2xl transition-opacity"
        onClick={() => setIsFilmModalOpen(false)}
      />

      {/* Theater Container */}
      <div className="relative w-full max-w-4xl bg-black border border-[#d4af37]/50 rounded-2xl overflow-hidden shadow-gold-glow z-10 flex flex-col">
        {/* Top bar */}
        <div className="p-4 bg-gradient-to-b from-black via-black/80 to-transparent flex items-center justify-between z-20">
          <div className="flex items-center space-x-2 text-white">
            <Sparkles className="w-4 h-4 text-[#f7e27d]" />
            <span className="text-xs tracking-wider uppercase text-[#f7e27d] font-bold">
              Maison Essence de Royal Cinema Theater · Campaign
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsFilmModalOpen(false)}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#f7e27d] transition-colors"
            aria-label="Close theater film"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-[9/14] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src="/assets/video/campaign_film.mp4"
            className="w-full h-full object-contain"
            controls
            autoPlay
            playsInline
          />
        </div>

        {/* Bottom bar */}
        <div className="p-4 bg-[#08080a] border-t border-[#262218] flex items-center justify-between text-xs text-[#8c8577]">
          <div className="flex items-center space-x-2 text-[#d4af37]">
            <Volume2 className="w-4 h-4" />
            <span className="font-medium">Original Orchestral Score · Grasse Master Recording</span>
          </div>
          <span className="text-xs font-semibold text-[#f7e27d]">4K UHD · Haute Parfumerie</span>
        </div>
      </div>
    </div>
  );
};
