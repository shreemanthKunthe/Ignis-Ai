import React, { useEffect, useState } from 'react';

/**
 * Functional scroll percentage indicator: 0% -> 100%.
 * Calculated from scrollY and scrollable document height.
 * Technical mono readout styling.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalHeight > 0) {
        const pct = Math.min(100, Math.max(0, Math.round((scrollY / totalHeight) * 100)));
        setProgress(pct);
      } else {
        setProgress(0);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <span
      className="scroll-progress-text"
      aria-label={`Page scroll progress: ${progress}%`}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.04em',
        color: 'var(--ignis-pill-text)',
        minWidth: '34px',
        textAlign: 'right',
        userSelect: 'none'
      }}
    >
      {progress}%
    </span>
  );
}
