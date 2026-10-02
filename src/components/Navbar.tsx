import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSound } from '../context/SoundContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Download, 
  Code2, 
  ExternalLink 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isMuted, toggleSound, triggerSound } = useSound();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#code-suite', label: 'Code' },
    { href: '#skills', label: 'Skills' },
    { href: '#playground', label: 'Playground' },
    { href: '#terminal', label: 'Terminal' },
    { href: '#certifications', label: 'Certs' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    triggerSound('tab');
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel py-3.5 shadow-card-dark dark:shadow-black/40 border-b border-white/5 dark:border-white/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Nithin Portfolio Home"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-600 to-neural-600 flex items-center justify-center font-mono font-bold text-white shadow-glow-cyan text-sm tracking-wider">
            N<span className="text-brand-300">.</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold tracking-tight text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-1.5">
              NITHIN<span className="text-brand-400">.DEV</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest hidden sm:inline">
              AI • Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-slate-200/50 dark:bg-white/[0.03] border border-slate-300/40 dark:border-white/[0.08] backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-500/20 text-brand-600 dark:text-brand-300 font-semibold shadow-sm border border-brand-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions (Sound, Theme, Resume, Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sound FX Toggle */}
          <button
            onClick={() => {
              toggleSound();
            }}
            className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/[0.05] border border-slate-300/40 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-brand-400 dark:hover:text-brand-300 transition-colors"
            title={isMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
            aria-label="Toggle Sound Effects"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-400" />}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={() => {
              triggerSound('click');
              toggleTheme();
            }}
            className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/[0.05] border border-slate-300/40 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download Resume Button */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => triggerSound('success')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-brand-500 to-neural-600 hover:from-brand-400 hover:to-neural-500 text-white shadow-glow-cyan transition-all transform active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              triggerSound('click');
              setMobileMenuOpen(prev => !prev);
            }}
            className="lg:hidden p-2 rounded-lg bg-slate-200/60 dark:bg-white/[0.05] border border-slate-300/40 dark:border-white/[0.08] text-slate-800 dark:text-slate-200"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-white/10 mt-3 px-4 py-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-brand-500/20 text-brand-400 font-semibold border border-brand-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSound('success')}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-500 to-neural-600 text-white shadow-glow-cyan"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (Google Drive)</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-200/50 dark:bg-white/[0.04] border border-slate-300/40 dark:border-white/[0.08]"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>GitHub Profile (@Nithinreddy44)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
