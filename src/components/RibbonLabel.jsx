import React from 'react';

/**
 * RibbonLabel: Banner-style ribbon pill/arrow tags
 * Echoes the Shani Foundation banner ribbons (VISION / MISSION / OUR FOCUS / CORE VALUES)
 */
export default function RibbonLabel({
  children,
  variant = 'plum', // 'plum' | 'gold' | 'green' | 'magenta' | 'forest'
  icon: Icon = null,
  className = '',
}) {
  const variantStyles = {
    plum: 'bg-plum-700 text-white shadow-sm',
    gold: 'bg-gold-500 text-ink-900 shadow-sm font-extrabold',
    green: 'bg-leaf-600 text-white shadow-sm',
    forest: 'bg-forest-800 text-white shadow-sm',
    magenta: 'bg-magenta-500 text-white shadow-sm',
    'soft-plum': 'bg-magenta-100 text-plum-900 border border-plum-700/20',
    'soft-gold': 'bg-gold-100 text-ink-900 border border-gold-500/30',
    'soft-green': 'bg-leaf-100 text-forest-800 border border-leaf-600/30',
  };

  const selectedStyle = variantStyles[variant] || variantStyles.plum;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold select-none ${selectedStyle} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
      <span>{children}</span>
    </div>
  );
}
