import React, { useState, useEffect } from 'react';
import NavigationOverlay from './NavigationOverlay';

/**
 * Floating Navigation Bar
 * 
 * Exact 1:1 match with user 1920x1052 design reference:
 * Wide floating glass capsule (1028px max-width, 58px height) with:
 * [ IGNIS. | ( = MENU )             (☾) ( SYS / 01 ) [ BOOK A CALL ] ]
 */
export default function Navbar({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="ignis-floating-navbar"
        style={{
          position: 'fixed',
          top: isScrolled ? '16px' : 'clamp(24px, 4.1vh, 44px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: 'calc(100% - clamp(24px, 4vw, 64px))',
          maxWidth: '1028px',
          transition: 'top 320ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <nav
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'clamp(54px, 5.5vh, 60px)',
            padding: '0 8px 0 24px',
            backgroundColor: theme === 'dark' ? 'rgba(21, 15, 14, 0.88)' : 'rgba(255, 255, 255, 0.72)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '9999px',
            border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(220, 215, 210, 0.65)',
            boxShadow: '0 4px 28px rgba(0, 0, 0, 0.04)',
            userSelect: 'none',
            transition: 'background-color var(--transition-base), border-color var(--transition-base)'
          }}
        >
          {/* Left Group: IGNIS. | ( = MENU ) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="#hero"
              style={{
                display: 'inline-flex',
                alignItems: 'baseline',
                fontFamily: 'var(--font-headline)',
                fontWeight: 800,
                fontSize: '1.0625rem',
                letterSpacing: '0.03em',
                color: theme === 'dark' ? '#F7F3EE' : '#140E0D',
                textDecoration: 'none'
              }}
            >
              IGNIS<span style={{ color: '#FF552E', marginLeft: '1px' }}>.</span>
            </a>

            {/* Vertical Hairline Divider */}
            <div
              style={{
                width: '1px',
                height: '18px',
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)'
              }}
              aria-hidden="true"
            />

            {/* Outlined MENU Pill Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '36px',
                padding: '0 16px',
                borderRadius: '9999px',
                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.16)' : '1px solid rgba(0, 0, 0, 0.13)',
                backgroundColor: 'transparent',
                fontFamily: 'var(--font-headline)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: theme === 'dark' ? '#F7F3EE' : '#140E0D',
                cursor: 'pointer',
                transition: 'all 180ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.16)' : '1px solid rgba(0, 0, 0, 0.13)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span style={{ display: 'block', width: '13px', height: '1.5px', backgroundColor: theme === 'dark' ? '#F7F3EE' : '#140E0D' }} />
                <span style={{ display: 'block', width: '13px', height: '1.5px', backgroundColor: theme === 'dark' ? '#F7F3EE' : '#140E0D' }} />
              </div>
              <span>MENU</span>
            </button>
          </div>

          {/* Right Group: (☾) ( SYS / 01 ) [ BOOK A CALL ] */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Moon / Theme Toggle Circle */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle Color Theme"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.16)' : '1px solid rgba(0, 0, 0, 0.13)',
                backgroundColor: 'transparent',
                color: theme === 'dark' ? '#F7F3EE' : '#140E0D',
                cursor: 'pointer',
                fontSize: '0.9375rem',
                transition: 'all 180ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.13)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {theme === 'dark' ? '☼' : '☾'}
            </button>

            {/* Outlined SYS / 01 Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '38px',
                padding: '0 16px',
                borderRadius: '9999px',
                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.16)' : '1px solid rgba(0, 0, 0, 0.13)',
                backgroundColor: 'transparent',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: theme === 'dark' ? '#F7F3EE' : '#140E0D'
              }}
            >
              SYS / 01
            </div>

            {/* Radiant Coral BOOK A CALL Action Pill */}
            <a
              href="#founder"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '40px',
                padding: '0 24px',
                backgroundColor: '#FF552E',
                color: '#FFFFFF',
                borderRadius: '9999px',
                fontFamily: 'var(--font-headline)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(255, 85, 46, 0.35)',
                transition: 'background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E84510';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 85, 46, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF552E';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 85, 46, 0.35)';
              }}
            >
              BOOK A CALL
            </a>
          </div>
        </nav>
      </header>

      {/* Full-Screen Navigation Drawer Overlay */}
      <NavigationOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
