import React, { useState } from 'react';
import { Camera, Eye, X, ChevronRight, ChevronLeft, ShieldCheck, MapPin } from 'lucide-react';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

export const WorkshopGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/images/workshop-exterior.png',
      title: 'Servis ve Bakım Sahası',
      category: 'Ana Atölye',
      description: 'Aynı anda birden fazla araca hizmet verebilen profesyonel hidrolik liftler, Star Diagnosis bilgisayarlı arıza teşhis istasyonları ve gece gündüz güvenli park sahası.'
    },
    {
      id: 2,
      src: '/images/office-lounge.png',
      title: 'Müşteri Danışma & Yönetim Ofisi',
      category: 'Kabul & Planlama',
      description: 'Aracınızın kabulünden teslimine kadar yapılan tüm işlemleri, parça detaylarını ve şeffaf maliyet dökümünü birebir görüştüğümüz ferah ofisimiz.'
    },
    {
      id: 3,
      src: '/images/waiting-room.png',
      title: 'Müşteri Bekleme Salonu',
      category: 'Konfor & Ağırlama',
      description: 'Aracınızın bakımı yapılırken dinlenebileceğiniz, çay/kahve ikramı, televizyon ve konforlu oturma alanına sahip özel müşteri dinlenme salonumuz.'
    },
    {
      id: 4,
      src: '/images/spare-parts.jpg',
      title: 'Zengin Yedek Parça Deposu',
      category: 'Orijinal & OEM Depo',
      description: 'Mercedes-Benz binek ve hafif ticari grubu için orijinal filtreler, balatalar, süspansiyon ve motor parçalarının bulunduğu anında temin depomuz.'
    }
  ];

  return (
    <section id="galeri" className="py-20 md:py-28 bg-[#0c1017] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">
              <Camera className="w-3.5 h-3.5 text-slate-400" />
              <span>Gerçek Atölye Fotoğrafları</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Samsun Tekkeköy Servisimizden Kareler
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Yapay zeka veya stok görsel değil; Doğuş Mercedes Samsun atölyemizin, yedek parça depomuzun ve bekleme salonumuzun birebir gerçek görüntüleri.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 shrink-0">
            <MapPin className="w-4 h-4 text-slate-300" />
            <span>19 Mayıs Sanayi Sitesi, İstiklal Mah. 58. Sk. No:31/26</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-600 shadow-xl cursor-pointer transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.92] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                    {item.category}
                  </span>
                </div>

                {/* View Icon Button */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 inset-x-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 drop-shadow">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative max-h-[75vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-slate-800">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Doğuş Mercedes Samsun
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-sm text-slate-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
