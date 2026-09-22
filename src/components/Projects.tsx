import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Code2,
  Play,
  CheckCircle,
  XCircle,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Search,
  RefreshCw,
  Terminal,
  AlertCircle
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<string>('voter-id-system');
  const [demoMode, setDemoMode] = useState<'overview' | 'simulator' | 'code'>('overview');

  // --- Voter ID System Simulator State ---
  const [voterName, setVoterName] = useState('Ananya Sharma');
  const [voterAge, setVoterAge] = useState(21);
  const [voterConstituency, setVoterConstituency] = useState('Central District (CD-01)');
  const [voterLog, setVoterLog] = useState<{
    id: string;
    name: string;
    age: number;
    constituency: string;
    status: 'APPROVED' | 'REJECTED';
    reason?: string;
    timestamp: string;
  }[]>([
    {
      id: 'IND-CD-1001',
      name: 'Rahul Verma',
      age: 24,
      constituency: 'Central District (CD-01)',
      status: 'APPROVED',
      timestamp: '10:14 AM',
    },
    {
      id: 'REJ-9021',
      name: 'Pooja Nair',
      age: 16,
      constituency: 'South Ward (SW-04)',
      status: 'REJECTED',
      reason: 'Underage (16 < 18 legal threshold)',
      timestamp: '10:22 AM',
    },
  ]);
  const [lastIssuedCard, setLastIssuedCard] = useState<{
    id: string;
    name: string;
    age: number;
    constituency: string;
    status: 'APPROVED' | 'REJECTED';
    reason?: string;
  } | null>(null);

  // --- GenAI Explorer State ---
  const [selectedPromptCategory, setSelectedPromptCategory] = useState<
    'reasoning' | 'code_gen' | 'deep_tech'
  >('reasoning');
  const [isSimulatingGenAI, setIsSimulatingGenAI] = useState(false);
  const [genAiOutput, setGenAiOutput] = useState<string | null>(null);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectTab) || PROJECTS[0];

  const handleRegisterVoter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!voterName.trim()) return;

    const isEligible = voterAge >= 18;
    const constCode = voterConstituency.split('(')[1]?.replace(')', '').trim() || 'REG';
    const newId = isEligible
      ? `IND-${constCode.slice(0, 2)}-${Math.floor(1000 + Math.random() * 9000)}`
      : `REJ-${Math.floor(1000 + Math.random() * 9000)}`;

    const newRecord = {
      id: newId,
      name: voterName.trim(),
      age: Number(voterAge),
      constituency: voterConstituency,
      status: isEligible ? ('APPROVED' as const) : ('REJECTED' as const),
      reason: isEligible ? undefined : `Eligibility criteria failed: Applicant age is ${voterAge} (must be >= 18).`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setVoterLog([newRecord, ...voterLog.slice(0, 5)]);
    setLastIssuedCard(newRecord);
  };

  const handleSimulateGenAI = (category: 'reasoning' | 'code_gen' | 'deep_tech') => {
    setSelectedPromptCategory(category);
    setIsSimulatingGenAI(true);
    setGenAiOutput(null);

    setTimeout(() => {
      if (category === 'reasoning') {
        setGenAiOutput(
          `[Prompt Engineering - Structured Reasoning Matrix]\n` +
          `Task: Deconstruct Verification Pipeline for High Integrity Systems\n\n` +
          `1. Input Normalization: Strip non-standard Unicode, validate name phonetics.\n` +
          `2. Legal Age Constraint: Strict integer boundary enforcement (age >= 18).\n` +
          `3. Hash Collision Mitigation: Alphanumeric UUID generation combined with geographical constituency codes.\n` +
          `4. Idempotency Check: Secondary lookup against unique electoral register.\n\n` +
          `>>> Conclusion: Deterministic logic ensures 0 duplicate records and 100% legal eligibility.`
        );
      } else if (category === 'code_gen') {
        setGenAiOutput(
          `[Deep Tech Exploration - Transformer Attention Latency]\n` +
          `Context: Investigating model execution efficiency for edge devices.\n\n` +
          `• Attention Complexity: O(N²) standard self-attention.\n` +
          `• Optimization Trajectory: FlashAttention and quantized KV-cache.\n` +
          `• Practical Implementation: Integrating quantized Python inference pipelines to run lightweight LLMs locally.`
        );
      } else {
        setGenAiOutput(
          `[GenAI Architecture Prototyping]\n` +
          `Pipeline: System Prompt -> Retrieval Context -> Reasoning Chain -> Output Validator\n\n` +
          `• Evaluation: Guardrails applied on output format to avoid schema drifts.\n` +
          `• Result: Structured JSON payload with verifiable confidence scores ready for Python backend ingestion.`
        );
      }
      setIsSimulatingGenAI(false);
    }, 500);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical systems and exploratory deep tech initiatives engineered with Python and Generative AI.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {PROJECTS.map((proj) => {
            const isSelected = activeProjectTab === proj.id;
            return (
              <button
                key={proj.id}
                id={`project-tab-${proj.id}`}
                type="button"
                onClick={() => {
                  setActiveProjectTab(proj.id);
                  setDemoMode('overview');
                }}
                className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {proj.id === 'voter-id-system' ? (
                  <ShieldCheck className={`w-4 h-4 ${isSelected ? 'text-slate-950' : 'text-cyan-400'}`} />
                ) : (
                  <Sparkles className={`w-4 h-4 ${isSelected ? 'text-slate-950' : 'text-cyan-400'}`} />
                )}
                <span>{proj.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Card Container */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-2xl shadow-cyan-950/20">
          
          {/* Card Top Navigation: Overview / Interactive Simulator / View Code */}
          <div className="px-6 py-4 bg-[#0a0e1a] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400 block font-mono">
                {activeProject.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                {activeProject.title}
              </h3>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-lg border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setDemoMode('overview')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                  demoMode === 'overview'
                    ? 'bg-cyan-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Project Overview
              </button>
              <button
                type="button"
                onClick={() => setDemoMode('simulator')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                  demoMode === 'simulator'
                    ? 'bg-cyan-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Interactive Simulator</span>
              </button>
              <button
                type="button"
                onClick={() => setDemoMode('code')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                  demoMode === 'code'
                    ? 'bg-cyan-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Python Code</span>
              </button>
            </div>
          </div>

          {/* Mode 1: Project Overview */}
          {demoMode === 'overview' && (
            <div className="p-6 sm:p-8 space-y-8 animate-fadeIn">
              {/* Description */}
              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider font-semibold text-slate-400">
                  Project Description
                </h4>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider font-semibold text-slate-400">
                  Tech Stack & Implementation
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="space-y-3">
                <h4 className="text-sm uppercase tracking-wider font-semibold text-slate-400">
                  Core Engineering Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {activeProject.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                {activeProject.systemHighlights.map((hl, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#0a0f1c] border border-slate-800/80">
                    <h5 className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-1">
                      {hl.title}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {hl.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setDemoMode('simulator')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shadow-md shadow-cyan-500/20"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Simulator</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDemoMode('code')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-colors"
                >
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>Inspect Implementation</span>
                </button>

                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs border border-slate-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          )}

          {/* Mode 2: Interactive Simulator */}
          {demoMode === 'simulator' && (
            <div className="p-6 sm:p-8 animate-fadeIn">
              {activeProject.id === 'voter-id-system' ? (
                /* Voter ID System Live Demo */
                <div className="space-y-8">
                  <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-300 flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Interactive Verification Simulator</strong>
                      Test the Python verification engine in real-time. Enter details to test voter eligibility (age &gt;= 18 threshold), automated alphanumeric identification generation, and audit logging.
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Verification Form */}
                    <div className="lg:col-span-6 bg-[#0a0f1d] rounded-xl p-5 border border-slate-800 space-y-4">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span>Voter Registration & Verification Form</span>
                      </h4>

                      <form onSubmit={handleRegisterVoter} className="space-y-4 text-xs">
                        <div>
                          <label className="block text-slate-400 font-medium mb-1">
                            Applicant Full Name
                          </label>
                          <input
                            type="text"
                            value={voterName}
                            onChange={(e) => setVoterName(e.target.value)}
                            required
                            placeholder="e.g. JVR Jagadeesh"
                            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-slate-400 font-medium mb-1">
                              Age (Eligibility &gt;= 18)
                            </label>
                            <input
                              type="number"
                              min="1"
                              max="120"
                              value={voterAge}
                              onChange={(e) => setVoterAge(parseInt(e.target.value) || 0)}
                              required
                              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-500 font-mono"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-400 font-medium mb-1">
                              Constituency Zone
                            </label>
                            <select
                              value={voterConstituency}
                              onChange={(e) => setVoterConstituency(e.target.value)}
                              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-500"
                            >
                              <option value="Central District (CD-01)">Central District (CD-01)</option>
                              <option value="North Ward (NW-02)">North Ward (NW-02)</option>
                              <option value="South Ward (SW-04)">South Ward (SW-04)</option>
                              <option value="East Zone (EZ-09)">East Zone (EZ-09)</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 active:scale-95"
                        >
                          <ShieldCheck className="w-4 h-4" />
                          <span>Verify & Issue Voter Card</span>
                        </button>
                      </form>
                    </div>

                    {/* Issued Card / Verification Status */}
                    <div className="lg:col-span-6 space-y-4">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>Issued Voter Card Verification Preview</span>
                      </h4>

                      {lastIssuedCard ? (
                        <div
                          className={`rounded-xl p-5 border transition-all ${
                            lastIssuedCard.status === 'APPROVED'
                              ? 'bg-gradient-to-br from-slate-900 via-[#0b1b2b] to-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-950/40'
                              : 'bg-rose-950/20 border-rose-800/60'
                          }`}
                        >
                          <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                              <span className="text-xs font-bold text-slate-200 tracking-wider">
                                ELECTION VERIFICATION AUTHORITY
                              </span>
                            </div>
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                                lastIssuedCard.status === 'APPROVED'
                                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                                  : 'bg-rose-950 text-rose-300 border border-rose-800'
                              }`}
                            >
                              {lastIssuedCard.status}
                            </span>
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span className="text-slate-400">System Voter ID:</span>
                              <span className="font-mono font-bold text-cyan-300">
                                {lastIssuedCard.id}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Elector Name:</span>
                              <span className="font-semibold text-white">
                                {lastIssuedCard.name}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Recorded Age:</span>
                              <span className="text-slate-200 font-mono">
                                {lastIssuedCard.age} yrs
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Constituency:</span>
                              <span className="text-slate-200">
                                {lastIssuedCard.constituency}
                              </span>
                            </div>
                            {lastIssuedCard.reason && (
                              <div className="pt-2 text-rose-400 text-[11px] font-medium border-t border-rose-900/40">
                                ⚠ {lastIssuedCard.reason}
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="p-8 rounded-xl bg-slate-950/60 border border-dashed border-slate-800 text-center text-xs text-slate-500">
                          Submit the form to simulate the Python verification pipeline and view the generated voter credentials.
                        </div>
                      )}

                      {/* Audit Log */}
                      <div className="rounded-xl bg-[#090d18] border border-slate-800/80 p-3.5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
                          <span>SYSTEM AUDIT LOG (RECENT SESSIONS)</span>
                          <span className="text-cyan-400">Memory Database</span>
                        </div>
                        <div className="space-y-1.5 text-xs font-mono">
                          {voterLog.map((log, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-1.5 rounded bg-slate-900/80 text-[11px]"
                            >
                              <span className="text-slate-300 truncate max-w-[130px]">
                                {log.name} ({log.age}y)
                              </span>
                              <span className="text-slate-400">{log.id}</span>
                              <span
                                className={`text-[10px] font-bold ${
                                  log.status === 'APPROVED' ? 'text-emerald-400' : 'text-rose-400'
                                }`}
                              >
                                {log.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* GenAI Explorer Interactive Simulator */
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-300 flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">GenAI Prompt & Deep Tech Reasoning Playground</strong>
                      Experience the methodology JVR Jagadeesh applies to formulate structured prompts, analyze transformer reasoning paths, and integrate intelligent automation layers.
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => handleSimulateGenAI('reasoning')}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                        selectedPromptCategory === 'reasoning'
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      System Verification Chain
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSimulateGenAI('code_gen')}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                        selectedPromptCategory === 'code_gen'
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Attention & Latency Benchmarks
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSimulateGenAI('deep_tech')}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                        selectedPromptCategory === 'deep_tech'
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Structured GenAI Pipeline
                    </button>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-line min-h-[220px]">
                    {isSimulatingGenAI ? (
                      <div className="flex items-center gap-2 text-cyan-400">
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Synthesizing structured deep tech reasoning...</span>
                      </div>
                    ) : genAiOutput ? (
                      genAiOutput
                    ) : (
                      <div className="text-slate-500">
                        Click one of the prompt scenarios above to test the Generative AI & Deep Tech reasoning workflow.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mode 3: View Code */}
          {demoMode === 'code' && (
            <div className="p-6 sm:p-8 animate-fadeIn">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span>{activeProject.id}.py (Python Core Implementation)</span>
                </div>
                <span className="text-[11px] text-slate-500">Python 3.11</span>
              </div>

              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                <pre>{activeProject.codeSnippet}</pre>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
