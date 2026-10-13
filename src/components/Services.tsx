import React from 'react';
import { Phone, FileText } from 'lucide-react';

export const Services: React.FC = () => {
  const productionGroups = [
    {
      num: '01',
      title: 'EMEX İş Güvenliği Ayakkabı & Botları',
      description:
        'Şantiye, fabrika ve ağır sanayi sahaları için S1 ve S2 standartlarında, çelik burunlu, darbe emici tabanlı hakiki deri ve süet iş güvenliği ayakkabıları.'
    },
    {
      num: '02',
      title: 'ULAŞ & ROTA PVC ve Kauçuk Çizmeler',
      description:
        'Tarım, balıkçılık, inşaat ve endüstriyel kullanım için su geçirmez uzun/kısa PVC çizmeler, krep kauçuk çizmeler ve içi peluşlu kışlık çizmeler.'
    },
    {
      num: '03',
      title: 'EMEK, KURŞUN & UĞUR Lastik Ayakkabılar',
      description:
        '1961’den bu yana Türkiye’nin dört bir yanında giyilen, zorlu arazi ve bahçe şartlarına dayanıklı klasik kara lastik, astarlı lastik ve kar tipi ayakkabılar.'
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
        'Hafif ve esnek EVA tabanlı çocuk/yetişkin terlikleri, ELDİ poliüretan terlik modelleri, EMEK’S keten bez ayakkabılar ve SEA WORLD deniz ayakkabıları.'
    },
    {
      num: '06',
      title: 'Rejenere Kauçuk, Granül & Toz Lastik',
      description:
        'Samsun OSB fabrikamızda kauçuk sanayisi için yüksek standartlarda rejenere kauçuk, granül ve toz lastik hammadde imalatı ve tedariği.'
    }
  ];

  return (
    <section id="uretim" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-5 border-b border-slate-200">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-red-600 mb-1">
              HAKKIMIZDA & ÜRETİM GRUPLARIMIZ
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              6 Ana Dalda Entegre Fabrika Üretimi
            </h2>
          </div>

          <a
            href="/emek/Basari_Hikayesi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm shrink-0 transition-colors"
          >
            <FileText className="w-4 h-4 text-red-600" />
            <span>Samsun TSO Başarı Hikayemiz (PDF)</span>
          </a>
        </div>

        {/* Clean 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {productionGroups.map((grp) => (
            <div
              key={grp.num}
              className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-red-600 block mb-2">
                  {grp.num}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                  {grp.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {grp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Wholesale Callout */}
        <div className="mt-10 p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
              Toptan Sipariş, Bayilik ve İhracat Talepleriniz İçin
            </h4>
            <p className="text-sm text-slate-600 mt-0.5">
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
