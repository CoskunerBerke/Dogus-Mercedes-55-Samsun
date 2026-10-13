import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Phone, Sparkles, Clock, Shield, Video } from 'lucide-react';

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

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = ratio * duration;
    setCurrentTime(ratio * duration);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleCallRedirect = () => {
    window.location.href = 'tel:05522605666';
  };

  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <section id="video-tur" className="py-20 md:py-28 bg-[#06080c] border-b border-slate-800/80 relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <Video className="w-3.5 h-3.5 text-cyan-400" />
            <span>Canlı Atölye Görüntüsü • Tekkeköy / Samsun</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Doğuş Mercedes <span className="text-silver-shimmer">Atölyemizi Keşfedin</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Samsun 19 Mayıs Sanayi Sitesindeki tam donanımlı servis sahamızda gece ve gündüz Mercedes-Benz araçlarınız için kesintisiz uzmanlık sunuyoruz.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden metallic-card border border-slate-700/80 shadow-2xl group">
          {/* Top Video Overlay Header */}
          <div className="absolute top-0 inset-x-0 z-20 p-4 sm:p-6 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700 text-[11px] font-mono font-semibold tracking-wider text-white uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                REC • GECE VARDİYASI
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 drop-shadow">
                Doğuş Mercedes Servis & Lift Sahası • Samsun
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-cyan-300 bg-slate-900/85 px-3 py-1 rounded-full border border-cyan-500/30 font-mono">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
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

          {/* Seekable Progress Scrubber */}
          <div
            onClick={handleSeek}
            className="w-full h-2 bg-slate-800 cursor-pointer relative group/bar"
            title="İlerletmek için tıklayın"
          >
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-100"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Bottom Interactive Controls Bar */}
          <div className="p-4 sm:p-5 bg-[#090d14]/95 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <button
                onClick={togglePlay}
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700/80"
                aria-label={isPlaying ? 'Durdur' : 'Oynat'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="px-3 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold border border-slate-700/80"
                aria-label={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline">Sesi Aç</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline text-emerald-300">Ses Açık</span>
                  </>
                )}
              </button>

              <button
                onClick={handleRestart}
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700/80"
                aria-label="Başa Sar"
                title="Videoyu Başa Sar"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-400 font-mono hidden md:inline ml-2">
                00:{String(Math.floor(currentTime)).padStart(2, '0')} / 00:{String(Math.floor(duration || 8)).padStart(2, '0')}
              </span>
            </div>

            {/* Quick Action in Video Controls */}
            <div className="flex items-center gap-2.5 ml-auto">
              <button
                onClick={handleCallRedirect}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-950 font-extrabold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-slate-950 fill-current" />
                <span>Bilgi Al: 0552 260 56 66</span>
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/80"
                aria-label="Tam Ekran"
                title="Tam Ekran"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Key Highlights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-xs sm:text-sm text-slate-300">
          <div className="metallic-card border border-slate-800/90 p-5 rounded-2xl flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white block text-sm mb-1 font-display">Güvenli & Korumalı Servis Alanı</strong>
              <span className="text-slate-400 text-xs leading-relaxed block">
                Geniş kapalı atölye sahamızda araçlarınız 24 saat kamera sistemi ve kapalı otopark güvencesi altındadır.
              </span>
            </div>
          </div>

          <div className="metallic-card border border-slate-800/90 p-5 rounded-2xl flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white block text-sm mb-1 font-display">Çoklu Hidrolik Lift Kapasitesi</strong>
              <span className="text-slate-400 text-xs leading-relaxed block">
                Aynı anda 6+ Mercedes aracına müdahale edebilen modern lift altyapımızla bekleme sürelerini sıfıra indiriyoruz.
              </span>
            </div>
          </div>

          <div className="metallic-card border border-slate-800/90 p-5 rounded-2xl flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white block text-sm mb-1 font-display">Gece Müdahale & Yol Yardım</strong>
              <span className="text-slate-400 text-xs leading-relaxed block">
                Samsun-Ordu karayolu ve Tekkeköy geçişinde gece yolda kalan Mercedes sürücülerine 7/24 acil teknik destek.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
