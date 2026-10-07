import React from 'react';
import { MessageCircle, Phone, Instagram } from 'lucide-react';
import { BRAND_ASSETS, PHONE_NUMBER, PHONE_TEL, SOCIAL_LINKS, getWhatsAppUrl } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl(
    'Hola Karol, quiero cotizar una limpieza profunda. Te cuento qué necesito:'
  );

  return (
    <footer className="border-t border-[#D6DFE8] py-12 px-4 sm:px-6 lg:px-8 bg-white/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center overflow-hidden">
            <img
              src={BRAND_ASSETS.logo}
              alt="LoLimpiaMama"
              className="w-full h-full object-contain p-1"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div>
            <span className="text-sm font-semibold text-[#0E1B2C] block">
              LoLimpiaMama
            </span>
            <span className="text-xs text-[#56627A]">
              Limpieza profunda a domicilio en Santiago
            </span>
          </div>
        </div>

        {/* Social & Contact Links */}
        <div className="flex items-center flex-wrap justify-center gap-5 text-xs text-[#56627A]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#0E1B2C] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-1.5 hover:text-[#0E1B2C] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-teal-600" />
            <span>{PHONE_NUMBER}</span>
          </a>

          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#0E1B2C] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>@lolimpiamama</span>
          </a>

          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0E1B2C] transition-colors"
          >
            TikTok
          </a>

          <a
            href={SOCIAL_LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0E1B2C] transition-colors"
          >
            Ficha Google
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#8E9BAE]">
          © LoLimpiaMama {currentYear}
        </div>

      </div>
    </footer>
  );
};
