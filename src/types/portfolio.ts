export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'uiux';
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  architecture: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  level: number; // 0 - 100
  experience: string;
  iconName: string;
  description: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  highlighted?: boolean;
}
