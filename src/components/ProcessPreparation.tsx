import React from 'react';
import { Droplet, Sparkles, Check, Clock, ShieldCheck, Home } from 'lucide-react';

export const ProcessPreparation: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Limpieza en seco y aspirado profundo',
      desc: 'Con maquinaria de alto poder de succión, recorremos cada pliegue, costura y superficie por ambas caras para extraer ácaros, polvo profundo, piel descamada y residuos orgánicos microscópicos.',
    },
    {
      num: '02',
      title: 'Shampoo biodegradable en cantidad mínima',
      desc: 'Aplicamos el limpiador de formulación europea solo en la cantidad estrictamente necesaria para humectar la fibra, remover manchas superficiales y neutralizar olores, sin anegar el acolchado interior.',
    },
  ];

  const durations = [
    { item: 'Colchones', time: '30 min a 1 h', percent: 35 },
    { item: 'Muebles y tapices', time: '30 min a 3 h', percent: 85 },
    { item: 'Alfombras', time: '1 h a 2 h', percent: 60 },
  ];

  const preparations = [
    {
      target: 'Colchones',
      action: 'Cama despejada, sin sábanas, almohadas ni cubrecolchón al momento de llegar.',
    },
    {
      target: 'Muebles',
      action: 'Espacio para moverlos si es necesario, o los higienizamos con total cuidado exactamente donde están.',
    },
    {
      target: 'Alfombras',
      action: 'Sin muebles encima y con espacio libre de al menos 1/3 de su tamaño (decorativas), o la habitación despejada (si son muro a muro).',
    },
  ];

  return (
    <section
      id="proceso"
      aria-labelledby="proceso-heading"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="max-w-2xl mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#56627A] uppercase mb-2 block">
          Metodología y cuidado
        </span>
        <h2
          id="proceso-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-[360] tracking-[-0.03em] text-[#0E1B2C] mb-4"
        >
          Así trabajo en tu casa
        </h2>
        <p className="text-base sm:text-lg text-[#56627A] font-normal leading-relaxed">
          Diseñado para que disfrutes de un ambiente impecable sin desorden, charcos de agua ni olores químicos molestos.
        </p>
      </div>

      {/* 3 Trust Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="p-5 rounded-2xl glass-panel border border-white flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
            <Droplet className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#0E1B2C]">Máx. 7 L de agua</h4>
            <p className="text-xs text-[#56627A]">por máquina en condiciones normales</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-panel border border-white flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#0E1B2C]">Certificación europea</h4>
            <p className="text-xs text-[#56627A]">biodegradables de origen español</p>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-panel border border-white flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#0E1B2C]">Tu espacio queda igual</h4>
            <p className="text-xs text-[#56627A]">secado con microfibra si cae alguna gota</p>
          </div>
        </div>
      </div>

      {/* 2-Step Line */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {steps.map((step) => (
          <div
            key={step.num}
            className="p-8 rounded-[28px] glass-panel border border-white flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl sm:text-3xl font-[200] text-teal-700 font-mono">
                  {step.num}
                </span>
                <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                  <Sparkles className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#0E1B2C] mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-[#56627A] leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid: Duration + Preparation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Cuánto demora (5 cols) */}
        <div className="lg:col-span-5 p-7 rounded-[28px] glass-panel border border-white">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-teal-700" />
            <h3 className="text-lg font-medium text-[#0E1B2C]">¿Cuánto demora?</h3>
          </div>

          <div className="space-y-5">
            {durations.map((d) => (
              <div key={d.item} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-[#0E1B2C]">{d.item}</span>
                  <span className="text-xs text-[#56627A] font-medium">{d.time}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200/80 overflow-hidden">
                  <div
                    className="h-full bg-teal-600 rounded-full"
                    style={{ width: `${d.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#56627A] mt-6 pt-4 border-t border-slate-200/60 leading-relaxed">
            Los tiempos varían según el nivel de suciedad previa y la cantidad de cuerpos o plazas.
          </p>
        </div>

        {/* Qué preparar (7 cols) */}
        <div className="lg:col-span-7 p-7 rounded-[28px] glass-panel border border-white">
          <h3 className="text-lg font-medium text-[#0E1B2C] mb-6">
            ¿Qué preparar antes de que llegue?
          </h3>

          <ul className="space-y-4">
            {preparations.map((prep) => (
              <li key={prep.target} className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <div className="text-sm">
                  <strong className="font-semibold text-[#0E1B2C] block sm:inline sm:mr-1">
                    {prep.target}:
                  </strong>
                  <span className="text-[#56627A]">{prep.action}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-5 border-t border-slate-200/60 bg-white/50 -mx-2 -mb-2 p-4 rounded-xl">
            <p className="text-xs text-[#0E1B2C] font-medium leading-relaxed">
              💡 <strong>Nota práctica:</strong> Puedo trabajar dentro de tu casa o en el patio/terraza, siempre que contemos con un enchufe cercano. Apto para pisos flotantes, porcelanato y maderas delicadas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
