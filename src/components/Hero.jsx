import React, { useState, useEffect } from 'react';
import InteractiveAIHead from './InteractiveAIHead';
import GetStartedButton from './GetStartedButton';

/**
 * Ignis AI Hero Section with Sticky Scroll Stacking
 * 
 * Sticky Scroll System:
 * - Locked firmly at top: 0 with 100vh height (position: sticky)
 * - Zero zoom-in or scale distortion — AI Head and typography stay stationary and sharp
 * - As the user scrolls, the next section (ProblemSolution) slides up smoothly directly over the Hero
 * - Hero unmounts/hides visibility when user is deep into main content, preserving 60fps performance
 */
export default function Hero({ isReady = true }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Keep hero visible during the sticky overlap phase; hide when deep into the rest of the page
      const threshold = window.innerHeight * 1.25;
      const shouldBeVisible = window.scrollY < threshold;
      setIsVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="hero-sticky-scene"
      aria-label="Ignis AI Hero"
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        minHeight: '680px',
        maxHeight: '1052px',
        width: '100%',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        zIndex: 1,
        visibility: isVisible ? 'visible' : 'hidden',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      {/* 1. Center-Right Interactive AI Head (1920x1052 Artboard Proportion, Zero Zoom Distortion) */}
      <div
        className="hero-head-wrapper"
        style={{
          position: 'absolute',
          left: 'clamp(300px, 28.65vw, 580px)',
          top: 'clamp(28px, 6.0vh, 65px)',
          width: 'clamp(1180px, 86.35vw, 1720px)',
          aspectRatio: '1536 / 1024',
          zIndex: 1,
          pointerEvents: 'auto'
        }}
      >
        <InteractiveAIHead />
      </div>

      {/* 2. Lower-Left Anchored Typography & CTA */}
      <div
        className="hero-content-wrapper"
        style={{
          position: 'absolute',
          left: 'clamp(28px, 3.33vw, 68px)',
          bottom: 'clamp(40px, 8.03vh, 88px)',
          zIndex: 10,
          width: 'calc(100% - 48px)',
          maxWidth: '850px',
          pointerEvents: 'none'
        }}
      >
        <div style={{ pointerEvents: 'auto' }}>
          {/* Main Headline (Strictly 2 lines with coral-to-black load animation) */}
          <h1
            className="font-headline hero-headline"
            style={{
              fontSize: 'clamp(2.5rem, 3.9vw, 4.65rem)',
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: '-0.035em',
              marginBottom: '20px'
            }}
          >
            <span
              className={`hero-line hero-line-1 ${isReady ? 'is-active' : ''}`}
              style={{ display: 'block', whiteSpace: 'nowrap' }}
            >
              Less manual work.
            </span>
            <span
              className={`hero-line hero-line-2 ${isReady ? 'is-active' : ''}`}
              style={{ display: 'block', whiteSpace: 'nowrap' }}
            >
              More capacity to grow.
            </span>
          </h1>

          {/* Supporting Narrative */}
          <p
            className={`hero-subtitle ${isReady ? 'is-active' : ''}`}
            style={{
              fontSize: 'clamp(0.95rem, 0.96vw, 1.125rem)',
              lineHeight: 1.55,
              color: '#140E0D',
              maxWidth: '780px',
              marginBottom: '28px'
            }}
          >
            Ignis builds AI systems around the way your business works — handling repetitive tasks, connecting your tools, and keeping your team focused on the work that matters.
          </p>

          {/* Radiant Coral CTA Pill Button */}
          <div className={`hero-cta ${isReady ? 'is-active' : ''}`} style={{ display: 'inline-block' }}>
            <GetStartedButton href="#founder" variant="coral" showArrow={true}>
              Talk to the builder
            </GetStartedButton>
          </div>
        </div>
      </div>

      {/* 3. "SCROLL DOWN" Indicator matching the artboard */}
      <div
        className="hero-scroll-indicator"
        style={{
          position: 'absolute',
          right: 'clamp(24px, 3.1vw, 60px)',
          top: '68%',
          transform: 'translateY(-50%)',
          zIndex: 5,
          fontFamily: 'var(--font-headline)',
          fontSize: '0.6875rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#140E0D',
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      >
        SCROLL DOWN
      </div>

      {/* Entrance Animations & Responsive Styling */}
      <style>{`
        @keyframes heroCoralToBlack {
          0% {
            opacity: 0;
            transform: translateY(24px);
            color: #FF5A1F;
          }
          32% {
            opacity: 1;
            transform: translateY(0);
            color: #FF5A1F;
          }
          62% {
            color: #FF5A1F;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            color: #140E0D;
          }
        }

        @keyframes heroFadeInSubtle {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-line-1.is-active {
          animation: heroCoralToBlack 2.3s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }

        .hero-line-2.is-active {
          animation: heroCoralToBlack 2.3s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
        }

        .hero-subtitle.is-active {
          animation: heroFadeInSubtle 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.75s both;
        }

        .hero-cta.is-active {
          animation: heroFadeInSubtle 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.95s both;
        }

        @media (max-width: 1024px) {
          #hero {
            position: relative !important;
            height: auto !important;
            min-height: 100vh !important;
            max-height: none !important;
            display: flex !important;
            flex-direction: column !important;
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }
          .hero-head-wrapper {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: 680px !important;
            margin: 0 auto !important;
            order: 2;
          }
          .hero-content-wrapper {
            position: relative !important;
            left: 0 !important;
            bottom: 0 !important;
            max-width: 100% !important;
            padding: 24px !important;
            order: 1;
          }
          .hero-content-wrapper h1 span {
            white-space: normal !important;
          }
          .hero-scroll-indicator {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
