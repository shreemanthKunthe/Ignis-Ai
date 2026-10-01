import React, { useState } from 'react';

/**
 * "Get started" black pill-shaped CTA button.
 * Height: 52-56px, border radius: 999px, white text.
 * Restrained hover transition with subtle 3-4px arrow shift.
 */
export default function GetStartedButton({
  href = '#get-started',
  children = 'Get started',
  variant = 'black', // 'black' or 'coral'
  showArrow = true,
  onClick,
  className = ''
}) {
  const [isHovered, setIsHovered] = useState(false);

  const isCoral = variant === 'coral';
  const bgColor = isCoral
    ? (isHovered ? '#A8261D' : '#C93227')
    : (isHovered ? '#261B19' : 'var(--ignis-pill-bg)');

  return (
    <a
      href={href}
      onClick={onClick}
      className={`ignis-cta-pill ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        height: '52px',
        paddingLeft: '28px',
        paddingRight: '26px',
        borderRadius: '999px',
        backgroundColor: bgColor,
        color: '#FFFFFF',
        fontFamily: 'var(--font-text)',
        fontSize: '0.9375rem',
        fontWeight: 600,
        letterSpacing: '0.01em',
        textDecoration: 'none',
        border: 'none',
        boxShadow: isCoral ? (isHovered ? '0 12px 28px rgba(255, 91, 32, 0.45)' : '0 8px 24px rgba(255, 91, 32, 0.35)') : 'none',
        cursor: 'pointer',
        transition: 'background-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast)',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        transform: isHovered ? 'translateY(-1.5px)' : 'translateY(0)'
      }}
    >
      <span>{children}</span>
      {showArrow && (
        <svg
          width="15"
          height="15"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{
            transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'translateX(3.5px)' : 'translateX(0)'
          }}
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      )}
    </a>
  );
}
