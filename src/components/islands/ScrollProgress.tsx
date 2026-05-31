import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // If browser supports CSS scroll-driven animations, fall back to a pure CSS bar
    // and skip the JS island entirely. (The CSS version lives in tokens via .scroll-bar.)
    const supportsScrollTimeline = CSS.supports('animation-timeline: scroll()');
    if (supportsScrollTimeline) return;

    function onScroll() {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      const pct = total > 0 ? (el.scrollTop / total) * 100 : 0;
      setProgress(pct);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        transition: 'width 80ms linear',
      }}
    />
  );
}
