import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, FileDown, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0c0e]/95 backdrop-blur-md border-b border-zinc-800">
      {/* Top Factory Info Bar */}
      <div className="bg-[#111317] border-b border-zinc-800/80 text-xs text-zinc-300 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Organize Sanayi Bölgesi, Vali Erdoğan Cebeci Bulvarı No:70 Kutlukent / SAMSUN</span>
          </div>

          <div className="flex items-center gap-4 ml-auto font-medium">
            <a
              href="mailto:emek@emeklastik.com.tr"
              className="hidden md:inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>emek@emeklastik.com.tr</span>
            </a>
            <span className="hidden md:inline text-zinc-700">|</span>
            <a href="tel:+903622666222" className="text-white hover:underline font-bold">
              Fabrika Santral: +90 (362) 266 62 22
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Official Emek Lastik Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="bg-white px-3 py-1.5 rounded-lg flex items-center">
            <img
              src="/emek/logo.png"
              alt="Emek Lastik Since 1961"
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-zinc-300">
          <a href="#urunler" className="hover:text-white transition-colors">
            Ürün Kataloğu
          </a>
          <a href="#uretim-gruplari" className="hover:text-white transition-colors">
            Üretim Gruplarımız
          </a>
          <a href="#kurumsal" className="hover:text-white transition-colors">
            Hakkımızda (1961)
          </a>
          <a href="#markalar" className="hover:text-white transition-colors">
            Markalarımız
          </a>
          <a href="#yorumlar" className="hover:text-white transition-colors">
            Değerlendirmeler
          </a>
          <a href="#iletisim" className="hover:text-white transition-colors">
            Bayilik & İletişim
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="/emek/EmekLastik_Katalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-bold text-xs sm:text-sm transition-colors"
          >
            <FileDown className="w-4 h-4 text-red-500" />
            <span>E-Katalog (PDF)</span>
          </a>

          <a
            href="tel:+903622666222"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-colors"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>0362 266 62 22</span>
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111317] border-b border-zinc-800 px-4 py-5 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-semibold text-zinc-200">
            <a href="#urunler" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              Ürün Kataloğu
            </a>
            <a href="#uretim-gruplari" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              Üretim Gruplarımız
            </a>
            <a href="#kurumsal" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              Hakkımızda (1961'den Bugüne)
            </a>
            <a href="#markalar" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              Markalarımız
            </a>
            <a href="#yorumlar" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              Müşteri & Bayi Yorumları
            </a>
            <a href="#iletisim" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-zinc-800">
              Bayilik & İletişim
            </a>
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href="/emek/EmekLastik_Katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-zinc-800 text-white font-bold text-center text-sm flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4 text-red-500" />
              <span>E-Katalog İndir (PDF)</span>
            </a>
            <a
              href="tel:+903622666222"
              className="w-full py-3 rounded-lg bg-red-600 text-white font-bold text-center text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Fabrika: +90 (362) 266 62 22</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
