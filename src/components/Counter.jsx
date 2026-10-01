import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '../motion/hooks/useAnimationContext';

export default function Counter({
  label,
  placeholderText,
  suffix = '+',
  targetNumber = 0,
  icon: Icon,
  color = 'magenta', // 'magenta' | 'gold' | 'green' | 'plum'
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const counterRef = useRef(null);
  const { isReducedMotion } = useAnimationContext();

  const colorConfig = {
    magenta: {
      text: 'text-magenta-500',
      gradientId: 'grad-counter-magenta',
      stops: ['#A3277A', '#7A0F5A'],
      glow: 'shadow-[0_0_20px_rgba(163,39,122,0.25)]',
      iconBg: 'bg-magenta-100 text-magenta-500',
    },
    gold: {
      text: 'text-gold-600',
      gradientId: 'grad-counter-gold',
      stops: ['#E8A33D', '#F3C566'],
      glow: 'shadow-[0_0_20px_rgba(232,163,61,0.25)]',
      iconBg: 'bg-gold-100 text-gold-600',
    },
    green: {
      text: 'text-leaf-600',
      gradientId: 'grad-counter-green',
      stops: ['#3F7D2B', '#8DB63C'],
      glow: 'shadow-[0_0_20px_rgba(63,125,43,0.25)]',
      iconBg: 'bg-leaf-100 text-leaf-600',
    },
    plum: {
      text: 'text-plum-700',
      gradientId: 'grad-counter-plum',
      stops: ['#7A0F5A', '#4A0A38'],
      glow: 'shadow-[0_0_20px_rgba(122,15,90,0.25)]',
      iconBg: 'bg-magenta-100/50 text-plum-700',
    },
  };

  const current = colorConfig[color] || colorConfig.magenta;

  useEffect(() => {
    if (isReducedMotion) {
      setCount(targetNumber || 0);
      setHasAnimated(true);
      setIsCompleted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Trigger once at 40% visibility as requested
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          if (targetNumber > 0) {
            let start = 0;
            const duration = 1800; // 1.8s ease-out
            const stepTime = 16;
            const steps = duration / stepTime;
            let currentStep = 0;

            const timer = setInterval(() => {
              currentStep++;
              // Cubic ease-out calculation: 1 - Math.pow(1 - t, 3)
              const progress = currentStep / steps;
              const easeOutProgress = 1 - Math.pow(1 - progress, 3);
              const nextVal = Math.floor(easeOutProgress * targetNumber);

              if (currentStep >= steps || nextVal >= targetNumber) {
                setCount(targetNumber);
                setIsCompleted(true);
                clearInterval(timer);
              } else {
                setCount(nextVal);
              }
            }, stepTime);
          } else {
            setIsCompleted(true);
          }
        }
      },
      { threshold: 0.4 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetNumber, isReducedMotion]);

  // Radius 42 -> circumference ~ 264
  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      ref={counterRef}
      className={`relative p-6 sm:p-8 rounded-organic bg-white border border-black/5 shadow-brand text-center flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-1 ${
        isCompleted && !isReducedMotion ? current.glow : ''
      }`}
    >
      {/* Circular Progress Ring */}
      <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={current.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={current.stops[0]} />
              <stop offset="100%" stopColor={current.stops[1]} />
            </linearGradient>
          </defs>
          {/* Base track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#F6E4F0"
            strokeWidth="5"
          />
          {/* Animated gradient progress ring */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={`url(#${current.gradientId})`}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              hasAnimated
                ? { strokeDashoffset: circumference * 0.15 }
                : { strokeDashoffset: circumference }
            }
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        {/* Center Icon */}
        {Icon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${current.iconBg}`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        )}
      </div>

      {/* Tabular numbers to prevent layout jitter */}
      {targetNumber > 0 ? (
        <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight mb-2 tabular-nums">
          {count.toLocaleString()}{suffix}
        </div>
      ) : null}

      {/* Prominent client placeholder badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-100 border border-gold-500/40 text-ink-900 text-xs font-mono font-bold mb-2">
        <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
        <span>{placeholderText}</span>
      </div>

      <div className="text-sm font-semibold text-ink-600 max-w-[200px] leading-snug">
        {label}
      </div>
    </div>
  );
}
