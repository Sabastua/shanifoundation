import React from 'react';
import { motion } from 'framer-motion';
import { useMouseParallax } from '../../motion/hooks/useParallax';
import { useAnimationContext } from '../../motion/hooks/useAnimationContext';

export default function BlobMask({ children, className = '' }) {
  const { isReducedMotion } = useAnimationContext();
  const mouseOffset = useMouseParallax(12);

  // Border-radius organic morph frames (simulates slow 12s liquid growth)
  const morphKeyframes = [
    '45% 55% 65% 35% / 50% 45% 55% 50%',
    '60% 40% 45% 55% / 40% 60% 40% 60%',
    '40% 60% 50% 50% / 55% 45% 55% 45%',
    '45% 55% 65% 35% / 50% 45% 55% 50%',
  ];

  return (
    <motion.div
      style={{
        x: isReducedMotion ? 0 : mouseOffset.x,
        y: isReducedMotion ? 0 : mouseOffset.y,
      }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className={`relative ${className}`}
    >
      {/* Outer animated gradient glow */}
      <motion.div
        animate={
          isReducedMotion
            ? {}
            : {
                borderRadius: morphKeyframes,
                rotate: [0, 3, -3, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -inset-2 bg-gradient-to-tr from-plum-700 via-magenta-500 to-gold-500 opacity-70 blur-md -z-10"
      />

      {/* Main masked container */}
      <motion.div
        animate={
          isReducedMotion
            ? {}
            : {
                borderRadius: morphKeyframes,
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full overflow-hidden bg-cream-50 border-2 border-white/50 shadow-2xl relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
