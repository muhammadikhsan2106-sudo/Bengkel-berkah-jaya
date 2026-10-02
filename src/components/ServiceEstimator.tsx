import React, { useState } from 'react';
import { Calculator, Check, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICE_ITEMS_ESTIMATOR, WORKSHOP_INFO } from '../data/workshopData';
import { MotorcycleCategory } from '../types';

interface ServiceEstimatorProps {
  onSelectServicesForContact: (messageText: string) => void;
}

export const ServiceEstimator: React.FC<ServiceEstimatorProps> = ({ onSelectServicesForContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<MotorcycleCategory>('matic-standard');
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'tune-up',
    'oli-mesin',
    'servis-cvt',
  ]);

  const categories = [
    {
      id: 'matic-standard' as MotorcycleCategory,
      label: 'Matic Standar 110–125cc',
      sublabel: 'Beat, Scoopy, Vario 125, Mio, Genio, Fazzio',
      multiplier: 1.0,
    },
    {
      id: 'matic-maxi' as MotorcycleCategory,
      label: 'Matic Maxi 150–160cc',
      sublabel: 'NMAX, PCX, Aerox, ADV 160, Lexi',
      multiplier: 1.15,
    },
    {
      id: 'bebek' as MotorcycleCategory,
      label: 'Bebek / Manual',
      sublabel: 'Supra X, Revo, Jupiter Z, Vega R',
      multiplier: 0.95,
    },
    {
      id: 'sport' as MotorcycleCategory,
      label: 'Sport / Kopling',
      sublabel: 'CBR150, CB150R, Vixion, R15, GSX, KLX',
      multiplier: 1.25,
    },
  ];

  const currentCategoryObj = categories.find((c) => c.id === selectedCategory) || categories[0];

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      setSelectedServiceIds(selectedServiceIds.filter((item) => item !== id));
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const calculateItemPrice = (basePrice: number) => {
    // If it's pure CVT service and motor is bebek/sport, clarify
    return Math.round(basePrice * currentCategoryObj.multiplier / 1000) * 1000;
  };

  const totalPrice = selectedServiceIds.reduce((sum, id) => {
    const item = SERVICE_ITEMS_ESTIMATOR.find((s) => s.id === id);
    if (!item) return sum;
    return sum + calculateItemPrice(item.price);
  }, 0);

  const totalDuration = selectedServiceIds.reduce((sum, id) => {
    const item = SERVICE_ITEMS_ESTIMATOR.find((s) => s.id === id);
    return sum + (item ? item.durationMinutes : 0);
  }, 0);

  const handleSendToContact = () => {
    const selectedNames = selectedServiceIds
      .map((id) => SERVICE_ITEMS_ESTIMATOR.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Halo Bengkel Berkah Jaya, saya ingin konsultasi estimasi servis motor:\n- Tipe Motor: ${currentCategoryObj.label}\n- Paket Servis Dipilih: ${selectedNames}\n- Estimasi Biaya: Rp ${totalPrice.toLocaleString('id-ID')}\nMohon info ketersediaan slot antreannya.`;

    onSelectServicesForContact(text);

    const contactEl = document.getElementById('kontak');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimasi" className="relative py-16 lg:py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold tracking-wider text-orange-400 uppercase mb-2">
            Transparansi Biaya Di Depan
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kalkulator Estimasi Biaya Servis
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Pilih tipe motor dan layanan yang Anda perlukan untuk melihat perkiraan biaya transparan tanpa markup tersembunyi.
          </p>
        </div>

        {/* Step 1: Category Selector */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 text-center sm:text-left">
            1. Pilih Kategori Kendaraan Anda
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-orange-500 bg-[#0e1a38] shadow-lg shadow-orange-950/30'
                      : 'border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm font-bold ${isSelected ? 'text-orange-400' : 'text-white'}`}>
                      {cat.label}
                    </span>
                    <span
                      className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-orange-500 bg-orange-500 text-white'
                          : 'border-slate-600'
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3" />}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{cat.sublabel}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Checklist of Services & Real-time Bill */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Checklist */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                2. Pilih Item Perawatan / Perbaikan
              </p>
              <button
                type="button"
                onClick={() => {
                  if (selectedServiceIds.length === SERVICE_ITEMS_ESTIMATOR.length) {
                    setSelectedServiceIds([]);
                  } else {
                    setSelectedServiceIds(SERVICE_ITEMS_ESTIMATOR.map((s) => s.id));
                  }
                }}
                className="text-xs text-orange-400 hover:text-orange-300 font-medium"
              >
                {selectedServiceIds.length === SERVICE_ITEMS_ESTIMATOR.length
                  ? 'Batalkan Semua'
                  : 'Pilih Semua Paket'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {SERVICE_ITEMS_ESTIMATOR.map((service) => {
                const isChecked = selectedServiceIds.includes(service.id);
                const calculatedPrice = calculateItemPrice(service.price);

                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                      isChecked
                        ? 'border-slate-600 bg-gradient-to-r from-[#0b152d] to-[#111f42]'
                        : 'border-slate-800/80 bg-slate-900/50 hover:bg-slate-900/80 hover:border-slate-700'
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                        isChecked
                          ? 'border-orange-500 bg-orange-500 text-white'
                          : 'border-slate-600 bg-slate-800'
                      }`}
                    >
                      {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-white truncate">
                          {service.name}
                        </span>
                        <span className="text-xs font-semibold text-orange-400 shrink-0 tabular-nums">
                          Rp {calculatedPrice.toLocaleString('id-ID')}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-400">
                        <span>Durasi: ±{service.durationMinutes} menit</span>
                        {service.isPopular && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-amber-400 font-medium">Banyak Dipilih</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Summary Receipt */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-2xl border border-slate-700/80 bg-gradient-to-b from-[#0c162f] to-[#0a1226] p-6 shadow-xl shadow-slate-950/80">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Ringkasan Estimasi
                </span>
                <span className="text-xs text-orange-400 font-medium">
                  {selectedServiceIds.length} Layanan
                </span>
              </div>

              <div className="mb-4">
                <span className="text-[11px] text-slate-400 block">Kategori Motor:</span>
                <span className="text-xs font-bold text-white block mt-0.5">
                  {currentCategoryObj.label}
                </span>
              </div>

              {/* Service list scrollable */}
              <div className="max-h-48 overflow-y-auto space-y-2 pr-1 mb-4 border-b border-slate-800 pb-4">
                {selectedServiceIds.length === 0 ? (
                  <p className="text-xs text-slate-400 py-3 text-center italic">
                    Belum ada layanan yang dipilih.
                  </p>
                ) : (
                  selectedServiceIds.map((id) => {
                    const item = SERVICE_ITEMS_ESTIMATOR.find((s) => s.id === id);
                    if (!item) return null;
                    return (
                      <div key={id} className="flex justify-between text-xs text-slate-300">
                        <span className="truncate pr-2">{item.name}</span>
                        <span className="shrink-0 tabular-nums font-medium text-slate-200">
                          Rp {calculateItemPrice(item.price).toLocaleString('id-ID')}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Complimentary multi-point check */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-4 text-[11px] text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>Gratis Cek 15 Titik Keamanan Motor</span>
                </div>
                <p className="text-slate-400 leading-tight">
                  Termasuk cek tekanan angin ban, baut roda, kampas rem, rantai, dan tegangan aki.
                </p>
              </div>

              {/* Total Row */}
              <div className="space-y-1 mb-5">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-slate-400">Estimasi Total Biaya:</span>
                  <span className="font-display text-2xl font-extrabold text-orange-400 tabular-nums">
                    Rp {totalPrice.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Estimasi Pengerjaan:</span>
                  <span className="tabular-nums text-slate-300 font-medium">±{totalDuration} Menit</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={handleSendToContact}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-950/60 transition-all text-xs cursor-pointer"
                >
                  <span>Pesan Servis Paket Ini</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href={`https://wa.me/${WORKSHOP_INFO.phoneRaw}?text=${encodeURIComponent(
                    `Halo Bengkel Berkah Jaya, saya ingin tanya paket servis: ${selectedServiceIds
                      .map((id) => SERVICE_ITEMS_ESTIMATOR.find((s) => s.id === id)?.name)
                      .filter(Boolean)
                      .join(', ')} dengan estimasi Rp ${totalPrice.toLocaleString('id-ID')}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-xs text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-slate-600 transition-colors"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Tanya Mekanik via WhatsApp</span>
                </a>
              </div>

              <p className="text-[10px] text-slate-400 text-center mt-3 leading-tight">
                *Estimasi transparan. Pengecekan riil dilakukan di depan Anda dan harga disetujui sebelum pengerjaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
