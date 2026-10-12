import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, Navigation, MessageCircle, ShieldCheck, Copy } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const handleCallRedirect = () => {
    window.location.href = "tel:05522605666";
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Panoya kopyalandı: ${text}`);
  };

  return (
    <section id="iletisim" className="py-20 md:py-28 bg-[#0a0d12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>Konum & İletişim</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Doğuş Mercedes Servisine Kolayca Ulaşın
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Samsun Tekkeköy 19 Mayıs Sanayi Sitesi'ndeki atölyemize yol tarifi alabilir, telefonla doğrudan bilgi veya randevu oluşturabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Phone Card */}
            <div className="p-6 rounded-2xl bg-[#0e131b] border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Doğrudan Servis & Bilgi Hattı
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Hızlı Hat
                </span>
              </div>

              <a
                href="tel:05522605666"
                onClick={handleCallRedirect}
                className="text-2xl sm:text-3xl font-extrabold text-white hover:text-slate-200 transition-colors flex items-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <span>0552 260 56 66</span>
              </a>

              <p className="mt-3 text-xs text-slate-400">
                Arıza tespiti, bakım randevusu, yedek parça fiyatı ve 7/24 acil yol yardım için doğrudan arayabilirsiniz.
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <button
                  onClick={handleCallRedirect}
                  className="flex-1 py-3 px-4 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow text-center"
                >
                  Hemen Bilgi Al & Ara
                </button>

                <a
                  href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Landline & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Landline */}
              <div className="p-5 rounded-xl bg-[#0e131b] border border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">Sabit Servis Santrali</span>
                <a
                  href="tel:03622605666"
                  className="text-lg font-bold text-white hover:text-slate-300 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>(0362) 260 56 66</span>
                </a>
                <span className="text-[11px] text-slate-500 mt-1 block">Atölye Dahili Santral</span>
              </div>

              {/* Instagram */}
              <div className="p-5 rounded-xl bg-[#0e131b] border border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">Sosyal Medya</span>
                <a
                  href="https://www.instagram.com/dogusmercedes55/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-white hover:text-pink-400 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-pink-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@dogusmercedes55</span>
                </a>
                <span className="text-[11px] text-slate-500 mt-1 block">Günlük İşler & Paylaşımlar</span>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="p-5 rounded-2xl bg-[#0e131b] border border-slate-800 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Servis Adresi</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    İstiklal Mahallesi, 58. Sokak No:31/26, 19 Mayıs Sanayi Sitesi, 55330 Tekkeköy / Samsun
                  </p>
                  <span className="text-[11px] text-slate-400 mt-1 inline-block">
                    Plus Code: <strong>6CQ9+82 Tekkeköy, Samsun</strong>
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Çalışma Saatleri</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Pazartesi - Cumartesi: <strong>08:00 - 19:00</strong>
                  </p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">
                    Pazar: Kapalı (7/24 Acil Yol Yardım Aktif)
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                <a
                  href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-blue-400" />
                  <span>Google Haritalarda Aç</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <button
                  onClick={() => handleCopyText("İstiklal, 58. Sk. No:31/26, 55330 Tekkeköy/Samsun")}
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Adresi Kopyala"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed + Verification Photo */}
          <div className="lg:col-span-7 space-y-4">
            {/* Interactive Map Box */}
            <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl relative">
              <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-semibold text-slate-300 ml-2">
                    Google Haritalar Canlı Konum • Tekkeköy Samsun
                  </span>
                </div>

                <a
                  href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium"
                >
                  <span>Tam Ekranda Aç</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#121620] overflow-hidden">
                {/* Visual Map Grid & Pin Fallback */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center animate-ping"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg text-white font-bold text-xs">
                    <MapPin className="w-4 h-4 fill-white" />
                  </div>
                </div>

                <iframe
                  title="Doğuş Mercedes Samsun Harita Konumu"
                  src="https://maps.google.com/maps?q=41.2383282,36.4175292&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full relative z-10 filter contrast-105"
                ></iframe>

                {/* Map Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700 shadow-xl pointer-events-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <h5 className="text-xs font-bold text-white">Doğuş Mercedes</h5>
                    <span className="text-[10px] text-amber-400 font-bold ml-auto">4.8 ★</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    İstiklal, 58. Sk. No:31/26 Tekkeköy / Samsun
                  </p>
                  <a
                    href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-white text-slate-950 text-xs font-bold hover:bg-slate-100 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Yol Tarifi Başlat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Verification Card */}
            <div className="p-4 rounded-xl bg-[#0e131b] border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/maps-verification.png"
                  alt="Google Haritalar Bilgisi"
                  className="w-16 h-12 rounded-lg object-cover border border-slate-700"
                />
                <div>
                  <h5 className="text-xs font-bold text-white">Doğrulanmış İşletme Kaydı</h5>
                  <p className="text-[11px] text-slate-400">Google Haritalar & Yandex resmi rehberlerinde kayıtlı özel servis.</p>
                </div>
              </div>

              <button
                onClick={handleCallRedirect}
                className="shrink-0 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
              >
                Bilgi Al
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
