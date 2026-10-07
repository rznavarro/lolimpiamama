import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { BRAND_ASSETS, getWhatsAppUrl } from '../data/content';

interface HeaderProps {
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Trabajos', href: '#trabajos' },
    { label: 'Karol', href: '#karol' },
    { label: 'Cotizar', href: '#cotizar' },
    { label: 'Preguntas', href: '#preguntas' },
  ];

  const generalWhatsAppUrl = getWhatsAppUrl(
    'Hola Karol, quiero cotizar una limpieza profunda. Te cuento qué necesito:'
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-white/90 backdrop-blur-md border-b border-[#D6DFE8]/60 shadow-[0_4px_20px_-4px_rgba(14,27,44,0.06)]'
          : 'py-4 md:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark / Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1B2C] rounded-lg"
            aria-label="LoLimpiaMama - Inicio"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 shadow-sm border border-white flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={BRAND_ASSETS.logo}
                alt="Logo LoLimpiaMama"
                className="w-full h-full object-contain p-1"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to text monogram if logo blocked
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="text-xs font-bold text-teal-600">LLM</span>';
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold tracking-tight text-[#0E1B2C]">
                LoLimpiaMama
              </span>
              <span className="text-[10px] text-[#56627A] font-normal leading-tight hidden xs:block">
                Limpieza profunda a domicilio
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links in Glass Pill (Desktop) */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center px-4 py-1.5 rounded-full glass-pill border border-white/80"
          >
            <ul className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-3 py-1.5 text-xs xl:text-sm font-medium text-[#56627A] hover:text-[#0E1B2C] transition-colors rounded-full hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1B2C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Zone 3: Controls (Mobile Hamburger Button) */}
          <div className="flex items-center">
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full glass-pill border border-white/80 text-[#0E1B2C] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E1B2C]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[60px] z-40 bg-[#EEF3F6]/95 backdrop-blur-xl lg:hidden flex flex-col p-6 animate-fadeIn"
        >
          <div className="flex flex-col gap-3 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#0E1B2C] py-2.5 px-4 rounded-xl hover:bg-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#D6DFE8] flex flex-col gap-3">
            <a
              href={generalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#0F1B31] text-white rounded-full text-base font-medium shadow-md"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400" />
              <span>Cotizar por WhatsApp</span>
            </a>
            <a
              href="tel:+56934112742"
              className="w-full text-center py-2.5 text-sm font-medium text-[#56627A] hover:text-[#0E1B2C]"
            >
              O llamar al +56 9 3411 2742
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
