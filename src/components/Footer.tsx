import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleCallRedirect = () => {
    window.location.href = "tel:05522605666";
  };

  return (
    <footer className="bg-[#07090d] border-t border-slate-800/80 text-slate-400 text-xs pb-24 lg:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-200" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                  <circle cx="50" cy="50" r="46" strokeWidth="5" />
                  <path d="M50 8 L50 50 M50 50 L14 71 M50 50 L86 71" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="text-base font-bold text-white block">DOĞUŞ MERCEDES</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Samsun Özel Servis</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Samsun Tekkeköy 19 Mayıs Sanayi Sitesinde Mercedes-Benz binek ve ticari araçlar için uzman özel servis, arıza tespiti, periyodik bakım ve orijinal yedek parça çözümleri.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/dogusmercedes55/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-slate-700 transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="Google Haritalar"
              >
                <MapPin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/CoskunerBerke"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Hizmetlerimiz</h4>
            <ul className="space-y-2.5">
              <li><a href="#hizmetler" className="hover:text-white transition-colors">Xentry Star Arıza Tespiti</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition-colors">Periyodik Sıvı & Filtre Bakımı</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition-colors">7G & 9G-Tronic Şanzıman Revizyonu</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition-colors">Airmatic Süspansiyon Tamiri</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition-colors">Motor Mekanik & Eksantrik Zincir</a></li>
              <li><a href="#hizmetler" className="hover:text-white transition-colors">Fren ve Ön Takım Güvenliği</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Hızlı Erişim</h4>
            <ul className="space-y-2.5">
              <li><a href="#video-tur" className="hover:text-white transition-colors">Canlı Atölye Videosu</a></li>
              <li><a href="#yorumlar" className="hover:text-white transition-colors">Google Haritalar Yorum Nehri (4.8 ★)</a></li>
              <li><a href="#galeri" className="hover:text-white transition-colors">Atölye & Bekleme Salonu Galerisi</a></li>
              <li><a href="#hakkimizda" className="hover:text-white transition-colors">Ustalarımız & Hikayemiz</a></li>
              <li><a href="#iletisim" className="hover:text-white transition-colors">Harita & Yol Tarifi</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Doğrudan İletişim</h4>
            
            <p className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>İstiklal, 58. Sk. No:31/26, 55330 Tekkeköy / Samsun</span>
            </p>

            <button
              onClick={handleCallRedirect}
              className="flex items-center gap-2 text-white font-bold hover:text-slate-200 transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-slate-400" />
              <span>0552 260 56 66 (GSM & WhatsApp)</span>
            </button>

            <a
              href="tel:03622605666"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs"
            >
              <Phone className="w-4 h-4 text-slate-400" />
              <span>(0362) 260 56 66 (Sabit Servis)</span>
            </a>

            <div className="pt-2">
              <button
                onClick={handleCallRedirect}
                className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-950 font-bold text-xs hover:bg-slate-100 transition-colors"
              >
                Bilgi Al: 0552 260 56 66
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Doğuş Mercedes Servis ve Yedek Parça Ltd. Şti. Tüm Hakları Saklıdır.
          </p>

          <p className="flex items-center gap-1.5 justify-center">
            <span>Geliştirici:</span>
            <a
              href="https://github.com/CoskunerBerke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-white font-medium underline underline-offset-2 flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>CoskunerBerke</span>
            </a>
          </p>
        </div>

        <div className="mt-4 text-[10px] text-slate-400 text-center leading-relaxed">
          Yasal Bilgilendirme: Doğuş Mercedes, Mercedes-Benz AG veya yetkili distribütörlerinden bağımsız özel bir servis ve yedek parça işletmesidir. Sitede yer alan marka isimleri ve amblemler sadece araç uyumluluğunu ve uzmanlık alanını belirtmek amacıyla kullanılmıştır.
        </div>
      </div>
    </footer>
  );
};
