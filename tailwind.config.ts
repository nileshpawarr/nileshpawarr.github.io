import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'text-faint': 'var(--text-faint)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      fontSize: {
        meta: ['var(--text-meta)', { lineHeight: '1.4' }],
        sm: ['var(--text-sm)', { lineHeight: '1.5' }],
        base: ['var(--text-base)', { lineHeight: '1.55' }],
        lg: ['var(--text-lg)', { lineHeight: '1.55' }],
        xl: ['var(--text-xl)', { lineHeight: '1.25' }],
        '2xl': ['var(--text-2xl)', { lineHeight: '1.25' }],
        'hero-sm': ['var(--text-hero-sm)', { lineHeight: '1.18' }],
        hero: ['var(--text-hero)', { lineHeight: '1.18' }],
      },
      letterSpacing: {
        hero: '-0.025em',
        head: '-0.01em',
        label: '0.04em',
      },
      maxWidth: {
        container: 'var(--container-max)',
        content: 'var(--content-max)',
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
        standard: 'var(--ease-standard)',
        snappy: 'var(--ease-snappy)',
      },
      transitionDuration: {
        micro: 'var(--dur-micro)',
        fast: 'var(--dur-fast)',
        base: 'var(--dur-base)',
        slow: 'var(--dur-slow)',
        hero: 'var(--dur-hero)',
      },
    },
  },
};

export default config;
