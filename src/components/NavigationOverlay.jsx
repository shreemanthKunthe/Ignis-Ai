import React, { useEffect } from 'react';
import IgnisLogo from './IgnisLogo';

/**
 * Full-screen Navigation Overlay
 * Editorial typography, generous negative space, thin hairlines, Ignis coral accents.
 * ESC key closes, trap focus / keyboard accessible.
 */
export default function NavigationOverlay({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navItems = [
    { label: 'What We Do', href: '#about', number: '01' },
    { label: 'Capabilities', href: '#capabilities', number: '02' },
    { label: 'How It Works', href: '#process', number: '03' },
    { label: 'Who It Is For', href: '#audience', number: '04' },
    { label: 'Standards', href: '#philosophy', number: '05' },
    { label: 'FAQs', href: '#faq', number: '06' },
    { label: 'Talk to Builder', href: '#founder', number: '07' }
  ];

  const handleLinkClick = (href) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`nav-overlay ${isOpen ? 'is-open' : ''}`}
      aria-modal="true"
      role="dialog"
      aria-label="Site Navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--ignis-paper)',
        color: 'var(--ignis-ink)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        overflowY: 'auto'
      }}
    >
      {/* Top Bar inside Overlay */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '32px 40px',
          borderBottom: '1px solid var(--ignis-line)'
        }}
      >
        <IgnisLogo height={24} />
        
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '999px',
            backgroundColor: 'var(--ignis-pill-bg)',
            color: 'var(--ignis-pill-text)',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'opacity var(--transition-fast)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="1" y1="1" x2="11" y2="11" />
            <line x1="11" y1="1" x2="1" y2="11" />
          </svg>
          <span>Close</span>
        </button>
      </div>

      {/* Main Editorial Menu Content */}
      <div
        className="container"
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 360px)',
          gap: '64px',
          alignItems: 'center',
          paddingTop: '64px',
          paddingBottom: '64px'
        }}
      >
        <nav aria-label="Main Navigation">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navItems.map((item, index) => (
              <li
                key={item.label}
                style={{
                  borderBottom: '1px solid var(--ignis-line)',
                  paddingBottom: '14px',
                  paddingTop: '10px'
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    lineHeight: 1.1,
                    color: 'var(--ignis-ink)',
                    textDecoration: 'none',
                    transition: 'color var(--transition-fast), transform var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--ignis-coral)';
                    e.currentTarget.style.transform = 'translateX(10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--ignis-ink)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      color: 'var(--ignis-muted)',
                      letterSpacing: '0.1em'
                    }}
                  >
                    /{item.number}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Editorial Info Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <span className="label-mono" style={{ display: 'block', marginBottom: '8px' }}>
              System Statement
            </span>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: '1.0625rem', color: 'var(--ignis-ink)', lineHeight: 1.5 }}>
              Ignis builds AI systems around the way your business works — handling repetitive tasks, connecting your tools, and keeping your people signing off.
            </p>
          </div>

          <div className="hairline-top" style={{ paddingTop: '24px' }}>
            <span className="label-mono" style={{ display: 'block', marginBottom: '8px' }}>
              Direct Enquiries
            </span>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9375rem', color: 'var(--ignis-ink)' }}>
              tav@ignisai.com
            </p>
          </div>

          <div className="hairline-top" style={{ paddingTop: '24px' }}>
            <span className="label-mono" style={{ display: 'block', marginBottom: '8px' }}>
              Architecture
            </span>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: '0.875rem', color: 'var(--ignis-muted)' }}>
              Custom CRMs, Workflows, Autonomous Pipelines & Executive Oversight Systems.
            </p>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          padding: '24px 40px',
          borderTop: '1px solid var(--ignis-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--ignis-muted)',
          letterSpacing: '0.08em'
        }}
      >
        <span>IGNIS SYSTEM V1.0</span>
        <span>PRESS ESC TO CLOSE</span>
      </div>
    </div>
  );
}
