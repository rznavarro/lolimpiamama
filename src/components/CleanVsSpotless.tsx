import React from 'react';
import { AlertCircle, CheckCircle2, Droplets, Wind, HelpCircle, ChevronRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

export const CleanVsSpotless: React.FC = () => {
  const consultWhatsAppUrl = getWhatsAppUrl(
    'Hola Karol, no sé qué modalidad de limpieza de colchón necesito (seco o desmanchado). ¿Me podrías orientar?'
  );

  return (
    <section
      aria-labelledby="clean-vs-spotless-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="rounded-[32px] p-8 sm:p-12 lg:p-16 glass-panel border border-white relative overflow-hidden">
        
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#56627A] uppercase mb-2 block">
            Criterio profesional y honestidad
          </span>
          <h2
            id="clean-vs-spotless-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-[360] tracking-[-0.03em] text-[#0E1B2C] mb-6"
          >
            Limpio no es lo mismo que desmanchado
          </h2>
          <p className="text-base sm:text-lg text-[#56627A] leading-relaxed">
            Todo mueble con relleno o espuma acumula polvo, tierra, ácaros y sus desechos biológicos aunque la tela se vea impecable por fuera. La <strong className="text-[#0E1B2C] font-semibold">limpieza profunda saca lo que no se ve</strong>. Las manchas se trabajan una a una con técnica meticulosa, pero si son antiguas (aceite, pipí de mascota, slime o plumón permanente), pueden atenuarse sin borrarse por completo porque ya tiñeron la fibra textil.
          </p>
        </div>

        {/* 2 Comparison Glass Columns for Mattresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Column 1: En Seco (Recommended / 95% choice) */}
          <div className="rounded-[24px] p-6 sm:p-8 bg-white/80 border border-teal-200/80 shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-teal-800 font-semibold text-xs tracking-wider uppercase">
                  <Wind className="w-4 h-4 text-teal-600" />
                  <span>Modalidad principal</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-800">
                  95% de los clientes
                </span>
              </div>

              <h3 className="text-2xl font-medium text-[#0E1B2C] mb-2">
                Limpieza en seco
              </h3>
              <p className="text-sm text-[#56627A] mb-6">
                Elimina alérgenos, ácaros, escamas de piel y grasa corporal profunda sin mojar el interior del colchón.
              </p>

              <ul className="space-y-3 text-sm text-[#0E1B2C]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Cero agua:</strong> no moja la espuma ni la estructura.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Rápido:</strong> demora de 20 a 40 minutos en tu domicilio.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Uso inmediato:</strong> puedes hacer la cama y dormir la misma noche.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Integral:</strong> cubre ambas caras y todos los costados (hasta 2 plazas).</span>
                </li>
                <li className="flex items-start gap-2.5 text-[#56627A]">
                  <span className="w-4 h-4 rounded-full border border-slate-300 text-[10px] flex items-center justify-center shrink-0 mt-0.5 text-slate-400">i</span>
                  <span>No incluye remoción de manchas profundas ni olores.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <span className="text-xs text-teal-800 font-medium block">
                La opción recomendada para mantener la higiene regular y proteger la salud respiratoria de tu familia.
              </span>
            </div>
          </div>

          {/* Column 2: Desmanchado y Olores (Complementary) */}
          <div className="rounded-[24px] p-6 sm:p-8 bg-white/60 border border-slate-200/80 shadow-xs relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 text-[#56627A] font-semibold text-xs tracking-wider uppercase">
                  <Droplets className="w-4 h-4 text-sky-600" />
                  <span>Servicio complementario</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-[#56627A]">
                  Casos específicos
                </span>
              </div>

              <h3 className="text-2xl font-medium text-[#0E1B2C] mb-2">
                Desmanchado y olores
              </h3>
              <p className="text-sm text-[#56627A] mb-6">
                Agua dosificada más shampoo biodegradable europeo para tratar manchas visibles y desodorizar.
              </p>

              <ul className="space-y-3 text-sm text-[#0E1B2C]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Efectividad:</strong> elimina manchas en el 90% de los casos y olores en el 100%.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Cobertura:</strong> incluye cara superior y costados (cara inferior tiene costo adicional).</span>
                </li>
                <li className="flex items-start gap-2.5 text-[#56627A]">
                  <span className="w-4 h-4 rounded-full border border-slate-300 text-[10px] flex items-center justify-center shrink-0 mt-0.5 text-slate-400">⏱</span>
                  <span><strong>Tiempo de secado:</strong> queda húmedo, requiere entre 3 y 24 horas para secar.</span>
                </li>
                <li className="flex items-start gap-2.5 text-amber-900 bg-amber-50/80 p-3 rounded-xl border border-amber-200/80">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">
                    <strong>Advertencia real:</strong> este proceso no está recomendado por los fabricantes de colchones en Chile, ya que la humedad puede incidir en la durabilidad del relleno y su garantía comercial.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <span className="text-xs text-[#56627A] block">
                Evaluamos cada caso contigo antes de realizarlo para que tomes la mejor decisión para tu cama.
              </span>
            </div>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white/70 border border-white">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-teal-700 shrink-0" />
            <span className="text-sm font-medium text-[#0E1B2C]">
              ¿No tienes certeza de cuál requiere tu colchón o sillón?
            </span>
          </div>

          <a
            href={consultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="clean-vs-spotless-whatsapp"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1B31] text-white rounded-full text-xs sm:text-sm font-medium shadow-sm hover:bg-[#1a2b47] transition-all"
          >
            <span>Escríbeme por WhatsApp y te asesoro</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
