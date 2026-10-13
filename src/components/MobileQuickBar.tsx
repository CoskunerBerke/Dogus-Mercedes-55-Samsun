import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href="tel:+905522605666"
          className="flex items-center justify-center gap-1.5 bg-blue-700 active:bg-blue-800 text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Hemen Ara</span>
        </a>

        <a
          href="https://wa.me/905522605666?text=Merhaba%20Do%C4%9Fu%C5%9F%20Mercedes%20Samsun%2C%20servis%20ve%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-emerald-600 active:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-slate-100 active:bg-slate-200 text-slate-900 font-bold py-2.5 px-3 rounded-lg text-xs border border-slate-300"
        >
          <Navigation className="w-3.5 h-3.5 shrink-0 text-blue-700" />
          <span>Yol Tarifi</span>
        </a>
      </div>
    </div>
  );
};
