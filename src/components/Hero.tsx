import React from 'react';
import { Phone, FileDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Direct Industrial Pitch */}
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm font-extrabold tracking-widest text-red-600 uppercase mb-3 border-l-4 border-red-600 pl-3">
              1961’DEN BUGÜNE • SAMSUN ORGANİZE SANAYİ BÖLGESİ
            </p>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] mb-4">
              EMEK LASTİK & PLASTİK AYAKKABI SAN. A.Ş.
            </h1>

            <p className="text-lg sm:text-xl font-bold text-slate-700 mb-4">
              “Gururlu Geçmiş, Güvenli Gelecek”
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              1961 yılında <strong className="text-slate-900">Doğan ELDEMİR</strong> tarafından Samsun’da kurulan fabrikamız; 20.000 m² üretim alanında iş güvenliği ayakkabıları (<strong className="text-slate-900">EMEX</strong>), PVC ve kauçuk çizmeler (<strong className="text-slate-900">ULAŞ</strong>), lastik ayakkabılar (<strong className="text-slate-900">EMEK</strong>), kışlık botlar (<strong className="text-slate-900">MEYKERS</strong>), terlik (<strong className="text-slate-900">ELDİ & EVA</strong>) ve rejenere kauçuk üretimiyle <strong className="text-slate-900">18 ülkeye ihracat</strong> yapmaktadır.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-8">
              <a
                href="#urunler"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base transition-colors shadow-sm"
              >
                <span>Ürün Kataloğunu İncele</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/emek/EmekLastik_Katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base border border-slate-300 transition-colors"
              >
                <FileDown className="w-4 h-4 text-red-600" />
                <span>PDF Katalog İndir</span>
              </a>

              <a
                href="tel:+903622666222"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>0362 266 62 22</span>
              </a>
            </div>

            {/* 4 Key Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl font-black text-slate-900">1961</div>
                <div className="text-xs font-medium text-slate-500">Kuruluş Yılı</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">20.000 m²</div>
                <div className="text-xs font-medium text-slate-500">Fabrika Alanı</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">18 Ülke</div>
                <div className="text-xs font-medium text-slate-500">Dış Ticaret & İhracat</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">14 Marka</div>
                <div className="text-xs font-medium text-slate-500">Tescilli Üretim</div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Factory Documentary Video + Real Factory Building Photo */}
          <div className="lg:col-span-6 space-y-4">
            {/* Official Documentary Video of Emek Lastik / Fahri Eldemir */}
            <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-md">
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/aukUpKE4KlU?rel=0"
                  title="Emek Lastik Samsun Fabrika Belgeseli - Fahri Eldemir"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-3.5 bg-white flex items-center justify-between text-xs border-t border-slate-100">
                <span className="font-bold text-slate-800">
                  Fabrika Tanıtım & Tarihçe Videosu (Fahri ELDEMİR • Samsun OSB)
                </span>
                <span className="text-red-600 font-bold">Gerçek Üretim</span>
              </div>
            </div>

            {/* Real Factory Photo Strip */}
            <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm flex items-center gap-4 p-3">
              <img
                src="/emek/kurumsal.jpg"
                alt="Emek Lastik Samsun OSB Fabrikası"
                className="w-36 sm:w-48 h-20 sm:h-24 object-cover rounded-lg shrink-0"
              />
              <div>
                <span className="text-[11px] font-bold text-red-600 uppercase block">
                  SAMSUN MERKEZ OSB FABRİKAMIZ
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                  13.000 m² Kapalı, 20.000 m² Toplam Entegre Tesis
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Vali Erdoğan Cebeci Bulvarı No:70 Kutlukent / Samsun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
