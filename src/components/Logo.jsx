import React from 'react';

/**
 * Shani Foundation Logo
 * Mark: Two cupped hands in a plum ring holding a green sprout shaped like a person.
 * Variants:
 *  - 'full': Mark + "SHANI FOUNDATION" + Primary Tagline ("Empowering Women • Sustaining Communities")
 *  - 'compact': Mark + "SHANI FOUNDATION"
 *  - 'mark': Icon mark only
 *  - 'light': White/light palette for dark surfaces (e.g. plum-900 footer)
 */
export default function Logo({ variant = 'full', className = '', size = 'md' }) {
  const isLight = variant === 'light' || variant === 'light-mark';
  
  const ringColor = isLight ? '#FFFFFF' : '#7A0F5A';
  const handsColor = isLight ? '#FCF1DC' : '#A3277A';
  const sproutBodyColor = isLight ? '#8DB63C' : '#3F7D2B';
  const sproutLeafColor = '#8DB63C';
  const textColor = isLight ? '#FFFFFF' : '#4A0A38';
  const subtextColor = isLight ? '#FCF1DC' : '#5B4F58';

  const markSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const markSize = markSizes[size] || markSizes.md;

  const MarkSvg = (
    <svg
      viewBox="0 0 100 100"
      className={`${markSize} flex-shrink-0 transition-transform duration-300 hover:rotate-3`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Shani Foundation logo mark: two cupped hands forming a ring, cradling a human-shaped green sprout"
    >
      <title>Shani Foundation Mark</title>
      {/* Circular foundation halo */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill={isLight ? 'rgba(255,255,255,0.08)' : '#FDF6FB'}
        stroke={ringColor}
        strokeWidth="3.5"
      />

      {/* Two cupped hands forming an embracing outer ring */}
      {/* Left Hand */}
      <path
        d="M 23,55 C 21,38 33,24 50,24 C 54,24 58,25 61,27"
        stroke={ringColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 23,55 C 24,68 35,78 48,79 C 50,79 51,79 53,78"
        stroke={handsColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Left thumb/palm curve */}
      <path
        d="M 30,50 C 32,58 38,65 47,68"
        stroke={handsColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Right Hand */}
      <path
        d="M 77,55 C 79,38 67,24 50,24"
        stroke={ringColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 77,55 C 76,68 65,78 52,79"
        stroke={handsColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Right thumb/palm curve */}
      <path
        d="M 70,50 C 68,58 62,65 53,68"
        stroke={handsColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Sprout Person in the Center */}
      {/* Head / Seed bud (Person) */}
      <circle cx="50" cy="36" r="6" fill={sproutLeafColor} />
      
      {/* Body Stem (Standing resilient) */}
      <path
        d="M 50,42 L 50,68"
        stroke={sproutBodyColor}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Left sprout leaf / uplifted arm */}
      <path
        d="M 50,51 C 38,45 34,35 41,33 C 47,31 49,42 50,51 Z"
        fill={sproutLeafColor}
      />
      
      {/* Right sprout leaf / uplifted arm */}
      <path
        d="M 50,51 C 62,45 66,35 59,33 C 53,31 51,42 50,51 Z"
        fill={sproutBodyColor}
      />

      {/* Ground/Roots of care */}
      <circle cx="50" cy="71" r="2.5" fill={handsColor} />
    </svg>
  );

  if (variant === 'mark' || variant === 'light-mark') {
    return MarkSvg;
  }

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {MarkSvg}
      <div className="flex flex-col">
        <span
          className="font-serif font-bold tracking-tight leading-none text-xl sm:text-2xl"
          style={{ color: textColor }}
        >
          SHANI <span className="font-semibold text-magenta-500">FOUNDATION</span>
        </span>
        {variant === 'full' && (
          <span
            className="text-[11px] sm:text-xs font-medium tracking-wide mt-1"
            style={{ color: subtextColor }}
          >
            Empowering Women • Sustaining Communities
          </span>
        )}
        {variant === 'light' && (
          <span className="text-[11px] sm:text-xs font-medium tracking-wide text-gold-100 mt-1">
            Empowering Women • Sustaining Communities
          </span>
        )}
      </div>
    </div>
  );
}
