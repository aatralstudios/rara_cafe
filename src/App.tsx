import React from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { SignatureSnacks } from './components/SignatureSnacks';
import { SnackCounter } from './components/SnackCounter';
import { CoffeeSection } from './components/CoffeeSection';
import { WhyRara } from './components/WhyRara';
import { VisualStory } from './components/VisualStory';
import { Gallery } from './components/Gallery';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4E7D0] text-[#2A170F] font-sans antialiased overflow-x-hidden selection:bg-[#C87932] selection:text-[#FFF8EA]">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />

      {/* 0. Branded Swift Loading Animation */}
      <LoadingScreen />

      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content following strict Section Order (Requirement #29) */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Brand Introduction */}
        <BrandIntro />

        {/* 4. Signature Snacks */}
        <SignatureSnacks />

        {/* 4b. Physical Snack Counter */}
        <SnackCounter />

        {/* 5. Dedicated Coffee Section */}
        <CoffeeSection />

        {/* 6. Why RaRa */}
        <WhyRara />

        {/* 7. Visual Storytelling */}
        <VisualStory />

        {/* 8. Gallery */}
        <Gallery />

        {/* 9. Visit Us / Location */}
        <LocationSection />

        {/* 10. Final CTA */}
        <FinalCTA />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};

export default App;
