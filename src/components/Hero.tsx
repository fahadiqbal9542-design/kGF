import React from 'react';
import { Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenWhatsApp }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0c0908]"
    >
      {/* Background Ambient Radial Glows */}
      <div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#ff6724]/20 via-[#ea580c]/10 to-transparent blur-3xl pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#9a3412]/15 via-[#431407]/10 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Glossy 3D Corner Accent - Top Right */}
      <div className="hidden lg:block absolute -top-8 -right-8 w-44 h-44 pointer-events-none opacity-85 select-none" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_25px_rgba(255,103,36,0.35)]">
          <defs>
            <linearGradient id="glossyArrow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8533" />
              <stop offset="50%" stopColor="#ff5e1e" />
              <stop offset="100%" stopColor="#9a3412" />
            </linearGradient>
            <linearGradient id="glossyEdge" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M20,90 L65,45 L85,65 L85,15 L35,15 L55,35 L10,80 Z"
            fill="url(#glossyArrow)"
            stroke="url(#glossyEdge)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Decorative Glossy 3D Corner Accent - Bottom Left */}
      <div className="hidden lg:block absolute -bottom-12 -left-12 w-48 h-48 pointer-events-none opacity-75 select-none rotate-180" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_10px_25px_rgba(255,103,36,0.25)]">
          <path
            d="M20,90 L65,45 L85,65 L85,15 L35,15 L55,35 L10,80 Z"
            fill="url(#glossyArrow)"
            stroke="url(#glossyEdge)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Pitch & Credentials */}
          <div className="lg:col-span-6 z-10 flex flex-col items-start pt-6 lg:pt-0">
            {/* Sub-kicker matching screenshot */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xl sm:text-2xl font-medium text-neutral-300">
                Hey I am
              </span>
              <span className="text-xl sm:text-2xl font-bold text-[#ff6724] tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            {/* Main Headline matching screenshot */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-5 font-display">
              Web Developer
            </h1>

            {/* Subtitle description */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl mb-8">
              I design websites using Figma and develop them to bring to life with{' '}
              <span className="text-white font-medium">React</span> &amp;{' '}
              <span className="text-white font-medium">Node.js</span> for a seamless full-stack user experience.
            </p>

            {/* Primary Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
              {/* Vibrant Orange "Hire Me" Pill Button */}
              <button
                onClick={onOpenContact}
                className="px-7 py-3 rounded-full text-sm font-bold text-white bg-[#ff6724] hover:bg-[#ff550f] active:scale-95 transition-all duration-200 shadow-[0_8px_20px_rgba(255,103,36,0.35)] hover:shadow-[0_10px_25px_rgba(255,103,36,0.5)] cursor-pointer whitespace-nowrap"
              >
                Hire Me
              </button>

              {/* Mail Icon Button */}
              <button
                onClick={onOpenContact}
                aria-label="Send direct message or email"
                className="w-12 h-12 rounded-full flex items-center justify-center text-neutral-300 hover:text-white bg-white/[0.04] border border-white/20 hover:border-[#ff6724] hover:bg-white/[0.08] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </button>

              {/* Direct WhatsApp Button requested by user */}
              <button
                onClick={onOpenWhatsApp}
                aria-label="Chat on WhatsApp"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 hover:border-emerald-400 hover:text-emerald-300 active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap shadow-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 2.021.849 3.226.85 3.179 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.769-5.767-5.769zm3.393 8.354c-.146.406-.733.743-1.019.789-.285.047-.648.064-1.895-.453-1.246-.516-2.029-1.782-2.091-1.865-.062-.083-.505-.672-.505-1.282 0-.61.319-.91.432-1.033.113-.123.247-.154.33-.154.083 0 .166.002.239.006.077.004.181-.03.283.216.103.247.352.858.383.921.031.063.052.137.01.22-.041.083-.062.134-.124.207-.062.073-.131.163-.187.219-.062.062-.127.129-.055.253.072.124.321.53 1.055 1.185.945.843 1.343.985 1.532 1.068.188.083.298.073.409-.052.112-.124.478-.557.605-.747.127-.19.255-.158.43-.093.175.064 1.11.523 1.301.618.19.095.318.142.365.222.046.08.046.467-.1 873zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.981-1.406C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.15-.494-4.42-1.34l-.317-.212-2.96.835.839-2.883-.232-.338C4.015 15.011 3.5 13.557 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/>
                </svg>
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Hairline Divider */}
            <div className="w-full max-w-md h-px bg-white/10 mb-8" />

            {/* Testimonial Glassmorphic Card (Matching Left Bottom in Image) */}
            <div className="w-full max-w-sm rounded-2xl bg-white/[0.04] border border-white/15 p-5 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-[#ff6724]/40 transition-colors">
              {/* Subtle orange accent glow behind */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6724]/10 rounded-full blur-xl pointer-events-none" />
              
              {/* Big Quote Symbol */}
              <span className="text-[#ff6724] text-4xl font-serif font-bold leading-none block mb-1">
                “
              </span>

              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal mb-4">
                Working with Sammy was so good, he's so professional and would work with him again
              </p>

              {/* Author info matching image */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0 bg-neutral-800">
                  <img
                    src="/src/assets/images/avatar_angelina_1790334694917.jpg"
                    alt="Angelina Jolie"
                    className="w-full h-full object-cover"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback styled avatar if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center text-xs font-bold text-neutral-300">
                    AJ
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">
                    Angelina Jolie
                  </h4>
                  <p className="text-[11px] text-neutral-400">
                    Business owner
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Developer Character + Concentric Orbits + Floating Tech Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[440px] sm:min-h-[520px]">
            
            {/* Concentric Orbit Circles (Matching reference image) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
              {/* Innermost Orbit Ring */}
              <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-orange-500/20" />
              {/* Middle Orbit Ring */}
              <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full border border-orange-500/15" />
              {/* Outer Orbit Ring */}
              <div className="absolute w-[500px] h-[500px] sm:w-[620px] sm:h-[620px] rounded-full border border-orange-500/10" />
            </div>

            {/* Central 3D Character Illustration */}
            <div className="relative z-10 w-72 sm:w-96 aspect-square flex items-center justify-center">
              {/* Soft character spotlight shadow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-t from-[#ff6724]/25 via-transparent to-transparent blur-2xl" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-gradient-to-b from-[#1f1510] to-[#0c0908] group">
                <img
                  src="/src/assets/images/sammy_3d_character_1790334645295.jpg"
                  alt="Sammy - Full Stack React and Node.js Developer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle vignette scrim to blend with background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0908] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>
            </div>

            {/* Orbiting 3D Tech Badges (Exact match from reference image) */}
            
            {/* 1. HTML5 Badge (Top / Middle orbit) */}
            <div 
              className="absolute top-8 sm:top-12 left-1/4 sm:left-1/3 z-20 animate-float-slow transform -rotate-12"
              title="HTML5"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#ff5722] to-[#e64a19] p-0.5 shadow-[0_8px_20px_rgba(244,81,30,0.45)] border border-orange-300/40 flex items-center justify-center cursor-default">
                <span className="font-extrabold text-white text-lg sm:text-xl tracking-tight drop-shadow font-mono">
                  5
                </span>
              </div>
            </div>

            {/* 2. CSS3 Badge (Mid-Left orbit) */}
            <div 
              className="absolute top-1/2 -left-2 sm:left-6 z-20 animate-float-reverse transform rotate-6"
              title="CSS3"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-br from-[#0288d1] to-[#01579b] p-0.5 shadow-[0_8px_20px_rgba(2,136,209,0.45)] border border-sky-300/40 flex items-center justify-center cursor-default">
                <span className="font-extrabold text-white text-base sm:text-lg tracking-tight drop-shadow font-mono">
                  3
                </span>
              </div>
            </div>

            {/* 3. Node.js Badge (Bottom-Left orbit) */}
            <div 
              className="absolute bottom-8 sm:bottom-12 left-8 sm:left-16 z-20 animate-float-slow transform rotate-12"
              title="Node.js Backend"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#1e3a1e] to-[#0f2410] p-1 shadow-[0_8px_20px_rgba(46,125,50,0.4)] border border-emerald-400/40 flex items-center justify-center cursor-default">
                <span className="font-extrabold text-emerald-400 text-sm sm:text-base tracking-tighter font-mono">
                  JS
                </span>
              </div>
            </div>

            {/* 4. Figma Badge (Top-Right orbit) */}
            <div 
              className="absolute top-12 sm:top-16 right-4 sm:right-12 z-20 animate-float-reverse transform rotate-12"
              title="Figma UI/UX"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1e1e1e] p-2 shadow-[0_8px_20px_rgba(242,78,30,0.35)] border border-white/20 flex items-center justify-center cursor-default">
                {/* Figma 4-quadrant stylized icon */}
                <div className="w-5 h-7 flex flex-col gap-0.5">
                  <div className="flex gap-0.5">
                    <div className="w-2.5 h-2.5 rounded-l-full bg-[#f24e1e]" />
                    <div className="w-2.5 h-2.5 rounded-r-full bg-[#ff7262]" />
                  </div>
                  <div className="flex gap-0.5">
                    <div className="w-2.5 h-2.5 rounded-l-full bg-[#a259ff]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#1abcfe]" />
                  </div>
                  <div className="w-2.5 h-2.5 rounded-l-full rounded-br-full bg-[#0acf83]" />
                </div>
              </div>
            </div>

            {/* 5. React Badge (Mid-Right orbit) */}
            <div 
              className="absolute bottom-24 sm:bottom-28 right-0 sm:right-6 z-20 animate-float-slow"
              title="React 19"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#082f49] p-2 shadow-[0_8px_20px_rgba(14,165,233,0.45)] border border-cyan-400/40 flex items-center justify-center cursor-default">
                {/* React Atom icon */}
                <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-7 h-7 text-cyan-400 fill-none stroke-current stroke-1">
                  <circle cx="0" cy="0" r="2.05" fill="#38bdf8"/>
                  <g stroke="#38bdf8">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
