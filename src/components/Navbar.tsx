import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Çalışılan Firmalar & Markalar', href: '#firmalar' },
    { name: 'Müşteri Yorumları', href: '#yorumlar' },
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Servisimizden Kareler', href: '#servisimiz' },
    { name: 'İletişim & Konum', href: '#iletisim' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Info Strip */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Mercedes-Benz Özel Servis &amp; Orijinal Yedek Parça • Engin Çalımlı • Ercan Aycan • Uğur Gözoğlu</span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              19 Mayıs Sanayi Sitesi, 58. Sk. No:31/26 Tekkeköy / Samsun
            </span>
            <a href="tel:+905522605666" className="text-white font-bold hover:text-blue-300 transition-colors">
              7/24 Yol Yardım: 0552 260 56 66
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-blue-700 flex items-center justify-center font-display font-bold text-white text-lg tracking-wider shadow-xs">
              DM
            </div>
            <div>
              <div className="font-display font-bold text-lg sm:text-xl text-slate-900 tracking-wide leading-none">
                DOĞUŞ MERCEDES <span className="text-blue-700">55</span>
              </div>
              <div className="text-[11px] text-slate-500 font-bold tracking-wider uppercase mt-1">
                Özel Servis &amp; Yedek Parça • Samsun
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-700 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/905522605666?text=Merhaba%20Do%C4%9Fu%C5%9F%20Mercedes%20Samsun%2C%20servis%20randevusu%20ve%20yedek%20par%C3%A7a%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+905522605666"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>0552 260 56 66</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:bg-slate-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs text-slate-600 px-2">
              <MapPin className="w-4 h-4 text-blue-700 shrink-0" />
              <span>19 Mayıs Sanayi Sitesi, 58. Sokak No:31/26 Tekkeköy / Samsun</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:+905522605666"
                className="flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3 rounded-lg text-sm"
              >
                <Phone className="w-4 h-4" />
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905522605666"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-lg text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
