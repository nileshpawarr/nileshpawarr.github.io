export interface Project {
  name: string;
  description: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    name: 'react-micro-frontend',
    description:
      'Microfrontend reference implementation using Module Federation. Independent React applications composed into a single shell at runtime.',
    stack: ['React', 'TypeScript', 'Vite', 'Module Federation'],
    repoUrl: 'https://github.com/nileshpawarr/react-micro-frontend',
  },
  {
    name: 'gitexplorer',
    description: 'TypeScript developer tool for exploring git history and repository structure.',
    stack: ['TypeScript', 'Node.js'],
    repoUrl: 'https://github.com/nileshpawarr/gitexplorer',
  },
];

export const allProjectsUrl = 'https://github.com/nileshpawarr?tab=repositories';
