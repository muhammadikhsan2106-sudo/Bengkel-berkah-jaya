import React from 'react';
import { CheckCircle2, Clock, Wrench, ArrowRight, ShieldCheck, Cpu, Disc, Zap } from 'lucide-react';
import { SERVICE_DETAILS } from '../data/workshopData';

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const additionalServices = [
    {
      icon: Disc,
      title: 'Ganti Ban & Pentil Tubeless',
      desc: 'Bongkar pasang ban menggunakan mesin tire-changer hidrolik sehingga velg tidak lecet. Sedia IRC, Maxxis, FDR, Pirelli, Aspira.',
    },
    {
      icon: Zap,
      title: 'Diagnostik Scanner & Injeksi ECU',
      desc: 'Deteksi kode error sensor FI motor Honda, Yamaha, Suzuki menggunakan scanner digital. Reset sensor TPS dan kalibrasi otomatis.',
    },
    {
      icon: Wrench,
      title: 'Turun Mesin (Overhaul) & Korter',
      desc: 'Penanganan mesin ngebul putih, ganti seher/piston, stang seher, ganti klep, dan paking mesin dengan garansi pengerjaan rapi.',
    },
    {
      icon: ShieldCheck,
      title: 'Perbaikan Kaki-kaki & Suspensi',
      desc: 'Atasi stang berat (komstir oblak), shock jedug, ganti bearing roda bearing 6301/6202, dan setel kestabilan motor.',
    },
  ];

  return (
    <section id="layanan" className="relative py-16 lg:py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold tracking-wider text-orange-400 uppercase mb-2">
            Layanan Komprehensif
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Layanan Spesialis Bengkel Berkah Jaya
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Dari perawatan berkala harian hingga perbaikan mesin berat, kami menggunakan perlengkapan standar bengkel modern untuk memastikan motor Anda selalu prima.
          </p>
        </div>

        {/* 3 Main Detailed Featured Services with Photography */}
        <div className="space-y-8 mb-16">
          {SERVICE_DETAILS.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className="rounded-2xl border border-slate-800 bg-gradient-to-br from-[#0c1429] to-[#080d1a] overflow-hidden shadow-xl shadow-black/60 transition-all hover:border-slate-700"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative h-64 sm:h-72 lg:h-full min-h-[300px] overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 text-xs text-orange-400 font-semibold mb-2">
                      <span className="font-mono">0{index + 1}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{service.subtitle}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 mb-6">
                      {service.points.map((point) => (
                        <div key={point} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service Metadata Footer (No pills, clean unboxed typography) */}
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <div>
                          <span className="block text-[10px] text-slate-400">Interval:</span>
                          <span className="text-slate-200 font-medium">{service.recommendedInterval}</span>
                        </div>
                        <div className="h-6 w-px bg-slate-800" />
                        <div>
                          <span className="block text-[10px] text-slate-400">Waktu Servis:</span>
                          <span className="text-slate-200 font-medium">{service.estimatedTime}</span>
                        </div>
                        <div className="h-6 w-px bg-slate-800" />
                        <div>
                          <span className="block text-[10px] text-slate-400">Tarif:</span>
                          <span className="text-orange-400 font-bold">{service.startingPrice}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectService(service.title)}
                        className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-orange-600 border border-slate-700 hover:border-orange-500 rounded-lg transition-colors cursor-pointer"
                      >
                        <span>Pilih Layanan Ini</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Specialized Services Grid */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800">
            <h3 className="font-display text-lg font-bold text-white">
              Layanan Spesialisasi Lainnya
            </h3>
            <span className="text-xs text-slate-400">Tersedia Setiap Hari</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-3.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-display text-sm font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectService(item.title)}
                    className="mt-4 text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1 self-start cursor-pointer"
                  >
                    <span>Konsultasikan</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
