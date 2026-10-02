import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { 
  GraduationCap, 
  Code, 
  Cpu, 
  MapPin, 
  Terminal, 
  Layers, 
  Workflow, 
  Sparkles 
} from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'Production-First Mindset',
      desc: 'Writing maintainable, typed, and testable code ready for deployment rather than disposable toy scripts.',
      icon: Layers,
      color: 'text-brand-400 bg-brand-400/10 border-brand-400/20'
    },
    {
      title: 'Data-Driven & Rigorous',
      desc: 'Evaluating machine learning models on verified metrics (Recall, F1-Score, ROC-AUC) instead of subjective assumptions.',
      icon: Cpu,
      color: 'text-neural-400 bg-neural-400/10 border-neural-400/20'
    },
    {
      title: 'End-to-End Ownership',
      desc: 'From data ingestion and model training to API endpoints, database schemas, and intuitive web interfaces.',
      icon: Workflow,
      color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Engineering Background & <span className="gradient-text">Core Philosophy</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Passionate about transforming machine learning models and robust software architectures into functional, user-facing digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Profile Card & Education */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Identity Card */}
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                {/* Photo with subtle glowing aura */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-brand-400/40 shadow-glow-cyan flex-shrink-0 bg-slate-900">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="flex flex-col">
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-mono text-brand-500 dark:text-brand-400 mt-0.5">
                    {PERSONAL_INFO.role}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-500/10 border border-brand-500/20 text-[11px] font-medium text-brand-700 dark:text-brand-300">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Focus: AI & Full-Stack Systems</span>
                  </div>
                </div>
              </div>

              {/* Education Box */}
              <div className="w-full mt-6 pt-5 border-t border-slate-200 dark:border-white/10 text-left">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-sm">
                    <GraduationCap className="w-4 h-4 text-brand-400" />
                    <span>Education</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                    {EDUCATION.period}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {EDUCATION.degree}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {EDUCATION.institution}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {EDUCATION.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* RIGHT: Technical Focus & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Overview Box */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-brand-400" />
                <span>Technical Profile & Core Competencies</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a final-year Computer Science Engineering student specializing in building production-ready Artificial Intelligence pipelines, Machine Learning algorithms, and full-stack software. Having completed certified development tracks at <strong className="text-slate-900 dark:text-white">Infosys</strong> and currently interning as an <strong className="text-slate-900 dark:text-white">AI Full-Stack Engineer at LexonIT</strong>, I bridge the gap between AI research and practical, scalable applications.
              </p>
            </div>

            {/* Principles Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {principles.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card p-5 rounded-xl flex flex-col justify-between hover:border-brand-400/40 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className={`p-2 rounded-lg border ${item.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
