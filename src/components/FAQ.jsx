import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

/**
 * FAQ Component (Section 08)
 * 
 * "Before you book."
 * 
 * Clean, quiet editorial FAQ:
 * - Left side: quiet headline and brief context
 * - Right side: vertical accordion with thin dividers, small + indicators rotating into × smoothly
 * - Refined CSS grid height + opacity reveal
 * 
 * Questions verbatim:
 * 1. What does it cost?
 * 2. Why not just use ChatGPT?
 * 3. I am not technical. Can we do this?
 * 4. How long does it take?
 * 5. What happens to our data?
 * 6. What if it gets something wrong?
 * 
 * Zero cards, zero shadows, zero rounded containers.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What does it cost?',
      answer:
        'Engagements are priced on fixed-scope deliverables tied to concrete operational milestones—never open-ended hourly billing or unpredictable SaaS token markups. You own the resulting architecture completely, with zero mandatory ongoing software subscriptions.'
    },
    {
      question: 'Why not just use ChatGPT?',
      answer:
        'Web interfaces like ChatGPT require someone to copy-paste unstructured text back and forth between tools. IGNIS embeds intelligence directly into your existing software—connecting your databases, CRM, email servers, and document repositories so information moves automatically without human busywork.'
    },
    {
      question: 'I am not technical. Can we do this?',
      answer:
        'Yes. We handle architecture, API tokens, security isolation, logic testing, and cloud infrastructure. Your team interacts with simple, tailored interfaces—or continues working in the inboxes and software they already use every day.'
    },
    {
      question: 'How long does it take?',
      answer:
        'Most engagements deploy within 2 to 4 weeks. We prioritize delivering a functioning operational prototype in the first 7 business days to validate extraction schemas and business logic on your actual historical data before full rollout.'
    },
    {
      question: 'What happens to our data?',
      answer:
        'Your company retains 100% data ownership. We use private, enterprise-grade endpoints with strict zero-data-retention training policies. All credentials, database keys, and operational logs execute inside your own cloud or isolated instances.'
    },
    {
      question: 'What if it gets something wrong?',
      answer:
        'All critical workflows are designed with deterministic validation boundaries and human-in-the-loop sign-off protocols. Low-confidence outputs or edge cases are automatically routed to your staff with clear context for 1-click review, preventing rogue actions.'
    }
  ];

  return (
    <section
      id="faq"
      aria-label="Before You Book FAQ"
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
          <div
            className="faq-split-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 1fr) minmax(360px, 1.8fr)',
              gap: 'clamp(48px, 8vw, 104px)',
              alignItems: 'start'
            }}
          >
            {/* Left Side: Quiet Headline & Context */}
            <div style={{ position: 'sticky', top: '120px' }}>
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
                  08 / QUESTIONS
                </span>
              </div>

              <h2
                className="reveal-headline"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  color: 'var(--ignis-ink)',
                  margin: 0,
                  marginBottom: '24px',
                  textWrap: 'balance'
                }}
              >
                Before
                <br />
                <span style={{ color: 'var(--ignis-ink)' }}>you book.</span>
              </h2>

              <p
                className="reveal-body"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                  fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                  lineHeight: 1.62,
                  color: 'var(--ignis-muted)',
                  margin: 0,
                  maxWidth: '360px'
                }}
              >
                Practical details on engagement scope, data protection, and working relationships.
              </p>
            </div>

            {/* Right Side: Clean Vertical Accordion */}
            <div
              className="faq-accordion-container reveal-content"
              style={{
                borderTop: '1px solid var(--ignis-line)'
              }}
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    style={{
                      borderBottom: '1px solid var(--ignis-line)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      style={{
                        width: '100%',
                        padding: 'clamp(24px, 3vw, 36px) 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        gap: '24px',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--ignis-ink)'
                      }}
                    >
                      <span
                        style={{
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                          fontSize: 'clamp(1.125rem, 1.5vw, 1.45rem)',
                          fontWeight: 600,
                          lineHeight: 1.3,
                          letterSpacing: '-0.025em',
                          color: isOpen ? '#FF531B' : 'var(--ignis-ink)',
                          transition: 'color 180ms ease'
                        }}
                      >
                        {faq.question}
                      </span>

                      <span
                        style={{
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Mono", monospace',
                          fontSize: '1.35rem',
                          fontWeight: 300,
                          lineHeight: 1,
                          color: isOpen ? '#FF531B' : 'var(--ignis-muted)',
                          flexShrink: 0,
                          display: 'inline-block',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1), color 180ms ease'
                        }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                        transition: 'grid-template-rows 320ms cubic-bezier(0.16, 1, 0.3, 1)',
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          minHeight: 0,
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? 'translateY(0)' : 'translateY(-6px)',
                          transition: 'opacity 260ms ease, transform 260ms ease'
                        }}
                      >
                        <p
                          style={{
                            fontFamily:
                              '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                            fontSize: 'clamp(1rem, 1.15vw, 1.125rem)',
                            lineHeight: 1.65,
                            color: 'var(--ignis-muted)',
                            margin: 0,
                            paddingBottom: 'clamp(24px, 3vw, 36px)',
                            paddingRight: 'clamp(16px, 3vw, 48px)',
                            maxWidth: '740px'
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .faq-split-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .faq-split-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
