import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  ArrowUp 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { triggerSound } = useSound();

  const scrollToTop = () => {
    triggerSound('tab');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/5">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-neural-600 flex items-center justify-center font-mono font-bold text-white text-xs shadow-glow-cyan">
                N
              </div>
              <span className="font-heading font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
                NITHIN<span className="text-brand-400">.DEV</span>
              </span>
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              AI Engineer • Full-Stack Developer • Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound('click')}
              className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-brand-400 dark:hover:text-brand-300 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound('click')}
              className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-brand-400 dark:hover:text-brand-300 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onClick={() => triggerSound('click')}
              className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-brand-400 dark:hover:text-brand-300 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors"
              aria-label="Email Nithin"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-200 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-white/10 transition-colors ml-2"
              title="Scroll to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Location Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React, TypeScript & Three.js</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
