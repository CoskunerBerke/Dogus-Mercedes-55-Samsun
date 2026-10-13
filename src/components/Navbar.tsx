import React, { useState } from 'react';
import { Phone, MapPin, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0c0e]/95 backdrop-blur-md border-b border-zinc-800">
      {/* Top Info Strip */}
      <div className="bg-[#111317] border-b border-zinc-800/80 text-xs text-zinc-300 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span>19 Mayıs Sanayi Sitesi, 58. Sokak No:31/26 Tekkeköy / Samsun</span>
          </div>

          <div className="flex items-center gap-4 ml-auto font-medium">
            <a href="tel:03622605666" className="hidden sm:inline text-zinc-400 hover:text-white transition-colors">
              Sabit: (0362) 260 56 66
            </a>
            <span className="hidden sm:inline text-zinc-700">|</span>
            <a href="tel:05522605666" className="text-white hover:underline font-bold">
              GSM / Yol Yardım: 0552 260 56 66
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-full border border-zinc-600 bg-zinc-900 flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              <circle cx="50" cy="50" r="45" strokeWidth="4.5" />
              <path d="M50 6 L50 50 M50 50 L12 72 M50 50 L88 72" strokeWidth="4.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white block leading-none">
              DOĞUŞ MERCEDES
            </span>
            <span className="text-[11px] font-medium tracking-widest text-zinc-400 uppercase mt-1 block">
              Samsun Özel Servis & Yedek Parça
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-zinc-300">
          <a href="#hizmetler" className="hover:text-white transition-colors">
            Hizmetlerimiz
          </a>
          <a href="#galeri" className="hover:text-white transition-colors">
            Servisimiz & Yedek Parça Depomuz
          </a>
          <a href="#ustalar" className="hover:text-white transition-colors">
            Hakkımızda & Ustalarımız
          </a>
          <a href="#yorumlar" className="hover:text-white transition-colors">
            Müşteri Yorumları
          </a>
          <a href="#iletisim" className="hover:text-white transition-colors">
            İletişim & Harita
          </a>
        </div>

        {/* Call Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="tel:05522605666"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>0552 260 56 66</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800"
          aria-label="Menü"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111317] border-b border-zinc-800 px-4 py-5 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-semibold text-zinc-200">
            <a href="#hizmetler" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              Hizmetlerimiz
            </a>
            <a href="#galeri" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              Servisimiz & Yedek Parça Depomuz
            </a>
            <a href="#ustalar" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              Hakkımızda & Ustalarımız
            </a>
            <a href="#yorumlar" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              Müşteri Yorumları
            </a>
            <a href="#iletisim" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              İletişim & Harita
            </a>
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href="tel:05522605666"
              className="w-full py-3 rounded-lg bg-white text-black font-bold text-center text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Hemen Ara: 0552 260 56 66</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
