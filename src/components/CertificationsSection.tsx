import React, { useState } from 'react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import type { Certification } from '../types';
import { useSound } from '../context/SoundContext';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  Building2, 
  Terminal, 
  FolderOpen 
} from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { triggerSound } = useSound();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleCertClick = (cert: Certification) => {
    triggerSound('modal');
    setSelectedCert(cert);
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-slate-100/40 dark:bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>08 // INDUSTRY CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Verified Credentials & <span className="gradient-text">Engineering Certifications</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Certified tracks and simulation achievements backed by verified certificates in the Google Drive credential vault.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onClick={() => handleCertClick(cert)}
              className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/5 hover:border-brand-400/40 cursor-pointer transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-700 dark:text-brand-300 font-semibold">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white group-hover:text-brand-400 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                  <Building2 className="w-3 h-3 text-brand-400" />
                  <span>{cert.issuer}</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.issueDate}</span>
                </span>

                <span className="font-semibold text-brand-500 dark:text-brand-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[11px]">
                  <span>Details</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Access Full Drive Vault Banner */}
        <div className="mt-12 text-center">
          <a
            href={PERSONAL_INFO.resumeDriveUrl || PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => triggerSound('success')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-slate-200/80 dark:bg-white/[0.05] hover:bg-slate-300/80 dark:hover:bg-white/[0.1] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white transition-all transform hover:-translate-y-0.5 shadow-sm"
          >
            <FolderOpen className="w-4 h-4 text-brand-400" />
            <span>Open Complete Google Drive Certificate & Resume Vault</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>

      {/* Certification Details Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => {
            triggerSound('click');
            setSelectedCert(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-brand-500/15 text-brand-400 border border-brand-500/30">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-400">
                  {selectedCert.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  {selectedCert.title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-mono mb-4">
              Issuer: <strong className="text-white">{selectedCert.issuer}</strong> • Date: {selectedCert.issueDate}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {selectedCert.description}
            </p>

            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Demonstrated Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-300 border border-brand-500/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  triggerSound('click');
                  setSelectedCert(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Close
              </button>
              <a
                href={selectedCert.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSound('success')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-500 text-white hover:bg-brand-400 transition-colors shadow-glow-cyan"
              >
                <span>View Certificate PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
