import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '../../motion/hooks/useAnimationContext';

export default function FloatingLeaves({ className = '' }) {
  const { isReducedMotion } = useAnimationContext();

  if (isReducedMotion) return null;

  const particles = [
    {
      id: 1,
      type: 'leaf',
      left: '12%',
      size: 22,
      duration: 14,
      delay: 0,
      fill: 'url(#grad-growth-svg)',
    },
    {
      id: 2,
      type: 'sparkle',
      left: '28%',
      size: 14,
      duration: 11,
      delay: 2.5,
      fill: '#E8A33D',
    },
    {
      id: 3,
      type: 'leaf',
      left: '75%',
      size: 26,
      duration: 16,
      delay: 1.2,
      fill: 'url(#grad-growth-svg)',
    },
    {
      id: 4,
      type: 'sparkle',
      left: '88%',
      size: 16,
      duration: 13,
      delay: 4,
      fill: '#F3C566',
    },
    {
      id: 5,
      type: 'leaf',
      left: '52%',
      size: 18,
      duration: 18,
      delay: 3,
      fill: 'url(#grad-gold-svg)',
    },
  ];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-0 ${className}`}
      aria-hidden="true"
    >
      <svg className="hidden" aria-hidden="true">
        <defs>
          <linearGradient id="grad-growth-svg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E5A2B" />
            <stop offset="55%" stopColor="#3F7D2B" />
            <stop offset="100%" stopColor="#8DB63C" />
          </linearGradient>
          <linearGradient id="grad-gold-svg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8A33D" />
            <stop offset="100%" stopColor="#F3C566" />
          </linearGradient>
        </defs>
      </svg>

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-[-10%]"
          style={{ left: p.left }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [-15, 20, -10, 15],
            rotate: [0, 45, -30, 90],
            opacity: [0, 0.75, 0.85, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        >
          {p.type === 'leaf' ? (
            <svg
              width={p.size}
              height={p.size * 1.3}
              viewBox="0 0 24 32"
              fill="none"
              style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.08))' }}
            >
              <path
                d="M 12,2 C 22,8 24,24 12,30 C 0,24 2,8 12,2 Z"
                fill={p.fill}
              />
              <path
                d="M 12,6 L 12,26"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill={p.fill}
              style={{ filter: 'drop-shadow(0 2px 4px rgba(232, 163, 61, 0.3))' }}
            >
              <path d="M 12,0 L 15,9 L 24,12 L 15,15 L 12,24 L 9,15 L 0,12 L 9,9 Z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
