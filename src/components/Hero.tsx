import React, { useEffect, useState } from 'react';
import { Leaf, Sparkles, ChevronRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { BRAND_ASSETS, getWhatsAppUrl } from '../data/content';
import heroBubbleImg from '../assets/images/soap_bubble_hero_1791350441461.jpg';

export const Hero: React.FC = () => {
  const [meterWidth, setMeterWidth] = useState(0);

  useEffect(() => {
    // Choreographed entrance for the 95% meter
    const timer = setTimeout(() => {
      setMeterWidth(95);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const generalWhatsAppUrl = getWhatsAppUrl(
    'Hola Karol, quiero cotizar una limpieza profunda. Te cuento qué necesito:'
  );

  return (
    <section
      aria-label="Presentación principal"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#EEF3F6]"
    >
      {/* Background Stage: Studio soap bubble & subtle iridescent atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Generated Bubble Visual Asset */}
        <img
          src={heroBubbleImg}
          alt=""
          role="presentation"
          fetchPriority="high"
          className="absolute -right-10 sm:right-0 top-1/2 -translate-y-1/2 w-[85%] sm:w-[65%] lg:w-[52%] max-w-[900px] h-auto object-contain opacity-75 sm:opacity-90 mix-blend-multiply animate-bubble-subtle"
        />

        {/* Soft radial backlight & glass veil */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EEF3F6] via-[#EEF3F6]/85 to-transparent sm:via-[#EEF3F6]/50" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky-100/50 blur-3xl" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column (7 cols): Proposition & Immediate Conversion */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Eyebrow: Zero-pill discipline with clean unboxed typographic separators */}
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm font-medium text-[#56627A] mb-3 sm:mb-4 tracking-wide">
            <span>Colchones</span>
            <span aria-hidden="true" className="text-[#8E9BAE]">·</span>
            <span>Tapices</span>
            <span aria-hidden="true" className="text-[#8E9BAE]">·</span>
            <span>Alfombras</span>
            <span aria-hidden="true" className="text-[#8E9BAE]">·</span>
            <span>Sillas de niños</span>
          </div>

          {/* H1: Light weight (~360), negative tracking, tight line height */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-[360] text-[#0E1B2C] leading-[1.08] tracking-[-0.035em] mb-4 sm:mb-6 max-w-2xl">
            Limpieza profunda <br className="hidden sm:inline" />
            a domicilio en Santiago
          </h1>

          {/* Subheading row: Pure reassurance, no aggressive chemicals */}
          <div className="flex items-center gap-2.5 sm:gap-3 py-2 px-3.5 sm:px-4 mb-6 sm:mb-8 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-sm max-w-xl">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
            </span>
            <p className="text-xs sm:text-sm text-[#0E1B2C] font-normal leading-snug">
              Sin químicos agresivos. <span className="text-[#56627A]">Como si fuera mi propio hogar.</span>
            </p>
          </div>

          {/* CTA Group: Main Dark Button + Glass Secondary */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero-whatsapp-main"
              className="group inline-flex items-center justify-between sm:justify-start gap-3 pl-6 pr-2.5 py-3 sm:py-3.5 bg-[#0F1B31] text-white rounded-full text-sm sm:text-base font-medium shadow-lg hover:bg-[#1a2b47] hover:-translate-y-0.5 active:translate-y-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <span>Cotizar por WhatsApp</span>
              <span className="w-9 h-9 rounded-full bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/40 transition-colors">
                <MessageCircle className="w-4 h-4 text-emerald-300 fill-emerald-300" aria-hidden="true" />
              </span>
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 rounded-full glass-pill text-sm sm:text-base font-medium text-[#0E1B2C] hover:bg-white transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1B2C]"
            >
              Ver servicios
            </a>
          </div>

          {/* Reassurance Micro-trust line */}
          <div className="mt-4 flex items-center gap-2 text-xs text-[#56627A]">
            <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
            <span>Productos biodegradables con certificación europea</span>
          </div>

        </div>

        {/* Right Column (5 cols): Glass Hero Card (95% choosing dry mattress cleaning) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm sm:max-w-md rounded-[28px] p-6 sm:p-7 glass-panel relative overflow-hidden transition-all duration-300 hover:shadow-xl">
            
            {/* Top row: Title + Accent dot + Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-medium text-[#0E1B2C]">
                  Colchón en seco
                </h2>
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" aria-hidden="true" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-600">
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>

            {/* 3-line concise reality summary */}
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#56627A] font-normal mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span>Sin mojar · cama lista al instante</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span>20–40 minutos por unidad</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span>Realizado en tu domicilio en Santiago</span>
              </li>
            </ul>

            {/* Scale & Fill Meter */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px] font-medium text-[#8E9BAE]">
                <span>0%</span>
                <span>50%</span>
                <span className="font-semibold text-teal-700">95%</span>
              </div>
              
              <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${meterWidth}%` }}
                  role="progressbar"
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>

              <p className="text-[11px] sm:text-xs text-[#56627A] pt-1">
                de nuestros clientes elige esta modalidad para sus camas
              </p>
            </div>

            {/* Direct Quick WhatsApp for mattress */}
            <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs text-[#0E1B2C] font-medium">¿Deseas cotizarlo?</span>
              <a
                href={getWhatsAppUrl('Hola Karol, quiero cotizar limpieza de colchón en seco.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-teal-700 hover:text-teal-900 font-semibold inline-flex items-center gap-1 group"
              >
                <span>Cotizar colchón</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Hero Row: Stat Counters & Meet Karol Glass Pill */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-[#D6DFE8]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Real Numbers: Thin font-extralight (~200) separated by thin diagonal slash */}
        <div className="flex items-center gap-6 sm:gap-10">
          
          <div className="flex items-baseline gap-2.5">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-[200] text-[#0E1B2C] tabular-nums tracking-tight">
              +200
            </span>
            <div className="text-[11px] sm:text-xs text-[#56627A] leading-tight">
              <span>Clientes</span><br />
              <span className="font-medium text-[#0E1B2C]">felices</span>
            </div>
          </div>

          <span className="text-2xl sm:text-3xl font-[200] text-[#8E9BAE]/60 select-none" aria-hidden="true">
            /
          </span>

          <div className="flex items-baseline gap-2.5">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-[200] text-[#0E1B2C] tabular-nums tracking-tight">
              +150
            </span>
            <div className="text-[11px] sm:text-xs text-[#56627A] leading-tight">
              <span>Colchones</span><br />
              <span className="font-medium text-[#0E1B2C]">limpios</span>
            </div>
          </div>

          {/* Internal team note: [CONFIRMAR CIFRA DE CLIENTES: +200 o +300] */}
          <span
            title="Dato portada web: +200. Meta description web previa mencionaba +300."
            className="hidden xl:inline-block text-[10px] text-[#8E9BAE] bg-white/70 px-2 py-0.5 rounded border border-slate-200"
          >
            [CONFIRMAR CIFRA DE CLIENTES: +200 o +300]
          </span>

        </div>

        {/* Meet Karol Pill -> Anchors to #karol */}
        <a
          href="#karol"
          className="group inline-flex items-center gap-3 pl-2 pr-3 py-1.5 rounded-full glass-pill hover:bg-white transition-all shadow-sm border border-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1B2C]"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 border border-white shadow-xs shrink-0">
            <img
              src={BRAND_ASSETS.karolPhoto}
              alt="Karol Zenteno"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold text-[#0E1B2C] leading-none">
              Conoce a Karol
            </span>
            <span className="text-[10px] text-[#56627A] leading-tight mt-0.5">
              Fundadora y atención directa
            </span>
          </div>
          <span className="w-6 h-6 rounded-full bg-[#0F1B31] text-white flex items-center justify-center shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform">
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </a>

      </div>

    </section>
  );
};
