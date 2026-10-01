import React from 'react';
import { ShieldCheck, Heart, Users, Target, BookOpen, Award, CheckCircle2, FileText } from 'lucide-react';
import RibbonLabel from '../components/RibbonLabel';
import ValueTile from '../components/ValueTile';

export default function AboutPage({ setActivePage, onOpenDonate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <RibbonLabel variant="plum" className="mb-4">
          ABOUT SHANI FOUNDATION
        </RibbonLabel>
        <h1 className="font-serif font-bold text-plum-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
          Rooted in Nairobi.{' '}
          <span className="text-magenta-500">Dedicated to Dignity.</span>
        </h1>
        <p className="text-ink-600 text-base sm:text-lg mt-4 leading-relaxed">
          Founded on the conviction that every woman and young person deserves the opportunity to thrive without bodily stigma, economic marginalization, or environmental vulnerability.
        </p>
      </div>

      {/* 2. Our Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <RibbonLabel variant="gold">
            OUR STORY
          </RibbonLabel>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">
            Born from Grassroots Reality
          </h2>
          <div className="space-y-4 text-ink-600 text-sm sm:text-base leading-relaxed">
            <p>
              Shani Foundation was established in Nairobi, Kenya, in response to the deep-seated challenges confronting adolescent girls, vulnerable youth, and women in our neighborhoods. From period poverty keeping bright students out of school to climate shocks impacting local food and water security, our founders recognized that dignity and sustainability cannot be separated.
            </p>
            <p>
              We began with direct conversations with students and community mothers, listening before proposing interventions. Today, our multifaceted work bridges health, environment, livelihoods, and child protection under one unifying ethos: <em>"Empowering Women • Sustaining Communities."</em>
            </p>
          </div>
          <div className="pt-2">
            <div className="inline-block p-4 rounded-2xl bg-gold-50 border border-gold-500/30 text-ink-900 text-sm font-serif italic">
              "We believe that when a young woman is supported with dignity and tools, an entire community rises with her."
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="aspect-[4/3] rounded-organic bg-gradient-to-br from-magenta-100/50 via-cream-100 to-gold-100/40 border border-black/5 shadow-brand flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-magenta-500 text-white flex items-center justify-center mb-4 shadow-md">
              <Heart className="w-8 h-8 fill-white" />
            </div>
            <p className="text-xs font-mono font-bold text-plum-900 max-w-sm">
              📷 [Add: Community founders & women community mobilization photo in Nairobi]
            </p>
            <p className="text-[11px] text-ink-600 mt-1">
              Warm, candid portraiture capturing our leadership team
            </p>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Full Card */}
      <section className="bg-cream-100/70 p-8 sm:p-12 rounded-organic-lg border border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-7 sm:p-8 rounded-organic border border-gold-500/30 shadow-brand">
            <RibbonLabel variant="gold" className="mb-4">
              OUR VISION
            </RibbonLabel>
            <blockquote className="font-serif text-2xl font-bold text-ink-900 leading-snug mb-4">
              "A world where all women and youth live with dignity, equity, and sustainable well-being."
            </blockquote>
            <p className="text-ink-600 text-sm">
              We envision inclusive societies where systemic barriers are dismantled and every human being has bodily autonomy and economic empowerment.
            </p>
          </div>

          <div className="bg-forest-800 text-white p-7 sm:p-8 rounded-organic shadow-brand-green">
            <RibbonLabel variant="green" className="mb-4">
              OUR MISSION
            </RibbonLabel>
            <blockquote className="font-serif text-2xl font-bold text-white leading-snug mb-4">
              "To support menstrual health, climate action, and community empowerment initiatives."
            </blockquote>
            <p className="text-gold-100/80 text-sm">
              Carried out through targeted community programs, schools partnerships, tree nursery projects, and youth leadership incubators across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <RibbonLabel variant="plum" className="mb-3">
            GUIDING PRINCIPLES
          </RibbonLabel>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">
            Our Four Core Values
          </h2>
          <p className="text-ink-600 text-sm mt-2">
            Non-negotiable standards reflected in our staff, programs, and community partnerships.
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

      {/* 5. Leadership & Board (Clearly marked Placeholders) */}
      <section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <RibbonLabel variant="gold" className="mb-3">
            LEADERSHIP
          </RibbonLabel>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900">
            Our Board & Executive Team
          </h2>
          <p className="text-ink-600 text-sm mt-2">
            [Add: Brief introductory sentence on board oversight and community leaders].
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              role: 'Executive Director / Founder',
              namePlaceholder: '[Add: Founder Name]',
              bio: '[Add: Brief background in community development, gender advocacy, and public health].',
            },
            {
              role: 'Programs Lead - Health & Dignity',
              namePlaceholder: '[Add: Programs Coordinator Name]',
              bio: '[Add: Experience in menstrual hygiene management, adolescent health, and school outreach].',
            },
            {
              role: 'Climate & Sustainability Coordinator',
              namePlaceholder: '[Add: Climate Lead Name]',
              bio: '[Add: Expertise in urban ecology, community agroforestry, and youth conservation cohorts].',
            },
            {
              role: 'Child Safeguarding & Legal Officer',
              namePlaceholder: '[Add: Safeguarding Lead Name]',
              bio: '[Add: Advocate with specialization in child rights, trauma-informed care, and Kenyan statutory compliance].',
            },
          ].map((person, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-black/5 shadow-brand text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-24 h-24 rounded-full bg-cream-100 border border-gold-500/30 mx-auto flex items-center justify-center mb-4 text-xs font-mono text-ink-600 p-2 text-center">
                  📷 [Add: Photo]
                </div>
                <h3 className="font-serif font-bold text-lg text-ink-900">
                  {person.namePlaceholder}
                </h3>
                <span className="text-xs font-bold text-magenta-500 uppercase tracking-wide block mb-3">
                  {person.role}
                </span>
                <p className="text-xs text-ink-600 leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Governance, Accountability & Safeguarding Statement */}
      <section className="bg-white p-8 sm:p-12 rounded-organic-lg border border-black/5 shadow-brand space-y-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-leaf-600" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">
            Governance & Child Safeguarding Policy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-ink-600 leading-relaxed">
          <div className="space-y-3">
            <h3 className="font-bold text-ink-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-leaf-600" />
              <span>Financial Integrity & Regulatory Compliance</span>
            </h3>
            <p>
              Shani Foundation is established and regulated under Kenyan law, registered with the NGO Coordination Board under registration number <strong>[Add: NGO Board / Registration Number]</strong>. We subject our books to annual external audits, ensuring every grant, donation, and corporate sponsorship is allocated with strict stewardship.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-ink-900 text-base flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-magenta-500" />
              <span>Unconditional Safeguarding & Protection</span>
            </h3>
            <p>
              Protecting the children and adolescent youth in our care is non-negotiable. All staff, volunteers, and partner facilitators undergo background verification and mandatory training under the Kenya Children Act (2022). Any report of harm or misconduct is investigated immediately with absolute confidentiality.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-cream-100 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-ink-500 font-mono">
            Annual Report & Financial Disclosure: [Add: Link to 2025/2026 Audit Report PDF]
          </span>
          <button
            onClick={() => setActivePage('contact')}
            className="text-plum-700 font-bold hover:underline"
          >
            Request Governance Documents &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
