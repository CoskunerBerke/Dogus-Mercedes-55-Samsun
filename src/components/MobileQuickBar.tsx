import React from 'react';
import { Phone, FileDown, Mail } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-[#0b0c0e]/95 backdrop-blur-md border-t border-zinc-800">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:+903622666222"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-red-600 text-white font-extrabold text-xs sm:text-sm"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Ara: 0362 266 62 22</span>
        </a>

        <a
          href="/emek/EmekLastik_Katalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-lg bg-white text-black font-extrabold text-xs flex items-center gap-1.5"
        >
          <FileDown className="w-4 h-4" />
          <span>Katalog</span>
        </a>

        <a
          href="mailto:emek@emeklastik.com.tr"
          className="p-3 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-800 flex items-center justify-center"
          aria-label="E-Posta"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
