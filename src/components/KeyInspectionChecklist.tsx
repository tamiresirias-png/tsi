import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Search, 
  Zap, 
  Droplets, 
  Layers, 
  Maximize2, 
  Check, 
  ArrowRight,
  HardHat
} from 'lucide-react';

interface KeyInspectionChecklistProps {
  onOpenQuoteForInspection: () => void;
}

interface ChecklistCategory {
  id: string;
  title: string;
  icon: string;
  itemCount: number;
  items: {
    name: string;
    description: string;
    testMethod: string;
    norma: string;
  }[];
}

const CHECKLIST_CATEGORIES: ChecklistCategory[] = [
  {
    id: 'hidraulica',
    title: 'Hidráulica & Caimento de Ralos',
    icon: 'Droplets',
    itemCount: 12,
    items: [
      {
        name: 'Teste de Caimento e Estanqueidade em Ralos',
        description: 'Lançamento de fluxo contínuo de água no piso do banheiro, sacada e lavanderia para testar se há empoçamento ou caimento invertido.',
        testMethod: 'Lançamento de volume de água controlado',
        norma: 'ABNT NBR 15575-6'
      },
      {
        name: 'Pressão e Escoamento das Torneiras e Duchas',
        description: 'Verificação da pressão dinâmica de vazão simultânea para detectar entupimentos por restos de obra nos sifões e tubulações.',
        testMethod: 'Manômetro e teste de abertura total',
        norma: 'ABNT NBR 5626'
      },
      {
        name: 'Inspeção de Vazamentos Sob Bancadas e Sifões',
        description: 'Verificação de vedações nas conexões de torneiras, monocomandos e saídas de esgoto.',
        testMethod: 'Inspeção visual e papel de revelação de umidade',
        norma: 'ABNT NBR 8160'
      }
    ]
  },
  {
    id: 'eletrica',
    title: 'Instalações Elétricas & Quadro',
    icon: 'Zap',
    itemCount: 10,
    items: [
      {
        name: 'Teste de Polaridade e Tensão em 100% das Tomadas',
        description: 'Identificação de tomadas inversas (fase e neutro trocados), falta de aterramento e tensão fora do padrão (127V / 220V).',
        testMethod: 'Testador digital de tomadas com ID/DR',
        norma: 'ABNT NBR 5410'
      },
      {
        name: 'Inspeção de Disjuntores e Identificação do Quadro',
        description: 'Conferência do barramento elétrico, aperto dos bornes e identificação dos circuitos do Quadro de Distribuição.',
        testMethod: 'Análise física e câmera termográfica',
        norma: 'ABNT NBR 5410'
      },
      {
        name: 'Funcionamento do Dispositivo DR (Proteção Contra Choque)',
        description: 'Simulação de fuga de corrente para atestar o disparo imediato do relé de proteção familiar.',
        testMethod: 'Simulador de fuga de corrente',
        norma: 'ABNT NBR 5410 (Obrigatória)'
      }
    ]
  },
  {
    id: 'revestimentos',
    title: 'Pisos, Azulejos & Placas Ocas',
    icon: 'Layers',
    itemCount: 14,
    items: [
      {
        name: 'Teste de Percussão em Porcelanatos e Cerâmicas',
        description: 'Percussão leve com bastão técnico para identificar placas assentadas com argamassa insuficiente (som cavo / azulejo oco).',
        testMethod: 'Bastão de percussão acústica',
        norma: 'ABNT NBR 13753'
      },
      {
        name: 'Planicidade e Nivelamento do Contrapiso',
        description: 'Verificação com régua de alumínio e nível laser para garantir ausência de dentes e ondulações que quebrem móveis sob medida.',
        testMethod: 'Nível laser e régua técnica',
        norma: 'ABNT NBR 15575-3'
      },
      {
        name: 'Inspecionar Rejuntamento e Mofo em Juntas',
        description: 'Análise da integridade da aplicação do rejunte nas áreas molhadas para prevenir infiltrações no vizinho de baixo.',
        testMethod: 'Inspeção tátil-visual',
        norma: 'ABNT NBR 14992'
      }
    ]
  },
  {
    id: 'esquadrias',
    title: 'Janelas, Portas & Vidros',
    icon: 'Maximize2',
    itemCount: 9,
    items: [
      {
        name: 'Funcionamento de Fechaduras e Esquadrias de Alumínio',
        description: 'Abertura e fechamento de todas as portas e janelas de alumínio/PVC verificando emperramento, folgas ou desalinhamentos.',
        testMethod: 'Teste mecânico de ciclos',
        norma: 'ABNT NBR 10821'
      },
      {
        name: 'Vedação contra Infiltração de Chuva em Caixilhos',
        description: 'Inspeção da borracha de vedação e silicone nos cantos de janelas expostas à intempérie.',
        testMethod: 'Verificação visual e teste de estanqueidade',
        norma: 'ABNT NBR 15575-4'
      }
    ]
  }
];

export const KeyInspectionChecklist: React.FC<KeyInspectionChecklistProps> = ({ onOpenQuoteForInspection }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('hidraulica');

  const activeCategory = CHECKLIST_CATEGORIES.find(c => c.id === activeCategoryId) || CHECKLIST_CATEGORIES[0];

  return (
    <section id="vistoria-chaves" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold text-amber-400">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Engenharia de Vistoria de Imóveis Novos & Usados</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que inspecionamos na sua <span className="text-amber-400">Entrega de Chaves</span>?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Mais de <strong className="text-amber-400">45 itens técnicos inspecionados</strong> com equipamentos profissionais antes de você assinar o termo de recebimento da construtora.
          </p>
        </div>

        {/* Interactive Checklist Tabs */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-8 shadow-2xl">
          
          {/* Category Selector Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {CHECKLIST_CATEGORIES.map((cat) => {
              const isSelected = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`p-4 rounded-xl border transition-all text-left flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-lg'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-amber-400'}`}>
                      {cat.icon === 'Droplets' && <Droplets className="w-5 h-5" />}
                      {cat.icon === 'Zap' && <Zap className="w-5 h-5" />}
                      {cat.icon === 'Layers' && <Layers className="w-5 h-5" />}
                      {cat.icon === 'Maximize2' && <Maximize2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold block">{cat.title}</span>
                      <span className={`text-[10px] block ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-400'}`}>
                        {cat.itemCount} itens verificados
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Category Items Detail */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HardHat className="w-4 h-4 text-amber-400" />
                <span>Itens Inspecionados em {activeCategory.title}</span>
              </h3>
              <span className="text-xs text-amber-400 font-semibold bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                Laudo Fotográfico Incluso
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeCategory.items.map((item, index) => (
                <div key={index} className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item.name}</span>
                    </h4>
                  </div>
                  
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 flex flex-col space-y-1 text-[11px] text-slate-400">
                    <div>
                      <strong className="text-slate-300">Equipamento/Método:</strong> {item.testMethod}
                    </div>
                    <div>
                      <strong className="text-amber-400">Norma ABNT:</strong> {item.norma}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box inside checklist */}
          <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white">Vai receber seu imóvel nos próximos dias?</h4>
              <p className="text-xs text-slate-300">
                Agende a vistoria de recebimento com nosso engenheiro civil e exija as devidas correções da construtora sem dor de cabeça.
              </p>
            </div>

            <button
              onClick={onOpenQuoteForInspection}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 shrink-0 flex items-center gap-2"
            >
              <ClipboardCheck className="w-4 h-4" />
              <span>Agendar Vistoria de Chaves</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
