import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useAnimationContext } from '../motion/hooks/useAnimationContext';

export default function FocusCard({
  id,
  title,
  summary,
  colorScheme, // 'magenta' | 'gold' | 'green' | 'plum'
  iconName = 'droplet',
  onSelect,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { isReducedMotion } = useAnimationContext();

  const colorVariants = {
    magenta: {
      gradient: 'var(--grad-focus-menstrual)',
      badgeBg: 'bg-magenta-100 text-magenta-600',
      washGradient: 'linear-gradient(to top, rgba(163, 39, 122, 0.12), transparent)',
      arrowColor: 'text-magenta-500',
      borderHover: 'hover:border-magenta-500/40',
    },
    gold: {
      gradient: 'var(--grad-focus-empowerment)',
      badgeBg: 'bg-gold-100 text-ink-900',
      washGradient: 'linear-gradient(to top, rgba(232, 163, 61, 0.12), transparent)',
      arrowColor: 'text-gold-600',
      borderHover: 'hover:border-gold-500/50',
    },
    green: {
      gradient: 'var(--grad-focus-climate)',
      badgeBg: 'bg-leaf-100 text-leaf-600',
      washGradient: 'linear-gradient(to top, rgba(63, 125, 43, 0.12), transparent)',
      arrowColor: 'text-leaf-600',
      borderHover: 'hover:border-leaf-600/40',
    },
    plum: {
      gradient: 'var(--grad-focus-child)',
      badgeBg: 'bg-magenta-100 text-plum-700',
      washGradient: 'linear-gradient(to top, rgba(122, 15, 90, 0.12), transparent)',
      arrowColor: 'text-plum-700',
      borderHover: 'hover:border-plum-700/40',
    },
  };

  const style = colorVariants[colorScheme] || colorVariants.magenta;

  // Purposeful animated icons based on brand motion rules
  const renderIcon = () => {
    switch (iconName) {
      case 'droplet':
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor">
            <motion.path
              d="M 12,2 C 12,2 5,10 5,15 C 5,18.86 8.13,22 12,22 C 15.86,22 19,18.86 19,15 C 19,10 12,2 12,2 Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={isHovered ? 'currentColor' : 'none'}
              animate={
                isHovered && !isReducedMotion
                  ? { y: [0, 4, -2, 0], scale: [1, 0.95, 1.05, 1] }
                  : {}
              }
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </svg>
        );

      case 'users':
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor">
            {/* Left figure */}
            <motion.path
              d="M 7,21 V 19 C 7,16.79 8.79,15 11,15"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isHovered && !isReducedMotion ? { rotate: [0, 6, 0] } : {}}
              transition={{ duration: 0.5 }}
              style={{ transformOrigin: 'bottom center' }}
            />
            <motion.circle
              cx="9"
              cy="7"
              r="4"
              strokeWidth="2"
              animate={isHovered && !isReducedMotion ? { x: [0, 1.5, 0] } : {}}
              transition={{ duration: 0.5 }}
            />
            {/* Right figure */}
            <motion.path
              d="M 17,21 V 19 C 17,16.79 15.21,15 13,15"
              strokeWidth="2"
              strokeLinecap="round"
              animate={isHovered && !isReducedMotion ? { rotate: [0, -6, 0] } : {}}
              transition={{ duration: 0.5 }}
              style={{ transformOrigin: 'bottom center' }}
            />
            <motion.circle
              cx="15"
              cy="7"
              r="4"
              strokeWidth="2"
              animate={isHovered && !isReducedMotion ? { x: [0, -1.5, 0] } : {}}
              transition={{ duration: 0.5 }}
            />
          </svg>
        );

      case 'leaf':
      case 'globe':
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor">
            <motion.circle
              cx="12"
              cy="12"
              r="10"
              strokeWidth="2"
              animate={isHovered && !isReducedMotion ? { rotate: 20 } : { rotate: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <path d="M 2,12 H 22" strokeWidth="1.5" />
            <motion.path
              d="M 12,2 C 15,6 17,9 17,12 C 17,15 15,18 12,22 C 9,18 7,15 7,12 C 7,9 9,6 12,2 Z"
              strokeWidth="1.5"
              animate={isHovered && !isReducedMotion ? { scale: [1, 1.15, 1] } : {}}
              transition={{ duration: 0.6 }}
            />
          </svg>
        );

      case 'shield':
      default:
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor">
            <motion.path
              d="M 12,22 C 12,22 20,18 20,12 V 5 L 12,2 L 4,5 V 12 C 4,18 12,22 12,22 Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={isHovered && !isReducedMotion ? { scale: [1, 1.06, 1] } : {}}
              transition={{ duration: 0.5 }}
            />
            <motion.path
              d="M 9,12 L 11,14 L 15,10"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 1 }}
              animate={isHovered && !isReducedMotion ? { pathLength: [0, 1] } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={isReducedMotion ? {} : { y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onSelect && onSelect(id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect && onSelect(id);
        }
      }}
      className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-organic bg-white border border-black/5 shadow-brand transition-all duration-300 hover:shadow-brand-hover cursor-pointer text-left overflow-hidden ${style.borderHover}`}
    >
      {/* Gradient wash flooding from bottom up on hover */}
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        animate={isHovered && !isReducedMotion ? { opacity: 1, y: '0%' } : { opacity: 0, y: '100%' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ background: style.washGradient }}
        className="absolute inset-0 pointer-events-none -z-0"
      />

      <div className="relative z-10">
        {/* Icon Circle with Soft-Spring Scale Entrance */}
        <div className="flex items-center justify-between mb-6">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            style={{ background: style.gradient }}
            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-sm"
          >
            {renderIcon()}
          </motion.div>
          <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${style.badgeBg}`}>
            Pillar
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink-900 group-hover:text-plum-700 transition-colors mb-3 leading-snug">
          {title}
        </h3>

        {/* 2-line summary */}
        <p className="text-ink-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
          {summary}
        </p>
      </div>

      {/* Learn more arrow sliding 6px right with underline drawing in */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-cream-100">
        <div className="relative inline-flex items-center gap-2 text-sm font-bold">
          <span className={style.arrowColor}>Explore Focus Area</span>
          <motion.span
            animate={isHovered && !isReducedMotion ? { x: 6 } : { x: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ArrowRight className={`w-4 h-4 ${style.arrowColor}`} />
          </motion.span>

          {/* Underline drawing in */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={isHovered && !isReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: 'left' }}
            className={`absolute bottom-[-2px] left-0 right-6 h-[2px] ${
              colorScheme === 'magenta'
                ? 'bg-magenta-500'
                : colorScheme === 'gold'
                ? 'bg-gold-500'
                : colorScheme === 'green'
                ? 'bg-leaf-600'
                : 'bg-plum-700'
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}
