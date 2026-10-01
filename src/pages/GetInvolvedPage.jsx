import React, { useState } from 'react';
import { Heart, Users, Globe, Send, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import RibbonLabel from '../components/RibbonLabel';
import DonateWidget from '../components/DonateWidget';
import confetti from 'canvas-confetti';

export default function GetInvolvedPage({ onOpenDonate, setActivePage }) {
  const [activeTab, setActiveTab] = useState('donate'); // 'donate' | 'volunteer' | 'partner'

  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Menstrual Health Outreaches',
    availability: 'Weekends',
    message: '',
  });
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  // Partner form state
  const [partnerForm, setPartnerForm] = useState({
    organization: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnerType: 'Corporate CSR',
    proposal: '',
  });
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {}
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    setPartnerSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {}
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <RibbonLabel variant="plum" className="mb-4">
          TAKE ACTION
        </RibbonLabel>
        <h1 className="font-serif font-bold text-plum-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
          Join Hands With Us
        </h1>
        <p className="text-ink-600 text-base sm:text-lg mt-4 leading-relaxed">
          Community transformation is built on solidarity. Choose how you want to make an impact today.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-full bg-cream-100 border border-black/5 max-w-md w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('donate')}
            className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'donate'
                ? 'bg-magenta-500 text-white shadow-xs'
                : 'text-ink-600 hover:text-ink-900'
            }`}
          >
            1. Donate / Sponsor
          </button>
          <button
            onClick={() => setActiveTab('volunteer')}
            className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'volunteer'
                ? 'bg-plum-700 text-white shadow-xs'
                : 'text-ink-600 hover:text-ink-900'
            }`}
          >
            2. Volunteer Time
          </button>
          <button
            onClick={() => setActiveTab('partner')}
            className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'partner'
                ? 'bg-forest-800 text-white shadow-xs'
                : 'text-ink-600 hover:text-ink-900'
            }`}
          >
            3. Corporate / Partner
          </button>
        </div>
      </div>

      {/* Tab 1: Donate Widget View */}
      {activeTab === 'donate' && (
        <div className="max-w-2xl mx-auto">
          <DonateWidget isModal={false} />
        </div>
      )}

      {/* Tab 2: Volunteer Application */}
      {activeTab === 'volunteer' && (
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-organic border border-black/5 shadow-brand">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-gold-100 text-gold-600 mx-auto flex items-center justify-center mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">
              Become a Shani Volunteer
            </h2>
            <p className="text-ink-600 text-xs sm:text-sm mt-1">
              Lend your skills in school distributions, environmental planting days, youth mentorship, or logistics.
            </p>
          </div>

          {volunteerSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-leaf-100 text-leaf-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ink-900">
                Application Received!
              </h3>
              <p className="text-ink-600 text-sm max-w-md mx-auto">
                Thank you for offering your hands and heart, <strong>{volunteerForm.name}</strong>. Our volunteer coordinator will reach out to invite you to our next orientation session in Nairobi.
              </p>
              <div className="text-plum-700 font-serif font-bold">
                "We Got You"
              </div>
            </div>
          ) : (
            <form onSubmit={handleVolunteerSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Gitonga"
                  value={volunteerForm.name}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:border-plum-700 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:border-plum-700 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 7XX XXX XXX"
                    value={volunteerForm.phone}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:border-plum-700 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                    Primary Area of Interest
                  </label>
                  <select
                    value={volunteerForm.interest}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm bg-white focus:border-plum-700 outline-none"
                  >
                    <option value="Menstrual Health Outreaches">Menstrual Health Outreaches</option>
                    <option value="Youth Mentorship & Training">Youth Mentorship & Training</option>
                    <option value="Tree Planting & Climate Care">Tree Planting & Climate Care</option>
                    <option value="Event Logistics & Photography">Event Logistics & Photography</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                    Availability
                  </label>
                  <select
                    value={volunteerForm.availability}
                    onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm bg-white focus:border-plum-700 outline-none"
                  >
                    <option value="Weekends">Weekends</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Flexible / As Needed">Flexible / As Needed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                  Why would you like to volunteer with Shani Foundation?
                </label>
                <textarea
                  rows={3}
                  value={volunteerForm.message}
                  onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                  placeholder="Share a short note on your motivation or past experience..."
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:border-plum-700 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-plum-700 hover:bg-plum-800 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Volunteer Application</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* Tab 3: Partnership & CSR */}
      {activeTab === 'partner' && (
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-organic border border-black/5 shadow-brand">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-leaf-100 text-leaf-600 mx-auto flex items-center justify-center mb-3">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink-900">
              Partner With Shani Foundation
            </h2>
            <p className="text-ink-600 text-xs sm:text-sm mt-1">
              Collaborate on institutional CSR, philanthropic grants, or joint community sustainability programs.
            </p>
          </div>

          {partnerSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-forest-800 text-white mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ink-900">
                Partnership Inquiry Submitted!
              </h3>
              <p className="text-ink-600 text-sm max-w-md mx-auto">
                Thank you, <strong>{partnerForm.contactPerson}</strong> representing <strong>{partnerForm.organization}</strong>. Our partnerships director will review your proposal and get in touch within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                  Organization / Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Corp Ltd or Global Foundation"
                  value={partnerForm.organization}
                  onChange={(e) => setPartnerForm({ ...partnerForm, organization: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:border-forest-800 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Omondi"
                    value={partnerForm.contactPerson}
                    onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:border-forest-800 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partnerships@company.com"
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:border-forest-800 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                  Collaboration Area
                </label>
                <select
                  value={partnerForm.partnerType}
                  onChange={(e) => setPartnerForm({ ...partnerForm, partnerType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm bg-white focus:border-forest-800 outline-none"
                >
                  <option value="Corporate CSR Sponsorship">Corporate CSR Sponsorship</option>
                  <option value="Institutional Philanthropic Grant">Institutional Philanthropic Grant</option>
                  <option value="School Tree Planting Co-Sponsor">School Tree Planting Co-Sponsor</option>
                  <option value="Dignity Kit In-Kind Supply">Dignity Kit In-Kind Supply</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                  Proposal or Objectives Overview
                </label>
                <textarea
                  rows={3}
                  value={partnerForm.proposal}
                  onChange={(e) => setPartnerForm({ ...partnerForm, proposal: e.target.value })}
                  placeholder="Outline your organization's goals, geographic focus, or timeline..."
                  className="w-full px-4 py-2.5 rounded-xl border border-black/10 text-sm focus:border-forest-800 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-forest-800 hover:bg-forest-900 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Partnership Proposal</span>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
