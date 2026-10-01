import { useState, useRef, useEffect } from 'react';
import { useAnimationContext } from './useAnimationContext';

/**
 * useMagnetic Hook
 * Gives subtle magnetic pull (max 8px) to buttons on pointer:fine desktop devices.
 */
export function useMagnetic(maxDistance = 8) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isReducedMotion } = useAnimationContext();

  useEffect(() => {
    const el = ref.current;
    if (!el || isReducedMotion) return;

    // Only apply on fine pointers (mouse), not touch screens
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let frameId = null;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.25;
      const deltaY = (e.clientY - centerY) * 0.25;

      const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX));
      const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY));

      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setPosition({ x: clampedX, y: clampedY });
      });
    };

    const handleMouseLeave = () => {
      if (frameId) cancelAnimationFrame(frameId);
      setPosition({ x: 0, y: 0 });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [maxDistance, isReducedMotion]);

  return { ref, x: position.x, y: position.y };
}
