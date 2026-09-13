import React from 'react';
import { PageView } from '../types';
import { Logo } from './Logo';
import { 
  Award, 
  Clock, 
  ShieldCheck, 
  UserCheck, 
  CheckCircle2, 
  Layers, 
  FileCheck2, 
  ArrowRight, 
  MapPin, 
  PhoneCall,
  Sparkles,
  Building2,
  Briefcase,
  HardHat,
  Ruler,
  Compass
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Responsabilidade Técnica',
      desc: 'Todas as atividades de engenharia contam com emissão de Anotação de Responsabilidade Técnica (ART) junto ao CREA, conferindo plena validade jurídica e segurança.'
    },
    {
      icon: UserCheck,
      title: 'Atendimento Personalizado',
      desc: 'Comunicação direta e sem burocracia desnecessária. Cada cliente recebe acompanhamento cuidadoso desde a avaliação inicial até a conclusão do processo.'
    },
    {
      icon: Award,
      title: 'Rigor às Normas Técnicas',
      desc: 'Laudos periciais, projetos e vistorias elaborados em estrita conformidade com as normas da ABNT, Código de Obras Municipal e exigências do Corpo de Bombeiros.'
    },
    {
      icon: Clock,
      title: 'Clareza em Cada Etapa',
      desc: 'Transparência total nos prazos, custos e documentos exigidos pelos órgãos públicos, cartórios e prefeituras, sem surpresas no meio do caminho.'
    }
  ];

  return (
    <div className="w-full bg-[#FBFBFD] text-slate-900">
      
      {/* 1. Header Section with Prominent Brand Identity on Clean White Background */}
      <section className="bg-white text-slate-900 py-14 lg:py-20 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          {/* Prominent Featured Logo Showcase on Clean White Background */}
          <div className="flex flex-col items-center justify-center">
            <div className="p-2 sm:p-4 transition-transform duration-300 hover:scale-[1.02]">
              <Logo size="showcase" theme="dark" variant="emblem" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1522] pt-2">
            Sobre a TSI Assessoria &amp; Engenharia
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Engenharia que resolve, regulariza e acompanha. Soluções técnicas para que seu patrimônio esteja sempre em conformidade, com segurança e tranquilidade.
          </p>
        </div>
      </section>

      {/* 2. Institutional Story & Engineering Imagery Section */}
      <section className="py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Row: Story + High Impact Engineering Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Story Content with Blue Highlighted Background */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Highlighted Blue Card for 'Mais do que documentos: segurança jurídica e técnica para o seu patrimônio.' */}
              <div className="bg-[#0B1522] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-800 space-y-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>
                
                <div className="inline-flex items-center space-x-2 bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full text-xs font-semibold border border-sky-400/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>São Paulo &amp; Região Metropolitana</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Mais do que documentos: segurança jurídica e técnica para o seu patrimônio.
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  A <strong>TSI Assessoria &amp; Engenharia</strong> nasceu com o propósito de aproximar a engenharia civil diagnóstica das reais necessidades de proprietários, síndicos, investidores imobiliários e condomínios.
                </p>
              </div>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                <p>
                  Sabemos que lidar com regularização imobiliária, habite-se, desdobro de lotes, aprovação de projetos ou vistorias de entrega de chaves costuma ser burocrático e desgastante. Por isso, atuamos como parceiros técnicos presentes: identificamos pendências com precisão, apontamos a rota normativa correta e acompanhamos cada etapa com responsabilidade técnica (ART).
                </p>

                <p className="text-xs sm:text-sm text-slate-500 border-l-2 border-slate-900 pl-3">
                  Todos os pareceres, laudos periciais e memoriais descritivos seguem rigorosamente a legislação municipal de São Paulo e as normas aplicáveis da ABNT (NBR 16280, NBR 13752, NBR 16747).
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="inline-flex items-center space-x-2 bg-[#0B1522] hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-sm transition-all"
                >
                  <span>Solicitar Consulta Técnica</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('servicos')}
                  className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm px-4 py-3 rounded-sm border border-slate-300 transition-all"
                >
                  <span>Ver Todos os Serviços</span>
                </button>
              </div>
            </div>

            {/* Right: Engineering Photos Grid */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Primary Image: Architectural drafting table & blueprints */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Projetos arquitetônicos, plantas de engenharia civil e instrumentos técnicos de precisão"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-sky-300 font-bold block">
                      Planejamento &amp; Pranchas Técnicas
                    </span>
                    <p className="text-xs text-slate-200 font-medium">
                      Elaboração de projetos executivos, regularização e memoriais descritivos
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Image: Modern urban architecture and building compliance */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Empreendimento imobiliário corporativo moderno com conformidade técnica e regularização"
                  className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs border border-slate-200 px-2.5 py-1 rounded-full shadow-xs text-slate-900 text-[10px] font-mono font-bold">
                  CREA-SP ATIVO
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-xs text-slate-200 font-medium">
                    Assessoria técnica para imóveis urbanos, condomínios e empreendimentos
                  </p>
                </div>
              </div>

              {/* Technical Credential Badge */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xs text-white">
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                    Registro Profissional
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Responsabilidade Técnica CREA-SP</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Projetos, laudos periciais e memoriais elaborados com emissão de ART, em estrita conformidade com as normas ABNT e exigências legais.
                </p>
              </div>

            </div>

          </div>

          {/* Credential Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
            <div className="p-5 bg-white rounded-sm border border-slate-200 text-center shadow-2xs">
              <span className="text-3xl font-extrabold text-[#0B1522] block font-mono">100%</span>
              <span className="text-xs text-slate-600 font-bold mt-1 block">Atividades com ART / CREA-SP</span>
              <span className="text-[11px] text-slate-400">Garantia e validade jurídica plena</span>
            </div>

            <div className="p-5 bg-white rounded-sm border border-slate-200 text-center shadow-2xs">
              <span className="text-3xl font-extrabold text-[#0B1522] block font-mono">ABNT</span>
              <span className="text-xs text-slate-600 font-bold mt-1 block">Conformidade Normativa</span>
              <span className="text-[11px] text-slate-400">NBR 16280, NBR 13752, NBR 16747</span>
            </div>

            <div className="p-5 bg-white rounded-sm border border-slate-200 text-center shadow-2xs">
              <span className="text-3xl font-extrabold text-[#0B1522] block font-mono">DIRETO</span>
              <span className="text-xs text-slate-600 font-bold mt-1 block">Com Engenheiro Responsável</span>
              <span className="text-[11px] text-slate-400">Comunicação clara e sem intermediários</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-slate-500">
              Diretrizes de Atuação
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1522] tracking-tight mt-1">
              Os Princípios que Orientam Nosso Trabalho
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Ética profissional, rigor normativo e relacionamento transparente com cada cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="p-5 bg-slate-50 border border-slate-200/90 rounded-sm space-y-2">
                <div className="w-9 h-9 rounded-sm bg-white border border-slate-200 text-slate-900 flex items-center justify-center shadow-2xs">
                  <v.icon className="w-4 h-4 text-sky-700" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1522]">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Bottom Contact Invitation */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B1522] tracking-tight">
            Deseja conversar sobre a situação do seu imóvel?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Nossa equipe técnica atende proprietários, síndicos e gestores em toda a capital paulista, Grande São Paulo e cidades vizinhas.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('contato')}
              className="inline-flex items-center space-x-2 bg-[#0B1522] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-sm transition-all"
            >
              <span>Acessar Página de Contato</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
