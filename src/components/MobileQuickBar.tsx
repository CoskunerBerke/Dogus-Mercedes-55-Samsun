import React from 'react';
import { Phone, Navigation } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-[#0b0c0e]/95 backdrop-blur-md border-t border-zinc-800">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:05522605666"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white text-black font-extrabold text-xs sm:text-sm"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Hemen Ara: 0552 260 56 66</span>
        </a>

        <a
          href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 font-bold text-xs"
        >
          WhatsApp
        </a>

        <a
          href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-800 flex items-center justify-center"
          aria-label="Yol Tarifi"
        >
          <Navigation className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
