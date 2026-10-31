import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const FilmSection: React.FC = () => {
  const { setIsFilmModalOpen } = useCart();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => { });
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <section id="film" className="py-20 lg:py-28 relative bg-[#050505] overflow-hidden">
      {/* Background ambient gold lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ambient-glow-gold opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Left Column / Video Player Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden glass-card-dark border border-[#d4af37]/40 shadow-gold-glow group">
              {/* Reactive Ambient Glow behind video */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8c6a1d]/30 via-[#d4af37]/20 to-[#8c6a1d]/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Video Player */}
              <div className="relative aspect-[9/14] sm:aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/assets/video/campaign_film.mp4"
                  poster="/assets/images/essence_de_royal_hero.jpg"
                  className="w-full h-full object-cover sm:object-contain bg-black cursor-pointer"
                  loop
                  muted={isMuted}
                  playsInline
                  autoPlay
                  onTimeUpdate={handleTimeUpdate}
                  onClick={togglePlay}
                />

                {/* Big Center Play Button Overlay if paused */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#050505]/85 border border-[#d4af37] flex items-center justify-center text-[#f7e27d] hover:scale-110 transition-transform shadow-gold-glow"
                    aria-label="Play video"
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>
                )}

                {/* Video Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col space-y-2 opacity-95 group-hover:opacity-100 transition-opacity">
                  {/* Progress Scrubber */}
                  <div
                    onClick={handleSeek}
                    className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer relative overflow-hidden transition-all"
                  >
                    <div
                      className="h-full bg-gold-gradient rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-white text-xs">
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="p-1 hover:text-[#f7e27d] transition-colors"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4 text-[#f7e27d]" /> : <Play className="w-4 h-4 fill-current text-[#f7e27d]" />}
                      </button>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="p-1 hover:text-[#f7e27d] transition-colors"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-[#8c8577]" /> : <Volume2 className="w-4 h-4 text-[#d4af37]" />}
                      </button>

                      <span className="text-xs tracking-wider text-[#bfb8a8] uppercase font-semibold">
                        Campaign Film · 4K UHD
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsFilmModalOpen(true)}
                      className="p-1 hover:text-[#f7e27d] transition-colors flex items-center space-x-1"
                      title="Open Fullscreen Theater"
                    >
                      <span className="text-xs tracking-wider uppercase font-bold hidden sm:inline">Theater Mode</span>
                      <Maximize2 className="w-4 h-4 text-[#d4af37]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column / Film Description */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-4 sm:mb-6 shadow-gold-glow">
              <Sparkles className="w-3.5 h-3.5 text-[#f7e27d]" />
              <span className="text-[11px] tracking-[0.25em] text-gold-gradient uppercase font-bold">
                THE CAMPAIGN FILM
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-6">
              A royal light, <br />
              <span className="text-gold-gradient">captured in glass</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#bfb8a8] leading-relaxed mb-8">
              Witness the play of light across the obsidian flacon — from the tactile charred wood-grain cap to the hot-stamped gold monogram.
            </p>

            <div className="space-y-4 pt-6 border-t border-[#262218] text-left text-xs sm:text-sm text-[#9e9789]">
              <div className="flex items-start space-x-3">
                <span className="text-[#f7e27d] font-bold">01</span>
                <p>
                  <strong className="text-white">Luminescence in Shadows:</strong> Watch the obsidian flacon catch ambient golden light, radiating deep smoky jewel tones.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-[#f7e27d] font-bold">02</span>
                <p>
                  <strong className="text-white">Organic Architecture:</strong> Close-up tracking over the hand-carved charred black oak flacon cap.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-[#f7e27d] font-bold">03</span>
                <p>
                  <strong className="text-white">The Royal Seal:</strong> Concluding upon the burnished gold Essence de Royal ER seal at the crystal base.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setIsFilmModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3 rounded-lg border border-[#d4af37] text-[#f7e27d] hover:text-[#050505] hover:bg-gold-gradient transition-all duration-300 text-xs tracking-[0.2em] uppercase font-bold flex items-center justify-center space-x-2 shadow-gold-glow"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>EXPAND CINEMA THEATER</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
