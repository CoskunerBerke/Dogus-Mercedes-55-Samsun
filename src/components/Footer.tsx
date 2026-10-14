import React from 'react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { MercedesLogo } from './MercedesLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-neutral-800 pb-24 lg:pb-10 pt-12 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-black border border-white/25 flex items-center justify-center p-2 shrink-0">
              <MercedesLogo className="w-full h-full" variant="light" />
            </div>
            <div>
              <div className="font-display font-bold text-xl text-white tracking-wider">
                DOĞUŞ MERCEDES <span className="text-neutral-400">55</span> SAMSUN
              </div>
              <p className="text-neutral-400 text-sm mt-1">
                Mercedes-Benz Özel Servis &amp; Yedek Parça • Engin Çalımlı • Ercan Aycan • Uğur Gözoğlu
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="tel:+905522605666"
              className="flex items-center gap-2 text-black hover:bg-neutral-200 font-bold bg-white px-4 py-2.5 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-black" />
              0552 260 56 66
            </a>
            <a
              href="https://www.instagram.com/dogusmercedes55/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:bg-neutral-800 font-bold bg-neutral-900 px-4 py-2.5 rounded-lg border border-neutral-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-white" />
              @dogusmercedes55
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
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
