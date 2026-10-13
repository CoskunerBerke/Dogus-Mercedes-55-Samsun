import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  const handleCallRedirect = () => {
    window.location.href = 'tel:05522605666';
  };

  return (
    <>
      {/* Mobile Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-[#06080c]/95 backdrop-blur-xl border-t border-slate-800 shadow-2xl">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* Main Phone Call Button */}
          <button
            onClick={handleCallRedirect}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white text-slate-950 font-extrabold text-xs sm:text-sm shadow-md active:scale-98 transition-transform"
          >
            <Phone className="w-4 h-4 fill-current text-slate-950" />
            <span>Ara: 0552 260 56 66</span>
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 active:scale-98 transition-transform shadow-md"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Maps Directions */}
          <a
            href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center active:scale-98 transition-transform"
            aria-label="Yol Tarifi"
          >
            <Navigation className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>

      {/* Desktop Floating Quick WhatsApp & Call Dock */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        <a
          href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-xl shadow-emerald-500/20 transition-all duration-200 hover:scale-105"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp Servis & Parça</span>
        </a>
      </div>
    </>
  );
};
