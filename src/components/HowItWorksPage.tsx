import React from 'react';
import { PageView } from '../types';
import { 
  Search, 
  Stethoscope, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  FileSpreadsheet, 
  CalendarCheck, 
  Building,
  HelpCircle,
  PhoneCall
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const steps = [
    {
      number: '01',
      title: 'Avaliação e Levantamento',
      subtitle: 'Compreensão da necessidade e análise documental',
      description: 'Entendemos detalhadamente o seu objetivo e analisamos a situação do imóvel, da obra ou da sua empresa. Verificamos a documentação existente (matrícula, IPTU, projetos anteriores ou rotinas operacionais) para mapear o cenário real.',
      clientActions: 'Envio de documentos básicos ou relato da necessidade;',
      tsiActions: 'Triagem preliminar e análise de viabilidade técnica;',
      timeframe: 'Atendimento inicial em até 24h úteis'
    },
    {
      number: '02',
      title: 'Diagnóstico Técnico',
      subtitle: 'Vistoria no local e identificação de diretrizes',
      description: 'Realizamos vistoria presencial minuciosa no imóvel com equipamentos adequados (trena laser, nível óptico, detector elétrico) ou reunião de diagnóstico empresarial. Identificamos pendências, não conformidades, oportunidades e a melhor rota de solução.',
      clientActions: 'Agendamento de data e acesso ao imóvel;',
      tsiActions: 'Inspeção in loco, levantamento cadastral e relatório de diagnóstico;',
      timeframe: 'Agendamento flexível de acordo com sua disponibilidade'
    },
    {
      number: '03',
      title: 'Projeto e Documentação',
      subtitle: 'Desenvolvimento das peças técnicas e emissão de ART',
      description: 'Elaboramos com rigor as plantas arquitetônicas, memoriais descritivos, laudos periciais, projetos complementares ou planos de reforma conforme as normas ABNT e o Código de Obras. Registramos a Anotação de Responsabilidade Técnica (ART) no CREA.',
      clientActions: 'Aprovação do anteprojeto ou diretrizes propostas;',
      tsiActions: 'Elaboração das pranchas, laudo conclusivo e registro de ART no CREA;',
      timeframe: 'De 24h (reformas simples) a 15-30 dias (projetos complexos)'
    },
    {
      number: '04',
      title: 'Aprovação e Acompanhamento',
      subtitle: 'Conclusão e suporte até o resultado final',
      description: 'Protocolamos e acompanhamos o processo perante a Prefeitura, Cartório de Imóveis, Corpo de Bombeiros ou administração do condomínio. Caso contratado, fiscalizamos a execução das obras ou mantemos o acompanhamento periódico da assessoria.',
      clientActions: 'Recebimento dos documentos autenticados e alvarás;',
      tsiActions: 'Acompanhamento do trâmite, cumprimento de comunique-se e entrega final;',
      timeframe: 'Suporte contínuo até a emissão da certidão ou habite-se'
    }
  ];

  const faqs = [
    {
      q: 'Quanto tempo leva para emitir uma ART de reforma?',
      a: 'Para reformas em condomínios que atendem aos requisitos da NBR 16280, a elaboração do plano de reforma e a emissão da ART registrada e quitada no CREA costuma ocorrer em 24 a 48 horas úteis após a conferência do escopo.'
    },
    {
      q: 'A TSI acompanha até a aprovação final na Prefeitura?',
      a: 'Sim! Não entregamos apenas plantas sem suporte. Conduzimos e monitoramos o processo administrativo na Prefeitura, sanando eventuais notas de exigência (comunique-se) até a obtenção do Habite-se ou Certidão de Conclusão.'
    },
    {
      q: 'Como é feito o atendimento se eu não souber qual laudo preciso?',
      a: 'Nossa equipe técnica e o Assistente Virtual auxiliam você na identificação imediata da sua necessidade. Você pode nos enviar fotos ou a notificação recebida pelo WhatsApp para uma avaliação sem compromisso.'
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="bg-[#0B192C] text-white py-14 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold mb-4 backdrop-blur-xs">
            <span>Metodologia & Transparência</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            Como Funciona Nosso Atendimento
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Do diagnóstico inicial à solução definitiva. Acompanhamos cada etapa do seu processo com rigor técnico, clareza e previsibilidade.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12 relative">
            {/* Visual Guide Line on desktop */}
            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-slate-200" />

            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative flex flex-col md:flex-row items-start md:items-start space-y-4 md:space-y-0 md:space-x-8 group"
              >
                {/* Step Circle Badge */}
                <div className="w-16 h-16 rounded-2xl bg-[#0B192C] text-white flex items-center justify-center font-serif-display text-xl font-bold shrink-0 shadow-md group-hover:bg-[#1E3A5F] transition-colors relative z-10 border-4 border-[#F8FAFC]">
                  {step.number}
                </div>

                {/* Content Box */}
                <div className="flex-1 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                        {step.subtitle}
                      </span>
                      <h3 className="font-serif-display text-2xl font-medium text-[#0B192C] mt-0.5">
                        {step.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-1 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 shrink-0">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{step.timeframe}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>

                  {/* Dual columns: cliente vs TSI */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
                    <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200/60">
                      <strong className="text-slate-800 block mb-1">Como você participa:</strong>
                      <span className="text-slate-600">{step.clientActions}</span>
                    </div>

                    <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200/60">
                      <strong className="text-slate-800 block mb-1">O que a TSI realiza:</strong>
                      <span className="text-slate-600">{step.tsiActions}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Assurance / Guarantees Banner */}
      <section className="bg-white py-14 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif-display text-lg font-medium text-[#0B192C]">
                Responsabilidade CREA
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Todas as atividades contam com recolhimento de ART perante o Conselho Regional de Engenharia.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-serif-display text-lg font-medium text-[#0B192C]">
                Prazos e Cronograma
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Estimativas realistas informadas no início da contratação e acompanhamento regular.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif-display text-lg font-medium text-[#0B192C]">
                Sem Surpresas
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Orçamentos claros discriminando cada etapa do trabalho e as taxas oficiais dos órgãos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs on Methodology */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#0B192C] text-center mb-10">
            Perguntas Frequentes sobre o Atendimento
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div key={fIdx} className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-serif-display text-base sm:text-lg font-medium text-[#0B192C] mb-2 flex items-start space-x-2">
                  <HelpCircle className="w-4 h-4 text-sky-600 shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>Iniciar avaliação do meu caso</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
