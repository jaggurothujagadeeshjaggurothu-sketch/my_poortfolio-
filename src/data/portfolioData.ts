import { ProjectItem, SkillCategory, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'JVR Jagadeesh',
  initials: 'JJ',
  status: 'First-Year Student',
  tagline: 'Continuous Learner & Deep Tech Aspirant',
  subtitle: 'First-Year Student & Deep Tech Enthusiast',
  targetRole: 'Seeking opportunities/roles in Advanced Technology & Deep Tech',
  shortIntro:
    'A highly motivated learner exploring advanced technology, Python development, and Generative AI to build impactful software solutions.',
  aboutDetailed:
    'From day one of college, my obsession has been clear: immerse myself in the frontiers of deep technology rather than waiting for future semesters. I focus intensely on rigorous logic building, hands-on Python engineering, and deciphering modern Generative AI architectures. My ambition is to craft scalable, practical systems that solve real-world problems through disciplined engineering and rapid prototyping.',
  email: 'jaggurothujagadeeshjaggurothu@gmail.com',
  github: 'https://github.com/jaggurothujagadeeshjaggurothu-sketch',
  linkedin: 'https://www.linkedin.com/in/jvr-jagadeesh-20b776415/',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    url: PERSONAL_INFO.github,
    icon: 'Github',
    identifier: 'jaggurothujagadeeshjaggurothu-sketch',
  },
  {
    label: 'LinkedIn',
    url: PERSONAL_INFO.linkedin,
    icon: 'Linkedin',
    identifier: 'jvr-jagadeesh-20b776415',
    isPrimary: true,
  },
  {
    label: 'Email',
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: 'Mail',
    identifier: PERSONAL_INFO.email,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    description: 'Foundational syntax, object-oriented design, and practical script development.',
    iconName: 'Code',
    skills: [
      {
        name: 'Python',
        level: 'Primary Focus',
        note: 'Voter ID systems, data structures, algorithm design, automation & modular scripting',
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        level: 'Core Concept',
        note: 'Class architecture, modular code separation, inheritance & clean abstractions',
      },
      {
        name: 'Data Handling & File I/O',
        level: 'Applied',
        note: 'File-based records, CSV/JSON manipulation, input sanitization and verification logic',
      },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Exploration of generative models, prompt engineering, and intelligent application layers.',
    iconName: 'Cpu',
    skills: [
      {
        name: 'Generative AI (GenAI)',
        level: 'Actively Exploring',
        note: 'Concepts, transformer architectures, tokenization, contextual generation & capabilities',
      },
      {
        name: 'Prompt Engineering & LLMs',
        level: 'Hands-on Practice',
        note: 'System prompts, few-shot prompting, structured outputs, chain-of-thought workflows',
      },
      {
        name: 'Deep Tech Applied Experiments',
        level: 'Research & Prototyping',
        note: 'Investigating emerging deep tech frontiers, AI safety, and agentic workflows',
      },
    ],
  },
  {
    id: 'core-competencies',
    title: 'Core Competencies',
    description: 'Foundational problem-solving mindset and software engineering practices.',
    iconName: 'Zap',
    skills: [
      {
        name: 'System Design Basics',
        level: 'Architectural Thinking',
        note: 'State flow modeling, data validation pipelines, modular component boundaries',
      },
      {
        name: 'Logic Building & Algorithms',
        level: 'Daily Discipline',
        note: 'Algorithmic problem solving, edge-case analysis, computational reasoning',
      },
      {
        name: 'Rapid Prototyping',
        level: 'Practical Execution',
        note: 'Translating concepts into functional working code with speed and iterative precision',
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'voter-id-system',
    title: 'Voter ID System',
    category: 'Python Application & Verification System',
    tagline: 'Automated voter identification, verification, and records management pipeline in Python.',
    description:
      'Developed a Python-based system for managing voter identification and verification processes. Engineered custom verification algorithms, age boundary constraints (>= 18), unique registration number generators, duplicate identity prevention, and structured record storage.',
    techStack: ['Python', 'System Logic', 'Data Verification', 'File I/O', 'Algorithm Design'],
    keyFeatures: [
      'Comprehensive voter eligibility verification (strict >= 18 age validation & legal criteria)',
      'Deterministic Unique Voter ID (EPIC) generation algorithm with collision prevention',
      'Instant query & search pipeline by Voter ID, applicant name, or constituency region',
      'Audit log and duplicate identity prevention system ensuring election integrity',
      'Robust error-handling routines for corrupt or invalid user inputs',
    ],
    systemHighlights: [
      {
        title: 'Verification Logic',
        detail: 'Multi-stage validation ensuring valid age calculation, non-empty demographic fields, and duplicate prevention.',
      },
      {
        title: 'ID Generation',
        detail: 'Formatted alphanumeric identification string combining constituency code, year, and sequential hash.',
      },
      {
        title: 'Data Store',
        detail: 'Clean serializable records structure with search, update, and export capabilities.',
      },
    ],
    interactiveDemoType: 'voter-system',
    githubUrl: 'https://github.com/jaggurothujagadeeshjaggurothu-sketch',
    codeSnippet: `class VoterIDSystem:
    def __init__(self):
        self.voters = {}
        
    def register_voter(self, name: str, age: int, constituency: str) -> dict:
        if age < 18:
            return {"status": "REJECTED", "reason": "Applicant must be >= 18 years old"}
            
        voter_id = f"IND-{constituency[:3].upper()}-{len(self.voters) + 1001}"
        record = {
            "voter_id": voter_id,
            "name": name.strip().title(),
            "age": age,
            "constituency": constituency,
            "verified": True
        }
        self.voters[voter_id] = record
        return {"status": "APPROVED", "record": record}`,
  },
  {
    id: 'genai-deep-tech',
    title: 'Generative AI & Deep Tech Projects',
    category: 'GenAI & Emerging Technology',
    tagline: 'Hands-on exploration of GenAI models, prompt architecture, and advanced tech applications.',
    description:
      'Hands-on exploration of GenAI models and advanced technology applications. Investigating how foundational models, structured reasoning prompts, and intelligent pipelines can be harnessed to automate complex knowledge tasks and build next-generation software prototypes.',
    techStack: ['Generative AI', 'Python', 'Prompt Architecture', 'Deep Tech', 'LLM Workflows'],
    keyFeatures: [
      'Structured prompt engineering methodologies for deterministic output synthesis',
      'Exploration of transformer attention mechanisms, token embeddings, and model latency',
      'Designing domain-specific reasoning chains for automated problem breakdown',
      'Prototyping practical AI utilities combining Python scripts with GenAI capabilities',
      'Continuous tracking and benchmark experiments across contemporary deep tech paradigms',
    ],
    systemHighlights: [
      {
        title: 'Prompt Architecture',
        detail: 'Zero-shot and few-shot reasoning patterns tailored for consistent and structured responses.',
      },
      {
        title: 'Deep Tech Roadmap',
        detail: 'Synthesizing knowledge from foundational computer science into cutting-edge AI developments.',
      },
      {
        title: 'Application Layer',
        detail: 'Connecting Python automation scripts with AI generation endpoints for end-to-end solutions.',
      },
    ],
    interactiveDemoType: 'genai-explorer',
    githubUrl: 'https://github.com/jaggurothujagadeeshjaggurothu-sketch',
    codeSnippet: `# Deep Tech & GenAI Experiment Pipeline
def synthesize_reasoning(task_prompt: str, context: str) -> dict:
    """Demonstrates structured prompting pipeline for deep tech analysis."""
    structured_instruction = {
        "role": "Deep Tech Reasoning Engine",
        "task": task_prompt,
        "constraints": ["No hallucinations", "Step-by-step logic", "Executable Python"],
        "context": context
    }
    return {
        "status": "Ready",
        "pipeline": "Input Sanitization -> Chain-of-Thought -> Verified Output",
        "framework": "Modern GenAI Architecture"
    }`,
  },
];

export const CORE_STRENGTHS = [
  {
    title: 'Fast Learner',
    description: 'Rapidly absorbing advanced computer science topics, modern frameworks, and deep tech concepts since day one.',
    icon: 'Sparkles',
  },
  {
    title: 'Deep Tech Passion',
    description: 'Driven by curiosity for AI architectures, scalable software foundations, and frontier technologies.',
    icon: 'Atom',
  },
  {
    title: 'Practical Engineering',
    description: 'Committed to writing real, working code rather than passive theory—exemplified by hands-on Python projects.',
    icon: 'Terminal',
  },
  {
    title: 'Logic & Problem Solving',
    description: 'Breaking down complex challenges into robust algorithmic steps, clean boundaries, and edge-case handling.',
    icon: 'ShieldCheck',
  },
];
