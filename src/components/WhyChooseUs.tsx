import React from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  FolderCheck, 
  GitBranch, 
  Eye, 
  Sliders
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const differentials = [
    {
      icon: UserCheck,
      title: 'Atendimento personalizado',
      description: 'Contato direto com os profissionais responsáveis, compreendendo as particularidades de cada caso para orientar o caminho mais eficiente.'
    },
    {
      icon: ShieldCheck,
      title: 'Responsabilidade técnica',
      description: 'Atuação fundamentada em normas técnicas vigentes e respaldo formal perante os órgãos de fiscalização profissional (CREA).'
    },
    {
      icon: FolderCheck,
      title: 'Organização documental',
      description: 'Cuidado rigoroso com plantas, memoriais, certidões e protocolos, assegurando processos estruturados e livres de pendências.'
    },
    {
      icon: GitBranch,
      title: 'Acompanhamento de processos',
      description: 'Monitoramento contínuo das etapas técnicas e administrativas junto a prefeituras, bombeiros, cartórios e equipes de execução.'
    },
    {
      icon: Eye,
      title: 'Clareza em cada etapa',
      description: 'Comunicação objetiva e acessível, explicando o que é necessário, os prazos esperados e a evolução de cada serviço sem complicações.'
    },
    {
      icon: Sliders,
      title: 'Soluções adequadas à necessidade do cliente',
      description: 'Propostas dimensionadas de acordo com a realidade do imóvel ou empreendimento, priorizando viabilidade técnica, econômica e legal.'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <span>Compromisso Profissional</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B192C]">
            Por que contratar a TSI?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Uma abordagem técnica séria, fundamentada na organização, precisão documental e proximidade com o cliente.
          </p>
        </div>

        {/* 6 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-xl p-7 border border-slate-200/90 hover:border-slate-300 transition-colors flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1E3A5F] mb-5 shadow-2xs">
                  <Icon className="w-5 h-5 text-sky-600" />
                </div>

                <h3 className="font-serif-display text-lg font-medium text-[#0B192C] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
