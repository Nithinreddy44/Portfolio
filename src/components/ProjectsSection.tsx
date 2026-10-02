import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { useSound } from '../context/SoundContext';
import { GithubIcon } from './Icons';
import { 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  Terminal 
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { triggerSound } = useSound();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'full-stack', label: 'Full-Stack Applications' },
    { id: 'systems', label: '3D & Systems' },
    { id: 'data', label: 'Data & Analytics' }
  ];

  const featuredProject = PROJECTS.find(p => p.id === 'predictive-maintenance') || PROJECTS[0];
  const otherProjects = PROJECTS.filter(p => p.id !== featuredProject.id);

  const filteredProjects = activeCategory === 'all'
    ? otherProjects
    : otherProjects.filter(p => p.category === activeCategory);

  const handleCategoryChange = (catId: string) => {
    triggerSound('tab');
    setActiveCategory(catId);
  };

  const handleOpenModal = (project: Project) => {
    triggerSound('modal');
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // CASE STUDIES & ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Featured Engineering <span className="gradient-text">Projects & Case Studies</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Curated software products, machine learning pipelines, and full-stack systems with deep architectural analysis.
          </p>
        </div>

        {/* 1. LARGE HERO FEATURED PROJECT */}
        <div className="mb-16">
          <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-500/30 relative overflow-hidden shadow-2xl">
            {/* Background Accent Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Project Case Story */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-300 bg-brand-500/15 px-3 py-1 rounded-full border border-brand-500/30">
                    FEATURED CASE STUDY
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    Infosys Track
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {featuredProject.problem}
                </p>

                {/* Architecture Steps Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full my-6">
                  {featuredProject.metrics?.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                      <span className="font-heading font-extrabold text-lg sm:text-xl gradient-text block">
                        {m.value}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featuredProject.technologies.slice(0, 6).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-200/80 dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleOpenModal(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-500 to-neural-600 hover:from-brand-400 hover:to-neural-500 text-white shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Inspect Case Study (8-Step)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => triggerSound('click')}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-slate-200/80 dark:bg-white/[0.05] hover:bg-slate-300 dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Telemetry Simulation Box */}
              <div className="lg:col-span-5 w-full">
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-brand-500/20 shadow-xl font-mono text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-brand-400">
                      <Cpu className="w-4 h-4" />
                      <span>Telemetry_Inference.py</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                      LIVE MODEL
                    </span>
                  </div>

                  <div className="space-y-3 mt-4 text-xs text-slate-300">
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                      <div className="text-slate-400 text-[11px]">Classification Baseline:</div>
                      <div className="flex justify-between font-bold text-slate-100 mt-0.5">
                        <span>XGBoost Classifier:</span>
                        <span className="text-emerald-400">96.24% Recall (F1: 0.7916)</span>
                      </div>
                      <div className="flex justify-between text-slate-400 text-[11px] mt-1">
                        <span>Random Forest:</span>
                        <span>80.45% Recall (F1: 0.7415)</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                      <div className="text-slate-400 text-[11px]">Evaluated Telemetry:</div>
                      <div className="text-brand-300 font-bold mt-0.5">5,000 Records • 25 Machines</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Automated 5,699 missing value imputation</div>
                    </div>

                    <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>ROC-AUC Metric: 0.5965</span>
                      <span className="text-brand-400 cursor-pointer hover:underline" onClick={() => handleOpenModal(featuredProject)}>
                        Read full report &gt;
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 2. CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-500 text-white shadow-glow-cyan'
                    : 'bg-slate-200/70 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/[0.08] border border-slate-300/40 dark:border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3. PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-brand-400/40 transition-all duration-300 group hover:-translate-y-1 text-left"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                    {project.badge || project.category}
                  </span>
                  
                  {project.stars !== undefined && project.stars > 0 && (
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{project.stars} stars</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                  {project.tagline}
                </p>

                {/* Key Metrics or Highlights */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-4 p-2.5 rounded-lg bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{project.metrics[0].label}:</span>
                    <span className="text-xs font-bold font-mono text-brand-500 dark:text-brand-400">{project.metrics[0].value}</span>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/60 dark:bg-white/[0.03] text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="text-xs font-semibold text-brand-500 dark:text-brand-400 hover:text-brand-300 flex items-center gap-1 group/btn"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => triggerSound('click')}
                    className="p-2 rounded-lg bg-slate-200/70 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Overlay */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
