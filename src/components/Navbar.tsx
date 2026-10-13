import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, ArrowUpRight, Cpu, Package, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWorkshopOpenHours, setIsWorkshopOpenHours] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun, 1..6 = Mon..Sat
      const hour = now.getHours();
      const isOpen = day >= 1 && day <= 6 && hour >= 8 && hour < 19;
      setIsWorkshopOpenHours(isOpen);
    };
    checkStatus();
  }, []);

  const handleCallRedirect = () => {
    window.location.href = 'tel:05522605666';
  };

  return (
    <header className="sticky top-0 z-50 bg-[#06080c]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40">
      {/* Top Telemetry & Contact Micro Bar */}
      <div className="bg-gradient-to-r from-[#090d14] via-[#0d131f] to-[#090d14] border-b border-slate-800/60 text-xs text-slate-300 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a
              href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>19 Mayıs Sanayi Sitesi, 58. Sk. No:31/26 • Tekkeköy / Samsun</span>
            </a>
            <span className="hidden xl:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Pzt - Cmt: 08:00 - 19:00</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 font-medium text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {isWorkshopOpenHours ? 'Servis Sahası Açık' : '7/24 Yol Yardım Aktif'}
            </span>

            <a
              href="tel:03622605666"
              className="hidden md:flex items-center gap-1 text-slate-400 hover:text-slate-200 font-mono text-[11px] transition-colors"
            >
              <span>Santral: (0362) 260 56 66</span>
            </a>

            <span className="hidden md:inline text-slate-700">|</span>

            <a
              href="tel:05522605666"
              onClick={handleCallRedirect}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>
                Acil / Danışma: <strong className="text-white font-mono">0552 260 56 66</strong>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Emblem & Title */}
        <a href="#" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative w-11 h-11 rounded-full bg-gradient-to-b from-white via-slate-300 to-slate-600 p-[1.5px] shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-[#070a10] flex items-center justify-center">
              <svg className="w-7 h-7 text-slate-100" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="45" strokeWidth="4.5" />
                <path d="M50 6 L50 50 M50 50 L12 72 M50 50 L88 72" strokeWidth="4.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white font-display">
                DOĞUŞ MERCEDES
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-bold bg-slate-800 text-cyan-300 rounded border border-slate-700">
                55
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
              Samsun • Özel Servis & Yedek Parça
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs xl:text-sm font-semibold text-slate-300">
          <a
            href="#bakim-robotu"
            className="hover:text-white transition-colors flex items-center gap-1.5 text-cyan-300"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Bakım Robotu</span>
          </a>
          <a
            href="#yedek-parca"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Package className="w-3.5 h-3.5 text-amber-400" />
            <span>Yedek Parça</span>
          </a>
          <a href="#hizmetler" className="hover:text-white transition-colors">
            Hizmetlerimiz
          </a>
          <a href="#video-tur" className="hover:text-white transition-colors flex items-center gap-1.5">
            <span>Canlı Atölye</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          </a>
          <a href="#galeri" className="hover:text-white transition-colors">
            Servis & Ofis
          </a>
          <a href="#yorumlar" className="hover:text-white transition-colors">
            Yorumlar (4.8★)
          </a>
          <a href="#hakkimizda" className="hover:text-white transition-colors">
            Ustalarımız
          </a>
          <a href="#iletisim" className="hover:text-white transition-colors">
            Konum
          </a>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 transition-colors"
            title="WhatsApp Hızlı Destek"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <a
            href="tel:05522605666"
            onClick={handleCallRedirect}
            className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-950 text-xs xl:text-sm font-extrabold shadow-md hover:bg-slate-100 transition-all duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-slate-950 fill-current" />
            <span className="font-mono">0552 260 56 66</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
          aria-label="Menüyü Aç"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d14] border-b border-slate-800 px-4 py-5 space-y-4 shadow-2xl">
          <div className="grid grid-cols-1 gap-1.5 text-sm font-semibold text-slate-200">
            <a
              href="#bakim-robotu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                İnteraktif Bakım & Arıza Robotu
              </span>
              <span className="text-[10px] font-mono uppercase bg-cyan-500/20 px-2 py-0.5 rounded">Yeni</span>
            </a>
            <a
              href="#yedek-parca"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3.5 rounded-xl hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Package className="w-4 h-4 text-amber-400" />
                Orijinal Yedek Parça & Şasi Sorgu
              </span>
              <span className="text-xs text-amber-400 font-mono">5.000+ Stok</span>
            </a>
            <a
              href="#hizmetler"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3.5 rounded-xl hover:bg-slate-800/60"
            >
              Fabrika Standartlarında Hizmetlerimiz
            </a>
            <a
              href="#video-tur"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3.5 rounded-xl hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span>Canlı Atölye Videosu</span>
              <span className="text-xs bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 rounded">
                Gece Çekimi
              </span>
            </a>
            <a
              href="#galeri"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3.5 rounded-xl hover:bg-slate-800/60"
            >
              Atölye, Ofis & Bekleme Salonu
            </a>
            <a
              href="#yorumlar"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3.5 rounded-xl hover:bg-slate-800/60"
            >
              Google Müşteri Yorumları (4.8 ★)
            </a>
            <a
              href="#hakkimizda"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3.5 rounded-xl hover:bg-slate-800/60"
            >
              Kurucu Ustalarımız & Hikayemiz
            </a>
            <a
              href="#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3.5 rounded-xl hover:bg-slate-800/60"
            >
              İletişim & Harita Konumu
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href="tel:05522605666"
              onClick={() => {
                handleCallRedirect();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-slate-950 font-extrabold text-sm shadow-md"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Ara: 0552 260 56 66</span>
            </a>
            <a
              href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Servis Hattı</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
