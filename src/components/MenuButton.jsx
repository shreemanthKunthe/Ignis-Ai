import React from 'react';

/**
 * Menu button inside the center pill.
 * Features clean 2-line hamburger icon and "Menu" label.
 */
export default function MenuButton({ onClick, isOpen = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="ignis-menu-btn"
      aria-label={isOpen ? "Close menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--ignis-pill-text)',
        background: 'none',
        border: 'none',
        padding: '6px 10px',
        borderRadius: '999px',
        cursor: 'pointer',
        fontSize: '0.8125rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        transition: 'opacity var(--transition-fast)',
        userSelect: 'none'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      <svg
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <line x1="1" y1="3" x2="13" y2="3" />
        <line x1="1" y1="9" x2="13" y2="9" />
      </svg>
      <span>Menu</span>
    </button>
  );
}
