import React from 'react';
import { Bed, Sofa, Sparkles, Baby, ChevronRight, MessageCircle } from 'lucide-react';
import { SERVICES, OTHER_SERVICES, getWhatsAppUrl } from '../data/content';

export const Services: React.FC = () => {
  const getIcon = (fallbackIcon: string) => {
    switch (fallbackIcon) {
      case 'mattress':
        return <Bed className="w-5 h-5 text-teal-700" aria-hidden="true" />;
      case 'sofa':
        return <Sofa className="w-5 h-5 text-teal-700" aria-hidden="true" />;
      case 'rug':
        return <Sparkles className="w-5 h-5 text-teal-700" aria-hidden="true" />;
      case 'babySeat':
        return <Baby className="w-5 h-5 text-teal-700" aria-hidden="true" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-700" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#56627A] uppercase mb-2 block">
          Catálogo a domicilio
        </span>
        <h2
          id="servicios-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-[360] tracking-[-0.03em] text-[#0E1B2C] mb-4"
        >
          ¿Qué limpiamos?
        </h2>
        <p className="text-base sm:text-lg text-[#56627A] font-normal leading-relaxed">
          Tus necesidades han ido creando nuevos servicios: el límite no existe.
        </p>
      </div>

      {/* 4 Glass Cards Grid (2x2 desktop, 1 col mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {SERVICES.map((service) => {
          const serviceWhatsAppUrl = getWhatsAppUrl(service.whatsappText);

          return (
            <article
              key={service.id}
              className="glass-panel glass-card-hover rounded-[28px] overflow-hidden flex flex-col justify-between border border-white/90"
            >
              <div>
                {/* Real Photo with subtle light adjustment */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback gradient if blocked
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle inner top-left sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                  
                  {/* Category Chip in top-left */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-md text-[#0E1B2C] shadow-sm">
                      {service.title.replace('Limpieza de ', '')}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                      {getIcon(service.fallbackIcon)}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-medium text-[#0E1B2C] tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#56627A] font-normal mb-5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Metadata Chips: Zero-pill discipline (editorial unboxed text with dots) */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-[#56627A] font-medium pt-1 border-t border-slate-200/50">
                    {service.chips.map((chip, idx) => (
                      <React.Fragment key={chip}>
                        {idx > 0 && <span aria-hidden="true" className="text-[#8E9BAE]">·</span>}
                        <span>{chip}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: WhatsApp specific CTA */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 flex items-center justify-between">
                <span className="text-xs text-[#56627A]">
                  Duración aprox: <strong className="font-semibold text-[#0E1B2C]">{service.approxDuration}</strong>
                </span>

                <a
                  href={serviceWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={`service-${service.id}-whatsapp`}
                  className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 bg-[#0F1B31] text-white rounded-full text-xs sm:text-sm font-medium shadow-sm hover:bg-[#1a2b47] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                >
                  <span>Cotizar</span>
                  <span className="w-6 h-6 rounded-full bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/35 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Franja "También limpiamos": real extended services */}
      <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-[28px] glass-panel border border-white/90">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-wider text-teal-800 uppercase block mb-1">
              Servicios complementarios
            </span>
            <h4 className="text-lg sm:text-xl font-medium text-[#0E1B2C] mb-2">
              También higienizamos a domicilio:
            </h4>
            <p className="text-xs sm:text-sm text-[#56627A]">
              Consúltanos por cualquier textil o superficie del hogar que requiera higienización con estándar profesional.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {OTHER_SERVICES.map((item) => (
              <a
                key={item.name}
                href={getWhatsAppUrl(`Hola Karol, ¿limpias ${item.name.toLowerCase()}? Quiero cotizar.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full bg-white/80 hover:bg-white text-xs font-medium text-[#0E1B2C] border border-[#D6DFE8] hover:border-teal-400 shadow-xs transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            <a
              href={getWhatsAppUrl('Hola Karol, ¿limpias [__]? Quiero cotizar.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F1B31] text-white hover:bg-[#1a2b47] text-xs font-medium shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>¿Limpias otra cosa? Pregúntame</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
