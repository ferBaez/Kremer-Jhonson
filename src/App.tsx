/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { AboutSection } from './components/AboutSection';
import { Gallery } from './components/Gallery';
import { ValueProp } from './components/ValueProp';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] selection:bg-[#F27D26] selection:text-white">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <Gallery />
      <ValueProp />
      <ContactSection />
      <Footer />
    </main>
  );
}
