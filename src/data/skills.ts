export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Angular',
      'Vue',
      'Svelte',
      'Backbone.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3/SCSS',
      'Tailwind',
      'Bootstrap',
      'Web Components',
      'Microfrontends (Module Federation)',
      'Web Performance',
      'WebSockets',
      'Responsive UI',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
  },
  {
    title: 'AI/LLM & Developer Tooling',
    items: [
      'Claude',
      'ChatGPT',
      'GitHub Copilot',
      'Prompt Engineering',
      'Model Context Protocol (MCP)',
      'AI-Assisted Development',
      'LLM Workflow Automation',
    ],
  },
  {
    title: 'Databases & Testing',
    items: ['PostgreSQL', 'MongoDB', 'Jest', 'Vitest', 'Jasmine', 'Playwright', 'Cypress'],
  },
  {
    title: 'Architecture & Leadership',
    items: [
      'System Design',
      'Microfrontend Architecture',
      'Frontend Platform Strategy',
      'Code Review & Quality Standards',
      'Technical Mentorship',
      'Agile/Scrum',
    ],
  },
];
