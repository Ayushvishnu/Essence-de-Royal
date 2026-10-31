import React, { useState } from 'react';
import { BOUTIQUES } from '../data/fragranceData';
import { MapPin, Phone, Mail, Clock, Send, Check, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [selectedBoutiqueId, setSelectedBoutiqueId] = useState<string>('paris');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    boutique: 'paris',
    inquiryType: 'Private Consultation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const currentBoutique = BOUTIQUES.find((b) => b.id === selectedBoutiqueId) || BOUTIQUES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          boutique: selectedBoutiqueId,
          inquiryType: 'Private Consultation',
          message: '',
        });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#070709] border-t border-[#262218] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[700px] h-[700px] ambient-glow-gold opacity-15 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] ambient-glow-gold opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-4 shadow-gold-glow">
            <MapPin className="w-3.5 h-3.5 text-[#f7e27d]" />
            <span className="text-[11px] tracking-[0.25em] text-gold-gradient uppercase font-bold">
              PRIVATE CONCIERGE & GLOBAL SALONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4">
            Contact Us & <span className="text-gold-gradient">Salon Map</span>
          </h2>

          <p className="text-sm sm:text-base text-[#bfb8a8] max-w-xl mx-auto">
            Experience personal fragrance consultations, bespoke flacon engraving, or reserve private access at our sovereign salons in Paris, London, New York, and Dubai.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[#d4af37] text-xs">⚜</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </div>

        {/* 2-Column Layout: Contact Form & Location Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Concierge Contact Form */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-2xl glass-card-dark border border-[#262218] relative">
              <div className="mb-6">
                <span className="text-xs tracking-[0.2em] text-[#d4af37] uppercase font-bold block mb-1">
                  DIRECT CONCIERGE DISPATCH
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Speak with a Royal Fragrance Advisor
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 px-6 bg-black/60 border border-[#d4af37] rounded-xl text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#f7e27d] mx-auto animate-bounce">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl text-white font-bold">Inquiry Received</h4>
                  <p className="text-xs sm:text-sm text-[#bfb8a8] max-w-sm mx-auto">
                    Your request has been routed to our private concierge at Place Vendôme. An advisor will contact you within two hours.
                  </p>
                  <span className="inline-block text-[10px] text-[#f7e27d] font-semibold tracking-wider uppercase bg-[#18150f] px-3 py-1 rounded">
                    Reference: RE-CONCIERGE-2026
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#bfb8a8] font-bold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Lord Sterling"
                        className="w-full bg-[#050505] border border-[#262218] focus:border-[#d4af37] px-3.5 py-2.5 rounded-lg text-xs text-white placeholder-[#686255] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#bfb8a8] font-bold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sterling@estate.com"
                        className="w-full bg-[#050505] border border-[#262218] focus:border-[#d4af37] px-3.5 py-2.5 rounded-lg text-xs text-white placeholder-[#686255] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#bfb8a8] font-bold mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+33 1 42 68 00 00"
                        className="w-full bg-[#050505] border border-[#262218] focus:border-[#d4af37] px-3.5 py-2.5 rounded-lg text-xs text-white placeholder-[#686255] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#bfb8a8] font-bold mb-1">
                        Preferred Salon
                      </label>
                      <select
                        value={formData.boutique}
                        onChange={(e) => {
                          setFormData({ ...formData, boutique: e.target.value });
                          setSelectedBoutiqueId(e.target.value);
                        }}
                        className="w-full bg-[#050505] border border-[#262218] focus:border-[#d4af37] px-3.5 py-2.5 rounded-lg text-xs text-white focus:outline-none"
                      >
                        {BOUTIQUES.map((b) => (
                          <option key={b.id} value={b.id} className="bg-[#0e0e11] text-white">
                            {b.city} — {b.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#bfb8a8] font-bold mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#050505] border border-[#262218] focus:border-[#d4af37] px-3.5 py-2.5 rounded-lg text-xs text-white focus:outline-none"
                    >
                      <option value="Private Consultation">Private Olfactory Consultation</option>
                      <option value="Bespoke Gold Engraving">Bespoke 24K Gold Engraving</option>
                      <option value="Private Salon Visit">VIP Salon Appointment</option>
                      <option value="Corporate / Royal Gifting">Corporate & Royal Gifting</option>
                      <option value="General Inquiries">General Scent Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#bfb8a8] font-bold mb-1">
                      Your Personal Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your desired fragrance profile, appointment date, or engraving preferences..."
                      className="w-full bg-[#050505] border border-[#262218] focus:border-[#d4af37] p-3 rounded-lg text-xs text-white placeholder-[#686255] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gold-gradient text-[#050505] text-xs font-bold tracking-[0.2em] uppercase shadow-gold-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>DISPATCH INQUIRY TO CONCIERGE</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact Line Strip */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0a0a0d] border border-[#262218] flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <div className="text-xs">
                  <span className="text-[#8c8577] block text-[10px] uppercase font-bold">Direct Concierge</span>
                  <a href="tel:+33142680000" className="text-white hover:text-[#f7e27d] font-semibold">
                    +33 1 42 68 00 00
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0a0d] border border-[#262218] flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <div className="text-xs">
                  <span className="text-[#8c8577] block text-[10px] uppercase font-bold">Private Inquiries</span>
                  <a href="mailto:concierge@essencederoyal.com" className="text-white hover:text-[#f7e27d] font-semibold truncate block">
                    concierge@essencederoyal.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Location Map & Boutique Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-2xl glass-card-dark border border-[#262218] flex-1 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs tracking-[0.2em] text-[#d4af37] uppercase font-bold block mb-1">
                      GLOBAL FLAGSHIP SALONS
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Boutique Locations
                    </h3>
                  </div>

                  {currentBoutique.flagship && (
                    <span className="px-3 py-1 rounded-full bg-gold-gradient text-[#050505] text-[10px] font-bold tracking-wider uppercase">
                      FLAGSHIP
                    </span>
                  )}
                </div>

                {/* Boutique City Switcher Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {BOUTIQUES.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBoutiqueId(b.id)}
                      className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase font-bold transition-all duration-300 ${
                        selectedBoutiqueId === b.id
                          ? 'bg-gold-gradient text-[#050505] shadow-gold-glow'
                          : 'bg-[#050505] text-[#bfb8a8] border border-[#262218] hover:border-[#d4af37]/40 hover:text-white'
                      }`}
                    >
                      {b.city}
                    </button>
                  ))}
                </div>

                {/* Selected Boutique Details Card */}
                <div className="p-4 rounded-xl bg-[#050505] border border-[#262218] mb-6 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {currentBoutique.name}
                      </h4>
                      <p className="text-xs text-[#d4af37] font-medium">
                        {currentBoutique.neighborhood}
                      </p>
                    </div>

                    <a
                      href={currentBoutique.mapsDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs text-[#f7e27d] hover:underline font-semibold"
                      title="Open full directions in Google Maps"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-[#bfb8a8] border-t border-[#1a1712]">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span className="text-xs font-medium">{currentBoutique.hours}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span className="text-xs font-medium">{currentBoutique.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Maps Container */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden border border-[#d4af37]/40 shadow-gold-glow bg-black">
                <iframe
                  title={`${currentBoutique.name} Interactive Location Map`}
                  src={currentBoutique.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#d4af37]/40 flex items-center space-x-2 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-[#f7e27d] animate-ping" />
                  <span className="text-[10px] tracking-wider text-white uppercase font-bold">
                    {currentBoutique.address}, {currentBoutique.city}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
