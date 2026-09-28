import React from 'react';

/**
 * Principles & Operating Standards
 * Taken verbatim from Ignis Brand Guide and Brief:
 * Honesty, Control, Ownership, Built to Last.
 */
export default function Principles() {
  const principles = [
    {
      num: '01',
      title: 'People Stay in Control',
      body: 'A person at your firm approves every consequential output. We never deploy autonomous black boxes that speak to your clients without oversight.'
    },
    {
      num: '02',
      title: 'The Client Owns It',
      body: 'Accounts, data, repositories, and hosting sit in your name from day one. At handover, credentials are rotated and full ownership is yours.'
    },
    {
      num: '03',
      title: 'Honesty & Integrity',
      body: 'We quote what the project actually needs, clearly state what current AI cannot do reliably, and never sell buzzwords or false promises.'
    },
    {
      num: '04',
      title: 'Built to Last',
      body: 'Production-grade architecture. Thoroughly tested, rigorously documented, and fully supported so your systems keep running long after deployment.'
    }
  ];

  return (
    <section
      id="principles"
      aria-label="Operating Principles"
      style={{
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
        borderTop: '1px solid var(--ignis-line)',
        backgroundColor: 'var(--ignis-blush)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '640px', marginBottom: 'var(--space-12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--ignis-coral)',
                display: 'inline-block'
              }}
            />
            <span className="label-mono">CORE PRINCIPLES</span>
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              lineHeight: 1.12,
              color: 'var(--ignis-ink)',
              marginBottom: '16px'
            }}
          >
            Engineering with judgement.
          </h2>
          <p style={{ color: 'var(--ignis-muted)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Every system is built to withstand real business scrutiny. No vaporware, no hype.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px'
          }}
        >
          {principles.map((p) => (
            <div
              key={p.title}
              style={{
                borderTop: '2px solid var(--ignis-coral)',
                paddingTop: '24px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: 'var(--ignis-coral)',
                  marginBottom: '12px'
                }}
              >
                /{p.num}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: '1.1875rem',
                  fontWeight: 700,
                  color: 'var(--ignis-ink)',
                  marginBottom: '12px'
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: 'var(--ignis-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
