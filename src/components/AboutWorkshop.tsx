import React from 'react';
import { FileText, Phone } from 'lucide-react';

export const AboutWorkshop: React.FC = () => {
  const brands = [
    { name: 'EMEK', type: 'Lastik & Plastik Ayakkabı' },
    { name: 'EMEX', type: 'Deri & Süet İş Güvenliği Ayakkabısı' },
    { name: 'ULAŞ', type: 'PVC & Krep İş Çizmesi' },
    { name: 'ROTA', type: 'Kauçuk Çizme' },
    { name: 'MEYKERS', type: 'Spor Ayakkabı & Kar Botları' },
    { name: "EMEK'S", type: 'Keten Ayakkabı Grubu' },
    { name: 'ELDİ & EVA', type: 'Poliüretan & EVA Terlik' },
    { name: 'SEA WORLD', type: 'Kaymaz Deniz Ayakkabısı' },
    { name: 'KURŞUN & UĞUR', type: 'Geleneksel & Bezli Ayakkabı' },
    { name: 'YAYLA & EFE', type: 'Plastik & PVC Ayakkabı' },
    { name: 'EXMAX', type: 'Halı Saha Ayakkabısı' },
    { name: 'EMEK KAUÇUK', type: 'Rejenere Kauçuk & Granül' }
  ];

  return (
    <section id="kurumsal" className="py-20 bg-[#0e1014] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Row: Factory Story & Real Factory Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-zinc-800">
          {/* Left Narrative */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-2">
              KURUMSAL TARİHÇEMİZ
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              1961’den Bugüne Üreten Türkiye’nin Köklü Markası
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed mb-4">
              <strong className="text-white">Emek Lastik Fabrikası</strong>, 1961 yılında <strong className="text-white">Doğan ELDEMİR</strong> tarafından Samsun’da kurulmuş olup, 1992 senesinde anonim şirkete dönüşmüştür.
            </p>

            <p className="text-base text-zinc-400 leading-relaxed mb-4">
              Üretime başladığımız yıllardan itibaren müşteri memnuniyeti ve kaliteli mal üretiminde gösterdiğimiz disiplin ve özenden dolayı Emek Lastik, bugün <strong className="text-zinc-200">18 ülkeye ihracat</strong> yaparak yurt dışında Türkiye’yi en iyi şekilde temsil eden bir sanayi kuruluşu olmuştur.
            </p>

            <p className="text-base text-zinc-400 leading-relaxed mb-8">
              Fabrikamız; iş güvenliği ayakkabısı, PVC çizme, krep ve kauçuk çizme, lastik ve astarlı lastik ayakkabı, keten ayakkabı, poliüretan ve EVA terlik, fermuarlı kar botu, deniz ayakkabısı ve rejenere kauçuk imalatına <strong className="text-zinc-200">13.000 m²’si kapalı olmak üzere toplam 20.000 m²’lik</strong> modern tesisinde devam etmektedir.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/emek/Basari_Hikayesi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold text-sm transition-colors"
              >
                <FileText className="w-4 h-4 text-red-500" />
                <span>Samsun TSO Başarı Hikayesi (PDF)</span>
              </a>

              <a
                href="tel:+903622666222"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-extrabold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Fabrika İletişim</span>
              </a>
            </div>
          </div>

          {/* Right Factory Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#14171c]">
              <img
                src="/emek/kurumsal.jpg"
                alt="Emek Lastik Samsun Organize Sanayi Bölgesi Fabrika Binası"
                className="w-full h-auto object-cover"
              />
              <div className="p-5 flex items-center justify-between gap-4 border-t border-zinc-800">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Emek Lastik ve Plastik Ayakkabı San. ve Tic. A.Ş.
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Samsun Organize Sanayi Bölgesi • 20.000 m² Entegre Üretim Tesisi
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 shrink-0">
                  SINCE 1961
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Official Sub-Brands (#markalar) */}
        <div id="markalar" className="pt-16">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-2">
              MARKA AİLEMİZ
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Emek Lastik Bünyesindeki Tescilli Markalarımız
            </h3>
          </div>

          {/* Official Logos Banner from emeklastik.com.tr */}
          <div className="bg-white rounded-xl p-4 mb-8 border border-zinc-200 overflow-x-auto">
            <img
              src="/emek/logolar.jpg"
              alt="Emek Lastik Tescilli Markaları"
              className="min-w-[720px] w-full h-auto object-contain mx-auto"
            />
          </div>

          {/* Clean Brand Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {brands.map((b) => (
              <div
                key={b.name}
                className="p-4 rounded-xl bg-[#14171c] border border-zinc-800"
              >
                <div className="text-base font-extrabold text-white">{b.name}</div>
                <div className="text-xs text-zinc-400 mt-0.5">{b.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
