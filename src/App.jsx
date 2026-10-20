import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ClinicalGallery from './components/ClinicalGallery';
import InteractiveNpiGuide from './components/InteractiveNpiGuide';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Sticky Clean Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Soft Medical 3D Waves & Ambient Light */}
        <Hero />

        {/* About Section - Deion Broadnax & Columbus, GA Roots */}
        <About />

        {/* Services Section - Healthcare Consulting, NPI, Practice Management */}
        <Services />

        {/* Clinical Gallery - Our Environment & Impact (Clean 3-Column Grid) */}
        <ClinicalGallery />

        {/* Interactive NPI Credentialing Structure Guide */}
        <InteractiveNpiGuide />

        {/* Contact Section - Form & Direct Phone: +1 706-887-1295 */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
