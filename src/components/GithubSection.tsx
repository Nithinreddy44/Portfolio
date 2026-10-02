import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';
import { GithubIcon } from './Icons';
import { 
  ExternalLink, 
  Star, 
  FolderGit2 
} from 'lucide-react';

export const GithubSection: React.FC = () => {
  const { triggerSound } = useSound();

  const featuredRepos = [
    {
      name: 'Predictive-Maintenance-and-Process-Intelligence-by-Infosys',
      desc: 'Machine learning failure prediction & sensor telemetry analytics engine.',
      lang: 'Python / ML',
      langColor: 'bg-amber-400',
      stars: 12,
      url: 'https://github.com/Nithinreddy44/Predictive-Maintenance-and-Process-Intelligence-by-Infosys'
    },
    {
      name: 'CodeScope',
      desc: 'Automated codebase AST architecture detector and security auditing engine.',
      lang: 'Python / FastAPI',
      langColor: 'bg-emerald-400',
      stars: 8,
      url: 'https://github.com/Nithinreddy44/CodeScope'
    },
    {
      name: 'Ai-agent-for-call',
      desc: 'Real-time conversational voice agent and telephony audio pipeline.',
      lang: 'TypeScript / Next.js',
      langColor: 'bg-brand-400',
      stars: 6,
      url: 'https://github.com/Nithinreddy44/Ai-agent-for-call'
    },
    {
      name: 'HRM-Portel',
      desc: 'Enterprise Human Resource & Payroll Management portal with RBAC.',
      lang: 'TypeScript',
      langColor: 'bg-brand-400',
      stars: 5,
      url: 'https://github.com/Nithinreddy44/HRM-Portel'
    },
    {
      name: 'SpeakingGym',
      desc: 'Interactive speech practice & communication coaching web platform.',
      lang: 'TypeScript / Prisma',
      langColor: 'bg-neural-400',
      stars: 4,
      url: 'https://github.com/Nithinreddy44/SpeakingGym'
    },
    {
      name: 'vilker-page',
      desc: 'Animated 3D React Native Skia & Three.js mobile product showcase.',
      lang: 'TypeScript / 3D',
      langColor: 'bg-violet-400',
      stars: 3,
      url: 'https://github.com/Nithinreddy44/vilker-page'
    }
  ];

  const languages = [
    { name: 'Python', pct: '38%', color: 'bg-amber-400' },
    { name: 'TypeScript', pct: '30%', color: 'bg-brand-400' },
    { name: 'JavaScript', pct: '14%', color: 'bg-yellow-400' },
    { name: 'Java / Spring', pct: '10%', color: 'bg-rose-400' },
    { name: 'C / C++', pct: '8%', color: 'bg-indigo-400' },
  ];

  return (
    <section id="github" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>09 // OPEN SOURCE & CODE ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Open Source <span className="gradient-text">GitHub Repositories</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Explore public source code repositories, commits, and machine learning models on GitHub.
          </p>
        </div>

        {/* GitHub Stats Summary Bar */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 mb-10 border border-slate-200 dark:border-white/5 text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-bold text-2xl shadow-glow-cyan">
                <GithubIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>@Nithinreddy44</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  github.com/Nithinreddy44 • 25+ Public Repositories
                </p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound('click')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm"
            >
              <span>Explore GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Language Breakdown */}
          <div className="mt-6">
            <div className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2.5">
              Codebase Language Distribution:
            </div>
            {/* Visual Bar */}
            <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-800 gap-0.5 mb-3">
              {languages.map((l, idx) => (
                <div key={idx} className={`${l.color} h-full`} style={{ width: l.pct }} title={`${l.name} (${l.pct})`} />
              ))}
            </div>
            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              {languages.map((l, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
                  <span>{l.name} ({l.pct})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {featuredRepos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound('click')}
              className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-white/5 hover:border-brand-400/40 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-brand-500 dark:text-brand-400">
                    <FolderGit2 className="w-4 h-4" />
                    <span className="font-mono text-xs font-semibold group-hover:underline line-clamp-1">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-400 transition-colors flex-shrink-0" />
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {repo.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                  <span>{repo.lang}</span>
                </div>

                {repo.stars > 0 && (
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-current" />
                    <span>{repo.stars}</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
