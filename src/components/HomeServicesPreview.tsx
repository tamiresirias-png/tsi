import React from 'react';
import { 
  FileCheck2, 
  ShieldAlert, 
  Award, 
  HardHat, 
  Ruler, 
  Home, 
  ArrowRight, 
  Check, 
  Sparkles,
  Layers,
  ChevronRight,
  Scale
} from 'lucide-react';

interface HomeServicesPreviewProps {
  onNavigateToServices: () => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

const FEATURED_SERVICES = [
  {
    id: 'regularizacao-habite-se',
    title: 'Regularização de Imóveis & Habite-se',
    tag: 'Prefeitura & Cartório',
    icon: FileCheck2,
    description: 'Levantamento cadastral As-Built, projeto legal, tramitação na PMSP e averbação no Cartório de Registro de Imóveis.',
    highlight: 'Habilita venda por financiamento bancário',
  },
  {
    id: 'laudos-tecnicos',
    title: 'Laudos para Vigilância Sanitária (LTA)',
    tag: 'VISA • COVISA • CVS',
    icon: ShieldAlert,
    description: 'Elaboração de LTA, projetos arquitetônicos sanitários com fluxos de processos e memoriais para clínicas, drogarias e indústrias. Laudos estruturais em segundo plano.',
    highlight: 'Aprovação célere na Vigilância Sanitária',
  },
  {
    id: 'emissao-art-reformas',
    title: 'Emissão de ART para Reformas',
    tag: 'NBR 16280 • CREA-SP',
    icon: Award,
    description: 'Anotação de Responsabilidade Técnica com plano de reforma para aprovação imediata pelo síndico em condomínios.',
    highlight: 'Emissão ágil em até 24 a 48 horas',
  },
  {
    id: 'pericia-judicial-extrajudicial',
    title: 'Perícia Judicial & Extrajudicial',
    tag: 'Perícia & Assistência Técnica',
    icon: Scale,
    description: 'Atuação pericial técnica cível e extrajudicial, assistência técnica aos advogados das partes, formulação de quesitos e laudos de constatação.',
    highlight: 'Respaldo probatório técnico com fé pública perante a Justiça',
  },
  {
    id: 'vistoria-entrega-chaves',
    title: 'Vistoria de Entrega de Chaves',
    tag: 'Checklist +45 Itens',
    icon: Home,
    description: 'Auditoria minuciosa na entrega do imóvel novo com equipamentos a laser e emissão de laudo para notificação da construtora.',
    highlight: 'Evita assumir custos de vícios da construtora',
  },
  {
    id: 'projetos-engenharia-arquitetura',
    title: 'Projetos de Engenharia & Arquitetura',
    tag: 'Legal & Executivo',
    icon: Ruler,
    description: 'Projetos estruturais em concreto e aço, instalações elétricas, hidrossanitárias e prevenção contra incêndio (PPCI).',
    highlight: 'Compatibilização que elimina improvisos',
  },
];

export const HomeServicesPreview: React.FC<HomeServicesPreviewProps> = ({
  onNavigateToServices,
  onOpenQuoteModal,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Simple, Clean, Impactful) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-100">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold text-amber-900">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>Engenharia Civil Especializada em São Paulo</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Serviços de <span className="text-amber-600">Engenharia em Destaque</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Atuação técnica completa com registro no CREA-SP. Conheça as principais áreas e consulte o escopo detalhado em nossa página dedicada.
            </p>
          </div>

          <button
            onClick={onNavigateToServices}
            className="self-start md:self-end bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2 shrink-0 group"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Clean Visual Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-400/80 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:bg-amber-500 group-hover:border-amber-500 text-amber-600 group-hover:text-slate-950 flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlight pill */}
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50/80 border border-emerald-200/80 px-2.5 py-1.5 rounded-lg">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{service.highlight}</span>
                  </div>

                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <button
                    onClick={onNavigateToServices}
                    className="text-xs font-bold text-slate-700 hover:text-amber-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Ver Escopo Técnico</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-all"
                  >
                    Orçar
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Big Visual Banner Linking to Dedicated Services Page */}
        <div className="bg-gradient-to-r from-amber-50 via-slate-50 to-white border border-amber-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
              Catálogo Completo & Fichas Técnicas
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Quer ver detalhadamente o que envolve cada serviço e quando contratar?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Criamos uma página dedicada explicando os benefícios, etapas executadas e normas técnicas de cada um dos nossos serviços de engenharia e assessoria.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onNavigateToServices}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4" />
              <span>Acessar Página de Serviços</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-5 py-3.5 rounded-xl border border-slate-300 shadow-sm transition-colors"
            >
              Solicitar Orçamento Geral
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
