import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import DonateWidget from './DonateWidget';

export default function DonateModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-plum-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-donate-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-organic-lg shadow-2xl overflow-hidden animate-scaleUp my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cream-100 text-ink-900 hover:bg-magenta-100 transition-colors"
          aria-label="Close donation modal"
        >
          <X className="w-5 h-5" />
        </button>

        <DonateWidget isModal={true} onClose={onClose} />
      </div>
    </div>
  );
}
