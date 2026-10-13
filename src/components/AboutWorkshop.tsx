import React from 'react';
import { Building2, ShieldCheck, Globe2, Truck } from 'lucide-react';

export const AboutWorkshop: React.FC = () => {
  const partnerSectors = [
    {
      title: 'Belediyeler & Kamu Kurumları',
      desc: 'Türkiye genelindeki belediyelerin fen işleri, park-bahçe ve temizlik işleri müdürlükleri için iş çizmesi ve koruyucu bot tedariği.'
    },
    {
      title: 'İnşaat, Maden & Enerji Şantiyeleri',
      desc: 'Büyük ölçekli şantiyeler ve sanayi tesisleri için S1/S2 standartlarında EMEX çelik burunlu iş güvenliği ayakkabıları.'
    },
    {
      title: 'Tarım Kredi & Ziraat Bayileri',
      desc: 'Karadeniz, İç Anadolu, Doğu ve Güneydoğu Anadolu başta olmak üzere 81 ilde tarım, hayvancılık ve bahçe çizmeleri.'
    },
    {
      title: '81 İl Toptan Ayakkabı Dağıtıcıları',
      desc: 'Samsun Merkez Fabrika ve Gaziantep Bölge Bayiliğimiz üzerinden yüzlerce toptan satış noktasına düzenli sevkiyat.'
    },
    {
      title: 'Kauçuk & Otomotiv Yan Sanayi',
      desc: 'Fabrikalar ve kauçuk üreticileri için yüksek kaliteli rejenere kauçuk, granül ve toz lastik hammadde üretimi.'
    },
    {
      title: '18 Ülkede Uluslararası İthalatçılar',
      desc: 'Avrupa, Balkanlar, Orta Doğu ve Türk Cumhuriyetleri’ndeki kurumsal distribütörlere doğrudan fabrika ihracatı.'
    }
  ];

  const brands = [
    { name: 'EMEK', type: 'Lastik & Plastik Ayakkabı' },
    { name: 'EMEX', type: 'İş Güvenliği Ayakkabısı' },
    { name: 'ULAŞ', type: 'PVC & Krep İş Çizmesi' },
    { name: 'ROTA', type: 'Kauçuk Çizme' },
    { name: 'MEYKERS', type: 'Spor & Kışlık Kar Botu' },
    { name: "EMEK'S", type: 'Keten Ayakkabı' },
    { name: 'ELDİ & EVA', type: 'Poliüretan & EVA Terlik' },
    { name: 'SEA WORLD', type: 'Deniz Ayakkabısı' },
    { name: 'KURŞUN', type: 'Lastik Ayakkabı' },
    { name: 'UĞUR & ÇİFTÇİ', type: 'Bezli Ayakkabı' },
    { name: 'YAYLA & EFE', type: 'Plastik Ayakkabı' },
    { name: 'EMEK KAUÇUK', type: 'Rejenere Kauçuk' }
  ];

  return (
    <section id="markalar" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Part 1: Official 14 Brands Strip */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-red-600 mb-1">
                TESCİLLİ MARKALARIMIZ & İŞ ORTAKLARIMIZ
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Emek Lastik Bünyesindeki 14 Marka ve Çözüm Ortaklarımız
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Yerli Üretim • 81 İl Bayi Ağı • 18 Ülke İhracat
            </span>
          </div>

          {/* Original Brand Logos Strip */}
          <div className="bg-white rounded-xl p-5 mb-6 border border-slate-200 shadow-sm overflow-x-auto">
            <img
              src="/emek/logolar.jpg"
              alt="Emek Lastik Tescilli Markaları"
              className="min-w-[750px] w-full h-auto object-contain mx-auto"
            />
          </div>

          {/* Clean Brand Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {brands.map((b) => (
              <div
                key={b.name}
                className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center"
              >
                <div className="text-sm font-black text-slate-900">{b.name}</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">{b.type}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Partner Companies & Supplied Sectors */}
        <div className="pt-12 border-t border-slate-200">
          <div className="mb-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-red-600 mb-1">
              ÇALIŞILAN FİRMALAR & TEDARİK SAĞLANAN KURUMLAR
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Türkiye ve Dünyada Birlikte Çalıştığımız Sektörler
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {partnerSectors.map((sector) => (
              <div
                key={sector.title}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <h4 className="text-base font-extrabold text-slate-900 mb-2">
                  {sector.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
