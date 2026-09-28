import React, { useState, useEffect } from 'react';

/**
 * Editorial IGNIS Preloader Component
 * 
 * Choreography:
 * Sequential, calm, intentional appearance of the three core brand pillars:
 * 1. Clean background breath (0.0s - 0.12s)
 * 2. "SYSTEMS." enters, holds, exits (0.12s - 0.95s)
 * 3. "AUTOMATION." enters, holds, exits (0.98s - 1.80s)
 * 4. "CLARITY." enters, holds, exits (1.83s - 2.65s)
 * 5. Preloader smoothly dissolves into the website reveal (2.65s - 3.07s)
 * 
 * Refined SF Pro typography, medium-sized, center-aligned, medium weight (-0.03em tracking).
 * Restrained opacity, small vertical translation (14px), and slight blur-to-sharp settling.
 * Zero spinners, zero percentage counters, zero cards, zero illustrations.
 * Always plays on page load/refresh, with Escape or Click to instantly skip.
 */
export default function Preloader({ onComplete }) {
  // -1: blank, 0: SYSTEMS, 1: AUTOMATION, 2: CLARITY
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [wordPhase, setWordPhase] = useState('entering'); // 'entering' | 'holding' | 'exiting'
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const words = ['SYSTEMS', 'AUTOMATION', 'CLARITY'];

  useEffect(() => {
    // Clear any stale sessionStorage flag from previous sessions
    try {
      sessionStorage.removeItem('ignis_preloader_seen');
    } catch (_) {}

    const timers = [];
    let isSkipped = false;

    const handleSkip = () => {
      if (isSkipped) return;
      isSkipped = true;
      timers.forEach(clearTimeout);
      setIsFadingOut(true);
      if (onComplete) onComplete();
      setTimeout(() => {
        setIsDone(true);
      }, 420);
    };

    // Step 1: SYSTEMS enters
    timers.push(setTimeout(() => {
      setActiveWordIndex(0);
      setWordPhase('entering');
    }, 120));

    // SYSTEMS hold
    timers.push(setTimeout(() => {
      setWordPhase('holding');
    }, 450));

    // SYSTEMS exit
    timers.push(setTimeout(() => {
      setWordPhase('exiting');
    }, 750));

    // Step 2: AUTOMATION enters
    timers.push(setTimeout(() => {
      setActiveWordIndex(1);
      setWordPhase('entering');
    }, 980));

    // AUTOMATION hold
    timers.push(setTimeout(() => {
      setWordPhase('holding');
    }, 1310));

    // AUTOMATION exit
    timers.push(setTimeout(() => {
      setWordPhase('exiting');
    }, 1600));

    // Step 3: CLARITY enters
    timers.push(setTimeout(() => {
      setActiveWordIndex(2);
      setWordPhase('entering');
    }, 1830));

    // CLARITY hold
    timers.push(setTimeout(() => {
      setWordPhase('holding');
    }, 2160));

    // CLARITY exit
    timers.push(setTimeout(() => {
      setWordPhase('exiting');
    }, 2450));

    // Step 4: Curtain begins dissolve into website reveal
    timers.push(setTimeout(() => {
      setIsFadingOut(true);
      if (onComplete) onComplete();
    }, 2680));

    // Step 5: Preloader unmounted
    timers.push(setTimeout(() => {
      setIsDone(true);
    }, 3100));

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  if (isDone) return null;

  const currentWord = activeWordIndex >= 0 && activeWordIndex < words.length ? words[activeWordIndex] : '';

  return (
    <div
      className={`ignis-editorial-preloader ${isFadingOut ? 'is-fading-out' : ''}`}
      aria-label="Ignis Loading Sequence"
      role="status"
      onClick={() => {
        setIsFadingOut(true);
        if (onComplete) onComplete();
        setTimeout(() => setIsDone(true), 420);
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#FDFAF8',
        color: '#140E0D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        userSelect: 'none',
        cursor: 'default',
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? 'none' : 'auto',
        transition: 'opacity 420ms cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Centered Typography Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px',
          padding: '0 24px',
          boxSizing: 'border-box'
        }}
      >
        {currentWord && (
          <div
            key={`${currentWord}-${activeWordIndex}`}
            className={`preloader-editorial-word word-${wordPhase}`}
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "SF Pro", system-ui, sans-serif',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#140E0D',
              textAlign: 'center',
              willChange: 'transform, opacity, filter',
              display: 'inline-flex',
              alignItems: 'baseline'
            }}
          >
            <span>{currentWord}</span>
            <span style={{ color: '#FF531B', marginLeft: '1px' }}>.</span>
          </div>
        )}
      </div>

      {/* Scoped CSS for word motion and transitions */}
      <style>{`
        .preloader-editorial-word {
          transform-origin: center center;
        }

        .preloader-editorial-word.word-entering {
          opacity: 0;
          transform: translate3d(0, 14px, 0);
          filter: blur(4px);
          animation: wordEnter 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .preloader-editorial-word.word-holding {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0px);
        }

        .preloader-editorial-word.word-exiting {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0px);
          animation: wordExit 240ms cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }

        @keyframes wordEnter {
          0% {
            opacity: 0;
            transform: translate3d(0, 14px, 0);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0px);
          }
        }

        @keyframes wordExit {
          0% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: translate3d(0, -14px, 0);
            filter: blur(4px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .preloader-editorial-word.word-entering,
          .preloader-editorial-word.word-exiting {
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
}
