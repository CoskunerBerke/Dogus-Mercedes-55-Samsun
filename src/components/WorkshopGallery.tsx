import React from 'react';

const photos = [
  {
    src: '/images/workshop-exterior.png',
    title: 'Tekkeköy 19 Mayıs Sanayi Sitesi Servisimiz',
    subtitle: '58. Sokak No:31/26 Tekkeköy / Samsun',
    cropClass: 'object-[56%_center] scale-[1.06]',
  },
  {
    src: '/images/spare-parts.jpg',
    title: 'Zengin Orijinal & OEM Yedek Parça Stoğumuz',
    subtitle: 'Mercedes-Benz, Bosch, Mann-Filter, Mahle, Lemförder, Hella Pagid',
    cropClass: 'object-center',
  },
  {
    src: '/images/office-lounge.png',
    title: 'Müşteri Kabul ve Yönetim Ofisimiz',
    subtitle: 'Şeffaf servis süreci ve kurumsal filo koordinasyonu',
    cropClass: 'object-center',
  },
  {
    src: '/images/waiting-room.png',
    title: 'Müşteri Bekleme Salonumuz',
    subtitle: 'Aracınızın bakımını takip ederken konforlu dinlenme alanı',
    cropClass: 'object-center',
  },
];

export const WorkshopGallery: React.FC = () => {
  return (
    <section id="servisimiz" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-blue-700 text-xs font-bold uppercase tracking-widest mb-2">
              GERÇEK SERVİS &amp; STOK GÖRÜNTÜLERİ
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Servisimizden ve Yedek Parça Depomuzdan Kareler
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Samsun Tekkeköy 19 Mayıs Sanayi Sitesi&apos;ndeki tesisimiz, yedek parça depomuz ve müşteri ağırlama alanlarımız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.title}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-blue-400 transition-colors"
            >
              <div className="aspect-16/10 w-full overflow-hidden bg-slate-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className={`w-full h-full object-cover ${photo.cropClass} group-hover:scale-[1.09] transition-transform duration-500`}
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
                  {photo.title}
                </h3>
                <p className="text-slate-600 text-sm">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
