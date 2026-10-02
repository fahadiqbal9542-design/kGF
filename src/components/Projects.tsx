import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, ArrowUpRight, Code2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'fullstack' | 'backend' | 'frontend'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack Apps' },
    { id: 'backend', label: 'Node.js & Backend' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-semibold text-[#ff6724] tracking-wider uppercase mb-2 block">
            Featured Case Studies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Selected Work &amp; Architecture
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl">
            Real-world systems engineered with React, Node.js, and modern cloud technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl self-start md:self-auto">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedFilter === f.id
                  ? 'bg-[#ff6724] text-white shadow-md shadow-[#ff6724]/20'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl bg-white/[0.025] hover:bg-white/[0.045] border border-white/10 hover:border-[#ff6724]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
          >
            {/* Project Image Frame */}
            <div 
              className="relative aspect-video w-full overflow-hidden bg-neutral-900 cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140e0b] via-transparent to-transparent opacity-80" />
              
              {/* Category indicator */}
              <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                {project.category}
              </span>

              {/* View Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                <span className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#ff6724] flex items-center gap-1.5 shadow-lg">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Tech tags without pill styling - clean monospaced separators */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 font-mono mb-3">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-[#ff6724]">
                      {tag}
                      {i < 2 ? <span className="text-neutral-600 ml-2">/</span> : null}
                    </span>
                  ))}
                </div>

                <h3 
                  onClick={() => setActiveProject(project)}
                  className="text-xl font-bold text-white group-hover:text-[#ff6724] transition-colors cursor-pointer mb-2"
                >
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed line-clamp-3 mb-6">
                  {project.tagline}
                </p>
              </div>

              {/* Action Links Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-semibold text-neutral-300 hover:text-[#ff6724] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Code2 className="w-4 h-4 text-[#ff6724]" />
                  <span>Architecture</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source code for ${project.title}`}
                    className="p-2 rounded-xl text-neutral-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    className="p-2 rounded-xl text-neutral-400 hover:text-[#ff6724] bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
