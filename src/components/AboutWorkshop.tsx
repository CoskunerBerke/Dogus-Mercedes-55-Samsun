import React from 'react';
import { Phone } from 'lucide-react';

export const AboutWorkshop: React.FC = () => {
  const masters = [
    {
      name: 'Engin Çalımlı',
      role: 'Kurucu Usta • Motor & Mekanik',
      desc: 'Mercedes-Benz motor revizyonu, eksantrik zincir değişimi ve ağır mekanik bakım uzmanı.'
    },
    {
      name: 'Ercan Aycan',
      role: 'Kurucu Usta • Elektronik & Teşhis',
      desc: 'Xentry Star Diagnosis bilgisayarlı arıza tespiti, elektronik beyin ve sensör sistemleri uzmanı.'
    },
    {
      name: 'Uğur Gözoğlu',
      role: 'Kurucu Usta • Şanzıman & Süspansiyon',
      desc: '7G / 9G-Tronic otomatik şanzıman bakımı, Airmatic havalı süspansiyon ve ön takım uzmanı.'
    }
  ];

  return (
    <section id="ustalar" className="py-20 bg-[#0b0c0e] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
              HAKKIMIZDA & USTALARIMIZ
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Samsun’da 20 Yılı Aşkın Mercedes-Benz Uzmanlığı
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed mb-4">
              Doğuş Mercedes Servis ve Yedek Parça olarak Samsun Tekkeköy 19 Mayıs Sanayi Sitesi’nde binek ve ticari tüm Mercedes-Benz araçlara hizmet veriyoruz.
            </p>

            <p className="text-base text-zinc-400 leading-relaxed mb-8">
              Yetkili servis kalitesindeki cihaz ve yedek parça altyapımızı, dürüst esnaflık ve net fiyat anlayışıyla sunuyoruz. Aracınıza yapılan her işlemi ve takılan her parçayı şeffaf şekilde görebilirsiniz.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:05522605666"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white text-black font-extrabold text-sm hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Ustalarımızla Görüşün: 0552 260 56 66</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Master Cards */}
          <div className="lg:col-span-6 space-y-4">
            {masters.map((m) => (
              <div
                key={m.name}
                className="p-6 rounded-xl bg-[#121418] border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-white">{m.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-0.5">
                    {m.role}
                  </p>
                  <p className="text-sm text-zinc-300 mt-2">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
