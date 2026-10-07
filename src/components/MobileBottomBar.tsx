import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, PHONE_TEL } from '../data/content';

interface MobileBottomBarProps {
  visible: boolean;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ visible }) => {
  if (!visible) return null;

  const generalWhatsAppUrl = getWhatsAppUrl(
    'Hola Karol, quiero cotizar una limpieza profunda. Te cuento qué necesito:'
  );

  return (
    <aside
      aria-label="Acciones rápidas de contacto"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/90 backdrop-blur-lg border-t border-[#D6DFE8] shadow-[0_-4px_24px_rgba(14,27,44,0.1)] transition-transform duration-300 animate-slideUp"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* WhatsApp CTA ~75% */}
        <a
          href={generalWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="mobile-bottom-whatsapp"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#0F1B31] text-white rounded-full text-sm font-semibold shadow-md active:scale-98 transition-all"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
          <span>Cotizar por WhatsApp</span>
        </a>

        {/* Call Icon CTA ~25% */}
        <a
          href={`tel:${PHONE_TEL}`}
          data-cta="mobile-bottom-call"
          aria-label="Llamar por teléfono a LoLimpiaMama"
          className="w-12 h-12 flex items-center justify-center rounded-full glass-pill border border-[#D6DFE8] text-[#0E1B2C] hover:bg-white active:scale-95 transition-all shrink-0"
        >
          <Phone className="w-5 h-5 text-teal-700" />
        </a>
      </div>
    </aside>
  );
};
