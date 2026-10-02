import React from 'react';
import { ArrowRight, Calculator, ShieldCheck, Clock, CheckCircle2, Wrench } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToEstimator }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-orange-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-blue-700/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-orange-400 uppercase">
              <span>Bengkel Motor Serpong</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Buaran, Tangerang Selatan</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400">Buka Setiap Hari</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Perawatan & Perbaikan Motor{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
                Terpercaya, Jujur, & Cepat.
              </span>
            </h1>

            {/* Value Proposition Prose */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Bengkel motor spesialis harian di Jl. Kp Buaran Serpong. Ditangani mekanik berpengalaman
              dengan transparansi biaya penuh di awal, tanpa ganti part sembarangan, pengerjaan cepat,
              dan garansi servis nyata.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="group flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-lg shadow-orange-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Konsultasi & Jadwal Servis</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={onScrollToEstimator}
                className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all cursor-pointer"
              >
                <Calculator className="h-4 w-4 text-orange-400" />
                <span>Cek Estimasi Biaya</span>
              </button>
            </div>

            {/* Claim-to-Proof Adjacency Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="font-display text-2xl font-bold text-white tabular-nums">4.9<span className="text-orange-400 text-lg">/5</span></p>
                <p className="text-xs text-slate-400 mt-0.5">Rating Kepuasan</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white tabular-nums">8.500<span className="text-orange-400 text-lg">+</span></p>
                <p className="text-xs text-slate-400 mt-0.5">Motor Tertangani</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white">100<span className="text-orange-400 text-lg">%</span></p>
                <p className="text-xs text-slate-400 mt-0.5">Oli & Part Asli</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white tabular-nums">14 <span className="text-orange-400 text-sm font-normal">Hari</span></p>
                <p className="text-xs text-slate-400 mt-0.5">Garansi Pengerjaan</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/80 bg-slate-900 group">
              <img
                src="/src/assets/images/hero_motorcycle_workshop_1790958589805.jpg"
                alt="Bengkel Motor Berkah Jaya Serpong dengan perlengkapan modern dan mekanik profesional"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Verified workshop badge inside image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/70 text-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-orange-400" />
                    Bengkel Berkah Jaya Serpong
                  </span>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Siap Layani Hari Ini
                  </span>
                </div>
                <p className="text-slate-300 text-[11px] leading-snug">
                  {WORKSHOP_INFO.address.full}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Brand Pillars (Terpercaya, Jujur, Cepat, Profesional) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WORKSHOP_INFO.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="relative p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900/90 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-semibold text-orange-400">0{idx + 1}</span>
                <span className="text-[11px] font-medium text-slate-400">{pillar.tagline}</span>
              </div>
              <h3 className="font-display text-base font-bold text-white mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
