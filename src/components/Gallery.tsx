import React, { useState, useEffect } from 'react';
import { ExternalLink, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_PHOTOS, SOCIAL_LINKS } from '../data/content';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const Gallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  // Lock scroll when lightbox open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedPhotoIndex]);

  const activePhoto = selectedPhotoIndex !== null ? GALLERY_PHOTOS[selectedPhotoIndex] : null;

  return (
    <section
      id="trabajos"
      aria-labelledby="trabajos-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header with large stat */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#56627A] uppercase mb-2 block">
            Resultados comprobados
          </span>
          <h2
            id="trabajos-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-[360] tracking-[-0.03em] text-[#0E1B2C]"
          >
            Trabajos realizados
          </h2>
        </div>

        {/* Large Thin Number + Label */}
        <div className="flex items-baseline gap-3 p-4 sm:p-5 rounded-2xl glass-panel border border-white">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-[200] text-[#0E1B2C] tabular-nums tracking-tight">
            +700 m²
          </span>
          <span className="text-xs sm:text-sm text-[#56627A] leading-tight font-medium">
            de alfombra limpia<br />
            en hogares de Santiago
          </span>
        </div>
      </div>

      {/* Interactive Before & After Slider */}
      <BeforeAfterSlider />

      {/* Gallery Grid (Desktop mosaic, Mobile horizontal scroll-snap) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {GALLERY_PHOTOS.map((photo, index) => (
          <figure
            key={photo.id}
            onClick={() => setSelectedPhotoIndex(index)}
            className="group relative aspect-[4/3] rounded-[24px] overflow-hidden bg-slate-100 cursor-pointer glass-card-hover border border-white/80"
          >
            <img
              src={photo.url}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Hover Scrim & Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2C]/80 via-[#0E1B2C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-[10px] font-semibold text-teal-300 uppercase tracking-wider mb-1">
                {photo.category}
              </span>
              <figcaption className="text-xs sm:text-sm font-medium text-white leading-snug">
                {photo.title}
              </figcaption>
              <div className="mt-2 flex items-center gap-1 text-[11px] text-white/80">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Ampliar foto</span>
              </div>
            </div>

            {/* Subtle category tag visible on touch screens */}
            <div className="absolute top-3 left-3 group-hover:opacity-0 transition-opacity">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/40 text-white backdrop-blur-sm">
                {photo.category}
              </span>
            </div>
          </figure>
        ))}
      </div>

      {/* Instagram Link */}
      <div className="mt-10 sm:mt-12 text-center">
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-pill text-xs sm:text-sm font-medium text-[#0E1B2C] hover:bg-white transition-all shadow-xs group"
        >
          <span>Ver más antes y después en Instagram</span>
          <ExternalLink className="w-4 h-4 text-teal-700 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedPhotoIndex !== null && activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Cerrar imagen"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
              );
            }}
            className="absolute left-2 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image + Info container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.url}
              alt={activePhoto.alt}
              className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase tracking-wider text-teal-400 font-semibold block mb-1">
                {activePhoto.category}
              </span>
              <p className="text-base sm:text-lg font-medium">{activePhoto.title}</p>
              <p className="text-xs text-white/60 mt-1">
                {selectedPhotoIndex + 1} de {GALLERY_PHOTOS.length}
              </p>
            </div>
          </div>

          {/* Navigation Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0
              );
            }}
            className="absolute right-2 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
