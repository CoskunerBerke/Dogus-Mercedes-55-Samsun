import React from 'react';

export const AboutWorkshop: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Mercedes-Benz Binek Grubu',
      desc: 'A, B, C, E, S Serisi ile CLA, GLA ve GLC modellerinde uzman mekanik ve elektronik bakım.',
    },
    {
      num: '02',
      title: 'Sprinter & Vito Ticari Grup',
      desc: 'Turizm, personel taşımacılığı ve lojistik filolarının Sprinter ve Vito araçlarına hızlı servis desteği.',
    },
    {
      num: '03',
      title: 'Actros, Axor & Atego Ağır Vasıta',
      desc: 'Uzun yol çekici ve kamyon grubunda ağır motor revizyonu, şanzıman ve компьютерli arıza tespiti.',
    },
    {
      num: '04',
      title: 'Orijinal & OEM Yedek Parça',
      desc: 'Geniş yedek parça stoğumuz sayesinde bekleme süresini en aza indiren doğrudan parça tedariki.',
    },
  ];

  return (
    <section id="firmalar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
              HAKKIMIZDA
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight leading-tight mb-5">
              Samsun’da Mercedes-Benz Araçlar İçin Uzman Özel Servis
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-4">
              Doğuş Oto Mercedes 55 olarak Samsun Tekkeköy 19 Mayıs Sanayi Sitesi’ndeki
              atölyemizde, Mercedes-Benz binek, hafif ticari ve ağır vasıta araçların tüm mekanik,
              elektronik ve periyodik bakım işlemlerini gerçekleştiriyoruz.
            </p>
            <p className="text-neutral-600 text-base leading-relaxed">
              Orijinal XENTRY test cihazlarımız, zengin yedek parça depomuz ve deneyimli usta
              kadromuzla hem bireysel araç sahiplerine hem de kurumsal filolara güvenilir hizmet
              veriyoruz.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
              <img
                src="/images/spare-parts.jpg"
                alt="Doğuş Oto Mercedes 55 Yedek Parça ve Servis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-neutral-200">
          {pillars.map((item) => (
            <div key={item.num}>
              <span className="block text-xs font-mono font-bold text-neutral-400 mb-2">
                {item.num}
              </span>
              <h3 className="text-base font-bold text-black mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
