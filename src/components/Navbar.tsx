import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, FileDown, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Info Strip */}
      <div className="bg-slate-900 text-xs text-slate-200 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Organize Sanayi Bölgesi, Vali Erdoğan Cebeci Bulvarı No:70 Kutlukent / SAMSUN</span>
          </div>

          <div className="flex items-center gap-4 ml-auto font-medium">
            <a
              href="mailto:emek@emeklastik.com.tr"
              className="hidden md:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>emek@emeklastik.com.tr</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a href="tel:+903622666222" className="text-white hover:underline font-bold">
              Fabrika Santral: +90 (362) 266 62 22
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Official Emek Lastik Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img
            src="/emek/logo.png"
            alt="Emek Lastik Since 1961"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-700">
          <a href="#markalar" className="hover:text-red-600 transition-colors">
            Markalar & Çalışılan Kurumlar
          </a>
          <a href="#yorumlar" className="hover:text-red-600 transition-colors">
            Müşteri Yorumları
          </a>
          <a href="#urunler" className="hover:text-red-600 transition-colors">
            Ürün Kataloğu
          </a>
          <a href="#uretim" className="hover:text-red-600 transition-colors">
            Hakkımızda & Üretim
          </a>
          <a href="#iletisim" className="hover:text-red-600 transition-colors">
            İletişim & Harita
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="/emek/EmekLastik_Katalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm transition-colors"
          >
            <FileDown className="w-4 h-4 text-red-600" />
            <span>E-Katalog (PDF)</span>
          </a>

          <a
            href="tel:+903622666222"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>0362 266 62 22</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
          aria-label="Menü"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-base font-bold text-slate-800">
            <a href="#markalar" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-slate-100">
              Markalar & Çalışılan Kurumlar
            </a>
            <a href="#yorumlar" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-slate-100">
              Müşteri & Bayi Yorumları
            </a>
            <a href="#urunler" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-slate-100">
              Ürün Kataloğu
            </a>
            <a href="#uretim" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-slate-100">
              Hakkımızda & Üretim
            </a>
            <a href="#iletisim" onClick={() => setMobileMenuOpen(false)} className="py-2 px-3 rounded hover:bg-slate-100">
              İletişim & Harita
            </a>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="/emek/EmekLastik_Katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-slate-100 text-slate-900 border border-slate-300 font-bold text-center text-sm flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4 text-red-600" />
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
