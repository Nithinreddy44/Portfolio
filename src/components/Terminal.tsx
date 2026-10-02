import React, { useState, useRef, useEffect } from 'react';
import { useSound } from '../context/SoundContext';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, CERTIFICATIONS } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'error';
  content: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const { triggerSound } = useSound();
  const [inputVal, setInputVal] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'system',
      content: 'Antigravity Kernel v2.4 initialized. Loaded modules: PyTorch 2.2, FastAPI, Next.js, CUDA.'
    },
    {
      id: 'init-2',
      type: 'system',
      content: 'Type \'help\' or click command chips below to inspect engineering diagnostics.'
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    triggerSound('terminal');

    // Add User Input Line
    const inputLine: TerminalLine = {
      id: `in-${Date.now()}`,
      type: 'input',
      content: (
        <span className="flex items-center gap-2">
          <span className="text-brand-400 font-bold">nithin@portfolio:~$</span>
          <span className="text-slate-100">{cmd}</span>
        </span>
      )
    };

    let outputContent: React.ReactNode = null;
    let lineType: 'output' | 'error' = 'output';

    switch (trimmed) {
      case 'help':
        outputContent = (
          <div className="space-y-1 text-slate-300">
            <div className="text-brand-400 font-bold">Available System Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 pl-2">
              <div><strong className="text-amber-400">about</strong> : Candidate profile & education</div>
              <div><strong className="text-amber-400">skills</strong> : Categorized technical competencies</div>
              <div><strong className="text-amber-400">projects</strong> : Curated engineering case studies</div>
              <div><strong className="text-amber-400">experience</strong> : Internships & verified tracks</div>
              <div><strong className="text-amber-400">certs</strong> : Industry certifications & drive vault</div>
              <div><strong className="text-amber-400">resume</strong> : View / Download candidate resume PDF</div>
              <div><strong className="text-amber-400">contact</strong> : Direct recruiter channels</div>
              <div><strong className="text-amber-400">github</strong> : Open GitHub profile (@Nithinreddy44)</div>
              <div><strong className="text-amber-400">clear</strong> : Reset terminal output</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputContent = (
          <div className="space-y-1 text-slate-300">
            <div className="font-bold text-brand-400">{PERSONAL_INFO.name}</div>
            <div className="text-slate-400">{PERSONAL_INFO.role}</div>
            <div className="text-slate-300 mt-1">Education: B.E. Computer Science & Engineering (2022-2026)</div>
            <div className="text-slate-400">Institution: Saveetha School of Engineering, Chennai</div>
            <div className="text-slate-400">Focus: AI, Machine Learning, Deep Neural Networks & Full-Stack Web Systems</div>
          </div>
        );
        break;

      case 'skills':
      case 'stack':
        outputContent = (
          <div className="space-y-1 text-slate-300">
            <div className="text-brand-400 font-bold">Technical Competency Stack:</div>
            <div>• <strong className="text-emerald-400">AI / ML:</strong> PyTorch, Scikit-Learn, XGBoost, LangChain, RAG, OpenAI API</div>
            <div>• <strong className="text-cyan-400">Backend:</strong> Python (FastAPI), Java (Spring Boot), Node.js, REST APIs</div>
            <div>• <strong className="text-neural-400">Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS, Three.js / WebGL</div>
            <div>• <strong className="text-amber-400">Databases:</strong> MySQL 8.0, PostgreSQL, Pinecone, ChromaDB, SQLite</div>
            <div>• <strong className="text-rose-400">Tools:</strong> Git, Docker, Linux/Unix CLI, VS Code</div>
          </div>
        );
        break;

      case 'projects':
      case 'repos':
        outputContent = (
          <div className="space-y-2 text-slate-300">
            <div className="text-brand-400 font-bold">Curated Engineering Case Studies:</div>
            {PROJECTS.slice(0, 5).map((p, idx) => (
              <div key={idx} className="pl-2 border-l border-brand-500/30">
                <span className="font-bold text-slate-100">{idx + 1}. {p.title}</span>
                <div className="text-[11px] text-slate-400">{p.tagline}</div>
                <div className="text-[10px] text-brand-300 font-mono">Tech: {p.technologies.slice(0, 4).join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputContent = (
          <div className="space-y-2 text-slate-300">
            <div className="text-brand-400 font-bold">Verified Career & Internship Track:</div>
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="pl-2 border-l border-brand-500/30">
                <span className="font-bold text-slate-100">{exp.role} @ {exp.company}</span>
                <span className="text-[11px] text-slate-400 block font-mono">{exp.period} • {exp.badge}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        outputContent = (
          <div className="space-y-1 text-slate-300">
            <div className="text-brand-400 font-bold">Verified Credentials:</div>
            {CERTIFICATIONS.map((c, idx) => (
              <div key={idx} className="pl-2">
                • <strong className="text-slate-100">{c.title}</strong> ({c.issuer}) — {c.issueDate}
              </div>
            ))}
            <div className="text-[11px] text-brand-300 mt-2">
              Drive Vault: {PERSONAL_INFO.resumeDriveUrl || PERSONAL_INFO.resumeUrl}
            </div>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
        window.open(PERSONAL_INFO.resumeUrl, '_blank');
        outputContent = (
          <div className="space-y-1 text-slate-300">
            <div className="text-brand-400 font-bold">Resume Document:</div>
            <div className="text-emerald-400">Opening resume PDF in new tab...</div>
            <div>• Direct Link: <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-brand-300 underline">/resume.pdf</a></div>
            {PERSONAL_INFO.resumeDriveUrl && (
              <div>• Drive Archive: <a href={PERSONAL_INFO.resumeDriveUrl} target="_blank" rel="noopener noreferrer" className="text-brand-300 underline">Google Drive Vault</a></div>
            )}
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-1 text-slate-300">
            <div className="text-brand-400 font-bold">Recruiter Contact Direct Channels:</div>
            <div>• Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-brand-300 underline">{PERSONAL_INFO.email}</a></div>
            <div>• Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-brand-300 underline">{PERSONAL_INFO.phone}</a></div>
            <div>• Location: {PERSONAL_INFO.location}</div>
            <div>• LinkedIn: {PERSONAL_INFO.linkedinUrl}</div>
          </div>
        );
        break;

      case 'github':
        window.open(PERSONAL_INFO.githubUrl, '_blank');
        outputContent = (
          <div className="text-emerald-400">
            Opening GitHub profile: {PERSONAL_INFO.githubUrl}...
          </div>
        );
        break;

      case 'linkedin':
        window.open(PERSONAL_INFO.linkedinUrl, '_blank');
        outputContent = (
          <div className="text-emerald-400">
            Opening LinkedIn profile: {PERSONAL_INFO.linkedinUrl}...
          </div>
        );
        break;

      case 'clear':
        setLines([]);
        setInputVal('');
        return;

      case 'whoami':
      case 'user':
        outputContent = <div>nithin_guest_recruiter (Role: Technical Reviewer, Permissions: Read-Only)</div>;
        break;

      case 'sudo':
        outputContent = <div className="text-amber-400">User is not in the sudoers file. This incident will be reported to Kamireddy Nithin Kumar Reddy.</div>;
        break;

      default:
        lineType = 'error';
        outputContent = (
          <div className="text-rose-400">
            Command not recognized: '{cmd}'. Type <strong className="text-amber-400 underline cursor-pointer" onClick={() => handleCommand('help')}>'help'</strong> to see available commands.
          </div>
        );
        break;
    }

    setLines(prev => [
      ...prev,
      inputLine,
      { id: `out-${Date.now()}`, type: lineType, content: outputContent }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  const commandChips = ['help', 'about', 'skills', 'projects', 'experience', 'certs', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>07 // DEVELOPER CLI SHELL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Interactive Developer <span className="gradient-text">Terminal</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Query background metrics, repositories, skills, and contact details directly through the CLI interface.
          </p>
        </div>

        {/* Terminal Box Shell */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-300 dark:border-white/10 shadow-2xl bg-slate-950 text-left font-mono">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 ml-2 font-mono hidden sm:inline">
                nithin@ai-lab-workstation: ~ (zsh)
              </span>
            </div>
            <button
              onClick={() => {
                triggerSound('click');
                setLines([]);
              }}
              className="p-1 text-slate-400 hover:text-slate-200"
              title="Clear Terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Terminal Logs View */}
          <div className="p-4 sm:p-6 max-h-[380px] overflow-y-auto space-y-3 text-xs sm:text-sm text-slate-300">
            {lines.map((line) => (
              <div key={line.id} className="leading-relaxed">
                {line.content}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Chips */}
          <div className="px-4 py-2 bg-slate-900/60 border-t border-white/5 flex flex-wrap gap-1.5">
            <span className="text-[11px] text-slate-500 py-1 mr-1">Quick Run:</span>
            {commandChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleCommand(chip)}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/5 hover:bg-white/10 text-brand-300 border border-white/5 transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Prompt Row */}
          <div className="p-4 bg-slate-900 border-t border-white/10 flex items-center gap-2">
            <span className="text-brand-400 font-bold text-xs sm:text-sm flex-shrink-0">
              nithin@portfolio:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'skills', 'projects'..."
              className="flex-1 bg-transparent text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="p-1.5 rounded bg-brand-500/20 text-brand-300 hover:bg-brand-500/30"
              aria-label="Send command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
