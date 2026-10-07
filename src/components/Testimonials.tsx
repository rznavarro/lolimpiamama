import React from 'react';
import { Quote, ExternalLink, Star } from 'lucide-react';
import { REAL_REVIEWS, SOCIAL_LINKS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header with verified internal rating */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#56627A] uppercase mb-2 block">
            Prueba social real
          </span>
          <h2
            id="testimonios-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-[360] tracking-[-0.03em] text-[#0E1B2C]"
          >
            Lo que dicen en casa
          </h2>
        </div>

        {/* Rating and Google Reviews link */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 border border-[#D6DFE8] shadow-xs">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#0E1B2C]">
              5,0
            </span>
            <span className="text-xs text-[#56627A]">
              · 15 reseñas en nuestro sitio
            </span>
          </div>

          <a
            href={SOCIAL_LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full glass-pill text-xs sm:text-sm font-medium text-[#0E1B2C] hover:bg-white transition-all shadow-xs group"
          >
            <span>Ver ficha en Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-teal-700 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Testimonials Grid (3 on top, 2 on bottom desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REAL_REVIEWS.map((review, idx) => (
          <article
            key={idx}
            className={`rounded-[24px] p-7 glass-panel border border-white flex flex-col justify-between glass-card-hover ${
              idx >= 3 ? 'lg:col-span-1 md:last:col-span-2 lg:last:col-span-1' : ''
            }`}
          >
            <div>
              <Quote className="w-8 h-8 text-teal-600/30 mb-4" />
              <blockquote className="text-base sm:text-lg text-[#0E1B2C] font-normal leading-relaxed mb-6 italic">
                «{review.quote}»
              </blockquote>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0E1B2C]">
                {review.author}
              </span>
              <span className="text-[#56627A]">
                {review.service}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
