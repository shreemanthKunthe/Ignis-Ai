import React from 'react';

/**
 * Small circular profile utility button (42-46px)
 * Off-white/white background, thin hairline border, minimal profile icon.
 * Harmless placeholder utility button.
 */
export default function ProfileButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick || (() => {})}
      className="ignis-profile-btn"
      aria-label="User Account"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        backgroundColor: 'var(--ignis-card)',
        border: '1px solid var(--ignis-line)',
        color: 'var(--ignis-ink)',
        cursor: 'pointer',
        transition: 'border-color var(--transition-fast), background-color var(--transition-fast), transform var(--transition-fast)',
        flexShrink: 0
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--ignis-coral)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--ignis-line)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    </button>
  );
}
