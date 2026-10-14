import React from 'react';
import { Wrench, Cpu, Cog, Disc, PackageCheck, PhoneCall } from 'lucide-react';
import { MercedesLogo } from './MercedesLogo';

const serviceItems = [
  {
    icon: Wrench,
    title: 'Periyodik Bakım & Yağ Değişimi',
    description:
      'Mercedes-Benz onaylı (MB-Approval) motor yağları ve orijinal Mann / Mahle filtre setleri ile fabrika standartlarında periyodik bakım.',
    tags: ['Motor Yağı & Filtre', 'Kış & Yaz Bakımı', 'Genel Kontrol'],
  },
  {
    icon: Cpu,
    title: 'Xentry Bilgisayarlı Arıza Tespiti',
    description:
      'Lisanslı Mercedes-Benz Xentry Diagnosis cihazımızla elektronik kontrol üniteleri, sensör hataları ve yazılım güncellemelerinde nokta atışı teşhis.',
    tags: ['Xentry Diagnosis', 'SCN Kodlama', 'Sensör & Beyin'],
  },
  {
    icon: Cog,
    title: 'Motor & Otomatik Şanzıman Bakımı',
    description:
      '7G-Tronic ve 9G-Tronic şanzıman yağı ve filtre değişimi, türbin/mekatronik kontrolleri, zincir seti değişimi ve komple motor revizyonu.',
    tags: ['7G / 9G-Tronic', 'Zincir & Turbo', 'Motor Revizyon'],
  },
  {
    icon: Disc,
    title: 'Fren, Ön Takım & Airmatic Süspansiyon',
    description:
      'Orijinal Hella Pagid / Textar disk ve balata değişimi, Lemförder ön takım elemanları ve Bilstein Airmatic körük/kompresör onarımı.',
    tags: ['Fren Disk & Balata', 'Airmatic', 'Salıncak & Rot'],
  },
  {
    icon: PackageCheck,
    title: 'Orijinal & OEM Yedek Parça Satışı',
    description:
      'Servis bünyemizdeki geniş yedek parça depomuzdan binek (A, C, E, S, CLA, GLC) ve ticari (Vito, Sprinter) araçlar için bekletmeden parça temini.',
    tags: ['Yıldızlı Orijinal Parça', 'Alman OEM Markalar', 'Hazır Stok'],
  },
  {
    icon: PhoneCall,
    title: '7/24 Acil Yol Yardım & Kurtarıcı',
    description:
      'Samsun ve Karadeniz hattında yolda kalan Mercedes araçlar için mobil arıza müdahale ekibimiz ve anlaşmalı çekici desteğimiz.',
    tags: ['0552 260 56 66', 'Acil Müdahale', 'Samsun & Bölge'],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="hizmetler" className="py-16 md:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-black text-xs font-bold uppercase tracking-widest mb-2">
              <MercedesLogo className="w-4 h-4" variant="dark" />
              <span>UZMANLIK ALANLARIMIZ</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-black tracking-tight">
              Servis ve Yedek Parça Hizmetlerimiz
            </h2>
          </div>
          <p className="text-neutral-600 text-sm max-w-md">
            Binek (C, E, S, CLA, GLA, GLC) ve Hafif Ticari (Vito, V-Class, Sprinter) tüm Mercedes-Benz modellerine garantili hizmet veriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col justify-between hover:border-black transition-colors shadow-2xs"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-black text-white flex items-center justify-center mb-5 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-neutral-800 bg-white px-2.5 py-1 rounded border border-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
