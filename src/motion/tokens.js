/**
 * Shani Foundation Motion Tokens
 * Principles: "Growth and care" — soft, smooth, unhurried, dignified.
 * Only animate transform, opacity, background-position, and stroke-dashoffset/clip-path.
 */

export const MOTION_DURATIONS = {
  fast: 0.15,      // 150ms (hover, press feedback)
  base: 0.4,       // 400ms (most transitions, tabs, toggles)
  slow: 0.7,       // 700ms (section reveals, hero entrance, modal open)
  ambient: 12,     // 12s average (8-20s looping background drift)
  heroOrbs: 16,    // 16s ambient orb drift
  blobMorph: 12,   // 12s organic blob mask loop
  conicRotate: 6,  // 6s badge rotation
};

export const MOTION_EASINGS = {
  // Entrances: unhurried deceleration into final rest
  easeOut: [0.22, 1, 0.36, 1],
  // Seamless transitions: state toggles, modals, tabs
  easeInOut: [0.65, 0, 0.35, 1],
  // Calm organic settle for icons, badges, and card reveals
  softSpring: {
    type: 'spring',
    stiffness: 120,
    damping: 18,
    mass: 1,
  },
  // Snappier spring for hover states
  hoverSpring: {
    type: 'spring',
    stiffness: 240,
    damping: 20,
  },
  // Bounceless gentle settle for tab pills
  pillSpring: {
    type: 'spring',
    stiffness: 300,
    damping: 28,
  },
};

export const MOTION_STAGGER = {
  fast: 0.08, // 80ms between siblings
  base: 0.1,  // 100ms
  slow: 0.12, // 120ms
  maxItems: 8,
};

export const MOTION_TOKENS = {
  durations: MOTION_DURATIONS,
  easings: MOTION_EASINGS,
  stagger: MOTION_STAGGER,
};

export default MOTION_TOKENS;
