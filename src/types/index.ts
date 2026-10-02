export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai-ml' | 'full-stack' | 'systems' | 'data';
  featured: boolean;
  stars?: number;
  problem: string;
  solution: string;
  architecture: string;
  architectureSteps?: {
    step: string;
    title: string;
    desc: string;
  }[];
  technologies: string[];
  keyFeatures: string[];
  engineeringChallenges: string[];
  results: string[];
  metrics?: {
    label: string;
    value: string;
    description: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
  badge?: string;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyType?: string;
  period: string;
  badge?: string;
  badgeType: 'active' | 'certified' | 'simulation' | 'internship';
  description: string;
  technologies: string[];
  contributions: string[];
  verifiedOutcome?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  proficiency: 'Production' | 'Advanced' | 'Proficient';
  context: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: 'Industry Certification' | 'Engineering Simulation' | 'Enterprise Track';
  badge: string;
  description: string;
  skills: string[];
  driveUrl: string;
  featured: boolean;
}

export interface CodeSnippet {
  id: string;
  tabTitle: string;
  filename: string;
  language: string;
  runtime: string;
  summary: string;
  code: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | string[];
}
