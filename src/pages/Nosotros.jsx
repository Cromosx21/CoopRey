import React from 'react';
import { NosotrosHero } from '../components/nosotros/NosotrosHero.jsx';
import { QuienesSomos } from '../components/nosotros/QuienesSomos.jsx';
import { NuestrosValores } from '../components/nosotros/NuestrosValores.jsx';
import { Equipo } from '../components/nosotros/Equipo.jsx';
import { Compromiso } from '../components/nosotros/Compromiso.jsx';
import { CTASection } from '../components/sections/CTASection.jsx';

export default function Nosotros() {
  return (
    <>
      <NosotrosHero />
      <QuienesSomos />
      <NuestrosValores />
      <Compromiso />
      <Equipo />
      <CTASection />
    </>
  );
}