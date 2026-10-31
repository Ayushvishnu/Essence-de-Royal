import React, { useState } from 'react';
import { FAQ_DATA } from '../data/fragranceData';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Craftsmanship', 'Ordering & Care', 'Boutiques & Concierge'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#050505] border-t border-[#262218] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] ambient-glow-gold opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#d4af37]/40 mb-4 shadow-gold-glow">
            <HelpCircle className="w-3.5 h-3.5 text-[#f7e27d]" />
            <span className="text-[11px] tracking-[0.25em] text-gold-gradient uppercase font-bold">
              KNOWLEDGE & SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-[#bfb8a8] max-w-lg mx-auto">
            Everything you need to know regarding our French botanical distillations, flacon preservation, bespoke engraving, and worldwide white-glove transport.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="text-[#d4af37] text-xs">⚜</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-[#050505] font-bold shadow-gold-glow'
                  : 'bg-[#0c0c0f] text-[#bfb8a8] border border-[#262218] hover:border-[#d4af37]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'glass-card-dark border-[#d4af37]/60 shadow-gold-glow'
                    : 'bg-[#0a0a0d] border-[#262218] hover:border-[#d4af37]/40'
                }`}
              >
                {/* Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base tracking-wide text-white font-bold">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#262218] flex items-center justify-center text-[#d4af37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#d4af37]/15 border-[#d4af37]' : 'bg-black/50'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-[#bfb8a8] leading-relaxed border-t border-[#1f1b14] animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[10px] text-[#8c8577] font-semibold uppercase tracking-wider">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0c0c0f] via-[#141418] to-[#0c0c0f] border border-[#d4af37]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#f7e27d] shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm text-white font-bold uppercase tracking-wider">
                Need Bespoke Assistance?
              </h4>
              <p className="text-xs text-[#9e9789]">
                Our Private Scent Concierge is available for personalized guidance.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-2.5 rounded-lg bg-gold-gradient text-[#050505] text-xs font-bold tracking-wider uppercase hover:shadow-gold-glow transition-all shrink-0"
          >
            CONTACT CONCIERGE
          </a>
        </div>

      </div>
    </section>
  );
};
