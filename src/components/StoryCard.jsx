import React from 'react';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';

export default function StoryCard({
  category,
  categoryColor = 'magenta', // 'magenta' | 'gold' | 'green' | 'plum'
  title,
  excerpt,
  location = 'Nairobi, Kenya',
  date = '[Add: Date]',
  imagePlaceholderText = '[Add: Photo of community initiative]',
  onReadMore,
}) {
  const colorMap = {
    magenta: 'bg-magenta-100 text-magenta-600 border-magenta-500/20',
    gold: 'bg-gold-100 text-ink-900 border-gold-500/30',
    green: 'bg-leaf-100 text-leaf-600 border-leaf-600/20',
    plum: 'bg-magenta-100 text-plum-700 border-plum-700/20',
  };

  const badgeStyle = colorMap[categoryColor] || colorMap.magenta;

  return (
    <article className="group bg-white rounded-organic border border-black/5 shadow-brand overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-hover">
      <div>
        {/* Photo Placeholder with Aspect Ratio box */}
        <div className="relative aspect-[16/10] bg-gradient-to-br from-cream-100 via-magenta-100/30 to-gold-100/20 flex flex-col items-center justify-center p-6 text-center border-b border-black/5 overflow-hidden">
          {/* Subtle plum gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/40 via-transparent to-transparent opacity-60"></div>
          
          <div className="relative z-10 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-sm border border-black/10 shadow-xs max-w-[85%]">
            <p className="text-xs font-mono font-semibold text-ink-900 leading-snug">
              📷 {imagePlaceholderText}
            </p>
            <span className="text-[10px] text-ink-600 block mt-0.5">
              16:10 Candid African youth & community photo
            </span>
          </div>

          {/* Category Tag overlay */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-xs ${badgeStyle}`}>
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-3 text-xs text-ink-600 mb-3">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-magenta-500" />
              {location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold-500" />
              {date}
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 group-hover:text-plum-700 transition-colors mb-3 leading-snug">
            {title}
          </h3>

          <p className="text-ink-600 text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <button
          onClick={onReadMore}
          className="w-full py-2.5 px-4 rounded-full border border-plum-700/20 text-plum-700 font-semibold text-sm hover:bg-magenta-50 flex items-center justify-center gap-1.5 transition-colors"
        >
          <span>Read Story</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}
