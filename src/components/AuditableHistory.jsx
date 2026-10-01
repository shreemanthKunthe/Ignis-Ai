import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

/**
 * AuditableHistory — Section 04-C
 * Part A: "Every run leaves a readable history."
 * Part B: "Better work. In three meaningful ways."
 *
 * Typography, spacing, layout and colour tokens exactly mirror
 * FourStepProcess / EditorialCapabilities / PhilosophyTrust.
 */

const F_DISPLAY = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif';
const F_TEXT    = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif';
const F_MONO    = '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, ui-monospace, Menlo, monospace';

function SectionEyebrow({ label }) {
  return (
    <div
      className="reveal-eyebrow"
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: 'clamp(16px, 2.5vw, 24px)', userSelect: 'none' }}
    >
      <span style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#C93227', flexShrink: 0 }} aria-hidden="true" />
      <span style={{ fontFamily: F_TEXT, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ignis-ink)' }}>
        {label}
      </span>
    </div>
  );
}

/* Inline arrow — same SVG as FourStepProcess flowNode arrows */
function Arrow({ active }) {
  const c = active ? '#C93227' : 'var(--ignis-line)';
  return (
    <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <line x1="0" y1="4" x2="12" y2="4" stroke={c} strokeWidth="1.2" />
      <polyline points="9,1 12,4 9,7" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Inline Ignis hub badge — same shape / size as ToolNode centre */
function IgnisHub({ active }) {
  return (
    <div style={{
      width: '32px', height: '32px', borderRadius: '8px',
      backgroundColor: '#C93227',
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      boxShadow: active ? '0 4px 14px rgba(201,50,39,0.32)' : '0 2px 8px rgba(201,50,39,0.18)',
      transition: 'box-shadow 200ms ease',
    }}>
      <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
        <path d="M3.5 15C1.2 13 0 9.5 0 6C0 4 0.7 2.2 1.9 0.8C2.2 0.5 2.7 0.7 2.6 1.1C2.3 3.2 3.5 5.3 4.8 6.7C5.8 7.9 6.7 8.8 6.7 10.5C6.7 12 5.5 14 3.5 15Z" fill="white"/>
        <path d="M8.8 15.4C6.6 13.8 5.3 10.8 5.3 7.8C5.3 5.7 6.1 3.8 7.6 2.1C7.9 1.7 8.5 1.9 8.4 2.4C8.1 4.7 9.3 7 10.7 8.5C11.8 9.7 13 10.9 13 12.5C13 14.1 11.2 15.6 8.8 15.4Z" fill="white" opacity="0.86"/>
      </svg>
    </div>
  );
}

/* Flow node pill */
function FlowNode({ label, isOutput, active }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center',
      height: '28px', padding: '0 10px',
      borderRadius: '4px',
      border: isOutput && active ? '1px solid #C93227' : '1px solid var(--ignis-line)',
      backgroundColor: isOutput && active ? 'rgba(201,50,39,0.06)' : 'var(--ignis-card)',
      fontFamily: F_MONO,
      fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
      color: isOutput && active ? '#C93227' : active ? 'var(--ignis-ink)' : 'var(--ignis-muted)',
      transition: 'all 200ms ease',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </div>
  );
}

const WAYS = [
  {
    num: '01',
    title: 'Save time.',
    body: "Documents reviewed. Forms chased. Information moves between systems. We build the solutions and automations that take the repeat work off your team\u2019s time.",
    items: ['Document review & formatting automation', 'Workflow & scheduling automation'],
    flow: ['Documents', 'Forms', 'Your Systems'],
  },
  {
    num: '02',
    title: 'Grow revenue.',
    body: 'Help enquiries reach the right person, prepare follow-ups, and keep the CRM up to date. Less chasing. More time for the conversations that win work.',
    items: ['Sales & marketing automation', 'Enquiry routing & scheduling'],
    flow: ['New enquiry', 'Right person', 'Follow-up sent'],
  },
  {
    num: '03',
    title: 'Work smarter.',
    body: 'Bring scattered information into one central view. From custom tools and client portals to a practical AI plan, we build around the way your business actually works.',
    items: ['Custom CRM & activity history', 'AI assistant setup & training'],
    flow: ['Your CRM', 'Your databases', 'Your accounts'],
  },
];

export default function AuditableHistory() {
  const [hoveredWay, setHoveredWay] = useState(null);

  return (
    <section
      id="auditable"
      aria-label="Every run leaves a readable history"
      style={{
        backgroundColor: 'var(--ignis-paper)',
        color: 'var(--ignis-ink)',
        borderTop: '1px solid var(--ignis-line)',
        paddingTop: 'clamp(96px, 12vw, 160px)',
        paddingBottom: 'clamp(96px, 12vw, 160px)',
        position: 'relative',
        fontFamily: F_DISPLAY,
      }}
    >
      <div className="container-wide">
        <RevealOnScroll>

          {/* ═══ PART A: Audit trail headline + stats ═══ */}
          <header
            className="auditable-header"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 1fr)',
              gap: 'clamp(32px, 5vw, 88px)',
              alignItems: 'end',
              marginBottom: 'clamp(64px, 8vw, 112px)',
            }}
          >
            <div>
              <SectionEyebrow label="06 / THE RECORD" />
              <h2
                className="reveal-headline"
                style={{
                  fontFamily: F_DISPLAY,
                  fontSize: 'clamp(2.5rem, 5.2vw, 4.75rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  color: 'var(--ignis-ink)',
                  margin: 0,
                  textWrap: 'balance',
                }}
              >
                Every run leaves
                <br />
                a readable history.
              </h2>
            </div>

            <div>
              <p
                className="reveal-body"
                style={{
                  fontFamily: F_TEXT,
                  fontSize: 'clamp(1.0625rem, 1.35vw, 1.25rem)',
                  lineHeight: 1.62,
                  letterSpacing: '-0.015em',
                  color: 'var(--ignis-muted)',
                  margin: 0,
                  maxWidth: '480px',
                  marginBottom: 'clamp(32px, 4vw, 48px)',
                }}
              >
                The work moves through audited stages. A person approves what matters. Anyone on your team can open a run and see what happened, when, and why.
              </p>

              {/* Stats — three columns matching PhilosophyTrust column rhythm */}
              <div
                style={{
                  display: 'flex',
                  gap: 'clamp(28px, 4vw, 52px)',
                  flexWrap: 'wrap',
                  paddingTop: 'clamp(20px, 2.5vw, 32px)',
                  borderTop: '1px solid var(--ignis-line)',
                }}
              >
                {[
                  { stat: '6',     label: 'Pipeline stages' },
                  { stat: '4',     label: 'Human gates' },
                  { stat: '100%',  label: 'Owner-owned' },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{
                      fontFamily: F_DISPLAY,
                      fontSize: 'clamp(2rem, 3.8vw, 3.5rem)',
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      color: '#C93227',
                    }}>
                      {s.stat}
                    </div>
                    <div style={{
                      fontFamily: F_MONO,
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--ignis-muted)',
                      marginTop: '8px',
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* ═══ PART B: Better work. In three meaningful ways. ═══ */}
          <div
            className="reveal-content"
            style={{ borderTop: '1px solid var(--ignis-line)', paddingTop: 'clamp(64px, 8vw, 112px)' }}
          >
            {/* Sub-header */}
            <header style={{ marginBottom: 'clamp(48px, 6vw, 80px)' }}>
              <SectionEyebrow label="ALL SYSTEMS" />
              <h2
                style={{
                  fontFamily: F_DISPLAY,
                  fontSize: 'clamp(2.25rem, 4.8vw, 4.25rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  color: 'var(--ignis-ink)',
                  margin: 0,
                  marginBottom: '16px',
                  textWrap: 'balance',
                }}
              >
                Better work.{' '}
                <em style={{ fontStyle: 'italic', color: '#C93227' }}>In three meaningful ways.</em>
              </h2>
              <p style={{
                fontFamily: F_TEXT,
                fontSize: 'clamp(1.0625rem, 1.35vw, 1.25rem)',
                lineHeight: 1.62,
                letterSpacing: '-0.015em',
                color: 'var(--ignis-muted)',
                margin: 0,
                maxWidth: '540px',
              }}>
                Built for you to review. Measured by actual changes in your day.
              </p>
            </header>

            {/* Three editorial rows — same grid as EditorialCapabilities rows */}
            <div style={{ borderTop: '1px solid var(--ignis-line)' }}>
              {WAYS.map((way, idx) => {
                const isHov = hoveredWay === idx;
                return (
                  <article
                    key={way.num}
                    onMouseEnter={() => setHoveredWay(idx)}
                    onMouseLeave={() => setHoveredWay(null)}
                    className="auditable-way-row"
                    style={{
                      borderBottom: '1px solid var(--ignis-line)',
                      paddingTop: 'clamp(44px, 5.5vw, 68px)',
                      paddingBottom: 'clamp(44px, 5.5vw, 68px)',
                      display: 'grid',
                      gridTemplateColumns: 'clamp(120px, 12vw, 160px) minmax(320px, 1.35fr) minmax(260px, 1fr)',
                      gap: 'clamp(32px, 5vw, 72px)',
                      alignItems: 'start',
                      transition: 'opacity 240ms ease',
                    }}
                  >
                    {/* 1. Large number + dot */}
                    <div>
                      <div style={{
                        fontFamily: F_DISPLAY,
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: 300,
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: isHov ? '#C93227' : 'var(--ignis-muted)',
                        opacity: isHov ? 1 : 0.45,
                        marginBottom: '14px',
                        transition: 'color 240ms ease, opacity 240ms ease',
                      }}>
                        {way.num}
                      </div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          display: 'inline-block', width: '4px', height: '4px',
                          backgroundColor: '#C93227',
                          transition: 'transform 200ms ease',
                          transform: isHov ? 'scale(1.3)' : 'scale(1)',
                        }} aria-hidden="true" />
                        <span style={{ fontFamily: F_MONO, fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ignis-ink)' }}>
                          {['SAVE TIME', 'GROW REVENUE', 'WORK SMARTER'][idx]}
                        </span>
                      </div>
                    </div>

                    {/* 2. Title + body + bullet items */}
                    <div>
                      <h3 style={{
                        fontFamily: F_DISPLAY,
                        fontSize: 'clamp(2rem, 3.3vw, 3.25rem)',
                        fontWeight: 700,
                        lineHeight: 1.08,
                        letterSpacing: '-0.035em',
                        color: 'var(--ignis-ink)',
                        margin: 0,
                        marginBottom: 'clamp(14px, 2vw, 20px)',
                        textWrap: 'balance',
                      }}>
                        {way.title}
                      </h3>

                      <p style={{
                        fontFamily: F_TEXT,
                        fontSize: 'clamp(1rem, 1.15vw, 1.125rem)',
                        lineHeight: 1.65,
                        letterSpacing: '-0.01em',
                        color: 'var(--ignis-muted)',
                        margin: 0,
                        marginBottom: 'clamp(20px, 2.5vw, 28px)',
                        maxWidth: '460px',
                      }}>
                        {way.body}
                      </p>

                      {/* Bullet items — same dot+text as PhilosophyTrust explanation  */}
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        paddingTop: '16px',
                        borderTop: '1px solid var(--ignis-line)',
                      }}>
                        {way.items.map((item) => (
                          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{
                              display: 'inline-block', width: '3px', height: '3px', borderRadius: '50%',
                              backgroundColor: '#C93227', flexShrink: 0,
                            }} aria-hidden="true" />
                            <span style={{ fontFamily: F_TEXT, fontSize: '0.875rem', lineHeight: 1.55, color: 'var(--ignis-muted)' }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. Flow diagram — same arrow/node pattern as FourStepProcess */}
                    <div style={{ paddingTop: '6px' }}>
                      <p style={{
                        fontFamily: F_MONO, fontSize: '0.6875rem', fontWeight: 600,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: 'var(--ignis-muted)', margin: 0, marginBottom: '16px',
                      }}>
                        INPUT — OUTPUT
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                        {way.flow.map((node, ni) => (
                          <React.Fragment key={node}>
                            <FlowNode label={node} active={isHov} />
                            <Arrow active={isHov} />
                          </React.Fragment>
                        ))}
                        <IgnisHub active={isHov} />
                        <Arrow active={isHov} />
                        <FlowNode label="Ready for review" isOutput active={isHov} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .auditable-header    { grid-template-columns: 1fr !important; gap: 28px !important; }
          .auditable-way-row   { grid-template-columns: 1fr !important; gap: 24px !important;
                                 padding-top: 36px !important; padding-bottom: 36px !important; }
        }
        @media (min-width: 961px) and (max-width: 1180px) {
          .auditable-way-row {
            grid-template-columns: 110px minmax(280px, 1.3fr) minmax(220px, 1fr) !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
