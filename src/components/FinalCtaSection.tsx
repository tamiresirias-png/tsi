import React from 'react';
import { MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FinalCtaSectionProps {
  onOpenQuoteModal: (serviceType?: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = COMPANY_INFO.getWhatsappUrl(
    'Olá! Gostaria de conversar sobre uma solução de engenharia para meu imóvel ou projeto.'
  );

  return (
    <section className="py-20 lg:py-24 bg-[#0B192C] text-white relative overflow-hidden">
      
      {/* Subtle architectural background line work */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E3A5F_1px,transparent_1px),linear-gradient(to_bottom,#1E3A5F_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold backdrop-blur-xs border border-white/10">
          <span>Atendimento Técnico Especializado</span>
        </div>

        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight max-w-3xl mx-auto">
          Seu projeto pode começar hoje.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
          Conte para nós o que você precisa e descubra a melhor solução para seu imóvel, obra ou empreendimento.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Falar pelo WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold tracking-wide shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Falar pelo WhatsApp</span>
          </a>

          {/* Solicitar orçamento */}
          <button
            onClick={() => onOpenQuoteModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-[#0B192C] text-sm font-bold tracking-wide shadow-md transition-all group"
          >
            <FileText className="w-4 h-4 text-[#0B192C]" />
            <span>Solicitar orçamento</span>
            <ArrowRight className="w-4 h-4 text-[#0B192C] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <p className="text-xs text-slate-400 pt-4">
          Atendimento transparente com retorno ágil e sem compromisso.
        </p>

      </div>
    </section>
  );
};
