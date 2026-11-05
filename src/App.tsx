import React from 'react';
import './App.css';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BestSellersSection } from './components/BestSellersSection';
import { CollectionsSection } from './components/CollectionsSection';
import { FragranceStory } from './components/FragranceStory';
import { NotesSection } from './components/NotesSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { FilmSection } from './components/FilmSection';
import { ProductShowcase } from './components/ProductShowcase';
import { AboutUsSection } from './components/AboutUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BoutiqueLocatorModal } from './components/BoutiqueLocatorModal';
import { CampaignFilmModal } from './components/CampaignFilmModal';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#050505] text-[#f5f4f0] selection:bg-[#d4af37]/30 selection:text-[#f7e27d] relative font-sans">
        {/* Clean Responsive Dark Black & Gold Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Most Sold Perfumes Section (Catalogue & Detailing) */}
          <BestSellersSection />

          {/* Perfume Collections Section */}
          <CollectionsSection />

          {/* Fragrance Story & Sensory Pillars */}
          <FragranceStory />

          {/* Olfactory Notes (Three Movements) */}
          <NotesSection />

          {/* Crafted in Detail (Wood, Glass & Gold) */}
          <CraftsmanshipSection />

          {/* Campaign Film Section */}
          <FilmSection />

          {/* Primary Bespoke Flacon & Engraving Detailing Showcase */}
          <ProductShowcase />

          {/* About Us of Perfume Company Since 2012 */}
          <AboutUsSection />

          {/* Testimonial Section Smooth Carousel (Pauses on hover) */}
          <TestimonialsSection />

          {/* Frequently Asked Questions (FAQ) Accordion */}
          <FAQSection />

          {/* Contact Us & Interactive Boutique Location Map */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <BoutiqueLocatorModal />
        <CampaignFilmModal />
      </div>
    </CartProvider>
  );
};

export default App;
