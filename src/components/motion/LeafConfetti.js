import confetti from 'canvas-confetti';

/**
 * triggerLeafConfetti
 * Capped at 60 particles, 2 seconds max, soft leaves & gold petals in brand palette
 */
export function triggerLeafConfetti() {
  if (typeof window === 'undefined') return;

  // Check reduced motion
  try {
    const isReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      localStorage.getItem('shani_animations_paused') === 'true';
    if (isReduced) return;
  } catch {}

  const colors = ['#3F7D2B', '#8DB63C', '#E8A33D', '#A3277A', '#7A0F5A', '#FCF1DC'];

  // Left & right gentle petal burst
  confetti({
    particleCount: 30,
    angle: 60,
    spread: 55,
    origin: { x: 0.15, y: 0.65 },
    colors,
    ticks: 120, // ~2 seconds at 60fps
    gravity: 0.8,
    scalar: 1.1,
    shapes: ['circle'],
  });

  confetti({
    particleCount: 30,
    angle: 120,
    spread: 55,
    origin: { x: 0.85, y: 0.65 },
    colors,
    ticks: 120,
    gravity: 0.8,
    scalar: 1.1,
    shapes: ['circle'],
  });
}
