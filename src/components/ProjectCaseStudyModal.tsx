import React, { useEffect } from 'react';
import type { Project } from '../types';
import { useSound } from '../context/SoundContext';
import { GithubIcon } from './Icons';
import { 
  X, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  Workflow, 
  Code2 
} from 'lucide-react';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  const { triggerSound } = useSound();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        triggerSound('click');
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, triggerSound]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          triggerSound('click');
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel rounded-2xl sm:rounded-3xl border border-slate-300 dark:border-white/10 shadow-2xl p-5 sm:p-8 md:p-10 my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            triggerSound('click');
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          aria-label="Close modal (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
              01 // CASE STUDY
            </span>
            {project.badge && (
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {project.badge}
              </span>
            )}
          </div>
          <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound('click')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Code on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSound('click')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-500 text-white hover:bg-brand-400 transition-all shadow-glow-cyan"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Verified Metrics Cards (if available) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <span className="font-heading font-extrabold text-xl sm:text-2xl gradient-text block">
                  {m.value}
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block mt-0.5">
                  {m.label}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
                  {m.description}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Sections */}
        <div className="space-y-8">
          
          {/* 02 — Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-rose-500/[0.04] border border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                <AlertTriangle className="w-4 h-4" />
                <span>02 // The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>03 // The Engineering Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 03 — Architecture Flow */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xs uppercase tracking-wider mb-3 font-mono">
              <Workflow className="w-4 h-4" />
              <span>04 // Technical Architecture & Flow</span>
            </div>
            
            <p className="text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-200/50 dark:bg-black/30 p-3 rounded-lg border border-slate-300/40 dark:border-white/5 mb-4">
              {project.architecture}
            </p>

            {project.architectureSteps && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {project.architectureSteps.map((step, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/5">
                    <span className="font-mono text-xs font-bold text-brand-500 dark:text-brand-400">
                      {step.step}
                    </span>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white mt-1">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 04 — Technologies */}
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
              05 // Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-brand-500/10 text-brand-700 dark:text-brand-300 border border-brand-500/20 font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 05 — Key Implementation Features */}
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
              06 // Key Engineering Features
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 06 — Engineering Challenges & Overcoming */}
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
              07 // Engineering Challenges
            </span>
            <ul className="space-y-2">
              {project.engineeringChallenges.map((ch, cIdx) => (
                <li key={cIdx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5 p-3 rounded-xl bg-slate-100/40 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Snippet Preview (if available) */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-brand-400" />
                  <span>Verified Implementation Sample ({project.codeSnippet.filename})</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                  {project.codeSnippet.language}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-200 overflow-x-auto border border-white/10 max-h-72">
                <pre><code>{project.codeSnippet.code}</code></pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Repository: github.com/Nithinreddy44/{project.id}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                triggerSound('click');
                onClose();
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 transition-colors"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound('click')}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-500 to-neural-600 text-white shadow-glow-cyan"
            >
              <span>View on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
