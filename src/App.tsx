import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(`Hi ${PERSONAL_INFO.name}, I'm interested in discussing a web development project with you!`);
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0c0908] text-neutral-100 flex flex-col font-sans selection:bg-[#ff6724] selection:text-white">
      {/* Top Navbar */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section matching reference image */}
        <Hero 
          onOpenContact={handleOpenContact}
          onOpenWhatsApp={handleDirectWhatsApp}
        />

        {/* Skill Highlights Section */}
        <Skills />

        {/* Selected Projects Showcase */}
        <Projects />

        {/* Work Experience History */}
        <Experience />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact Form with direct WhatsApp submission */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action Button */}
      <WhatsAppFloat onDirectTrigger={handleDirectWhatsApp} />

      {/* Downloadable / Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
