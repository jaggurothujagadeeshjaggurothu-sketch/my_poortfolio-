import React from 'react';
import { ArrowRight, Mail, CheckCircle2, Sparkles, Cpu, GraduationCap, Github, Linkedin, ExternalLink, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <header id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle tech background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle, Intro & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Status & Role Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-950/70 text-cyan-300 border border-cyan-800/60 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>{PERSONAL_INFO.status}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.tagline}</span>
              </span>
            </div>

            {/* Bold Heading & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hello, I&apos;m{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                {PERSONAL_INFO.subtitle}
              </p>
            </div>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.shortIntro}
            </p>

            {/* Target Role Highlight Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 flex items-start gap-3 text-sm">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block">
                  Target Role & Opportunities
                </span>
                <p className="text-slate-200 font-medium mt-0.5">
                  {PERSONAL_INFO.targetRole}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Key Skill Highlights Pills */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Python Development</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Generative AI Exploration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>System Logic & Prototyping</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Profile Spotlight Card (No code on board) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#090d18] border border-slate-800 p-6 sm:p-8 shadow-2xl shadow-cyan-950/20 space-y-6">
              
              {/* Header with Avatar & Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-cyan-500/25">
                    JJ
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs text-cyan-400 font-medium flex items-center gap-1 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{PERSONAL_INFO.status}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>

              {/* Bio Highlights / Quick Overview */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Primary Language</span>
                  <span className="text-cyan-400 font-semibold font-mono">Python</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Core Domain</span>
                  <span className="text-white font-medium">Generative AI & Deep Tech</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Key Project</span>
                  <span className="text-slate-200 font-medium">Voter ID System</span>
                </div>
              </div>

              {/* Strengths & Focus Badges */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Core Attributes
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    Fast Learner
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                    Deep Tech Enthusiast
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    Problem Solving
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    Practical Systems
                  </span>
                </div>
              </div>

              {/* Quick Connect Row */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  <span>Connect with Jagadeesh</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
