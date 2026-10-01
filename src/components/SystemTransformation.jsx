import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

/**
 * SystemTransformation Component (Section 04)
 * 
 * "From repetitive work to a working system."
 * 
 * Editorial systems diagram showing the transformation from fragmentation to engineered flow:
 * 1. REPETITIVE WORK (manual emails, copy / paste, spreadsheets, follow-ups, fragmented tools)
 * 2. IGNIS (understands, connects, automates, routes, reviews)
 * 3. WORKING SYSTEM (less manual work, faster execution, better visibility, humans stay in control)
 * 
 * Zero cards, zero dashboard mockups. Pure editorial typography, thin rules, and systems thinking.
 */
export default function SystemTransformation() {
  const [hoveredPhase, setHoveredPhase] = useState(null);

  const repetitiveItems = [
    'manual emails',
    'copy / paste',
    'spreadsheets',
    'follow-ups',
    'fragmented tools'
  ];

  const ignisVerbs = [
    'understands',
    'connects',
    'automates',
    'routes',
    'reviews'
  ];

  const workingSystemOutcomes = [
    'less manual work',
    'faster execution',
    'better visibility',
    'humans stay in control'
  ];

  return (
    <section
      id="how-it-works"
      aria-label="System Transformation"
      style={{
        backgroundColor: 'var(--ignis-paper)',
        color: 'var(--ignis-ink)',
        borderTop: '1px solid var(--ignis-line)',
        paddingTop: 'clamp(96px, 12vw, 160px)',
        paddingBottom: 'clamp(96px, 12vw, 160px)',
        position: 'relative',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "SF Pro", system-ui, sans-serif'
      }}
    >
      <div id="transformation" style={{ position: 'absolute', top: 0 }} aria-hidden="true" />

      <div className="container-wide">
        <RevealOnScroll>
          {/* Split Editorial Header */}
          <header
            className="transformation-header"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 1fr)',
              gap: 'clamp(32px, 5vw, 88px)',
              alignItems: 'end',
              marginBottom: 'clamp(64px, 8vw, 112px)'
            }}
          >
            <div>
              <div
                className="reveal-eyebrow"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: 'clamp(16px, 2.5vw, 24px)',
                  userSelect: 'none'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    backgroundColor: '#C93227'
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--ignis-ink)'
                  }}
                >
                  04 / THE TRANSFORMATION
                </span>
              </div>

              <h2
                className="reveal-headline"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                  fontSize: 'clamp(2.5rem, 5.2vw, 4.75rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  color: 'var(--ignis-ink)',
                  margin: 0,
                  textWrap: 'balance'
                }}
              >
                From repetitive work
                <br />
                <span style={{ color: 'var(--ignis-ink)' }}>to a working system.</span>
              </h2>
            </div>

            <div>
              <p
                className="reveal-body"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                  fontSize: 'clamp(1.0625rem, 1.35vw, 1.25rem)',
                  lineHeight: 1.62,
                  letterSpacing: '-0.015em',
                  color: 'var(--ignis-muted)',
                  margin: 0,
                  maxWidth: '480px'
                }}
              >
                IGNIS takes repetitive, fragmented processes and turns them into connected systems
                that work around the way your business actually operates.
              </p>
            </div>
          </header>

          {/* Editorial Systems Diagram: 3-Tier Transformation Pipeline */}
          <div
            className="system-flow-grid reveal-content"
            style={{
              borderTop: '1px solid var(--ignis-line)',
              borderBottom: '1px solid var(--ignis-line)',
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr 1.1fr',
              position: 'relative'
            }}
          >
          {/* Phase 1: REPETITIVE WORK */}
          <div
            onMouseEnter={() => setHoveredPhase('repetitive')}
            onMouseLeave={() => setHoveredPhase(null)}
            className="system-flow-phase"
            style={{
              padding: 'clamp(40px, 5vw, 64px) clamp(24px, 3vw, 48px)',
              borderRight: '1px solid var(--ignis-line)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: hoveredPhase === 'repetitive' ? 'rgba(28, 18, 16, 0.015)' : 'transparent',
              transition: 'background-color 220ms ease'
            }}
          >
            <div>
              <div
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--ignis-muted)',
                  marginBottom: '16px'
                }}
              >
                01 · THE BOTTLENECK
              </div>

              <h3
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: 'var(--ignis-ink)',
                  margin: 0,
                  marginBottom: '28px'
                }}
              >
                REPETITIVE WORK
              </h3>
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              {repetitiveItems.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                    fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
                    color: 'var(--ignis-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      backgroundColor: 'var(--ignis-muted)',
                      display: 'inline-block',
                      opacity: 0.6
                    }}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phase 2: IGNIS (The Engine) */}
          <div
            onMouseEnter={() => setHoveredPhase('ignis')}
            onMouseLeave={() => setHoveredPhase(null)}
            className="system-flow-phase"
            style={{
              padding: 'clamp(40px, 5vw, 64px) clamp(24px, 3vw, 48px)',
              borderRight: '1px solid var(--ignis-line)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: hoveredPhase === 'ignis' ? 'rgba(201, 50, 39, 0.025)' : 'transparent',
              transition: 'background-color 220ms ease'
            }}
          >
            <div>
              <div
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C93227',
                  marginBottom: '16px'
                }}
              >
                02 · THE ARCHITECTURE
              </div>

              <h3
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: '#C93227',
                  margin: 0,
                  marginBottom: '28px'
                }}
              >
                IGNIS
              </h3>
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              {ignisVerbs.map((verb) => (
                <li
                  key={verb}
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                    fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--ignis-ink)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <span style={{ color: '#C93227', fontSize: '0.8125rem' }} aria-hidden="true">
                    →
                  </span>
                  <span>{verb}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phase 3: WORKING SYSTEM */}
          <div
            onMouseEnter={() => setHoveredPhase('working')}
            onMouseLeave={() => setHoveredPhase(null)}
            className="system-flow-phase"
            style={{
              padding: 'clamp(40px, 5vw, 64px) clamp(24px, 3vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: hoveredPhase === 'working' ? 'rgba(28, 18, 16, 0.015)' : 'transparent',
              transition: 'background-color 220ms ease'
            }}
          >
            <div>
              <div
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--ignis-ink)',
                  marginBottom: '16px'
                }}
              >
                03 · THE OUTCOME
              </div>

              <h3
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: 'var(--ignis-ink)',
                  margin: 0,
                  marginBottom: '28px'
                }}
              >
                WORKING SYSTEM
              </h3>
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              {workingSystemOutcomes.map((outcome) => (
                <li
                  key={outcome}
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                    fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
                    fontWeight: 600,
                    color: 'var(--ignis-ink)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      backgroundColor: '#C93227',
                      display: 'inline-block'
                    }}
                    aria-hidden="true"
                  />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .transformation-header {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .system-flow-grid {
            grid-template-columns: 1fr !important;
          }
          .system-flow-phase {
            border-right: none !important;
            border-bottom: 1px solid var(--ignis-line);
            padding: 36px 0 !important;
          }
          .system-flow-phase:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
