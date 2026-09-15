import React from 'react';
import { PageView } from '../types';
import { COMPANY_INFO } from '../data/company';
import { CadSketchBackground } from './CadSketchBackground';
import { 
  ArrowRight, 
  MessageCircle, 
  FileText, 
  Bot,
  Sparkles,
  HelpCircle,
  Building2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuoteModal: (serviceId?: string, note?: string) => void;
  onOpenAiAssistant: () => void;
}

interface QuickService {
  index: string;
  id: string;
  title: string;
  summary: string;
  norma: string;
  badge: string;
}

const SUMMARIZED_SERVICES: QuickService[] = [
  {
    index: '01',
    id: 'regularizacao-imoveis',
    title: 'Regularização de Imóveis & Habite-se',
    summary: 'Aprovação de projetos, alvarás, conformidade urbanística e averbação em cartório.',
    norma: 'Código de Obras Municipal',
    badge: 'Habite-se'
  },
  {
    index: '02',
    id: 'laudos-tecnicos',
    title: 'Laudos para Vigilância Sanitária (LTA)',
    summary: 'Laudo Técnico de Avaliação (LTA), adequação de fluxos, memoriais e aprovação na VISA/COVISA para clínicas, drogarias e comércios. (Laudos estruturais em segundo plano).',
    norma: 'Portaria CVS / Legislação Sanitária',
    badge: 'LTA Sanitário'
  },
  {
    index: '03',
    id: 'art-reforma',
    title: 'ART de Reforma & Obras em Condomínio',
    summary: 'Plano de reforma e Anotação de Responsabilidade Técnica para liberação com síndicos e administradoras.',
    norma: 'NBR 16280',
    badge: 'Emissão Ágil'
  },
  {
    index: '04',
    id: 'avcb-clcb',
    title: 'AVCB & CLCB (Corpo de Bombeiros)',
    summary: 'Projetos de prevenção e combate a incêndio, vistorias, renovação e adequação técnica de edificações.',
    norma: 'Decreto Estadual 63.911',
    badge: 'Segurança'
  },
  {
    index: '05',
    id: 'vistoria-entrega-chaves',
    title: 'Vistoria de Entrega de Chaves & Recebimento',
    summary: 'Inspeção minuciosa de acabamentos, prumos, instalações elétricas e hidráulicas de imóveis novos.',
    norma: 'Checklist com +80 itens',
    badge: 'Inspeção'
  },
  {
    index: '06',
    id: 'desdobro-de-lote',
    title: 'Desdobro, Unificação & Usucapião',
    summary: 'Levantamento topográfico, memoriais descritivos e instrução técnica para divisão de lotes ou posse imobiliária.',
    norma: 'Lei Federal 6.766',
    badge: 'Topografia'
  },
  {
    index: '07',
    id: 'pericia-judicial-extrajudicial',
    title: 'Perícia Judicial & Extrajudicial',
    summary: 'Atuação pericial técnica e assistência técnica às partes em processos cíveis: laudos de constatação, formulação de quesitos e impugnações.',
    norma: 'CPC / ABNT NBR 13752',
    badge: 'Perícia Cível'
  },
  {
    index: '08',
    id: 'assessoria-administrativa',
    title: 'Assessoria Administrativa',
    summary: 'Apoio administrativo e financeiro para micro e pequenas empresas: organização de rotinas, fluxo de caixa e padronização operacional.',
    norma: 'Gestão & Processos',
    badge: 'Serviço Complementar'
  }
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenAiAssistant
}) => {
  const whatsappHeroUrl = COMPANY_INFO.getWhatsappUrl(
    'Olá! Gostaria de conversar com um engenheiro da TSI Assessoria & Engenharia sobre meu imóvel.'
  );

  const handleServiceClick = (serviceId: string) => {
    onNavigate('servicos');
    setTimeout(() => {
      const el = document.getElementById(serviceId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="w-full text-slate-900 selection:bg-sky-200 selection:text-[#0B192C]">
      
      {/* ========================================================================= */}
      {/* 1. HERO - TOM AZUL: GELO ARQUITETÔNICO & DESENHO TÉCNICO AUTOCAD NO FUNDO */}
      {/* ========================================================================= */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-sky-200/90 overflow-hidden bg-gradient-to-b from-[#F0F6FD] via-[#F4F8FC] to-[#E5F0FA]">
        
        {/* AutoCAD Technical Floor Plan Sketch Background */}
        <CadSketchBackground opacity={0.24} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Editorial Masthead Tag */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="font-mono text-[11px] font-semibold tracking-widest uppercase text-sky-900 bg-white/95 px-2.5 py-1 border border-sky-300 rounded-md shadow-2xs backdrop-blur-xs">
              Engenharia Diagnóstica &amp; Regularização
            </span>
            <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-[#0B192C] bg-white/95 px-2.5 py-1 border border-sky-300 rounded-md shadow-2xs backdrop-blur-xs">
              CREA-SP
            </span>
            <span className="font-mono text-[11px] text-sky-800 hidden sm:inline bg-sky-100/90 px-2 py-0.5 rounded-md border border-sky-200">
              • São Paulo Capital, Grande SP e Interior
            </span>
          </div>

          {/* Strong Editorial Headline with AutoCAD Draft Backdrop */}
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#08182B] leading-[1.12]">
              Engenharia que resolve, regulariza e acompanha.
            </h1>
            
            <p className="text-base sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl bg-white/85 backdrop-blur-[3px] p-4 rounded-xl border border-sky-100 shadow-2xs">
              Assessoria técnica para regularização imobiliária, laudos técnicos para vigilância sanitária (LTA), emissão de ART, aprovação de habite-se e vistorias com rigor normativo e comunicação direta.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CATÁLOGO SÍNTESE - TOM AZUL: AZUL ARDÓSIA SUAVE                        */}
      {/* ========================================================================= */}
      <section className="py-14 lg:py-20 bg-[#EDF4FA] border-b border-sky-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b-2 border-[#091E36]">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-sky-700 bg-sky-100/90 px-2 py-0.5 rounded-md border border-sky-200">
                01 / Catálogo Síntese
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08182B] tracking-tight mt-2">
                Serviços Técnicos de Engenharia
              </h2>
            </div>
          </div>

          {/* 2 SERVICES PER ROW GRID (SIDE BY SIDE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-8">
            {SUMMARIZED_SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-sky-200/90 hover:border-sky-500 p-6 rounded-2xl transition-all shadow-2xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  {/* Top header in card: index + badge */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-mono text-xs font-bold text-sky-600 group-hover:text-sky-900 transition-colors">
                      {s.index}
                    </span>
                    <span className="text-[10px] font-mono px-3 py-0.5 bg-sky-50 border border-sky-200 text-sky-800 uppercase font-semibold rounded-full">
                      {s.badge}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base font-bold text-[#091E36] group-hover:text-sky-700 transition-colors">
                    {s.title}
                  </h3>

                  {/* Short Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {s.summary}
                  </p>

                  {/* Technical Norma Reference */}
                  <p className="text-[11px] font-mono text-sky-700/80 mt-2.5 font-medium">
                    Ref: {s.norma}
                  </p>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleServiceClick(s.id)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#091E36] hover:text-sky-700 transition-colors"
                  >
                    <span>Ver detalhes completos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(s.title)}
                    className="text-xs font-semibold text-sky-800 hover:text-[#091E36] px-3 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors"
                  >
                    Cotar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Page Link Banner */}
          <div className="mt-8 p-6 bg-white border border-sky-300 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#091E36] font-mono flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-sky-600" />
                <span>Quer conhecer a explicação detalhada de cada serviço?</span>
              </h4>
              <p className="text-xs text-slate-600">
                Consulte nossa página dedicada para conhecer entregáveis, documentação necessária, requisitos da ABNT e prazos.
              </p>
            </div>

            <button
              onClick={() => onNavigate('servicos')}
              className="inline-flex items-center space-x-2 bg-[#091E36] hover:bg-[#133458] text-white text-xs font-bold px-4 py-2.5 rounded-xl shrink-0 transition-all shadow-xs"
            >
              <span>Acessar Página Completa de Serviços</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TÓPICO 02: METODOLOGIA - TOM AZUL: AZUL MARINHO TÉCNICO PROFUNDO       */}
      {/* ========================================================================= */}
      <section className="py-14 lg:py-18 bg-[#09192C] text-white border-y border-[#152D4A] relative overflow-hidden">
        
        {/* Architectural subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-sky-900/60">
            <div>
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-sky-400 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-700/60">
                02 / Metodologia de Trabalho
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                Como Atuamos
              </h2>
            </div>
            <button
              onClick={() => onNavigate('como-funciona')}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-sky-300 hover:text-white font-mono uppercase tracking-wider group"
            >
              <span>Ver fluxo detalhado na página Como Funciona</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8">
            
            {/* Etapa 1 */}
            <div className="bg-[#0E233C]/90 p-6 rounded-2xl border border-sky-800/70 hover:border-sky-400/80 transition-all space-y-3 shadow-sm relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-sky-300 uppercase tracking-wider bg-sky-950/90 px-2.5 py-1 rounded-full border border-sky-700/60">
                  Etapa 01
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-sky-200 transition-colors">
                Triagem &amp; Diagnóstico Prévio
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Análise documental preliminar (matrícula, IPTU ou notificações) e definição da rota técnica correta sem custos ocultos.
              </p>
            </div>

            {/* Etapa 2 */}
            <div className="bg-[#0E233C]/90 p-6 rounded-2xl border border-sky-800/70 hover:border-sky-400/80 transition-all space-y-3 shadow-sm relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-sky-300 uppercase tracking-wider bg-sky-950/90 px-2.5 py-1 rounded-full border border-sky-700/60">
                  Etapa 02
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-sky-200 transition-colors">
                Vistoria Técnica Presencial
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inspeção in loco minuciosa com medição técnica, registro fotográfico cadastral e conferência de conformidade com as normas ABNT.
              </p>
            </div>

            {/* Etapa 3 */}
            <div className="bg-[#0E233C]/90 p-6 rounded-2xl border border-sky-800/70 hover:border-sky-400/80 transition-all space-y-3 shadow-sm relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-sky-300 uppercase tracking-wider bg-sky-950/90 px-2.5 py-1 rounded-full border border-sky-700/60">
                  Etapa 03
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-sky-200 transition-colors">
                Laudo, Projeto &amp; Emissão de ART
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Elaboração das peças técnicas, registro oficial de responsabilidade no CREA-SP e protocolo direto nos órgãos competentes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TÓPICO 03: CREDENCIAIS & CANAIS - TOM AZUL: AZUL AÇO CLARO             */}
      {/* ========================================================================= */}
      <section className="py-14 lg:py-18 bg-[#E8F1FA] border-b border-sky-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Story / Credentials */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs font-bold tracking-widest uppercase text-sky-800 bg-sky-200/80 px-2 py-0.5 rounded-xs border border-sky-300">
                03 / Credenciais Técnicas
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08182B] tracking-tight leading-tight">
                Segurança jurídica e técnica com engenheiro responsável.
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                A <strong>TSI Assessoria &amp; Engenharia</strong> atua para solucionar demandas de engenharia civil sem burocracia excessiva, garantindo respaldo legal, conformidade com a ABNT e tranquilidade patrimonial.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('sobre')}
                  className="inline-flex items-center space-x-2 text-xs font-bold font-mono uppercase tracking-wider text-[#091E36] hover:text-sky-700 group"
                >
                  <span>Conheça nossa história na página Sobre Nós</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Direct Channels (SEM horário de funcionamento) */}
            <div className="lg:col-span-5 bg-white border border-sky-200 p-6 space-y-4 shadow-xs rounded-2xl">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#091E36] border-b border-sky-100 pb-2 flex items-center justify-between">
                <span>Canais Diretos de Contato</span>
                <span className="text-[10px] text-sky-700 font-normal">TSI Engenharia</span>
              </h3>
              
              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">WhatsApp / Telefone</span>
                  <a 
                    href={COMPANY_INFO.getWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-emerald-700 hover:underline text-sm"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">E-mail</span>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-bold text-slate-900 hover:text-sky-700 hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Região Atendida</span>
                  <span className="font-semibold text-slate-800">
                    {COMPANY_INFO.region}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={onOpenAiAssistant}
                  className="w-full py-2.5 text-center text-xs font-bold bg-sky-50 hover:bg-sky-100 text-sky-950 border border-sky-300 rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Bot className="w-3.5 h-3.5 text-sky-700" />
                  <span>Dúvidas com Assistente Virtual TSI</span>
                </button>
                <button
                  onClick={() => onNavigate('contato')}
                  className="w-full py-2.5 text-center text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 rounded-xl transition-colors"
                >
                  Acessar Página de Contato Completa
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OS 4 PILARES TÉCNICOS NO FINAL - TOM AZUL: AZUL CÉU TÉCNICO / AZURE   */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#D9E9F7] border-t border-b border-sky-300/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-sky-800 bg-sky-200/90 px-2.5 py-1 rounded-md border border-sky-300">
              Garantias de Atuação
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#08182B] tracking-tight mt-1.5">
              Pilares de Segurança &amp; Responsabilidade Técnica
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Pilar 1: Habilitação */}
            <div className="bg-white p-6 border-2 border-sky-300 rounded-2xl shadow-xs hover:border-sky-500 hover:shadow-md transition-all">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-sky-700 font-bold">
                Habilitação
              </span>
              <p className="text-lg font-extrabold text-[#08182B] mt-1">
                CREA-SP Ativo
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Responsabilidade técnica legal e profissional registrada.
              </p>
            </div>

            {/* Pilar 2: Agilidade */}
            <div className="bg-white p-6 border-2 border-sky-300 rounded-2xl shadow-xs hover:border-sky-500 hover:shadow-md transition-all">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-sky-700 font-bold">
                Agilidade
              </span>
              <p className="text-lg font-extrabold text-[#08182B] mt-1">
                ART Expressa
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Emissão ágil para reformas e obras em condomínio.
              </p>
            </div>

            {/* Pilar 3: Rigor */}
            <div className="bg-white p-6 border-2 border-sky-300 rounded-2xl shadow-xs hover:border-sky-500 hover:shadow-md transition-all">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-sky-700 font-bold">
                Rigor
              </span>
              <p className="text-lg font-extrabold text-[#08182B] mt-1">
                Normas ABNT
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Conformidade NBR 16280, NBR 13752 e NBR 16747.
              </p>
            </div>

            {/* Pilar 4: Abrangência */}
            <div className="bg-white p-6 border-2 border-sky-300 rounded-2xl shadow-xs hover:border-sky-500 hover:shadow-md transition-all">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-sky-700 font-bold">
                Abrangência
              </span>
              <p className="text-lg font-extrabold text-[#08182B] mt-1">
                SP e Região
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Vistorias técnicas presenciais em toda a Grande SP.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CHAMADA FINAL - TOM AZUL: AZUL MARINHO MEIA-NOITE / MIDNIGHT NAVY      */}
      {/* ========================================================================= */}
      <section className="bg-[#051324] text-white py-12 lg:py-16 border-t border-[#0C2442]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Precisa de avaliação técnica ou ART para seu imóvel?
            </h3>
            <p className="text-xs sm:text-sm text-sky-200 leading-relaxed">
              Envie fotos, projetos ou relate sua necessidade diretamente para nossa equipe técnica ou tire dúvidas preliminares com nosso assistente virtual.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-sm transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>

            <button
              onClick={onOpenAiAssistant}
              className="inline-flex items-center space-x-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-sm transition-all shadow-sm"
            >
              <Bot className="w-4 h-4" />
              <span>Assistente Virtual TSI</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-sm border border-white/20 transition-all"
            >
              <span>Solicitar Orçamento</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
