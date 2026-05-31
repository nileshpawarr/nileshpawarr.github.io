import { useEffect, useState } from 'react';

function calcProgress(): number {
  if (typeof window === 'undefined' || typeof document === 'undefined') return 0;
  const el = document.documentElement;
  const total = el.scrollHeight - el.clientHeight;
  return total > 0 ? (el.scrollTop / total) * 100 : 0;
}

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;
    function flush() {
      rafId = null;
      setProgress(calcProgress());
    }
    function schedule() {
      if (rafId === null) rafId = requestAnimationFrame(flush);
    }
    // Sync once on mount (covers landing on a #hash URL where scrollTop is already non-zero)
    flush();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Hidden when effectively at the top of the page; fades in once the user starts scrolling.
  const visible = progress > 1;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${progress}%`,
        background: 'var(--accent)',
        zIndex: 60,
        opacity: visible ? 1 : 0,
        transition: 'opacity 200ms linear',
        willChange: 'width, opacity',
        pointerEvents: 'none',
      }}
    />
  );
}
