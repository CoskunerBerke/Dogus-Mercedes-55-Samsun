import React, { useState } from 'react';
import {
  Package,
  Search,
  ShieldCheck,
  Truck,
  CheckCircle2,
  MessageCircle,
  Phone,
  Sparkles,
  Box,
  Layers,
  Wrench
} from 'lucide-react';

interface PartCategory {
  id: string;
  name: string;
  countBadge: string;
  items: string[];
  brands: string[];
  description: string;
}

const PART_CATEGORIES: PartCategory[] = [
  {
    id: 'filtre-bakim',
    name: 'Filtre & Bakım Setleri',
    countBadge: 'Tam Stok',
    description: 'Binek (C, E, S, CLA, GLA, GLC) ve ticari (Vito, Sprinter) tüm Mercedes motorları için hazır periyodik bakım filtre paketleri ve onaylı sıvılar.',
    items: [
      'Orijinal Yağ, Hava, Yakıt (Mazot) ve Karbonlu Polen Filtreleri',
      'MB 229.51 / 229.52 / 229.71 Onaylı Motor Yağları',
      '7G-Tronic & 9G-Tronic Şanzıman Yağ Karter Filtre Kitleri',
      'Kırmızı / Mavi Mercedes Antifriz & Fren Hidrolik Sıvıları'
    ],
    brands: ['Mercedes-Benz Orijinal', 'Mann-Filter', 'Mahle / Knecht', 'Wunder Filter', 'Hengst']
  },
  {
    id: 'fren-grubu',
    name: 'Fren Disk & Balata',
    countBadge: 'Sıfır Ses Garantili',
    description: 'Yüksek hızda titreme ve ötme yapmayan, yüksek karbon alaşımlı ön/arka fren diskleri, seramik katkılı balatalar ve ikaz fişleri.',
    items: [
      'AMG Paket Delikli (Perfore) & Hava Kanallı Fren Diskleri',
      'Ön ve Arka Fren Balata Takımları & Balata Fişleri',
      'El Freni (EPB) Kaliper Motorları & Fren Hortumları',
      'ABS / ESP Tekerlek Hız Sensörleri ve Ana Merkezler'
    ],
    brands: ['Hella Pagid', 'Textar', 'Zimmermann', 'ATE', 'Mercedes-Benz Orijinal']
  },
  {
    id: 'on-takim-airmatic',
    name: 'Ön Takım & Airmatic',
    countBadge: 'Konfor & Denge',
    description: 'Samsun ve Karadeniz yol şartlarına dayanıklı alüminyum salıncak kolları, Airmatic körükleri, amortisörler ve motor takozları.',
    items: [
      'Alüminyum Üst / Alt Salıncak Kolları, Rotil ve Z-Rotlar',
      'Airmatic Hava Körükleri, Kompresör ve Valf Blokları',
      'Ön / Arka Amortisörler, Helezon Yaylar ve Amortisör Takozları',
      'Hidrolik Motor Kulakları (Takozları) ve Şanzıman Takozu'
    ],
    brands: ['Lemförder', 'Bilstein', 'Sachs', 'Arnott', 'Corteco', 'Febi Bilstein']
  },
  {
    id: 'motor-mekanik',
    name: 'Motor, Zincir & Turbo',
    countBadge: 'Ağır Bakım Stoğu',
    description: 'OM651, OM654, OM642, M271, M274 ve M270 motorlar için eksantrik zincir setleri, su pompaları, termostat ve turbo parçaları.',
    items: [
      'Eksantrik Zincir Seti, Gergi ve Vanus Dişlileri',
      'Devirdaim Su Pompası, Elektronik Termostat ve Yağ Soğutucusu',
      'Turboşarj, Enjektör Pulları, Külbütör Kapağı ve Conta Takımları',
      'V-Kayışı, Gergi Kütüğü, Avare Kasnak ve Şarj Dinamosu Kasnağı'
    ],
    brands: ['Iwis', 'INA', 'BorgWarner', 'Wahler', 'Elring', 'Victor Reinz', 'Pierburg']
  },
  {
    id: 'elektronik-sensor',
    name: 'Sensör & Elektronik',
    countBadge: 'Orijinal Kodlu',
    description: 'Arıza lambası yakan NOx, DPF, oksijen, krank/eksantrik sensörleri, ateşleme bobinleri ve aydınlatma/gövde aksamı.',
    items: [
      'NOx Sensörü, AdBlue Isıtıcı/Pompa ve DPF Basınç Sensörleri',
      'Ateşleme Bobinleri, İridyum Bujiler ve Kızdırma Bujileri + Beyni',
      'MAF (Hava Akışmetre), MAP, Krank ve Eksantrik Devir Sensörleri',
      'Cam Açma Düğmeleri, SAM Beyin Modülleri ve Direksiyon Sargısı'
    ],
    brands: ['Bosch', 'Continental', 'NGK / Beru', 'Hella', 'Delphi', 'Mercedes-Benz']
  }
];

export const SparePartsSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('filtre-bakim');
  const [carModelInput, setCarModelInput] = useState<string>('');
  const [partQueryInput, setPartQueryInput] = useState<string>('');

  const activeCategory = PART_CATEGORIES.find((c) => c.id === activeCategoryId) || PART_CATEGORIES[0];

  const handleSparePartWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const textLines = [
      `Merhaba Doğuş Mercedes Yedek Parça Bölümü,`,
      `Web siteniz üzerinden *Yedek Parça Stok & Fiyat* sorgulamak istiyorum:`,
      ``,
      `🚘 *Araç / Şasi No:* ${carModelInput.trim() || 'Belirtilmedi (Mesajda paylaşacağım)'}`,
      `📦 *Aranan Parça / Kategori:* ${partQueryInput.trim() || activeCategory.name}`,
      ``,
      `Orijinal / OEM stok durumunuz ve fiyat bilginiz nedir?`
    ].join('\n');

    window.open(
      `https://wa.me/905522605666?text=${encodeURIComponent(textLines)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="yedek-parca" className="py-20 md:py-28 bg-[#090d14] border-b border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-3">
              <Package className="w-3.5 h-3.5 text-amber-400" />
              <span>Doğuş Mercedes Yedek Parça Deposu • Samsun</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Kendi Depomuzdan <span className="text-silver-shimmer">Beklemesiz Yedek Parça</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
              Aracınızın kargo bekle하면서 liftte günlerce yatmasına izin vermiyoruz. Tekkeköy atölyemizdeki zengin orijinal ve Alman OEM yedek parça depomuzla aynı gün montaj veya Karadeniz geneline hızlı gönderim sağlıyoruz.
            </p>
          </div>

          {/* Warehouse Highlight Stat */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0e1420] border border-slate-800 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Box className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white font-display">5.000+ Kalem</div>
              <div className="text-xs text-slate-400">Rafımızda Hazır Mercedes Parça Stoğu</div>
            </div>
          </div>
        </div>

        {/* Main Grid: Left Real Warehouse Showcase + Categories, Right Instant VIN/Part Query */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Real Photo of Doğuş Mercedes Spare Parts Room */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group bg-black">
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img
                  src="/images/spare-parts.jpg"
                  alt="Doğuş Mercedes Samsun Yedek Parça Deposu Gerçek Fotoğrafı"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-[#06080c]/30 to-transparent"></div>

                {/* Live Authentic Badges on the Real Photo */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Gerçek Depo Görüntümüz • Tekkeköy
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 block">
                      ORİJİNAL & ALMAN OEM STOK MERKEZİ
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Mercedes-Benz Binek & Ticari Yedek Parça Reyonu
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 shrink-0">
                    <Truck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Aynı Gün Montaj & Kargo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Selector Tabs */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {PART_CATEGORIES.map((cat) => {
                  const active = cat.id === activeCategoryId;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategoryId(cat.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                        active
                          ? 'bg-white text-slate-950 border-white shadow-md'
                          : 'bg-[#0e1420] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>

              {/* Active Category Details Card */}
              <div className="p-6 rounded-2xl metallic-card border border-slate-800">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-cyan-400" />
                    <span>{activeCategory.name}</span>
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    {activeCategory.countBadge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                  {activeCategory.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                  {activeCategory.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#090d14]/90 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-400 mr-1">Raflarımızdaki Markalar:</span>
                  {activeCategory.brands.map((b, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/70 text-[11px] font-semibold text-slate-200"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Instant VIN / Spare Part Inquiry Box */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl metallic-card border border-amber-500/30 shadow-2xl relative">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-semibold mb-3">
                <Search className="w-3.5 h-3.5" />
                ŞASİ NO (VIN) VEYA PARÇA SORGULA
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                Aradığınız Parçayı Hemen Bulalım
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Mercedes-Benz EPC (Elektronik Parça Kataloğu) sistemimizden aracınızın şasi numarasına göre %100 uyumlu parça kodunu tespit edip anında fiyat veriyoruz.
              </p>

              <form onSubmit={handleSparePartWhatsApp} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="part-car-model" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Aracınızın Modeli veya Şasi Numarası (İsteğe Bağlı)
                  </label>
                  <input
                    id="part-car-model"
                    type="text"
                    value={carModelInput}
                    onChange={(e) => setCarModelInput(e.target.value)}
                    placeholder="Örn: W205 C200d 2016 veya WDD205..."
                    className="w-full px-4 py-3 rounded-xl bg-[#06080c] border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="part-query-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Aradığınız Yedek Parça veya Bakım Seti
                  </label>
                  <textarea
                    id="part-query-name"
                    rows={3}
                    value={partQueryInput}
                    onChange={(e) => setPartQueryInput(e.target.value)}
                    placeholder="Örn: Ön fren disk ve balata takımı, periyodik filtre seti, sağ ön salıncak, NOx sensörü..."
                    className="w-full px-4 py-3 rounded-xl bg-[#06080c] border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp ile Parça Fiyatı Sor</span>
                </button>
              </form>

              {/* Direct Spare Parts Phone Numbers */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Yedek Parça GSM / WhatsApp:</span>
                  <a href="tel:05522605666" className="font-mono font-bold text-white hover:text-amber-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    0552 260 56 66
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Yedek Parça Sabit Hat:</span>
                  <a href="tel:03622605666" className="font-mono font-bold text-slate-200 hover:text-white flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    (0362) 260 56 66
                  </a>
                </div>
              </div>

              {/* Trust Guarantee Box */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Parça + İşçilik Garantisi</strong>
                  Depomuzdan temin edilip servisimizde montajı yapılan tüm orijinal ve OEM yedek parçalar Doğuş Mercedes garantisi altındadır.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
