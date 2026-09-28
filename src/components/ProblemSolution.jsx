import React from 'react';

/**
 * ProblemSolution Component (What We Do / Who We Are)
 * 
 * Exact 1:1 match with user's editorial design screenshot:
 * - Radiant flame orange background (#FF5B20)
 * - Top eyebrow: slanted parallelogram icon + 'What we do'
 * - Exact 3-line editorial headline without sentence or word breaks:
 *   Line 1: 'We bring intelligence to life through systems'
 *   Line 2: 'and automation. Built for businesses that'
 *   Line 3: 'demand clarity, speed, and control.'
 * - Crisp centered black button: 'Who we are →'
 */
export default function ProblemSolution() {
  const handleScrollToNext = (e) => {
    e.preventDefault();
    const target = document.getElementById('capabilities');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      aria-label="What We Do - Who We Are"
      style={{
        position: 'relative',
        backgroundColor: '#FF5B20',
        color: '#FFFFFF',
        width: '100%',
        minHeight: 'clamp(580px, 80vh, 920px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 64px)',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      {/* Anchor targets for both #about and #who-we-are */}
      <div id="who-we-are" style={{ position: 'absolute', top: 0, left: 0 }} aria-hidden="true" />
      <div id="what-we-do" style={{ position: 'absolute', top: 0, left: 0 }} aria-hidden="true" />

      <div
        style={{
          width: '100%',
          maxWidth: '1520px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* 1. Top Eyebrow Tag: Slanted Parallelogram Icon + 'What we do' */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: 'clamp(36px, 5.2vh, 52px)',
            userSelect: 'none'
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ display: 'block', flexShrink: 0 }}
          >
            <polygon points="5.5 1, 15.5 1, 10.5 15, 0.5 15" fill="#FFFFFF" />
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(1rem, 1.15vw, 1.125rem)',
              fontWeight: 400,
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              lineHeight: 1
            }}
          >
            What we do
          </span>
        </div>

        {/* 2. Main Large Headline (Strictly 3 lines matching the design screenshot) */}
        <h2
          className="font-headline problem-solution-headline"
          style={{
            fontWeight: 700,
            lineHeight: 1.14,
            letterSpacing: '-0.035em',
            color: '#FFFFFF',
            margin: '0 auto clamp(36px, 5vh, 48px) auto',
            WebkitFontSmoothing: 'antialiased',
            wordBreak: 'keep-all',
            overflowWrap: 'normal',
            hyphens: 'none'
          }}
        >
          <span className="problem-solution-line">
            We bring intelligence to life through systems
          </span>
          <span className="problem-solution-line">
            and automation. Built for businesses that
          </span>
          <span className="problem-solution-line">
            demand clarity, speed, and control.
          </span>
        </h2>

        {/* 3. Black Action Button: 'Who we are →' */}
        <a
          href="#capabilities"
          onClick={handleScrollToNext}
          className="ignis-who-we-are-btn"
          aria-label="Learn who we are and explore our capabilities"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(0.9375rem, 1.05vw, 1.0625rem)',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            textDecoration: 'none',
            padding: '16px 36px',
            borderRadius: '2px',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.16)',
            transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1), background-color 220ms ease, box-shadow 220ms ease'
          }}
        >
          <span>Who we are</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="ignis-btn-arrow"
            style={{
              display: 'inline-block',
              transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <line x1="2" y1="8" x2="14" y2="8" />
            <polyline points="9.5 3.5 14 8 9.5 12.5" />
          </svg>
        </a>
      </div>

      {/* Responsive layout & button styling */}
      <style>{`
        .problem-solution-headline {
          font-size: clamp(1.85rem, 4.35vw, 4.75rem);
          max-width: 1460px;
          width: 100%;
        }

        .problem-solution-line {
          display: block;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .problem-solution-headline {
            font-size: clamp(1.5rem, 3.8vw, 2.6rem);
          }
        }

        @media (max-width: 680px) {
          .problem-solution-headline {
            font-size: clamp(1.35rem, 5.2vw, 1.95rem);
            line-height: 1.25 !important;
          }
          .problem-solution-line {
            white-space: normal;
            word-break: keep-all;
            overflow-wrap: normal;
            display: inline;
          }
          .problem-solution-line::after {
            content: ' ';
          }
        }

        .ignis-who-we-are-btn:hover {
          background-color: #121212 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28) !important;
        }
        .ignis-who-we-are-btn:hover .ignis-btn-arrow {
          transform: translateX(4px);
        }
        .ignis-who-we-are-btn:active {
          transform: translateY(0);
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2) !important;
        }

        @media (max-width: 768px) {
          .ignis-who-we-are-btn {
            width: 100%;
            max-width: 320px;
            padding: 16px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
