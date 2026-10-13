import React from 'react';
import { Phone, FileDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[82vh] flex flex-col justify-between overflow-hidden border-b border-zinc-800 bg-[#0b0c0e]">
      {/* Real Factory Photo Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/emek/kurumsal.jpg"
          alt="Emek Lastik Samsun Organize Sanayi Bölgesi Fabrikası"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e] via-[#0b0c0e]/85 to-[#0b0c0e]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-16 pb-14 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-red-500 uppercase mb-4 border-l-2 border-red-600 pl-3">
              1961’DEN BUGÜNE • SAMSUN ORGANİZE SANAYİ BÖLGESİ
            </p>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08] mb-5">
              GURURLU GEÇMİŞ, <br />
              <span className="text-zinc-300">GÜVENLİ GELECEK.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-4 max-w-2xl">
              <strong className="text-white">Emek Lastik ve Plastik Ayakkabı San. Tic. A.Ş.</strong> olarak Samsun OSB’deki 20.000 m² üretim tesisimizde; iş güvenliği ayakkabıları, PVC ve kauçuk çizmeler, lastik ayakkabılar, kışlık botlar, EVA/poliüretan terlikler ve rejenere kauçuk üretiyor, 18 ülkeye ihracat yapıyoruz.
            </p>

            <p className="text-sm font-semibold text-zinc-400 mb-8">
              Kurucu: Doğan ELDEMİR • 65 Yıllık Yerli Üretim ve Sanayi Tecrübesi
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
              <a
                href="#urunler"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold text-base transition-colors shadow-lg"
              >
                <span>Ürün Kataloğunu İncele</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/emek/EmekLastik_Katalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-white hover:bg-zinc-200 text-black font-extrabold text-base transition-colors"
              >
                <FileDown className="w-5 h-5" />
                <span>PDF Katalog İndir</span>
              </a>

              <a
                href="tel:+903622666222"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+90 (362) 266 62 22</span>
              </a>
            </div>
          </div>

          {/* Right Column: Featured Flagship Product Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <a
              href="#urunler"
              className="bg-white rounded-xl p-4 border border-zinc-200 shadow-xl hover:-translate-y-1 transition-transform"
            >
              <div className="aspect-square w-full flex items-center justify-center overflow-hidden">
                <img
                  src="/emek/products/emex-italyan-ca10.jpg"
                  alt="EMEX İş Güvenliği Ayakkabısı"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-2 pt-2 border-t border-zinc-100">
                <span className="text-[11px] font-bold text-red-600 uppercase">EMEX SERİSİ</span>
                <h3 className="text-sm font-extrabold text-zinc-900">İş Güvenliği Ayakkabıları</h3>
              </div>
            </a>

            <a
              href="#urunler"
              className="bg-white rounded-xl p-4 border border-zinc-200 shadow-xl hover:-translate-y-1 transition-transform"
            >
              <div className="aspect-square w-full flex items-center justify-center overflow-hidden">
                <img
                  src="/emek/products/ulas-305p-siyah.jpg"
                  alt="ULAŞ PVC ve Kauçuk Çizmeler"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-2 pt-2 border-t border-zinc-100">
                <span className="text-[11px] font-bold text-red-600 uppercase">ULAŞ SERİSİ</span>
                <h3 className="text-sm font-extrabold text-zinc-900">PVC & Kauçuk Çizmeler</h3>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Solid Industrial Numbers Bar */}
      <div className="relative z-10 border-t border-zinc-800 bg-[#111317]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">1961</div>
              <div className="text-xs text-zinc-400 mt-0.5">Kuruluş Yılı • 65 Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">20.000 m²</div>
              <div className="text-xs text-zinc-400 mt-0.5">13.000 m² Kapalı Fabrika Üretim Alanı</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">18 Ülke</div>
              <div className="text-xs text-zinc-400 mt-0.5">Uluslararası İhracat Ağı</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">14 Marka</div>
              <div className="text-xs text-zinc-400 mt-0.5">Ayakkabı, Çizme, Terlik & Kauçuk</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
