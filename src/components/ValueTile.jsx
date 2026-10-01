import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '../motion/hooks/useAnimationContext';

export default function ValueTile({ title, meaning, type = 'dignity' }) {
  const [isActive, setIsActive] = useState(false);
  const { isReducedMotion } = useAnimationContext();

  const typeConfig = {
    dignity: {
      border: 'border-magenta-100',
      gradientWash: 'linear-gradient(135deg, rgba(163,39,122,0.92) 0%, rgba(122,15,90,0.95) 100%)',
      iconBg: 'bg-magenta-100 text-magenta-500',
      tagColor: 'text-magenta-500',
    },
    equity: {
      border: 'border-gold-100',
      gradientWash: 'linear-gradient(135deg, rgba(232,163,61,0.95) 0%, rgba(204,138,43,0.95) 100%)',
      iconBg: 'bg-gold-100 text-gold-600',
      tagColor: 'text-gold-600',
    },
    empowerment: {
      border: 'border-leaf-100',
      gradientWash: 'linear-gradient(135deg, rgba(63,125,43,0.92) 0%, rgba(46,90,43,0.95) 100%)',
      iconBg: 'bg-leaf-100 text-leaf-600',
      tagColor: 'text-leaf-600',
    },
    accountability: {
      border: 'border-plum-700/10',
      gradientWash: 'linear-gradient(135deg, rgba(74,10,56,0.95) 0%, rgba(46,10,35,0.98) 100%)',
      iconBg: 'bg-plum-900/5 text-plum-700',
      tagColor: 'text-plum-700',
    },
  };

  const current = typeConfig[type] || typeConfig.dignity;

  // Render animated SVG icon for each value
  const renderIcon = () => {
    switch (type) {
      case 'dignity':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
            <motion.path
              d="M 19 14 C 20.66 12.34 20.66 9.66 19 8 C 17.34 6.34 14.66 6.34 13 8 L 12 9 L 11 8 C 9.34 6.34 6.66 6.34 5 8 C 3.34 9.66 3.34 12.34 5 14 L 12 21 L 19 14 Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: [0.9, 1.1, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </svg>
        );

      case 'equity':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
            <path d="M 12 3 L 12 21" strokeWidth="2" strokeLinecap="round" />
            <motion.path
              d="M 5 6 L 19 6"
              strokeWidth="2"
              strokeLinecap="round"
              animate={!isReducedMotion && isActive ? { rotate: [0, 4, -4, 0] } : {}}
              transition={{ duration: 0.8 }}
              style={{ transformOrigin: 'center' }}
            />
            <path d="M 5 6 L 2 12 C 2 13.5 3.5 15 5 15 C 6.5 15 8 13.5 8 12 Z" strokeWidth="1.5" />
            <path d="M 19 6 L 16 12 C 16 13.5 17.5 15 19 15 C 20.5 15 22 13.5 22 12 Z" strokeWidth="1.5" />
          </svg>
        );

      case 'empowerment':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
            <motion.path
              d="M 12 2 L 15 8 L 21 9 L 17 14 L 18 20 L 12 17 L 6 20 L 7 14 L 3 9 L 9 8 Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ rotate: -20, opacity: 0.8 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 140 }}
            />
          </svg>
        );

      case 'accountability':
      default:
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <motion.path
              d="M 8 12 L 11 15 L 16 9"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </svg>
        );
    }
  };

  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`${title} core value details`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      className={`relative min-h-[220px] p-6 sm:p-7 rounded-2xl border ${current.border} bg-white shadow-brand transition-all duration-300 hover:shadow-brand-hover overflow-hidden flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500`}
    >
      {/* Front Face */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${current.iconBg}`}>
            {renderIcon()}
          </div>
          <span className={`text-[11px] font-bold uppercase tracking-wider ${current.tagColor}`}>
            Core Value
          </span>
        </div>

        <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 mb-2">
          {title}
        </h4>
        <p className="text-xs text-ink-500">
          Hover, tap or focus to reveal meaning &rarr;
        </p>
      </div>

      {/* Slide-Up Gradient Overlay with Meaning */}
      <motion.div
        initial={false}
        animate={
          isActive
            ? { y: '0%', opacity: 1 }
            : { y: '100%', opacity: 0 }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: current.gradientWash }}
        className="absolute inset-0 p-6 flex flex-col justify-center text-white z-20"
      >
        <span className="text-[11px] font-bold uppercase tracking-widest text-gold-100 mb-1">
          {title}
        </span>
        <p className="text-sm sm:text-base leading-relaxed font-medium">
          {meaning}
        </p>
      </motion.div>
    </div>
  );
}
