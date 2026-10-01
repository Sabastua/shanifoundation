import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Droplets, Users, Leaf, ShieldAlert, Play, Pause } from 'lucide-react';
import RibbonLabel from '../components/RibbonLabel';
import FocusCard from '../components/FocusCard';
import ValueTile from '../components/ValueTile';
import Counter from '../components/Counter';
import GradientText from '../components/motion/GradientText';
import MagneticButton from '../components/motion/MagneticButton';
import BlobMask from '../components/motion/BlobMask';
import CurvedDivider from '../components/motion/CurvedDivider';
import { triggerLeafConfetti } from '../components/motion/LeafConfetti';
import { useAnimationContext } from '../motion/hooks/useAnimationContext';
import { MOTION_TOKENS } from '../motion/tokens';

export default function MotionPlaygroundPage({ onOpenDonate }) {
  const { animationsPaused, toggleAnimationsPaused, isReducedMotion } = useAnimationContext();
  const [copiedToken, setCopiedToken] = useState('');

  const gradients = [
    { name: '--grad-brand', class: 'bg-grad-brand', desc: 'Plum 900 -> Plum 700 -> Magenta 500' },
    { name: '--grad-bloom', class: 'bg-grad-bloom', desc: 'Plum 700 -> Magenta 500 -> Gold 500' },
    { name: '--grad-growth', class: 'bg-grad-growth', desc: 'Forest 800 -> Leaf 600 -> Leaf 500' },
    { name: '--grad-sunrise', class: 'bg-grad-sunrise', desc: 'Gold 100 -> Magenta 100' },
    { name: '--grad-gold', class: 'bg-grad-gold', desc: 'Warm Gold -> Soft Gold -> Warm Gold' },
    { name: '--grad-focus-menstrual', class: 'bg-grad-menstrual', desc: 'Magenta 500 -> Plum 700' },
    { name: '--grad-focus-empowerment', class: 'bg-grad-empowerment', desc: 'Gold 500 -> Soft Gold' },
    { name: '--grad-focus-climate', class: 'bg-grad-climate', desc: 'Leaf 600 -> Leaf 500' },
    { name: '--grad-focus-child', class: 'bg-grad-child', desc: 'Plum 700 -> Plum 900' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <RibbonLabel variant="gold" className="mb-4">
          DEV MOTION PLAYGROUND
        </RibbonLabel>
        <h1 className="font-serif font-bold text-plum-900 text-4xl sm:text-5xl tracking-tight leading-tight">
          Motion & Gradient Design System
        </h1>
        <p className="text-ink-600 text-base mt-3">
          Interactive catalog of brand animation tokens, gradient layers, and growth-and-care micro-interactions for the Shani Foundation platform.
        </p>

        {/* Global Pause Toggle */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={toggleAnimationsPaused}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-plum-700 text-white font-bold text-sm shadow-md hover:bg-plum-800 transition-colors"
          >
            {animationsPaused ? <Play className="w-4 h-4 text-gold-500" /> : <Pause className="w-4 h-4 text-gold-500" />}
            <span>{animationsPaused ? 'Motion Is Currently Paused (Click to Resume)' : 'Motion Is Active (Click to Pause)'}</span>
          </button>
        </div>
      </div>

      {/* 1. Gradient Swatches */}
      <section className="space-y-6">
        <div className="border-b border-black/10 pb-3">
          <h2 className="text-2xl font-serif font-bold text-ink-900">1. Gradient Tokens</h2>
          <p className="text-xs text-ink-600">Defined as CSS variables and Tailwind utilities</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gradients.map((g, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-black/10 shadow-sm space-y-3">
              <div className={`h-24 rounded-xl ${g.class} shadow-inner flex items-end p-3`}>
                <span className="text-xs font-mono font-bold text-white bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                  {g.name}
                </span>
              </div>
              <p className="text-xs text-ink-600 font-medium">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Typography & Gradient Text */}
      <section className="space-y-6">
        <div className="border-b border-black/10 pb-3">
          <h2 className="text-2xl font-serif font-bold text-ink-900">2. Gradient Text & Accents</h2>
          <p className="text-xs text-ink-600">Text accents with high-contrast fallback</p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-sm space-y-4">
          <h3 className="font-serif text-3xl font-bold text-plum-900">
            Empowering Women.{' '}
            <GradientText gradient="bloom" animateWipe={true}>
              Sustaining Communities.
            </GradientText>
          </h3>
          <p className="text-sm text-ink-600">
            Gold accent: <GradientText gradient="gold">"We Got You" Signature</GradientText>
          </p>
        </div>
      </section>

      {/* 3. Ribbon Labels */}
      <section className="space-y-6">
        <div className="border-b border-black/10 pb-3">
          <h2 className="text-2xl font-serif font-bold text-ink-900">3. Animated Ribbon Labels</h2>
          <p className="text-xs text-ink-600">Center scaleX reveal + 200ms delayed text + single highlight sweep</p>
        </div>

        <div className="flex flex-wrap gap-4 p-8 rounded-2xl bg-white border border-black/10 shadow-sm">
          <RibbonLabel variant="plum">Plum Ribbon</RibbonLabel>
          <RibbonLabel variant="gold" icon={Sparkles}>Vision Ribbon</RibbonLabel>
          <RibbonLabel variant="green" icon={Leaf}>Mission Ribbon</RibbonLabel>
          <RibbonLabel variant="magenta">Magenta Focus</RibbonLabel>
          <RibbonLabel variant="forest">Forest 800</RibbonLabel>
        </div>
      </section>

      {/* 4. Interactive Focus Cards */}
      <section className="space-y-6">
        <div className="border-b border-black/10 pb-3">
          <h2 className="text-2xl font-serif font-bold text-ink-900">4. Focus Cards & Purposeful Icon Motions</h2>
          <p className="text-xs text-ink-600">Hover each card to see the icon do its purposeful action</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FocusCard
            id="mh"
            title="Menstrual Health"
            summary="Hover to see the droplet drop and ripple once."
            colorScheme="magenta"
            iconName="droplet"
          />
          <FocusCard
            id="wy"
            title="Women & Youth"
            summary="Hover to see the two figures lean together in solidarity."
            colorScheme="gold"
            iconName="users"
          />
          <FocusCard
            id="cl"
            title="Climate Action"
            summary="Hover to see the globe rotate 20 degrees with a leaf pop."
            colorScheme="green"
            iconName="leaf"
          />
          <FocusCard
            id="cp"
            title="Child Protection"
            summary="Hover to see the shield pulse and the checkmark draw."
            colorScheme="plum"
            iconName="shield"
          />
        </div>
      </section>

      {/* 5. Core Values Tiles */}
      <section className="space-y-6">
        <div className="border-b border-black/10 pb-3">
          <h2 className="text-2xl font-serif font-bold text-ink-900">5. Flip & Reveal Core Value Tiles</h2>
          <p className="text-xs text-ink-600">Hover, tap or keyboard-focus to see the gradient wash slide up</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueTile type="dignity" title="Dignity" meaning="Treating every girl, woman, and child with unconditional respect." />
          <ValueTile type="equity" title="Equity" meaning="Breaking barriers so that everyone has access to fair opportunities." />
          <ValueTile type="empowerment" title="Empowerment" meaning="Fostering agency so youth become the architects of their own future." />
          <ValueTile type="accountability" title="Accountability" meaning="Practicing unwavering transparency and ethical stewardship." />
        </div>
      </section>

      {/* 6. Magnetic Buttons & Confetti */}
      <section className="space-y-6">
        <div className="border-b border-black/10 pb-3">
          <h2 className="text-2xl font-serif font-bold text-ink-900">6. Magnetic Buttons & Leaf Confetti</h2>
          <p className="text-xs text-ink-600">Subtle cursor pull (max 8px) + gold click ripple</p>
        </div>

        <div className="flex flex-wrap gap-4 p-8 rounded-2xl bg-white border border-black/10 shadow-sm items-center">
          <MagneticButton
            onClick={() => triggerLeafConfetti()}
            className="px-6 py-3.5 rounded-full bg-grad-brand text-white font-bold text-sm shadow-md"
          >
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Trigger Leaf Confetti (Max 60 particles, 2s)</span>
          </MagneticButton>

          <MagneticButton
            onClick={onOpenDonate}
            className="px-6 py-3.5 rounded-full bg-gold-500 text-ink-900 font-bold text-sm shadow-md"
          >
            <Heart className="w-4 h-4" />
            <span>Open Donate Flow</span>
          </MagneticButton>
        </div>
      </section>

      {/* 7. Curved Divider Demonstration */}
      <section className="space-y-4">
        <div className="border-b border-black/10 pb-3">
          <h2 className="text-2xl font-serif font-bold text-ink-900">7. Curved Wave Section Dividers</h2>
          <p className="text-xs text-ink-600">Organic SVG wave with subtle scroll-linked amplitude</p>
        </div>
        <div className="bg-plum-900 p-8 rounded-2xl text-white">
          <CurvedDivider fill="#FDF6FB" height={48} />
          <p className="text-center text-xs text-gold-100/70 pt-4">Curved wave dividing plum-900 surface from cream-50</p>
        </div>
      </section>
    </div>
  );
}
