import { useState, useRef, useEffect } from 'react';
import { useAnimationContext } from './useAnimationContext';

/**
 * useMouseParallax: subtle floating offset (max 12px)
 */
export function useMouseParallax(maxOffset = 12) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const { isReducedMotion } = useAnimationContext();

  useEffect(() => {
    if (isReducedMotion) return;
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let frameId = null;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;

      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setOffset({
          x: normX * maxOffset,
          y: normY * maxOffset,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [maxOffset, isReducedMotion]);

  return offset;
}

/**
 * useCard3DTilt: 3D tilt up to 4 degrees toward the pointer with glare tracking
 */
export function useCard3DTilt(maxTilt = 4) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });
  const { isReducedMotion } = useAnimationContext();

  useEffect(() => {
    const el = cardRef.current;
    if (!el || isReducedMotion) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let frameId = null;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = (x / rect.width - 0.5) * 2;
      const normY = (y / rect.height - 0.5) * 2;

      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setTilt({
          rotateX: -normY * maxTilt,
          rotateY: normX * maxTilt,
          glareX: (x / rect.width) * 100,
          glareY: (y / rect.height) * 100,
          isHovered: true,
        });
      });
    };

    const handleMouseLeave = () => {
      if (frameId) cancelAnimationFrame(frameId);
      setTilt({
        rotateX: 0,
        rotateY: 0,
        glareX: 50,
        glareY: 50,
        isHovered: false,
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [maxTilt, isReducedMotion]);

  return { cardRef, ...tilt };
}
