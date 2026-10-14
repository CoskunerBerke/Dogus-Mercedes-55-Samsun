import React from 'react';
import { Award, Building2, CheckCircle2, ShieldCheck, Truck, Users } from 'lucide-react';
import { MercedesLogo } from './MercedesLogo';

const oemBrands = [
  { name: 'Mercedes-Benz Orijinal Parça', role: 'Yıldızlı Orijinal Ekipman', isMercedes: true },
  { name: 'BOSCH', role: 'Elektronik, Enjektör & Ateşleme' },
  { name: 'MANN-FILTER & MAHLE', role: 'Hava, Yağ, Yakıt & Polen Filtreleri' },
  { name: 'LEMFÖRDER & SACHS', role: 'Ön Takım, Salıncak & Süspansiyon' },
  { name: 'HELLA PAGID & TEXTAR', role: 'Fren Disk & Balata Sistemleri' },
  { name: 'BILSTEIN', role: 'Airmatic & Amortisör Sistemleri' },
  { name: 'BORGWARNER & GARRETT', role: 'Turboşarj & Basınç Sistemleri' },
  { name: 'MOBIL 1 & PETRONAS', role: 'MB-Approval Onaylı Motor & Şanzıman Yağları' },
];

const fleetPartners = [
  {
    title: 'Turizm & VIP Transfer Filoları',
    desc: 'Samsun, Ordu ve Trabzon hattında çalışan Mercedes Vito Tourer ve Sprinter VIP transfer şirketlerinin periyodik filo bakımı.',
    icon: Truck,
  },
  {
    title: 'Organize Sanayi & Fabrika Makam Araçları',
    desc: 'Tekkeköy ve Samsun OSB’de faaliyet gösteren sanayi kuruluşlarının Mercedes C, E, S ve GLC serisi yönetici araçlarının garantili servisi.',
    icon: Building2,
  },
  {
    title: 'Kurumsal Kiralama & Ticari Filolar',
    desc: 'Zaman kaybına tahammülü olmayan şirket araçları ve hafif ticari Mercedes filoları için aynı gün parça tedariği ve öncelikli servis.',
    icon: ShieldCheck,
  },
  {
    title: 'Karadeniz Bölgesi Mercedes Kullanıcıları',
    desc: 'Samsun başta olmak üzere Amasya, Sinop, Çorum ve Ordu illerinden gelen bireysel Mercedes sahiplerinin güvenilir çözüm ortağı.',
    icon: Users,
  },
];

const masters = [
  {
    name: 'Engin Çalımlı',
    role: 'Kurucu Ortak • Motor, Mekanik & Arıza Teşhis Uzmanı',
    experience: 'Mercedes-Benz binek ve ticari araçlarda motor revizyonu, şanzıman ve mekanik sistemler.',
  },
  {
    name: 'Ercan Aycan',
    role: 'Kurucu Ortak • Elektronik, Xentry Teşhis & Bakım Uzmanı',
    experience: 'Bilgisayarlı arıza tespiti, elektronik kontrol üniteleri, periyodik bakım ve Airmatic sistemleri.',
  },
  {
    name: 'Uğur Gözoğlu',
    role: 'Kurucu Ortak • Yedek Parça & Servis Operasyon Yönetimi',
    experience: 'Orijinal ve OEM yedek parça tedariği, kurumsal filo koordinasyonu ve müşteri kabul.',
  },
];

export const AboutWorkshop: React.FC = () => {
  return (
    <section id="firmalar" className="py-14 md:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-black text-xs font-bold uppercase tracking-widest mb-2">
              <Award className="w-4 h-4" />
              ÇALIŞILAN FİRMALAR, PARÇA MARKALARI &amp; KURUCU USTALARIMIZ
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-black tracking-tight">
              Orijinal Yedek Parça Markaları &amp; Hizmet Verdiğimiz Filolar
            </h2>
          </div>
          <p className="text-neutral-600 text-sm max-w-md">
            Aracınıza yan sanayi veya kalitesiz parça takılmaz. Yalnızca Mercedes-Benz fabrikasının onayladığı orijinal ve Alman OEM üreticileriyle çalışıyoruz.
          </p>
        </div>

        {/* OEM Brands Grid */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-black mb-4 flex items-center gap-2">
            <MercedesLogo className="w-4 h-4" variant="dark" />
            <span>SERVİSİMİZDE KULLANILAN VE DEPOLANAN ORİJİNAL / OEM PARÇA MARKALARI</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {oemBrands.map((brand) => (
              <div
                key={brand.name}
                className={`rounded-xl p-4 transition-colors ${
                  brand.isMercedes
                    ? 'bg-black text-white border border-black shadow-sm'
                    : 'bg-white border border-neutral-200 hover:border-black shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {brand.isMercedes && <MercedesLogo className="w-4 h-4 shrink-0" variant="light" />}
                  <div
                    className={`font-display font-bold text-sm ${
                      brand.isMercedes ? 'text-white' : 'text-black'
                    }`}
                  >
                    {brand.name}
                  </div>
                </div>
                <div className={`text-xs ${brand.isMercedes ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {brand.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Fleet Partners Grid */}
        <div className="mb-12">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-black mb-5">
            Çalıştığımız Kurumsal Filolar ve Müşteri Grupları
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fleetPartners.map((partner) => {
              const Icon = partner.icon;
              return (
                <div
                  key={partner.title}
                  className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs hover:border-black transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-black text-base mb-1.5">
                    {partner.title}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Founding Masters */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                DOĞRUDAN USTASIYLA GÖRÜŞÜN
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-black mt-0.5">
                Kurucu Ustalarımız ve Yönetim Kadromuz
              </h3>
            </div>
            <span className="text-xs font-semibold text-black bg-white border border-neutral-300 px-3 py-1.5 rounded-lg">
              19 Mayıs Sanayi Sitesi • Tekkeköy / Samsun
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {masters.map((master) => (
              <div
                key={master.name}
                className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs hover:border-black transition-colors"
              >
                <div className="flex items-center gap-2 text-black text-xs font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  Kurucu Usta
                </div>
                <div className="font-display text-lg font-bold text-black">
                  {master.name}
                </div>
                <div className="text-xs font-bold text-neutral-700 mt-0.5 mb-2.5">
                  {master.role}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {master.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
