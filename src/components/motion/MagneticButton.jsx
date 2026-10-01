import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../../motion/hooks/useMagnetic';
import { useAnimationContext } from '../../motion/hooks/useAnimationContext';

export default function MagneticButton({
  children,
  onClick,
  className = '',
  maxDistance = 8,
  type = 'button',
}) {
  const { isReducedMotion } = useAnimationContext();
  const { ref, x, y } = useMagnetic(maxDistance);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    if (!isReducedMotion) {
      const rect = e.currentTarget.getBoundingClientRect();
      const rippleX = e.clientX - rect.left;
      const rippleY = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x: rippleX, y: rippleY };

      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    }

    if (onClick) onClick(e);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={handleClick}
      animate={{ x: isReducedMotion ? 0 : x, y: isReducedMotion ? 0 : y }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className={`relative overflow-hidden select-none ${className}`}
    >
      {/* Gold ripple elements */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full pointer-events-none bg-gold-500/40 animate-ping"
          style={{
            left: r.x - 15,
            top: r.y - 15,
            width: 30,
            height: 30,
          }}
        />
      ))}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
