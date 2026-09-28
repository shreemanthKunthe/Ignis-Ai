import React, { useEffect, useRef, useState } from 'react';

/**
 * RevealOnScroll Component
 * 
 * High-performance viewport intersection observer for staggered editorial reveals.
 * Unobserves after initial trigger for zero overhead.
 * Respects prefers-reduced-motion.
 */
export default function RevealOnScroll({ children, className = '', threshold = 0.12, rootMargin = '0px 0px -40px 0px' }) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Immediate reveal if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`ignis-reveal-wrapper ${isRevealed ? 'is-revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
