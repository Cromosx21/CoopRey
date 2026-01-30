import React from 'react';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { NosotrosHero } from '../components/nosotros/NosotrosHero.jsx';
import { QuienesSomos } from '../components/nosotros/QuienesSomos.jsx';
import { NuestrosValores } from '../components/nosotros/NuestrosValores.jsx';
import { Equipo } from '../components/nosotros/Equipo.jsx';
import { Compromiso } from '../components/nosotros/Compromiso.jsx';
import { CTASection } from '../components/CTASection.jsx';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <NosotrosHero />
        <QuienesSomos />
        <NuestrosValores />
        <Compromiso />
        <Equipo />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}