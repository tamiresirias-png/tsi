import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  FileText, 
  ShieldCheck, 
  MessageCircle, 
  RefreshCw,
  Building,
  Home,
  HardHat,
  AlertTriangle,
  Award
} from 'lucide-react';

interface ServiceSimulatorProps {
  onOpenQuoteWithDetails: (serviceType: string, note: string) => void;
}

interface ScenarioOption {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  recommendedService: string;
  recommendedServiceId: string;
  timeframe: string;
  steps: string[];
  requiredDocs: string[];
  importanceNote: string;
}

export const SCENARIOS: ScenarioOption[] = [
  {
    id: 'reforma-condominio',
    title: 'Reforma em Apartamento / Condomínio',
    subtitle: 'Vou demolir parede, trocar piso, refazer elétrica ou instalar ar-condicionado',
    icon: 'HardHat',
    recommendedService: 'Emissão de A.R.T. para Reformas (NBR 16280)',
    recommendedServiceId: 'emissao-art-reformas',
    timeframe: '24 a 48 Horas',
    steps: [
      'Análise do projeto ou croqui de reforma pelo Engenheiro',
      'Elaboração do Plano de Reforma ABNT NBR 16280',
      'Emissão e registro da ART no CREA-SP',
      'Entrega do dossiê pronto para assinatura do Síndico'
    ],
    requiredDocs: ['Planta do imóvel ou croqui', 'Descrição das alterações', 'Dados do condomínio'],
    importanceNote: 'Evita multas, embargos do síndico e garante a segurança estrutural do prédio.'
  },
  {
    id: 'recebimento-chaves',
    title: 'Vistoria de Recebimento de Chaves',
    subtitle: 'Vou receber as chaves do meu apartamento ou casa nova da construtora',
    icon: 'Home',
    recommendedService: 'Vistoria de Entrega de Chaves (Checklist 45+ itens)',
    recommendedServiceId: 'vistoria-entrega-chaves',
    timeframe: 'Agendamento em 24h a 48h',
    steps: [
      'Agendamento com o Engenheiro no dia e hora da vistoria',
      'Inspeção com equipamentos técnicos (Laser, nível, detector de tensão)',
      'Teste de escoamento de ralos, prumo de paredes, fiação e revestimentos',
      'Emissão de Laudo Fotográfico exigindo reparos à construtora'
    ],
    requiredDocs: ['Manual do Proprietário', 'Planta Baixa das Instalações', 'Notificação da Construtora'],
    importanceNote: 'Impede que você assuma custos de vícios ocultos de construção que são de responsabilidade da construtora.'
  },
  {
    id: 'construcao-sem-habitese',
    title: 'Imóvel Construído sem Habite-se / Regularização',
    subtitle: 'Tenho casa, prédio ou galpão sem averbação no Cartório ou Prefeitura de SP',
    icon: 'Building',
    recommendedService: 'Regularização de Imóveis & Obtenção de Habite-se',
    recommendedServiceId: 'regularizacao-habite-se',
    timeframe: '15 a 45 dias úteis',
    steps: [
      'Levantamento arquitetônico no local (As-Built a laser)',
      'Verificação da Lei de Zoneamento da PMSP e Código de Obras',
      'Elaboração de memorial técnico e laudo de estabilidade',
      'Tramitação na Prefeitura e emissão do Auto de Conclusão / Habite-se',
      'CND do INSS na Receita Federal e averbação no Cartório de Imóveis'
    ],
    requiredDocs: ['Matrícula do terreno', 'Carnê do IPTU', 'Documentos do proprietário'],
    importanceNote: 'Permite vender com financiamento bancário, evita multas da Prefeitura e valoriza o imóvel em até 40%.'
  },
  {
    id: 'laudo-lta-vigilancia',
    title: 'Laudo Técnico de Avaliação (LTA) - Vigilância Sanitária',
    subtitle: 'Abertura, reforma ou licenciamento de clínica médica/odonto, farmácia, ótica ou comércio na VISA/COVISA',
    icon: 'ShieldCheck',
    recommendedService: 'Laudo Técnico para Vigilância Sanitária (LTA)',
    recommendedServiceId: 'laudos-tecnicos',
    timeframe: '5 a 15 dias úteis',
    steps: [
      'Vistoria técnica presencial para validação de layout, revestimentos laváveis e ventilação',
      'Elaboração do Projeto Arquitetônico Sanitário com setorização e fluxos operacionais',
      'Elaboração do Memorial Descritivo Sanitário e de Atividades',
      'Emissão e registro da ART no CREA-SP e suporte ao protocolo na Vigilância Sanitária'
    ],
    requiredDocs: ['Planta ou croqui do imóvel', 'Relação das atividades / CNAEs', 'Dados da empresa ou responsável'],
    importanceNote: 'Indispensável para emissão e renovação da Licença Sanitária (CMVS), evitando multas gravíssimas e interdição do estabelecimento.'
  },
  {
    id: 'laudo-infiltracao-rachadura',
    title: 'Patologias, Trincas ou Fissuras (Secundário)',
    subtitle: 'Apareceram rachaduras, umidade ou infiltração no imóvel (demanda pontual)',
    icon: 'AlertTriangle',
    recommendedService: 'Laudo Estrutural & Pericial de Engenharia (CREA-SP)',
    recommendedServiceId: 'laudos-tecnicos',
    timeframe: '3 a 7 dias úteis',
    steps: [
      'Vistoria técnica presencial com registro fotográfico macro',
      'Análise de causa raiz da patologia (infiltração, assentamento, carga)',
      'Elaboração do Laudo Pericial com ART registrada perante o CREA',
      'Indicação de medidas de recuperação estrutural'
    ],
    requiredDocs: ['Endereço do imóvel', 'Histórico do surgimento das falhas'],
    importanceNote: 'Laudo com fé pública para respaldo contra condomínio, construtora ou vizinhos.'
  },
  {
    id: 'acompanhamento-obras',
    title: 'Acompanhamento & Gestão de Obra',
    subtitle: 'Preciso de fiscalização de engenharia para reforma ou construção civil em SP',
    icon: 'HardHat',
    recommendedService: 'Acompanhamento & Gerenciamento de Obras',
    recommendedServiceId: 'gerenciamento-acompanhamento-obras',
    timeframe: 'Conforme o cronograma da obra',
    steps: [
      'Alinhamento do cronograma físico-financeiro e projetos aprovados',
      'Visitas periódicas de fiscalização no canteiro de obras',
      'Conferência do prumo, nível, qualidade de materiais e medições',
      'Emissão de Diário de Obra e relatórios técnicos de evolução'
    ],
    requiredDocs: ['Projetos executivos', 'Contrato com empreiteiras', 'Cronograma da obra'],
    importanceNote: 'Garante economia de até 30% contra retrabalhos, cumprimento de prazos e fidelidade de acabamento.'
  },
  {
    id: 'projetos-construcao',
    title: 'Elaboração de Projetos de Engenharia & Arquitetura',
    subtitle: 'Vou construir ou ampliar e preciso de projetos para aprovação na Prefeitura',
    icon: 'FileText',
    recommendedService: 'Projetos de Engenharia Civil & Arquitetura',
    recommendedServiceId: 'projetos-engenharia-arquitetura',
    timeframe: '10 a 30 dias úteis',
    steps: [
      'Estudo de viabilidade urbanística e zoneamento na PMSP',
      'Desenvolvimento do Projeto Arquitetônico Legal e Executivo',
      'Cálculo Estrutural e Projetos Elétricos/Hidrossanitários',
      'Compatibilização multidisciplinar e emissão das ARTs no CREA-SP'
    ],
    requiredDocs: ['Matrícula atualizada', 'Topografia do lote', 'Necessidades do cliente'],
    importanceNote: 'Elimina desperdícios de materiais, evita erros no canteiro e garante aprovação célere na Prefeitura.'
  }
];

export const ServiceSimulator: React.FC<ServiceSimulatorProps> = ({ onOpenQuoteWithDetails }) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('reforma-condominio');
  const [propertyType, setPropertyType] = useState<string>('Apartamento');
  const [city, setCity] = useState<string>('São Paulo');

  const selectedScenario = SCENARIOS.find(s => s.id === selectedScenarioId) || SCENARIOS[0];

  const handleWhatsAppShare = () => {
    const text = `Olá TSI Engenharia! Fiz a simulação no site para o cenário *${selectedScenario.title}* em *${city}* (${propertyType}). Gostaria de dar andamento para o serviço *${selectedScenario.recommendedService}*.`;
    window.open(COMPANY_INFO.getWhatsappUrl(text), '_blank');
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Interativo de Engenharia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Descubra a <span className="text-amber-400">Solução Técnica Ideal</span> para o seu Imóvel
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Selecione qual a sua situação atual para ver o passo a passo técnico, prazos, documentos exigidos e orientações do engenheiro responsável.
          </p>
        </div>

        {/* Wizard Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step 1: Scenario Selection */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400" /> 1. Qual o seu caso atual?
            </h3>

            {SCENARIOS.map((scenario) => {
              const isSelected = scenario.id === selectedScenarioId;
              return (
                <div
                  key={scenario.id}
                  onClick={() => setSelectedScenarioId(scenario.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start space-x-3.5 ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {scenario.icon === 'HardHat' && <HardHat className="w-5 h-5" />}
                    {scenario.icon === 'Home' && <Home className="w-5 h-5" />}
                    {scenario.icon === 'Building' && <Building className="w-5 h-5" />}
                    {scenario.icon === 'AlertTriangle' && <AlertTriangle className="w-5 h-5" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                        {scenario.title}
                      </h4>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">
                      {scenario.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Additional parameters selection */}
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3 mt-4">
              <h4 className="text-xs font-bold text-slate-300">2. Detalhes Básicos:</h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Tipo de Imóvel</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Apartamento">Apartamento em Condomínio</option>
                    <option value="Casa">Casa Residencial</option>
                    <option value="Comercial">Sala Comercial / Loja</option>
                    <option value="Galpão">Galpão / Indústria</option>
                    <option value="Terreno">Terreno / Lote</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Cidade / Região</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Porto Alegre">Porto Alegre</option>
                    <option value="Canoas">Canoas</option>
                    <option value="Caxias do Sul">Caxias do Sul</option>
                    <option value="Novo Hamburgo">Novo Hamburgo</option>
                    <option value="São Leopoldo">São Leopoldo</option>
                    <option value="Outra Cidade">Outra Cidade / RS</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Step 2: Instant Solution Breakdown */}
          <div className="lg:col-span-7 bg-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 relative shadow-2xl">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400 block">
                  Recomendação Técnica TSI
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedScenario.recommendedService}
                </h3>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl text-center shrink-0">
                <Clock className="w-4 h-4 text-amber-400 mx-auto" />
                <span className="text-[10px] text-slate-400 block mt-1">Prazo Estimado</span>
                <span className="text-xs font-bold text-white">{selectedScenario.timeframe}</span>
              </div>
            </div>

            {/* Importance Note */}
            <div className="bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-xl flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-200 leading-relaxed">
                <strong className="text-amber-400 font-bold">Por que é indispensável: </strong>
                {selectedScenario.importanceNote}
              </p>
            </div>

            {/* Steps Workflow */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Etapas do Processo de Engenharia:
              </h4>
              <div className="space-y-2">
                {selectedScenario.steps.map((step, idx) => (
                  <div key={idx} className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-start space-x-3 text-xs text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-400" /> Documentos Necessários:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedScenario.requiredDocs.map((doc, idx) => (
                  <span key={idx} className="bg-slate-950 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-md">
                    • {doc}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions for this scenario */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenQuoteWithDetails(
                  selectedScenario.recommendedServiceId, 
                  `Simulação realizada no site para ${selectedScenario.title} (${propertyType} em ${city})`
                )}
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm py-3 px-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4" />
                <span>Solicitar Proposta para este Serviço</span>
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-4 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar no WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
