import React from 'react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pb-24 lg:pb-10 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="font-display font-bold text-xl text-slate-900 tracking-wide">
              DOĞUŞ MERCEDES <span className="text-blue-700">55</span> SAMSUN
            </div>
            <p className="text-slate-600 text-sm mt-1">
              Mercedes-Benz Özel Servis &amp; Yedek Parça • Engin Çalımlı • Ercan Aycan • Uğur Gözoğlu
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="tel:+905522605666"
              className="flex items-center gap-2 text-slate-900 hover:text-blue-700 font-bold bg-white px-4 py-2.5 rounded-lg border border-slate-300 shadow-2xs transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              0552 260 56 66
            </a>
            <a
              href="https://www.instagram.com/dogusmercedes55/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-900 hover:text-blue-700 font-bold bg-white px-4 py-2.5 rounded-lg border border-slate-300 shadow-2xs transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-blue-700" />
              @dogusmercedes55
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-blue-700 shrink-0" />
            <span>
              İstiklal Mah. 19 Mayıs Sanayi Sitesi, 58. Sokak No:31/26 Tekkeköy / Samsun
            </span>
          </div>
          <p className="font-medium">
            © {new Date().getFullYear()} Doğuş Mercedes 55 Samsun. Tüm hakları saklıdır. (Bağımsız Mercedes-Benz Özel Servisidir)
          </p>
        </div>
      </div>
    </footer>
  );
};
