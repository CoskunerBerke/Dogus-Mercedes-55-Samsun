import React, { useState } from 'react';
import { Phone, Clock, MapPin, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCallRedirect = () => {
    window.location.href = "tel:05522605666";
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0d12]/95 backdrop-blur-md border-b border-slate-800/80">
      {/* Top micro bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800/50 text-xs text-slate-300 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Tekkeköy, Samsun (19 Mayıs Sanayi)</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Pzt - Cmt: 08:00 - 19:00</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-medium text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Servis Aktif
            </span>
            <a 
              href="tel:05522605666" 
              onClick={handleCallRedirect}
              className="flex items-center gap-1 text-slate-200 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-slate-300" />
              <span>Acil / Danışma: <strong className="text-white">0552 260 56 66</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-[1.5px] shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center">
              {/* Mercedes-Benz 3-pointed star SVG */}
              <svg className="w-7 h-7 text-slate-200" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="46" strokeWidth="4.5" />
                <path d="M50 7 L50 50 M50 50 L12 72 M50 50 L88 72" strokeWidth="4.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
              DOĞUŞ MERCEDES
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
              Samsun • Özel Servis & Yedek Parça
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</a>
          <a href="#video-tur" className="hover:text-white transition-colors flex items-center gap-1">
            <span>Atölye Videosu</span>
            <span className="px-1.5 py-0.2 text-[10px] bg-slate-800 text-slate-300 rounded border border-slate-700">Canlı</span>
          </a>
          <a href="#yorumlar" className="hover:text-white transition-colors">Google Yorumları</a>
          <a href="#galeri" className="hover:text-white transition-colors">Atölyemiz</a>
          <a href="#hakkimizda" className="hover:text-white transition-colors">Ustalarımız</a>
          <a href="#iletisim" className="hover:text-white transition-colors">İletişim & Konum</a>
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:05522605666"
            onClick={handleCallRedirect}
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-gradient-to-b from-slate-100 to-slate-200 text-slate-900 text-sm font-semibold shadow-md hover:from-white hover:to-slate-100 hover:shadow-lg hover:shadow-white/10 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-slate-900" />
            <span>Bilgi Al: 0552 260 56 66</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          aria-label="Menüyü Aç"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1017] border-b border-slate-800 px-4 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <a 
              href="#hizmetler" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              Hizmetlerimiz
            </a>
            <a 
              href="#video-tur" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span>Atölye Videosu</span>
              <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">Gece Çekimi</span>
            </a>
            <a 
              href="#yorumlar" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              Google Yorumları (4.8 ★)
            </a>
            <a 
              href="#galeri" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              Atölyemiz & Bekleme Salonu
            </a>
            <a 
              href="#hakkimizda" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              Ustalarımız
            </a>
            <a 
              href="#iletisim" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-800/60"
            >
              İletişim & Konum
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            <a
              href="tel:05522605666"
              onClick={() => {
                handleCallRedirect();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white text-slate-900 font-semibold text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>Bilgi Al: 0552 260 56 66</span>
            </a>
            <a
              href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-medium text-sm"
            >
              <span>WhatsApp Servis Hattı</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
