import React from 'react';
import { Wrench, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060b17] text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white">
                <Wrench className="h-4 w-4" />
              </span>
              <span>BERKAH JAYA MOTOR</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              Bengkel Perawatan & Perbaikan Kendaraan (Motor) terpercaya, jujur, cepat, dan profesional di Serpong, Tangerang Selatan.
            </p>
            <p className="text-orange-400 text-[11px] font-medium">
              Prinsip Kami: Konfirmasi di Depan, Part Lama Dikembalikan.
            </p>
          </div>

          {/* Col 2: Alamat & Kontak */}
          <div className="space-y-2">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Lokasi Bengkel
            </h4>
            <div className="flex items-start gap-2 text-slate-300 text-[11px] leading-relaxed">
              <MapPin className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <span>{WORKSHOP_INFO.address.full}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-[11px] pt-1">
              <Phone className="h-4 w-4 text-orange-400 shrink-0" />
              <a href={`tel:${WORKSHOP_INFO.phoneRaw}`} className="hover:text-white transition-colors tabular-nums">
                {WORKSHOP_INFO.phone}
              </a>
            </div>
          </div>

          {/* Col 3: Jam Kerja */}
          <div className="space-y-2">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Jam Operasional
            </h4>
            <div className="flex items-start gap-2 text-slate-300 text-[11px]">
              <Clock className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{WORKSHOP_INFO.operatingHours.days}</p>
                <p className="tabular-nums text-slate-400 mt-0.5">{WORKSHOP_INFO.operatingHours.time}</p>
                <p className="text-emerald-400 mt-1">Hari Libur & Minggu Tetap Buka</p>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Nav & Back to Top */}
          <div className="space-y-2">
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="#layanan" className="hover:text-orange-400 transition-colors">
                  Layanan & Suku Cadang
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-orange-400 transition-colors">
                  Keunggulan & SOP Transparan
                </a>
              </li>
              <li>
                <a href="#estimasi" className="hover:text-orange-400 transition-colors">
                  Kalkulator Estimasi Biaya
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-orange-400 transition-colors">
                  Formulir Kontak & Booking
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-orange-400 transition-colors">
                  Peta Lokasi & Rute
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Bengkel Berkah Jaya. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Buaran, Serpong, Tangerang Selatan</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Kembali ke atas"
            >
              <span>Atas</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
