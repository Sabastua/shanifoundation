import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAnimationContext } from '../../motion/hooks/useAnimationContext';

export default function CurvedDivider({
  fill = '#FFFDFA',
  flip = false,
  className = '',
  height = 56,
}) {
  const { isReducedMotion } = useAnimationContext();
  const { scrollY } = useScroll();
  
  // Gentle amplitude morph on scroll (0 to 18px delta)
  const amplitudeY = useTransform(scrollY, [0, 1000], [28, 46]);

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
        flip ? 'rotate-180 -mb-1' : '-mt-1'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: `${height}px` }}
      >
        {isReducedMotion ? (
          <path
            d="M 0,36 C 320,70 720,10 1080,45 C 1260,62 1380,40 1440,36 L 1440,80 L 0,80 Z"
            fill={fill}
          />
        ) : (
          <motion.path
            d={`M 0,36 C 360,${flip ? 60 : 15} 720,${flip ? 15 : 60} 1080,36 C 1260,${
              flip ? 50 : 25
            } 1380,36 1440,36 L 1440,80 L 0,80 Z`}
            fill={fill}
          />
        )}
      </svg>
    </div>
  );
}
