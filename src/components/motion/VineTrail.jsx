import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useAnimationContext } from '../../motion/hooks/useAnimationContext';

export default function VineTrail() {
  const { isReducedMotion } = useAnimationContext();
  const { scrollYProgress } = useScroll();

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  if (isReducedMotion) return null;

  return (
    <div
      className="hidden 2xl:block fixed left-6 top-24 bottom-12 w-6 pointer-events-none z-20"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 1000"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full opacity-60"
      >
        <defs>
          <linearGradient id="vine-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8DB63C" />
            <stop offset="50%" stopColor="#3F7D2B" />
            <stop offset="100%" stopColor="#7A0F5A" />
          </linearGradient>
        </defs>

        {/* Stem line that unfurls with scroll */}
        <motion.path
          d="M 12,0 C 8,150 16,300 12,450 C 8,600 16,750 12,1000"
          stroke="url(#vine-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength }}
        />

        {/* Sprout nodes along the vine */}
        {[150, 380, 620, 850].map((y, idx) => (
          <g key={idx} transform={`translate(12, ${y})`}>
            <circle r="3.5" fill="#8DB63C" />
            <path
              d={idx % 2 === 0 ? "M 3,-2 C 8,-6 12,-2 8,2 Z" : "M -3,-2 C -8,-6 -12,-2 -8,2 Z"}
              fill="#3F7D2B"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
