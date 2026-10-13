import React from 'react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pb-24 lg:pb-10 pt-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="font-display font-bold text-xl text-white tracking-wide">
              DOĞUŞ MERCEDES <span className="text-sky-400">55</span> SAMSUN
            </div>
            <p className="text-slate-400 text-sm mt-1">
              Mercedes-Benz Özel Servis &amp; Yedek Parça • Engin Çalımlı • Ercan Aycan • Uğur Gözoğlu
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="tel:+905522605666"
              className="flex items-center gap-2 text-white hover:text-sky-300 font-bold bg-slate-900 px-4 py-2.5 rounded-lg border border-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              0552 260 56 66
            </a>
            <a
              href="https://www.instagram.com/dogusmercedes55/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-sky-300 font-bold bg-slate-900 px-4 py-2.5 rounded-lg border border-slate-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-sky-400" />
              @dogusmercedes55
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
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
