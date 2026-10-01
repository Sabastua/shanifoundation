import { MOTION_DURATIONS, MOTION_EASINGS, MOTION_STAGGER } from './tokens';

/**
 * Reusable Framer Motion Variants for Shani Foundation
 * Adheres to "Growth & Care" motion principles:
 * - Only animate transform and opacity.
 * - Soft, dignified, unhurried easeOut and softSpring.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.slow,
      ease: MOTION_EASINGS.easeOut,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: MOTION_DURATIONS.base,
      ease: MOTION_EASINGS.easeOut,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: MOTION_EASINGS.softSpring,
  },
};

export const staggerParent = (staggerDelay = MOTION_STAGGER.base, delayChildren = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const staggerChild = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.base,
      ease: MOTION_EASINGS.easeOut,
    },
  },
};

export const wordRise = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: MOTION_EASINGS.easeOut,
    },
  },
};

export const ribbonReveal = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.45,
      ease: MOTION_EASINGS.easeOut,
    },
  },
};

export const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: MOTION_EASINGS.easeOut,
    },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    transition: MOTION_EASINGS.hoverSpring,
  },
};

export const heartbeatHover = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: 1.5,
      ease: 'easeInOut',
    },
  },
};

export const ambientFloat = (yDelta = 10, duration = 8, delay = 0) => ({
  animate: {
    y: [-yDelta, yDelta, -yDelta],
    rotate: [-1.5, 1.5, -1.5],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
});
