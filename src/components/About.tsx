import React from 'react';
import { Sparkles, Atom, Terminal, ShieldCheck, Target, Rocket, Lightbulb, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Atom,
      title: 'Deep Tech Passion',
      description:
        'Driven by an intense curiosity for the foundations of artificial intelligence, intelligent systems, and computational algorithms.',
    },
    {
      icon: Terminal,
      title: 'Hands-On Python Craft',
      description:
        'Believer in learning by coding. Developed custom systems like the Voter ID verification application to ground concepts into functioning software.',
    },
    {
      icon: Sparkles,
      title: 'GenAI & Future Tech',
      description:
        'Actively experimenting with Generative AI concepts, prompt architecture, and automated workflows to build next-generation tech tools.',
    },
    {
      icon: ShieldCheck,
      title: 'Logic & Problem Solving',
      description:
        'Tackling problems from first principles—breaking down intricate workflows into clean, reliable, and testable logic paths.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <Compass className="w-3.5 h-3.5" />
            <span>Philosophy & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A first-year student committed to continuous learning and pushing into deep tech boundaries from day one.
          </p>
        </div>

        {/* Narrative Feature Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 p-6 sm:p-8 md:p-10 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-white font-semibold">Starting from Day One:</strong> While many wait for higher semesters to explore cutting-edge engineering, my journey in technology began immediately. As a first-year student, I have dedicated myself to mastering the building blocks of <span className="text-cyan-400 font-medium">Python programming</span>, tackling system-level verification challenges, and deciphering <span className="text-cyan-400 font-medium">Generative AI</span> concepts.
              </p>
              
              <p>
                My educational approach is centered around <strong className="text-white font-semibold">practical implementation</strong>. Rather than memorizing syntax in isolation, I design and construct real tools—such as building a complete Voter ID verification system in Python—to encounter real-world edge cases, input validation hurdles, and data management workflows firsthand.
              </p>

              <p>
                I am actively seeking roles and internships in <strong className="text-white font-semibold">Advanced Technology & Deep Tech</strong> where I can channel my fast learning velocity, disciplined problem-solving mindset, and passion for emerging AI architectures into high-impact engineering teams.
              </p>
            </div>

            {/* Quick Metrics / Student Traits Box */}
            <div className="lg:col-span-4 bg-[#0a0e1a] rounded-xl p-5 border border-slate-800 space-y-4">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Student Highlights</span>
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start justify-between border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-400">Current Standing</span>
                  <span className="text-white font-medium text-right">First-Year Technology</span>
                </div>
                <div className="flex items-start justify-between border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-400">Primary Language</span>
                  <span className="text-cyan-400 font-mono font-medium">Python</span>
                </div>
                <div className="flex items-start justify-between border-b border-slate-800/80 pb-2.5">
                  <span className="text-slate-400">Focus Area</span>
                  <span className="text-white font-medium text-right">Generative AI & Deep Tech</span>
                </div>
                <div className="flex items-start justify-between pb-1">
                  <span className="text-slate-400">Target Role</span>
                  <span className="text-cyan-300 font-medium text-right">Deep Tech Trainee / Intern</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Rocket className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Connect for Opportunities</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
