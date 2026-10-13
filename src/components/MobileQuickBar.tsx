import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href="tel:+903622666222"
          className="flex items-center justify-center gap-1.5 bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Fabrika Ara</span>
        </a>

        <a
          href="https://wa.me/903622666222?text=Merhaba%20Emek%20Lastik%2C%20toptan%20%C3%BCr%C3%BCn%20ve%20bayilik%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-emerald-600 active:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href="/emek/EmekLastik_Katalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-slate-100 active:bg-slate-200 text-slate-900 font-bold py-2.5 px-3 rounded-lg text-xs border border-slate-300"
        >
          <FileText className="w-3.5 h-3.5 shrink-0 text-blue-700" />
          <span>Katalog PDF</span>
        </a>
      </div>
    </div>
  );
};
