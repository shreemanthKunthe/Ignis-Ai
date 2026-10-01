import React, { useState, useEffect, useRef } from 'react';

/**
 * Floating Navigation Bar
 * 
 * Exact 1:1 match with user 1920x1052 design reference.
 * MENU button opens a polished dropdown panel anchored below the nav pill —
 * clicking a link scrolls to that section on the same page and closes the dropdown.
 */
export default function Navbar({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navItems = [
    { label: 'What We Do',      href: '#about',      number: '01' },
    { label: 'Capabilities',    href: '#capabilities', number: '02' },
    { label: 'How It Works',    href: '#process',    number: '03' },
    { label: 'Standards',       href: '#philosophy', number: '04' },
    { label: 'FAQs',            href: '#faq',        number: '05' },
    { label: 'Talk to Builder', href: '#founder',    number: '06' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target) &&
        buttonRef.current && !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    const handleKey = (e) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isMenuOpen]);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
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
          backgroundColor: isDark ? 'rgba(21, 15, 14, 0.88)' : 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '9999px',
          border: isDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(220, 215, 210, 0.65)',
          boxShadow: '0 4px 28px rgba(0, 0, 0, 0.04)',
          userSelect: 'none',
          transition: 'background-color var(--transition-base), border-color var(--transition-base)',
          position: 'relative'
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
              color: isDark ? '#F7F3EE' : '#140E0D',
              textDecoration: 'none'
            }}
          >
            IGNIS<span style={{ color: '#C93227', marginLeft: '1px' }}>.</span>
          </a>

          {/* Vertical Hairline Divider */}
          <div
            style={{
              width: '1px',
              height: '18px',
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)'
            }}
            aria-hidden="true"
          />

          {/* MENU Pill Button — opens inline dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-expanded={isMenuOpen}
              aria-haspopup="menu"
              aria-label="Open Navigation Menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '36px',
                padding: '0 16px',
                borderRadius: '9999px',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.16)' : '1px solid rgba(0, 0, 0, 0.13)',
                backgroundColor: isMenuOpen
                  ? (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)')
                  : 'transparent',
                fontFamily: 'var(--font-headline)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: isDark ? '#F7F3EE' : '#140E0D',
                cursor: 'pointer',
                transition: 'all 180ms ease'
              }}
              onMouseEnter={(e) => {
                if (!isMenuOpen) {
                  e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMenuOpen) {
                  e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.13)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {/* Animated hamburger → X */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', overflow: 'hidden', width: '13px' }}>
                <span
                  style={{
                    display: 'block',
                    width: '13px',
                    height: '1.5px',
                    backgroundColor: isDark ? '#F7F3EE' : '#140E0D',
                    transformOrigin: 'center',
                    transform: isMenuOpen ? 'translateY(4.5px) rotate(45deg)' : 'none',
                    transition: 'transform 220ms ease'
                  }}
                />
                <span
                  style={{
                    display: 'block',
                    width: '13px',
                    height: '1.5px',
                    backgroundColor: isDark ? '#F7F3EE' : '#140E0D',
                    transformOrigin: 'center',
                    transform: isMenuOpen ? 'translateY(-4.5px) rotate(-45deg)' : 'none',
                    transition: 'transform 220ms ease'
                  }}
                />
              </div>
              <span>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>

            {/* ── Dropdown Panel ── */}
            <div
              ref={menuRef}
              role="menu"
              aria-label="Site Navigation"
              style={{
                position: 'absolute',
                top: 'calc(100% + 10px)',
                left: 0,
                minWidth: '220px',
                backgroundColor: isDark ? 'rgba(21, 15, 14, 0.97)' : 'rgba(255, 255, 255, 0.97)',
                backdropFilter: 'blur(28px) saturate(200%)',
                WebkitBackdropFilter: 'blur(28px)',
                border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(200,195,190,0.7)',
                borderRadius: '18px',
                boxShadow: '0 16px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
                padding: '8px',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.97)',
                pointerEvents: isMenuOpen ? 'auto' : 'none',
                visibility: isMenuOpen ? 'visible' : 'hidden',
                transition: 'opacity 200ms cubic-bezier(0.16,1,0.3,1), transform 200ms cubic-bezier(0.16,1,0.3,1), visibility 200ms',
                zIndex: 100
              }}
            >
              {navItems.map((item, i) => (
                <button
                  key={item.href}
                  role="menuitem"
                  onClick={() => handleNavClick(item.href)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    fontFamily: 'var(--font-headline)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: isDark ? '#F7F3EE' : '#140E0D',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background-color 140ms ease, color 140ms ease',
                    letterSpacing: '0.01em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(255,85,46,0.07)';
                    e.currentTarget.style.color = '#C93227';
                    e.currentTarget.querySelector('.nav-num').style.color = '#C93227';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = isDark ? '#F7F3EE' : '#140E0D';
                    e.currentTarget.querySelector('.nav-num').style.color = isDark ? 'rgba(247,243,238,0.35)' : 'rgba(20,14,13,0.35)';
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    className="nav-num"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      color: isDark ? 'rgba(247,243,238,0.35)' : 'rgba(20,14,13,0.35)',
                      transition: 'color 140ms ease'
                    }}
                  >
                    /{item.number}
                  </span>
                </button>
              ))}


            </div>
          </div>
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
              border: isDark ? '1px solid rgba(255, 255, 255, 0.16)' : '1px solid rgba(0, 0, 0, 0.13)',
              backgroundColor: 'transparent',
              color: isDark ? '#F7F3EE' : '#140E0D',
              cursor: 'pointer',
              fontSize: '0.9375rem',
              transition: 'all 180ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.13)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {isDark ? '☼' : '☾'}
          </button>

          {/* Radiant Coral BOOK A CALL Action Pill */}
          <a
            href="#founder"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '40px',
              padding: '0 24px',
              backgroundColor: '#C93227',
              color: '#FFFFFF',
              borderRadius: '9999px',
              fontFamily: 'var(--font-headline)',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(201, 50, 39, 0.35)',
              transition: 'background-color 180ms ease, transform 180ms ease, box-shadow 180ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A8261D';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(201, 50, 39, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C93227';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(201, 50, 39, 0.35)';
            }}
          >
            BOOK A CALL
          </a>
        </div>
      </nav>
    </header>
  );
}
