import React from 'react';
import { Phone } from 'lucide-react';

export const Services: React.FC = () => {
  const productionGroups = [
    {
      num: '01',
      title: 'EMEX İş Güvenliği Ayakkabı & Botları',
      description:
        'Şantiye, fabrika ve ağır sanayi sahaları için S1 ve S2 standartlarında, çelik burunlu, darbe emici tabanlı hakiki deri ve süet iş güvenliği ayakkabıları (Madrid, Milano, İtalyan serileri).'
    },
    {
      num: '02',
      title: 'ULAŞ & ROTA PVC ve Kauçuk Çizmeler',
      description:
        'Tarım, balıkçılık, inşaat ve endüstriyel kullanım için su geçirmez uzun/kısa PVC çizmeler, krep kauçuk çizmeler, kasık/göğüs çizmeleri ve içi peluşlu kışlık çizmeler.'
    },
    {
      num: '03',
      title: 'EMEK, KURŞUN & UĞUR Lastik Ayakkabılar',
      description:
        '1961’den bu yana Türkiye’nin dört bir yanında giyilen, zorlu arazi ve bahçe şartlarına dayanıklı klasik kara lastik, astarlı lastik, ökçeli ve kar tipi dişli ayakkabılar.'
    },
    {
      num: '04',
      title: 'MEYKERS Spor Ayakkabı & Kar Botları',
      description:
        'Soğuk kış şartlarına dayanıklı fermuarlı kürklü kar botları, su geçirmez kışlık botlar, günlük spor ayakkabılar ve EXMAX halı saha ayakkabıları.'
    },
    {
      num: '05',
      title: 'ELDİ & EMEK EVA Terlik ve Deniz Grubu',
      description:
        'Hafif ve esnek EVA tabanlı çocuk/yetişkin terlikleri, ELDİ poliüretan terlik modelleri, EMEK’S keten bez ayakkabılar ve SEA WORLD kaymaz deniz ayakkabıları.'
    },
    {
      num: '06',
      title: 'Rejenere Kauçuk, Granül & Toz Lastik',
      description:
        'Samsun OSB fabrikamızda kauçuk sanayisi için yüksek standartlarda rejenere kauçuk, granül ve toz lastik hammadde imalatı ve tedariği.'
    }
  ];

  return (
    <section id="uretim-gruplari" className="py-20 bg-[#0b0c0e] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Clean Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-800">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-2">
              ÜRETİM GRUPLARIMIZ
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              6 Ana Dalda Entegre Sanayi Üretimi
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Hammaddeden nihai ürüne kadar tüm üretim süreçleri Samsun Organize Sanayi Bölgesi’ndeki kendi tesislerimizde gerçekleştirilmektedir.
          </p>
        </div>

        {/* Clean 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productionGroups.map((grp) => (
            <div
              key={grp.num}
              className="p-7 rounded-xl bg-[#121418] border border-zinc-800 hover:border-zinc-600 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-red-500 block mb-3">
                  {grp.num}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {grp.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {grp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Wholesale & Export Callout */}
        <div className="mt-10 p-6 rounded-xl bg-[#14171c] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Toptan Sipariş, Bayilik ve İhracat Talepleriniz İçin
            </h4>
            <p className="text-sm text-zinc-400 mt-0.5">
              Türkiye geneli bayilik başvuruları ve yurt dışı ihracat talepleriniz için fabrika satış müdürlüğümüzle doğrudan iletişime geçebilirsiniz.
            </p>
          </div>

          <a
            href="tel:+903622666222"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm transition-colors"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>+90 (362) 266 62 22</span>
          </a>
        </div>
      </div>
    </section>
  );
};
