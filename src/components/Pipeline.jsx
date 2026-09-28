import React from 'react';

/**
 * 4-Stage Operational Pipeline
 * Directly reflects the 4 labeled blocks on the AI character:
 * INPUT -> PROCESS -> REVIEW -> OUTPUT
 */
export default function Pipeline() {
  const steps = [
    {
      num: '01',
      title: 'INPUT',
      badge: 'Capture & Ingestion',
      description: 'Incoming emails, PDF documents, intake forms, and messaging channels are automatically captured without manual copy-pasting.'
    },
    {
      num: '02',
      title: 'PROCESS',
      badge: 'System Extraction',
      description: 'The AI extracts structured data, matches existing CRM records, validates against business rules, and prepares draft actions.'
    },
    {
      num: '03',
      title: 'REVIEW',
      badge: 'Human Sign-off',
      description: 'A person at your firm reviews and approves anything consequential. Nothing ships to a client or database without oversight.'
    },
    {
      num: '04',
      title: 'OUTPUT',
      badge: 'Execution',
      description: 'Approved records are written to your CRM, documents dispatched, invoices processed, and status notifications broadcast.'
    }
  ];

  return (
    <section
      id="pipeline"
      aria-label="How Ignis Works"
      style={{
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
        borderTop: '1px solid var(--ignis-line)',
        backgroundColor: 'var(--ignis-paper)'
      }}
    >
      <div className="container">
        {/* Section Header */}
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
            <span className="label-mono">THE 4-STAGE PIPELINE</span>
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
            How work moves through the system.
          </h2>
          <p style={{ color: 'var(--ignis-muted)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            The AI takes on the tedious translation, reading, and preparation. Your people make the decisions and sign off on every outcome.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            borderTop: '1px solid var(--ignis-line)',
            paddingTop: '32px'
          }}
        >
          {steps.map((step) => (
            <div
              key={step.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '24px',
                backgroundColor: 'var(--ignis-card)',
                border: '1px solid var(--ignis-line)',
                borderRadius: '2px',
                transition: 'border-color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--ignis-coral)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--ignis-line)')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: 'var(--ignis-coral)'
                  }}
                >
                  /{step.num}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ignis-muted)',
                    textTransform: 'uppercase'
                  }}
                >
                  {step.badge}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--ignis-ink)',
                  marginBottom: '12px'
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.58,
                  color: 'var(--ignis-muted)'
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
