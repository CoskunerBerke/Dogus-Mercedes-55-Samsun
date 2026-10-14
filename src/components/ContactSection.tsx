import React, { useState } from 'react';
import { Phone, MapPin, Clock, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { MercedesLogo } from './MercedesLogo';

export const ContactSection: React.FC = () => {
  const [carModel, setCarModel] = useState('');
  const [serviceNeed, setServiceNeed] = useState('Periyodik Bakım');
  const [note, setNote] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Merhaba Doğuş Mercedes Samsun,\n\n*Araç Modeli:* ${carModel || 'Mercedes-Benz'}\n*İşlem / Parça Talebi:* ${serviceNeed}\n*Not:* ${note || 'Randevu ve fiyat bilgisi rica ediyorum.'}`;
    window.open(
      `https://wa.me/905522605666?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="iletisim" className="py-16 md:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-black text-xs font-bold uppercase tracking-widest mb-2">
            <MercedesLogo className="w-4 h-4" variant="dark" />
            <span>İLETİŞİM, KONUM &amp; HIZLI RANDEVU</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-black tracking-tight">
            Bize Ulaşın veya Doğrudan Servisimize Gelin
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 space-y-5 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    7/24 Yol Yardım &amp; Servis Telefonu
                  </div>
                  <a
                    href="tel:+905522605666"
                    className="block text-xl font-display font-bold text-black hover:text-neutral-600 transition-colors"
                  >
                    0552 260 56 66
                  </a>
                  <a
                    href="tel:+903622605666"
                    className="block text-sm font-bold text-neutral-600 hover:text-black transition-colors mt-0.5"
                  >
                    Sabit Hat: (0362) 260 56 66
                  </a>
                </div>
              </div>

              <div className="h-px bg-neutral-200" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-neutral-300 text-black flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Açık Adresimiz
                  </div>
                  <p className="text-black text-sm font-bold leading-relaxed">
                    İstiklal Mahallesi, 19 Mayıs Sanayi Sitesi, 58. Sokak No:31/26
                  </p>
                  <p className="text-neutral-600 text-sm mt-0.5">
                    55330 Tekkeköy / Samsun
                  </p>
                </div>
              </div>

              <div className="h-px bg-neutral-200" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-neutral-300 text-black flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Çalışma Saatlerimiz
                  </div>
                  <p className="text-black text-sm font-bold">
                    Pazartesi – Cumartesi: 08:00 – 19:00
                  </p>
                  <p className="text-neutral-800 text-xs font-bold mt-1">
                    • 7/24 Acil Yol Yardım Hattımız Açıktır
                  </p>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  Haritada Yol Tarifi
                </a>
                <a
                  href="https://www.instagram.com/dogusmercedes55/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-black font-bold py-3 px-4 rounded-lg text-sm transition-colors border border-neutral-300"
                >
                  <ExternalLink className="w-4 h-4 text-black" />
                  @dogusmercedes55
                </a>
              </div>
            </div>
          </div>

          {/* Right: Simple Direct WhatsApp Quote Form + Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 shadow-xs">
              <h3 className="text-lg font-display font-bold text-black mb-1">
                Hızlı WhatsApp Randevu &amp; Yedek Parça Fiyat Sorgulama
              </h3>
              <p className="text-neutral-600 text-xs mb-5">
                Aracınızın modelini ve ihtiyacınızı yazın, ustalarımız doğrudan WhatsApp üzerinden size dönüş yapsın.
              </p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                      Araç Modeli veya Şasi Notu
                    </label>
                    <input
                      type="text"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      placeholder="Örn: 2018 C200d / Vito 119 CDI"
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                      İstenen İşlem / Parça
                    </label>
                    <select
                      value={serviceNeed}
                      onChange={(e) => setServiceNeed(e.target.value)}
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-sm text-black focus:outline-none focus:border-black"
                    >
                      <option value="Periyodik Bakım">Periyodik Bakım &amp; Filtre Seti</option>
                      <option value="Bilgisayarlı Arıza Tespiti">Xentry Bilgisayarlı Arıza Tespiti</option>
                      <option value="Motor / Şanzıman Bakımı">Motor veya Otomatik Şanzıman Bakımı</option>
                      <option value="Fren / Ön Takım / Airmatic">Fren, Ön Takım veya Airmatic</option>
                      <option value="Yedek Parça Fiyat Sorgulama">Yedek Parça Fiyat Sorgulama</option>
                      <option value="Kurumsal Filo Bakım Anlaşması">Kurumsal Filo Bakım Anlaşması</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1.5">
                    Kısa Açıklama (İsteğe Bağlı)
                  </label>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Örn: Yarın öğleden sonra bakım için müsaitlik var mı?"
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp ile Ustaya Gönder
                </button>
              </form>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden h-[280px] shadow-xs">
              <iframe
                title="Doğuş Mercedes Samsun Harita Konumu"
                src="https://maps.google.com/maps?q=19%20May%C4%B1s%20Sanayi%20Sitesi%2058.%20Sokak%20Tekkek%C3%B6y%20Samsun&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
