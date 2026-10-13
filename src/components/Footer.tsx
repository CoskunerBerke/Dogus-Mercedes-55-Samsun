import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090b] border-t border-zinc-800 text-zinc-400 text-xs pb-24 lg:pb-10 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div className="flex items-center gap-4">
            <div className="bg-white px-2.5 py-1 rounded">
              <img
                src="/emek/logo.png"
                alt="Emek Lastik"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div>
              <span className="text-sm sm:text-base font-extrabold text-white block">
                EMEK LASTİK VE PLASTİK AYAKKABI SAN. TİC. A.Ş.
              </span>
              <span className="text-[11px] text-zinc-400">
                Gururlu Geçmiş, Güvenli Gelecek • Since 1961
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-zinc-300">
            <a href="#urunler" className="hover:text-white">Ürün Kataloğu</a>
            <a href="#uretim-gruplari" className="hover:text-white">Üretim Gruplarımız</a>
            <a href="#kurumsal" className="hover:text-white">Hakkımızda</a>
            <a href="#markalar" className="hover:text-white">Markalarımız</a>
            <a href="#yorumlar" className="hover:text-white">Yorumlar</a>
            <a href="#iletisim" className="hover:text-white">İletişim</a>
            <a
              href="/emek/EmekLastik_Katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300"
            >
              E-Katalog (PDF)
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Emek Lastik ve Plastik Ayakkabı San. ve Tic. A.Ş. Tüm Hakları Saklıdır.</p>
          <p>Organize Sanayi Bölgesi Vali Erdoğan Cebeci Bulvarı No:70 Kutlukent / SAMSUN • Tel: +90 (362) 266 62 22</p>
        </div>
      </div>
    </footer>
  );
};
