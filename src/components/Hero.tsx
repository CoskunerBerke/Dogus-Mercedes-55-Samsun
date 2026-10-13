import React, { useRef, useState } from 'react';
import { Phone, Navigation, Volume2, VolumeX } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden border-b border-zinc-800 bg-black">
      {/* Full-Screen Background Workshop Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/Automotive_repair_shop_at_night_20261012193207.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center"
        />
        {/* Clean dark overlay so text is sharp while workshop video stays clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-20 pb-16 my-auto">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-zinc-300 uppercase mb-4 border-l-2 border-white pl-3">
            Samsun Tekkeköy • 19 Mayıs Sanayi Sitesi
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6">
            DOĞUŞ MERCEDES <br />
            <span className="text-zinc-300 font-bold text-2xl sm:text-4xl lg:text-5xl block mt-2">
              Özel Servis & Yedek Parça
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-4 max-w-2xl">
            Mercedes-Benz binek ve ticari araçlarınız için bilgisayarlı arıza tespiti, periyodik bakım, şanzıman-motor revizyonu ve zengin orijinal yedek parça stoğu.
          </p>

          <p className="text-sm sm:text-base font-bold text-white mb-9">
            Kurucu Ustalarımız: Engin Çalımlı • Ercan Aycan • Uğur Gözoğlu
          </p>

          {/* Direct Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
            <a
              href="tel:05522605666"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-white text-black font-extrabold text-base hover:bg-zinc-200 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Hemen Ara: 0552 260 56 66</span>
            </a>

            <a
              href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold text-base border border-zinc-700 transition-colors"
            >
              <span>WhatsApp Hattı</span>
            </a>

            <a
              href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-black/60 hover:bg-black/80 text-zinc-200 font-semibold text-sm border border-zinc-700/80 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Konum & Yol Tarifi</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Solid Fact Bar + Video Sound Button */}
      <div className="relative z-10 border-t border-zinc-800/90 bg-[#0b0c0e]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 flex-1">
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white">20+ Yıl Tecrübe</div>
              <div className="text-xs text-zinc-400">Çekirdekten yetişme Mercedes ustaları</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white">Xentry Teşhis</div>
              <div className="text-xs text-zinc-400">Orijinal cihazla nokta atışı arıza tespiti</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white">Yedek Parça Deposu</div>
              <div className="text-xs text-zinc-400">Kendi stoğumuzdan beklemesiz montaj</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-extrabold text-white">4.8 ★ Google Puanı</div>
              <div className="text-xs text-zinc-400">Samsun ve Karadeniz'de yüksek memnuniyet</div>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleSound}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold border border-zinc-700 shrink-0 transition-colors"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-zinc-400" />
                <span>Video Sesini Aç</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-white" />
                <span>Sesi Kapat</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
