import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = COMPANY_INFO.getWhatsappUrl(
    'Olá! Gostaria de tirar dúvidas com a equipe técnica da TSI Assessoria & Engenharia.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      {/* Optional Dismissible Callout Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 bg-white text-slate-800 px-3.5 py-2 rounded-full shadow-lg border border-slate-200 text-xs font-semibold animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Tire dúvidas no WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento rápido no WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 group relative"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
