import React from 'react';
import RibbonLabel from '../components/RibbonLabel';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <RibbonLabel variant="plum" className="mb-4">
          CONTACT US
        </RibbonLabel>
        <h1 className="font-serif font-bold text-plum-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
          Let’s Connect & Collaborate
        </h1>
        <p className="text-ink-600 text-base sm:text-lg mt-4 leading-relaxed">
          Reach our Nairobi headquarters team directly for project inquiries, dignity kit sponsorships, volunteer opportunities, and partnerships.
        </p>
      </div>

      {/* Main Interactive Contact Section */}
      <ContactForm />
    </div>
  );
}
