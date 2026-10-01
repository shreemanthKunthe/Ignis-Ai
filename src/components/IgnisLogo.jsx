import React from 'react';

/**
 * Ignis official brand lockup:
 * Three slanted licks mark in flat Ignis Coral (#C93227) + editorial wordmark with coral period.
 */
export default function IgnisLogo({ showMark = true, height = 24, className = '' }) {
  return (
    <a href="#" className={`ignis-logo-link ${className}`} aria-label="Ignis Home">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {showMark && (
          <svg
            width={height * 1.05}
            height={height}
            viewBox="0 0 34 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
            aria-hidden="true"
          >
            {/* The 3 slanted licks of the Ignis mark */}
            <path
              d="M0 24L7.5 2H13.5L6 24H0Z"
              fill="var(--ignis-coral)"
            />
            <path
              d="M10 24L17.5 2H23.5L16 24H10Z"
              fill="var(--ignis-coral)"
            />
            <path
              d="M20 24L27.5 2H33.5L26 24H20Z"
              fill="var(--ignis-coral)"
            />
          </svg>
        )}
        <span
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: `${height * 0.85}px`,
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ignis-ink)',
            lineHeight: 1,
            display: 'inline-flex',
            alignItems: 'baseline'
          }}
        >
          IGNIS
          <span style={{ color: 'var(--ignis-coral)', marginLeft: '1px' }}>.</span>
        </span>
      </div>
    </a>
  );
}
