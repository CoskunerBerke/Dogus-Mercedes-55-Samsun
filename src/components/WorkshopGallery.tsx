import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  imgClass?: string;
}

export const WorkshopGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/images/workshop-exterior.png',
      title: 'Servis ve Lift Sahamız',
      subtitle: 'Çoklu hidrolik lift altyapısı ve geniş bakım alanı',
      imgClass: 'object-[56%_center] scale-[1.06]'
    },
    {
      id: 2,
      src: '/images/spare-parts.jpg',
      title: 'Yedek Parça Depomuz',
      subtitle: 'Orijinal ve Alman OEM yedek parça stoğumuz',
      imgClass: 'object-center'
    },
    {
      id: 3,
      src: '/images/office-lounge.png',
      title: 'Müşteri Kabul Ofisimiz',
      subtitle: 'Servis sahasını gören cam bölmeli yönetim ofisimiz',
      imgClass: 'object-center'
    },
    {
      id: 4,
      src: '/images/waiting-room.png',
      title: 'Müşteri Bekleme Salonumuz',
      subtitle: 'Aracınız hazırlanırken çay ve kahve eşliğinde dinlenme alanı',
      imgClass: 'object-center'
    }
  ];

  const selectedImage = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section id="galeri" className="py-20 bg-[#0e1014] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Clean Section Title */}
        <div className="mb-12 pb-6 border-b border-zinc-800">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
            ATÖLYEMİZ & YEDEK PARÇA DEPOMUZ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Samsun Tekkeköy Servisimizden Gerçek Görüntüler
          </h2>
        </div>

        {/* 4 Real Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(idx)}
              className="group rounded-xl overflow-hidden bg-[#14171c] border border-zinc-800 hover:border-zinc-600 cursor-pointer transition-all"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${item.imgClass || ''}`}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#121418] border border-zinc-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-black/80 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={() =>
                setSelectedIndex(
                  ((selectedIndex ?? 0) - 1 + galleryItems.length) % galleryItems.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-lg bg-black/80 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() =>
                setSelectedIndex(((selectedIndex ?? 0) + 1) % galleryItems.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-lg bg-black/80 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="bg-black flex items-center justify-center max-h-[75vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-5 bg-[#121418] border-t border-zinc-800">
              <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
              <p className="text-sm text-zinc-400 mt-0.5">{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
