import { PortfolioItem } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'case-1',
    title: 'Regularização de Galpão Comercial de 1.200m²',
    category: 'Regularização',
    clientType: 'Empresa de Logística',
    location: 'Porto Alegre - RS',
    badge: 'Habite-se Concedido',
    description: 'Regularização completa de imóvel comercial construído sem projeto aprovado prévio, incluindo adequações de acessibilidade e segurança contra incêndio.',
    challenge: 'A edificação possuía ampliações não registradas há mais de 10 anos, gerando notificações municipais e impedimento para obter Alvará de Funcionamento.',
    solution: 'Realizamos levantamento As-Built com scanner laser, elaborado laudo de estabilidade estrutural, projeto PPCI aprovado nos Bombeiros e protocolo na Secretaria de Obras.',
    results: [
      'Habite-se aprovado em tempo recorde (28 dias)',
      'Emissão do Alvará de Funcionamento Comercial',
      'Economia de R$ 35.000 em multas administrativas',
      'Averbação concluída no Cartório de Imóveis'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'case-2',
    title: 'Vistoria de Recebimento de Apartamento de Alto Padrão',
    category: 'Vistoria de Chaves',
    clientType: 'Proprietário Residencial',
    location: 'Caxias do Sul - RS',
    badge: '32 Pendências Corrigidas',
    description: 'Inspeção técnica detalhada de entrega de chaves em apartamento novo de 180m² entregue pela construtora.',
    challenge: 'O cliente identificou pequenos detalhes estéticos, mas desconhecia falhas técnicas graves no caimento de água da varanda gourmet e falhas de isolamento no quadro elétrico.',
    solution: 'Nossa equipe aplicou o checklist NBR 15575 com teste de estanqueidade, termografia infravermelha e teste de pressão de água, gerando relatório de 24 páginas com fotos.',
    results: [
      'Detecção de infiltração oculta no duto de ar condicionado',
      'Construtora aceitou o laudo sem contestação e refez os revestimentos',
      'Economia estimada de R$ 18.000 em reparos futuros para o cliente'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'case-3',
    title: 'Emissão de ART & Gestão de Reforma em Condomínio',
    category: 'ART & Acompanhamento',
    clientType: 'Condomínio Residencial / Proprietário',
    location: 'Canoas - RS',
    badge: 'NBR 16280 Aprovada',
    description: 'Planejamento e emissão de ART para integração de varanda gourmet, remoção de alvenaria não estrutural e reforço de carga em apartamento.',
    challenge: 'O síndico exigia laudo estrutural e plano de reforma rigoroso sob ameaça de embargo da obra.',
    solution: 'Realizamos avaliação da estrutura do edifício, elaboração do Plano de Reforma ABNT NBR 16280 com ART registrada no CREA e acompanhamento da demolição controlada.',
    results: [
      'Aprovação pelo síndico em 24h sem pendências',
      'Garantia de segurança estrutural para todos os condôminos',
      'Obra concluída dentro do prazo e sem ruídos fora do horário'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'case-4',
    title: 'Laudo Pericial de Estabilidade em Prédio de 8 Andares',
    category: 'Laudo Pericial',
    clientType: 'Administradora de Condomínios',
    location: 'Novo Hamburgo - RS',
    badge: 'Segurança Garantida',
    description: 'Laudo de inspeção predial cautelar para identificação de fissuras e patologias na fachada e pilotis do edifício.',
    challenge: 'Surgimento de trincas na garagem subterrânea gerou alarme entre os moradores sobre risco de desabamento.',
    solution: 'Instalação de fissurômetros de precisão, testes no concreto e emissão de laudo técnico atestando a integridade e orientando a recuperação superficial com manta impermeabilizante.',
    results: [
      'Esclarecimento técnico e tranquilidade para os condôminos',
      'Plano de manutenção preventiva de 5 anos elaborado',
      'Apresentação em assembleia de condomínio pelo engenheiro responsável'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Dr. Fernando Mendonça',
    role: 'Advogado Imobiliário',
    text: 'Trabalho com a TSI Engenharia há mais de 3 anos em processos de regularização e Usucapião. A precisão dos laudos periciais e a rapidez na entrega do As-Built fazem toda a diferença nos processos judiciais e cartorários.',
    rating: 5,
    location: 'Porto Alegre'
  },
  {
    name: 'Carolina Vianna',
    role: 'Proprietária de Apartamento',
    text: 'Contratei a TSI para a vistoria de entrega de chaves do meu apartamento novo. Eles encontraram vícios no contrapiso e infiltração na varanda que eu jamais perceberia sozinha. A construtora refez tudo graças ao laudo excelente da TSI!',
    rating: 5,
    location: 'Canoas'
  },
  {
    name: 'Marcelo Siqueira',
    role: 'Síndico Profissional',
    text: 'A TSI é minha parceira oficial para a validação de ARTs de reforma NBR 16280 nos condomínios que administro. Agilidade, seriedade e respaldo técnico com o CREA. Recomendo de olhos fechados.',
    rating: 5,
    location: 'Novo Hamburgo'
  }
];
