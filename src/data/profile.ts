export interface Profile {
  name: string;
  headline: string;
  summary: string;
  status: string;
  location: string;
  email: string;
  resumePdf: string;
  links: {
    github: string;
    linkedin: string;
    medium: string;
  };
}

export const profile: Profile = {
  name: 'Nilesh Pawar',
  headline: 'Senior Frontend-Focused Full Stack Engineer | Frontend Architect',
  summary:
    'Senior Frontend-focused Full Stack Engineer with 12+ years architecting and shipping web applications across enterprise consultancies and product-led startups. Experienced across React, Angular, Vue, and Svelte, with TypeScript, Node.js, and NestJS backend delivery and a strong system-design and microfrontend-architecture foundation. Early, fluent adopter of AI/LLM developer tooling: applies Claude, GitHub Copilot, prompt engineering, and Model Context Protocol (MCP) workflows to automate engineering pipelines and compress delivery cycle time.',
  status: 'Open to senior & staff roles',
  location: 'Berlin, Germany',
  email: 'nileshpawar9922@gmail.com',
  resumePdf: '/Nilesh-Pawar-Resume.pdf',
  links: {
    github: 'https://github.com/nileshpawarr',
    linkedin: 'https://www.linkedin.com/in/nileshpawarr',
    medium: 'https://medium.com/@nileshpawarr',
  },
};
