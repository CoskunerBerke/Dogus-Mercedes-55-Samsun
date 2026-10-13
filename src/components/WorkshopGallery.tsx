import React, { useState } from 'react';
import { Camera, Eye, X, ChevronRight, ChevronLeft, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  imgClass?: string;
}

export const WorkshopGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/images/workshop-exterior.png',
      title: 'Çoklu Lift & Ana Servis Sahası',
      category: 'Ana Atölye • Tekkeköy',
      description:
        'Aynı anda çok sayıda Mercedes-Benz binek ve ticari araca hizmet verebilen modern hidrolik liftler, Xentry Star Diagnosis istasyonları ve geniş ön kabul alanı.',
      highlights: ['Çoklu Hidrolik Lift', 'Xentry Teşhis İstasyonu', 'Gece Aydınlatmalı Saha'],
      // Slightly shifted and scaled to hide the left-edge street-view arrow from screenshot
      imgClass: 'object-[56%_center] scale-[1.06] group-hover:scale-[1.10]'
    },
    {
      id: 2,
      src: '/images/office-lounge.png',
      title: 'Panoramik Müşteri Kabul & Yönetim Ofisi',
      category: 'Kabul & Şeffaf Planlama',
      description:
        'Aracınızın bakımını geniş cam bölmeden canlı olarak izleyebileceğiniz, yapılacak işlemleri ve parça maliyetlerini ustalarımızla birebir görüşebileceğiniz yönetim ofisimiz.',
      highlights: ['Atölyeyi Gören Panoramik Cam', 'Şeffaf Maliyet Planlama', 'Birebir Usta Görüşmesi'],
      imgClass: 'object-center group-hover:scale-105'
    },
    {
      id: 3,
      src: '/images/waiting-room.png',
      title: 'VIP Müşteri Bekleme & Dinlenme Salonu',
      category: 'Konfor & Ağırlama',
      description:
        'Aracınızın periyodik bakımı yapılırken ev konforunda dinlenebileceğiniz, sıcak çay/kahve ikramı, TV ve Samsunspor köşesine sahip tertemiz misafir salonumuz.',
      highlights: ['Sıcak Çay & Kahve İkramı', 'Klima & TV Konforu', 'Aile Dostu Nezih Ortam'],
      imgClass: 'object-center group-hover:scale-105'
    },
    {
      id: 4,
      src: '/images/spare-parts.jpg',
      title: '5.000+ Kalem Orijinal Yedek Parça Deposu',
      category: 'Orijinal & OEM Depo',
      description:
        'Kendi bünyemizde yer alan; Mercedes-Benz Orijinal, Wunder, Mahle, Hella Pagid, Lemförder ve BorgWarner parçaların hazır tutulduğu dev yedek parça depomuz.',
      highlights: ['Sıfır Parça Bekleme Süresi', 'Orijinal & Alman OEM', 'Barkodlu Şasi Eşleştirme'],
      imgClass: 'object-center group-hover:scale-105'
    }
  ];

  const selectedImage = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryItems.length);
  };

  return (
    <section id="galeri" className="py-20 md:py-28 bg-[#090d14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
              <span>%100 Gerçek Atölye & Ofis Fotoğrafları</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Samsun Tekkeköy <span className="text-silver-shimmer">Tesisimizden Kareler</span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-400 max-w-2xl">
              Stok fotoğraf değil; Doğuş Mercedes Samsun servis sahamızın, panoramik müşteri ofisimizin, bekleme salonumuzun ve yedek parça depomuzun birebir gerçek görüntüleri.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-slate-300 hover:text-white bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800 hover:border-slate-700 shrink-0 transition-colors"
          >
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>19 Mayıs Sanayi Sitesi, 58. Sk. No:31/26</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(idx)}
              className="group relative rounded-2xl overflow-hidden metallic-card border border-slate-800 hover:border-cyan-500/40 shadow-xl cursor-pointer transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-500 filter brightness-[0.94] group-hover:brightness-100 ${
                    item.imgClass || 'object-center group-hover:scale-105'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-black/25 to-transparent"></div>

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                    {item.category}
                  </span>
                </div>

                {/* View Icon Button */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center gap-1.5 text-white text-xs font-semibold opacity-90 group-hover:bg-white group-hover:text-slate-950 transition-all">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Büyüt</span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 inset-x-5">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white drop-shadow-md font-display">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body with Description & Highlight Chips */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#0b1019]">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Prev/Next Navigation */}
      {selectedImage && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#090d14] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-white hover:text-slate-950 transition-colors border border-white/20"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 text-white hover:bg-white hover:text-slate-950 transition-colors border border-white/20"
              aria-label="Önceki Fotoğraf"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 text-white hover:bg-white hover:text-slate-950 transition-colors border border-white/20"
              aria-label="Sonraki Fotoğraf"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="relative max-h-[72vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[72vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-[#0b1019] border-t border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Doğuş Mercedes 55 Samsun
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {(selectedIndex ?? 0) + 1} / {galleryItems.length}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1.5 font-display">{selectedImage.title}</h3>
              <p className="text-sm text-slate-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
