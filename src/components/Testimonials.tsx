import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/workshopData';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-950 via-[#0a1228] to-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold tracking-wider text-orange-400 uppercase mb-2">
            Bukti Nyata Kepuasan Pelanggan
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apa Kata Pengendara di Serpong?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Reputasi kami dibangun atas dasar kejujuran dan hasil kerja mekanik yang memuaskan para pengendara setiap hari.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl border border-slate-800 bg-[#0d162d] flex flex-col justify-between shadow-lg shadow-black/40 hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Metadata: Zero-pill discipline */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="font-display text-sm font-bold text-white">
                  {t.name}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                  <span>{t.location}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-orange-400 font-medium">{t.motorcycle}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
