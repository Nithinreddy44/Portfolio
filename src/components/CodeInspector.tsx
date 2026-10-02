import React, { useState } from 'react';
import { CODE_SNIPPETS } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';
import { 
  Copy, 
  Check, 
  Terminal, 
  FileCode 
} from 'lucide-react';

export const CodeInspector: React.FC = () => {
  const { triggerSound } = useSound();
  const [activeSnippetId, setActiveSnippetId] = useState<string>('rag-engine');
  const [copied, setCopied] = useState<boolean>(false);

  const activeSnippet = CODE_SNIPPETS.find(s => s.id === activeSnippetId) || CODE_SNIPPETS[0];

  const handleTabClick = (id: string) => {
    triggerSound('tab');
    setActiveSnippetId(id);
    setCopied(false);
  };

  const handleCopy = () => {
    triggerSound('success');
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-suite" className="py-20 lg:py-28 relative bg-slate-100/50 dark:bg-dark-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // CODE QUALITY & STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Recruiter Code <span className="gradient-text">Inspection Suite</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Inspect verified, production-quality PyTorch deep learning models, FastAPI RAG microservices, and enterprise SQL pipelines.
          </p>
        </div>

        {/* Code Box Shell */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-300 dark:border-white/10 shadow-2xl bg-slate-950 text-left">
          
          {/* Top Bar: macOS Dots & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10 gap-3">
            
            {/* Window Controls & Tabs */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1 sm:pb-0">
              <div className="flex items-center gap-1.5 mr-2 flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              <div className="flex items-center gap-1">
                {CODE_SNIPPETS.map((snip) => {
                  const isActive = snip.id === activeSnippetId;
                  return (
                    <button
                      key={snip.id}
                      onClick={() => handleTabClick(snip.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all ${
                        isActive
                          ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <FileCode className="w-3.5 h-3.5" />
                      <span>{snip.tabTitle}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Action: Copy & Runtime Meta */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-mono text-slate-400">
              <span className="hidden md:inline text-[11px] text-slate-400">
                {activeSnippet.runtime}
              </span>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white transition-colors text-xs"
                title="Copy code to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Subheader: Description */}
          <div className="px-5 py-2.5 bg-slate-900/50 border-b border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>
              <strong className="text-slate-300">File:</strong> {activeSnippet.filename}
            </span>
            <span className="text-slate-400 hidden sm:inline">
              {activeSnippet.summary}
            </span>
          </div>

          {/* Code Body with Line Numbers */}
          <div className="p-4 sm:p-6 overflow-x-auto max-h-[500px] font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
            <pre className="flex">
              {/* Line Numbers */}
              <div className="select-none pr-4 text-slate-600 text-right border-r border-white/10 mr-4">
                {activeSnippet.code.split('\n').map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Code Content */}
              <code className="flex-1 font-mono text-slate-200">
                {activeSnippet.code}
              </code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};
