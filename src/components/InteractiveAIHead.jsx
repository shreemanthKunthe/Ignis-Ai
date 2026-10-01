import React, { useEffect, useRef } from 'react';

/**
 * InteractiveAIHead Component
 *
 * Interactive robot head with:
 * 1. Subtle 3D perspective tilt following the cursor
 * 2. Small dark pupils inside the eye sockets that track the mouse
 *
 * Image: head_v2.png (1024×682) in a 1536:1024 container — fills full width.
 * Eye centres (source px → container %):
 *   Left  eye: ~280px X / 1024 = 27.3%,  ~382px Y / 682 * (1024/682) ≈ 57.5%
 *   Right eye: ~362px X / 1024 = 35.4%,  ~376px Y / 682 * (1024/682) ≈ 56.5%
 */
export default function InteractiveAIHead() {
  const containerRef  = useRef(null);
  const headRef       = useRef(null);
  const leftPupilRef  = useRef(null);
  const rightPupilRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) return;

    let targetX = 0, targetY = 0;
    let headX   = 0, headY   = 0;
    let eyeX    = 0, eyeY    = 0;

    const HEAD_LERP = 0.075;
    const EYE_LERP  = 0.18;

    let rafId = null;

    const onMouseMove = (e) => {
      targetX = ((e.clientX / window.innerWidth)  - 0.5) * 2;
      targetY = ((e.clientY / window.innerHeight) - 0.5) * 2;
      targetX = Math.max(-1, Math.min(1, targetX));
      targetY = Math.max(-1, Math.min(1, targetY));
    };

    const onMouseLeave = () => { targetX = 0; targetY = 0; };

    const tick = () => {
      headX += (targetX - headX) * HEAD_LERP;
      headY += (targetY - headY) * HEAD_LERP;
      eyeX  += (targetX - eyeX)  * EYE_LERP;
      eyeY  += (targetY - eyeY)  * EYE_LERP;

      if (headRef.current) {
        headRef.current.style.transform =
          `translate3d(${headX * 14}px, ${headY * 8}px, 0)` +
          ` rotateX(${-headY * 4}deg) rotateY(${headX * 5}deg) rotateZ(${headX * 1.5}deg)`;
      }

      // Pupils travel ±4px — visibly tracks without leaving the socket
      const px = eyeX * 4;
      const py = eyeY * 4;

      if (leftPupilRef.current) {
        leftPupilRef.current.style.transform = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;
      }
      if (rightPupilRef.current) {
        rightPupilRef.current.style.transform = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Pupil: small dark dot with a very subtle deep-red inner glow
  // No outer bloom — keeps it inside the socket, not "popping out"
  const pupilStyle = {
    position:     'absolute',
    width:        '8px',
    height:       '8px',
    borderRadius: '50%',
    // Deep dark core matching the black socket, with a subtle crimson inner glow
    background: 'radial-gradient(circle at 38% 38%, #7A1A14 0%, #1A0A08 65%, #0D0504 100%)',
    boxShadow:  'inset 0 0 3px rgba(201,50,39,0.5), 0 0 3px 1px rgba(201,50,39,0.2)',
    transform:  'translate(-50%, -50%)',
    willChange: 'transform',
    pointerEvents: 'none',
  };

  return (
    <div
      ref={containerRef}
      className="interactive-ai-head-container"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1536 / 1024',
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        userSelect: 'none',
      }}
    >
      <div
        ref={headRef}
        className="head-transform-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'none',
        }}
      >
        {/* Robot head image */}
        <img
          src="/assets/head_v2.png"
          alt="Ignis AI System Architecture Character"
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            pointerEvents: 'none',
            display: 'block',
          }}
        />

        {/* Left eye pupil */}
        <div
          aria-hidden="true"
          ref={leftPupilRef}
          style={{ ...pupilStyle, left: '27.3%', top: '57.5%' }}
        />

        {/* Right eye pupil */}
        <div
          aria-hidden="true"
          ref={rightPupilRef}
          style={{ ...pupilStyle, left: '35.4%', top: '56.5%' }}
        />
      </div>
    </div>
  );
}
