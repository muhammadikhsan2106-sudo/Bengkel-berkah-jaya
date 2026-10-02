import React from 'react';
import { ShieldCheck, HeartHandshake, Zap, Award, Check, X } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pemeriksaan Bersama di Depan Anda',
      desc: 'Motor dicek langsung di hadapan Anda. Mekanik menjelaskan bagian mana yang masih layak pakai dan mana yang aus secara objektif.',
    },
    {
      num: '02',
      title: 'Konfirmasi Estimasi Biaya di Awal',
      desc: 'Kami menyebutkan estimasi total harga jasa dan part sebelum kunci pas menyentuh motor Anda. Tidak ada pergantian part tanpa persetujuan.',
    },
    {
      num: '03',
      title: 'Pengerjaan Cepat dengan Toolkit Presisi',
      desc: 'Mekanik berpengalaman didukung perkakas pneumatic & diagnostic scanner modern untuk hasil kerja presisi dalam waktu efisien.',
    },
    {
      num: '04',
      title: 'Suku Cadang Bekas Dikembalikan & Garansi',
      desc: 'Semua kemasan dan onderdil lama yang diganti wajib kami serahkan kembali kepada Anda sebagai bukti kejujuran bengkel.',
    },
  ];

  return (
    <section id="keunggulan" className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-950 via-[#0a1226] to-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold tracking-wider text-orange-400 uppercase mb-2">
            Komitmen Pelayanan Kami
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengapa Memilih Bengkel Berkah Jaya?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Kami hadir mengakhiri rasa was-was pemilik motor terhadap biaya siluman atau penggantian onderdil yang sebenarnya belum rusak.
          </p>
        </div>

        {/* 4 Pillars in Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-slate-800 bg-[#0e172e] flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 mb-4">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Jujur & Transparan
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tanpa jebakan biaya. Jika part motor masih bisa dibersihkan atau disetel, kami tidak akan memaksa Anda membeli part baru.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] text-orange-400 font-medium">
              Prinsip integritas nomor satu
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-[#0e172e] flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Terpercaya di Serpong
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dipercaya ribuan pengguna harian Beat, Vario, NMAX, Aerox, PCX dan motor bebek di kawasan Buaran, Viktor, dan BSD Serpong.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] text-blue-400 font-medium">
              8.500+ motor diservis
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-[#0e172e] flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Cepat & Tanggap
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Alur pengerjaan efisien. Servis rutin dan ganti oli selesai dalam hitungan 20–35 menit agar tidak menghambat aktivitas Anda.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] text-amber-400 font-medium">
              Efisiensi waktu kerja
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-800 bg-[#0e172e] flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Profesional & Bergaransi
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mekanik bersertifikasi kejuruan otomotif. Memberikan garansi servis hingga 14 hari bila ada kendala yang belum tuntas.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] text-emerald-400 font-medium">
              Garansi servis nyata
            </div>
          </div>
        </div>

        {/* Transparent Workflow Steps */}
        <div className="rounded-2xl border border-slate-800/90 bg-[#091124] p-8 lg:p-10 mb-14">
          <div className="max-w-xl mb-8">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Standar 4 Langkah Pelayanan Kami
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Setiap kendaraan yang masuk ke Bengkel Berkah Jaya diperlakukan dengan prosedur transparan yang teruji:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div key={st.num} className="relative space-y-2">
                <span className="font-mono text-3xl font-extrabold text-orange-500/30 block">
                  {st.num}
                </span>
                <h4 className="text-sm font-bold text-white">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Matrix: Berkah Jaya vs Bengkel Lain */}
        <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-900/60">
          <div className="p-6 border-b border-slate-800">
            <h3 className="font-display text-xl font-bold text-white text-center sm:text-left">
              Perbandingan Standar Layanan
            </h3>
            <p className="text-xs text-slate-400 mt-1 text-center sm:text-left">
              Lihat perbedaan nyata bagaimana kami menjaga kepercayaan Anda
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0b152d] text-slate-300 uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-6 font-semibold">Aspek Pelayanan</th>
                  <th className="py-3.5 px-6 font-bold text-orange-400 bg-orange-950/20">
                    Bengkel Berkah Jaya
                  </th>
                  <th className="py-3.5 px-6 font-semibold text-slate-400">
                    Bengkel Konvensional Lain
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                <tr>
                  <td className="py-3.5 px-6 font-medium text-white">Konfirmasi Sebelum Ganti Part</td>
                  <td className="py-3.5 px-6 bg-orange-950/10 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Check className="h-4 w-4" /> Wajib persetujuan pemilik
                  </td>
                  <td className="py-3.5 px-6 text-slate-400 flex items-center gap-1.5">
                    <X className="h-4 w-4 text-rose-500" /> Sering langsung diganti tanpa konfirmasi
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-white">Pengembalian Part Bekas</td>
                  <td className="py-3.5 px-6 bg-orange-950/10 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Check className="h-4 w-4" /> 100% Diserahkan kembali ke pemilik
                  </td>
                  <td className="py-3.5 px-6 text-slate-400 flex items-center gap-1.5">
                    <X className="h-4 w-4 text-rose-500" /> Sering ditinggal atau tidak jelas
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-white">Keaslian Oli & Suku Cadang</td>
                  <td className="py-3.5 px-6 bg-orange-950/10 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Check className="h-4 w-4" /> Distributor resmi, dibuka di depan mata
                  </td>
                  <td className="py-3.5 px-6 text-slate-400 flex items-center gap-1.5">
                    <X className="h-4 w-4 text-rose-500" /> Rawan oli curah / part non-original
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-white">Garansi Servis</td>
                  <td className="py-3.5 px-6 bg-orange-950/10 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Check className="h-4 w-4" /> Garansi hingga 14 hari kerja
                  </td>
                  <td className="py-3.5 px-6 text-slate-400 flex items-center gap-1.5">
                    <X className="h-4 w-4 text-rose-500" /> Keluar bengkel tanggung jawab sendiri
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
