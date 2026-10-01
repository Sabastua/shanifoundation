import React from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '../motion/hooks/useAnimationContext';

export default function RibbonLabel({
  children,
  variant = 'plum', // 'plum' | 'gold' | 'green' | 'magenta' | 'forest'
  icon: Icon = null,
  className = '',
}) {
  const { isReducedMotion } = useAnimationContext();

  const variantStyles = {
    plum: 'bg-grad-brand text-white shadow-sm',
    gold: 'bg-grad-gold text-ink-900 shadow-sm font-extrabold',
    green: 'bg-grad-growth text-white shadow-sm',
    forest: 'bg-forest-800 text-white shadow-sm',
    magenta: 'bg-grad-menstrual text-white shadow-sm',
    'soft-plum': 'bg-magenta-100 text-plum-900 border border-plum-700/20',
    'soft-gold': 'bg-gold-100 text-ink-900 border border-gold-500/30',
    'soft-green': 'bg-leaf-100 text-forest-800 border border-leaf-600/30',
  };

  const selectedStyle = variantStyles[variant] || variantStyles.plum;

  if (isReducedMotion) {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold select-none ${selectedStyle} ${className}`}
      >
        {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
        <span>{children}</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: 'center' }}
      className={`relative overflow-hidden inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold select-none ${selectedStyle} ${className}`}
    >
      {/* Faint single sweep highlight */}
      <motion.span
        initial={{ x: '-100%' }}
        whileInView={{ x: '200%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25, ease: 'easeInOut' }}
        className="absolute inset-0 w-1/2 bg-white/20 skew-x-12 pointer-events-none"
      />

      {/* Content fades in with 200ms delay */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex items-center gap-1.5 relative z-10"
      >
        {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
        <span>{children}</span>
      </motion.span>
    </motion.div>
  );
}
