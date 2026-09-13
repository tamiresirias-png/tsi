import React from 'react';
import { MapPin, Check, Building2, PhoneCall } from 'lucide-react';

interface CoverageAreaProps {
  onOpenQuoteModal: () => void;
}

export const CoverageArea: React.FC<CoverageAreaProps> = ({ onOpenQuoteModal }) => {
  const regions = [
    {
      name: 'São Paulo - Capital',
      neighborhoods: 'Centro, Jardins, Pinheiros, Itaim Bibi, Moema, Morumbi, Perdizes, Santana, Tatuapé, Mooca e todas as regiões.',
    },
    {
      name: 'Grande ABC',
      neighborhoods: 'Santo André, São Bernardo do Campo, São Caetano do Sul e Diadema.',
    },
    {
      name: 'Oeste & Alphaville',
      neighborhoods: 'Barueri, Alphaville, Santana de Parnaíba, Osasco e Carapicuíba.',
    },
    {
      name: 'Norte & Leste Metropolitano',
      neighborhoods: 'Guarulhos, Arujá, Mogi das Cruzes e Suzano.',
    },
  ];

  return (
    <section id="cobertura" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-bold text-amber-900">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Atendimento Exclusivo no Estado de São Paulo</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Presença Técnica na <span className="text-amber-600">Capital e Grande São Paulo</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Realizamos vistorias presenciais, levantamentos arquitetônicos e acompanhamento de obras com pontualidade em todas as regiões metropolitanas.
          </p>
        </div>

        {/* 4 Clean Visual Region Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 shadow-sm hover:shadow transition-all"
            >
              <div className="flex items-center space-x-2 text-amber-700 font-bold text-sm">
                <Building2 className="w-4 h-4 text-amber-600" />
                <span>{region.name}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {region.neighborhoods}
              </p>
              <div className="pt-2 flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Vistoria presencial disponível</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Seu imóvel ou condomínio está em São Paulo?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Solicite uma análise documental preliminar sem custos com nossos engenheiros.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2 shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Consultar Disponibilidade de Data</span>
          </button>
        </div>

      </div>
    </section>
  );
};
