import React, { useState } from 'react';
import { ENGINEERING_SERVICES, COMPLEMENTARY_ADVISORY, ADVISORY_SERVICE_ITEM } from '../data/services';
import { ServiceItem, PageView } from '../types';
import { COMPANY_INFO } from '../data/company';
import { 
  FileCheck, 
  SplitSquareVertical, 
  Ruler, 
  ClipboardList, 
  ShieldAlert, 
  ScrollText, 
  Award, 
  HardHat, 
  CheckSquare, 
  ArrowRight, 
  Check, 
  Briefcase,
  Layers,
  Search,
  MessageCircle,
  Building2,
  BarChart3,
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

interface ServicesPageProps {
  onSelectServiceForQuote: (serviceTitle?: string) => void;
  onOpenAiAssistant?: () => void;
  onNavigate?: (page: PageView) => void;
  initialTab?: 'engenharia' | 'assessoria';
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectServiceForQuote,
  onOpenAiAssistant,
  onNavigate,
  initialTab = 'engenharia'
}) => {
  const [activeTab, setActiveTab] = useState<'engenharia' | 'assessoria'>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEngCategory, setSelectedEngCategory] = useState<string>('todos');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('regularizacao-imoveis');

  const getServiceIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'FileCheck': return <FileCheck className={className} />;
      case 'SplitSquareVertical': return <SplitSquareVertical className={className} />;
      case 'Ruler': return <Ruler className={className} />;
      case 'ClipboardList': return <ClipboardList className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'ScrollText': return <ScrollText className={className} />;
      case 'Award': return <Award className={className} />;
      case 'HardHat': return <HardHat className={className} />;
      case 'CheckSquare': return <CheckSquare className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      default: return <Layers className={className} />;
    }
  };

  const filteredEngineeringServices = ENGINEERING_SERVICES.filter(service => {
    const matchesCategory = selectedEngCategory === 'todos' || service.category === selectedEngCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      service.title.toLowerCase().includes(query) ||
      service.shortDescription.toLowerCase().includes(query) ||
      service.fullDescription.toLowerCase().includes(query) ||
      service.whenNeeded.some(item => item.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* Page Header */}
      <section className="bg-[#0B192C] text-white py-14 lg:py-18 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold mb-4 backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Soluções Técnicas com Responsabilidade CREA</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
              Nossos Serviços
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Atuação especializada em engenharia civil para regularização e segurança patrimonial, além de assessoria administrativa e financeira para micro e pequenas empresas.
            </p>
          </div>

          {/* Main Two Divisions Selector Tabs */}
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('engenharia')}
              className={`px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center space-x-2.5 transition-all shadow-sm ${
                activeTab === 'engenharia'
                  ? 'bg-white text-[#0B192C] ring-2 ring-sky-400 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 hover:text-white border border-white/10'
              }`}
            >
              <HardHat className={`w-4 h-4 ${activeTab === 'engenharia' ? 'text-sky-600' : 'text-slate-300'}`} />
              <span>1. Serviços de Engenharia Civil</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 font-semibold ml-1.5">
                9 Especialidades
              </span>
            </button>

            <button
              onClick={() => setActiveTab('assessoria')}
              className={`px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center space-x-2.5 transition-all shadow-sm ${
                activeTab === 'assessoria'
                  ? 'bg-white text-[#0B192C] ring-2 ring-sky-400 shadow-md'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 hover:text-white border border-white/10'
              }`}
            >
              <Briefcase className={`w-4 h-4 ${activeTab === 'assessoria' ? 'text-sky-600' : 'text-slate-300'}`} />
              <span>2. Assessoria Administrativa & Financeira</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold ml-1.5">
                Para Empresas
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* TAB 1: SERVIÇOS DE ENGENHARIA */}
      {activeTab === 'engenharia' && (
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header / Filter Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-200">
              <div>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#0B192C]">
                  Engenharia Civil & Regularização Imobiliária
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Atendimento técnico completo com emissão de ART registrada junto ao CREA.
                </p>
              </div>

              {/* Search input & AI prompt */}
              <div className="flex items-center gap-3">
                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar serviço..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>

                <a
                  href={COMPANY_INFO.getWhatsappUrl('Olá! Tenho dúvidas sobre qual serviço de engenharia meu imóvel necessita.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center space-x-1.5 px-3.5 py-2 bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 rounded-lg text-xs font-semibold transition-colors"
                  title="Dúvidas sobre o serviço ideal?"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">Dúvidas? Fale no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* List of Detailed Engineering Services */}
            <div className="space-y-8">
              {filteredEngineeringServices.map((service, index) => {
                const isExpanded = expandedServiceId === service.id;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden"
                  >
                    {/* Service Header Row */}
                    <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1E3A5F] shrink-0">
                          {getServiceIcon(service.iconName, "w-6 h-6 text-[#1E3A5F]")}
                        </div>
                        <div>
                          <div className="flex items-center flex-wrap gap-2 mb-1.5">
                            <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
                            <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                              {service.badge || 'Engenharia Civil'}
                            </span>
                            {service.normaRef && (
                              <span className="text-xs text-slate-500 italic hidden sm:inline">
                                • {service.normaRef}
                              </span>
                            )}
                          </div>
                          <h3 className="font-serif-display text-2xl font-medium text-[#0B192C]">
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3 shrink-0 self-end lg:self-center">
                        <button
                          onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                          className="px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
                        >
                          {isExpanded ? 'Recolher detalhes' : 'Ver detalhes completos'}
                        </button>

                        <button
                          onClick={() => onSelectServiceForQuote(service.title)}
                          className="px-5 py-2.5 rounded-lg bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-xs font-bold transition-colors shadow-xs"
                        >
                          Solicitar orçamento
                        </button>
                      </div>
                    </div>

                    {/* Detailed Accordion / Expanded Area */}
                    {isExpanded && (
                      <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-slate-100 bg-[#F8FAFC]/60 space-y-6">
                        {/* Full Description */}
                        <div>
                          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
                            Visão Geral e Atuação Técnica
                          </h4>
                          <p className="text-sm leading-relaxed text-slate-700">
                            {service.fullDescription}
                          </p>
                        </div>

                        {/* 3-Column Technical Breakdown */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                          {/* O que envolve */}
                          <div className="bg-white p-5 rounded-xl border border-slate-200/80">
                            <h5 className="text-xs uppercase tracking-wider font-bold text-[#1E3A5F] mb-3 flex items-center space-x-1.5">
                              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                              <span>O que envolve na prática</span>
                            </h5>
                            <ul className="space-y-2 text-xs text-slate-600">
                              {service.whatItInvolves && service.whatItInvolves.map((step, sIdx) => (
                                <li key={sIdx} className="flex items-start">
                                  <Check className="w-3.5 h-3.5 text-sky-600 mr-2 shrink-0 mt-0.5" />
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Entregáveis Técnicos */}
                          <div className="bg-white p-5 rounded-xl border border-slate-200/80">
                            <h5 className="text-xs uppercase tracking-wider font-bold text-[#1E3A5F] mb-3 flex items-center space-x-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                              <span>O que você recebe (Entregáveis)</span>
                            </h5>
                            <ul className="space-y-2 text-xs text-slate-600">
                              {service.deliverables && service.deliverables.map((doc, dIdx) => (
                                <li key={dIdx} className="flex items-start font-medium text-slate-700">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                                  <span>{doc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quando é necessário */}
                          <div className="bg-white p-5 rounded-xl border border-slate-200/80">
                            <h5 className="text-xs uppercase tracking-wider font-bold text-[#1E3A5F] mb-3 flex items-center space-x-1.5">
                              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                              <span>Quando é necessário</span>
                            </h5>
                            <ul className="space-y-2 text-xs text-slate-600">
                              {service.whenNeeded && service.whenNeeded.map((when, wIdx) => (
                                <li key={wIdx} className="flex items-start">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-2 shrink-0 mt-1.5" />
                                  <span>{when}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Highlights & Benefits Bar */}
                        <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
                          <div className="flex items-center space-x-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span><strong>Garantia Técnica:</strong> Emissão de ART (CREA) e atendimento integral às normas ABNT.</span>
                          </div>

                          <button
                            onClick={() => onSelectServiceForQuote(service.title)}
                            className="inline-flex items-center space-x-1 font-bold text-sky-700 hover:text-sky-900"
                          >
                            <span>Solicitar orçamento deste serviço</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* TAB 2: ASSESSORIA ADMINISTRATIVA */}
      {activeTab === 'assessoria' && (
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introductory Banner */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-14">
              <div className="max-w-3xl">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-semibold mb-3">
                  <Briefcase className="w-3.5 h-3.5 text-sky-600" />
                  <span>Serviço Complementar para Micro e Pequenas Empresas</span>
                </span>
                
                <h2 className="font-serif-display text-3xl sm:text-4xl font-medium text-[#0B192C] mb-4">
                  {COMPLEMENTARY_ADVISORY.subtitle}
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                  {COMPLEMENTARY_ADVISORY.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => onSelectServiceForQuote('Assessoria Administrativa e Financeira')}
                    className="px-6 py-3 rounded-xl bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-xs sm:text-sm font-bold transition-colors shadow-xs"
                  >
                    Agendar diagnóstico gratuito para minha empresa
                  </button>
                </div>
              </div>
            </div>

            {/* 6 Core Pillars Grid */}
            <div className="mb-16">
              <div className="mb-8">
                <h3 className="font-serif-display text-2xl font-medium text-[#0B192C]">
                  Como a assessoria atua no seu negócio
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Soluções práticas desenhadas para desonerar o empresário de rotinas operacionais e trazer previsibilidade financeira.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {COMPLEMENTARY_ADVISORY.services.map((advisory, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center text-xs font-bold">
                          0{idx + 1}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Gestão & Rotinas
                        </span>
                      </div>

                      <h4 className="font-serif-display text-lg font-medium text-[#0B192C] mb-2.5">
                        {advisory.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {advisory.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => onSelectServiceForQuote(`Assessoria: ${advisory.title}`)}
                        className="text-xs font-semibold text-sky-700 hover:text-sky-900 inline-flex items-center space-x-1"
                      >
                        <span>Quero saber mais</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology / Como Funciona para a Empresa */}
            <div className="bg-[#F1F5F9] rounded-2xl p-8 sm:p-10 border border-slate-200 mb-14">
              <h3 className="font-serif-display text-2xl font-medium text-[#0B192C] mb-6">
                Como funciona o processo de assessoria
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-sky-600">Etapa 1</span>
                  <h4 className="font-bold text-sm text-[#0B192C] mt-1 mb-2">Diagnóstico Inicial</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entendimento da rotina atual, dificuldades, fluxo de pagamentos e gargalos administrativos.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-sky-600">Etapa 2</span>
                  <h4 className="font-bold text-sm text-[#0B192C] mt-1 mb-2">Plano de Ação</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Definição das ferramentas, padronização de processos e estruturação das planilhas ou sistemas.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-sky-600">Etapa 3</span>
                  <h4 className="font-bold text-sm text-[#0B192C] mt-1 mb-2">Implantação</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Organização das contas, conciliação do fluxo de caixa e rotinas diárias e semanais.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-sky-600">Etapa 4</span>
                  <h4 className="font-bold text-sm text-[#0B192C] mt-1 mb-2">Acompanhamento Contínuo</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reuniões periódicas de alinhamento com apresentação de indicadores e suporte à decisão.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <span className="text-xs text-slate-600">
                  Atendemos empresas prestadoras de serviço, comércios, escritórios e profissionais autônomos.
                </span>

                <button
                  onClick={() => onSelectServiceForQuote('Assessoria Administrativa e Financeira')}
                  className="px-5 py-2.5 rounded-lg bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-xs font-bold transition-colors"
                >
                  Solicitar contato de assessoria
                </button>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Direct Engineering Consultation Callout on Services Page */}
      <section className="bg-white border-t border-slate-200 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-xs font-bold tracking-widest uppercase text-slate-500">
            Orientação Técnica Personalizada
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
            Em dúvida sobre qual serviço ou documento você precisa?
          </h3>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Fale diretamente com nossa equipe de engenharia. Analisamos sua matrícula, planta ou notificação e indicamos o procedimento adequado.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <a
              href={COMPANY_INFO.getWhatsappUrl('Olá! Gostaria de uma avaliação preliminar com um engenheiro da TSI.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar Engenheiro no WhatsApp</span>
            </a>

            <button
              onClick={() => onSelectServiceForQuote()}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-sm bg-[#0B1522] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-all"
            >
              <span>Solicitar Orçamento Formal</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
