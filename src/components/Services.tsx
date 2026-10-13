import React from 'react';
import { Cpu, Wrench, Gauge, Disc, Shield, Phone, Sparkles, Truck, Settings, MessageCircle, AlertTriangle } from 'lucide-react';

export const Services: React.FC = () => {
  const handleCallRedirect = () => {
    window.location.href = 'tel:05522605666';
  };

  const services = [
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: 'Xentry Star Arıza Tespiti',
      badge: 'Yetkili Cihaz',
      code: 'STAR-DIAG',
      description:
        'Mercedes-Benz araçlar için lisanslı Xentry / Star Diagnosis cihazlarıyla elektronik beyin, sensör okuma, SCN kodlama ve nokta atışı arıza tespiti.'
    },
    {
      icon: <Gauge className="w-6 h-6 text-amber-400" />,
      title: 'Periyodik Bakım & Sıvılar',
      badge: 'MB 229.52 Onaylı',
      code: 'ASSYST-PLUS',
      description:
        'Mercedes-Benz onaylı motor yağları, orijinal filtre grubu (yağ, hava, karbonlu polen, yakıt) değişimi ve 40 nokta detaylı güvenlik kontrolü.'
    },
    {
      icon: <Settings className="w-6 h-6 text-blue-400" />,
      title: '7G / 9G-Tronic Şanzıman',
      badge: 'Uzman Revizyon',
      code: '722.9 / 725.0',
      description:
        'Otomatik şanzıman yağı ve ultrasonik karter filtresi değişimi, türbin boşaltımı, mekatronik kart testleri ve vites geçiş kalibrasyonu.'
    },
    {
      icon: <Wrench className="w-6 h-6 text-emerald-400" />,
      title: 'Motor Mekanik & Zincir',
      badge: 'Hassas İşçilik',
      code: 'OM651 • OM654 • M274',
      description:
        'Eksantrik zincir seti değişimi, vanus dişlileri, yağ soğutucu, turbo revizyonu, enjektör bakımı ve komple motor mekanik revizyonu.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: 'Airmatic & Ön Takım',
      badge: 'Havalı Süspansiyon',
      code: 'AIRMATIC-PRO',
      description:
        'Airmatic kompresör tamiri, hava körüğü değişimi, valf bloğu testleri, seviye kalibrasyonu ve Lemförder alüminyum salıncak yenilemesi.'
    },
    {
      icon: <Disc className="w-6 h-6 text-rose-400" />,
      title: 'Fren Sistemleri & Disk',
      badge: 'Orijinal Standart',
      code: 'SBC • ABR • EPB',
      description:
        'Hava kanallı / delikli AMG fren disk ve balata değişimi, DOT 4+ fren hidroliği yenileme, ABS / ESP sensörleri ve el freni adaptasyonu.'
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-300" />,
      title: 'Orijinal Yedek Parça Deposu',
      badge: '5.000+ Stok',
      code: 'OEM-PARTS',
      description:
        'Kendi depomuzda hazır bulunan orijinal Mercedes-Benz ve Alman OEM (Hella Pagid, Lemförder, Mahle, Wunder, Bosch) parçalarla beklemesiz montaj.'
    },
    {
      icon: <Truck className="w-6 h-6 text-emerald-400" />,
      title: '7/24 Samsun Acil Yol Yardım',
      badge: 'Kesintisiz Destek',
      code: 'SOS-55',
      description:
        'Samsun, Tekkeköy, Atakum, İlkadım, Çarşamba, Bafra ve çevre Karadeniz illerinde yolda kalan Mercedes sahiplerine anında mobil servis desteği.'
    }
  ];

  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-[#06080c] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mercedes-Benz Mühendislik Standartları</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Fabrika Standartlarında <span className="text-silver-shimmer">Özel Servis Hizmetleri</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Binek ve ticari tüm Mercedes-Benz modellerine (A, B, C, E, S, CLA, CLS, GLA, GLB, GLC, GLE, Vito, Sprinter) eksiksiz teknik altyapıyla hizmet veriyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl metallic-card border border-slate-800/90 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-105 group-hover:border-slate-700 transition-all">
                    {svc.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-900 text-slate-200 border border-slate-700/80 block">
                      {svc.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 mt-1 block">{svc.code}</span>
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2 font-display group-hover:text-cyan-200 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {svc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2">
                <button
                  onClick={handleCallRedirect}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-white hover:text-slate-950 text-slate-200 text-xs font-bold border border-slate-800 hover:border-white transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Bilgi & Fiyat Al</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 7/24 Emergency Roadside Assistance Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d1522] via-[#0f1c2e] to-[#0d1522] border border-emerald-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                7/24 SAMSUN & KARADENİZ ACİL YOL YARDIM HATTI
              </div>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white font-display">
                Yolda mı Kaldınız? Aracınız Arıza Uyarısı mı Verdi?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Tekkeköy, Samsun çevre yolu veya Karadeniz hattında seyahat ederken yaşanabilecek acil arızalarda mobil servis aracımız ve uzman ustalarımızla yanınızdayız.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={handleCallRedirect}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-slate-950 font-extrabold text-sm hover:bg-slate-100 shadow-lg transition-colors"
            >
              <Phone className="w-4 h-4 fill-current text-slate-950" />
              <span>Acil Ara: 0552 260 56 66</span>
            </button>

            <a
              href="https://wa.me/905522605666?text=ACİL%20YOL%20YARDIM:%20Mercedes%20aracımla%20yolda%20desteğe%20ihtiyacım%20var,%20konum%20paylaşıyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-sm border border-emerald-500/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Konum Gönder</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
