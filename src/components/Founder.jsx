import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

/**
 * Founder Component (Section 09 - Contact / Final CTA)
 * 
 * "Talk directly with the builder."
 * 
 * Two-column composition:
 * - LEFT: Headline, short explanation, builder info (Tavish / tav@ignisai.com), small supporting visual
 * - RIGHT: Minimal contact form:
 *   - Name
 *   - Work email
 *   - Company / industry
 *   - What are you trying to automate?
 *   - CTA: "Start a conversation →"
 * 
 * Direct project enquiry feel, zero SaaS card bloat.
 */
export default function Founder() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    automationGoal: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="founder"
      aria-label="Talk Directly with the Builder"
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
      <div id="contact" style={{ position: 'absolute', top: 0 }} aria-hidden="true" />

      <div className="container-wide">
        <RevealOnScroll>
          <div
            className="founder-split-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1fr)',
              gap: 'clamp(48px, 8vw, 104px)',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Direct Builder Narrative */}
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
                  09 / DIRECT INTAKE
                </span>
              </div>

              <h2
                className="reveal-headline"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                  fontSize: 'clamp(2.75rem, 5.5vw, 5rem)',
                  fontWeight: 700,
                  lineHeight: 1.04,
                  letterSpacing: '-0.04em',
                  color: 'var(--ignis-ink)',
                  margin: 0,
                  marginBottom: 'clamp(24px, 3.5vw, 36px)',
                  textWrap: 'balance'
                }}
              >
                Talk directly
                <br />
                <span style={{ color: 'var(--ignis-ink)' }}>with the builder.</span>
              </h2>

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
                  marginBottom: 'clamp(36px, 4.5vw, 48px)',
                  maxWidth: '500px'
                }}
              >
                IGNIS works directly with businesses to understand their workflow and identify where
                AI can actually create leverage. No account managers, no commission sales reps.
              </p>

              {/* Builder Information Lockup with Supporting Visual Badge */}
              <div
                className="reveal-content"
                style={{
                  paddingTop: '28px',
                  borderTop: '1px solid var(--ignis-line)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
              <div
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--ignis-ink)'
                }}
              >
                Tavish
              </div>

              <div
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                  fontSize: '0.875rem',
                  color: 'var(--ignis-muted)'
                }}
              >
                Founder & Systems Architect, IGNIS AI
              </div>

              <div
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                  fontSize: '0.8125rem',
                  color: 'var(--ignis-ink)',
                  marginTop: '4px'
                }}
              >
                Direct line:{' '}
                <a
                  href="mailto:tav@ignisai.com"
                  style={{
                    color: '#C93227',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}
                >
                  tav@ignisai.com
                </a>
              </div>

              {/* Supporting Visual: Studio System Status Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '16px',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                  fontSize: '0.75rem',
                  letterSpacing: '0.06em',
                  color: 'var(--ignis-muted)'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#2F7D57',
                    display: 'inline-block'
                  }}
                />
                <span>Sydney, Australia · Accepting Q2/Q3 system engagements</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simple, Editorial Contact Form */}
          <div className="reveal-content">
            {submitted ? (
              <div
                style={{
                  padding: 'clamp(40px, 5vw, 64px) 0',
                  borderTop: '1px solid #C93227'
                }}
              >
                <div
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: 'var(--ignis-ink)',
                    marginBottom: '12px'
                  }}
                >
                  Message received.
                </div>
                <p
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                    fontSize: '1.0625rem',
                    lineHeight: 1.6,
                    color: 'var(--ignis-muted)',
                    margin: 0
                  }}
                >
                  Thank you, {formData.name || 'there'}. Tav will review your workflow details and
                  get back to you directly within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ignis-muted)',
                      marginBottom: '8px'
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 0',
                      border: 'none',
                      borderBottom: '1px solid var(--ignis-line)',
                      backgroundColor: 'transparent',
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                      fontSize: '1.0625rem',
                      color: 'var(--ignis-ink)',
                      outline: 'none',
                      borderRadius: 0,
                      boxSizing: 'border-box',
                      transition: 'border-color 200ms ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--ignis-ink)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'var(--ignis-line)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ignis-muted)',
                      marginBottom: '8px'
                    }}
                  >
                    Work email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 0',
                      border: 'none',
                      borderBottom: '1px solid var(--ignis-line)',
                      backgroundColor: 'transparent',
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                      fontSize: '1.0625rem',
                      color: 'var(--ignis-ink)',
                      outline: 'none',
                      borderRadius: 0,
                      boxSizing: 'border-box',
                      transition: 'border-color 200ms ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--ignis-ink)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'var(--ignis-line)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    style={{
                      display: 'block',
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ignis-muted)',
                      marginBottom: '8px'
                    }}
                  >
                    Company / industry
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    required
                    placeholder="Company name or sector"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 0',
                      border: 'none',
                      borderBottom: '1px solid var(--ignis-line)',
                      backgroundColor: 'transparent',
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                      fontSize: '1.0625rem',
                      color: 'var(--ignis-ink)',
                      outline: 'none',
                      borderRadius: 0,
                      boxSizing: 'border-box',
                      transition: 'border-color 200ms ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--ignis-ink)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'var(--ignis-line)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-goal"
                    style={{
                      display: 'block',
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Mono", SFMono-Regular, monospace',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--ignis-muted)',
                      marginBottom: '8px'
                    }}
                  >
                    What are you trying to automate?
                  </label>
                  <textarea
                    id="contact-goal"
                    rows={3}
                    required
                    placeholder="Briefly describe the repetitive work, document reviews, or manual handoffs..."
                    value={formData.automationGoal}
                    onChange={(e) => setFormData({ ...formData, automationGoal: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 0',
                      border: 'none',
                      borderBottom: '1px solid var(--ignis-line)',
                      backgroundColor: 'transparent',
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                      fontSize: '1.0625rem',
                      color: 'var(--ignis-ink)',
                      outline: 'none',
                      resize: 'none',
                      borderRadius: 0,
                      boxSizing: 'border-box',
                      transition: 'border-color 200ms ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'var(--ignis-ink)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = 'var(--ignis-line)')}
                  />
                </div>

                <div style={{ marginTop: '16px' }}>
                  <button
                    type="submit"
                    className="ignis-tactile-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      fontFamily:
                        '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      padding: '16px 36px',
                      borderRadius: '2px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                      transition:
                        'transform 220ms cubic-bezier(0.16, 1, 0.3, 1), background-color 220ms ease, box-shadow 220ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#181818';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#000000';
                    }}
                  >
                    <span>Start a conversation</span>
                    <span className="btn-arrow" style={{ fontSize: '1.1rem', lineHeight: 1, display: 'inline-block', transition: 'transform 200ms ease' }}>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </div>

      <style>{`
        @media (max-width: 960px) {
          .founder-split-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
