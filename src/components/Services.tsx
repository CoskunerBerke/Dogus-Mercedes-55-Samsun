import React from 'react';
import { Cpu, Wrench, Gauge, Disc, Shield, Phone, Sparkles, Truck, Settings } from 'lucide-react';

export const Services: React.FC = () => {
  const handleCallRedirect = () => {
    window.location.href = "tel:05522605666";
  };

  const services = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: "Xentry Star Arıza Tespiti",
      badge: "Yetkili Cihaz",
      description: "Mercedes-Benz araçlar için lisanslı Xentry / Star Diagnosis cihazlarıyla elektronik beyin, sensör okuma, kodlama ve kesin arıza tespiti."
    },
    {
      icon: <Gauge className="w-6 h-6 text-amber-400" />,
      title: "Periyodik Bakım & Sıvılar",
      badge: "Mobil 1 & Shell",
      description: "Mercedes-Benz onaylı motor yağları, orijinal filtre grubu (yağ, hava, polen, yakıt) değişimi ve 40 nokta detaylı güvenlik kontrolü."
    },
    {
      icon: <Settings className="w-6 h-6 text-slate-300" />,
      title: "7G / 9G-Tronic Şanzıman",
      badge: "Uzman Revizyon",
      description: "Otomatik şanzıman yağı ve karter filtresi değişimi, mekatronik kart testleri, selenoid onarımı ve vites geçiş kalibrasyonu."
    },
    {
      icon: <Wrench className="w-6 h-6 text-slate-200" />,
      title: "Motor Mekanik & Revizyon",
      badge: "Hassas İşçilik",
      description: "Eksantrik zincir seti değişimi, turbo revizyonu, enjektör bakımı, silindir kapak taşlama ve komple motor mekanik onarımları."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
      title: "Airmatic & Süspansiyon",
      badge: "Havalı Körük",
      description: "Airmatic kompresör tamiri, hava körüğü değişimi, valf bloğu testleri, salıncak ve ön takım burçlarının yenilenmesi."
    },
    {
      icon: <Disc className="w-6 h-6 text-red-400" />,
      title: "Fren Sistemleri & Balata",
      badge: "Orijinal Standart",
      description: "Fren disk ve balata değişimi, fren hidroliği yenileme, ABS / ESP sensör kontrolleri ve el freni motor adaptasyonu."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: "Orijinal Yedek Parça Deposu",
      badge: "Geniş Stok",
      description: "Kendi depomuzda hazır bulunan orijinal Mercedes-Benz ve OEM (Hella Pagid, Lemförder, Wunder, Bosch) parçalarla beklemesiz montaj."
    },
    {
      icon: <Truck className="w-6 h-6 text-amber-400" />,
      title: "7/24 Samsun Acil Yol Yardım",
      badge: "Kesintisiz Destek",
      description: "Samsun, Tekkeköy, Çarşamba, Bafra ve çevre Karadeniz illerinde yolda kalan Mercedes sahiplerine anında mobil servis ve çekici desteği."
    }
  ];

  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-[#0a0d12] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5 text-slate-400" />
            <span>Mercedes-Benz Uzmanlığı</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fabrika Standartlarında Özel Servis Hizmetleri
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Binek ve ticari tüm Mercedes-Benz modellerine (A, C, E, S, CLA, GLA, GLC, GLE, Vito, Sprinter) eksiksiz teknik altyapıyla hizmet veriyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0e131b] border border-slate-800 hover:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                    {svc.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {svc.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {svc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <button
                  onClick={handleCallRedirect}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 hover:bg-white hover:text-slate-950 text-slate-300 text-xs font-semibold border border-slate-800 hover:border-white transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Bilgi Al & Fiyat Sor</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Model Compatibility Ticker */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-400 block mb-1">
              Tam Model Kapsamı
            </span>
            <p className="text-sm font-medium text-slate-200">
              Mercedes-Benz C-Class (W204, W205, W206) • E-Class (W211, W212, W213) • S-Class • CLA • GLA • GLC • Vito • Sprinter
            </p>
          </div>

          <button
            onClick={handleCallRedirect}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 shadow transition-colors"
          >
            <Phone className="w-4 h-4 fill-current text-slate-950" />
            <span>Aracınız İçin Bilgi Alın</span>
          </button>
        </div>
      </div>
    </section>
  );
};
