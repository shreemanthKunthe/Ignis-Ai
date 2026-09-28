import React, { useState } from 'react';
import GetStartedButton from './GetStartedButton';

/**
 * TypographicSwitcher Component
 * 
 * Sourced directly from Screenshot 4 ("AI that / Create Images / Makes videos / Stays on-brand"):
 * - Full-viewport scale
 * - Left: Giant "Systems that" + CTA pill
 * - Right: Massive typographic stack with active/inactive state transitions
 * - Clean, confident, pure typography
 */
export default function TypographicSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);

  const capabilities = [
    {
      title: 'Eliminate manual triage.',
      impact: 'Incoming emails, PDF contracts, intake forms, and messaging requests are ingested and prepared automatically without manual copy-pasting.'
    },
    {
      title: 'Connect fragmented tools.',
      impact: 'Break data silos between your CRM, document drives, ERP, and accounting ledger with real-time bidirectional synchronization.'
    },
    {
      title: 'Keep humans in control.',
      impact: 'Every consequential client communication, high-value invoice, and database update pauses in an intuitive queue for human sign-off.'
    }
  ];

  return (
    <section
      id="systems-stack"
      aria-label="How Ignis Operates"
      style={{
        paddingTop: 'clamp(96px, 14vw, 180px)',
        paddingBottom: 'clamp(96px, 14vw, 180px)',
        borderTop: '1px solid var(--ignis-line)',
        backgroundColor: 'var(--ignis-paper)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* 2-Column Asymmetric Layout */}
        <div
          className="typographic-switcher-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(360px, 2.2fr)',
            gap: 'clamp(48px, 8vw, 120px)',
            alignItems: 'start'
          }}
        >
          {/* LEFT: Giant "Systems that" */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2
              className="font-headline"
              style={{
                fontSize: 'clamp(3.5rem, 6.5vw, 6.5rem)',
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                color: 'var(--ignis-ink)',
                marginBottom: 'clamp(32px, 5vw, 56px)'
              }}
            >
              Systems<br />
              that
            </h2>

            <div>
              <GetStartedButton href="#founder" variant="coral">
                Talk to the builder
              </GetStartedButton>
            </div>
          </div>

          {/* RIGHT: Massive Typographic Headline Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 5vw, 64px)' }}>
            {capabilities.map((cap, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={cap.title}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
                    borderBottom: '1px solid var(--ignis-line)',
                    paddingBottom: 'clamp(28px, 4vw, 48px)'
                  }}
                >
                  {/* Huge Headline */}
                  <div
                    className="font-headline"
                    style={{
                      fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)',
                      fontWeight: 800,
                      lineHeight: 1.05,
                      letterSpacing: '-0.035em',
                      color: isActive ? 'var(--ignis-ink)' : 'rgba(20, 14, 13, 0.22)',
                      transition: 'color var(--transition-fast)'
                    }}
                  >
                    {cap.title}
                  </div>

                  {/* Active Expandable Detail */}
                  <div
                    style={{
                      maxHeight: isActive ? '180px' : '0px',
                      opacity: isActive ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'all 320ms cubic-bezier(0.16, 1, 0.3, 1)',
                      marginTop: isActive ? '20px' : '0px'
                    }}
                  >
                    <p
                      style={{
                        fontSize: 'clamp(1.125rem, 1.5vw, 1.35rem)',
                        color: 'var(--ignis-muted)',
                        lineHeight: 1.6,
                        maxWidth: '780px'
                      }}
                    >
                      {cap.impact}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .typographic-switcher-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
