import React, { useState } from 'react';
import { Send, Phone, User, MessageSquare, CheckCircle2, AlertCircle, Clock, MapPin, Sparkles } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

interface ContactFormProps {
  initialMessage?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: initialMessage,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionTime, setSubmissionTime] = useState<string>('');

  const quickPresets = [
    'Tanya biaya servis CVT & ganti oli mesin',
    'Mau jadwal servis berkala besok pagi',
    'Motor tarikannya brebet & suka mati mendadak',
    'Cek kondisi kelistrikan & aki motor',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nama minimal 2 karakter';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor telepon / WhatsApp wajib diisi';
    } else {
      const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 9 || cleanPhone.length > 15) {
        newErrors.phone = 'Masukkan nomor telepon valid (contoh: 08123456789)';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan pertanyaan atau permintaan servis wajib diisi';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Pesan terlalu singkat (minimal 5 karakter)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
    setSubmissionTime(timeString);
    setIsSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Bengkel Berkah Jaya,\nSaya: ${formData.name}\nNo Telp: ${formData.phone}\nPesan / Permintaan Servis:\n${formData.message}`
    );
    const waUrl = `https://wa.me/${WORKSHOP_INFO.phoneRaw}?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: '', phone: '', message: '' });
    setErrors({});
  };

  return (
    <section id="kontak" className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-950 via-[#0a1226] to-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-wider text-orange-400 uppercase mb-2">
            Konsultasi & Permintaan Jadwal
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hubungi Bengkel Berkah Jaya
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Ada pertanyaan seputar keluhan motor atau ingin memastikan antrean servis? Isi formulir di bawah ini,
            tim kami akan merespons cepat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Card: Biru Navy & Grey Metalik Theme */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-700/80 bg-gradient-to-br from-[#0c162f] to-[#121f42] p-6 sm:p-8 shadow-xl shadow-slate-950/80">
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Layanan Cepat & Tanggap
            </h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Mekanik kami siap memberikan konsultasi gratis perihal estimasi pengerjaan, ketersediaan suku cadang,
              dan diagnosis awal keluhan motor Anda.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-700/60 bg-slate-900/60">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Nomor Telepon & WhatsApp</p>
                  <p className="text-sm font-semibold text-white mt-0.5 tabular-nums">
                    {WORKSHOP_INFO.phone}
                  </p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Respon cepat via WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-700/60 bg-slate-900/60">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Jam Operasional</p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {WORKSHOP_INFO.operatingHours.days}
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5 tabular-nums">
                    {WORKSHOP_INFO.operatingHours.time}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-slate-700/60 bg-slate-900/60">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-600/20 border border-slate-600/40 text-slate-300">
                  <MapPin className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Alamat Bengkel</p>
                  <p className="text-xs font-medium text-slate-200 mt-0.5 leading-relaxed">
                    {WORKSHOP_INFO.address.full}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/70">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Sparkles className="h-4 w-4 text-orange-400 shrink-0" />
                <span>Tanpa biaya pendaftaran. Estimasi dan konsultasi gratis!</span>
              </div>
            </div>
          </div>

          {/* Right Form Card: Formulir Kontak Sederhana */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-700/90 bg-[#0b1429] p-6 sm:p-8 shadow-2xl shadow-black/80">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="font-display text-lg font-bold text-white">
                    Formulir Kontak & Permintaan Servis
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Silakan isi Nama, Nomor Telepon, dan Pesan Anda di bawah ini:
                  </p>
                </div>

                {/* Field 1: Nama */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Nama Lengkap <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Rian Prasetyo"
                      className={`w-full pl-10 pr-4 py-2.5 bg-slate-900/90 text-white placeholder-slate-500 text-sm rounded-xl border ${
                        errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-700 focus:border-orange-500 focus:ring-orange-500/20'
                      } focus:outline-none focus:ring-2 transition-all`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Field 2: Nomor Telepon */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Nomor Telepon / WhatsApp <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      type="tel"
                      id="contact-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Contoh: 081234567890"
                      className={`w-full pl-10 pr-4 py-2.5 bg-slate-900/90 text-white placeholder-slate-500 text-sm rounded-xl border ${
                        errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-700 focus:border-orange-500 focus:ring-orange-500/20'
                      } focus:outline-none focus:ring-2 transition-all tabular-nums`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Field 3: Pesan */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-200">
                      Pesan (Pertanyaan atau Permintaan Jadwal Servis) <span className="text-orange-500">*</span>
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pertanyaan, tipe motor (misal: Honda Beat 2021), kendala/keluhan mesin, atau jadwal servis yang diinginkan..."
                      className={`w-full p-3.5 bg-slate-900/90 text-white placeholder-slate-500 text-sm rounded-xl border ${
                        errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-700 focus:border-orange-500 focus:ring-orange-500/20'
                      } focus:outline-none focus:ring-2 transition-all resize-y`}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </p>
                  )}

                  {/* Quick Preset Prompts */}
                  <div className="mt-2.5">
                    <p className="text-[11px] text-slate-400 mb-1.5">Contoh pesan cepat (klik untuk isi otomatis):</p>
                    <div className="flex flex-wrap gap-1.5">
                      {quickPresets.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setFormData({ ...formData, message: preset })}
                          className="px-2.5 py-1 text-[11px] rounded-lg border border-slate-700/80 bg-slate-800/70 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-colors text-left"
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tombol 'Kirim' Menonjol dengan Accent Orange */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-800 shadow-xl shadow-orange-950/70 hover:shadow-orange-900/80 border border-orange-400/30 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-sm"
                  >
                    <Send className="h-4 w-4" />
                    <span>Kirim Pesan</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    Privasi terjaga. Data Anda hanya digunakan untuk konfirmasi layanan Bengkel Berkah Jaya.
                  </p>
                </div>
              </form>
            ) : (
              /* Success / Confirmation State */
              <div className="py-6 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-white">
                    Pesan Berhasil Terkirim!
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Diterima pada <span className="text-slate-200 tabular-nums">{submissionTime}</span>
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-700/70 bg-slate-900/80 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Nama:</span>
                    <span className="font-medium text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Telepon:</span>
                    <span className="font-medium text-white tabular-nums">{formData.phone}</span>
                  </div>
                  <div className="pt-0.5">
                    <span className="text-slate-400 block mb-1">Rincian Pesan:</span>
                    <p className="text-slate-200 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800 text-[11px] leading-relaxed">
                      "{formData.message}"
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Mekanik admin kami akan segera menghubungi Anda. Anda juga dapat langsung membuka obrolan WhatsApp untuk respon instan:
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    type="button"
                    onClick={handleOpenWhatsApp}
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 transition-all text-xs shadow-md shadow-emerald-950 cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Lanjutkan ke WhatsApp Bengkel</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="py-3 px-5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
