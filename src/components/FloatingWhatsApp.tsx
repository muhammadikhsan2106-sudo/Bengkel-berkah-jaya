import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Small popover message */}
      {showTooltip && (
        <div className="mb-2 relative flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/95 py-2 px-3 text-xs text-white shadow-xl backdrop-blur-md animate-fade-in max-w-xs">
          <div>
            <p className="font-semibold text-orange-400">Butuh Konsultasi Motor?</p>
            <p className="text-[11px] text-slate-300">Hubungi mekanik Berkah Jaya via WA</p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Tutup notifikasi"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${WORKSHOP_INFO.phoneRaw}?text=${encodeURIComponent(
          'Halo Bengkel Berkah Jaya, saya ingin konsultasi mengenai servis/perbaikan motor saya.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-950/70 transition-all hover:scale-110 active:scale-95 border-2 border-emerald-400/40"
        aria-label="Chat WhatsApp Bengkel Berkah Jaya"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
};
