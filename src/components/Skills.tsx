import React, { useState } from 'react';
import { SKILLS, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code, 
  Server, 
  Database, 
  Cpu, 
  Layout, 
  Layers, 
  Palette, 
  ShieldCheck, 
  Zap, 
  Package, 
  GitBranch, 
  FileCode,
  Flame,
  CheckCircle2
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'frontend', label: 'React & Frontend' },
    { id: 'backend', label: 'Node.js & Backend' },
    { id: 'database', label: 'Databases & Storage' },
    { id: 'tools', label: 'UI/UX & Tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-300" />;
      case 'Layout': return <Layout className="w-5 h-5 text-orange-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Package': return <Package className="w-5 h-5 text-teal-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-red-400" />;
      default: return <Code className="w-5 h-5 text-[#ff6724]" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-semibold text-[#ff6724] tracking-wider uppercase mb-2 block">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Full-Stack Skill Highlights
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl">
            Bridging pixel-perfect React client interfaces with robust, event-driven Node.js backend architectures.
          </p>
        </div>

        {/* Stats Summary Counter */}
        <div className="flex items-center gap-6 sm:gap-8 bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm self-start md:self-auto">
          {PERSONAL_INFO.stats.slice(0, 2).map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#ff6724] font-mono tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs text-neutral-400 whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Category Segmented Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl w-fit">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#ff6724] text-white shadow-md shadow-[#ff6724]/20'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-[#ff6724]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header with Icon, Name and Years */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#ff6724] transition-colors">
                      {skill.name}
                    </h3>
                    {/* Zero-Pill unboxed metadata */}
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <span className="capitalize">{skill.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{skill.experience}</span>
                    </div>
                  </div>
                </div>

                <span className="text-sm font-bold text-white font-mono tabular-nums">
                  {skill.level}%
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-300 leading-relaxed mt-2 mb-4 font-normal">
                {skill.description}
              </p>
            </div>

            {/* Proficiency Meter */}
            <div className="w-full">
              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-[#ff6724] rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Stack Feature Callout Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1c120c] via-[#160e0a] to-[#0c0908] border border-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#ff6724]/20 border border-[#ff6724]/30 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-[#ff6724]" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              End-to-End Full-Stack Delivery
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mt-0.5">
              From Figma mockups to React frontends, scalable Node.js microservices, real-time WebSockets, and database indexing.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 bg-white/[0.04] px-4 py-2 rounded-xl border border-white/10 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>React 19 + Node.js 22 LTS Ready</span>
        </div>
      </div>
    </section>
  );
};
