import React, { useState } from 'react';

/**
 * EditorialCapabilities Component (What We Build)
 *
 * Rebuilt from scratch to embody a high-end digital systems architecture practice:
 * - Asymmetric editorial layout with expansive whitespace and thin horizontal hairlines
 * - SF Pro / SF Pro Display typographic hierarchy with oversized headlines
 * - Three pure editorial rows with large architectural index numbers
 * - Restrained body copy and precision process metadata flows
 * - Zero cards, zero rounded containers, zero generic B2B SaaS tropes
 * - Ignis coral used strictly as a disciplined accent
 */
export default function EditorialCapabilities() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const capabilities = [
    {
      index: '01',
      category: 'AI ASSISTANTS',
      statementLine1: 'AI that works',
      statementLine2: 'inside the workflow.',
      description:
        'Automate repetitive communication, information handling, follow-ups and everyday tasks while keeping your team in control.',
      metadata: ['ASSIST', 'REVIEW', 'ACT']
    },
    {
      index: '02',
      category: 'AUTOMATION',
      statementLine1: 'The work',
      statementLine2: 'between your tools.',
      description:
        'Connect the systems you already use and remove the manual handoffs that slow your team down.',
      metadata: ['CAPTURE', 'PROCESS', 'ROUTE']
    },
    {
      index: '03',
      category: 'CUSTOM SYSTEMS',
      statementLine1: 'Software shaped',
      statementLine2: 'around your business.',
      description:
        'Build internal tools, portals and workflows around your exact processes instead of forcing your team into generic software.',
      metadata: ['YOUR PROCESS', 'YOUR SYSTEM']
    }
  ];

  return (
    <section
      id="capabilities"
      aria-label="What We Build"
      style={{
        backgroundColor: 'var(--ignis-paper)',
        color: 'var(--ignis-ink)',
        position: 'relative',
        paddingTop: 'clamp(96px, 12vw, 180px)',
        paddingBottom: 'clamp(96px, 12vw, 180px)',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "SF Pro", -apple-system, system-ui, sans-serif'
      }}
    >
      <div className="container-wide">
        {/* Section Header: Asymmetric Editorial Composition */}
        <header
          className="editorial-header"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.45fr) minmax(280px, 1fr)',
            gap: 'clamp(32px, 5vw, 96px)',
            alignItems: 'end',
            marginBottom: 'clamp(64px, 8vw, 112px)'
          }}
        >
          {/* Left Column: Eyebrow + Oversized Display Headline */}
          <div>
            {/* Small Uppercase Eyebrow with Coral Accent */}
            <div
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
                  backgroundColor: '#C93227',
                  flexShrink: 0
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
                WHAT WE BUILD
              </span>
            </div>

            {/* Oversized Headline */}
            <h2
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                fontSize: 'clamp(2.75rem, 5.8vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: '-0.04em',
                color: 'var(--ignis-ink)',
                margin: 0,
                textWrap: 'balance'
              }}
            >
              Systems built for work.
              <br />
              <span style={{ color: 'var(--ignis-ink)' }}>Not software for show.</span>
            </h2>
          </div>

          {/* Right Column: Restrained Supporting Copy */}
          <div style={{ maxWidth: '520px' }}>
            <p
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                fontSize: 'clamp(1.125rem, 1.4vw, 1.35rem)',
                fontWeight: 400,
                lineHeight: 1.6,
                letterSpacing: '-0.015em',
                color: 'var(--ignis-muted)',
                margin: 0
              }}
            >
              AI assistants, automations and internal tools designed around the way your
              business actually works.
            </p>
          </div>
        </header>

        {/* Three Editorial Rows with Thin Horizontal Hairlines */}
        <div
          className="editorial-rows"
          style={{
            borderTop: '1px solid var(--ignis-line)',
            position: 'relative'
          }}
        >
          {capabilities.map((cap, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <article
                key={cap.index}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  borderBottom: '1px solid var(--ignis-line)',
                  paddingTop: 'clamp(48px, 6vw, 80px)',
                  paddingBottom: 'clamp(48px, 6vw, 80px)',
                  display: 'grid',
                  gridTemplateColumns:
                    'clamp(140px, 14vw, 210px) minmax(340px, 1.45fr) minmax(280px, 1fr)',
                  gap: 'clamp(32px, 5vw, 80px)',
                  alignItems: 'start',
                  transition: 'background-color 240ms ease'
                }}
                className="editorial-capability-row"
              >
                {/* 1. Large Index Number & Category Label */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                  className="row-col-index"
                >
                  <div
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                      fontSize: 'clamp(2.75rem, 4.2vw, 4.25rem)',
                      fontWeight: 300,
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      color: isHovered ? 'var(--ignis-ink)' : 'var(--ignis-muted)',
                      opacity: isHovered ? 1 : 0.65,
                      marginBottom: '16px',
                      transition:
                        'color 240ms ease, opacity 240ms ease, transform 240ms ease',
                      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
                    }}
                  >
                    {cap.index}
                  </div>

                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#C93227',
                        transition: 'transform 200ms ease',
                        transform: isHovered ? 'scale(1.3)' : 'scale(1)'
                      }}
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--ignis-ink)'
                      }}
                    >
                      {cap.category}
                    </span>
                  </div>
                </div>

                {/* 2. Large Statement */}
                <div className="row-col-statement">
                  <h3
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                      fontSize: 'clamp(2rem, 3.3vw, 3.35rem)',
                      fontWeight: 700,
                      lineHeight: 1.08,
                      letterSpacing: '-0.035em',
                      color: 'var(--ignis-ink)',
                      margin: 0,
                      textWrap: 'balance'
                    }}
                  >
                    <span>{cap.statementLine1}</span>
                    <br />
                    <span>{cap.statementLine2}</span>
                  </h3>
                </div>

                {/* 3. Short Supporting Description & Precision Process Flow */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '100%'
                  }}
                  className="row-col-content"
                >
                  <p
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                      fontSize: 'clamp(1rem, 1.15vw, 1.125rem)',
                      lineHeight: 1.65,
                      letterSpacing: '-0.01em',
                      color: 'var(--ignis-muted)',
                      margin: 0,
                      marginBottom: 'clamp(28px, 3.5vw, 44px)',
                      maxWidth: '460px'
                    }}
                  >
                    {cap.description}
                  </p>

                  {/* Precision Technical Process Metadata Flow */}
                  <div
                    aria-label={`Process flow: ${cap.metadata.join(' then ')}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '10px',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--ignis-line)',
                      userSelect: 'none'
                    }}
                  >
                    {cap.metadata.map((step, sIdx) => (
                      <React.Fragment key={step}>
                        <span
                          style={{
                            fontFamily:
                              '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, ui-monospace, Menlo, monospace',
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: isHovered ? 'var(--ignis-ink)' : 'var(--ignis-muted)',
                            transition: 'color 200ms ease'
                          }}
                        >
                          {step}
                        </span>

                        {sIdx < cap.metadata.length - 1 && (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              color: isHovered ? '#C93227' : 'var(--ignis-muted)',
                              opacity: isHovered ? 1 : 0.5,
                              transition: 'color 200ms ease, opacity 200ms ease'
                            }}
                            aria-hidden="true"
                          >
                            <svg
                              width="12"
                              height="8"
                              viewBox="0 0 12 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                x1="0"
                                y1="4"
                                x2="10"
                                y2="4"
                                stroke="currentColor"
                                strokeWidth="1.2"
                              />
                              <polyline
                                points="7,1 10,4 7,7"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 960px) {
          .editorial-header {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            align-items: start !important;
          }
          .editorial-capability-row {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .row-col-index {
            flex-direction: row !important;
            align-items: baseline !important;
            gap: 20px !important;
          }
          .row-col-index > div:first-child {
            margin-bottom: 0 !important;
          }
        }

        @media (min-width: 961px) and (max-width: 1180px) {
          .editorial-capability-row {
            grid-template-columns: 110px minmax(300px, 1.3fr) minmax(240px, 1fr) !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
