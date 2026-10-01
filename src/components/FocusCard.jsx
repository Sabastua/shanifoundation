import React from 'react';
import { ArrowRight, Droplets, Users, Leaf, ShieldAlert } from 'lucide-react';

const iconMap = {
  droplet: Droplets,
  users: Users,
  leaf: Leaf,
  shield: ShieldAlert,
};

export default function FocusCard({
  id,
  title,
  summary,
  colorScheme, // 'magenta' | 'gold' | 'green' | 'plum'
  iconName = 'droplet',
  onSelect,
}) {
  const Icon = iconMap[iconName] || Droplets;

  const colorVariants = {
    magenta: {
      circleBg: 'bg-magenta-500 text-white',
      badgeBg: 'bg-magenta-100 text-magenta-600',
      borderHover: 'hover:border-magenta-500/40',
      washHover: 'group-hover:bg-magenta-50/40',
      arrowColor: 'text-magenta-500',
    },
    gold: {
      circleBg: 'bg-gold-500 text-ink-900',
      badgeBg: 'bg-gold-100 text-ink-900',
      borderHover: 'hover:border-gold-500/50',
      washHover: 'group-hover:bg-gold-50/50',
      arrowColor: 'text-gold-600',
    },
    green: {
      circleBg: 'bg-leaf-600 text-white',
      badgeBg: 'bg-leaf-100 text-leaf-600',
      borderHover: 'hover:border-leaf-600/40',
      washHover: 'group-hover:bg-leaf-100/20',
      arrowColor: 'text-leaf-600',
    },
    plum: {
      circleBg: 'bg-plum-700 text-white',
      badgeBg: 'bg-magenta-100 text-plum-700',
      borderHover: 'hover:border-plum-700/40',
      washHover: 'group-hover:bg-magenta-50/30',
      arrowColor: 'text-plum-700',
    },
  };

  const style = colorVariants[colorScheme] || colorVariants.magenta;

  return (
    <div
      onClick={() => onSelect && onSelect(id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect && onSelect(id);
        }
      }}
      className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-organic bg-white border border-black/5 shadow-brand transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-hover cursor-pointer text-left ${style.borderHover} ${style.washHover}`}
    >
      <div>
        {/* Icon Circle */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 ${style.circleBg}`}
          >
            <Icon className="w-7 h-7" />
          </div>
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

      {/* Learn more arrow */}
      <div className="flex items-center gap-2 text-sm font-bold pt-4 border-t border-cream-100">
        <span className={style.arrowColor}>Explore Focus Area</span>
        <ArrowRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5 ${style.arrowColor}`} />
      </div>
    </div>
  );
}
