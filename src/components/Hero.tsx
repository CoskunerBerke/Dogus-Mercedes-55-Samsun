import React from 'react';
import {
  Phone,
  Star,
  ShieldCheck,
  Wrench,
  ArrowRight,
  Play,
  Cpu,
  Package,
  MessageCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CAR_SERIES } from './ServicePlanner';

interface HeroProps {
  onSelectChassis?: (seriesId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectChassis }) => {
  const handleCallRedirect = () => {
    window.location.href = 'tel:05522605666';
  };

  const handleChassisClick = (seriesId: string) => {
    if (onSelectChassis) {
      onSelectChassis(seriesId);
    }
    const el = document.getElementById('bakim-robotu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-slate-800/80">
      {/* Real Workshop Night Photo Background — scaled slightly to crop out the left edge streetview arrow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/workshop-exterior.png"
          alt="Doğuş Mercedes Samsun Özel Servis ve Yedek Parça Atölyesi"
          className="w-full h-full object-cover object-[54%_center] filter brightness-[0.30] contrast-[1.12] scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-[#06080c]/75 to-[#06080c]/55"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-14 md:py-20 flex flex-col items-center text-center w-full">
        {/* Top Prestige Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-200 mb-6 backdrop-blur-md shadow-lg">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold text-white tracking-wide">
            DOĞUŞ MERCEDES SERVİS & YEDEK PARÇA
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-cyan-300 font-mono text-xs">@dogusmercedes55</span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-slate-300">Tekkeköy / Samsun</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[64px] font-black tracking-tight text-white max-w-5xl leading-[1.1] mb-6 font-display">
          Mercedes-Benz Tutkunuz İçin <br className="hidden sm:inline" />
          <span className="text-silver-shimmer">Fabrika Hassasiyetinde</span>{' '}
          <span className="text-amg-gradient">Uzman Servis</span>
        </h1>

        {/* Subtitle with Founding Masters */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed mb-8">
          Samsun 19 Mayıs Sanayi Sitesinde 20 yılı aşkın tecrübe, lisanslı{' '}
          <strong className="text-white font-semibold">Xentry Star Diagnosis</strong> arıza tespiti,{' '}
          <strong className="text-white font-semibold">5.000+ kalem orijinal yedek parça deposu</strong> ve garantili şanzıman/mekanik onarım merkezi.
        </p>

        {/* Founding Masters Pill Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-9 text-xs sm:text-sm">
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/85 border border-slate-700/80 text-slate-200 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Kurucu Ustalarımız:</span>
            <strong className="text-white">Engin Çalımlı • Ercan Aycan • Uğur Gözoğlu</strong>
          </span>
        </div>

        {/* Primary Action CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto mb-12">
          {/* Primary Phone Call CTA */}
          <button
            onClick={handleCallRedirect}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-white/10 hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 group"
          >
            <Phone className="w-5 h-5 text-slate-950 fill-current" />
            <span>Hemen Ara: 0552 260 56 66</span>
            <ArrowRight className="w-4 h-4 text-slate-700 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Interactive Service Planner CTA */}
          <a
            href="#bakim-robotu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-teal-500/30 text-cyan-200 font-bold text-sm sm:text-base border border-cyan-400/40 backdrop-blur-md transition-all duration-200"
          >
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span>Bakım & Parça Fiyatı Hesapla</span>
          </a>

          {/* Direct WhatsApp CTA */}
          <a
            href="https://wa.me/905522605666?text=Merhaba,%20Doğuş%20Mercedes%20servisinizden%20bilgi%20ve%20randevu%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-sm sm:text-base border border-slate-700 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>WhatsApp Danışma</span>
          </a>

          {/* Jump to Night Video */}
          <a
            href="#video-tur"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            <Play className="w-4 h-4 text-cyan-400 fill-current" />
            <span>Canlı Atölyeyi İzle</span>
          </a>
        </div>

        {/* Interactive Quick Chassis Selector Bar */}
        <div className="w-full max-w-5xl mb-10 p-4 rounded-2xl bg-[#090d14]/85 backdrop-blur-md border border-slate-800/90">
          <div className="flex items-center justify-between gap-2 mb-3 text-xs">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hızlı Bakım Reçetesi İçin Aracınızın Serisini Seçin:</span>
            </span>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              Binek & Ticari Tam Kapsam
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {CAR_SERIES.map((series) => (
              <button
                key={series.id}
                type="button"
                onClick={() => handleChassisClick(series.id)}
                className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-left transition-all group"
              >
                <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{series.name}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-cyan-400" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                  {series.chassis}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Key Telemetry / Trust Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 w-full max-w-5xl">
          <a
            href="#yorumlar"
            className="metallic-card border border-slate-800/90 hover:border-amber-500/40 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all"
          >
            <div className="flex items-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-white font-black text-base ml-1 font-mono">4.8</span>
            </div>
            <span className="text-xs text-slate-300 font-semibold">Google Haritalar Puanı</span>
            <span className="text-[11px] text-slate-500 mt-0.5">%98 Müşteri Memnuniyeti</span>
          </a>

          <a
            href="#yedek-parca"
            className="metallic-card border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all"
          >
            <div className="flex items-center gap-1.5 text-white font-extrabold text-base sm:text-lg mb-0.5 font-display">
              <Package className="w-5 h-5 text-amber-400" />
              <span>5.000+ Parça Stoğu</span>
            </div>
            <span className="text-xs text-slate-300 font-semibold">Kendi Yedek Parça Depomuz</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Orijinal & Alman OEM Markalar</span>
          </a>

          <a
            href="#bakim-robotu"
            className="metallic-card border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all"
          >
            <div className="flex items-center gap-1.5 text-white font-extrabold text-base sm:text-lg mb-0.5 font-display">
              <Wrench className="w-5 h-5 text-cyan-400" />
              <span>Star Diagnosis</span>
            </div>
            <span className="text-xs text-slate-300 font-semibold">Lisanslı Xentry Cihazı</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Nokta Atışı Elektronik Teşhis</span>
          </a>

          <a
            href="tel:05522605666"
            className="metallic-card border border-slate-800/90 hover:border-emerald-500/40 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all"
          >
            <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-base sm:text-lg mb-0.5 font-display">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>7/24 Yol Yardım</span>
            </div>
            <span className="text-xs text-slate-300 font-semibold">0552 260 56 66</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Samsun & Tüm Karadeniz</span>
          </a>
        </div>
      </div>
    </section>
  );
};
