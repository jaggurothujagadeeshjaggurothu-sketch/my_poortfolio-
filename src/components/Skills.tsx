import React, { useState } from 'react';
import { Code, Cpu, Zap, CheckCircle2, ChevronRight, Sparkles, Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Skills & Expertise
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A structured toolkit blending foundational Python engineering, Generative AI principles, and system design logic.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Skills ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-950/20 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    {category.skills.length} core competencies
                  </span>
                </div>
              </div>

              {/* Category Description */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                {category.description}
              </p>

              {/* Skills Badge & Details List */}
              <div className="space-y-4 mt-auto">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-[#090d18] border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-semibold text-sm text-slate-100 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 shrink-0">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[12px] text-slate-400 leading-snug pl-5">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Competency Statement Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0b1324] to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                Practical Execution Over Passive Theory
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Each skill is reinforced with real application projects, such as end-to-end Python system development.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-950/50 hover:bg-cyan-950/80 border border-cyan-800/60 shrink-0 transition-colors"
          >
            <span>See Project Implementations</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
