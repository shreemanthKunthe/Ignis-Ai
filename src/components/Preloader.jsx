import React, { useState, useEffect } from 'react';

/**
 * Cinematic IGNIS Preloader Component
 * 
 * Choreography:
 * Phase 01: CONNECT. (0.0s - 0.75s) - Oversized entry with spatial inertia settle
 * Phase 02: AUTOMATE. (0.75s - 1.55s) - Spatial shift with brief typographic overlap
 * Phase 03: GROW. (1.55s - 2.35s) - Maximum typographic scale and commanding presence
 * Phase 04: IGNIS. (2.35s - 2.85s) - Resolves into the signature Ignis brandmark
 * Phase 05: REVEAL (2.85s - 3.3s) - Controlled mask wipe revealing the hero
 * 
 * Respects prefers-reduced-motion and supports instant click-to-skip.
 */
export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('connect'); // 'connect' | 'automate' | 'grow' | 'ignis' | 'exit'
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    // Phase 1 -> Phase 2 (AUTOMATE.)
    const t1 = setTimeout(() => {
      setPhase('automate');
    }, 750);

    // Phase 2 -> Phase 3 (GROW.)
    const t2 = setTimeout(() => {
      setPhase('grow');
    }, 1550);

    // Phase 3 -> Phase 4 (IGNIS.)
    const t3 = setTimeout(() => {
      setPhase('ignis');
    }, 2350);

    // Phase 4 -> Phase 5 (EXIT WIPE)
    const t4 = setTimeout(() => {
      setPhase('exit');
    }, 2850);

    // Completed & unmounted
    const t5 = setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, 3350);

    const handleSkip = () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      setPhase('exit');
      setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 300);
    };

    window.addEventListener('keydown', handleSkip);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener('keydown', handleSkip);
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`ignis-preloader ${phase === 'exit' ? 'is-exiting' : ''}`}
      aria-label="Ignis AI Loading Experience"
      role="status"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#FDFAF8',
        color: '#1C1210',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'transform 550ms cubic-bezier(0.77, 0, 0.175, 1), opacity 450ms ease'
      }}
      onClick={() => {
        setPhase('exit');
        setTimeout(() => {
          setIsDone(true);
          if (onComplete) onComplete();
        }, 300);
      }}
    >
      {/* Background Architectural Grid Lines (Subtle) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.35,
          backgroundImage:
            'linear-gradient(to right, rgba(235, 221, 216, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(235, 221, 216, 0.4) 1px, transparent 1px)',
          backgroundSize: 'clamp(60px, 8vw, 120px) clamp(60px, 8vw, 120px)'
        }}
        aria-hidden="true"
      />

      {/* Main Kinetic Typography Stage */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1440px',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* WORD 1: CONNECT. */}
        <div
          className={`preloader-word preloader-connect ${phase}`}
          style={{
            position: 'absolute',
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
            fontSize: 'clamp(3.5rem, 11vw, 11rem)',
            fontWeight: 800,
            letterSpacing: '-0.045em',
            lineHeight: 0.9,
            whiteSpace: 'nowrap',
            willChange: 'transform, opacity, filter',
            pointerEvents: 'none'
          }}
        >
          <span>CONNECT</span>
          <span style={{ color: '#FF531B' }}>.</span>
        </div>

        {/* WORD 2: AUTOMATE. */}
        <div
          className={`preloader-word preloader-automate ${phase}`}
          style={{
            position: 'absolute',
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
            fontSize: 'clamp(3.5rem, 11vw, 11rem)',
            fontWeight: 800,
            letterSpacing: '-0.045em',
            lineHeight: 0.9,
            whiteSpace: 'nowrap',
            willChange: 'transform, opacity, filter',
            pointerEvents: 'none'
          }}
        >
          <span>AUTOMATE</span>
          <span style={{ color: '#FF531B' }}>.</span>
        </div>

        {/* WORD 3: GROW. */}
        <div
          className={`preloader-word preloader-grow ${phase}`}
          style={{
            position: 'absolute',
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
            fontSize: 'clamp(4.5rem, 13.5vw, 14rem)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            lineHeight: 0.88,
            whiteSpace: 'nowrap',
            willChange: 'transform, opacity, filter',
            pointerEvents: 'none'
          }}
        >
          <span>GROW</span>
          <span style={{ color: '#FF531B' }}>.</span>
        </div>

        {/* WORD 4: IGNIS. Resolution */}
        <div
          className={`preloader-word preloader-ignis ${phase}`}
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
            fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            willChange: 'transform, opacity',
            pointerEvents: 'none'
          }}
        >
          <span>IGNIS</span>
          <span style={{ color: '#FF531B' }}>.</span>
        </div>
      </div>

      {/* Subtle Bottom Progress Indicator / Dismiss Cue */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(24px, 4vh, 48px)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
          fontSize: '0.6875rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(28, 18, 16, 0.45)',
          zIndex: 10
        }}
      >
        <span>SYSTEM INITIATION</span>
        <div
          style={{
            width: '40px',
            height: '1.5px',
            backgroundColor: 'rgba(28, 18, 16, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className="preloader-progress-bar" />
        </div>
      </div>

      {/* Cinematic Motion Choreography Styles */}
      <style>{`
        /* CONNECT. Animation States */
        .preloader-connect {
          opacity: 0;
          transform: translate3d(-4vw, 24vh, 0) scale(1.12);
          transition: transform 680ms cubic-bezier(0.16, 1, 0.3, 1), opacity 450ms ease, filter 450ms ease;
        }
        .preloader-connect.connect {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }
        .preloader-connect.automate {
          opacity: 0.15;
          transform: translate3d(-3vw, -18vh, 0) scale(0.92);
          filter: blur(4px);
        }
        .preloader-connect.grow,
        .preloader-connect.ignis,
        .preloader-connect.exit {
          opacity: 0;
          transform: translate3d(-6vw, -30vh, 0) scale(0.85);
          filter: blur(8px);
        }

        /* AUTOMATE. Animation States */
        .preloader-automate {
          opacity: 0;
          transform: translate3d(6vw, 20vh, 0) scale(1.08);
          transition: transform 680ms cubic-bezier(0.16, 1, 0.3, 1), opacity 450ms ease, filter 450ms ease;
        }
        .preloader-automate.automate {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }
        .preloader-automate.grow {
          opacity: 0.15;
          transform: translate3d(4vw, -20vh, 0) scale(0.9);
          filter: blur(4px);
        }
        .preloader-automate.ignis,
        .preloader-automate.exit {
          opacity: 0;
          transform: translate3d(6vw, -32vh, 0) scale(0.82);
          filter: blur(8px);
        }

        /* GROW. Animation States */
        .preloader-grow {
          opacity: 0;
          transform: translate3d(0, 14vh, 0) scale(1.15);
          transition: transform 720ms cubic-bezier(0.16, 1, 0.3, 1), opacity 480ms ease, filter 480ms ease;
        }
        .preloader-grow.grow {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }
        .preloader-grow.ignis {
          opacity: 0;
          transform: translate3d(0, -6vh, 0) scale(0.88);
          filter: blur(5px);
        }
        .preloader-grow.exit {
          opacity: 0;
          transform: translate3d(0, -12vh, 0) scale(0.8);
          filter: blur(8px);
        }

        /* IGNIS. Resolution States */
        .preloader-ignis {
          opacity: 0;
          transform: translate3d(0, 4vh, 0) scale(0.92);
          transition: transform 520ms cubic-bezier(0.16, 1, 0.3, 1), opacity 380ms ease;
        }
        .preloader-ignis.ignis {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }
        .preloader-ignis.exit {
          opacity: 0;
          transform: translate3d(0, -4vh, 0) scale(0.96);
        }

        /* Exit Reveal Wipe */
        .ignis-preloader.is-exiting {
          transform: translateY(-100%);
          pointer-events: none;
        }

        /* Progress Bar Animation */
        .preloader-progress-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background-color: #FF531B;
          animation: preloaderTrack 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes preloaderTrack {
          0% { width: 0%; }
          25% { width: 30%; }
          55% { width: 68%; }
          85% { width: 92%; }
          100% { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ignis-preloader {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
