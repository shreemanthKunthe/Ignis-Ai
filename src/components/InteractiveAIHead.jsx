import React, { useEffect, useRef } from 'react';

/**
 * InteractiveAIHead Component
 * 
 * Interactive robot head with 3D perspective parallax and responsive eye pupil
 * tracking that dynamically follows the user's cursor across the viewport.
 * 
 * Uses authentic head asset with deep eye sockets and custom glowing coral pupils
 * that smoothly track mouse coordinates via 60fps requestAnimationFrame lerp.
 */
export default function InteractiveAIHead() {
  const containerRef = useRef(null);
  const headRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    // Disable parallax on mobile/touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) return;

    let targetX = 0;
    let targetY = 0;
    let headX = 0;
    let headY = 0;
    let eyeX = 0;
    let eyeY = 0;

    const EYE_LERP = 0.22;
    const HEAD_LERP = 0.075;

    let rafId = null;

    const handleMouseMove = (e) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Normalize coordinates: -1 (left/top) to +1 (right/bottom)
      targetX = ((e.clientX / width) - 0.5) * 2;
      targetY = ((e.clientY / height) - 0.5) * 2;

      targetX = Math.max(-1, Math.min(1, targetX));
      targetY = Math.max(-1, Math.min(1, targetY));
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const updateFrame = () => {
      // Lerp head motion
      headX += (targetX - headX) * HEAD_LERP;
      headY += (targetY - headY) * HEAD_LERP;

      // Lerp eye pupils with high responsiveness
      eyeX += (targetX - eyeX) * EYE_LERP;
      eyeY += (targetY - eyeY) * EYE_LERP;

      // Apply subtle 3D tilt and translate to entire head
      if (headRef.current) {
        const transX = headX * 14;
        const transY = headY * 8;
        const rotY = headX * 5.0;
        const rotX = -headY * 4.0;
        const rotZ = headX * 1.5;

        headRef.current.style.transform = `translate3d(${transX}px, ${transY}px, 0px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
      }

      // Responsive eye pupil translation inside the 3D socket cavities
      const eyeTransX = eyeX * 16;
      const eyeTransY = eyeY * 13;

      if (leftEyeRef.current) {
        leftEyeRef.current.style.transform = `translate3d(${eyeTransX}px, ${eyeTransY}px, 0px)`;
      }

      if (rightEyeRef.current) {
        rightEyeRef.current.style.transform = `translate3d(${eyeTransX}px, ${eyeTransY}px, 0px)`;
      }

      rafId = requestAnimationFrame(updateFrame);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

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
        userSelect: 'none'
      }}
    >
      {/* Main Head Graphic Container */}
      <div
        ref={headRef}
        className="head-transform-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'none'
        }}
      >
        {/* Authentic Head Graphic with Baked HUD Elements */}
        <img
          src="/assets/head_interactive.png"
          alt="Ignis AI System Architecture Character"
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            pointerEvents: 'none',
            display: 'block'
          }}
        />

        {/* Dynamic Eye Pupil Tracking Layer */}
        {/* Left Eye: Character perspective left eye (centered at 33.46% X, 50.79% Y in 1536x1024) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '33.46%',
            top: '50.79%',
            width: '42px',
            height: '56px',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            ref={leftEyeRef}
            style={{
              width: '6px',
              height: '28px',
              background: 'linear-gradient(180deg, #FF6A45 0%, #FF3308 100%)',
              borderRadius: '999px',
              boxShadow: '0 0 10px #FF3A0C, 0 0 18px rgba(255, 60, 20, 0.95), 0 0 32px rgba(255, 80, 30, 0.6)',
              willChange: 'transform',
              transition: 'none'
            }}
          />
        </div>

        {/* Right Eye: Character center eye (centered at 44.00% X, 50.32% Y in 1536x1024) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '44.00%',
            top: '50.32%',
            width: '54px',
            height: '56px',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            ref={rightEyeRef}
            style={{
              width: '7px',
              height: '30px',
              background: 'linear-gradient(180deg, #FF6A45 0%, #FF3308 100%)',
              borderRadius: '999px',
              boxShadow: '0 0 10px #FF3A0C, 0 0 18px rgba(255, 60, 20, 0.95), 0 0 32px rgba(255, 80, 30, 0.6)',
              willChange: 'transform',
              transition: 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
}
