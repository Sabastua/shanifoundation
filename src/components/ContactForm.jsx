import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const topics = [
    'General Inquiry',
    'Menstrual Health & Dignity Kits',
    'Women & Youth Empowerment Programs',
    'Climate Action & Tree Planting',
    'Child Protection & Safeguarding',
    'Partnership & CSR Collaboration',
    'Volunteering & Community Outreach',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // Ignore
    }
  };

  const whatsappUrl = `https://wa.me/254119575385?text=${encodeURIComponent(
    `Hello Shani Foundation, my name is ${formData.name || 'a supporter'}. I would like to inquire about ${formData.topic}.`
  )}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      {/* Left side: Contact Details, WhatsApp CTA, Microcopy */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-magenta-100 text-magenta-600 text-xs font-bold uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink-900 leading-tight">
            We Would Love to Hear From You.
          </h2>
          <p className="text-ink-600 text-sm sm:text-base mt-2">
            Whether you want to partner with us, sponsor dignity packs, volunteer your skills, or learn more about our work in Nairobi, our doors are open.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-black/5 shadow-brand">
            <div className="w-11 h-11 rounded-xl bg-magenta-100 text-magenta-500 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink-600">Headquarters</h4>
              <p className="text-sm sm:text-base font-bold text-ink-900">Nairobi, Kenya</p>
              <p className="text-xs text-ink-600">Active grassroots interventions across Kenyan communities</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-black/5 shadow-brand">
            <div className="w-11 h-11 rounded-xl bg-gold-100 text-gold-600 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink-600">Phone & SMS</h4>
              <a
                href="tel:+254119575385"
                className="text-sm sm:text-base font-bold text-ink-900 hover:text-plum-700 transition-colors"
              >
                +254 119575385
              </a>
              <p className="text-xs text-ink-600">Monday - Friday, 8:00 AM - 5:00 PM EAT</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-black/5 shadow-brand">
            <div className="w-11 h-11 rounded-xl bg-leaf-100 text-leaf-600 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink-600">Email Inquiries</h4>
              <a
                href="mailto:shanifoundation231@gmail.com"
                className="text-sm sm:text-base font-bold text-ink-900 hover:text-plum-700 transition-colors break-all"
              >
                shanifoundation231@gmail.com
              </a>
              <p className="text-xs text-ink-600">Direct response from our coordinating team</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Click-to-Chat Button */}
        <div className="p-5 rounded-2xl bg-[#E7F8ED] border border-[#25D366]/30 text-ink-900">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm text-[#0F602B]">Quick WhatsApp Connect</span>
          </div>
          <p className="text-xs text-ink-600 mb-3 leading-relaxed">
            Need an immediate response? Chat directly with the Shani Foundation community desk on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp (+254 119575385)</span>
          </a>
        </div>

        {/* Response-time microcopy */}
        <div className="flex items-center gap-2 text-xs text-ink-600 px-1">
          <Clock className="w-4 h-4 text-plum-700 flex-shrink-0" />
          <span>
            <strong>Response time:</strong> We typically respond to email messages within 24 to 48 business hours.
          </span>
        </div>
      </div>

      {/* Right side: Interactive Form or Success */}
      <div className="lg:col-span-7">
        <div className="bg-white p-7 sm:p-9 rounded-organic border border-black/5 shadow-brand">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-leaf-100 text-leaf-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ink-900">
                Message Received!
              </h3>
              <p className="text-ink-600 text-sm sm:text-base max-w-md mx-auto">
                Thank you for contacting Shani Foundation, <strong>{formData.name}</strong>. A member of our team will review your inquiry regarding <strong>{formData.topic}</strong> and get back to you shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      topic: 'General Inquiry',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full border border-plum-700/30 text-plum-700 text-sm font-semibold hover:bg-magenta-50"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1.5">
                    Your Full Name <span className="text-magenta-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Wanjiku Muthoni"
                    className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm font-medium focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1.5">
                    Email Address <span className="text-magenta-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. wanjiku@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm font-medium focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm font-medium focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1.5">
                    Topic of Interest <span className="text-magenta-500">*</span>
                  </label>
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm font-medium bg-white focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 outline-none"
                  >
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1.5">
                  Your Message <span className="text-magenta-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details on how you would like to connect or collaborate..."
                  className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm font-medium focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-magenta-500 hover:bg-magenta-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Shani Foundation</span>
              </button>
            </form>
          )}

          {/* Embedded Nairobi Map Location */}
          <div className="mt-8 pt-6 border-t border-cream-100">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink-600 mb-3">
              <span>Location: Nairobi, Kenya</span>
              <span className="text-leaf-600 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                Active Field Work
              </span>
            </div>
            <div className="w-full h-44 rounded-2xl overflow-hidden border border-black/10 bg-cream-100 relative">
              <iframe
                title="Nairobi, Kenya Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.52843799636!2d36.75704174092285!3d-1.303187425126857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(95%) saturate(90%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
