import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useAnimationContext } from '../../motion/hooks/useAnimationContext';

export default function ScrollProgress() {
  const { isReducedMotion } = useAnimationContext();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  if (isReducedMotion) return null;

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-grad-bloom z-[9999] pointer-events-none"
      aria-hidden="true"
    />
  );
}
