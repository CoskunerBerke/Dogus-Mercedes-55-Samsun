import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090b] border-t border-zinc-800 text-zinc-400 text-xs pb-24 lg:pb-10 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="45" strokeWidth="5" />
                <path d="M50 7 L50 50 M50 50 L13 71 M50 50 L87 71" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="text-base font-extrabold text-white block">DOĞUŞ MERCEDES SAMSUN</span>
              <span className="text-[11px] text-zinc-400">Özel Servis & Yedek Parça • Tekkeköy / Samsun</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-zinc-300">
            <a href="#hizmetler" className="hover:text-white">Hizmetlerimiz</a>
            <a href="#galeri" className="hover:text-white">Servisimiz & Depomuz</a>
            <a href="#ustalar" className="hover:text-white">Ustalarımız</a>
            <a href="#yorumlar" className="hover:text-white">Yorumlar</a>
            <a href="#iletisim" className="hover:text-white">İletişim</a>
            <a
              href="https://www.instagram.com/dogusmercedes55/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram: @dogusmercedes55
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Doğuş Mercedes Servis ve Yedek Parça. Tüm Hakları Saklıdır.</p>
          <p>İstiklal Mah. 19 Mayıs Sanayi Sitesi 58. Sk. No:31/26 Tekkeköy / Samsun • 0552 260 56 66</p>
        </div>
      </div>
    </footer>
  );
};
