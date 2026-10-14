import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[86vh] flex items-center bg-black text-white py-20 border-b border-white/15 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/workshop-exterior.png"
          className="w-full h-full object-cover object-center"
        >
          <source src="/Automotive_repair_shop_at_night_20261012193207.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-white" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">
              19 MAYIS SANAYİ SİTESİ • TEKKEKÖY / SAMSUN
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            Doğuş Oto Mercedes 55 Özel Servis ve Yedek Parça.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-9 max-w-2xl">
            Samsun Tekkeköy 19 Mayıs Sanayi Sitesi’nde Mercedes-Benz binek, hafif ticari (Sprinter,
            Vito) ve ağır vasıta (Actros, Axor, Atego) araçlar için XENTRY bilgisayarlı arıza
            tespiti, motor-şanzıman bakımı ve orijinal yedek parça hizmeti sunuyoruz.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href="tel:+905522605666"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-neutral-200 text-black font-semibold px-6 py-3.5 rounded-lg text-sm sm:text-base transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0552 260 56 66</span>
            </a>

            <a
              href="https://wa.me/905522605666?text=Merhaba%20Do%C4%9Fu%C5%9F%20Mercedes%20Samsun%2C%20servis%20randevusu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 text-white font-medium px-6 py-3.5 rounded-lg border border-white/20 text-sm sm:text-base transition-colors"
            >
              <span>WhatsApp Servis Hattı</span>
            </a>

            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 px-4 py-3.5 text-neutral-200 hover:text-white font-medium text-sm sm:text-base transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Konum & İletişim</span>
            </a>
          </div>

          <div className="border-t border-white/15 pt-5 text-xs sm:text-sm text-neutral-400">
            Adres: Şabanoğlu Mah. 19 Mayıs Sanayi Sitesi 58. Sokak No:31/26 Tekkeköy / Samsun
          </div>
        </div>
      </div>
    </section>
  );
};
