import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { MercedesLogo } from './MercedesLogo';

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
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Mercedes-Benz Logo + Brand + Nav Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3.5 shrink-0 group">
              <div className="w-11 h-11 rounded-full bg-black border border-white/25 flex items-center justify-center p-1.5 group-hover:border-white transition-colors">
                <MercedesLogo className="w-full h-full" variant="light" />
              </div>
              <div className="border-l border-white/20 pl-3.5">
                <div className="font-display font-bold text-base sm:text-lg text-white tracking-wider leading-none">
                  DOĞUŞ MERCEDES 55
                </div>
                <div className="text-[11px] text-neutral-400 font-medium tracking-wide mt-1 uppercase">
                  Mercedes-Benz Özel Servis • Samsun
                </div>
              </div>
            </a>

            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Monochrome Phone Pill + Crisp White CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+905522605666"
              className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>7/24 Yol Yardım: 0552 260 56 66</span>
            </a>

            <a
              href="https://wa.me/905522605666?text=Merhaba%20Do%C4%9Fu%C5%9F%20Mercedes%20Samsun%2C%20servis%20randevusu%20ve%20yedek%20par%C3%A7a%20fiyat%C4%B1%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ücretsiz Fiyat &amp; Randevu Al</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg bg-neutral-900 text-neutral-200 hover:text-white border border-white/20"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-black border-b border-white/15 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/15 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs text-neutral-400 px-2">
              <MapPin className="w-4 h-4 text-white shrink-0" />
              <span>19 Mayıs Sanayi Sitesi, 58. Sokak No:31/26 Tekkeköy / Samsun</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:+905522605666"
                className="flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-lg text-sm"
              >
                <Phone className="w-4 h-4" />
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905522605666"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-neutral-900 text-white border border-white/25 font-bold py-3 rounded-lg text-sm"
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
