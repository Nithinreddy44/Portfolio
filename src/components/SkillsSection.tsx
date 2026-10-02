import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';
import { 
  Terminal, 
  Brain, 
  Layers, 
  Server, 
  Database, 
  Cpu 
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { triggerSound } = useSound();
  const [selectedCatId, setSelectedCatId] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'Brain': return Brain;
      case 'Layers': return Layers;
      case 'Server': return Server;
      case 'Database': return Database;
      default: return Cpu;
    }
  };

  const filteredCategories = selectedCatId === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === selectedCatId);

  const handleFilterClick = (id: string) => {
    triggerSound('tab');
    setSelectedCatId(id);
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // TECHNICAL COMPETENCY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Categorized Technical <span className="gradient-text">Skills & Frameworks</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Grouped by architectural domain with verified production context and applied toolsets.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => handleFilterClick('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedCatId === 'all'
                ? 'bg-brand-500 text-white shadow-glow-cyan'
                : 'bg-slate-200/70 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/[0.08] border border-slate-300/40 dark:border-white/5'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getIcon(cat.icon);
            const isActive = selectedCatId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-500 text-white shadow-glow-cyan'
                    : 'bg-slate-200/70 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/[0.08] border border-slate-300/40 dark:border-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredCategories.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <div
                key={category.id}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/5 hover:border-brand-400/30 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-white/5">
                    <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-brand-400/20 transition-all"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                              skill.proficiency === 'Production'
                                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25'
                                : skill.proficiency === 'Advanced'
                                ? 'bg-brand-500/15 text-brand-600 dark:text-brand-400 border border-brand-500/25'
                                : 'bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {skill.proficiency}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-normal font-mono">
                          {skill.context}
                        </p>

                        <div className="flex flex-wrap gap-1 mt-2">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-200/50 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
