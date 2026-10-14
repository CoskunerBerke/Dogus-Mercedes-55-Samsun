import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { MercedesLogo } from './MercedesLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Hakkımızda', href: '#firmalar' },
    { name: 'Hizmetler', href: '#hizmetler' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'Atölye', href: '#servisimiz' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Left: Mercedes-Benz Logo + Brand */}
          <a href="#" className="flex items-center gap-3.5 shrink-0">
            <div className="w-10 h-10 rounded-full bg-black border border-white/30 flex items-center justify-center p-1.5 shrink-0">
              <MercedesLogo className="w-full h-full" variant="light" />
            </div>
            <div className="border-l border-white/20 pl-3.5 whitespace-nowrap">
              <span className="block font-bold text-sm sm:text-base text-white tracking-wider leading-none">
                DOĞUŞ MERCEDES 55
              </span>
              <span className="block text-[11px] text-neutral-400 font-medium tracking-wider uppercase mt-1">
                MERCEDES-BENZ ÖZEL SERVİS • SAMSUN
              </span>
            </div>
          </a>

          {/* Center: Single-word links (whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Monochrome Phone + Clean CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="tel:+905522605666"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/10 text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 text-white shrink-0" />
              <span>0552 260 56 66</span>
            </a>

            <a
              href="https://wa.me/905522605666?text=Merhaba%20Do%C4%9Fu%C5%9F%20Mercedes%20Samsun%2C%20servis%20randevusu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Randevu Al
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/10 shrink-0"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-white/15 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-white/15 grid grid-cols-2 gap-2.5">
            <a
              href="tel:+905522605666"
              className="flex items-center justify-center gap-2 bg-white text-black font-semibold py-2.5 rounded-lg text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>0552 260 56 66</span>
            </a>
            <a
              href="https://wa.me/905522605666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-neutral-900 text-white border border-white/25 font-semibold py-2.5 rounded-lg text-sm"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
