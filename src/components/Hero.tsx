import React from 'react';
import { Hero3D } from './Hero3D';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ArrowRight, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const { triggerSound } = useSound();

  const techBadges = [
    { name: 'Python', color: 'text-amber-400 border-amber-400/20 bg-amber-400/5', pos: 'top-4 left-4' },
    { name: 'PyTorch', color: 'text-rose-400 border-rose-400/20 bg-rose-400/5', pos: 'top-12 right-2' },
    { name: 'FastAPI', color: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5', pos: 'bottom-20 left-2' },
    { name: 'Next.js', color: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5', pos: 'bottom-6 right-6' },
    { name: 'Spring Boot', color: 'text-lime-400 border-lime-400/20 bg-lime-400/5', pos: 'top-1/2 -left-3' },
    { name: 'LangChain & RAG', color: 'text-violet-400 border-violet-400/20 bg-violet-400/5', pos: 'bottom-1/3 -right-2' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Radial Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-600/10 via-neural-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineering & AI Roles</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-3">
              Kamireddy <br className="hidden sm:inline" />
              <span className="gradient-text">Nithin Kumar</span> Reddy
            </h1>

            {/* Role Subheading */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-sm sm:text-base text-slate-700 dark:text-slate-300 font-semibold mb-5">
              <span className="text-brand-500 dark:text-brand-400">AI Engineer</span>
              <span className="text-slate-400">•</span>
              <span className="text-neural-500 dark:text-neural-300">Full-Stack Developer</span>
              <span className="text-slate-400">•</span>
              <span className="text-violet-500 dark:text-violet-300">Software Engineer</span>
            </div>

            {/* Concise Value Statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              Computer Science Engineer building intelligent applications, scalable web architectures, and practical AI solutions with modern software engineering technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={() => triggerSound('click')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-500 to-neural-600 hover:from-brand-400 hover:to-neural-500 text-white shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSound('success')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-200/70 dark:bg-white/[0.05] hover:bg-slate-300/80 dark:hover:bg-white/[0.1] border border-slate-300/60 dark:border-white/[0.1] text-slate-800 dark:text-white transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-brand-400" />
                <span>Resume Vault</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => triggerSound('click')}
                  className="p-3 rounded-xl bg-slate-200/50 dark:bg-white/[0.04] border border-slate-300/60 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-brand-400 hover:border-brand-400/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => triggerSound('click')}
                  className="p-3 rounded-xl bg-slate-200/50 dark:bg-white/[0.04] border border-slate-300/60 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-brand-400 hover:border-brand-400/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Verified Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-6 border-t border-slate-200 dark:border-white/[0.08]">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    <span className="gradient-text">{stat.value}</span>
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: 3D Visualization & Floating Tech Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* 3D Component */}
            <div className="w-full relative">
              <Hero3D />

              {/* Floating Pill Badges */}
              {techBadges.map((badge, index) => (
                <div
                  key={index}
                  className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono font-medium backdrop-blur-md absolute shadow-sm transition-transform duration-300 hover:scale-105 ${badge.color} ${badge.pos}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                  <span>{badge.name}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
