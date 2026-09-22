export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  techStack: string[];
  keyFeatures: string[];
  systemHighlights: {
    title: string;
    detail: string;
  }[];
  interactiveDemoType?: 'voter-system' | 'genai-explorer';
  codeSnippet?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    note: string;
  }[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  identifier: string;
  isPrimary?: boolean;
}
