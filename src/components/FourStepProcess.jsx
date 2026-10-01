import React, { useState, useEffect, useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';

/**
 * FourStepProcess Component (Section 05)
 * 
 * "From friction to flow in four steps."
 * 
 * Four large sequential editorial blocks:
 * 01 — Understand the workflow. (Map how work actually moves through the business.)
 * 02 — Design the system. (Define the logic, rules and responsibilities around the workflow.)
 * 03 — Connect the tools. (Bring existing software, data and systems together.)
 * 04 — Deploy and improve. (Launch the system, measure it and continuously improve it.)
 * 
 * Dynamic scroll tracking: active stage highlights and recedes inactive ones. Zero cards.
 */
export default function FourStepProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const stageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight * 0.45;
      stageRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= centerY && rect.bottom >= centerY) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stages = [
    {
      num: '01',
      title: 'Understand the workflow.',
      explanation: 'Map how work actually moves through the business. We analyze where operational handoffs stall, where data gets isolated, and where human attention is wasted.',
      meta: 'AUDIT · BOTTLENECK MAPPING',
      flowNodes: ['INPUT AUDIT', 'FRICTION POINTS', 'DECISION GATES']
    },
    {
      num: '02',
      title: 'Design the system.',
      explanation: 'Define the logic, rules and responsibilities around the workflow. We architect custom extraction models, deterministic validation bounds, and clear human sign-off checkpoints.',
      meta: 'ARCHITECTURE · LOGIC GATES',
      flowNodes: ['CUSTOM SCHEMAS', 'VALIDATION RULES', 'HUMAN SIGN-OFF']
    },
    {
      num: '03',
      title: 'Connect the tools.',
      explanation: 'Bring existing software, data and systems together. We integrate directly into your CRM, email servers, databases, and document storage with secure, enterprise API credentials.',
      meta: 'INTEGRATION · TWO-WAY SYNC',
      flowNodes: ['INBOX & CRM', 'DATABASE HOOKS', 'BIDIRECTIONAL SYNC']
    },
    {
      num: '04',
      title: 'Deploy and improve.',
      explanation: 'Launch the system, measure it and continuously improve it. We deploy alongside your team, train your staff, rotate credentials directly to your firm, and tune accuracy as volume scales.',
      meta: 'PRODUCTION · REFINEMENT',
      flowNodes: ['LIVE STAGING', 'OPERATOR TRAINING', 'CONTINUOUS TUNING']
    }
  ];

  return (
    <section
      id="process"
      aria-label="From Friction to Flow in Four Steps"
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
      <div id="how-it-works" style={{ position: 'absolute', top: 0 }} aria-hidden="true" />
      <div className="container-wide">
        <RevealOnScroll>
          {/* Section Header */}
          <header
            className="process-header"
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
                  05 / THE METHOD
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
                From friction to flow
                <br />
                <span style={{ color: 'var(--ignis-ink)' }}>in four steps.</span>
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
                A disciplined, engineering-first engagement structure designed to eliminate operational
                drag without disrupting your team’s existing day-to-day operations.
              </p>
            </div>
          </header>

          {/* Four Large Sequential Editorial Blocks */}
          <div
            className="process-sequence reveal-content"
            style={{
              borderTop: '1px solid var(--ignis-line)',
              position: 'relative'
            }}
          >
            {stages.map((stage, idx) => {
              const isActive = activeStep === idx;

              return (
                <article
                  key={stage.num}
                  ref={(el) => (stageRefs.current[idx] = el)}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="process-block-row"
                  style={{
                    borderBottom: '1px solid var(--ignis-line)',
                    paddingTop: 'clamp(44px, 5.5vw, 68px)',
                    paddingBottom: 'clamp(44px, 5.5vw, 68px)',
                    display: 'grid',
                    gridTemplateColumns: 'clamp(120px, 12vw, 160px) minmax(320px, 1.35fr) minmax(260px, 1fr)',
                    gap: 'clamp(32px, 5vw, 72px)',
                    alignItems: 'start',
                    cursor: 'pointer',
                    opacity: isActive ? 1 : 0.42,
                    transform: isActive ? 'translateY(0)' : 'translateY(2px)',
                    transition: 'opacity 280ms ease, transform 280ms ease'
                  }}
                >
                  {/* 1. Oversized Number */}
                  <div>
                    <div
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: 300,
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: isActive ? '#C93227' : 'var(--ignis-muted)',
                        marginBottom: '14px',
                        transition: 'color 240ms ease'
                      }}
                    >
                      {stage.num}
                    </div>
                  <div
                    style={{
                      width: '28px',
                      height: '2px',
                      backgroundColor: isActive ? '#C93227' : 'transparent',
                      transition: 'background-color 200ms ease'
                    }}
                  />
                </div>

                {/* 2. Short Title & Explanation */}
                <div>
                  <div
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: isActive ? '#C93227' : 'var(--ignis-muted)',
                      marginBottom: '10px',
                      transition: 'color 200ms ease'
                    }}
                  >
                    STAGE {stage.num} · {stage.meta}
                  </div>

                  <h3
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                      fontSize: 'clamp(1.75rem, 2.8vw, 2.75rem)',
                      fontWeight: 700,
                      lineHeight: 1.1,
                      letterSpacing: '-0.035em',
                      color: 'var(--ignis-ink)',
                      margin: 0,
                      marginBottom: '16px'
                    }}
                  >
                    {stage.title}
                  </h3>

                  <p
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                      fontSize: 'clamp(1rem, 1.1vw, 1.125rem)',
                      lineHeight: 1.62,
                      color: 'var(--ignis-muted)',
                      margin: 0,
                      maxWidth: '520px'
                    }}
                  >
                    {stage.explanation}
                  </p>
                </div>

                {/* 3. Subtle Visual Process Representation */}
                <div style={{ paddingTop: '8px' }}>
                  <div
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--ignis-muted)',
                      marginBottom: '12px'
                    }}
                  >
                    SYSTEM NODES
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      userSelect: 'none'
                    }}
                  >
                    {stage.flowNodes.map((node, nIdx) => (
                      <div
                        key={node}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                          fontSize: '0.6875rem',
                          color: isActive ? 'var(--ignis-ink)' : 'var(--ignis-muted)'
                        }}
                      >
                        <span
                          style={{
                            width: '4px',
                            height: '4px',
                            backgroundColor: isActive ? '#C93227' : 'var(--ignis-line)',
                            display: 'inline-block'
                          }}
                        />
                        <span>{node}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .process-header {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .process-block-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding-top: 36px !important;
            padding-bottom: 36px !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
