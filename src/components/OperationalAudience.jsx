import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

/**
 * OperationalAudience Component (Section 06)
 * 
 * "Built for teams that run on repetitive paperwork."
 * 
 * Editorial directory / index structure:
 * 01 — Advisory & Professional Services
 * 02 — Commercial Property & Real Estate
 * 03 — Freight, Trade & Construction
 * 04 — Founders & Executive Teams
 * 
 * Thin dividers, number, category, short explanation, subtle right-aligned detail.
 * Zero cards, pure editorial index.
 */
export default function OperationalAudience() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const categories = [
    {
      num: '01',
      title: 'Advisory & Professional Services',
      description: 'Document reviews, file notes, report drafting, client follow-ups and complex data extraction from unstructured client files.',
      detail: 'Intake & Document Workflows'
    },
    {
      num: '02',
      title: 'Commercial Property & Real Estate',
      description: 'Enquiry triage, listing copy, maintenance request routing, invoice matching and lease agreement reconciliation.',
      detail: 'Ops & Compliance Pipelines'
    },
    {
      num: '03',
      title: 'Freight, Trade & Construction',
      description: 'Quotes, site reports, supplier invoice matching, delivery confirmations and compliance filings across multiple systems.',
      detail: 'Cross-Tool Synchronization'
    },
    {
      num: '04',
      title: 'Founders & Executive Teams',
      description: 'Operational reporting, board summaries, document approvals, cross-team status requests and late-night administrative busywork.',
      detail: 'Executive Leverage'
    }
  ];

  return (
    <section
      id="audience"
      aria-label="Built for Teams That Run on Repetitive Paperwork"
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
      <div
        style={{
          width: '100%',
          maxWidth: '1260px',
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 64px)',
          boxSizing: 'border-box'
        }}
      >
        <RevealOnScroll>
          {/* Section Header */}
          <header
            className="audience-header"
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
                    backgroundColor: '#FF531B'
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
                  06 / OPERATIONAL DIRECTORY
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
                Built for teams that run
                <br />
                <span style={{ color: 'var(--ignis-ink)' }}>on repetitive paperwork.</span>
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
                Tailored systems engineered for businesses where high-friction administrative work,
                manual document handling, and cross-tool handoffs consume productive hours.
              </p>
            </div>
          </header>

          {/* Editorial Index / Directory Rows */}
          <div
            className="audience-directory reveal-content"
            style={{
              borderTop: '1px solid var(--ignis-line)',
              position: 'relative'
            }}
          >
          {categories.map((cat, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={cat.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="directory-row"
                style={{
                  borderBottom: '1px solid var(--ignis-line)',
                  paddingTop: 'clamp(32px, 4vw, 48px)',
                  paddingBottom: 'clamp(32px, 4vw, 48px)',
                  display: 'grid',
                  gridTemplateColumns: 'clamp(64px, 7vw, 96px) minmax(240px, 1.2fr) minmax(280px, 1.5fr) minmax(180px, 0.9fr)',
                  gap: 'clamp(20px, 3.5vw, 48px)',
                  alignItems: 'baseline',
                  backgroundColor: isHovered ? 'rgba(255, 83, 27, 0.015)' : 'transparent',
                  transition: 'background-color 200ms ease'
                }}
              >
                {/* 1. Index Number */}
                <div
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: isHovered ? '#FF531B' : 'var(--ignis-muted)',
                    transition: 'color 200ms ease'
                  }}
                >
                  {cat.num}
                </div>

                {/* 2. Category Title */}
                <div>
                  <h3
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                      fontSize: 'clamp(1.25rem, 1.8vw, 1.625rem)',
                      fontWeight: 700,
                      lineHeight: 1.15,
                      letterSpacing: '-0.025em',
                      color: 'var(--ignis-ink)',
                      margin: 0
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* 3. Short Explanation */}
                <div>
                  <p
                    style={{
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                      fontSize: 'clamp(0.9375rem, 1.05vw, 1.0625rem)',
                      lineHeight: 1.6,
                      color: 'var(--ignis-muted)',
                      margin: 0,
                      maxWidth: '500px'
                    }}
                  >
                    {cat.description}
                  </p>
                </div>

                {/* 4. Subtle Right-Aligned Detail */}
                <div
                  className="directory-detail"
                  style={{
                    textAlign: 'right',
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                    fontSize: '0.75rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isHovered ? 'var(--ignis-ink)' : 'var(--ignis-muted)',
                    transition: 'color 200ms ease'
                  }}
                >
                  {cat.detail}
                </div>
              </div>
            );
          })}
        </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .audience-header {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .directory-row {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
            padding-top: 28px !important;
            padding-bottom: 28px !important;
          }
          .directory-detail {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
