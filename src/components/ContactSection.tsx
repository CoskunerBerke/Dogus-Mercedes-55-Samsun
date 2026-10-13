import React, { useState } from 'react';
import { Phone, MapPin, Clock, Navigation, MessageCircle, FileText, Mail, Building2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [productCategory, setProductCategory] = useState('PVC & Poliüretan Çizme (Gezer / Polito)');
  const [orderDetails, setOrderDetails] = useState('');

  const handleWhatsAppQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Merhaba Emek Lastik Satış Ekibi,\n\n*Firma / Kurum:* ${companyName || 'Belirtilmedi'}\n*İlgilenilen Ürün Grubu:* ${productCategory}\n*Talep / Adet Notu:* ${orderDetails || 'Toptan fiyat listesi ve katalog talep ediyorum.'}\n\nBilgi ve fiyat teklifi rica ederim.`;
    window.open(
      `https://wa.me/903622666222?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="iletisim" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-2">
            FABRİKA MERKEZ & BÖLGE BAYİLİĞİ
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            İletişim, Katalog ve Toptan Sipariş
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Direct Contact Details + Regional Office */}
          <div className="lg:col-span-5 space-y-4">
            {/* Samsun HQ */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Fabrika Santral &amp; Faks (Samsun OSB)
                  </div>
                  <a
                    href="tel:+903622666222"
                    className="block text-xl font-display font-bold text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    +90 (362) 266 62 22
                  </a>
                  <span className="block text-sm text-slate-600 mt-1">
                    Faks: +90 (362) 266 66 99
                  </span>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Samsun Merkez Fabrika Adresi
                  </div>
                  <p className="text-slate-900 text-sm font-bold leading-relaxed">
                    Organize Sanayi Bölgesi, Vali Erdoğan Cebeci Bulvarı No:70
                  </p>
                  <p className="text-slate-600 text-sm mt-0.5">
                    P.K.: 55330 Kutlukent, Tekkeköy / SAMSUN
                  </p>
                  <span className="inline-block mt-1.5 text-xs text-blue-800 font-bold bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
                    13.000 m² Kapalı • 20.000 m² Toplam Üretim Tesisi
                  </span>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Kurumsal E-Posta & Çalışma Saatleri
                  </div>
                  <a
                    href="mailto:emek@emeklastik.com.tr"
                    className="text-slate-900 hover:text-blue-700 text-sm font-bold transition-colors block"
                  >
                    emek@emeklastik.com.tr
                  </a>
                  <p className="text-slate-600 text-xs mt-1 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-blue-700" />
                    Pazartesi – Cumartesi: 08:00 – 18:00
                  </p>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Emek+Lastik+Organize+Sanayi+B%C3%B6lgesi+Vali+Erdo%C4%9Fan+Cebeci+Bulvar%C4%B1+No+70+Tekkek%C3%B6y+Samsun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  Fabrika Yol Tarifi
                </a>
                <a
                  href="/emek/EmekLastik_Katalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold py-3 px-4 rounded-lg text-sm transition-colors border border-slate-300"
                >
                  <FileText className="w-4 h-4 text-blue-700" />
                  PDF Katalog İndir
                </a>
              </div>
            </div>

            {/* Gaziantep Regional Dealer */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                    Güneydoğu Bölge Bayiliği (Gaziantep)
                  </div>
                  <p className="text-slate-800 text-xs font-medium leading-relaxed">
                    Çakmak Mah. Başak Sok. No:46 Şehitkamil / GAZİANTEP
                  </p>
                  <a
                    href="tel:+903423236053"
                    className="inline-block mt-1.5 text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    Tel: +90 (342) 323 60 53
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Wholesale Inquiry Form + Google Maps Embed */}
          <div className="lg:col-span-7 space-y-6">
            {/* Direct Wholesale / Dealer Inquiry Form */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                Hızlı Toptan Sipariş & Bayilik Teklif Formu
              </h3>
              <p className="text-slate-600 text-xs mb-5">
                Firma bilginizi ve ilgilendiğiniz ürün grubunu seçerek doğrudan fabrika satış hattımıza mesaj gönderebilirsiniz.
              </p>

              <form onSubmit={handleWhatsAppQuote} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Firma / Kurum Adınız
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Örn: Karadeniz Tarım Market / Kurum Adı"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      İlgilenilen Ürün Grubu
                    </label>
                    <select
                      value={productCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    >
                      <option value="PVC & Poliüretan Çizme (Gezer / Polito)">PVC & Poliüretan Çizme (Gezer / Polito)</option>
                      <option value="Çelik Burunlu İş Güvenliği Çizmesi (S4/S5)">Çelik Burunlu İş Güvenliği Çizmesi (S4/S5)</option>
                      <option value="Cushy Work Deri İş Güvenliği Botları">Cushy Work Deri İş Güvenliği Botları</option>
                      <option value="Kauçuk & Lastik Ayakkabı Grubu">Kauçuk & Lastik Ayakkabı Grubu</option>
                      <option value="Galoş & Hijyenik Gıda Çizmesi Grubu">Galoş & Hijyenik Gıda Çizmesi Grubu</option>
                      <option value="Cushy / Polito Spor & Günlük Ayakkabı">Cushy / Polito Spor & Günlük Ayakkabı</option>
                      <option value="Bayilik / İhracat Talebi">Bayilik / İhracat Talebi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Sipariş Adedi veya Mesajınız
                  </label>
                  <input
                    type="text"
                    value={orderDetails}
                    onChange={(e) => setOrderDetails(e.target.value)}
                    placeholder="Örn: 200 çift balıkçı çizmesi ve 100 çift çelik burunlu iş çizmesi fiyat teklifi..."
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Satış Hattına Gönder
                  </button>
                  <a
                    href="mailto:emek@emeklastik.com.tr?subject=Toptan%20Fiyat%20Teklifi%20Talebi"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-bold px-5 py-3 rounded-lg text-sm transition-colors border border-slate-300"
                  >
                    <Mail className="w-4 h-4 text-blue-700" />
                    Resmi E-Posta Gönder
                  </a>
                </div>
              </form>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden h-[290px] shadow-sm">
              <iframe
                title="Emek Lastik Samsun Organize Sanayi Bölgesi Konumu"
                src="https://maps.google.com/maps?q=Emek%20Lastik%20Organize%20Sanayi%20B%C3%B6lgesi%20Tekkek%C3%B6y%20Samsun&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
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
