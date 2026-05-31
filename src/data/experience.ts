export interface Experience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string | null;
  highlights: string[];
  stack?: string[];
}

export const experience: Experience[] = [
  {
    company: 'Voyfai GmbH',
    role: 'Senior Software Engineer',
    location: 'Berlin',
    start: 'Jul 2025',
    end: null,
    highlights: [
      'Building the frontend for a freight/logistics platform in React + TypeScript.',
      'Operates a Claude + MCP workflow pipeline that takes Jira tickets to pull requests.',
      'Builds reusable prompt-engineering and AI workflow templates for the engineering team.',
    ],
    stack: ['React', 'TypeScript', 'Claude', 'MCP'],
  },
  {
    company: 'Labforward (LabTwin)',
    role: 'Senior Frontend Developer',
    location: 'Berlin',
    start: 'Aug 2022',
    end: 'Jul 2025',
    highlights: [
      'Owned frontend feature areas for a voice-powered digital lab assistant.',
      'Led web performance work (Lighthouse, bundle size) for the product surface.',
      'Built reusable component patterns and mentored engineers on the team.',
    ],
    stack: ['React', 'TypeScript', 'Web Performance'],
  },
  {
    company: 'Deloitte Digital (Deloitte USI)',
    role: 'Senior Consultant',
    location: 'Mumbai',
    start: 'May 2021',
    end: 'Jul 2022',
    highlights: [
      'Established code-quality standards across multiple delivery teams.',
      'Designed and delivered an Angular 15 microfrontend architecture.',
      'Mentored junior developers and ran code review programs.',
    ],
    stack: ['Angular', 'Microfrontends', 'TypeScript'],
  },
  {
    company: 'Deloitte Digital (Deloitte USI)',
    role: 'Consultant',
    location: 'Mumbai',
    start: 'Jan 2019',
    end: 'May 2021',
    highlights: ['Delivered enterprise web features across modern JavaScript frameworks.'],
  },
  {
    company: 'GEP Worldwide',
    role: 'Senior Web Engineer',
    location: 'Mumbai',
    start: 'Nov 2017',
    end: 'Jan 2019',
    highlights: [],
  },
  {
    company: 'Capgemini',
    role: 'Senior Software Engineer',
    location: 'Mumbai',
    start: 'Nov 2016',
    end: 'Nov 2017',
    highlights: [],
  },
  {
    company: 'Zeus Learning',
    role: 'Senior Software Engineer',
    location: 'Mumbai',
    start: 'Jan 2014',
    end: 'Oct 2016',
    highlights: [],
  },
];

export interface Education {
  degree: string;
  field: string;
  institution: string;
  years: string;
}

export const education: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Science',
    institution: 'University of Mumbai',
    years: '2011–2014',
  },
  {
    degree: 'Bachelor of Computer Science',
    field: 'Computer Science',
    institution: 'University of Pune',
    years: '2006–2010',
  },
];

export interface Award {
  name: string;
  org: string;
  date: string;
}

export const awards: Award[] = [
  { name: 'Spot Award', org: 'Deloitte', date: 'Mar 2022' },
  { name: 'Applause Award', org: 'Deloitte', date: 'Sep 2020' },
  { name: 'Applause Award', org: 'Deloitte', date: 'Dec 2019' },
  { name: 'The Motivator', org: 'GEP', date: 'Mar 2018' },
];
