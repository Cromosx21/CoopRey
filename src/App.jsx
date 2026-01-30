import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { ServicesSection } from './components/ServicesSection.jsx';
import { BenefitsSection } from './components/BenefitsSection.jsx';
import { StatsSection } from './components/StatsSection.jsx';
import { TestimonialsSection } from './components/TestimonialsSection.jsx';
import { CTASection } from './components/CTASection.jsx';
import { Footer } from './components/Footer.jsx';
import Nosotros from './pages/Nosotros.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Listen to hash changes for navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/nosotros') {
        setCurrentPage('nosotros');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Render based on current page
  if (currentPage === 'nosotros') {
    return <Nosotros />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}