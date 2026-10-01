import React, { createContext, useContext, useState, useEffect } from 'react';

const AnimationContext = createContext({
  animationsPaused: false,
  toggleAnimationsPaused: () => {},
  isReducedMotion: false,
});

export function AnimationProvider({ children }) {
  const [animationsPaused, setAnimationsPaused] = useState(() => {
    try {
      return localStorage.getItem('shani_animations_paused') === 'true';
    } catch {
      return false;
    }
  });

  const [systemReducedMotion, setSystemReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setSystemReducedMotion(mediaQuery.matches);

      const handleChange = (e) => setSystemReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleAnimationsPaused = () => {
    setAnimationsPaused((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('shani_animations_paused', String(next));
      } catch {}
      return next;
    });
  };

  const isReducedMotion = systemReducedMotion || animationsPaused;

  useEffect(() => {
    if (isReducedMotion) {
      document.documentElement.classList.add('motion-paused');
    } else {
      document.documentElement.classList.remove('motion-paused');
    }
  }, [isReducedMotion]);

  return (
    <AnimationContext.Provider
      value={{
        animationsPaused,
        toggleAnimationsPaused,
        isReducedMotion,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationContext() {
  return useContext(AnimationContext);
}
