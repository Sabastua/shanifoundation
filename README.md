# Shani Foundation Web Platform

> **"Empowering Women • Sustaining Communities"**  
> *"We Got You"*

A complete, production-quality, responsive web application for **Shani Foundation**, a Nairobi, Kenya-based nonprofit organization dedicated to menstrual health, women & youth empowerment, climate action, and child protection & education.

---

## 🌸 Brand Identity & Color Tokens

- **Plum 900:** `#4A0A38` (Deep accents, footer background)
- **Plum 700:** `#7A0F5A` (Primary brand, headings, logo ring)
- **Magenta 500:** `#A3277A` (Primary buttons, highlights, Menstrual Health signature)
- **Magenta 100:** `#F6E4F0` (Soft tinted sections)
- **Leaf 600:** `#3F7D2B` (Secondary actions, Climate signature)
- **Leaf 500:** `#8DB63C` (Sprout green accent from logo mark)
- **Forest 800:** `#2E5A2B` (Mission ribbon, dark green surfaces)
- **Gold 500:** `#E8A33D` (Vision ribbon, highlights, Empowerment signature)
- **Gold 100:** `#FCF1DC` (Warm tinted sections)
- **Ink 900:** `#231A21` (Body text, warm near-black)
- **Ink 600:** `#5B4F58` (Secondary text)
- **Cream 50:** `#FFFDFA` (Page canvas background)

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Installation
```bash
# Clone the repository
git clone https://github.com/Sabastua/shani-foundation.git
cd shani-foundation

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Visit `http://localhost:3000` in your web browser.

### Production Build
```bash
# Compile and optimize for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploying to Production

### 1. Deploying to Vercel (Recommended)
1. Push this repository to GitHub.
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and select `shani-foundation`.
4. Framework Preset will auto-detect as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### 2. Deploying to Netlify
1. Log in to [Netlify](https://netlify.com).
2. Select **"Import from Git"** and choose `shani-foundation`.
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy Site**.

---

## 📋 Client Placeholders Checklist

Below is the exhaustive catalog of clearly marked placeholders within the codebase that must be updated before final public launch:

### 1. Institutional & Payment Details
- [ ] **NGO Registration Number:** In [Footer.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/components/Footer.jsx) and [AboutPage.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/pages/AboutPage.jsx) (`[Add: NGO Board / Registration Number]`).
- [ ] **M-Pesa Paybill / Till Number:** In [DonateWidget.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/components/DonateWidget.jsx) (`[Add: M-Pesa Paybill / Till Number]`).
- [ ] **Bank Details:** In [DonateWidget.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/components/DonateWidget.jsx) (`[Add: Bank Name]`, `[Add: Account Number]`, `[Add: Swift Code]`).
- [ ] **Card Payment Gateway:** In [DonateWidget.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/components/DonateWidget.jsx) (`Connect Paystack / Flutterwave / Stripe API`).

### 2. Verified Metrics & Impact Counters
- [ ] **Girls Reached:** In [Counter.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/components/Counter.jsx) (`[Add: number of girls reached]`).
- [ ] **Pads Distributed:** In [Counter.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/components/Counter.jsx) (`[Add: pads distributed]`).
- [ ] **Trees Planted:** In [Counter.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/components/Counter.jsx) (`[Add: trees planted]`).
- [ ] **Schools / Communities:** In [Counter.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/components/Counter.jsx) (`[Add: schools/communities]`).

### 3. Photography & Media Assets
- [ ] **Hero Photo:** In [HomePage.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/pages/HomePage.jsx) (`[Add: Hero Photo of Kenyan women & youth leaders in action]`).
- [ ] **About Page Photo:** In [AboutPage.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/pages/AboutPage.jsx) (`[Add: Community founders & women community mobilization photo in Nairobi]`).
- [ ] **Board / Leadership Portraits:** In [AboutPage.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/pages/AboutPage.jsx) (4 executive member photos).
- [ ] **Story Photos:** In [StoriesPage.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/pages/StoriesPage.jsx) (`[Add: Photo of dignity kit distribution session]`, `[Add: Photo of youth tree planting activity]`, `[Add: Photo of young women mentorship circle]`, etc.).
- [ ] **Map Asset:** In [ImpactPage.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/pages/ImpactPage.jsx) (`[Add: Interactive / Static Field Intervention Map showing Nairobi partner schools & community hubs]`).

### 4. Leadership & Programmatic Disclosures
- [ ] **Board Names & Biographies:** In [AboutPage.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/pages/AboutPage.jsx) (Founder, Programs Lead, Climate Coordinator, Safeguarding Lead).
- [ ] **Program Outcomes:** In [OurWorkPage.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/pages/OurWorkPage.jsx) (Specific audited outcome statements for all 4 pillars).
- [ ] **Downloadable PDFs:** In [ImpactPage.jsx](file:///c:/Users/smacharia6/OneDrive%20-%20SAFARICOM%20PLC/Desktop/New%20folder/shani/src/pages/ImpactPage.jsx) (`2025 Annual Impact Report`, `Audited Financials`, `Safeguarding Framework`).

---

## 🏛️ Project Architecture
```
shani/
├── index.html                   # HTML entrypoint, Google Fonts, JSON-LD Schema & SEO
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Exact brand tokens (--plum, --magenta, --leaf, --gold, etc.)
├── postcss.config.js            # PostCSS pipeline
├── vite.config.js               # Vite build configuration
├── public/
│   ├── favicon.svg              # Logo mark SVG favicon
│   ├── robots.txt               # SEO search bot crawler instructions
│   └── sitemap.xml              # Search engine XML index
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main router, skip links, layout shell
    ├── index.css                # CSS variables, typography, accessible focus styles
    ├── components/
    │   ├── Logo.jsx             # Two hands cradling human-sprout mark (full, light, mark)
    │   ├── Navbar.jsx           # Sticky blurred header with mobile slide-in menu
    │   ├── Footer.jsx           # Plum-900 surface, "We Got You", contact, and safeguarding
    │   ├── RibbonLabel.jsx      # Banner ribbon pill/arrow tags (Vision, Mission, etc.)
    │   ├── FocusCard.jsx        # 4 interactive pillar cards with signature colors
    │   ├── ValueTile.jsx        # 4 core value tiles (Dignity, Equity, etc.)
    │   ├── Counter.jsx          # Scroll-triggered animated counters with placeholders
    │   ├── StoryCard.jsx        # Aspect-ratio image placeholder cards with category tags
    │   ├── DonateWidget.jsx     # KES presets, M-Pesa, card, transparency pledge & confetti
    │   ├── DonateModal.jsx      # Accessible dialog overlay for donations
    │   └── ContactForm.jsx      # WhatsApp connect, Nairobi map, contact form
    └── pages/
        ├── HomePage.jsx         # Complete 10-step landing page
        ├── AboutPage.jsx        # Story, vision/mission, values, board, safeguarding
        ├── OurWorkPage.jsx      # 4 anchored focus pillars: Problem, Approach, Programs
        ├── GetInvolvedPage.jsx  # Donate, Volunteer, and Corporate Partnership flows
        ├── ImpactPage.jsx       # Reports download, impact counters, Nairobi map
        ├── StoriesPage.jsx      # Filterable stories grid by pillar category
        └── ContactPage.jsx      # Direct Nairobi inquiries, WhatsApp, email, map
```

---

## 🔒 Accessibility & Performance Standards
- **WCAG 2.2 AA Compliance:** High-contrast text pairings (white text only on plum-700/900, magenta-500, forest-800).
- **Focus Rings:** Distinctive `3px solid #E8A33D` outline offset by `2px` for all interactive elements.
- **Mobile First:** Optimized for mobile connections in Kenya with min 44px tap targets.
- **Reduced Motion:** Fully honors `prefers-reduced-motion` settings.
