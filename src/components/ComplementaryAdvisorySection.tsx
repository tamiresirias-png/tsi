import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  X,
  FileSpreadsheet,
  TrendingUp,
  Receipt,
  Workflow,
  BarChart3,
  CalendarCheck
} from 'lucide-react';
import { COMPLEMENTARY_ADVISORY } from '../data/services';

interface ComplementaryAdvisorySectionProps {
  onOpenQuoteModal: (serviceType?: string) => void;
}

export const ComplementaryAdvisorySection: React.FC<ComplementaryAdvisorySectionProps> = ({ 
  onOpenQuoteModal 
}) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const advisoryIcons = [
    CalendarCheck,
    FileSpreadsheet,
    Receipt,
    Workflow,
    BarChart3,
    TrendingUp
  ];

  return (
    <section id="assessoria" className="py-14 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact, refined complementary banner container */}
        <div className="bg-[#F8FAFC] rounded-2xl p-7 sm:p-10 border border-slate-200/90 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Header & Description */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold shadow-2xs">
                <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                <span>Serviço Complementar</span>
              </div>

              <h2 className="font-serif-display text-2xl sm:text-3xl font-medium tracking-tight text-[#0B192C]">
                {COMPLEMENTARY_ADVISORY.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {COMPLEMENTARY_ADVISORY.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setIsDetailModalOpen(true)}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-[#0B192C] hover:text-sky-600 transition-colors group"
                >
                  <span>Conheça a assessoria</span>
                  <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* 6 Services Minimalist Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMPLEMENTARY_ADVISORY.services.map((service, index) => {
                  const Icon = advisoryIcons[index % advisoryIcons.length];
                  return (
                    <div 
                      key={index}
                      className="bg-white p-3.5 rounded-lg border border-slate-200/70 flex items-start space-x-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-800 leading-snug">
                        {service.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Advisory Modal */}
      {isDetailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B192C]/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm px-6 py-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Serviço Complementar para Empresas
                </span>
                <h3 className="font-serif-display text-xl font-bold text-[#0B192C]">
                  Assessoria Administrativa e Financeira
                </h3>
              </div>

              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 text-slate-700">
              <p className="text-sm text-slate-600 leading-relaxed">
                Desenvolvida especialmente para micro e pequenos empreendedores que buscam estruturar sua rotina de gestão, obter clareza financeira e organizar processos internos sem criar uma estrutura burocrática pesada.
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  O que está incluído na assessoria:
                </h4>
                <div className="space-y-2.5">
                  {COMPLEMENTARY_ADVISORY.services.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-200/70">
                      <h5 className="text-xs font-bold text-slate-900 mb-1">{item.title}</h5>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-end space-x-3">
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  setIsDetailModalOpen(false);
                  onOpenQuoteModal('Assessoria empresarial');
                }}
                className="px-5 py-2 rounded-lg bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-xs font-bold shadow-xs"
              >
                Solicitar contato para assessoria
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
