import React, { useState, useEffect, useRef } from 'react';

/**
 * Counter: triggers animation once when in view
 * Respects: "Do NOT invent statistics... Where content is missing, use clearly marked placeholders"
 */
export default function Counter({
  label,
  placeholderText,
  suffix = '+',
  targetNumber = 0,
  icon: Icon,
  color = 'magenta',
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const colorStyles = {
    magenta: 'text-magenta-500 bg-magenta-100/60',
    gold: 'text-gold-600 bg-gold-100/60',
    green: 'text-leaf-600 bg-leaf-100/60',
    plum: 'text-plum-700 bg-magenta-100/40',
  };

  const style = colorStyles[color] || colorStyles.magenta;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          if (targetNumber > 0) {
            let start = 0;
            const duration = 1800; // ms
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = targetNumber / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= targetNumber) {
                setCount(targetNumber);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, stepTime);
          }
        }
      },
      { threshold: 0.25 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetNumber]);

  return (
    <div
      ref={counterRef}
      className="p-6 sm:p-8 rounded-organic bg-white border border-black/5 shadow-brand text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-hover"
    >
      {Icon && (
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${style}`}>
          <Icon className="w-7 h-7" />
        </div>
      )}

      {/* Numerical display or placeholder */}
      {targetNumber > 0 ? (
        <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight mb-2">
          {count.toLocaleString()}{suffix}
        </div>
      ) : null}

      {/* Prominent client placeholder badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-100 border border-gold-500/40 text-ink-900 text-xs font-mono font-bold mb-2">
        <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
        <span>{placeholderText}</span>
      </div>

      <div className="text-sm sm:text-base font-semibold text-ink-600 max-w-[200px] leading-snug">
        {label}
      </div>
    </div>
  );
}
