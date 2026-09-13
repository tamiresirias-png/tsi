import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  UserCheck, 
  Compass, 
  FileText, 
  CheckCircle2,
  Ruler,
  Layers,
  FileCheck2
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (serviceType?: string) => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenQuoteModal, 
  onScrollToServices
}) => {
  return (
    <section id="inicio" className="relative bg-[#F8FAFC] py-12 lg:py-20 border-b border-slate-200/80 overflow-hidden">
      
      {/* 1. FUNDO DE PROJETO BEM SUTIL (Architectural Blueprint & Floor Plan CAD Drafting Grid) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* CAD Blueprint Grid (16px and 64px major divisions) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B192C08_1px,transparent_1px),linear-gradient(to_bottom,#0B192C08_1px,transparent_1px)] bg-[size:1.25rem_1.25rem]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B192C12_1px,transparent_1px),linear-gradient(to_bottom,#0B192C12_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        
        {/* Architectural Vector Floor Plan & Construction Lines (Subtle Opacity ~4%) */}
        <svg 
          className="absolute right-0 top-0 w-full h-full text-slate-900 opacity-[0.045] pointer-events-none" 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 800"
          fill="none"
          stroke="currentColor"
        >
          {/* Main Blueprint Room Layouts */}
          <rect x="700" y="100" width="380" height="240" strokeWidth="2.5" />
          <rect x="1080" y="100" width="260" height="180" strokeWidth="2.5" />
          <rect x="700" y="340" width="220" height="300" strokeWidth="2.5" />
          <rect x="920" y="340" width="420" height="300" strokeWidth="2.5" />
          
          {/* Internal Partitions and Doors */}
          <line x1="820" y1="100" x2="820" y2="240" strokeWidth="1.5" />
          <line x1="700" y1="220" x2="820" y2="220" strokeWidth="1.5" />
          {/* Door swings (arc) */}
          <path d="M 820 180 A 40 40 0 0 1 860 220" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 920 400 A 45 45 0 0 0 965 445" strokeWidth="1" strokeDasharray="3 3" />

          {/* Dimension Guidelines & Ticks */}
          <line x1="680" y1="100" x2="680" y2="340" strokeWidth="1" />
          <line x1="675" y1="100" x2="685" y2="100" strokeWidth="1.5" />
          <line x1="675" y1="340" x2="685" y2="340" strokeWidth="1.5" />
          <text x="660" y="225" fontSize="12" fill="currentColor" transform="rotate(-90 660 225)">Cota: 6.80m</text>

          <line x1="700" y1="80" x2="1080" y2="80" strokeWidth="1" />
          <line x1="700" y1="75" x2="700" y2="85" strokeWidth="1.5" />
          <line x1="1080" y1="75" x2="1080" y2="85" strokeWidth="1.5" />
          <text x="860" y="72" fontSize="12" fill="currentColor" textAnchor="middle">10.50m</text>

          {/* Structural Column Markers */}
          <rect x="695" y="95" width="10" height="10" fill="currentColor" />
          <rect x="1075" y="95" width="10" height="10" fill="currentColor" />
          <rect x="1335" y="95" width="10" height="10" fill="currentColor" />
          <rect x="695" y="335" width="10" height="10" fill="currentColor" />
          <rect x="915" y="335" width="10" height="10" fill="currentColor" />
          <rect x="1335" y="335" width="10" height="10" fill="currentColor" />

          {/* Compass Rose / North Indicator */}
          <g transform="translate(1300, 80)">
            <circle cx="0" cy="0" r="30" strokeWidth="1" />
            <polygon points="0,-26 6,0 0,6 -6,0" fill="currentColor" />
            <text x="0" y="-32" fontSize="11" fontWeight="bold" textAnchor="middle" fill="currentColor">N</text>
          </g>

          {/* Technical Drawing Legend Box / Carimbo */}
          <rect x="1100" y="520" width="220" height="100" strokeWidth="1" />
          <line x1="1100" y1="550" x2="1320" y2="550" strokeWidth="1" />
          <line x1="1100" y1="585" x2="1320" y2="585" strokeWidth="1" />
          <text x="1110" y="540" fontSize="10" fontWeight="bold" fill="currentColor">TSI ENGENHARIA &amp; ASSESSORIA</text>
          <text x="1110" y="570" fontSize="9" fill="currentColor">PROJETO EXECUTIVO &bull; ESCALA 1:50</text>
          <text x="1110" y="605" fontSize="8" fill="currentColor">RESP. T&Eacute;CNICO: CREA-SP &bull; ART</text>
        </svg>

        {/* Soft fade radial mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/40 via-transparent to-[#F8FAFC]" />
      </div>

      {/* 2. PAINEL DE APRESENTAÇÃO INSTITUCIONAL */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Panel Box */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-sm relative overflow-hidden">
          
          {/* Top Panel Technical Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200/70 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-[#0B192C]">Atendimento Especializado em Engenharia Civil</span>
              <span className="text-slate-400 hidden sm:inline">&bull;</span>
              <span className="text-slate-500 hidden sm:inline">São Paulo &amp; Região Metropolitana</span>
            </div>
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200 text-slate-700 font-medium">
              <Ruler className="w-3.5 h-3.5 text-sky-600" />
              <span>Conformidade ABNT &bull; CREA-SP</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Core Positioning & Call to Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Concept Tag */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-bold text-sky-900">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Engenharia que resolve, regulariza e acompanha</span>
              </div>

              {/* Main Headline (Sophisticated Serif Display) */}
              <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B192C] leading-[1.15]">
                Seu imóvel em conformidade, com segurança e tranquilidade.
              </h1>

              {/* Subtitle / Description */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Regularização de imóveis, laudos periciais, projetos, aprovação na Prefeitura, AVCB e acompanhamento técnico do diagnóstico à solução definitiva.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all group"
                >
                  <span>Solicitar orçamento</span>
                  <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onScrollToServices}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 border border-slate-300 text-slate-800 text-sm font-semibold transition-colors"
                >
                  <span>Conhecer nossos serviços</span>
                </button>
              </div>

              {/* 3 Differentials below buttons */}
              <div className="pt-6 border-t border-slate-200/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
                  
                  <div className="flex items-start space-x-3 bg-slate-50/90 p-3 rounded-xl border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-sky-100/80 flex items-center justify-center shrink-0 text-sky-800 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-xs font-bold text-[#0B192C] leading-snug">Responsabilidade Técnica</h2>
                      <p className="text-[11px] text-slate-500">Com emissão de ART/CREA</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-slate-50/90 p-3 rounded-xl border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-sky-100/80 flex items-center justify-center shrink-0 text-sky-800 mt-0.5">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-xs font-bold text-[#0B192C] leading-snug">Atendimento Direto</h2>
                      <p className="text-[11px] text-slate-500">Sem burocracia excessiva</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-slate-50/90 p-3 rounded-xl border border-slate-200/60">
                    <div className="w-8 h-8 rounded-lg bg-sky-100/80 flex items-center justify-center shrink-0 text-sky-800 mt-0.5">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-xs font-bold text-[#0B192C] leading-snug">Acompanhamento</h2>
                      <p className="text-[11px] text-slate-500">Até a aprovação final</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Column: Engineering Project & Blueprint Visual (Replaced house photo with architectural drafting project!) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Technical Project Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B192C]">
                  
                  {/* High-quality architectural drawing / engineering blueprint photo */}
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                    alt="Projetos de engenharia civil, plantas arquitetônicas e instrumentos técnicos"
                    className="w-full h-[380px] sm:h-[440px] object-cover opacity-90 hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />

                  {/* Gradient blueprint overlay with technical tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/30 to-transparent" />

                  {/* Floating Architectural Badge at top */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-sm border border-slate-200/90 flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-sky-600" />
                    <span className="text-xs font-bold text-[#0B192C]">
                      Projetos Técnicos &amp; Regularizações
                    </span>
                  </div>

                  {/* Technical Coordinates Stamp */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-white/80 font-mono">
                    NBR 16280 &bull; ART
                  </div>

                  {/* Bottom Technical Project Stamp */}
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-sky-300">
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-wider">Do Diagnóstico ao Projeto Aprovado</span>
                    </div>
                    <p className="text-sm font-serif-display text-slate-100">
                      Plantas, memoriais, laudos e assessoria perante órgãos públicos e cartórios.
                    </p>
                  </div>
                </div>

                {/* Floating Technical Assurance Card (bottom-left) */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-xl p-3.5 shadow-xl border border-slate-200 hidden sm:flex items-center space-x-3 max-w-[250px]">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-xs font-bold text-[#0B192C]">
                      Validade Jurídica
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Documentação com ART perante o CREA-SP
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
