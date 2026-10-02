import React, { useState } from 'react';
import { Download, Menu, X, MessageSquareCode } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Connect', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Zone 1: Single element Brand Wordmark */}
        <a 
          href="#home" 
          onClick={() => handleNavClick('home')}
          className="text-2xl font-bold tracking-tight text-white flex items-baseline hover:opacity-90 transition-opacity"
        >
          <span className="font-bold text-white tracking-tight">noah</span>
          <span className="text-[#ff6724] text-3xl font-extrabold leading-none">.</span>
        </a>

        {/* Zone 2: Navigation Links (Pill enclosure matching design on desktop) */}
        <nav 
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-lg shadow-black/20"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-[#ff6724] bg-white/[0.07] shadow-inner font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (Download Resume) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-neutral-200 bg-white/[0.04] border border-white/15 hover:border-[#ff6724]/60 hover:text-white hover:bg-white/[0.08] transition-all duration-200 shadow-sm whitespace-nowrap group"
          >
            <Download className="w-3.5 h-3.5 text-[#ff6724] group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-neutral-300 hover:text-white bg-white/[0.06] border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#140e0b]/95 border border-white/10 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#ff6724]/20 text-[#ff6724] font-semibold'
                    : 'text-neutral-300 hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.08] border border-white/15 hover:bg-white/[0.12]"
              >
                <Download className="w-3.5 h-3.5 text-[#ff6724]" />
                <span>Download Resume</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#ff6724] hover:bg-[#ea580c]"
              >
                <MessageSquareCode className="w-3.5 h-3.5" />
                <span>Hire {PERSONAL_INFO.name}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
