import React, { useState } from 'react';
import { ALL_SERVICES } from '../data/services';
import { ServiceItem } from '../types';
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
  X, 
  Check, 
  Clock, 
  FileText,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceId: string) => void;
  onNavigateToServices?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForQuote,
  onNavigateToServices 
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
      default: return <FileText className={className} />;
    }
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <span>Engenharia Civil Especializada</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B192C]">
            Nossos serviços de engenharia
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Soluções técnicas para regularização, documentação, projetos e acompanhamento do seu imóvel ou obra.
          </p>
        </div>

        {/* 10 Services Grid (9 Engineering + Assessoria Administrativa next to Vistoria de chaves) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ALL_SERVICES.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-xl p-7 border transition-all duration-200 hover:shadow-lg flex flex-col justify-between ${
                service.id === 'assessoria-administrativa'
                  ? 'bg-gradient-to-b from-[#F1F5F9] to-white border-sky-200/80 hover:border-sky-300 ring-1 ring-sky-100'
                  : 'bg-[#F8FAFC] hover:bg-white border-slate-200/90 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Minimalist Icon & Subtle Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-lg border flex items-center justify-center transition-colors shadow-2xs ${
                    service.id === 'assessoria-administrativa'
                      ? 'bg-sky-50 border-sky-200 text-sky-700 group-hover:bg-sky-100'
                      : 'bg-white border-slate-200 text-[#1E3A5F] group-hover:text-sky-600 group-hover:border-sky-200'
                  }`}>
                    {getServiceIcon(service.iconName, "w-5 h-5")}
                  </div>

                  {service.badge && (
                    <span className={`text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded ${
                      service.id === 'assessoria-administrativa'
                        ? 'bg-sky-100 text-sky-800 border border-sky-200/60'
                        : 'bg-slate-200/70 text-slate-700'
                    }`}>
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="font-serif-display text-xl font-medium text-[#0B192C] mb-3 group-hover:text-[#1E3A5F] transition-colors">
                  {service.title}
                </h3>

                {/* Exact Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {service.shortDescription}
                </p>
              </div>

              {/* Action Button: Saiba mais → */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#0B192C] hover:text-sky-600 transition-colors group-hover:translate-x-0.5 transform duration-150"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 text-sky-500" />
                </button>

                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 underline underline-offset-4"
                >
                  Orçar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Callout to Full Services Page */}
        {onNavigateToServices && (
          <div className="mt-12 text-center">
            <button
              onClick={onNavigateToServices}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all group"
            >
              <span>Ver catálogo completo e detalhamento técnico</span>
              <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Informative Note */}
        <div className="mt-14 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
            <span>Todos os serviços contam com Anotação de Responsabilidade Técnica (ART) junto ao CREA.</span>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Atendimento técnico ágil e com cronograma transparente.</span>
          </div>
        </div>

      </div>

      {/* Detail Modal for "Saiba mais →" */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B192C]/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm px-6 py-5 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#1E3A5F]">
                  {getServiceIcon(selectedService.iconName, "w-5 h-5 text-sky-700")}
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#0B192C]">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {selectedService.normaRef || 'Normas Técnicas da ABNT & Legislação'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 text-slate-700">
              
              {/* Full Description */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
                  Visão Geral do Serviço
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Highlights / O que inclui */}
              {selectedService.highlights && selectedService.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">
                    Etapas e Atividades Incluídas
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Deliverables */}
              {selectedService.deliverables && selectedService.deliverables.length > 0 && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#1E3A5F] mb-2.5">
                    Entregáveis Técnicos
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedService.deliverables.map((doc, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        <span className="font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* When Needed */}
              {selectedService.whenNeeded && selectedService.whenNeeded.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-2">
                    Quando este serviço é necessário?
                  </h4>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1.5 pl-1">
                    {selectedService.whenNeeded.slice(0, 4).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Tire dúvidas ou solicite uma proposta formal para este serviço.
              </span>

              <div className="flex items-center space-x-2.5 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white transition-colors"
                >
                  Voltar
                </button>

                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForQuote(title);
                  }}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-xs font-bold transition-colors shadow-xs"
                >
                  Solicitar orçamento
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
