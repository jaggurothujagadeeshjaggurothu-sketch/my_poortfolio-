import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Opportunity / Collaboration Inquiry');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-compose mailto URL
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Hi JVR Jagadeesh,\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & Social Links
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Open to internships, research collaborations, and entry-level deep tech opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Let&apos;s Connect</span>
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you have an internship opening, a question about my Voter ID system, or want to discuss Generative AI and deep tech developments, I would love to hear from you.
              </p>

              {/* Verified Contact Methods */}
              <div className="space-y-3.5">
                
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-[#0a0f1d] border border-slate-800/90 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      Email Address
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                      Direct
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-mono text-white truncate max-w-[240px] sm:max-w-[280px]">
                      {PERSONAL_INFO.email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* GitHub Box */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#0a0f1d] border border-slate-800/90 hover:border-cyan-500/40 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">GitHub Profile</div>
                      <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors font-mono">
                        jaggurothujagadeeshjaggurothu-sketch
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* LinkedIn Box */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#0a0f1d] border border-slate-800/90 hover:border-cyan-500/40 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">LinkedIn Profile</div>
                      <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors font-mono">
                        jvr-jagadeesh-20b776415
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out this quick form to contact JVR Jagadeesh directly via email.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/40 border border-cyan-800/60 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Opening Email Client...</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your email client will open with your message addressed to <span className="font-mono text-cyan-300">{PERSONAL_INFO.email}</span>. You can also copy the email directly from the panel.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs text-cyan-400 hover:underline font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Recruiters / Team Lead"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi JVR Jagadeesh, we saw your portfolio and would like to connect regarding an opportunity in deep tech / software development..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
