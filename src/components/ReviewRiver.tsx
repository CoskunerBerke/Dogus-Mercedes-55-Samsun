import React, { useState } from 'react';
import { reviewsList, ReviewItem } from '../data/reviewsData';
import { Star, CheckCircle, ExternalLink, Phone, MessageSquareQuote, ShieldCheck, ThumbsUp } from 'lucide-react';

export const ReviewRiver: React.FC = () => {
  const [activeReview, setActiveReview] = useState<ReviewItem | null>(null);

  const handleCallRedirect = () => {
    window.location.href = "tel:05522605666";
  };

  // We duplicate the list to make the infinite seamless marquee loop
  const riverStream1 = [...reviewsList.slice(0, 6), ...reviewsList.slice(0, 6)];
  const riverStream2 = [...reviewsList.slice(6), ...reviewsList.slice(6)];

  return (
    <section id="yorumlar" className="py-20 md:py-28 bg-[#0a0d12] border-b border-slate-800 relative overflow-hidden">
      {/* Background River Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        {/* River Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 uppercase tracking-widest mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5 text-blue-400" />
              <span>Akan Müşteri Yorumları Nehri</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Google Haritalar Gerçek Kullanıcı Deneyimleri
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Doğuş Mercedes Samsun atölyemizden hizmet alan Mercedes sahiplerinin bağımsız Google Haritalar platformundaki gerçek değerlendirmeleri.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl shadow-xl shrink-0">
            {/* Google G icon */}
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.26v3.15C3.27 21.36 7.35 24 12 24Z"/>
                <path fill="#FBBC05" d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.26C.46 8.18 0 9.98 0 12s.46 3.82 1.26 5.41l4.02-3.15Z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.64 1.26 6.59l4.02 3.15c.95-2.84 3.6-4.99 6.72-4.99Z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white">4.8</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                <span>Google Haritalar Puanı</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-400 font-semibold">%98 Memnuniyet</span>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Google Haritalar'da Gör"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* River Info Banner */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Yorumlar sağdan sola doğru nehir akışı halinde akar. Durdurup okumak için üzerine gelin.
          </span>
          <span className="hidden sm:inline text-slate-400">
            Tekkeköy / İlkadım Sanayi Sitesi • Samsun
          </span>
        </div>
      </div>

      {/* RIVER LANE 1: Flowing Right to Left */}
      <div className="relative w-full overflow-hidden river-mask py-3">
        <div className="flex gap-6 w-max animate-river-scroll pause-on-hover">
          {riverStream1.map((item, idx) => (
            <ReviewCard key={`lane1-${item.id}-${idx}`} review={item} onSelect={setActiveReview} />
          ))}
        </div>
      </div>

      {/* RIVER LANE 2: Staggered Flowing Right to Left */}
      <div className="relative w-full overflow-hidden river-mask py-3 mt-2">
        <div className="flex gap-6 w-max animate-river-scroll pause-on-hover" style={{ animationDuration: '52s' }}>
          {riverStream2.map((item, idx) => (
            <ReviewCard key={`lane2-${item.id}-${idx}`} review={item} onSelect={setActiveReview} />
          ))}
        </div>
      </div>

      {/* Bottom CTA for Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Siz de Doğuş Mercedes Ayrıcalığını Deneyimleyin</h4>
            <p className="text-xs text-slate-400">Mercedes aracınız için doğru teşhis, şeffaf fiyat ve garantili usta işçiliği.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleCallRedirect}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-slate-100 shadow transition-colors"
          >
            <Phone className="w-4 h-4 text-slate-950" />
            <span>Bilgi Al: 0552 260 56 66</span>
          </button>

          <a
            href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium border border-slate-700 transition-colors"
          >
            <span>Haritada Yorum Yap</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Review Detail Modal */}
      {activeReview && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#10141d] border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveReview(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-full ${activeReview.avatarBg} text-white font-bold flex items-center justify-center text-sm border border-slate-600`}>
                {activeReview.avatarText}
              </div>
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                  <span>{activeReview.author}</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-slate-300 font-medium">{activeReview.carModel}</span>
                  <span>•</span>
                  <span>{activeReview.timeAgo}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs text-slate-400 ml-2 font-medium">Google Haritalar Doğrulanmış Müşteri</span>
            </div>

            {activeReview.highlight && (
              <div className="mb-4 inline-block px-2.5 py-1 rounded bg-blue-950/70 border border-blue-800/60 text-blue-300 text-xs font-semibold">
                {activeReview.highlight}
              </div>
            )}

            <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              "{activeReview.content}"
            </p>

            <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={handleCallRedirect}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-slate-950 font-bold text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Bilgi Al: 0552 260 56 66</span>
              </button>

              <a
                href="https://maps.app.goo.gl/L96AQBgHhupn1F45A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <span>Google'da İncele</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

interface ReviewCardProps {
  review: ReviewItem;
  onSelect: (review: ReviewItem) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(review)}
      className="w-[320px] sm:w-[380px] p-5 rounded-2xl bg-[#0f141c]/90 hover:bg-[#141b26] border border-slate-800/90 hover:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between shrink-0 group select-none"
    >
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-bold flex items-center justify-center text-xs border border-slate-700/80 shrink-0`}>
              {review.avatarText}
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-white truncate flex items-center gap-1">
                <span>{review.author}</span>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20 shrink-0" />
              </h4>
              <p className="text-[11px] text-slate-400 truncate">{review.carModel}</p>
            </div>
          </div>

          <span className="text-[11px] text-slate-500 font-medium shrink-0">{review.timeAgo}</span>
        </div>

        {/* Rating and Highlight */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center text-amber-400">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          {review.highlight && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/70">
              {review.highlight}
            </span>
          )}
        </div>

        {/* Review snippet */}
        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3">
          "{review.content}"
        </p>
      </div>

      {/* Footer verification badge */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5 text-slate-400">
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.26v3.15C3.27 21.36 7.35 24 12 24Z"/>
            <path fill="#FBBC05" d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.59H1.26C.46 8.18 0 9.98 0 12s.46 3.82 1.26 5.41l4.02-3.15Z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.64 1.26 6.59l4.02 3.15c.95-2.84 3.6-4.99 6.72-4.99Z"/>
          </svg>
          <span>Google Haritalar</span>
        </span>
        <span className="text-slate-400 group-hover:text-white transition-colors flex items-center gap-1 font-medium">
          Detayı Oku →
        </span>
      </div>
    </div>
  );
};
