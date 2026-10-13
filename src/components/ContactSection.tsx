import React from 'react';
import { Phone, MapPin, Mail, Printer, Building2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="iletisim" className="py-20 bg-[#0e1014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-12 pb-6 border-b border-zinc-800">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-2">
            İLETİŞİM & BAYİLİK
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fabrika Merkez & Bölge Bayilik Bilgilerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Factory & Regional Dealer Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#14171c] border border-zinc-800 rounded-xl p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-500 block mb-1">
                  Merkez Fabrika Santral
                </span>
                <a
                  href="tel:+903622666222"
                  className="text-3xl sm:text-4xl font-black text-white hover:text-zinc-300 transition-colors block"
                >
                  +90 (362) 266 62 22
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-zinc-800">
                <div className="flex items-start gap-2.5">
                  <Printer className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-bold text-zinc-400 block">Faks</span>
                    <span className="text-sm font-semibold text-zinc-200">+90 (362) 266 66 99</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-bold text-zinc-400 block">E-Posta</span>
                    <a
                      href="mailto:emek@emeklastik.com.tr"
                      className="text-sm font-semibold text-white hover:text-red-400 transition-colors"
                    >
                      emek@emeklastik.com.tr
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-zinc-800 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Merkez & Fabrika Adresi (Samsun OSB)
                  </h4>
                  <p className="text-sm text-zinc-300 mt-1 leading-relaxed">
                    Organize Sanayi Bölgesi, Vali Erdoğan Cebeci Bulvarı No:70, P.K.: 55330 Kutlukent, Tekkeköy / SAMSUN
                  </p>
                </div>
              </div>

              {/* Regional Dealer from emeklastik.com.tr */}
              <div className="pt-5 border-t border-zinc-800 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Gaziantep Bölge Bayii</h4>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    Çakmak Mahallesi Başak Sokak No:46 Şehitkamil / GAZİANTEP
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Tel: <a href="tel:+903423236053" className="text-zinc-200 hover:underline">+90 (342) 323 60 53</a> | Faks: +90 (342) 324 98 79 | email@eldi.com.tr
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+903622666222"
                className="py-3.5 px-4 rounded-lg bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Fabrikayı Ara</span>
              </a>

              <a
                href="mailto:emek@emeklastik.com.tr"
                className="py-3.5 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm text-center border border-zinc-700 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>E-Posta Gönder</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Full-Height Map of Samsun OSB Factory */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-zinc-800 bg-[#14171c] min-h-[420px]">
            <iframe
              title="Emek Lastik Samsun Organize Sanayi Bölgesi Harita Konumu"
              src="https://maps.google.com/maps?q=Emek%20Lastik%20Organize%20Sanayi%20B%C3%B6lgesi%20Vali%20Erdo%C4%9Fan%20Cebeci%20Bulvar%C4%B1%20No:70%20Tekkek%C3%B6y%20Samsun&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '440px' }}
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
