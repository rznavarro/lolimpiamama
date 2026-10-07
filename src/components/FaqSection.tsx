import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQS, getWhatsAppUrl } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqWhatsAppUrl = getWhatsAppUrl(
    'Hola Karol, tengo una consulta sobre el servicio de limpieza profunda:'
  );

  return (
    <section
      id="preguntas"
      aria-labelledby="faq-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#56627A] uppercase mb-2 block">
          Claridad total
        </span>
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-[360] tracking-[-0.03em] text-[#0E1B2C] mb-4"
        >
          Preguntas frecuentes
        </h2>
        <p className="text-base sm:text-lg text-[#56627A] font-normal leading-relaxed">
          Respuestas transparentes sobre nuestros procesos, tiempos y productos.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5 mb-12">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-[20px] glass-panel border border-white/90 overflow-hidden transition-all duration-200"
            >
              <h3>
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1B2C]"
                >
                  <span className="text-base sm:text-lg font-medium text-[#0E1B2C]">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-teal-50 text-teal-700' : 'text-[#56627A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
              </h3>

              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-[#56627A] leading-relaxed border-t border-slate-100/80 animate-fadeIn"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white/70 border border-white shadow-xs">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-teal-700 shrink-0" />
          <span className="text-sm font-medium text-[#0E1B2C]">
            ¿Tienes otra duda que no esté aquí?
          </span>
        </div>

        <a
          href={faqWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="faq-whatsapp"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1B31] text-white rounded-full text-xs sm:text-sm font-medium hover:bg-[#1a2b47] transition-all shadow-xs"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
          <span>Escríbeme por WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
