import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CleanVsSpotless } from './components/CleanVsSpotless';
import { ProcessPreparation } from './components/ProcessPreparation';
import { Gallery } from './components/Gallery';
import { AboutKarol } from './components/AboutKarol';
import { Testimonials } from './components/Testimonials';
import { QuoteSection } from './components/QuoteSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [heroPassed, setHeroPassed] = useState(false);
  const [finalCtaInView, setFinalCtaInView] = useState(false);
  const finalCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);
      setHeroPassed(scrollY > 480);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Observe Final CTA visibility to cleanly hide mobile bottom bar
  useEffect(() => {
    const currentRef = finalCtaRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setFinalCtaInView(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(currentRef);
    return () => {
      observer.disconnect();
    };
  }, []);

  const isMobileBarVisible = heroPassed && !finalCtaInView;

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF3F6] text-[#0E1B2C]">
      {/* 0. Header (Fixed Glass Pill & Compact on Scroll) */}
      <Header scrolled={scrolled} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Section */}
        <Services />

        {/* 3. Limpio ≠ Desmanchado */}
        <CleanVsSpotless />

        {/* 4. Proceso y Preparación */}
        <ProcessPreparation />

        {/* 5. Trabajos Realizados */}
        <Gallery />

        {/* 6. Conoce a Karol */}
        <AboutKarol />

        {/* 7. Testimonios */}
        <Testimonials />

        {/* 8. Cómo Cotizar */}
        <QuoteSection />

        {/* 9. Preguntas Frecuentes */}
        <FaqSection />

        {/* 10. Final CTA */}
        <FinalCta ref={finalCtaRef} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Mobile Floating Glass Bar */}
      <MobileBottomBar visible={isMobileBarVisible} />
    </div>
  );
}
