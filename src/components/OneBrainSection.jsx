import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

/**
 * OneBrainSection — Section 04-B
 * "One brain. Any model."
 *
 * Typography, spacing, layout and colour tokens exactly mirror
 * FourStepProcess / EditorialCapabilities / PhilosophyTrust.
 */

const F_DISPLAY = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif';
const F_TEXT    = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif';
const F_MONO    = '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, ui-monospace, Menlo, monospace';

const MODELS = ['Claude', 'ChatGPT', 'Gemini', 'Microsoft Copilot', 'Open-source'];

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

/* Output card — mimics a live system alert, styled like the site's card idiom */
function OutputCard() {
  return (
    <div style={{
      border: '1px solid var(--ignis-line)',
      borderRadius: '4px',
      backgroundColor: 'var(--ignis-card)',
      overflow: 'hidden',
    }}>
      {/* Card header */}
      <div style={{
        padding: 'clamp(16px, 2.5vw, 24px)',
        borderBottom: '1px solid var(--ignis-line)',
      }}>
        <p style={{ fontFamily: F_MONO, fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C93227', margin: 0, marginBottom: '10px' }}>
          ACTIVE · EXAMPLE OUTPUT
        </p>
        <p style={{ fontFamily: F_TEXT, fontSize: '0.9375rem', fontWeight: 600, lineHeight: 1.5, color: 'var(--ignis-ink)', margin: 0 }}>
          Harbour Dental was quoted $4,800<br />
          on Quote Q1.2291. The follow-up<br />
          is due today.
        </p>
      </div>

      {/* Data rows */}
      {[{ label: 'Quote ID', value: 'Q1.2291' }, { label: 'Pricing', value: '$4,800.00' }, { label: 'Follow-up', value: 'Contact' }].map((row) => (
        <div key={row.label} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px clamp(16px, 2.5vw, 24px)',
          borderBottom: '1px solid var(--ignis-line)',
        }}>
          <span style={{ fontFamily: F_MONO, fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ignis-muted)' }}>
            {row.label}
          </span>
          <span style={{ fontFamily: F_TEXT, fontSize: '0.875rem', fontWeight: 600, color: 'var(--ignis-ink)' }}>
            {row.value}
          </span>
        </div>
      ))}

      {/* Footer */}
      <div style={{ padding: 'clamp(14px, 2vw, 20px) clamp(16px, 2.5vw, 24px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: F_MONO, fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ignis-muted)' }}>
          SAME DATA. SAME SOURCES.
        </span>
        <button style={{
          display: 'inline-flex',
          alignItems: 'center',
          height: '32px',
          padding: '0 18px',
          borderRadius: '999px',
          border: 'none',
          backgroundColor: '#C93227',
          color: '#fff',
          fontFamily: F_TEXT,
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          cursor: 'pointer',
        }}>
          Approve
        </button>
      </div>
    </div>
  );
}

export default function OneBrainSection() {
  const [activeModel, setActiveModel] = useState('Gemini');

  const queries = [
    'What did we quote Harbour Dental, and is the follow-up due?',
    "Summarise this week's new enquiries",
    'Show me last month\'s close rate',
  ];

  return (
    <section
      id="one-brain"
      aria-label="One brain. Any model."
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

          {/* ── Section Header ── */}
          <header
            className="onebrain-header"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 1fr)',
              gap: 'clamp(32px, 5vw, 88px)',
              alignItems: 'end',
              marginBottom: 'clamp(64px, 8vw, 112px)',
            }}
          >
            <div>
              <SectionEyebrow label="05 / THE INTELLIGENCE" />
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
                One brain.
                <br />
                <em style={{ fontStyle: 'italic', color: '#C93227' }}>Any model.</em>
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
                }}
              >
                Your business context lives in your accounts. Pick the AI. The knowledge stays yours — no retraining, no lock-in, no data leaving your infrastructure.
              </p>
            </div>
          </header>

          {/* ── Main content grid ── */}
          <div
            className="reveal-content onebrain-body"
            style={{
              borderTop: '1px solid var(--ignis-line)',
              paddingTop: 'clamp(48px, 6vw, 80px)',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.25fr) minmax(280px, 1fr)',
              gap: 'clamp(32px, 5vw, 80px)',
              alignItems: 'start',
            }}
          >
            {/* Left: example queries + model selector */}
            <div>
              {/* Example query chips */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'clamp(36px, 5vw, 52px)' }}>
                {queries.map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '38px',
                      padding: '0 16px',
                      borderRadius: '999px',
                      border: '1px solid var(--ignis-line)',
                      backgroundColor: i === 0 ? 'var(--ignis-card)' : 'transparent',
                      fontFamily: F_TEXT,
                      fontSize: '0.875rem',
                      fontWeight: i === 0 ? 500 : 400,
                      lineHeight: 1,
                      color: i === 0 ? 'var(--ignis-ink)' : 'var(--ignis-muted)',
                      boxShadow: i === 0 ? '0 1px 6px rgba(0,0,0,0.05)' : 'none',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {q}
                  </div>
                ))}
              </div>

              {/* Model selector */}
              <div style={{ marginBottom: 'clamp(36px, 5vw, 52px)' }}>
                <p style={{ fontFamily: F_MONO, fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ignis-muted)', margin: 0, marginBottom: '12px' }}>
                  SELECT MODEL
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {MODELS.map((m) => {
                    const isActive = m === activeModel;
                    return (
                      <button
                        key={m}
                        onClick={() => setActiveModel(m)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          height: '34px',
                          padding: '0 14px',
                          borderRadius: '999px',
                          border: isActive ? '1px solid #C93227' : '1px solid var(--ignis-line)',
                          backgroundColor: isActive ? '#C93227' : 'transparent',
                          fontFamily: F_TEXT,
                          fontSize: '0.8125rem',
                          fontWeight: isActive ? 600 : 400,
                          letterSpacing: '-0.01em',
                          color: isActive ? '#fff' : 'var(--ignis-muted)',
                          cursor: 'pointer',
                          transition: 'all 180ms ease',
                        }}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom metadata — same pattern as process step flowNodes */}
              <div
                style={{
                  paddingTop: 'clamp(16px, 2vw, 24px)',
                  borderTop: '1px solid var(--ignis-line)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px 32px',
                }}
              >
                {['Stays in your account', 'Business-essential logic', 'No training on your data', 'Easily switched'].map((item, i) => (
                  <React.Fragment key={item}>
                    <span style={{ fontFamily: F_MONO, fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ignis-muted)' }}>
                      {item}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right: output card */}
            <div>
              <OutputCard />
            </div>
          </div>

        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .onebrain-header { grid-template-columns: 1fr !important; gap: 28px !important; }
          .onebrain-body   { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
