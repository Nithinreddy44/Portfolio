import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';
import { 
  Calendar, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  Terminal, 
  Sparkles 
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { triggerSound } = useSound();
  const [expandedId, setExpandedId] = useState<string | null>('lexonit');

  const toggleExpand = (id: string) => {
    triggerSound('click');
    setExpandedId(prev => (prev === id ? null : id));
  };

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'active':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'certified':
        return 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/30';
      case 'simulation':
        return 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30';
      default:
        return 'bg-slate-200/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-slate-300/60 dark:border-white/10';
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-slate-100/40 dark:bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // CAREER & INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Professional Experience & <span className="gradient-text">Engineering Tracks</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Verified internship track records covering AI engineering, full-stack microservices, API architectures, and data simulations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-8 w-0.5 bg-slate-200 dark:bg-white/[0.08] pointer-events-none" />

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div
                  key={exp.id}
                  className="relative pl-12 sm:pl-20 transition-all duration-200"
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute left-2 sm:left-6 -translate-x-1/2 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      exp.badgeType === 'active'
                        ? 'border-emerald-500 bg-emerald-500 shadow-glow-cyan'
                        : isExpanded
                        ? 'border-brand-400 bg-dark-bg'
                        : 'border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-dark-card'
                    }`}
                  >
                    {exp.badgeType === 'active' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    )}
                  </div>

                  {/* Card Content */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className={`glass-card p-5 sm:p-6 rounded-2xl cursor-pointer transition-all border ${
                      isExpanded
                        ? 'border-brand-400/40 shadow-card-dark'
                        : 'border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
                            <span>{exp.role}</span>
                          </h3>
                          <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${getBadgeStyle(exp.badgeType)}`}>
                            {exp.badge}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                          <Building2 className="w-3.5 h-3.5 text-brand-400" />
                          <span className="text-slate-900 dark:text-white font-semibold">{exp.company}</span>
                          {exp.companyType && (
                            <>
                              <span>•</span>
                              <span>{exp.companyType}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 mt-2 sm:mt-0">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-white/5 px-2.5 py-1 rounded-md">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <span>{exp.period}</span>
                        </div>
                        <button
                          className="p-1 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white"
                          aria-label={isExpanded ? 'Collapse Details' : 'Expand Details'}
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {exp.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-200/70 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-300/40 dark:border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Contributions */}
                    {isExpanded && (
                      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/10 animate-fadeIn">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-brand-400" />
                          <span>Key Technical Contributions</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.contributions.map((c, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>

                        {exp.verifiedOutcome && (
                          <div className="mt-3.5 p-3 rounded-xl bg-brand-500/5 border border-brand-500/20 text-xs text-brand-700 dark:text-brand-300 flex items-center gap-2 font-mono">
                            <Sparkles className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                            <span><strong>Verified Outcome:</strong> {exp.verifiedOutcome}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
