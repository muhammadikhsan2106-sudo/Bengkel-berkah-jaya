import React, { useMemo } from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, ShieldCheck, AlertTriangle } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export const LocationHours: React.FC = () => {
  // Real-time calculation of open status
  const { isOpen, currentStatusText } = useMemo(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const open = currentHour >= WORKSHOP_INFO.operatingHours.openHour && currentHour < WORKSHOP_INFO.operatingHours.closeHour;
    return {
      isOpen: open,
      currentStatusText: open
        ? `Buka Sekarang (Tutup Pukul ${WORKSHOP_INFO.operatingHours.closeHour}:00 WIB)`
        : `Tutup Sekarang (Buka Besok Pukul 0${WORKSHOP_INFO.operatingHours.openHour}:00 WIB)`,
    };
  }, []);

  return (
    <section id="lokasi" className="relative py-16 lg:py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold tracking-wider text-orange-400 uppercase mb-2">
            Kunjungi Bengkel Kami
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lokasi & Jam Operasional
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Akses mudah di jalan utama Buaran Serpong, area parkir motor luas dan ruang tunggu nyaman.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Workshop Details & Schedule */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-gradient-to-br from-[#0c152d] to-[#080f21] p-6 sm:p-8 shadow-xl">
            <div className="space-y-6">
              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/90 text-xs">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
                  }`}
                />
                <span className={isOpen ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                  {currentStatusText}
                </span>
              </div>

              {/* Address */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Alamat Lengkap
                </span>
                <p className="font-display text-lg font-bold text-white leading-snug">
                  {WORKSHOP_INFO.address.street}
                </p>
                <p className="text-xs text-slate-300">
                  {WORKSHOP_INFO.address.district}, {WORKSHOP_INFO.address.city}
                </p>
                <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                  <span className="font-medium text-slate-300">Patokan:</span> {WORKSHOP_INFO.address.landmark}
                </p>
              </div>

              {/* Schedule Table */}
              <div className="border-t border-slate-800 pt-4 space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Jadwal Buka
                </span>
                <div className="flex justify-between items-center text-xs py-1 border-b border-slate-800/60">
                  <span className="text-slate-300">Senin – Jumat</span>
                  <span className="font-semibold text-white tabular-nums">08:00 – 18:00 WIB</span>
                </div>
                <div className="flex justify-between items-center text-xs py-1 border-b border-slate-800/60">
                  <span className="text-slate-300">Sabtu</span>
                  <span className="font-semibold text-white tabular-nums">08:00 – 18:00 WIB</span>
                </div>
                <div className="flex justify-between items-center text-xs py-1">
                  <span className="text-orange-400 font-medium">Minggu (Tetap Buka)</span>
                  <span className="font-semibold text-white tabular-nums">08:00 – 18:00 WIB</span>
                </div>
              </div>

              {/* Contact numbers */}
              <div className="border-t border-slate-800 pt-4 space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Kontak Langsung
                </span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={`tel:${WORKSHOP_INFO.phoneRaw}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-xs font-semibold text-white transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-orange-400" />
                    <span className="tabular-nums">{WORKSHOP_INFO.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${WORKSHOP_INFO.phoneRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency Hotline Alert */}
            <div className="mt-6 p-3.5 rounded-xl border border-orange-500/30 bg-orange-950/20 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-bold text-orange-400 mb-1">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                <span>Bantuan Motor Mogok di Area Buaran/Serpong?</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Jika motor Anda mogok di sekitar radius 3 km dari Buaran / Serpong, mekanik kami bisa dipanggil untuk pengecekan awal atau penjemputan.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Map Mockup & Navigation Directions */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-700/80 bg-slate-900/90 overflow-hidden shadow-2xl flex flex-col">
            {/* Visual Map Header */}
            <div className="p-4 bg-[#0a1226] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>Peta Area Bengkel Berkah Jaya</span>
              </div>
              <a
                href={WORKSHOP_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-semibold"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Stylized Map View with Dark Automotive Styling */}
            <div className="relative flex-1 min-h-[300px] bg-[#0c1427] flex items-center justify-center p-6 overflow-hidden">
              {/* Decorative Map Grid & Roads */}
              <div className="absolute inset-0 opacity-20 bg-metallic-grid" />
              
              {/* Simulated Map Graphic Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50,80 Q200,60 400,120 T900,100" fill="none" stroke="#64748b" strokeWidth="6" />
                <path d="M120,-30 Q180,180 220,400" fill="none" stroke="#475569" strokeWidth="8" />
                <path d="M300,-10 L300,450" fill="none" stroke="#94a3b8" strokeWidth="12" strokeDasharray="6,4" />
                <path d="M-20,240 Q350,220 800,280" fill="none" stroke="#f97316" strokeWidth="4" />
              </svg>

              {/* Central Pin Card */}
              <div className="relative z-10 p-5 rounded-2xl border border-orange-500/40 bg-slate-950/95 backdrop-blur-md shadow-2xl max-w-sm text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-lg shadow-orange-950 mb-3 animate-bounce">
                  <Navigation className="h-6 w-6" />
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  Bengkel Berkah Jaya
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Jl. Kp Buaran RT02/007 Buaran, Kec. Serpong, Kota Tangerang Selatan
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-center gap-3">
                  <a
                    href={WORKSHOP_INFO.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Petunjuk Arah Rute</span>
                    <Navigation className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Time References */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <p className="text-[10px] text-slate-400">Dari BSD City</p>
                <p className="font-bold text-slate-200 mt-0.5 tabular-nums">± 7 Menit</p>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <p className="text-[10px] text-slate-400">Dari Viktor Serpong</p>
                <p className="font-bold text-slate-200 mt-0.5 tabular-nums">± 4 Menit</p>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <p className="text-[10px] text-slate-400">Dari Stasiun Rawa Buntu</p>
                <p className="font-bold text-slate-200 mt-0.5 tabular-nums">± 10 Menit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
