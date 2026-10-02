import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, SKILLS, PROJECTS } from '../data/portfolioData';
import { X, Download, Printer, Mail, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#140e0b] border border-white/15 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Curriculum Vitae</span>
            <span className="text-xs text-neutral-400">· PDF Version</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.12] transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#ff6724]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-neutral-200 print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight font-display">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-base text-[#ff6724] font-semibold mt-1">
                {PERSONAL_INFO.role} ({PERSONAL_INFO.specialization})
              </p>
              <p className="text-xs text-neutral-400 mt-1 max-w-lg">
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            <div className="text-xs text-neutral-300 space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#ff6724]" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ff6724]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="text-emerald-400 font-mono">
                WhatsApp: {PERSONAL_INFO.whatsappDisplay}
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff6724] mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Technical Skills Categorized */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff6724] mb-3">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/10">
                <span className="font-bold text-white block mb-1">Frontend Engineering</span>
                <p className="text-neutral-400">React 19, Next.js, TypeScript, Tailwind CSS, State Management (Zustand/Redux), Motion, HTML5/CSS3 Grid &amp; Flexbox, Figma to React.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/10">
                <span className="font-bold text-white block mb-1">Backend &amp; Node.js</span>
                <p className="text-neutral-400">Node.js Runtime, Express.js, RESTful API Design, WebSockets, JWT Authentication, Rate Limiting, Microservices architecture.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/10">
                <span className="font-bold text-white block mb-1">Databases &amp; Caching</span>
                <p className="text-neutral-400">PostgreSQL, MongoDB, Redis Pub/Sub, Drizzle ORM, Mongoose, Indexing, Transaction Safety.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/10">
                <span className="font-bold text-white block mb-1">Tools &amp; DevOps</span>
                <p className="text-neutral-400">Git/GitHub Actions, Docker, Vite, Webpack, Postman, Linux, Vercel, Cloud Run, CI/CD Pipelines.</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff6724] mb-4">
              Work Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-white">
                      {exp.role} · <span className="text-neutral-300 font-normal">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-[#ff6724]">{exp.period}</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    {exp.description}
                  </p>
                  <ul className="space-y-1 pt-1">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className="text-[#ff6724]">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff6724] mb-2">
              Education &amp; Certifications
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <span className="font-bold text-white">Bachelor of Science in Computer Science</span>
                <p className="text-neutral-400">Specialized in Software Engineering &amp; Distributed Systems</p>
              </div>
              <span className="font-mono text-neutral-400 mt-1 sm:mt-0">Graduated with Honors</span>
            </div>
          </div>

        </div>

        {/* Modal Bottom CTA */}
        <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
          <span className="text-xs text-neutral-400">Ready to hire?</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Job%20Inquiry%20from%20Portfolio`}
            className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#ff6724] hover:bg-[#ea580c] transition-colors"
          >
            Contact Sammy
          </a>
        </div>
      </div>
    </div>
  );
};
