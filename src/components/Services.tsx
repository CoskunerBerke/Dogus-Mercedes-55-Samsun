import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      num: '01',
      title: 'Mercedes-Benz Binek Periyodik Bakım',
      desc: 'C, E, S, CLA, GLA ve GLC serisi araçlar için MB onaylı motor yağları ve orijinal filtrelerle garantili periyodik bakım.',
      detail: 'Yağ & Filtre • Fren Kontrolü • ASSYST PLUS Sıfırlama',
    },
    {
      num: '02',
      title: 'XENTRY / Star Diagnosis Arıza Tespiti',
      desc: 'Orijinal Mercedes-Benz diyagnostik sistemi ile elektronik kontrol ünitesi (ECU) okuma, SCN kodlama ve adaptasyon.',
      detail: 'Star Diagnosis • SCN Kodlama • Partikül & AdBlue',
    },
    {
      num: '03',
      title: '7G-DCT & 9G-Tronic Şanzıman Bakımı',
      desc: 'Otomatik şanzıman yağ ve filtre değişimi, türbin/tork konvertörü revizyonu ve vites geçiş kalibrasyonu.',
      detail: '9G-Tronic • 7G-Tronic • Şanzıman Yağ Değişimi',
    },
    {
      num: '04',
      title: 'Sprinter & Vito Hafif Ticari Servisi',
      desc: 'Ticari filolar ve bireysel kullanıcılar için Sprinter ve Vito araçlarda motor, enjektör, turbo ve yürür aksam onarımı.',
      detail: 'Mercedes Sprinter • Vito • Hızlı Filo Bakımı',
    },
    {
      num: '05',
      title: 'Actros, Axor & Atego Ağır Vasıta Bakımı',
      desc: 'Ağır vasıta çekici ve kamyon grubunda motor revizyonu, şanzıman, diferansiyel ve fren sistemi onarımları.',
      detail: 'Actros • Axor • Atego • Ağır Vasıta Mekanik',
    },
    {
      num: '06',
      title: 'Orijinal & Alman OEM Yedek Parça',
      desc: 'Mercedes-Benz yıldızlı orijinal yedek parçalar ile Lemförder, Sachs, Mann ve Hengst marka OEM parça temini.',
      detail: 'Orijinal Yedek Parça • Garantili Montaj • Stoktan Teslim',
    },
  ];

  return (
    <section id="hizmetler" className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-3">
            SERVİS HİZMETLERİMİZ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Mercedes-Benz Bakım, Onarım ve Yedek Parça Çözümlerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.num}
              className="bg-white rounded-lg p-7 border border-neutral-200 flex flex-col justify-between"
            >
              <div>
                <span className="block text-xs font-mono font-bold text-neutral-400 mb-4">
                  {item.num}
                </span>
                <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-neutral-100 text-xs font-medium text-neutral-500">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
