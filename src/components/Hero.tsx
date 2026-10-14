import React from 'react';
import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MercedesLogo } from './MercedesLogo';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[82vh] flex items-center bg-black overflow-hidden">
      {/* Full-Screen Continuous Background Video (No controls, seamless loop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/workshop-exterior.png"
        className="absolute inset-0 w-full h-full object-cover scale-[1.02] pointer-events-none grayscale contrast-110"
      >
        <source src="/Automotive_repair_shop_at_night_20261012193207.mp4" type="video/mp4" />
      </video>

      {/* Pure Monochrome High-Contrast Black Gradient Overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Mercedes-Benz Emblem Pill */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 mb-6">
            <MercedesLogo className="w-5 h-5" variant="light" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              Mercedes-Benz Özel Servis &amp; Yedek Parça • Samsun
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5">
            Samsun ve Karadeniz&apos;de Mercedes-Benz araçlar için{' '}
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent underline decoration-white/30 underline-offset-8">
              garantili özel servis
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
            Kurucu ustalarımız <strong className="text-white">Engin Çalımlı, Ercan Aycan ve Uğur Gözoğlu</strong> yönetiminde; lisanslı Xentry bilgisayarlı arıza tespiti, kendi depomuzdan yıldızlı orijinal yedek parça ve kurumsal filo bakımı.
          </p>

          {/* Monochrome Mercedes Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <a
              href="https://wa.me/905522605666?text=Merhaba%20Do%C4%9Fu%C5%9F%20Mercedes%20Samsun%2C%20arac%C4%B1m%20i%C3%A7in%20bak%C4%B1m%20ve%20par%C3%A7a%20fiyat%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-neutral-200 text-black font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ücretsiz Fiyat &amp; Randevu Al</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+905522605666"
              className="inline-flex items-center gap-2.5 bg-black/80 hover:bg-neutral-900 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/30 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>0552 260 56 66 • Hemen Ara</span>
            </a>

            <a
              href="#hizmetler"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-4 rounded-xl text-sm sm:text-base transition-colors border border-white/20 backdrop-blur-md"
            >
              <span>Hizmetleri İncele</span>
            </a>
          </div>

          {/* Trust Footnote Line */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium">
            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            <span>
              4.8/5 Google Puanı • Yıldızlı Orijinal &amp; Alman OEM Parça Stoğu • 7/24 Acil Yol Yardım
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
