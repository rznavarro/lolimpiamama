import React, { forwardRef } from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, PHONE_NUMBER, PHONE_TEL } from '../data/content';
import heroBubbleImg from '../assets/images/soap_bubble_hero_1791350441461.jpg';

export const FinalCta = forwardRef<HTMLDivElement>((_props, ref) => {
  const generalWhatsAppUrl = getWhatsAppUrl(
    'Hola Karol, quiero cotizar una limpieza profunda. Te cuento qué necesito:'
  );

  return (
    <section
      ref={ref}
      id="cta-final"
      aria-label="Llamado a la acción final"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="relative rounded-[36px] overflow-hidden p-8 sm:p-14 lg:p-20 glass-panel border border-white text-center">
        
        {/* Soft bubble backdrop */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-40">
          <img
            src={heroBubbleImg}
            alt=""
            role="presentation"
            className="absolute -right-20 -bottom-20 w-full max-w-2xl object-contain mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-semibold text-teal-800 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Aire limpio en tu hogar</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[360] tracking-[-0.035em] text-[#0E1B2C] mb-4 sm:mb-6 leading-[1.1]">
            Tu casa, libre de ácaros y alérgenos.
          </h2>

          <p className="text-base sm:text-xl text-[#56627A] font-normal mb-8 sm:mb-10 max-w-xl">
            Cotiza hoy por WhatsApp directamente con Karol. Procesos seguros, sin químicos agresivos y con la máxima prolijidad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="final-cta-whatsapp"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-6 pr-2.5 py-3.5 sm:py-4 bg-[#0F1B31] text-white rounded-full text-base font-medium shadow-xl hover:bg-[#1a2b47] hover:-translate-y-0.5 active:translate-y-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <span>Cotizar por WhatsApp</span>
              <span className="w-8 h-8 rounded-full bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/40 transition-colors">
                <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300" />
              </span>
            </a>

            <a
              href={`tel:${PHONE_TEL}`}
              data-cta="final-cta-call"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full glass-pill text-sm sm:text-base font-medium text-[#0E1B2C] hover:bg-white transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#56627A]" />
              <span>Llamar {PHONE_NUMBER}</span>
            </a>
          </div>

          <p className="text-xs text-[#8E9BAE] mt-6">
            Atención personalizada · Santiago, Región Metropolitana
          </p>

        </div>
      </div>
    </section>
  );
});

FinalCta.displayName = 'FinalCta';
