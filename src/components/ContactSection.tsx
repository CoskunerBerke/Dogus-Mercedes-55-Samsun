import React from 'react';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="iletisim" className="py-20 bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-12 pb-6 border-b border-zinc-800">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
            İLETİŞİM & KONUM
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Adres ve Telefon Bilgilerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#121418] border border-zinc-800 rounded-xl p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                  Servis & Acil Yol Yardım (GSM / WhatsApp)
                </span>
                <a
                  href="tel:05522605666"
                  className="text-3xl sm:text-4xl font-black text-white hover:text-zinc-300 transition-colors block"
                >
                  0552 260 56 66
                </a>
              </div>

              <div className="pt-5 border-t border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Sabit Servis Santrali
                </span>
                <a
                  href="tel:03622605666"
                  className="text-xl font-bold text-zinc-200 hover:text-white transition-colors block"
                >
                  (0362) 260 56 66
                </a>
              </div>

              <div className="pt-5 border-t border-zinc-800 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Açık Adres</h4>
                  <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                    İstiklal Mahallesi, 19 Mayıs Sanayi Sitesi, 58. Sokak No:31/26, Tekkeköy / Samsun
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-zinc-800 flex items-start gap-3">
                <Clock className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Çalışma Saatleri</h4>
                  <p className="text-sm text-zinc-300 mt-1">
                    Pazartesi – Cumartesi: 08:00 – 19:00
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    7/24 Yol Yardım Hattımız Aktiftir
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:05522605666"
                className="py-3.5 px-4 rounded-lg bg-white text-black font-extrabold text-sm text-center hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Hemen Ara</span>
              </a>

              <a
                href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm text-center border border-zinc-700 transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Yol Tarifi Al</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Full-Height Map */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-zinc-800 bg-[#121418] min-h-[380px]">
            <iframe
              title="Doğuş Mercedes Samsun Harita Konumu"
              src="https://maps.google.com/maps?q=41.2383282,36.4175292&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen={false}
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
