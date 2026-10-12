import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Phone, Sparkles, Clock, Shield } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleCallRedirect = () => {
    window.location.href = "tel:05522605666";
  };

  return (
    <section id="video-tur" className="py-20 md:py-28 bg-[#0d1117] border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-slate-800/20 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Canlı Atölye Görüntüsü • Samsun
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Doğuş Mercedes Atölyemizi Keşfedin
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Samsun Tekkeköy 19 Mayıs Sanayi Sitesindeki atölyemizde araçlarınızın her detayını en yüksek hassasiyetle inceliyor, gece gündüz hizmet veriyoruz.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-2xl group">
          {/* Top Video Overlay Header */}
          <div className="absolute top-0 inset-x-0 z-20 p-4 sm:p-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 text-[11px] font-semibold tracking-wider text-slate-200 uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Orijinal Video
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-200 drop-shadow">
                Doğuş Mercedes Servis Sahası • Tekkeköy / Samsun
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>7/24 Aktif Müdahale</span>
            </div>
          </div>

          {/* HTML5 Video Element */}
          <div className="relative aspect-video sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src="/Automotive_repair_shop_at_night_20261012193207.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />

            {/* Play/Pause Overlay indicator when paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-2xl z-20"
                aria-label="Oynat"
              >
                <Play className="w-9 h-9 fill-current ml-1" />
              </button>
            )}
          </div>

          {/* Bottom Interactive Controls Bar */}
          <div className="p-4 sm:p-5 bg-slate-900/95 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
                aria-label={isPlaying ? "Durdur" : "Oynat"}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
                aria-label={isMuted ? "Sesi Aç" : "Sesi Kapat"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-5 h-5 text-slate-400" />
                    <span className="hidden sm:inline">Sesi Aç</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-5 h-5 text-emerald-400" />
                    <span className="hidden sm:inline">Ses Açık</span>
                  </>
                )}
              </button>

              <button
                onClick={handleRestart}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
                aria-label="Başa Sar"
                title="Videoyu Başa Sar"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Time / Progress info */}
            <div className="text-xs text-slate-400 font-mono hidden md:block">
              {Math.floor(currentTime)}s / {Math.floor(duration || 0)}s
            </div>

            {/* Quick Action in Video Controls */}
            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={handleCallRedirect}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-slate-900" />
                <span>Bilgi Al: 0552 260 56 66</span>
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Tam Ekran"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Key Highlights */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto text-xs sm:text-sm text-slate-300">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
            <Shield className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block text-sm mb-0.5">Güvenli ve Korumalı Alan</strong>
              <span>Geniş kapalı atölye sahamızda araçlarınız 24 saat kamera ve güvenlik koruması altındadır.</span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block text-sm mb-0.5">Modern Hidrolik Liftler</strong>
              <span>Aynı anda çok sayıda araca hizmet verebilen çoklu lift kapasitesiyle bekleme sürelerini minimuma indiriyoruz.</span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
            <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block text-sm mb-0.5">Gece Müdahale & Yol Yardım</strong>
              <span>Tekkeköy mevkiinde yolda kalan veya acil desteğe ihtiyaç duyan Mercedes sürücülerine anında destek.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
