import React from 'react';
import { HeartHandshake, Scale, Sparkles, CheckCircle2 } from 'lucide-react';

const valueIcons = {
  dignity: HeartHandshake,
  equity: Scale,
  empowerment: Sparkles,
  accountability: CheckCircle2,
};

export default function ValueTile({ title, meaning, type = 'dignity' }) {
  const Icon = valueIcons[type] || Sparkles;

  const typeConfig = {
    dignity: {
      bg: 'bg-magenta-50/70 hover:bg-magenta-50',
      border: 'border-magenta-100',
      iconBg: 'bg-magenta-100 text-magenta-500',
      tagColor: 'text-magenta-500',
    },
    equity: {
      bg: 'bg-gold-50/70 hover:bg-gold-50',
      border: 'border-gold-100',
      iconBg: 'bg-gold-100 text-gold-600',
      tagColor: 'text-gold-600',
    },
    empowerment: {
      bg: 'bg-leaf-100/30 hover:bg-leaf-100/50',
      border: 'border-leaf-100',
      iconBg: 'bg-leaf-100 text-leaf-600',
      tagColor: 'text-leaf-600',
    },
    accountability: {
      bg: 'bg-white hover:bg-cream-100/50',
      border: 'border-plum-700/10',
      iconBg: 'bg-plum-900/5 text-plum-700',
      tagColor: 'text-plum-700',
    },
  };

  const current = typeConfig[type] || typeConfig.dignity;

  return (
    <div
      className={`p-6 sm:p-7 rounded-2xl border ${current.border} ${current.bg} transition-all duration-300 hover:-translate-y-1 hover:shadow-brand flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${current.iconBg}`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <span className={`text-[11px] font-bold uppercase tracking-wider ${current.tagColor}`}>
            Core Value
          </span>
        </div>

        <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 mb-2">
          {title}
        </h4>

        <p className="text-ink-600 text-sm sm:text-base leading-relaxed">
          {meaning}
        </p>
      </div>
    </div>
  );
}
