import React from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, Check, Cpu, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#140e0b] border border-white/15 p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#ff6724] uppercase tracking-wider mb-2">
            <span>Project Case Study</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize">{project.category}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            {project.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-neutral-300 font-normal">
            {project.tagline}
          </p>
        </div>

        {/* Hero Media Preview */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-6 bg-neutral-900 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Performance & Metrics Row */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-center">
                <span className="text-lg sm:text-xl font-extrabold text-[#ff6724] font-mono tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[11px] text-neutral-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Description & Problem-Solving */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
            Overview & Scope
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architecture Highlight */}
        <div className="mb-6 p-4 rounded-2xl bg-white/[0.025] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold text-white mb-2">
            <Cpu className="w-4 h-4 text-[#ff6724]" />
            <span>Full-Stack Architecture</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-mono text-xs">
            {project.architecture}
          </p>
        </div>

        {/* Key Features List */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
            Core Technical Highlights
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags (Zero-Pill clean inline list) */}
        <div className="mb-8">
          <span className="text-xs font-semibold text-neutral-400 block mb-2">
            Technologies Used
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300 font-mono">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#ff6724] hover:bg-[#ea580c] transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Visit Live App</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};
