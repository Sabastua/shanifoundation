import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Smartphone, CreditCard, Building2, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { triggerLeafConfetti } from './motion/LeafConfetti';
import { useAnimationContext } from '../motion/hooks/useAnimationContext';

export default function DonateWidget({ isModal = false, onClose }) {
  const [frequency, setFrequency] = useState('one-time'); // 'one-time' | 'monthly'
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa'); // 'mpesa' | 'card' | 'bank'
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isReducedMotion } = useAnimationContext();

  const presets = [500, 1000, 2500];

  const currentAmount = customAmount ? Number(customAmount) : selectedAmount;

  const getImpactDescription = (amount) => {
    if (amount <= 500) {
      return "Provides a dignity kit with sanitary hygiene essentials for 1 schoolgirl, keeping her in school with confidence.";
    } else if (amount <= 1500) {
      return "Provides dignity packs and reproductive health literacy training for 2 adolescent girls in Nairobi informal settlements.";
    } else if (amount <= 3000) {
      return "Funds community climate seedling nurseries and youth environmental stewardship workshops for 10 community youth.";
    } else {
      return "Empowers a grassroots community cohort with menstrual health advocacy, youth leadership, and safeguarding education.";
    }
  };

  const handleAmountClick = (amt) => {
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    triggerLeafConfetti();
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-organic text-center border border-magenta-100 shadow-brand">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
          className="w-16 h-16 rounded-full bg-magenta-100 text-magenta-500 mx-auto flex items-center justify-center mb-5"
        >
          <Heart className="w-8 h-8 fill-magenta-500 text-magenta-500" />
        </motion.div>
        <span className="inline-block px-3 py-1 rounded-full bg-gold-100 text-ink-900 text-xs font-bold uppercase tracking-wider mb-2">
          Asante Sana • Thank You
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-plum-900 mb-3">
          Your Generosity Transforms Lives
        </h3>
        <p className="text-ink-600 text-sm sm:text-base max-w-md mx-auto mb-6">
          Thank you, {donorName || 'Champion'}! Your pledge of{' '}
          <strong className="text-plum-900">KES {currentAmount ? currentAmount.toLocaleString() : '1,000'}</strong> ({frequency}) creates tangible dignity and environmental resilience in our communities.
        </p>

        <div className="p-4 rounded-2xl bg-cream-50 border border-gold-500/30 text-left max-w-md mx-auto mb-6 text-xs text-ink-600 space-y-1">
          <p className="font-bold text-ink-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Next Steps for Mobile Money / Payment:</span>
          </p>
          <p>• If using M-Pesa, complete via Paybill <strong>[Add: Paybill]</strong> using Account <strong>SHANI</strong>.</p>
          <p>• Our team will send an official receipt and impact update to your details.</p>
        </div>

        <div className="text-plum-700 font-serif font-bold text-lg mb-6">
          "We Got You"
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            if (onClose) onClose();
          }}
          className="px-6 py-2.5 rounded-full bg-grad-brand text-white font-semibold text-sm hover:opacity-95 transition-opacity shadow-sm"
        >
          {isModal ? 'Close Window' : 'Make Another Pledge'}
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-organic border border-black/5 shadow-brand overflow-hidden ${isModal ? 'p-6 sm:p-8' : 'p-7 sm:p-9'}`}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-magenta-100 text-magenta-600 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-magenta-500 text-magenta-500" />
            <span>Support Our Work</span>
          </span>
          <span className="text-xs font-semibold text-gold-600 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-500/20">
            Nairobi, Kenya
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900 leading-snug">
          Invest in Dignity & Sustainability
        </h3>
        <p className="text-ink-600 text-xs sm:text-sm mt-1">
          Every contribution directly supports menstrual health kits, climate initiatives, and youth education.
        </p>
      </div>

      {/* Sliding Pill Indicator for One-Time / Monthly Toggle */}
      <div className="relative grid grid-cols-2 p-1 bg-cream-100 rounded-full mb-6 max-w-xs mx-auto border border-black/5">
        <button
          type="button"
          onClick={() => setFrequency('one-time')}
          className={`relative z-10 py-2 text-xs sm:text-sm font-bold transition-colors ${
            frequency === 'one-time' ? 'text-white' : 'text-ink-600 hover:text-ink-900'
          }`}
        >
          One-Time Gift
        </button>
        <button
          type="button"
          onClick={() => setFrequency('monthly')}
          className={`relative z-10 py-2 text-xs sm:text-sm font-bold transition-colors ${
            frequency === 'monthly' ? 'text-white' : 'text-ink-600 hover:text-ink-900'
          }`}
        >
          Monthly Support ✨
        </button>

        {/* Sliding Pill Indicator with softSpring */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="absolute inset-y-1 rounded-full bg-grad-brand shadow-xs"
          style={{
            left: frequency === 'one-time' ? '4px' : '50%',
            right: frequency === 'one-time' ? '50%' : '4px',
          }}
        />
      </div>

      {/* Preset Amounts in KES with Animated Gradient Slide-in */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-2.5">
          Select Amount (KES)
        </label>
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-3">
          {presets.map((amt) => {
            const isSelected = selectedAmount === amt && !customAmount;
            return (
              <button
                key={amt}
                type="button"
                onClick={() => handleAmountClick(amt)}
                className={`relative overflow-hidden py-3 px-2 sm:px-4 rounded-2xl font-bold text-sm sm:text-base border transition-all duration-200 ${
                  isSelected
                    ? 'border-magenta-500 text-white shadow-xs'
                    : 'border-black/10 bg-cream-50/60 text-ink-900 hover:border-magenta-500/40 hover:bg-white'
                }`}
              >
                {/* Sliding Gradient Background */}
                <motion.div
                  initial={false}
                  animate={{
                    x: isSelected ? '0%' : '-100%',
                    opacity: isSelected ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-grad-brand -z-0"
                />

                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <span>KES {amt.toLocaleString()}</span>
                  {isSelected && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 250 }}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </motion.span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Custom amount field */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs font-bold text-ink-600">
            KES
          </span>
          <input
            type="number"
            min="100"
            step="100"
            placeholder="Or enter custom amount (KES)"
            value={customAmount}
            onChange={handleCustomChange}
            className="w-full pl-14 pr-4 py-3 rounded-2xl border border-black/10 bg-white text-sm font-semibold text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20"
          />
        </div>
      </div>

      {/* "What your gift does" Explainer Box with Crossfade & Odometer Feel */}
      <div className="mb-6 p-4 rounded-2xl bg-gold-50/70 border border-gold-500/25 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-ink-900 overflow-hidden">
          <span className="font-bold text-gold-600 uppercase tracking-wide text-[11px] block mb-0.5">
            What your gift of KES {currentAmount ? currentAmount.toLocaleString() : '1,000'} does:
          </span>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentAmount}
              initial={isReducedMotion ? {} : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={isReducedMotion ? {} : { opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="leading-relaxed"
            >
              {getImpactDescription(currentAmount)}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Payment Options Placeholder & Tabs */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-2.5">
          Select Payment Method
        </label>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <button
            type="button"
            onClick={() => setPaymentMethod('mpesa')}
            className={`py-2.5 px-2 rounded-xl flex flex-col items-center justify-center gap-1 border text-xs font-bold transition-all ${
              paymentMethod === 'mpesa'
                ? 'border-leaf-600 bg-leaf-100/40 text-forest-800 ring-2 ring-leaf-600/20'
                : 'border-black/10 bg-white text-ink-600 hover:bg-cream-50'
            }`}
          >
            <Smartphone className="w-4 h-4 text-leaf-600" />
            <span>M-Pesa</span>
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`py-2.5 px-2 rounded-xl flex flex-col items-center justify-center gap-1 border text-xs font-bold transition-all ${
              paymentMethod === 'card'
                ? 'border-magenta-500 bg-magenta-50 text-plum-900 ring-2 ring-magenta-500/20'
                : 'border-black/10 bg-white text-ink-600 hover:bg-cream-50'
            }`}
          >
            <CreditCard className="w-4 h-4 text-magenta-500" />
            <span>Card</span>
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('bank')}
            className={`py-2.5 px-2 rounded-xl flex flex-col items-center justify-center gap-1 border text-xs font-bold transition-all ${
              paymentMethod === 'bank'
                ? 'border-plum-700 bg-cream-100 text-plum-900 ring-2 ring-plum-700/20'
                : 'border-black/10 bg-white text-ink-600 hover:bg-cream-50'
            }`}
          >
            <Building2 className="w-4 h-4 text-plum-700" />
            <span>Bank Wire</span>
          </button>
        </div>

        {paymentMethod === 'mpesa' && (
          <div className="p-4 rounded-2xl bg-cream-50 border border-leaf-600/30 text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-black/5 pb-2">
              <span className="text-ink-600">Paybill / Till Number:</span>
              <span className="font-mono font-bold text-forest-800 bg-leaf-100 px-2 py-0.5 rounded">
                [Add: M-Pesa Paybill / Till Number]
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-black/5 pb-2">
              <span className="text-ink-600">Account Reference:</span>
              <span className="font-mono font-bold text-ink-900">
                SHANI or Your Name
              </span>
            </div>
            <p className="text-[11px] text-ink-600 italic">
              Go to Lipa na M-Pesa &gt; Paybill &gt; Enter number above &gt; Enter amount &gt; Confirm PIN.
            </p>
          </div>
        )}

        {paymentMethod === 'card' && (
          <div className="p-4 rounded-2xl bg-cream-50 border border-magenta-500/20 text-xs space-y-2.5">
            <div className="p-2.5 rounded-lg bg-magenta-100/50 border border-magenta-500/20 text-[11px] font-mono text-plum-900">
              ⚡ [Integration Point: Paystack / Flutterwave / Stripe API connector]
            </div>
            <p className="text-ink-600 text-[11px]">
              Accepts Visa, Mastercard, and international debit/credit cards securely.
            </p>
          </div>
        )}

        {paymentMethod === 'bank' && (
          <div className="p-4 rounded-2xl bg-cream-50 border border-plum-700/20 text-xs space-y-1.5">
            <p className="text-ink-600">
              Bank Name: <strong className="font-mono text-plum-900">[Add: Bank Name e.g. KCB / Equity]</strong>
            </p>
            <p className="text-ink-600">
              Account Name: <strong>Shani Foundation</strong>
            </p>
            <p className="text-ink-600">
              Account No: <strong className="font-mono text-plum-900">[Add: Account Number]</strong>
            </p>
            <p className="text-ink-600">
              Branch: Nairobi, Kenya | Swift: <strong className="font-mono">[Add: Swift Code]</strong>
            </p>
          </div>
        )}
      </div>

      {/* Donor Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="block text-xs font-bold text-ink-700 mb-1">
            Your Name (Optional or for acknowledgment)
          </label>
          <input
            type="text"
            placeholder="e.g. Amani Mwangi"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white text-xs sm:text-sm focus:outline-none focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-ink-700 mb-1">
            Phone / Email (For official receipt)
          </label>
          <input
            type="text"
            required
            placeholder="+254 7XX XXX XXX or name@example.com"
            value={donorPhone}
            onChange={(e) => setDonorPhone(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-white text-xs sm:text-sm focus:outline-none focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20"
          />
        </div>

        {/* Reassuring Transparency Note */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-cream-100 border border-black/5 text-[11px] text-ink-600 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-leaf-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Transparency Pledge:</strong> 100% of public gifts fund community programs in Nairobi. Shani Foundation adheres strictly to Kenyan NGO regulatory standards, safeguarding, and transparent annual audits.
          </span>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3.5 rounded-full bg-grad-brand hover:opacity-95 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-brand transition-all duration-200"
        >
          <Heart className="w-4 h-4 fill-white" />
          <span>
            Proceed with KES {currentAmount ? currentAmount.toLocaleString() : '1,000'} ({frequency})
          </span>
        </motion.button>
      </form>
    </div>
  );
}
