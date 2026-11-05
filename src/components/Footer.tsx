import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3500);
    }
  };

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'COLLECTIONS', href: '#collections' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050505] border-t border-[#262218] text-[#bfb8a8] pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] ambient-glow-gold opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* VIP Circle Allocation Newsletter Banner */}
        <div className="max-w-3xl mx-auto text-center mb-16 p-8 sm:p-10 rounded-2xl glass-card-dark border border-[#d4af37]/40 shadow-gold-glow">
          <div className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] text-[#d4af37] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#f7e27d]" />
            <span className="text-gold-gradient font-bold">THE SOVEREIGN CIRCLE</span>
          </div>

          <h3 className="text-2xl sm:text-4xl text-white font-bold mb-3">
            Join for Confidential Vintage Allocations
          </h3>

          <p className="text-xs sm:text-sm text-[#8c8577] max-w-md mx-auto mb-6">
            Receive private allocations of limited flacons, invitations to Grasse harvest distillations, and private Place Vendôme tastings.
          </p>

          {subscribed ? (
            <div className="p-3.5 bg-black/80 border border-[#d4af37] rounded-lg text-xs text-[#f7e27d] tracking-wider flex items-center justify-center space-x-2 max-w-md mx-auto animate-fadeIn shadow-gold-glow font-semibold">
              <Check className="w-4 h-4 text-[#f7e27d]" />
              <span>Welcome to the Sovereign Circle. Your invitation has been dispatched.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your private email..."
                className="flex-1 bg-[#050505] border border-[#262218] focus:border-[#d4af37] px-4 py-2.5 rounded-lg text-xs text-white placeholder-[#686255] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gold-gradient text-[#050505] px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase hover:shadow-gold-glow transition-all flex items-center justify-center space-x-1"
              >
                <span>REQUEST ACCESS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Middle Footer: Brand and Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between py-10 border-t border-b border-[#262218] gap-8">
          {/* Brand Identity */}
          <div className="text-center md:text-left">
            <a href="#hero" className="flex flex-col items-center md:items-start group">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src="/assets/images/Aroma_Logo.png"
                  alt="Aroma Logo"
                  className="footer-logo-zoom"
                />

              </div>

            </a>
            <p className="text-xs text-[#8c8577] mt-2 flex items-center justify-center md:justify-start space-x-1">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>14 Place Vendôme, 75001 Paris, France · Grasse Distillerie</span>
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xs tracking-[0.2em] uppercase font-bold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#bfb8a8] hover:text-[#f7e27d] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c8577] gap-4">
          <p className="font-medium tracking-wide">
            © 2012 — 2026. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6 text-xs">
            <a href="#about" className="hover:text-white transition-colors">Artisanal Lineage</a>
            <span>·</span>
            <a href="#faq" className="hover:text-white transition-colors">Authenticity Guarantee</a>
            <span>·</span>
            <a href="#contact" className="hover:text-white transition-colors">Salon Reservations</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
