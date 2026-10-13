import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, MessageCircle, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Çalışılan Markalar & Filolar', href: '#firmalar' },
    { name: 'Müşteri Yorumları', href: '#yorumlar' },
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Servisimizden Kareler', href: '#servisimiz' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Brand & Nav Links (ARMA style) */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3 shrink-0">
              <div className="px-3 py-1.5 rounded-md bg-blue-600 border border-blue-400/40 font-display font-bold text-white text-base tracking-wider shadow-xs">
                DOĞUŞ 55
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-base text-white tracking-wide leading-none">
                  MERCEDES ÖZEL SERVİS
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  Tekkeköy 19 Mayıs Sanayi • Samsun
                </div>
              </div>
            </a>

            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Location Pill + Emerald CTA Button (ARMA style) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+905522605666"
              className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/15 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>7/24 Yol Yardım: 0552 260 56 66</span>
            </a>

            <a
              href="https://wa.me/905522605666?text=Merhaba%20Do%C4%9Fu%C5%9F%20Mercedes%20Samsun%2C%20servis%20randevusu%20ve%20yedek%20par%C3%A7a%20fiyat%C4%B1%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ücretsiz Fiyat &amp; Randevu Al</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg bg-slate-900 text-slate-200 hover:text-white border border-white/15"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs text-slate-400 px-2">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>19 Mayıs Sanayi Sitesi, 58. Sokak No:31/26 Tekkeköy / Samsun</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:+905522605666"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-lg text-sm"
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
