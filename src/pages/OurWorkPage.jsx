import React from 'react';
import {
  Droplets,
  Users,
  Leaf,
  ShieldAlert,
  ArrowRight,
  Heart,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import RibbonLabel from '../components/RibbonLabel';

export default function OurWorkPage({ onOpenDonate, setActivePage }) {
  const pillars = [
    {
      id: 'menstrual-health',
      title: 'Menstrual Health & Hygiene',
      tagline: 'Ending Period Poverty & Preserving Dignity in Schools',
      signatureColor: 'magenta',
      icon: Droplets,
      badge: 'Pillar 01',
      problem:
        'In Kenya, countless adolescent schoolgirls miss between 3 to 5 school days each month due to lack of sanitary pads, inadequate WASH infrastructure, and cultural taboos surrounding menstruation. This leads to academic falling behind, shame, and heightened school dropout rates.',
      approach:
        'We combine regular distribution of eco-conscious dignity kits (sanitary pads, soaps, undergarments) with stigma-busting menstrual literacy workshops for girls, boys, and educators in community schools.',
      programs: [
        'School Dignity Pack Outreaches (termly distribution of pads & hygiene kits)',
        'Peer-to-Peer Menstrual Health Clubs and body literacy circles',
        'Menstrual Hygiene Management (MHM) advocacy with community parents',
        'Emergency sanitary supplies banks in partner schools',
      ],
      outcomesPlaceholder:
        '[Add: Verified outcomes e.g. 95% reduction in period-related school absenteeism across partner schools, number of girls supplied].',
      ctaText: 'Sponsor a Girl\'s Dignity Kit',
      ctaAction: onOpenDonate,
      borderClass: 'border-magenta-500/30',
      bgClass: 'bg-white',
      accentColor: 'text-magenta-500',
      buttonBg: 'bg-magenta-500 hover:bg-magenta-600',
    },
    {
      id: 'women-youth',
      title: 'Women & Youth Empowerment',
      tagline: 'Fostering Economic Agency, Skills, and Leadership',
      signatureColor: 'gold',
      icon: Users,
      badge: 'Pillar 02',
      problem:
        'Youth and women face steep barriers to economic self-determination in urban and peri-urban Kenya, including high unemployment, lack of vocational training, and limited access to initial working capital or mentorship.',
      approach:
        'We create community-anchored incubators where young women gain practical vocational competencies, financial literacy, digital tools, and leadership mentorship to build self-sustaining livelihood streams.',
      programs: [
        'Vocational & Entrepreneurship Bootcamps for adolescent young mothers',
        'Community Village Savings and Loan Association (VSLA) mentorship',
        'Leadership & Public Speaking Mentorship Circles',
        'Digital skills literacy and job-readiness pathways',
      ],
      outcomesPlaceholder:
        '[Add: Verified outcomes e.g. number of youth trained, micro-enterprises launched, or women-led community groups supported].',
      ctaText: 'Support Youth Empowerment',
      ctaAction: onOpenDonate,
      borderClass: 'border-gold-500/40',
      bgClass: 'bg-white',
      accentColor: 'text-gold-600',
      buttonBg: 'bg-gold-500 text-ink-900 hover:bg-gold-600',
    },
    {
      id: 'climate',
      title: 'Climate & Sustainability',
      tagline: 'Greening Nairobi & Cultivating Environmental Stewards',
      signatureColor: 'green',
      icon: Leaf,
      badge: 'Pillar 03',
      problem:
        'Rapid urbanization, deforestation, and unpredictable climatic weather patterns disproportionately threaten vulnerable urban informal settlements through flooding, extreme heat, and severe environmental degradation.',
      approach:
        'We mobilize school eco-clubs and community youth groups to establish indigenous tree nurseries, conduct reforestation drives, and spearhead clean urban environmental initiatives.',
      programs: [
        'School & Community Indigenous Tree Nurseries',
        'Youth Climate Champions & Ecological Literacy Training',
        'Urban Clean-Up & Organic Waste Composting drives',
        'Rainwater Harvesting & Green Space beautification projects',
      ],
      outcomesPlaceholder:
        '[Add: Verified outcomes e.g. number of trees planted, school eco-clubs launched, or seedlings nurtured in community nurseries].',
      ctaText: 'Fund Climate Action',
      ctaAction: onOpenDonate,
      borderClass: 'border-leaf-600/30',
      bgClass: 'bg-white',
      accentColor: 'text-leaf-600',
      buttonBg: 'bg-leaf-600 hover:bg-leaf-700 text-white',
    },
    {
      id: 'child-protection',
      title: 'Child Protection & Education',
      tagline: 'Safeguarding Childhood & Unlocking Academic Potential',
      signatureColor: 'plum',
      icon: ShieldAlert,
      badge: 'Pillar 04',
      problem:
        'Children in under-resourced settlements are often exposed to child labor, violence, neglect, and early school dropout, depriving them of the safe foundation required for healthy human development.',
      approach:
        'We work hand-in-hand with local teachers, child welfare officers, and guardians to implement preventative safeguarding frameworks, school retention drives, and emergency welfare interventions.',
      programs: [
        'School Retention & Remedial Learning support for vulnerable children',
        'Child Rights & Safeguarding Workshops for community guardians',
        'Reporting & referral pathways for children in acute distress',
        'Safe Spaces and mental health counseling support circles',
      ],
      outcomesPlaceholder:
        '[Add: Verified outcomes e.g. number of vulnerable children retained in school, safeguarding cases mediated, or community educators trained].',
      ctaText: 'Protect a Child',
      ctaAction: onOpenDonate,
      borderClass: 'border-plum-700/30',
      bgClass: 'bg-white',
      accentColor: 'text-plum-700',
      buttonBg: 'bg-plum-700 hover:bg-plum-800 text-white',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <RibbonLabel variant="plum" className="mb-4">
          PROGRAMS & INITIATIVES
        </RibbonLabel>
        <h1 className="font-serif font-bold text-plum-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
          Our Four Pillars of Change
        </h1>
        <p className="text-ink-600 text-base sm:text-lg mt-4 leading-relaxed">
          Through a community-rooted model, Shani Foundation addresses systemic challenges in menstrual health, youth economic empowerment, environmental resilience, and child rights across Nairobi.
        </p>
      </div>

      {/* Navigation shortcuts to anchored pillars */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {pillars.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="px-4 py-2 rounded-full bg-cream-100 hover:bg-magenta-100 text-ink-900 hover:text-plum-900 text-xs sm:text-sm font-bold border border-black/5 transition-colors"
          >
            {p.title}
          </a>
        ))}
      </div>

      {/* Anchored Pillar Sections */}
      <div className="space-y-14 sm:space-y-20">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <section
              key={pillar.id}
              id={pillar.id}
              className={`p-8 sm:p-12 rounded-organic-lg border ${pillar.borderClass} ${pillar.bgClass} shadow-brand transition-all`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-black/5">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-500">
                      {pillar.badge}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                    <span className={`text-xs font-bold uppercase tracking-wider ${pillar.accentColor}`}>
                      Active Nairobi Intervention
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">
                    {pillar.title}
                  </h2>
                  <p className="text-ink-600 text-base sm:text-lg font-medium mt-1">
                    {pillar.tagline}
                  </p>
                </div>

                <button
                  onClick={pillar.ctaAction}
                  className={`px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${pillar.buttonBg}`}
                >
                  <Heart className="w-4 h-4" />
                  <span>{pillar.ctaText}</span>
                </button>
              </div>

              {/* Problem & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="p-6 rounded-2xl bg-cream-50 border border-black/5">
                  <div className="flex items-center gap-2 text-ink-900 font-bold mb-3 text-base">
                    <AlertCircle className="w-5 h-5 text-magenta-500" />
                    <span>The Challenge (Problem)</span>
                  </div>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    {pillar.problem}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-cream-50 border border-black/5">
                  <div className="flex items-center gap-2 text-ink-900 font-bold mb-3 text-base">
                    <Sparkles className="w-5 h-5 text-gold-500" />
                    <span>Our Strategic Approach</span>
                  </div>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    {pillar.approach}
                  </p>
                </div>
              </div>

              {/* Core Programs & Measurable Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink-900 mb-4 flex items-center gap-2">
                    <CheckCircle className={`w-5 h-5 ${pillar.accentColor}`} />
                    <span>Core Program Activities</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {pillar.programs.map((prog, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-ink-600 flex items-start gap-2.5 bg-white p-3 rounded-xl border border-black/5"
                      >
                        <span className="w-2 h-2 rounded-full bg-magenta-500 flex-shrink-0 mt-1.5"></span>
                        <span>{prog}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-ink-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-leaf-600" />
                    <span>Measurable Outcomes & Accountability</span>
                  </h3>
                  <div className="p-5 rounded-2xl bg-cream-100/60 border border-black/10 text-xs sm:text-sm text-ink-700 leading-relaxed font-mono">
                    <p className="font-bold text-ink-900 mb-2 font-sans">
                      Verified Impact Placeholder:
                    </p>
                    <p>{pillar.outcomesPlaceholder}</p>
                    <div className="mt-4 pt-3 border-t border-black/10 text-xs text-ink-500 font-sans">
                      * Grounded in data collected from partner school registers and community records.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
