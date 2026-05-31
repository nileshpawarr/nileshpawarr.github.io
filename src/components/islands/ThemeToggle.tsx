import { useEffect, useState } from 'react';
import { getActiveTheme, setTheme, type Theme } from '~/lib/theme';

interface ViewTransitionDocument {
  startViewTransition?: (cb: () => void) => { finished: Promise<void> };
}

export default function ThemeToggle() {
  const [theme, setLocalTheme] = useState<Theme>('dark');

  useEffect(() => {
    setLocalTheme(getActiveTheme());
  }, []);

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const doc = document as unknown as ViewTransitionDocument;
    const supportsVT = typeof doc.startViewTransition === 'function';

    if (supportsVT && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const x = e.clientX;
      const y = e.clientY;
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      // Inject a one-shot style — uses the View Transitions pseudo-elements.
      const styleEl = document.createElement('style');
      styleEl.textContent = `
        ::view-transition-old(root),
        ::view-transition-new(root) { animation: none; mix-blend-mode: normal; }
        ::view-transition-new(root) {
          animation: vt-reveal 500ms var(--ease-standard, cubic-bezier(0.32, 0.72, 0, 1)) forwards;
        }
        @keyframes vt-reveal {
          from { clip-path: circle(0px at ${x}px ${y}px); }
          to   { clip-path: circle(${maxRadius}px at ${x}px ${y}px); }
        }
      `;
      document.head.appendChild(styleEl);

      const transition = doc.startViewTransition!(() => {
        setTheme(next);
        setLocalTheme(next);
      });
      transition.finished.finally(() => styleEl.remove());
    } else {
      setTheme(next);
      setLocalTheme(next);
    }
  }

  const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={theme === 'dark'}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-colors duration-fast ease-snappy hover:border-accent hover:text-accent"
    >
      <span aria-hidden="true">
        {theme === 'dark' ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </span>
    </button>
  );
}
