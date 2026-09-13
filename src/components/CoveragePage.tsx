import React from 'react';
import { PageView } from '../types';
import { 
  MapPin, 
  Building2, 
  Check, 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CoveragePageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const CoveragePage: React.FC<CoveragePageProps> = ({
  onNavigate,
  onOpenQuoteModal
}) => {
  const regions = [
    {
      name: 'São Paulo - Capital',
      zones: 'Centro, Zona Sul, Zona Oeste, Zona Norte e Zona Leste',
      description: 'Atendimento integral em todos os bairros de SP: Jardins, Pinheiros, Itaim Bibi, Moema, Morumbi, Perdizes, Vila Mariana, Santana, Tatuapé, Mooca, entre outros.',
      highlight: 'Vistorias e laudos com rapidez',
    },
    {
      name: 'Grande ABC',
      zones: 'Santo André, São Bernardo, São Caetano e Diadema',
      description: 'Assessoria completa para condomínios, reformas de apartamentos e regularização de imóveis residenciais e comerciais no polo do ABC.',
      highlight: 'Deslocamento ágil com engenheiro',
    },
    {
      name: 'Oeste & Alphaville',
      zones: 'Barueri, Alphaville, Santana de Parnaíba, Osasco e Carapicuíba',
      description: 'Especializada em laudos cautelares, vistorias de entrega de chaves em empreendimentos novos e projetos executivos de reforma.',
      highlight: 'Presença frequente em condomínios fechados',
    },
    {
      name: 'Norte & Leste Metropolitano',
      zones: 'Guarulhos, Arujá, Mogi das Cruzes e Suzano',
      description: 'Vistorias prediais, regularização cadastral e pareceres técnicos de patologias em edificações residenciais e industriais.',
      highlight: 'Consultoria técnica in-loco',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Header */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-bold text-amber-900">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Atendimento Técnico Presencial em São Paulo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Área de <span className="text-amber-600">Atendimento em SP</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Realizamos vistorias técnicas presenciais, levantamento arquitetônico e acompanhamento de obras em toda a Capital e principais cidades da Região Metropolitana.
          </p>

        </div>
      </section>

      {/* 2. 4 Regions Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regions.map((reg, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{reg.name}</h3>
                    <p className="text-xs text-amber-700 font-semibold">{reg.zones}</p>
                  </div>
                </div>

                <span className="text-[11px] bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-full border border-emerald-100 shrink-0">
                  Disponível
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {reg.description}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{reg.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How Inspections Work */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Como Funciona o Agendamento de Vistorias Técnicas?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-100">
              <Clock className="w-5 h-5 text-amber-600" />
              <strong className="block text-slate-900 text-sm">1. Agendamento Rápido</strong>
              <span>Definição de data e horário conforme a conveniência do cliente ou do condomínio.</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-100">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <strong className="block text-slate-900 text-sm">2. Equipamentos Próprios</strong>
              <span>Inspeção com trena a laser, nível óptico, medidor de umidade e registro fotográfico.</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl space-y-2 border border-slate-100">
              <Calendar className="w-5 h-5 text-amber-600" />
              <strong className="block text-slate-900 text-sm">3. Relatório com ART</strong>
              <span>Emissão do laudo técnico assinado com ART em poucos dias úteis.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">
              Seu imóvel está em São Paulo ou Grande SP?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Consulte a disponibilidade de agenda com nossos engenheiros civis.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shrink-0"
          >
            Consultar Disponibilidade
          </button>
        </div>
      </section>

    </div>
  );
};
