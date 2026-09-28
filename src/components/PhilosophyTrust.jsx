import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

/**
 * PhilosophyTrust Component (Section 07)
 * 
 * "Engineering with judgement."
 * Manifesto-like four-column principle system:
 * Supporting copy: "Every system is built to withstand real business conditions. No vaporware. No hype."
 * 
 * 01 — People Stay in Control
 * 02 — The Client Owns It
 * 03 — Honesty & Integrity
 * 04 — Built to Last
 * 
 * Zero cards, zero icons, zero illustrations. Pure typography, thin rules, and generous whitespace.
 */
export default function PhilosophyTrust() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const principles = [
    {
      num: '01',
      title: 'People Stay in Control',
      explanation: 'AI handles the repetitive work. People make consequential decisions. We enforce human review gates on every critical workflow.'
    },
    {
      num: '02',
      title: 'The Client Owns It',
      explanation: 'The system belongs to your business, not to an endless subscription. Built directly into your own infrastructure with zero vendor lock-in.'
    },
    {
      num: '03',
      title: 'Honesty & Integrity',
      explanation: 'No black-box promises. No unnecessary AI where deterministic logic does the job better, faster, and at lower operational cost.'
    },
    {
      num: '04',
      title: 'Built to Last',
      explanation: 'Every system is engineered to withstand real business conditions, model upgrades, and evolving data schemas long after initial deployment.'
    }
  ];

  return (
    <section
      id="philosophy"
      aria-label="Engineering with Judgement"
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
      <div className="container-wide">
        <RevealOnScroll>
          {/* Section Header */}
          <header
            className="philosophy-header"
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
                    backgroundColor: '#FF531B'
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
                  07 / MANIFESTO
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
                Engineering with
                <br />
                <span style={{ color: 'var(--ignis-ink)' }}>judgement.</span>
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
                Every system is built to withstand real business conditions. No vaporware. No hype.
              </p>
            </div>
          </header>

          {/* Four-Column Principle Manifesto Grid */}
          <div
            className="philosophy-grid reveal-content"
            style={{
              borderTop: '1px solid var(--ignis-line)',
              borderBottom: '1px solid var(--ignis-line)',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)'
            }}
          >
          {principles.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="philosophy-col"
                style={{
                  padding: 'clamp(36px, 4.5vw, 64px) clamp(20px, 2.5vw, 36px)',
                  borderRight: idx < principles.length - 1 ? '1px solid var(--ignis-line)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '300px',
                  backgroundColor: isHovered ? 'rgba(255, 83, 27, 0.015)' : 'transparent',
                  transition: 'background-color 200ms ease'
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      fontWeight: 300,
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      color: isHovered ? 'var(--ignis-ink)' : 'var(--ignis-muted)',
                      opacity: isHovered ? 1 : 0.5,
                      marginBottom: 'clamp(20px, 2.5vw, 32px)',
                      transition: 'color 200ms ease, opacity 200ms ease'
                    }}
                  >
                    {item.num}
                  </div>

                  <h3
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                      fontSize: 'clamp(1.125rem, 1.4vw, 1.35rem)',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                      color: 'var(--ignis-ink)',
                      margin: 0,
                      marginBottom: '16px'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: 'var(--ignis-muted)',
                    margin: 0
                  }}
                >
                  {item.explanation}
                </p>
              </div>
            );
          })}
        </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .philosophy-header {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .philosophy-grid {
            grid-template-columns: 1fr !important;
          }
          .philosophy-col {
            border-right: none !important;
            border-bottom: 1px solid var(--ignis-line);
            padding: 32px 0 !important;
            min-height: auto !important;
          }
          .philosophy-col:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
