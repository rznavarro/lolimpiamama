import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ComparisonItem {
  id: string;
  label: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeNote: string;
  afterNote: string;
}

const COMPARISONS: ComparisonItem[] = [
  {
    id: 'colchon',
    label: 'Colchón',
    title: 'Higienización profunda de colchón',
    description: 'Extracción de ácaros, polvo profundo acumulado, sudor y grasa corporal sin mojar la estructura interior.',
    beforeImage: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.09.jpeg',
    afterImage: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/10/5.jpg',
    beforeNote: 'Antes: Ácaros y polvillo acumulado',
    afterNote: 'Después: Fibra pura y desinfectada',
  },
  {
    id: 'sillon',
    label: 'Sillón tapizado',
    title: 'Limpieza en seco y desmanchado de tapiz',
    description: 'Recorrido pliegue por pliegue eliminando manchas de uso diario y devolviendo el tono vivo a la tela.',
    beforeImage: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.15-1.jpeg',
    afterImage: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.15.jpeg',
    beforeNote: 'Antes: Suciedad en pliegues y roce',
    afterNote: 'Después: Tapiz renovado y sin olores',
  },
  {
    id: 'alfombra',
    label: 'Alfombra',
    title: 'Aspirado bilateral y shampoo biodegradable',
    description: 'Aspiración potente por ambas caras y humectación controlada superior para un secado rápido.',
    beforeImage: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.20.jpeg',
    afterImage: 'https://www.lolimpiamama.cl/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-10.43.20-1.jpeg',
    beforeNote: 'Antes: Tierra incrustada en la base',
    afterNote: 'Después: Pelo suelto y fibra brillante',
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(COMPARISONS[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = COMPARISONS.find((c) => c.id === activeTab) || COMPARISONS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent | TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handlePointerUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging, handleMouseMove, handlePointerUp, handleTouchMove]);

  return (
    <div className="w-full mb-16">
      {/* Category selector tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-800 block mb-1">
            Desliza para comparar
          </span>
          <h3 className="text-xl sm:text-2xl font-medium text-[#0E1B2C]">
            {currentItem.title}
          </h3>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/80 border border-[#D6DFE8] shadow-xs">
          {COMPARISONS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setSliderPosition(50);
              }}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0F1B31] text-white shadow-xs'
                  : 'text-[#56627A] hover:text-[#0E1B2C]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/10] max-h-[520px] rounded-[28px] overflow-hidden select-none cursor-ew-resize border border-white shadow-xl bg-slate-200"
      >
        {/* Background Layer: "DESPUÉS" (Full Width) */}
        <img
          src={currentItem.afterImage}
          alt={currentItem.afterNote}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />

        {/* Foreground Layer: "ANTES" (Clipped dynamically by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={currentItem.beforeImage}
            alt={currentItem.beforeNote}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
              height: '100%',
            }}
            referrerPolicy="no-referrer"
          />
          {/* Subtle vintage filter to emphasize pre-cleaning accumulation if same image is used */}
          <div className="absolute inset-0 bg-[#3a2f1d]/20 mix-blend-multiply pointer-events-none" />
        </div>

        {/* Dividing Vertical Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none z-20"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Circular Interactive Knob / Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-2xl border-2 border-slate-100 flex items-center justify-center text-[#0E1B2C] hover:scale-105 active:scale-95 transition-transform">
            <ChevronsLeftRight className="w-5 h-5 text-teal-700" />
          </div>
        </div>

        {/* "ANTES" Badge (Left) */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Antes</span>
          </span>
        </div>

        {/* "DESPUÉS" Badge (Right) */}
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-600/85 backdrop-blur-md text-white border border-emerald-400/40 shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Después</span>
          </span>
        </div>

        {/* Bottom helper prompt */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <span className="px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-black/50 backdrop-blur-md text-white/90 shadow-sm border border-white/10 flex items-center gap-2">
            <ChevronsLeftRight className="w-3.5 h-3.5 text-teal-300" />
            <span>Arrastra la línea hacia los lados</span>
          </span>
        </div>

        {/* Accessible hidden range input for screen readers & keyboard */}
        <input
          type="range"
          min="0"
          max="100"
          value={Math.round(sliderPosition)}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="sr-only"
          aria-label="Deslizador de comparación de antes y después"
        />
      </div>

      {/* Description below slider */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#56627A]">
        <p className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
          <span>{currentItem.description}</span>
        </p>
        <span className="text-[#8E9BAE] text-[11px] shrink-0">
          Resultados 100% reales en domicilios de Santiago
        </span>
      </div>
    </div>
  );
};
