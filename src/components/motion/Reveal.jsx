import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn, scaleIn } from '../../motion/variants';
import { useAnimationContext } from '../../motion/hooks/useAnimationContext';

export default function Reveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  threshold = 0.2,
  once = true,
}) {
  const { isReducedMotion } = useAnimationContext();

  const variantMap = {
    fadeUp,
    fadeIn,
    scaleIn,
  };

  const selectedVariant = variantMap[variant] || fadeUp;

  if (isReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
