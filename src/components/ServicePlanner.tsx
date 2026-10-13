import React, { useState, useEffect } from 'react';
import {
  Wrench,
  Cpu,
  Gauge,
  Settings,
  Sparkles,
  Disc,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MessageCircle,
  Phone,
  Car,
  ChevronRight,
  FileCheck2,
  UserCheck,
  PackageCheck
} from 'lucide-react';

export interface CarSeriesOption {
  id: string;
  name: string;
  chassis: string;
  engines: string;
  popularModels: string;
  oilSpec: string;
}

export const CAR_SERIES: CarSeriesOption[] = [
  {
    id: 'c-series',
    name: 'C-Serisi',
    chassis: 'W203 • W204 • W205 • W206',
    engines: 'C180 Kompressor / CGI • C200d (OM654 / R9M) • C220 CDI • C250',
    popularModels: 'C180 AMG, C200d BlueTEC, C200 4MATIC',
    oilSpec: 'MB-Approval 229.51 / 229.52 (5W-30 / 0W-30)'
  },
  {
    id: 'e-series',
    name: 'E-Serisi',
    chassis: 'W211 • W212 • W213 • W214',
    engines: 'E180 • E200 CGI/Komp. • E220d (OM654) • E250 CDI • E350 CDI (OM642)',
    popularModels: 'E250 Edition E, E220d Exclusive, E180 AMG',
    oilSpec: 'MB-Approval 229.52 / 229.71 Tam Sentetik'
  },
  {
    id: 'cla-a-b',
    name: 'CLA • A • B Serisi',
    chassis: 'C117 • C118 • W176 • W177 • W246',
    engines: '180d (OM607 / OM608) • 200 AMG (M270 / M282) • 45 AMG',
    popularModels: 'CLA 180d AMG, CLA 200, A180d, B180',
    oilSpec: 'MB-Approval 229.51 / 229.52 DPF Uyumlu'
  },
  {
    id: 'suv-series',
    name: 'GLA • GLC • GLE • ML',
    chassis: 'X156 • H247 • X253 • X254 • W164 • W166',
    engines: 'GLC 220d / 250d 4MATIC • GLA 200 • ML/GLE 350 BlueTEC',
    popularModels: 'GLC 250d Coupé, GLA 180d, GLE 350d 4MATIC',
    oilSpec: 'MB-Approval 229.52 4MATIC & DPF Özel'
  },
  {
    id: 's-series',
    name: 'S-Serisi & CLS',
    chassis: 'W221 • W222 • W223 • C218 • C257',
    engines: 'S350 CDI / BlueTEC / d • S400d • S500 Long • CLS 350 CDI',
    popularModels: 'S350d Long 4MATIC, S400d Maybach, CLS 350d',
    oilSpec: 'MB-Approval 229.52 / 229.61 Yüksek Performans'
  },
  {
    id: 'vito-sprinter',
    name: 'Vito & Sprinter',
    chassis: 'W639 • W447 • W906 • W907',
    engines: '111 CDI • 114 CDI • 116 CDI • 119 BlueTEC • 316 / 416 CDI',
    popularModels: 'Vito Tourer 119 VIP, Vito Mixto, Sprinter Turizm',
    oilSpec: 'MB-Approval 228.51 / 229.52 Ağır Hizmet'
  }
];

interface ServicePackage {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  duration: string;
  master: string;
  icon: React.ReactNode;
  summary: string;
  checklist: string[];
  oemBrands: string[];
}

const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'periyodik',
    title: 'Periyodik Bakım & 40 Nokta Check-Up',
    shortTitle: 'Periyodik Bakım',
    badge: '10.000 / 15.000 KM',
    duration: '60 - 90 Dakika (Aynı Gün Teslim)',
    master: 'Engin Çalımlı & Uzman Mekanik Ekibi',
    icon: <Gauge className="w-5 h-5 text-amber-400" />,
    summary: 'Mercedes-Benz fabrika spesifikasyonlarına uygun motor yağı, orijinal filtre seti değişimi ve bilgisayarlı servis sıfırlama işlemi.',
    checklist: [
      'MB-Approval onaylı tam sentetik motor yağı değişimi',
      'Yağ filtresi, hava filtresi ve aktif karbonlu polen filtresi değişimi',
      'Dizel/Benzin yakıt filtresi kontrolü ve su ayırıcı tahliyesi',
      'Fren balata kalınlığı, disk yüzeyi ve fren hidroliği nem ölçümü',
      'Ön takım, rotil, salıncak burçları ve antifriz derecesi kontrolü',
      'Xentry Star Diagnosis ile arıza taraması ve bakım periyodu sıfırlama'
    ],
    oemBrands: ['Mercedes-Benz Orijinal', 'Mann-Filter', 'Mahle', 'Wunder', 'Mobil 1 ESP']
  },
  {
    id: 'sanziman',
    title: '7G / 9G-Tronic Otomatik Şanzıman Bakımı',
    shortTitle: 'Şanzıman Bakımı',
    badge: '60.000 KM Kritik Bakım',
    duration: '2 - 3 Saat',
    master: 'Uğur Gözoğlu (Şanzıman & Aktarma Uzmanı)',
    icon: <Settings className="w-5 h-5 text-cyan-400" />,
    summary: 'Vites geçişlerindeki vuruntuyu önleyen, şanzıman ömrünü uzatan orijinal karter filtresi, ATF yağ değişimi ve Xentry adaptasyonu.',
    checklist: [
      '7G-Tronic (722.9) veya 9G-Tronic (725.0) ultrasonik karter/filtre değişimi',
      'Türbin (tork konvertörü) dahil tam kapasite MB 236.15 / 236.17 ATF yağ dolumu',
      'Mıknatıs temizliği, karter contası ve alüminyum karter cıvatalarının yenilenmesi',
      'Mekatronik kart basınç ve sıcaklık sensörü canlı değer kontrolü',
      'Xentry ile vites geçiş adaptasyonu ve yol testi'
    ],
    oemBrands: ['Mercedes-Benz Orijinal Karter', 'Febi Bilstein', 'Meyle', 'Fuchs Titan ATF']
  },
  {
    id: 'xentry',
    title: 'Xentry Star Bilgisayarlı Arıza Tespiti & Elektronik',
    shortTitle: 'Xentry Arıza Tespiti',
    badge: 'Yetkili Cihaz Teşhisi',
    duration: '30 - 60 Dakika',
    master: 'Ercan Aycan (Mekatronik & Teşhis Uzmanı)',
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    summary: 'Deneme-yanılma ile gereksiz parça değişimine son veren, lisanslı Mercedes Xentry / Star Diagnosis ile nokta atışı arıza teşhisi.',
    checklist: [
      'Tüm elektronik kontrol ünitelerinin (ECU, TCU, SAM, ESP, Airbag) taranması',
      'Motor arıza lambası, AdBlue / NOx sensörü ve DPF kurum doluluk analizi',
      'Enjektör işeme/düzeltme değerleri ve turbo basınç canlı grafik testi',
      'Sensör kalibrasyonu, direksiyon açı sensörü ve akü/alternatör analizi',
      'Şeffaf arıza raporu sunumu ve onarım maliyet planlaması'
    ],
    oemBrands: ['Mercedes Xentry Diagnosis', 'Bosch', 'Continental', 'Hella']
  },
  {
    id: 'agir-bakim',
    title: 'Motor Mekanik, Eksantrik Zincir & Turbo Revizyonu',
    shortTitle: 'Ağır Bakım & Zincir',
    badge: '100.000+ KM & Mekanik',
    duration: 'İşleme Göre 1 - 2 Gün',
    master: 'Engin Çalımlı (Kurucu & Baş Usta)',
    icon: <Wrench className="w-5 h-5 text-emerald-400" />,
    summary: 'İlk çalıştırmada gelen zincir sesi, yağ kaçağı, çekiş düşüklüğü veya su eksiltme sorunlarına garantili ve kalıcı motor mekanik çözümleri.',
    checklist: [
      'OM651 / OM654 / M271 / M274 eksantrik zincir seti ve gergi değişimi',
      'Vanus (eksantrik dişlisi) kontrolü ve senteye alma işlemi',
      'Yağ soğutucusu (gözlük conta), külbütör kapağı ve karter sızdırmazlık',
      'Devirdaim su pompası, termostat, V-kayışı ve gergi rulmanları değişimi',
      'Turboşarj aktüatör/kartuş revizyonu ve intercooler kaçak testi'
    ],
    oemBrands: ['Mercedes-Benz Orijinal', 'Iwis', 'INA', 'BorgWarner', 'Elring', 'Wahler']
  },
  {
    id: 'airmatic',
    title: 'Airmatic Havalı Süspansiyon & Ön Takım',
    shortTitle: 'Airmatic & Ön Takım',
    badge: 'Konfor & Yol Tutuş',
    duration: '2 - 4 Saat',
    master: 'Uğur Gözoğlu & Mekanik Ekibi',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    summary: 'Aracın sabaha kadar çökmesi, "Aracı Yükseltiniz" uyarısı veya bozuk yolda gelen ön takım lokurtu seslerinin fabrikasyon çözümü.',
    checklist: [
      'Airmatic hava körüğü, amortisör ve pnömatik hat kaçak testi',
      'Airmatic kompresörü basınç testi ve valf bloğu onarımı',
      'Xentry ile araç yükseklik seviye kalibrasyonu (Level Calibration)',
      'Üst ve alt salıncaklar, Z-rotlar, viraj demir lastikleri ve burç değişimi',
      'Motor ve şanzıman kulaklarının (takozlarının) titreşim kontrolü'
    ],
    oemBrands: ['Lemförder', 'Bilstein', 'Arnott', 'Sachs', 'Corteco']
  },
  {
    id: 'fren',
    title: 'Fren Disk, Balata & Güvenlik Sistemleri',
    shortTitle: 'Fren & Disk Servisi',
    badge: 'Orijinal Güvenlik',
    duration: '60 - 90 Dakika',
    master: 'Doğuş Mercedes Uzman Ekibi',
    icon: <Disc className="w-5 h-5 text-rose-400" />,
    summary: 'Ses yapmayan, yüksek hızda titreme oluşturmayan orijinal Mercedes ve Hella Pagid fren ekipmanları ile maksimum duruş güvenliği.',
    checklist: [
      'Ön ve arka hava kanallı / delikli (AMG) fren diski ve balata değişimi',
      'Balata aşınma ikaz fişlerinin (sensörlerinin) yenilenmesi',
      ' Kaliper pimlerinin temizliği ve yüksek ısıya dayanıklı seramik gres uygulaması',
      'Elektronik park freni (EPB) servis moduna alma ve kalibrasyon',
      'DOT 4+ / MB 331.0 fren hidroliği değişimi ve ABS/ESP kontrolü'
    ],
    oemBrands: ['Hella Pagid', 'Textar', 'Zimmermann', 'ATE', 'Mercedes-Benz Orijinal']
  }
];

interface ServicePlannerProps {
  preselectedSeriesId?: string | null;
}

export const ServicePlanner: React.FC<ServicePlannerProps> = ({ preselectedSeriesId }) => {
  const [selectedSeriesId, setSelectedSeriesId] = useState<string>('c-series');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('periyodik');
  const [customNote, setCustomNote] = useState<string>('');

  useEffect(() => {
    if (preselectedSeriesId) {
      setSelectedSeriesId(preselectedSeriesId);
    }
  }, [preselectedSeriesId]);

  const currentSeries = CAR_SERIES.find((s) => s.id === selectedSeriesId) || CAR_SERIES[0];
  const currentPackage = SERVICE_PACKAGES.find((p) => p.id === selectedPackageId) || SERVICE_PACKAGES[0];

  const handleWhatsAppBooking = () => {
    const messageLines = [
      `Merhaba Doğuş Mercedes Samsun,`,
      `Web sitenizdeki *Bakım & Arıza Robotu* üzerinden bilgi ve fiyat almak istiyorum:`,
      ``,
      `🚗 *Araç Serisi:* Mercedes-Benz ${currentSeries.name} (${currentSeries.chassis})`,
      `🔧 *Seçilen İşlem:* ${currentPackage.title}`,
      customNote.trim() ? `📝 *Not / Şikayet / Şasi:* ${customNote.trim()}` : null,
      ``,
      `Uygun randevu saati ve tahmini fiyat bilgisi paylaşabilir misiniz?`
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/905522605666?text=${encodeURIComponent(messageLines)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCallRedirect = () => {
    window.location.href = 'tel:05522605666';
  };

  return (
    <section id="bakim-robotu" className="py-20 md:py-28 bg-[#070a10] border-b border-slate-800/80 relative overflow-hidden">
      {/* Subtle engineering grid + radial glow */}
      <div className="absolute inset-0 bg-engineering-grid pointer-events-none opacity-60"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>İnteraktif Servis & Bakım Planlayıcı</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Aracınıza Özel <span className="text-amg-gradient">Bakım & Onarım Reçetesi</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Mercedes-Benz aracınızın serisini ve ihtiyacınız olan işlemi seçin; Samsun Tekkeköy atölyemizde uyguladığımız fabrika standartlarındaki işlem adımlarını inceleyip tek tıkla ustamızdan fiyat alın.
          </p>
        </div>

        {/* Interactive Configurator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Step 1 (Car Series) & Step 2 (Service Type) */}
          <div className="lg:col-span-7 space-y-8">
            {/* STEP 1: Choose Mercedes Series */}
            <div className="p-6 rounded-2xl metallic-card border border-slate-800/90">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center">
                    01
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Mercedes-Benz Serinizi Seçin
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  Kasa Kodu Uyumlu
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CAR_SERIES.map((series) => {
                  const isSelected = series.id === selectedSeriesId;
                  return (
                    <button
                      key={series.id}
                      type="button"
                      onClick={() => setSelectedSeriesId(series.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 relative overflow-hidden group ${
                        isSelected
                          ? 'bg-gradient-to-br from-slate-800/95 to-slate-900 border-cyan-400/70 shadow-lg shadow-cyan-500/10'
                          : 'bg-[#0b0f17]/90 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {series.name}
                        </span>
                        <Car className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-400'}`} />
                      </div>
                      <span className="block text-[11px] font-mono text-slate-400 truncate">
                        {series.chassis}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Series Technical Strip */}
              <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                <div>
                  <span className="text-slate-500">Sık Gelen Motorlar: </span>
                  <span className="font-medium text-slate-200">{currentSeries.engines}</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-cyan-300">
                  {currentSeries.oilSpec}
                </div>
              </div>
            </div>

            {/* STEP 2: Choose Service Operation */}
            <div className="p-6 rounded-2xl metallic-card border border-slate-800/90">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center">
                    02
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Yapılacak Bakım veya Onarım İşlemini Seçin
                  </h3>
                </div>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  6 Ana Uzmanlık
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_PACKAGES.map((pkg) => {
                  const isSelected = pkg.id === selectedPackageId;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-gradient-to-br from-slate-800/95 to-slate-900 border-cyan-400/70 shadow-lg shadow-cyan-500/10'
                          : 'bg-[#0b0f17]/90 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                      }`}
                    >
                      <div className={`p-2.5 rounded-lg border shrink-0 mt-0.5 ${
                        isSelected ? 'bg-slate-950 border-cyan-500/40' : 'bg-slate-900 border-slate-800'
                      }`}>
                        {pkg.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                            {pkg.shortTitle}
                          </span>
                          <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'}`} />
                        </div>
                        <span className="inline-block text-[10px] font-mono text-slate-400 mt-0.5">
                          {pkg.badge}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Live Technical Prescription & Direct WhatsApp/Call Output */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl metallic-card border border-cyan-500/30 overflow-hidden shadow-2xl relative">
              {/* Top Telemetry Header */}
              <div className="p-6 bg-gradient-to-r from-slate-900 via-[#0f172a] to-slate-900 border-b border-slate-800">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono font-semibold text-cyan-300">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    DOĞUŞ MERCEDES REÇETESİ
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {currentSeries.chassis.split('•')[0].trim()}+
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white leading-snug">
                  Mercedes {currentSeries.name} — {currentPackage.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {currentPackage.summary}
                </p>

                {/* Quick Meta Pills */}
                <div className="mt-4 grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">Tahmini Süre</span>
                      <strong className="text-white font-semibold">{currentPackage.duration}</strong>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">Sorumlu Uzman</span>
                      <strong className="text-white font-semibold truncate block">{currentPackage.master.split('(')[0]}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checklist Body */}
              <div className="p-6 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Atölyemizde Uygulanan Kontrol & İşlem Adımları</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {currentPackage.checklist.map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stock Brands Used */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                    <PackageCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Depomuzda Hazır Orijinal & OEM Markalar</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPackage.oemBrands.map((brand, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-[11px] font-medium text-slate-200"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Optional Note / VIN input */}
                <div className="pt-3 border-t border-slate-800/80">
                  <label htmlFor="planner-note" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Varsa Aracınızın Model Yılı / Şikayetiniz (İsteğe Bağlı):
                  </label>
                  <input
                    id="planner-note"
                    type="text"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Örn: 2017 C200d, 120.000 km fiyat ve randevu..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#06080c] border border-slate-700/80 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Action CTAs */}
                <div className="space-y-2.5 pt-1">
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2.5 transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Bu Paketi WhatsApp'tan Ustaya Sor</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCallRedirect}
                    className="w-full py-3 px-5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm shadow flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Doğrudan Ara: 0552 260 56 66</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
