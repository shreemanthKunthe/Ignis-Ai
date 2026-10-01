import React from 'react';
import RevealOnScroll from './RevealOnScroll';

/**
 * ToolIntegrations — Section 04-A
 * "Your work is personal. Your AI should be, too."
 *
 * Typography, spacing, layout and colour tokens exactly mirror
 * FourStepProcess / EditorialCapabilities / PhilosophyTrust.
 */

/* ── Shared inline font stacks (identical to FourStepProcess) ── */
const F_DISPLAY = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif';
const F_TEXT    = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif';
const F_MONO    = '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, ui-monospace, Menlo, monospace';

/* ── Reusable sub-components ── */

function SectionEyebrow({ label }) {
  return (
    <div
      className="reveal-eyebrow"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: 'clamp(16px, 2.5vw, 24px)',
        userSelect: 'none',
      }}
    >
      <span
        style={{ display: 'inline-block', width: '5px', height: '5px', backgroundColor: '#C93227', flexShrink: 0 }}
        aria-hidden="true"
      />
      <span style={{ fontFamily: F_TEXT, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ignis-ink)' }}>
        {label}
      </span>
    </div>
  );
}

/* Minimal tool node — index number badge + label underneath */
function ToolNode({ label, mono, isCenter = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div
        style={{
          width: isCenter ? '52px' : '44px',
          height: isCenter ? '52px' : '44px',
          borderRadius: isCenter ? '12px' : '10px',
          backgroundColor: isCenter ? '#C93227' : 'var(--ignis-card)',
          border: isCenter ? 'none' : '1px solid var(--ignis-line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isCenter ? '0 4px 18px rgba(201,50,39,0.28)' : '0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        {isCenter ? (
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
            <path d="M5.5 22C2 19 0 13.5 0 8.5C0 5.8 1 3.2 2.9 1.1C3.3 0.7 3.9 1 3.8 1.5C3.4 4.5 5 7.6 6.9 9.7C8.3 11.3 9.7 12.5 9.7 15C9.7 17 8 20 5.5 22Z" fill="white"/>
            <path d="M13 22.5C9.8 20.1 8 16 8 11.5C8 8.2 9.3 5.2 11.6 2.6C12 2.1 12.7 2.3 12.6 2.9C12.2 6 14 9.3 15.9 11.5C17.5 13.3 19 15 19 17.4C19 19.8 16.5 22.4 13 22.5Z" fill="white" opacity="0.88"/>
          </svg>
        ) : (
          <span style={{ fontFamily: F_MONO, fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--ignis-muted)', textTransform: 'uppercase' }}>
            {mono}
          </span>
        )}
      </div>
      <span style={{ fontFamily: F_MONO, fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ignis-muted)', whiteSpace: 'nowrap' }}>
        {label}
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="24" height="10" viewBox="0 0 24 10" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <line x1="0" y1="5" x2="20" y2="5" stroke="var(--ignis-line)" strokeWidth="1.2" />
      <polyline points="16,1.5 20,5 16,8.5" stroke="var(--ignis-line)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ToolIntegrations() {
  const industries = ['Legal', 'Accounting', 'Admin', 'Finance', 'Industry', 'Health', 'Construction', 'Logistics'];
  const leftTools  = [{ label: 'Gmail', mono: 'GM' }, { label: 'Slack', mono: 'SL' }, { label: 'Xero', mono: 'XR' }];
  const rightTools = [{ label: 'Notion', mono: 'NT' }, { label: 'Drive', mono: 'GD' }, { label: 'HubSpot', mono: 'HS' }];

  return (
    <section
      id="integrations"
      aria-label="Your work is personal. Your AI should be, too."
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

          {/* ── Section Header — exact grid from FourStepProcess ── */}
          <header
            className="integrations-header"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 1fr)',
              gap: 'clamp(32px, 5vw, 88px)',
              alignItems: 'end',
              marginBottom: 'clamp(64px, 8vw, 112px)',
            }}
          >
            <div>
              <SectionEyebrow label="04 / THE INTEGRATION" />
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
                Your work is personal.
                <br />
                <em style={{ fontStyle: 'italic', color: '#C93227' }}>Your AI should be, too.</em>
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
                  marginBottom: 'clamp(24px, 3vw, 36px)',
                }}
              >
                Find the part of your work you'd like to get back. The system plugs into the tools your team already uses — nothing new to learn.
              </p>

              {/* Industry labels — mono metadata flow (same pattern as step metadata) */}
              <div
                aria-label="Industries served"
                style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--ignis-line)' }}
              >
                {industries.map((ind, i) => (
                  <span key={ind} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontFamily: F_MONO, fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ignis-muted)' }}>
                      {ind}
                    </span>
                    {i < industries.length - 1 && (
                      <span style={{ color: 'var(--ignis-line)', fontSize: '0.5rem' }} aria-hidden="true">◆</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* ── Tool ecosystem diagram ── */}
          <div
            className="reveal-content"
            style={{ borderTop: '1px solid var(--ignis-line)', paddingTop: 'clamp(48px, 6vw, 80px)' }}
          >
            <div
              className="integration-diagram"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(16px, 3vw, 40px)',
                flexWrap: 'wrap',
              }}
            >
              {/* Left tools */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {leftTools.map((t) => <ToolNode key={t.label} {...t} />)}
              </div>

              <Arrow />

              {/* Central Ignis hub */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <ToolNode label="" mono="" isCenter />
                <span style={{ fontFamily: F_MONO, fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C93227' }}>
                  IGNIS
                </span>
              </div>

              <Arrow />

              {/* Right tools */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {rightTools.map((t) => <ToolNode key={t.label} {...t} />)}
              </div>
            </div>

            {/* Caption row — same pattern as process step meta */}
            <div
              style={{
                marginTop: 'clamp(40px, 5vw, 64px)',
                paddingTop: 'clamp(16px, 2vw, 24px)',
                borderTop: '1px solid var(--ignis-line)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <span style={{ fontFamily: F_MONO, fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ignis-muted)' }}>
                More space for your real work
              </span>
              <span style={{ fontFamily: F_MONO, fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ignis-muted)' }}>
                SIMPLE SOLUTION
              </span>
            </div>
          </div>

        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .integrations-header { grid-template-columns: 1fr !important; gap: 28px !important; }
          .integration-diagram { gap: 12px !important; }
        }
      `}</style>
    </section>
  );
}
