import React from 'react';

/**
 * Capabilities & Systems Built
 * Sourced directly from the official Ignis Brief:
 * Custom CRMs, workflows, apps, agents, dashboards.
 */
export default function Capabilities() {
  const systems = [
    {
      title: 'Custom CRMs',
      desc: 'Tailored customer relationship systems structured precisely around your business pipelines, not generic off-the-shelf software schemas.'
    },
    {
      title: 'Automated Workflows',
      desc: 'Seamless data movement between email, document repositories, accounting software, and operational databases without human busywork.'
    },
    {
      title: 'Internal Web Apps',
      desc: 'Focused internal tools designed for your specific team: quick quoting engines, ticket triaging, client onboarding portals.'
    },
    {
      title: 'Intelligent Agents',
      desc: 'Background workers that monitor inboxes, draft client updates, review invoices, and compile due diligence reports.'
    },
    {
      title: 'Operational Dashboards',
      desc: 'Real-time visibility into workflow bottlenecks, human review queues, completed throughput, and system health.'
    }
  ];

  return (
    <section
      id="capabilities"
      aria-label="Capabilities"
      style={{
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
        borderTop: '1px solid var(--ignis-line)',
        backgroundColor: 'var(--ignis-blush)'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '680px', marginBottom: 'var(--space-12)' }}>
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
            <span className="label-mono">CAPABILITIES</span>
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
            We build systems your business owns.
          </h2>
          <p style={{ color: 'var(--ignis-muted)', fontSize: '1.0625rem', lineHeight: 1.6 }}>
            Accounts, data, code, and infrastructure sit in your company’s name at handover. No lock-in, no hidden recurring seats.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {systems.map((item, idx) => (
            <div
              key={item.title}
              style={{
                padding: '32px 28px',
                backgroundColor: 'var(--ignis-card)',
                border: '1px solid var(--ignis-line)',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--ignis-coral)',
                  letterSpacing: '0.1em',
                  marginBottom: '16px'
                }}
              >
                SYS // 0{idx + 1}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--ignis-ink)',
                  marginBottom: '12px'
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: 'var(--ignis-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
