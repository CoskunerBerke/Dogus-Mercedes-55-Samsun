import React from 'react';
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[82vh] flex items-center bg-slate-950 overflow-hidden">
      {/* Full-Screen Continuous Background Video (No controls, seamless loop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/workshop-exterior.png"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02] pointer-events-none"
      >
        <source src="/Automotive_repair_shop_at_night_20261012193207.mp4" type="video/mp4" />
      </video>

      {/* Scientific High-Contrast Dark Gradient Overlay (like Screenshot 3) */}
      <div className="absolute inset-0 bg-slate-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5">
            Samsun ve Karadeniz&apos;de Mercedes-Benz araçlar için{' '}
            <span className="bg-gradient-to-r from-sky-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
              garantili özel servis
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
            Kurucu ustalarımız <strong className="text-white">Engin Çalımlı, Ercan Aycan ve Uğur Gözoğlu</strong> yönetiminde; lisanslı Xentry bilgisayarlı arıza tespiti, kendi depomuzdan orijinal yedek parça ve kurumsal filo bakımı.
          </p>

          {/* Two Clean Action Buttons (Matching Screenshot 3 style) */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <a
              href="https://wa.me/905522605666?text=Merhaba%20Do%C4%9Fu%C5%9F%20Mercedes%20Samsun%2C%20arac%C4%B1m%20i%C3%A7in%20bak%C4%B1m%20ve%20par%C3%A7a%20fiyat%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ücretsiz Fiyat &amp; Randevu Al</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+905522605666"
              className="inline-flex items-center gap-2.5 bg-slate-900/75 hover:bg-slate-900 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/20 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-sky-300" />
              <span>0552 260 56 66 • Hemen Ara</span>
            </a>

            <a
              href="#hizmetler"
              className="inline-flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 text-slate-200 font-semibold px-5 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/15 backdrop-blur-md"
            >
              <span>Hizmetleri İncele</span>
            </a>
          </div>

          {/* Trust Footnote Line (Matching Screenshot 3 bottom-left note) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              4.8/5 Google Puanı • Orijinal &amp; Alman OEM Parça Stoğu • 7/24 Acil Yol Yardım
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
