import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0706] text-neutral-400 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#home" className="text-xl font-bold tracking-tight text-white flex items-baseline">
            <span>noah</span>
            <span className="text-[#ff6724] text-2xl font-extrabold leading-none">.</span>
          </a>
          <p className="text-xs text-neutral-500">
            Full-Stack React &amp; Node.js Engineering · {PERSONAL_INFO.name}
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-xs font-medium text-neutral-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social / Direct Action Links & Scroll to top */}
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send email"
            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full bg-white/[0.04] hover:bg-[#ff6724] text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-neutral-600">
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Crafted with React &amp; Node.js architecture. All rights reserved.
      </div>
    </footer>
  );
};
