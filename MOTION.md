# Shani Foundation Motion & Gradient System (MOTION.md)

> **Concept:** "Growth and Care"  
> Sprouts unfurl, hands cup and open, shapes drift like leaves, sections rise gently into place. Unhurried, soft, and dignified.

---

## 🌸 1. Motion Principles

* **Dignified & Grounded:** Animations feel natural and organic. No harsh bounces, no disorienting rotations, no overshoot on text.
* **Guide & Reinforce:** Every animation guides attention, provides instant tactile feedback, or reinforces the nonprofit's mission.
* **Performance Rule:** Only animate `transform`, `opacity`, `background-position`, and SVG `stroke-dashoffset` / `clip-path`. Never animate layout dimensions (`width`, `height`, `top`, `left`).

---

## ⏱️ 2. Motion Tokens

Defined as JS constants in [`src/motion/tokens.js`](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/motion/tokens.js) and CSS variables in [`src/styles/gradients.css`](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/styles/gradients.css):

| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--dur-fast` | `150ms` (0.15s) | Hover, press feedback, micro-clicks |
| `--dur-base` | `400ms` (0.4s) | Tab transitions, reveals, accordion toggles |
| `--dur-slow` | `700ms` (0.7s) | Section entrances, hero reveal, modal opening |
| `--dur-ambient` | `8s - 20s` | Looping background drift (orbs, floating leaves, blob) |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Natural settling entrances |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | State transitions (modals, sliding panels) |
| `softSpring` | `{ stiffness: 120, damping: 18 }` | Cards, badges, icon reveals |
| `pillSpring` | `{ stiffness: 300, damping: 28 }` | Sliding active pill for donation toggles |
| `stagger` | `80ms - 120ms` | Sibling sequences (max 8 items per group) |

---

## 🎨 3. Gradient System

Defined in [`src/styles/gradients.css`](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/styles/gradients.css) and mapped to Tailwind utilities:

```css
--grad-brand:    linear-gradient(135deg, #4A0A38 0%, #7A0F5A 45%, #A3277A 100%)
--grad-bloom:    linear-gradient(135deg, #7A0F5A 0%, #A3277A 55%, #E8A33D 130%)
--grad-growth:   linear-gradient(135deg, #2E5A2B 0%, #3F7D2B 55%, #8DB63C 100%)
--grad-sunrise:  linear-gradient(180deg, #FCF1DC 0%, #F6E4F0 100%)
--grad-gold:     linear-gradient(90deg, #E8A33D 0%, #F3C566 50%, #E8A33D 100%)
--grad-mesh-hero: radial-gradient at 0% 0% (magenta-100), 100% 100% (gold-100), bottom (leaf-500)
--grad-overlay:  linear-gradient(to top, rgba(74,10,56,.75), rgba(74,10,56,0))
--grad-glass:    linear-gradient(135deg, rgba(255,255,255,.75), rgba(255,255,255,.35))
```

### Pillar Gradients
* **Menstrual Health:** `linear-gradient(135deg, #A3277A 0%, #7A0F5A 100%)`
* **Empowerment:** `linear-gradient(135deg, #E8A33D 0%, #F3C566 100%)`
* **Climate:** `linear-gradient(135deg, #3F7D2B 0%, #8DB63C 100%)`
* **Child Protection:** `linear-gradient(135deg, #7A0F5A 0%, #4A0A38 100%)`

---

## 🧩 4. Key Component Implementations

1. **Preloader (`<Preloader />`):**
   * Draws the green sprout via SVG `stroke-dashoffset`.
   * Two plum hands slide in and embrace the sprout.
   * Auto-fades under 1.2s; skips if cached in session or user clicks "Skip Intro".
2. **Top Scroll Progress (`<ScrollProgress />`):**
   * 3px tall gradient bar (`--grad-bloom`) tracking page scroll progress.
3. **Hero & Blob Mask (`<BlobMask />`):**
   * Organic liquid SVG border-radius morphing over 12s.
   * Mouse parallax tracking up to 12px on desktop.
4. **Headline Reveal (`<GradientText />`):**
   * Word-by-word 24px rise with 80ms stagger.
   * Left-to-right clip-path wipe on "Sustaining Communities".
5. **Purposeful Focus Icons (`<FocusCard />`):**
   * **Droplet:** Drops down 4px and ripples.
   * **People:** Two figures lean together in solidarity.
   * **Globe:** Rotates 20° with leaf expansion.
   * **Shield:** Pulses and draws checkmark stroke.
6. **Animated Counters (`<Counter />`):**
   * Triggers once at 40% visibility.
   * Tabular numbers count up with ease-out over 1.8s.
   * Circular gradient stroke progress ring.
   * Subtle color glow pulse on completion.
7. **Magnetic Buttons (`<MagneticButton />`):**
   * Cursor pull up to 8px on pointer:fine desktop devices.
   * Expanding gold ripple on click.
8. **Leaf Confetti (`triggerLeafConfetti()`):**
   * Capped at 60 particles in brand green, gold, and plum.
   * Automatically cleans up after 2 seconds.

---

## ♿ 5. Accessibility & Animation Control

* **`prefers-reduced-motion`:**
  * When system setting is active, all parallax, floating orbs, morphing, confetti, and ambient loops are deactivated.
  * Instant, clean opacity transitions (<150ms) ensure full usability without motion.
* **Manual "Pause animations" Toggle:**
  * Available in the footer (`<Footer />`) and Motion Playground.
  * Persists in `localStorage` under `shani_animations_paused`.
  * Instantly toggles `.motion-paused` on the `<html>` root.
* **Low-End Device Optimization:**
  * Heavy ambient loops are paused when offscreen via `IntersectionObserver`.

---

## 🛠️ 6. Dev Motion Playground

Visit `http://localhost:3000/#motion-playground` to interact with every token, gradient swatch, card interaction, and animation control.
