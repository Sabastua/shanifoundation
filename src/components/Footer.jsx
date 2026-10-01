import React from 'react';
import { MapPin, Phone, Mail, Heart, Shield, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ setActivePage, onOpenDonate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'our-work', label: 'Our Work & Focus' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'impact', label: 'Impact & Reports' },
    { id: 'stories', label: 'Community Stories' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const focusLinks = [
    { id: 'our-work', label: 'Menstrual Health & Hygiene' },
    { id: 'our-work', label: 'Women & Youth Empowerment' },
    { id: 'our-work', label: 'Climate & Sustainability' },
    { id: 'our-work', label: 'Child Protection & Education' },
  ];

  return (
    <footer className="bg-plum-900 text-white pt-16 pb-12 border-t border-magenta-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Warm Sign-Off Banner */}
        <div className="bg-plum-800/80 rounded-2xl p-6 sm:p-8 border border-white/10 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-gold-500 font-bold block mb-1">
              Shani Foundation Community Promise
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
              "We Got You"
            </h3>
            <p className="text-gold-100/90 text-sm max-w-xl mt-1">
              Standing with women, girls, and youth across Kenya with dignity, equity, and unwavering community solidarity.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDonate}
              className="px-6 py-3 rounded-full bg-magenta-500 hover:bg-magenta-600 text-white font-bold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate Today</span>
            </button>
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
            >
              Partner With Us
            </button>
          </div>
        </div>

        {/* 4 Column Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-gold-100/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              Shani Foundation is a nonprofit organization based in Nairobi, Kenya, advancing dignity, menstrual equity, climate resilience, and child protection.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono font-semibold text-gold-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md inline-block">
                Reg No: [Add: NGO Board / Registration Number]
              </span>
            </div>
            {/* Social Icons SVGs */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-magenta-500 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-magenta-500 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-magenta-500 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.761-2.239-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-magenta-500 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-500">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gold-100/90">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActivePage(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white hover:underline transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Focus Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-500">
              Our 4 Pillars
            </h4>
            <ul className="space-y-2 text-sm text-gold-100/90">
              {focusLinks.map((p, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      setActivePage('our-work');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white hover:underline transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-leaf-500"></span>
                    <span>{p.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Nairobi Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-500">
              Contact Shani
            </h4>
            <div className="space-y-2.5 text-xs text-gold-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-magenta-500 flex-shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="tel:+254119575385" className="hover:text-white transition-colors">
                  +254 119575385
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-leaf-500 flex-shrink-0" />
                <a href="mailto:shanifoundation231@gmail.com" className="hover:text-white transition-colors break-all">
                  shanifoundation231@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/254119575385"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 px-3 py-1.5 rounded-full border border-[#25D366]/40 transition-colors"
              >
                <span>WhatsApp Desk</span>
                <span className="text-[10px]">🟢 Online</span>
              </a>
            </div>
          </div>
        </div>

        {/* Safeguarding & Child Protection Statement */}
        <div className="py-6 border-b border-white/10 flex items-start gap-3 text-xs text-gold-100/80">
          <Shield className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Safeguarding & Protection Commitment:</strong> Shani Foundation operates with zero tolerance for child exploitation, abuse, sexual harassment, or discrimination. We adhere to rigorous child safeguarding protocols, transparent community accountability, and the Republic of Kenya Children Act guidelines across all our partner schools and centers.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gold-100/70">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Shani Foundation. All rights reserved.</span>
            <span>•</span>
            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline"
            >
              Governance & Safeguarding
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setActivePage('impact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white hover:underline"
            >
              Annual Audits & Reports
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-bold text-gold-500 hover:text-white transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
