import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import {
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users2,
  TreePine,
  Sparkles,
  Droplet,
  Globe2,
  Mail,
  Send,
  Quote,
  ChevronDown,
} from 'lucide-react';
import RibbonLabel from '../components/RibbonLabel';
import FocusCard from '../components/FocusCard';
import ValueTile from '../components/ValueTile';
import Counter from '../components/Counter';
import StoryCard from '../components/StoryCard';
import Logo from '../components/Logo';
import BlobMask from '../components/motion/BlobMask';
import FloatingLeaves from '../components/motion/FloatingLeaves';
import CurvedDivider from '../components/motion/CurvedDivider';
import GradientText from '../components/motion/GradientText';
import MagneticButton from '../components/motion/MagneticButton';
import { useCard3DTilt } from '../motion/hooks/useParallax';
import { useAnimationContext } from '../motion/hooks/useAnimationContext';

export default function HomePage({ setActivePage, onOpenDonate }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { isReducedMotion } = useAnimationContext();

  // 3D tilt for Vision & Mission cards
  const visionTilt = useCard3DTilt(4);
  const missionTilt = useCard3DTilt(4);

  // Scroll cue visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setHasScrolled(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  // Headline split words for staggered reveal
  const headlineWords = ['Empowering', 'Women.'];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12 overflow-hidden">
      {/* 1. HERO SECTION WITH MESH GRADIENT & DRIFTING ORBS */}
      <section className="relative overflow-hidden pt-4 sm:pt-8 pb-16 sm:pb-24 bg-grad-mesh-hero">
        {/* Floating leaves & sparkles ambient motif */}
        <FloatingLeaves />

        {/* 3 Blurred Ambient Gradient Orbs (14-20s loops, translate/scale only) */}
        {!isReducedMotion && (
          <>
            <motion.div
              animate={{
                x: [-20, 30, -20],
                y: [-30, 20, -30],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[-5%] left-[-5%] w-[480px] h-[480px] rounded-full bg-magenta-100/50 blur-3xl pointer-events-none -z-10"
            />
            <motion.div
              animate={{
                x: [30, -25, 30],
                y: [20, -30, 20],
                scale: [1.05, 0.95, 1.05],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-[10%] right-[-5%] w-[520px] h-[520px] rounded-full bg-gold-100/60 blur-3xl pointer-events-none -z-10"
            />
            <motion.div
              animate={{
                x: [-15, 20, -15],
                y: [15, -20, 15],
                scale: [0.95, 1.08, 0.95],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-[-10%] left-[30%] w-[380px] h-[380px] rounded-full bg-leaf-500/10 blur-3xl pointer-events-none -z-10"
            />
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
              {/* "We Got You" badge with rotating conic ring */}
              <div className="inline-block relative">
                {/* 6s Rotating conic gradient ring around badge */}
                {!isReducedMotion && (
                  <div className="conic-ring absolute -inset-1 rounded-full opacity-60 blur-[3px]" />
                )}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                  className="relative px-4 py-1.5 rounded-full bg-white text-ink-900 text-xs sm:text-sm font-bold shadow-xs border border-gold-500/30 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  <span>"We Got You" • Nairobi, Kenya</span>
                </motion.div>
              </div>

              {/* H1 Headline: Words Rise 24px + Wipe on "Sustaining Communities" */}
              <h1 className="font-serif font-bold text-plum-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
                {headlineWords.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={isReducedMotion ? {} : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}{' '}
                <GradientText gradient="bloom" animateWipe={true}>
                  Sustaining Communities.
                </GradientText>
              </h1>

              {/* Sub-line verbatim from mission */}
              <motion.p
                initial={isReducedMotion ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-ink-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                To support menstrual health, climate action, and community empowerment initiatives across Nairobi and underserved Kenyan communities.
              </motion.p>

              {/* Staggered CTAs */}
              <motion.div
                initial={isReducedMotion ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onOpenDonate}
                  className="shimmer-btn-container w-full sm:w-auto px-8 py-4 rounded-full bg-grad-brand text-white font-bold text-base shadow-md hover:shadow-brand transition-all duration-200 flex items-center justify-center gap-2.5"
                >
                  {!isReducedMotion && <span className="shimmer-sweep" />}
                  <Heart className="w-5 h-5 fill-white text-white relative z-10" />
                  <span className="relative z-10">Support Our Work</span>
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setActivePage('our-work');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-4 rounded-full border-2 border-plum-700/30 hover:border-plum-700 text-plum-700 font-bold text-base hover:bg-magenta-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>

              {/* Trust signals */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-ink-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600" />
                  Grassroots Led
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600" />
                  Transparent Stewardship
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-leaf-600" />
                  Child Safeguarding Verified
                </span>
              </div>
            </div>

            {/* Right Hero Image inside Morphing BlobMask */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <BlobMask className="w-full max-w-[420px] aspect-square">
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center relative group">
                  {/* Subtle plum gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-plum-900/10 via-transparent to-plum-900/30" />

                  {/* Logo sprout motif */}
                  <div className="relative z-10 mb-4 transform group-hover:scale-105 transition-transform duration-500">
                    <Logo variant="mark" size="xl" />
                  </div>

                  {/* Hero placeholder label */}
                  <div className="relative z-10 p-3 rounded-2xl bg-white/95 backdrop-blur-sm border border-plum-700/15 shadow-sm max-w-[90%]">
                    <p className="text-xs font-mono font-bold text-plum-900">
                      📷 [Add: Hero Photo of Kenyan women & youth leaders in action]
                    </p>
                    <p className="text-[11px] text-ink-600 mt-1">
                      Warm, candid, dignified photography
                    </p>
                  </div>
                </div>
              </BlobMask>
            </div>
          </div>
        </div>

        {/* Bobbing Scroll Cue (fades out after first scroll) */}
        {!hasScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 1 },
              y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="hidden sm:flex flex-col items-center justify-center mx-auto mt-10 text-xs font-bold text-ink-600"
            aria-hidden="true"
          >
            <span className="uppercase tracking-widest text-[10px] text-plum-700 mb-1">
              Scroll Down
            </span>
            <ChevronDown className="w-4 h-4 text-plum-700" />
          </motion.div>
        )}
      </section>

      {/* 2. TRUST STRIP */}
      <section className="border-y border-black/5 bg-white py-6 shadow-xs relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cream-50/60 border border-black/5">
              <span className="text-sm sm:text-base font-bold text-plum-900">Based in Nairobi</span>
              <span className="text-xs text-ink-600">Local Roots, Kenya-wide Impact</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cream-50/60 border border-black/5">
              <span className="text-sm sm:text-base font-bold text-magenta-500">Women & Youth-Led</span>
              <span className="text-xs text-ink-600">Community Driven Solutions</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cream-50/60 border border-black/5">
              <span className="text-sm sm:text-base font-bold text-forest-800">Accountable & Transparent</span>
              <span className="text-xs text-ink-600">Integrity in Every Shilling</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-cream-50/60 border border-black/5">
              <span className="text-sm sm:text-base font-bold text-leaf-600">Climate-Conscious</span>
              <span className="text-xs text-ink-600">Sustainability & Green Action</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION CARDS (Rise from opposite sides + 3D tilt + 10s quotation shift) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <RibbonLabel variant="plum" className="mb-3">
            Guiding Purpose
          </RibbonLabel>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">
            Our Vision & Our Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Vision Card: Rises in from Left */}
          <motion.div
            ref={visionTilt.cardRef}
            initial={isReducedMotion ? {} : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              perspective: 1000,
              rotateX: isReducedMotion ? 0 : visionTilt.rotateX,
              rotateY: isReducedMotion ? 0 : visionTilt.rotateY,
            }}
            className="relative p-8 sm:p-10 rounded-organic bg-gradient-to-br from-gold-100/90 to-gold-50 border border-gold-500/40 shadow-brand flex flex-col justify-between overflow-hidden transition-shadow duration-300 hover:shadow-brand-gold"
          >
            {/* Shifting Quote Graphic (10s position loop) */}
            <div
              className="absolute -top-4 -right-4 w-36 h-36 opacity-15 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #E8A33D, #F3C566, #E8A33D)',
                WebkitMaskImage: 'radial-gradient(circle, black, transparent)',
              }}
            >
              <Quote className="w-full h-full text-gold-500" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <RibbonLabel variant="gold" icon={Sparkles}>
                  VISION
                </RibbonLabel>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
                  Looking Forward
                </span>
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 leading-snug mb-6">
                "A world where all women and youth live with dignity, equity, and sustainable well-being."
              </blockquote>
            </div>

            <p className="text-xs sm:text-sm text-ink-600 font-medium border-t border-gold-500/20 pt-4">
              Building lasting pathways for generational self-reliance, social dignity, and community-led renewal.
            </p>
          </motion.div>

          {/* Mission Card: Rises in from Right */}
          <motion.div
            ref={missionTilt.cardRef}
            initial={isReducedMotion ? {} : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              perspective: 1000,
              rotateX: isReducedMotion ? 0 : missionTilt.rotateX,
              rotateY: isReducedMotion ? 0 : missionTilt.rotateY,
            }}
            className="relative p-8 sm:p-10 rounded-organic bg-forest-800 text-white shadow-brand-green flex flex-col justify-between overflow-hidden transition-shadow duration-300"
          >
            <div className="absolute -top-4 -right-4 w-36 h-36 opacity-15 pointer-events-none">
              <Quote className="w-full h-full text-white" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <RibbonLabel variant="green" icon={TreePine}>
                  MISSION
                </RibbonLabel>
                <span className="text-xs font-bold text-leaf-500 uppercase tracking-widest">
                  Daily Action
                </span>
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
                "To support menstrual health, climate action, and community empowerment initiatives."
              </blockquote>
            </div>

            <p className="text-xs sm:text-sm text-gold-100/80 font-medium border-t border-white/20 pt-4">
              Translating compassion into concrete field interventions, educational kits, and grassroots partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. OUR FOCUS (4 PILLARS) */}
      <section id="our-focus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <RibbonLabel variant="magenta" className="mb-3">
              OUR FOCUS
            </RibbonLabel>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">
              Four Core Pillars of Impact
            </h2>
            <p className="text-ink-600 text-sm sm:text-base max-w-xl mt-2">
              Each focus area is designed to address systemic barriers and foster self-sustaining growth.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('our-work');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-plum-700 hover:text-magenta-500 transition-colors"
          >
            <span>Explore all programs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          <FocusCard
            id="menstrual-health"
            title="Menstrual Health & Hygiene"
            colorScheme="magenta"
            iconName="droplet"
            summary="Distributing sanitary dignity kits, breaking menstrual taboos, and ensuring adolescent girls stay in school with confidence."
            onSelect={() => {
              setActivePage('our-work');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <FocusCard
            id="women-youth"
            title="Women & Youth Empowerment"
            colorScheme="gold"
            iconName="users"
            summary="Equipping young women and community youth with vocational skills, entrepreneurship mentorship, and leadership platforms."
            onSelect={() => {
              setActivePage('our-work');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <FocusCard
            id="climate"
            title="Climate & Sustainability"
            colorScheme="green"
            iconName="leaf"
            summary="Nurturing community tree nurseries, advancing environmental literacy, and advocating grassroots climate resilience in Kenya."
            onSelect={() => {
              setActivePage('our-work');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <FocusCard
            id="child-protection"
            title="Child Protection & Education"
            colorScheme="plum"
            iconName="shield"
            summary="Safeguarding vulnerable children, promoting educational access, and creating safe, nurturing environments in community schools."
            onSelect={() => {
              setActivePage('our-work');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      </section>

      {/* 5. HOW WE WORK (TIMELINE WITH DRAWING CONNECTING LINE) */}
      <section className="bg-cream-100/60 py-16 sm:py-20 border-y border-black/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <RibbonLabel variant="plum" className="mb-3">
              METHODOLOGY
            </RibbonLabel>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">
              How We Work With Communities
            </h2>
            <p className="text-ink-600 text-sm sm:text-base mt-2">
              A community-first cycle prioritizing listening, dignity, and long-term sustainability over quick fixes.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Connecting Line that draws itself */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-1 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <motion.line
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="#E8A33D"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {[
                { step: '01', title: 'Listen', color: 'text-gold-500', desc: '[Add: Detail on community listening sessions, identifying local needs directly with women and youth leaders in Nairobi].' },
                { step: '02', title: 'Partner', color: 'text-magenta-500', desc: '[Add: Detail on collaborating with local schools, youth groups, and community health volunteers to co-create solutions].' },
                { step: '03', title: 'Deliver', color: 'text-leaf-600', desc: '[Add: Detail on deploying dignity kits, planting trees, conducting mentorship programs, and safeguarding training].' },
                { step: '04', title: 'Sustain', color: 'text-plum-700', desc: '[Add: Detail on ongoing monitoring, community ownership, and transparent reporting to keep initiatives thriving].' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-black/5 shadow-brand text-center md:text-left hover:-translate-y-1 transition-transform"
                >
                  <span className={`text-3xl font-serif font-bold ${item.color} mb-2 block`}>
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-ink-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMPACT COUNTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <RibbonLabel variant="gold" className="mb-3">
            VERIFIED METRICS
          </RibbonLabel>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">
            Our Growing Impact
          </h2>
          <p className="text-ink-600 text-sm sm:text-base mt-2">
            Measurable change grounded in transparency. Numbers below are configured with client placeholders for verified reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Counter
            icon={Droplet}
            color="magenta"
            placeholderText="[Add: number of girls reached]"
            label="Adolescent Girls Reached with Menstrual Hygiene Support"
          />
          <Counter
            icon={Heart}
            color="plum"
            placeholderText="[Add: pads distributed]"
            label="Sanitary Pads & Dignity Kits Provided to Students"
          />
          <Counter
            icon={TreePine}
            color="green"
            placeholderText="[Add: trees planted]"
            label="Trees Planted & Seedlings Nurtured for Climate Action"
          />
          <Counter
            icon={Users2}
            color="gold"
            placeholderText="[Add: schools/communities]"
            label="Schools & Local Community Centers Engaged in Nairobi"
          />
        </div>
      </section>

      {/* 7. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <RibbonLabel variant="plum" className="mb-3">
            CORE VALUES
          </RibbonLabel>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">
            The Principles That Guide Every Step
          </h2>
          <p className="text-ink-600 text-sm sm:text-base mt-2">
            Rooted in respect, accountability, and the shared dignity of those we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueTile
            type="dignity"
            title="Dignity"
            meaning="Treating every girl, woman, and child with unconditional respect, honor, and inherent human worth."
          />
          <ValueTile
            type="equity"
            title="Equity"
            meaning="Breaking social, economic, and bodily barriers so that everyone has access to fair opportunities."
          />
          <ValueTile
            type="empowerment"
            title="Empowerment"
            meaning="Fostering agency and leadership so women and youth become the architects of their own future."
          />
          <ValueTile
            type="accountability"
            title="Accountability & Integrity"
            meaning="Practicing unwavering transparency, ethical stewardship, and honest reporting in all actions."
          />
        </div>
      </section>

      {/* 8. STORIES (DRAGGABLE CAROUSEL WITH PROGRESS BAR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <RibbonLabel variant="magenta" className="mb-3">
              COMMUNITY VOICES
            </RibbonLabel>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">
              Stories of Hope & Change
            </h2>
            <p className="text-ink-600 text-sm sm:text-base max-w-xl mt-2">
              Real narratives from the field demonstrating resilience, education, and ecological care.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('stories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-plum-700 hover:text-magenta-500 transition-colors"
          >
            <span>View all stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StoryCard
            category="Menstrual Health"
            categoryColor="magenta"
            title="Keeping Girls in the Classroom: Dignity in Kibera"
            excerpt="[Add: Story excerpt about how access to menstrual hygiene packs and stigma-free workshops transformed school attendance for students in Nairobi]."
            imagePlaceholderText="[Add: Photo of dignity kit distribution session]"
            date="[Add: Date]"
            onReadMore={() => {
              setActivePage('stories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <StoryCard
            category="Climate & Sustainability"
            categoryColor="green"
            title="Greening Urban Spaces: Youth Tree Planting Initiative"
            excerpt="[Add: Story excerpt highlighting youth environmental ambassadors establishing a school tree nursery and caring for indigenous seedlings]."
            imagePlaceholderText="[Add: Photo of youth tree planting activity]"
            date="[Add: Date]"
            onReadMore={() => {
              setActivePage('stories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <StoryCard
            category="Youth Empowerment"
            categoryColor="gold"
            title="From Learners to Leaders: Mentoring Young Women"
            excerpt="[Add: Story excerpt on our peer leadership cohort building vocational and digital skills to support household resilience]."
            imagePlaceholderText="[Add: Photo of young women mentorship circle]"
            date="[Add: Date]"
            onReadMore={() => {
              setActivePage('stories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      </section>

      {/* 9. GET INVOLVED (ANIMATED --GRAD-BRAND BAND WITH FLOATING CIRCLES & MAGNETIC BUTTONS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-organic-xl animate-gradient-shift bg-grad-brand p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle floating translucent circles */}
          {!isReducedMotion && (
            <>
              <motion.div
                animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-8 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none"
              />
              <motion.div
                animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-4 left-8 w-56 h-56 rounded-full bg-gold-500/15 blur-2xl pointer-events-none"
              />
            </>
          )}

          <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-gold-100 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              Join the Movement
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Get Involved With Shani
            </h2>
            <p className="text-gold-100/90 text-sm sm:text-base mt-3">
              Transforming communities takes collective hands. Explore the 4 ways you can stand with us today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pathway 1: Donate */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-magenta-500/80 text-white mx-auto flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 fill-white" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">1. Donate</h3>
                <p className="text-xs text-gold-100/80 leading-relaxed mb-6">
                  Provide essential funds for dignity kits, seed nurseries, and field operations in Nairobi.
                </p>
              </div>
              <MagneticButton
                onClick={onOpenDonate}
                className="w-full py-2.5 rounded-full bg-white text-plum-900 font-bold text-xs hover:bg-gold-100 transition-colors shadow-sm"
              >
                Make a Gift
              </MagneticButton>
            </div>

            {/* Pathway 2: Volunteer */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/80 text-ink-900 mx-auto flex items-center justify-center mb-4">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">2. Volunteer</h3>
                <p className="text-xs text-gold-100/80 leading-relaxed mb-6">
                  Contribute your time, mentorship, medical training, or community facilitation skills.
                </p>
              </div>
              <MagneticButton
                onClick={() => {
                  setActivePage('get-involved');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-full bg-white text-plum-900 font-bold text-xs hover:bg-gold-100 transition-colors shadow-sm"
              >
                Join Volunteer Team
              </MagneticButton>
            </div>

            {/* Pathway 3: Partner */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all text-center flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-leaf-600/80 text-white mx-auto flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">3. Partner</h3>
                <p className="text-xs text-gold-100/80 leading-relaxed mb-6">
                  CSR collaboration for corporates, institutions, and international foundations.
                </p>
              </div>
              <MagneticButton
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-full bg-white text-plum-900 font-bold text-xs hover:bg-gold-100 transition-colors shadow-sm"
              >
                Inquire Partnership
              </MagneticButton>
            </div>

            {/* Pathway 4: Sponsor a Dignity Kit */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all text-center flex flex-col justify-between ring-2 ring-gold-500/50">
              <div>
                <div className="w-12 h-12 rounded-xl bg-magenta-100 text-magenta-600 mx-auto flex items-center justify-center mb-4">
                  <Droplet className="w-6 h-6 fill-magenta-500" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  4. Sponsor Dignity Kit
                </h3>
                <p className="text-xs text-gold-100/80 leading-relaxed mb-6">
                  [Add: Sponsor a Girl's Dignity Kit placeholder: KES 500 covers hygiene pads, soap, and innerwear for one term].
                </p>
              </div>
              <MagneticButton
                onClick={onOpenDonate}
                className="w-full py-2.5 rounded-full bg-gold-500 text-ink-900 font-bold text-xs hover:bg-gold-600 transition-colors shadow-sm"
              >
                Sponsor a Girl
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-organic bg-cream-100/70 border border-black/5 text-center">
          <div className="w-12 h-12 rounded-full bg-magenta-100 text-magenta-500 mx-auto flex items-center justify-center mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900 mb-2">
            Stay Connected with Shani Foundation
          </h3>
          <p className="text-ink-600 text-sm max-w-lg mx-auto mb-6">
            Get quarterly field updates, impact stories, and community event invitations straight to your inbox. No spam, ever.
          </p>

          {newsletterSubscribed ? (
            <div className="p-4 rounded-2xl bg-leaf-100 text-forest-800 text-sm font-bold inline-flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-leaf-600" />
              <span>Thank you for joining our circle! We're glad to have you with us.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full border border-black/10 bg-white text-sm focus:outline-none focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-plum-700 hover:bg-plum-800 text-white font-bold text-sm shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </form>
          )}

          <p className="text-[11px] text-ink-400 mt-3">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
