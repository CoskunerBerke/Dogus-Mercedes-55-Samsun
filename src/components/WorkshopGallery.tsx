import React, { useState } from 'react';
import { PRODUCTS_LIST, ProductItem } from '../data/productsData';
import { X, FileDown, Phone } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'Tüm Ürünler' },
  { id: 'is-guvenligi', label: 'EMEX İş Güvenliği Ayakkabıları' },
  { id: 'cizme', label: 'ULAŞ PVC & Kauçuk Çizmeler' },
  { id: 'lastik-pvc', label: 'EMEK Lastik & PVC Ayakkabılar' },
  { id: 'keten-deniz', label: "EMEK'S Keten & Deniz Ayakkabıları" },
  { id: 'bot-terlik', label: 'MEYKERS Bot & EVA Terlik' }
];

export const WorkshopGallery: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts =
    activeCat === 'all'
      ? PRODUCTS_LIST
      : PRODUCTS_LIST.filter((p) => p.category === activeCat);

  return (
    <section id="urunler" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-5 border-b border-slate-200">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-red-600 mb-1">
              FABRİKA ÜRETİM KATALOĞU
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ürünlerimiz ve Modellerimiz
            </h2>
          </div>

          <a
            href="/emek/EmekLastik_Katalog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shrink-0 transition-colors"
          >
            <FileDown className="w-4 h-4 text-red-500" />
            <span>Tam Ürün Kataloğunu İndir (PDF)</span>
          </a>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const isActive = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCat(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors border ${
                  isActive
                    ? 'bg-red-600 text-white border-red-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-md cursor-pointer transition-all flex flex-col justify-between"
            >
              {/* Studio Image Box */}
              <div className="aspect-[4/3] w-full bg-white p-4 flex items-center justify-center overflow-hidden relative border-b border-slate-100">
                <img
                  src={product.image}
                  alt={`${product.brand} ${product.name}`}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900 text-white text-[11px] font-extrabold">
                  {product.brand}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-4 bg-slate-50/60">
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-1">
                  <span className="font-mono font-bold text-red-600">Kod: {product.code}</span>
                  <span>{product.sizes}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">Renk / Tip: {product.color}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-red-600 hover:text-white transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-white p-8 flex items-center justify-center max-h-[55vh] border-b border-slate-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[48vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase mb-1">
                  <span>{selectedProduct.brand}</span>
                  <span>•</span>
                  <span>Model Kodu: {selectedProduct.code}</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{selectedProduct.name}</h3>
                <p className="text-sm text-slate-600 mt-1">
                  Numara: <strong className="text-slate-900">{selectedProduct.sizes}</strong> | Renk: <strong className="text-slate-900">{selectedProduct.color}</strong>
                </p>
              </div>

              <a
                href="tel:+903622666222"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Toptan Fiyat Sor</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
