import React from 'react';
import { Phone, Star, ShieldCheck, Wrench, ArrowRight, Play, MapPin, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleCallRedirect = () => {
    window.location.href = "tel:05522605666";
  };

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-slate-800">
      {/* Background Image: Real workshop night photo with subtle dark gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/workshop-exterior.png"
          alt="Doğuş Mercedes Samsun Atölyesi"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-[1.08] scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-[#0a0d12]/80 to-[#0a0d12]/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-300 mb-6 backdrop-blur-sm shadow-inner">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
          <span className="font-semibold text-white tracking-wide">MERCEDES-BENZ ÖZEL SERVİS & YEDEK PARÇA</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400">Tekkeköy / Samsun</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
          Mercedes-Benz Tutkunuz İçin <br />
          <span className="text-silver-shimmer">Hassas Bakım & Orijinal Yedek Parça</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300/90 max-w-2xl font-normal leading-relaxed mb-10">
          Samsun’da 20 yılı aşkın tecrübe, lisanslı Xentry Star arıza tespiti, geniş orijinal yedek parça deposu ve titiz usta eller. 
          <span className="block mt-1 font-medium text-slate-200">
            Engin Çalımlı, Ercan Aycan ve Uğur Gözoğlu güvencesiyle.
          </span>
        </p>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          {/* PRIMARY BUTTON: User requested click to redirect to 0552 260 56 66 */}
          <button
            onClick={handleCallRedirect}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-slate-950 font-bold text-base shadow-xl shadow-white/10 hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 group"
          >
            <Phone className="w-5 h-5 text-slate-950 fill-current" />
            <span>Bilgi Al & Ara: 0552 260 56 66</span>
            <ArrowRight className="w-4 h-4 text-slate-700 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* SECONDARY: WhatsApp Direct */}
          <a
            href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-slate-700 transition-all duration-200"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>WhatsApp ile Yazın</span>
          </a>

          {/* TERTIARY: Jump to Video */}
          <a
            href="#video-tur"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-slate-400 hover:text-white font-medium text-sm transition-colors"
          >
            <Play className="w-4 h-4 text-slate-300 fill-current" />
            <span>Atölye Videosunu İzle</span>
          </a>
        </div>

        {/* Trust Badges / Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-5xl">
          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-white font-bold text-sm ml-1">4.8</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">Google Haritalar Puanı</span>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-1.5 text-white font-bold text-lg mb-0.5">
              <ShieldCheck className="w-5 h-5 text-slate-300" />
              <span>Orijinal Parça</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">Geniş Raf Stoğu & Garanti</span>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-1.5 text-white font-bold text-lg mb-0.5">
              <Wrench className="w-5 h-5 text-slate-300" />
              <span>Star Diagnosis</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">Xentry Bilgisayarlı Teşhis</span>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-lg mb-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>7/24 Yol Yardım</span>
            </div>
            <span className="text-xs text-slate-400 font-medium">Samsun & Karadeniz Bölgesi</span>
          </div>
        </div>
      </div>
    </section>
  );
};
