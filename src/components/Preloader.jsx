import React, { useEffect } from 'react';

/**
 * Preloader — disabled per request.
 * Calls onComplete immediately so the page renders without any intro animation.
 */
export default function Preloader({ onComplete }) {
  useEffect(() => {
    onComplete?.();
  }, []);

  return null;
}
