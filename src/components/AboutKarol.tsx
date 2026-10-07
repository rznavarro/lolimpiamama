import React from 'react';
import { Heart, MessageCircle, ShieldCheck, Users } from 'lucide-react';
import { BRAND_ASSETS, getWhatsAppUrl } from '../data/content';

export const AboutKarol: React.FC = () => {
  const karolWhatsAppUrl = getWhatsAppUrl(
    'Hola Karol, me gustaría conversar contigo sobre un servicio para mi casa.'
  );

  return (
    <section
      id="karol"
      aria-labelledby="karol-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="rounded-[32px] p-8 sm:p-12 lg:p-16 glass-panel border border-white relative overflow-hidden">
        
        {/* Soft background warmth */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-rose-100/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-[28px] overflow-hidden shadow-xl border-4 border-white/90 aspect-[3/4] bg-slate-100">
              <img
                src={BRAND_ASSETS.karolPhoto}
                alt="Karol Zenteno, fundadora de LoLimpiaMama"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Glass Overlay with Signature & Founder Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white shadow-lg">
                <span className="text-sm sm:text-base font-semibold text-[#0E1B2C] block">
                  Karol Zenteno
                </span>
                <span className="text-xs text-[#56627A]">
                  Fundadora de LoLimpiaMama
                </span>
                <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-teal-800 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Atención directa y personalizada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Commitment Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 text-xs font-semibold text-rose-800 mb-4">
              <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
              <span>Detrás de cada servicio</span>
            </div>

            <h2
              id="karol-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-[360] tracking-[-0.03em] text-[#0E1B2C] mb-6"
            >
              Conoce a Karol
            </h2>

            {/* Authentic First-Person Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-[#56627A] font-normal leading-relaxed mb-8">
              <p>
                Soy Karol, penquista de corazón y hace más de 15 años en Santiago. Mamá de dos niños pequeños. LoLimpiaMama nació tanto de la necesidad de manejar mi agenda en torno a ellos como de una realidad que vi en muchas jefas de hogar:
              </p>
              <blockquote className="pl-4 border-l-2 border-teal-500 italic text-[#0E1B2C] my-4 font-normal">
                «Necesitaban limpieza profunda de tapices, colchones y alfombras, pero no encontraban a una profesional de confianza que hiciera el trabajo con prolijidad, como si se tratara de su propio hogar».
              </blockquote>
              <p>
                Por eso investigué e invertí en maquinaria especializada e insumos biodegradables europeos de alto estándar. Para que cada proceso sea completamente seguro, limpio e inocuo para toda tu familia.
              </p>
            </div>

            {/* Direct Trust Pill */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/70 border border-white mb-8 w-full max-w-lg">
              <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#0E1B2C] font-medium leading-snug">
                <strong>Trabajo personalmente en tu hogar;</strong> en domicilios muy extensos me acompaña una persona más de mi total confianza.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={karolWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="karol-whatsapp"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-3 bg-[#0F1B31] text-white rounded-full text-sm sm:text-base font-medium shadow-md hover:bg-[#1a2b47] hover:-translate-y-0.5 active:translate-y-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <span>Hablar con Karol</span>
              <span className="w-8 h-8 rounded-full bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/35 transition-colors">
                <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300" />
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
