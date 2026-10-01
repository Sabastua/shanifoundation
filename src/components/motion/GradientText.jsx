import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '../../motion/hooks/useAnimationContext';

export default function GradientText({
  children,
  gradient = 'bloom', // 'bloom' | 'gold' | 'brand'
  animateWipe = false,
  className = '',
}) {
  const { isReducedMotion } = useAnimationContext();

  const gradClass =
    gradient === 'gold'
      ? 'text-gradient-gold'
      : gradient === 'brand'
      ? 'text-plum-900 bg-grad-brand bg-clip-text text-transparent'
      : 'text-gradient-bloom';

  if (isReducedMotion || !animateWipe) {
    return (
      <span className={`${gradClass} font-bold inline-block ${className}`}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
      animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`${gradClass} font-bold inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
}
