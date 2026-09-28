import React, { useState } from 'react';

/**
 * Who We Serve
 * Structured by Role and Industry as dictated by the Ignis Brief.
 */
export default function WhoWeServe() {
  const [activeTab, setActiveTab] = useState('roles');

  const roles = [
    {
      title: 'Sales Teams',
      focus: 'Follow-ups & CRM Hygiene',
      description: 'Stop sales reps spending half their day writing notes and updating CRM fields. Ingestion agents summarize calls, update records, and draft tailored follow-up emails for approval.'
    },
    {
      title: 'Executive & Founders',
      focus: 'Admin Elimination',
      description: 'Reclaim 15+ hours weekly from late-night admin. Automate operational reports, board decks, document reviews, and cross-team information requests.'
    },
    {
      title: 'Marketing Teams',
      focus: 'Campaign Operations',
      description: 'Automate content research, partner communication, event tracking, and customer survey analysis directly connected to your core tools.'
    },
    {
      title: 'Solopreneurs & Small Teams',
      focus: 'Capacity Expansion',
      description: 'Scale output without expanding headcount. Handle intake forms, appointment scheduling, file notes, and invoicing with automated precision.'
    }
  ];

  const industries = [
    {
      title: 'Professional & Advisory Firms',
      focus: 'Law, Finance, Accounting, Consulting',
      description: 'Document reviews, file notes, report drafting, client status updates, and complex data extraction from unstructured client files.'
    },
    {
      title: 'Property & Real Estate',
      focus: 'Agencies, Managers, Buyer’s Agents',
      description: 'Enquiry replies, listing copy, maintenance request triaging, invoice matching, and comprehensive due diligence summaries.'
    },
    {
      title: 'Health Practices',
      focus: 'Medical & Dental Practices',
      description: 'Appointment admin, intake form extraction, referral letters, and patient communications with strict privacy controls.'
    },
    {
      title: 'Construction & Logistics',
      focus: 'Builders, Trades, Freight & Warehousing',
      description: 'Quotes, tenders, compliance filings, site reports, supplier invoice matching, and delivery status updates.'
    }
  ];

  const activeItems = activeTab === 'roles' ? roles : industries;

  return (
    <section
      id="who-we-serve"
      aria-label="Who We Serve"
      style={{
        paddingTop: 'var(--space-20)',
        paddingBottom: 'var(--space-20)',
        borderTop: '1px solid var(--ignis-line)',
        backgroundColor: 'var(--ignis-paper)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: 'var(--space-12)'
          }}
        >
          <div style={{ maxWidth: '600px' }}>
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
              <span className="label-mono">TARGET AUDIENCE</span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                lineHeight: 1.12,
                color: 'var(--ignis-ink)'
              }}
            >
              Built for businesses that run on paperwork.
            </h2>
          </div>

          {/* Toggle Button Pill */}
          <div
            style={{
              display: 'inline-flex',
              padding: '4px',
              backgroundColor: 'var(--ignis-blush)',
              borderRadius: '999px',
              border: '1px solid var(--ignis-line)'
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab('roles')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                backgroundColor: activeTab === 'roles' ? 'var(--ignis-pill-bg)' : 'transparent',
                color: activeTab === 'roles' ? '#FFFFFF' : 'var(--ignis-muted)',
                transition: 'background-color var(--transition-fast), color var(--transition-fast)'
              }}
            >
              By Role
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('industries')}
              style={{
                padding: '8px 20px',
                borderRadius: '999px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                backgroundColor: activeTab === 'industries' ? 'var(--ignis-pill-bg)' : 'transparent',
                color: activeTab === 'industries' ? '#FFFFFF' : 'var(--ignis-muted)',
                transition: 'background-color var(--transition-fast), color var(--transition-fast)'
              }}
            >
              By Industry
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {activeItems.map((item) => (
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
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  color: 'var(--ignis-coral)',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}
              >
                {item.focus}
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
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
