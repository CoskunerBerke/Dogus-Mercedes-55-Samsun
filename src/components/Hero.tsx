import React from 'react';
import { Phone, MessageCircle, Navigation, ShieldCheck, Wrench, Clock, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Clear Light-Theme Presentation */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              Samsun Tekkeköy 19 Mayıs Sanayi Sitesi • 7/24 Yol Yardım
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.12] mb-4">
              DOĞUŞ MERCEDES <span className="text-blue-700">SAMSUN</span>
              <span className="block text-xl sm:text-2xl font-bold text-slate-700 mt-2">
                Mercedes-Benz Özel Servis &amp; Orijinal Yedek Parça
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
              Kurucu ustalarımız <strong className="text-slate-900">Engin Çalımlı, Ercan Aycan ve Uğur Gözoğlu</strong> yönetiminde; binek ve hafif ticari tüm Mercedes-Benz araçlar için bilgisayarlı arıza tespiti, garantili mekanik bakım ve geniş orijinal yedek parça stoğuyla hizmetinizdeyiz.
            </p>

            {/* Google Rating Highlight Pill */}
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-xs mb-6">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-900">4.8 / 5 Google Puanı</span>
              <span className="text-xs text-slate-500 font-semibold border-l border-slate-200 pl-3">
                Bireysel &amp; Kurumsal Filo Tercihi
              </span>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="tel:+905522605666"
                className="flex items-center justify-center gap-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3.5 rounded-lg text-base transition-colors shadow-sm"
              >
                <Phone className="w-5 h-5" />
                <span>Hemen Ara: 0552 260 56 66</span>
              </a>

              <a
                href="https://wa.me/905522605666?text=Merhaba%20Do%C4%9Fu%C5%9F%20Mercedes%20Samsun%2C%20servis%20randevusu%20ve%20par%C3%A7a%20fiyat%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-lg text-base transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Randevu &amp; Parça</span>
              </a>

              <a
                href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold px-5 py-3.5 rounded-lg text-base transition-colors border border-slate-300 shadow-xs"
              >
                <Navigation className="w-5 h-5 text-blue-700" />
                <span>Yol Tarifi</span>
              </a>
            </div>

            {/* Key Facts Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200">
              <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-2xs">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase mb-0.5">
                  <Wrench className="w-3.5 h-3.5" />
                  Xentry Teşhis
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Lisanslı Mercedes Cihazı ile Nokta Tespit
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-2xs">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Hazır Stok
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Orijinal &amp; OEM Yedek Parça Deposu
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-2xs">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs uppercase mb-0.5">
                  <Clock className="w-3.5 h-3.5" />
                  Aynı Gün Teslim
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Bireysel ve Kurumsal Filo Bakımı
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Autoplaying Workshop Video + Exterior Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    DOĞUŞ MERCEDES SAMSUN — SERVİS &amp; ATÖLYE VİDEOSU
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-blue-700">
                  Tekkeköy 19 Mayıs Sanayi
                </span>
              </div>
              <div className="relative aspect-video bg-slate-900">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  poster="/images/workshop-exterior.png"
                  className="w-full h-full object-cover"
                >
                  <source src="/Automotive_repair_shop_at_night_20261012193207.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Bottom Dual Mini Showcase: Exterior + Spare Parts Warehouse */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-2.5 flex items-center gap-3 shadow-xs">
                <img
                  src="/images/workshop-exterior.png"
                  alt="Doğuş Mercedes Samsun Servis Binası"
                  className="w-20 h-14 object-cover object-[56%_center] rounded-lg border border-slate-200 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">19 Mayıs Sanayi Sitesi</div>
                  <p className="text-[11px] text-slate-600">58. Sokak No:31/26 Tekkeköy</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-2.5 flex items-center gap-3 shadow-xs">
                <img
                  src="/images/spare-parts.jpg"
                  alt="Doğuş Mercedes Orijinal Yedek Parça Deposu"
                  className="w-20 h-14 object-cover rounded-lg border border-slate-200 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">Kendi Parça Depomuz</div>
                  <p className="text-[11px] text-slate-600">Beklemeden Orijinal Parça</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
