import React, { useMemo } from 'react';

/**
 * Ignis Footer Component
 * 
 * Sourced directly from Screenshot 1 (Footer.png):
 * - Large rounded container card
 * - Serif Ignis brand lockup with flame icon
 * - 2 clean navigation columns (Explore / How it works / Work / Contact | Privacy Policy / Terms of Service / Cookie Policy)
 * - Bottom copyright: "© 2026 Ignis AI. All rights reserved." & "Registered in Australia"
 * - Radiant dot-matrix grid with glowing coral flame heat signature in the center
 */
export default function Footer() {
  // Generate dot matrix grid (48 columns x 16 rows) matching Screenshot 1
  const dots = useMemo(() => {
    const cols = 48;
    const rows = 16;
    const result = [];

    // Flame center is at col 24
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const dx = c - 23.5;
        // Flame shape: wider at bottom (r = 15), tapering up to tip (r = 4)
        const flameY = (rows - 1 - r) / (rows - 1); // 0 at bottom, 1 at top
        const flameRadius = Math.max(0, 7.5 * (1 - flameY * 0.75));
        const dist = Math.abs(dx);

        let color = '#F4E7E3'; // Default pale peach dot
        let opacity = 0.85;

        // Inside the flame zone
        if (r >= 4 && dist <= flameRadius) {
          const coreDist = dist / (flameRadius + 0.001);
          if (coreDist < 0.25) {
            color = '#C93227'; // Vibrant core
            opacity = 1;
          } else if (coreDist < 0.5) {
            color = '#FF6E4A'; // Medium coral
            opacity = 0.95;
          } else if (coreDist < 0.8) {
            color = '#FF9D85'; // Light coral
            opacity = 0.9;
          } else {
            color = '#FFCCBF'; // Flame fringe
            opacity = 0.88;
          }
        }

        result.push({
          x: c * 25 + 12.5,
          y: r * 22 + 11,
          color,
          opacity
        });
      }
    }
    return result;
  }, []);

  return (
    <footer
      style={{
        paddingTop: 'clamp(48px, 6vw, 80px)',
        paddingBottom: 'clamp(48px, 6vw, 80px)',
        backgroundColor: 'var(--ignis-paper)'
      }}
    >
      <div className="container">
        {/* Rounded Card Container matching Screenshot 1 */}
        <div
          style={{
            backgroundColor: '#F7F4F0',
            border: '1px solid var(--ignis-line)',
            borderRadius: 'clamp(24px, 3.5vw, 36px)',
            padding: 'clamp(32px, 5vw, 64px) clamp(24px, 4vw, 56px) clamp(24px, 3.5vw, 40px)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Top Row: Brand & Navigation */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '40px',
              marginBottom: 'clamp(48px, 8vw, 88px)'
            }}
          >
            {/* Brand Column with Logo & Short One-Line Positioning Statement */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '380px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                {/* Flame Icon */}
                <svg
                  width="34"
                  height="42"
                  viewBox="0 0 34 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 40C4 35 0 26 0 17C0 11.5 2 6.5 5.5 2.5C6 1.8 7 2.2 7 3C6.5 8 9 13.5 12 17C14.5 19.8 17 22 17 26C17 29.5 14 34.5 10 40Z"
                    fill="#C93227"
                  />
                  <path
                    d="M22 41C16.5 37 13 29 13 20C13 14 15.5 8.5 19.5 4C20.2 3.2 21.2 3.7 21.2 4.6C20.5 10 23.5 16 27 20C30 23.5 33 26.5 33 30.5C33 34.5 28.5 39 22 41Z"
                    fill="#C93227"
                    opacity="0.9"
                  />
                </svg>

                {/* IGNIS Wordmark */}
                <span
                  style={{
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif',
                    fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                    fontWeight: 700,
                    color: '#140E0D',
                    letterSpacing: '-0.03em',
                    lineHeight: 1
                  }}
                >
                  IGNIS
                </span>
              </div>

              <p
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                  fontSize: '0.875rem',
                  lineHeight: 1.55,
                  color: 'rgba(20, 14, 13, 0.65)',
                  margin: 0
                }}
              >
                Custom AI systems and automations built around how your business actually operates.
              </p>
            </div>

            {/* Navigation Links Columns matching Screenshot 1 */}
            <div
              style={{
                display: 'flex',
                gap: 'clamp(32px, 6vw, 72px)',
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
                fontSize: '0.875rem',
                color: '#140E0D'
              }}
            >
              {/* Main Nav */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a href="#about" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ignis-coral)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#140E0D')}>
                  Explore
                </a>
                <a href="#how-it-works" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ignis-coral)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#140E0D')}>
                  How it works
                </a>
                <a href="#capabilities" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ignis-coral)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#140E0D')}>
                  Work
                </a>
                <a href="#founder" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ignis-coral)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#140E0D')}>
                  Contact
                </a>
              </div>

              {/* Legal Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a href="#" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ignis-coral)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#140E0D')}>
                  Privacy Policy
                </a>
                <a href="#" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ignis-coral)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#140E0D')}>
                  Terms of Service
                </a>
                <a href="#" style={{ transition: 'color var(--transition-fast)' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ignis-coral)')} onMouseLeave={(e) => (e.currentTarget.style.color = '#140E0D')}>
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          {/* Dot Matrix Flame Grid Pattern */}
          <div
            style={{
              width: '100%',
              marginBottom: '28px',
              overflow: 'hidden'
            }}
          >
            <svg
              viewBox="0 0 1200 352"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              {dots.map((dot, i) => (
                <circle
                  key={i}
                  cx={dot.x}
                  cy={dot.y}
                  r="5"
                  fill={dot.color}
                  opacity={dot.opacity}
                  style={{ transition: 'fill 300ms ease' }}
                />
              ))}
            </svg>
          </div>

          {/* Bottom Bar: Copyright & Location */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", sans-serif',
              fontSize: '0.8125rem',
              color: 'rgba(20, 14, 13, 0.65)'
            }}
          >
            <span>© 2026 Ignis AI. All rights reserved.</span>
            <span>Registered in Australia.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
