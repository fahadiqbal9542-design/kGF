import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold text-[#ff6724] tracking-wider uppercase mb-2 block">
          Client Feedback &amp; Trust
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          What Partners Say
        </h2>
        <p className="mt-3 text-neutral-400 text-sm sm:text-base">
          Direct feedback from founders, business owners, and engineering leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className={`p-6 sm:p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between ${
              item.highlighted
                ? 'bg-gradient-to-b from-white/[0.06] to-white/[0.02] border-[#ff6724]/40 shadow-[0_15px_35px_rgba(255,103,36,0.1)]'
                : 'bg-white/[0.025] hover:bg-white/[0.045] border-white/10 hover:border-white/20'
            }`}
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ff6724] text-[#ff6724]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal italic mb-6">
                "{item.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-white/20 bg-neutral-800 shrink-0 flex items-center justify-center">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : null}
                <span className="text-xs font-bold text-neutral-300">
                  {item.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-400">
                  {item.role}, <span className="text-neutral-300">{item.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
