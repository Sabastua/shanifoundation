import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useAnimationContext } from '../../motion/hooks/useAnimationContext';

export default function CustomCursor() {
  const { isReducedMotion } = useAnimationContext();
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(pointer: fine)');
    setIsPointerFine(media.matches);

    const handleMediaChange = (e) => setIsPointerFine(e.matches);
    media.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      media.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isPointerFine || isReducedMotion || !isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: isHovered ? 48 : 24,
        height: isHovered ? 48 : 24,
        opacity: isHovered ? 0.45 : 0.3,
      }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] blur-[8px]"
      aria-hidden="true"
    >
      <div className="w-full h-full rounded-full bg-gradient-to-r from-magenta-500 to-gold-500" />
    </motion.div>
  );
}
