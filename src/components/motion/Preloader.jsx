import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimationContext } from '../../motion/hooks/useAnimationContext';

export default function Preloader({ onComplete }) {
  const { isReducedMotion } = useAnimationContext();
  const [isVisible, setIsVisible] = useState(() => {
    try {
      return !sessionStorage.getItem('shani_preloader_seen');
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (isReducedMotion) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      try {
        sessionStorage.setItem('shani_preloader_seen', 'true');
      } catch {}
      if (onComplete) onComplete();
    }, 1150); // Under 1.2s as specified

    return () => clearTimeout(timer);
  }, [isVisible, isReducedMotion, onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem('shani_preloader_seen', 'true');
    } catch {}
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[10000] bg-cream-50 flex flex-col items-center justify-center p-6 select-none"
          role="status"
          aria-label="Loading Shani Foundation platform"
        >
          {/* Skip button for keyboard / impatient users */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 text-xs font-mono font-semibold text-ink-600 hover:text-plum-900 px-3 py-1 rounded-full border border-black/10 bg-white shadow-xs"
          >
            Skip Intro &rarr;
          </button>

          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-6">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hands Ring: slides in and cups around the sprout */}
              <motion.path
                d="M 23,55 C 21,38 33,24 50,24 C 67,24 79,38 77,55 C 76,68 65,78 50,79 C 35,78 24,68 23,55 Z"
                stroke="#7A0F5A"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
                animate={{ pathLength: 1, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Sprout Stem: draws itself first */}
              <motion.path
                d="M 50,70 L 50,42"
                stroke="#3F7D2B"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />

              {/* Sprout Head (Person) */}
              <motion.circle
                cx="50"
                cy="36"
                r="6"
                fill="#8DB63C"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25, type: 'spring', stiffness: 200 }}
              />

              {/* Left Sprout Leaf */}
              <motion.path
                d="M 50,51 C 38,45 34,35 41,33 C 47,31 49,42 50,51 Z"
                fill="#8DB63C"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.3, ease: 'easeOut' }}
              />

              {/* Right Sprout Leaf */}
              <motion.path
                d="M 50,51 C 62,45 66,35 59,33 C 53,31 51,42 50,51 Z"
                fill="#3F7D2B"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.35, ease: 'easeOut' }}
              />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-plum-900 tracking-tight">
              SHANI <span className="text-magenta-500 font-semibold">FOUNDATION</span>
            </h2>
            <p className="text-xs text-ink-600 font-medium tracking-wider mt-1">
              "We Got You" • Nairobi, Kenya
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
