import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="mb-14">
        <span className="text-xs font-semibold text-[#ff6724] tracking-wider uppercase mb-2 block">
          Work History &amp; Milestones
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Professional Experience
        </h2>
        <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl">
          Track record of shipping mission-critical client applications across fast-paced environments.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={exp.id} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Node Indicator */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#140e0b] border-2 border-[#ff6724] group-hover:scale-125 transition-transform" />

            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#ff6724]/40 transition-all duration-300">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#ff6724] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 mt-1">
                    <span className="font-semibold text-neutral-300">{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff6724] bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="space-y-2 mb-6">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-[#ff6724] shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Technologies used (Unboxed text with separators) */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                <span className="text-neutral-500 font-sans font-medium">Stack:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="text-neutral-300">
                    {tech}
                    {tIdx < exp.technologies.length - 1 && <span className="text-neutral-600 ml-2">·</span>}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
