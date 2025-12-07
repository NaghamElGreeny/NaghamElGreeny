export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Project 1',
    description: 'A modern web application showcasing best practices',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'An innovative solution with clean architecture',
    techStack: ['React', 'Zustand', 'TypeScript'],
    featured: true,
  },
  {
    id: '3',
    title: 'Project 3',
    description: 'A responsive design with modern UI patterns',
    techStack: ['Next.js', 'Tailwind CSS', 'i18next'],
    featured: false,
  },
];
