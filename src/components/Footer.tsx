import React from 'react';
import { Phone, MapPin, FileText, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pb-24 lg:pb-10 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src="/emek/logo.png"
              alt="Emek Lastik Logo"
              className="h-11 w-auto object-contain"
            />
            <div>
              <div className="font-display font-bold text-lg text-slate-900 tracking-wide">
                EMEK LASTİK ve PLASTİK AYAKKABI SAN. ve TİC. A.Ş.
              </div>
              <p className="text-slate-600 text-sm mt-0.5">
                1961&apos;den Bugüne Yerli Sermaye • Samsun Organize Sanayi Bölgesi
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="tel:+903622666222"
              className="flex items-center gap-2 text-slate-800 hover:text-blue-700 font-bold bg-white px-4 py-2.5 rounded-lg border border-slate-300 shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              +90 (362) 266 62 22
            </a>
            <a
              href="mailto:emek@emeklastik.com.tr"
              className="flex items-center gap-2 text-slate-800 hover:text-blue-700 font-bold bg-white px-4 py-2.5 rounded-lg border border-slate-300 shadow-xs transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-700" />
              emek@emeklastik.com.tr
            </a>
            <a
              href="/emek/EmekLastik_Katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-800 hover:text-blue-900 font-bold bg-blue-50 px-4 py-2.5 rounded-lg border border-blue-200 transition-colors"
            >
              <FileText className="w-4 h-4 text-blue-700" />
              Resmi PDF Katalog
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-blue-700 shrink-0" />
            <span>
              Organize Sanayi Bölgesi, Vali Erdoğan Cebeci Bulvarı No:70, 55330 Kutlukent, Tekkeköy / SAMSUN
            </span>
          </div>
          <p className="font-medium">
            © {new Date().getFullYear()} Emek Lastik ve Plastik Ayakkabı San. ve Tic. A.Ş. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
