import React from 'react';
import { Phone } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Periyodik Bakım & Yağ Değişimi',
      description:
        'Mercedes-Benz onaylı motor yağları ve orijinal filtre setleri (yağ, hava, polen, mazot filtresi) ile aracınızın 10.000 ve 15.000 km periyodik bakımlarını eksiksiz yapıyoruz.'
    },
    {
      num: '02',
      title: 'Bilgisayarlı Arıza Tespiti (Xentry)',
      description:
        'Lisanslı Mercedes-Benz Xentry / Star Diagnosis cihazımızla deneme-yanılma yapmadan, arızalı sensörü veya elektronik modülü nokta atışı tespit ediyoruz.'
    },
    {
      num: '03',
      title: '7G & 9G-Tronic Şanzıman Bakımı',
      description:
        'Otomatik şanzıman yağı ve karter filtresi değişimi, türbin boşaltımı, mekatronik kart onarımı ve vites geçiş kalibrasyonu işlemlerini garantili uyguluyoruz.'
    },
    {
      num: '04',
      title: 'Motor Mekanik & Eksantrik Zincir',
      description:
        'Eksantrik zincir seti değişimi, yağ soğutucu, devirdaim, termostat, turbo ve enjektör revizyonu dahil tüm ağır mekanik işlemleri titizlikle gerçekleştiriyoruz.'
    },
    {
      num: '05',
      title: 'Airmatic, Ön Takım & Fren Sistemleri',
      description:
        'Airmatic hava körüğü ve kompresör onarımı, salıncak ve burç değişimleri, ses yapmayan orijinal fren disk ve balata montajı ile sürüş konforunuzu koruyoruz.'
    },
    {
      num: '06',
      title: 'Orijinal Yedek Parça Deposu',
      description:
        'Kendi bünyemizdeki zengin yedek parça depomuz sayesinde parça kargosu beklemeden, orijinal ve Alman OEM parçalarla aracınızı aynı gün teslim ediyoruz.'
    }
  ];

  return (
    <section id="hizmetler" className="py-20 bg-[#0b0c0e] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Clean Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
              HİZMETLERİMİZ
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Mercedes-Benz Servis & Bakım Çözümleri
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Binek (A, B, C, E, S, CLA, GLA, GLC, ML) ve ticari (Vito, Sprinter) tüm Mercedes modellerine hizmet veriyoruz.
          </p>
        </div>

        {/* Clean, Solid 6-Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.num}
              className="p-7 rounded-xl bg-[#121418] border border-zinc-800 hover:border-zinc-600 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-zinc-500 block mb-3">
                  {svc.num}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Direct Call Bar */}
        <div className="mt-10 p-6 rounded-xl bg-[#14171c] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              7/24 Acil Yol Yardım & Servis Danışma Hattı
            </h4>
            <p className="text-sm text-zinc-400 mt-0.5">
              Fiyat almak, yedek parça sormak veya yolda kaldığınızda destek istemek için doğrudan arayabilirsiniz.
            </p>
          </div>

          <a
            href="tel:05522605666"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white text-black font-extrabold text-sm hover:bg-zinc-200 transition-colors"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>0552 260 56 66</span>
          </a>
        </div>
      </div>
    </section>
  );
};
