import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';
import { LinkedinIcon, GithubIcon } from './Icons';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Download, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { triggerSound } = useSound();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    triggerSound('success');
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSound('click');
    setStatus('sending');

    // Simulate reliable dispatch with mailto fallback
    setTimeout(() => {
      setStatus('success');
      triggerSound('success');

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {}

      // Open email client safely with pre-filled content
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Opportunity Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
      window.location.href = mailtoUrl;

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-slate-100/50 dark:bg-dark-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>10 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Let's Build <span className="gradient-text">Something Meaningful</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            I'm actively open to opportunities in software engineering, full-stack development, AI engineering, and technical team roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* LEFT: Contact Details & Direct Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/5 space-y-6">
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                Direct Contact Channels
              </h3>

              {/* Email Item with Quick Copy */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-500 dark:text-brand-400 border border-brand-500/20 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-400 truncate block mt-0.5"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="mt-1.5 inline-flex items-center gap-1 text-xs text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Phone / WhatsApp</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-mono text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-400 block mt-0.5"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 dark:text-rose-400 border border-rose-500/20 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Location</div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Quick Resume Vault Link */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => triggerSound('success')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-500 to-neural-600 hover:from-brand-400 hover:to-neural-500 text-white shadow-glow-cyan transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>

            {/* Social Network Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSound('click')}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-white hover:border-brand-400/50 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-brand-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSound('click')}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl glass-card text-xs font-semibold text-slate-800 dark:text-white hover:border-brand-400/50 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* RIGHT: Recruiter Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/5 text-left">
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below to initiate contact or schedule a technical interview.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Your Name / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Technical Recruiter @ Company"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Project / Role Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your open opportunity or technical project inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-brand-500 to-neural-600 hover:from-brand-400 hover:to-neural-500 text-white shadow-glow-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <span>Sending Inquiry...</span>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Message Dispatched!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
