import React from 'react';
import { Search, Stethoscope, FileText, CheckCircle2 } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Avaliação',
      description: 'Entendemos a necessidade e analisamos a situação do imóvel, projeto ou obra.',
      icon: Search
    },
    {
      number: '02',
      title: 'Diagnóstico técnico',
      description: 'Identificamos pendências, necessidades, possibilidades e melhores soluções.',
      icon: Stethoscope
    },
    {
      number: '03',
      title: 'Projeto e documentação',
      description: 'Elaboramos os projetos, laudos e documentos necessários.',
      icon: FileText
    },
    {
      number: '04',
      title: 'Aprovação e acompanhamento',
      description: 'Acompanhamos os processos e, quando contratado, a execução até a conclusão.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
            <span>Metodologia & Processos</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B192C]">
            Do diagnóstico à solução.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Acompanhamos cada etapa para tornar o processo mais claro, organizado e seguro.
          </p>
        </div>

        {/* 4 Steps with visual connecting line */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-slate-200 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative flex flex-col items-center text-center group"
                >
                  {/* Step Number Tag */}
                  <div className="w-14 h-14 rounded-full bg-[#0B192C] text-white flex items-center justify-center font-serif-display text-lg font-bold mb-5 shadow-sm group-hover:bg-[#1E3A5F] transition-colors ring-4 ring-[#F8FAFC]">
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif-display text-xl font-medium text-[#0B192C] mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Subtle bottom indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-100 w-full flex items-center justify-center text-slate-400">
                    <Icon className="w-4 h-4 text-sky-600" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Supporting reassurance statement */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Todas as fases contam com comunicação clara e transparente, evitando surpresas orçamentárias ou imprevistos documentais.
          </p>
        </div>

      </div>
    </section>
  );
};
