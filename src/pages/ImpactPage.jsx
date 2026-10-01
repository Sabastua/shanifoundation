import React from 'react';
import {
  FileText,
  Download,
  ShieldCheck,
  Droplet,
  Heart,
  TreePine,
  Users2,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import RibbonLabel from '../components/RibbonLabel';
import Counter from '../components/Counter';

export default function ImpactPage({ onOpenDonate, setActivePage }) {
  const reports = [
    {
      title: '2025 Annual Impact & Community Report',
      type: 'PDF Document',
      size: '2.4 MB',
      description: 'Comprehensive review of school dignity programs, tree nurseries, and youth vocational achievements in Nairobi.',
      tag: 'Annual Report',
      downloadPlaceholder: '[Download: 2025 Annual Report PDF]',
    },
    {
      title: 'Audited Financial Statements (FY 2024/2025)',
      type: 'Financial Audit',
      size: '1.8 MB',
      description: 'Independent auditor report verifying resource attribution, programmatic expenditures, and statutory disclosures.',
      tag: 'Financial Audit',
      downloadPlaceholder: '[Download: Audited Financials PDF]',
    },
    {
      title: 'Child Safeguarding & Protection Policy Framework',
      type: 'Policy Document',
      size: '850 KB',
      description: 'Our mandatory institutional guidelines, code of conduct, and reporting protocols aligned with the Kenya Children Act.',
      tag: 'Policy Framework',
      downloadPlaceholder: '[Download: Safeguarding Framework PDF]',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <RibbonLabel variant="gold" className="mb-4">
          TRANSPARENCY & EVIDENCE
        </RibbonLabel>
        <h1 className="font-serif font-bold text-plum-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
          Measurable Impact, Total Accountability
        </h1>
        <p className="text-ink-600 text-base sm:text-lg mt-4 leading-relaxed">
          We believe in evidence-based philanthropy. Every dignity pack, tree seedling, and training cohort is tracked with verified monitoring.
        </p>
      </div>

      {/* Counters Grid */}
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

      {/* Geographic Footprint / Map Placeholder */}
      <section className="bg-white p-8 sm:p-12 rounded-organic-lg border border-black/5 shadow-brand">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold text-leaf-600 uppercase tracking-wider block mb-1">
              Geographic Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">
              Where We Work Across Nairobi & Beyond
            </h2>
            <p className="text-ink-600 text-sm mt-1 max-w-xl">
              Targeting informal settlements, peri-urban communities, and resource-constrained public schools where intervention needs are greatest.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 text-ink-800 text-xs font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-magenta-500 animate-pulse"></span>
              <span>Active Field Programs</span>
            </span>
          </div>
        </div>

        {/* Map Box */}
        <div className="aspect-[16/8] rounded-2xl bg-cream-100 border border-black/10 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-full bg-magenta-100 text-magenta-500 flex items-center justify-center mb-3">
            <MapPin className="w-7 h-7" />
          </div>
          <p className="font-mono font-bold text-sm text-ink-900 max-w-md">
            🗺️ [Add: Interactive / Static Field Intervention Map showing Nairobi partner schools & community hubs]
          </p>
          <p className="text-xs text-ink-500 mt-1">
            Locations include: Nairobi informal settlements, urban eco-corridors, and partner primary/secondary institutions.
          </p>
        </div>
      </section>

      {/* Public Reports & Downloads */}
      <section className="space-y-6">
        <div>
          <RibbonLabel variant="plum" className="mb-3">
            GOVERNANCE & REPORTS
          </RibbonLabel>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">
            Public Reports & Disclosures
          </h2>
          <p className="text-ink-600 text-sm mt-1">
            Download our verified annual impact logs, audited balance sheets, and statutory safeguarding guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reports.map((report, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-black/5 shadow-brand flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cream-100 text-ink-700">
                    {report.tag}
                  </span>
                  <span className="text-xs text-ink-400 font-mono">{report.size}</span>
                </div>

                <h3 className="font-serif font-bold text-lg text-ink-900 mb-2">
                  {report.title}
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed mb-6">
                  {report.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-100">
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Placeholder document: ${report.downloadPlaceholder}. Real PDF link to be attached by client.`);
                  }}
                  className="w-full py-2.5 px-4 rounded-full bg-cream-100 hover:bg-magenta-100 text-ink-900 hover:text-plum-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-black/5"
                >
                  <Download className="w-4 h-4 text-magenta-500" />
                  <span>{report.downloadPlaceholder}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
