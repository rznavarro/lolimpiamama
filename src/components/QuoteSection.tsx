import React from 'react';
import { Bed, Sofa, Sparkles, Baby, Car, Layers, MessageCircle } from 'lucide-react';
import { QUOTE_CHANNELS, getWhatsAppUrl } from '../data/content';

export const QuoteSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mattress':
        return <Bed className="w-5 h-5 text-teal-700" />;
      case 'sofa':
        return <Sofa className="w-5 h-5 text-teal-700" />;
      case 'rug':
        return <Sparkles className="w-5 h-5 text-teal-700" />;
      case 'babySeat':
        return <Baby className="w-5 h-5 text-teal-700" />;
      case 'car':
        return <Car className="w-5 h-5 text-teal-700" />;
      case 'curtain':
        return <Layers className="w-5 h-5 text-teal-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section
      id="cotizar"
      aria-labelledby="cotizar-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#56627A] uppercase mb-2 block">
          Presupuesto rápido y sin vueltas
        </span>
        <h2
          id="cotizar-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-[360] tracking-[-0.03em] text-[#0E1B2C] mb-4"
        >
          Cotiza en un mensaje
        </h2>
        <p className="text-base sm:text-lg text-[#56627A] font-normal leading-relaxed">
          Cuéntame qué necesitas y envíame estos sencillos detalles para darte el valor exacto de inmediato por WhatsApp:
        </p>
      </div>

      {/* 6 Compact Service Quote Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {QUOTE_CHANNELS.map((item) => {
          const url = getWhatsAppUrl(item.message);

          return (
            <div
              key={item.id}
              className="rounded-[24px] p-6 glass-panel border border-white flex flex-col justify-between glass-card-hover"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0E1B2C]">
                      {item.title}
                    </h3>
                    <span className="text-xs text-teal-800 font-medium">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <div className="bg-white/60 p-3.5 rounded-xl border border-slate-100 mb-6">
                  <span className="text-[11px] font-semibold text-[#8E9BAE] uppercase tracking-wider block mb-1">
                    Qué enviar:
                  </span>
                  <p className="text-xs sm:text-sm text-[#0E1B2C] leading-snug">
                    {item.instructions}
                  </p>
                </div>
              </div>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                data-cta={`quote-${item.id}-whatsapp`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0F1B31] text-white rounded-full text-xs sm:text-sm font-medium hover:bg-[#1a2b47] transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Cotizar {item.title}</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
