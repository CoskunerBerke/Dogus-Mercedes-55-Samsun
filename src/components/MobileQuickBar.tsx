import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  const handleCallRedirect = () => {
    window.location.href = "tel:05522605666";
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-[#0a0d12]/95 backdrop-blur-lg border-t border-slate-800 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Main Phone Call Button */}
        <button
          onClick={handleCallRedirect}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm shadow-md active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4 fill-current text-slate-950" />
          <span>Bilgi Al: 0552 260 56 66</span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-emerald-600 text-white flex items-center justify-center active:scale-98 transition-transform shadow-md"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>

        {/* Maps Directions */}
        <a
          href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center active:scale-98 transition-transform"
          aria-label="Yol Tarifi"
        >
          <Navigation className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
