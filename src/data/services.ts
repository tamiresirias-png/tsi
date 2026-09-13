import { ServiceItem } from '../types';

export const ENGINEERING_SERVICES: ServiceItem[] = [
  {
    id: 'regularizacao-imoveis',
    category: 'regularizacao',
    title: 'Regularização de imóveis',
    shortDescription: 'Regularização documental e técnica de imóveis, com orientação sobre as etapas necessárias para adequação e aprovação.',
    fullDescription: 'Atuação técnica e documental completa para regularização de imóveis residenciais, comerciais e industriais perante prefeituras, órgãos públicos e Cartórios de Registro de Imóveis. Realizamos levantamento arquitetônico cadastral (as-built), análise de conformidade urbanística, obtenção de Certidão de Habite-se / Auto de Conclusão e averbação em matrícula.',
    iconName: 'FileCheck',
    badge: 'Conformidade & Habite-se',
    normaRef: 'Código de Obras Municipal e Legislação Urbanística',
    estimatedTime: 'Conforme trâmite municipal',
    highlights: [
      'Levantamento cadastral no local com medição precisa',
      'Diagnóstico da conformidade urbanística e recuos obrigatórios',
      'Elaboração de plantas, memoriais descritivos e peças técnicas',
      'Protocolo e acompanhamento do processo administrativo',
      'Averbação da área construída no Cartório de Registro de Imóveis'
    ],
    deliverables: [
      'Planta Baixa Aprovada pelo Órgão Municipal',
      'Auto de Conclusão / Certidão de Habite-se Emitido',
      'ART (Anotação de Responsabilidade Técnica) Registrada no CREA',
      'Orientações para averbação na Matrícula Imobiliária'
    ],
    whatItInvolves: [
      'Vistoria técnica presencial com medição cadastral (As-Built) do imóvel;',
      'Confrontação das construções existentes com a documentação do lote e histórico do IPTU;',
      'Análise do enquadramento na Lei de Uso e Ocupação do Solo e Código de Obras;',
      'Elaboração dos desenhos técnicos, memoriais e formulários de regularização;',
      'Instrução e acompanhamento de processo administrativo até a expedição do Habite-se.'
    ],
    benefits: [
      'Segurança jurídica incontestável sobre a titularidade e legalidade da construção;',
      'Valorização imediata do imóvel no mercado imobiliário;',
      'Possibilidade de venda financiada por instituições bancárias e uso do FGTS;',
      'Eliminação de multas municipais, notificações e riscos de embargo;',
      'Facilidade em processos de inventário, partilha e sucessão familiar.'
    ],
    whenNeeded: [
      'Imóvel construído sem planta aprovada ou alvará prévio;',
      'Reformas que ampliaram a área construída (novos pavimentos, coberturas, garagens);',
      'Imóvel sem Certidão de Habite-se / Auto de Conclusão;',
      'Exigência bancária para concessão de financiamento imobiliário ao comprador;',
      'Necessidade de registrar a edificação na matrícula do Cartório de Registro de Imóveis.'
    ]
  },
  {
    id: 'desdobro-de-lote',
    category: 'assessoria',
    title: 'Desdobro de lote',
    shortDescription: 'Assessoria técnica para processos de desdobro, divisão e regularização de lotes.',
    fullDescription: 'Assessoria e execução técnica especializada para a divisão (desdobro) ou unificação de lotes urbanos. Conduzimos a elaboração de plantas topográficas, memoriais descritivos e trâmites junto à Prefeitura e ao Cartório de Registro de Imóveis, assegurando que cada fração atenda às dimensões mínimas, frentes e recuos exigidos pela legislação.',
    iconName: 'SplitSquareVertical',
    badge: 'Divisão de Terrenos',
    normaRef: 'Lei de Parcelamento do Solo Urbano nº 6.766 e Plano Diretor',
    estimatedTime: '20 a 45 dias úteis',
    highlights: [
      'Levantamento planimétrico e delimitação precisa de divisas',
      'Cálculo de testadas mínimas e áreas conforme zoneamento',
      'Elaboração de memoriais tabulares de confrontação',
      'Aprovação na Prefeitura e emissão de alvará de desdobro',
      'Apoio técnico para abertura de novas matrículas no Cartório'
    ],
    deliverables: [
      'Planta de Desdobro Aprovada pela Prefeitura',
      'Memorial Descritivo Individualizado de cada Novo Lote',
      'Certidão de Desdobro / Diretriz Urbanística Oficial',
      'ART de Desdobro e Levantamento Registrada no CREA'
    ],
    whatItInvolves: [
      'Medição técnica in loco para conferência das medidas reais do terreno;',
      'Estudo de viabilidade de parcelamento conforme a Lei de Zoneamento local;',
      'Desenho das plantas das áreas remanescentes e dos novos lotes desdobrados;',
      'Montagem do processo de parcelamento do solo e protocolo municipal;',
      'Acompanhamento das análises técnicas até o despacho deferitório final.'
    ],
    benefits: [
      'Individualização de matrículas independentes para cada fração do terreno;',
      'Viabilização de venda de parte do terreno com escritura definitiva individualizada;',
      'Independência fiscal com geração de carnês de IPTU separados para cada lote;',
      'Desbloqueio de aprovação de novos projetos construtivos independentes;',
      'Resolução de heranças e partilhas entre coproprietários.'
    ],
    whenNeeded: [
      'Proprietário que deseja vender ou construir em metade do terreno;',
      'Imóveis com duas ou mais casas no mesmo lote que necessitam de separação formal;',
      'Partilha amigável de imóveis em processos de herança ou dissolução conjugal;',
      'Adequação de divisas e confrontações para novos empreendimentos.'
    ]
  },
  {
    id: 'projetos',
    category: 'projetos',
    title: 'Projetos',
    shortDescription: 'Elaboração e acompanhamento de projetos necessários para aprovação, regularização e execução.',
    fullDescription: 'Desenvolvimento e acompanhamento de projetos de engenharia civil e arquitetura: legal (para aprovação em órgãos municipais), executivo e complementares (estrutural, hidrossanitário, elétrico e prevenção a incêndio). Projetamos visando à eficiência construtiva, otimização de materiais e total conformidade com as normas técnicas vigentes.',
    iconName: 'Ruler',
    badge: 'Legal & Executivo',
    normaRef: 'Normas Técnicas da ABNT e Códigos Municipais',
    estimatedTime: '15 a 35 dias úteis',
    highlights: [
      'Projeto Arquitetônico Legal para aprovação na Prefeitura',
      'Projeto Executivo com caderno detalhado de medidas e cotas',
      'Projetos Complementares: Estrutural, Elétrico e Hidráulico',
      'Compatibilização entre disciplinas para evitar retrabalhos',
      'Especificação de materiais e diretrizes para execução'
    ],
    deliverables: [
      'Pranchas Técnicas Completas em PDF e DWG (Plantas, Cortes, Fachadas)',
      'Memoriais Descritivos e Memórias de Cálculo',
      'Especificações Técnicas de Materiais e Equipamentos',
      'ART de Autoria e Responsabilidade Técnica Registrada no CREA'
    ],
    whatItInvolves: [
      'Briefing com o cliente para levantamento de premissas, necessidades e orçamento;',
      'Estudo de massa, zoneamento, recuos obrigatórios e coeficiente de aproveitamento;',
      'Desenvolvimento do projeto preliminar, anteprojeto e projeto legal;',
      'Dimensionamento técnico das disciplinas complementares;',
      'Compatibilização de projetos para eliminar interferências físicas em obra.'
    ],
    benefits: [
      'Aprovação ágil perante a Prefeitura, sem devoluções por inconsistências;',
      'Economia de até 25% na obra através de dimensionamento preciso de insumos;',
      'Prevenção de falhas construtivas, fissuras, furos indevidos e sobrecargas;',
      'Clareza total para empreiteiras e fornecedores cotarem e executarem o serviço;',
      'Valorização estética e funcional do espaço edificado.'
    ],
    whenNeeded: [
      'Construção de nova residência, edifício comercial ou galpão;',
      'Ampliação de área construída ou acréscimo de pavimentos;',
      'Reformas com alteração estrutural ou redistribuição de ambientes;',
      'Requisito obrigatório para solicitação de Alvará de Construção.'
    ]
  },
  {
    id: 'laudos-tecnicos',
    category: 'laudos',
    title: 'Laudos Técnicos para Vigilância Sanitária (LTA)',
    shortDescription: 'Elaboração de Laudo Técnico de Avaliação (LTA), projetos arquitetônicos sanitários, memoriais de fluxo e adequações para aprovação na Vigilância Sanitária (COVISA/VISA). Laudos periciais e estruturais complementares.',
    fullDescription: 'Atuação técnica especializada na elaboração e aprovação do Laudo Técnico de Avaliação (LTA) perante a Vigilância Sanitária municipal e estadual (COVISA / VISA / CVS). Desenvolvemos o Projeto Arquitetônico Sanitário completo, mapeamento de fluxos operacionais (pessoas, matérias-primas, produtos, esterilização e resíduos sólidos de saúde - RSS), memorial descritivo de atividades e acabamentos laváveis, adequação física de ambientes e emissão de ART no CREA-SP. Atendemos clínicas médicas e odontológicas, drogarias e farmácias de manipulação, laboratórios, estética, cozinhas industriais, distribuidoras e indústrias.\n\nEm segundo plano e como serviço complementar sob demanda, também realizamos laudos periciais e pareceres estruturais de patologias construtivas (trincas, infiltrações e estabilidade estrutural).',
    iconName: 'ClipboardList',
    badge: 'Vigilância Sanitária (LTA)',
    normaRef: 'Portaria CVS / Legislação Sanitária (COVISA & Anvisa) • CREA-SP',
    estimatedTime: '5 a 15 dias úteis para elaboração',
    highlights: [
      'Elaboração completa do Laudo Técnico de Avaliação (LTA) para Vigilância Sanitária',
      'Projeto Arquitetônico Sanitário com setorização e fluxos operacionais sem cruzamentos',
      'Memorial Descritivo Sanitário e especificação de acabamentos, iluminação e ventilação',
      'Acompanhamento das exigências e comunique-se até a aprovação da Licença Sanitária',
      'ART de Responsabilidade Técnica registrada perante o CREA-SP',
      'Pareceres estruturais e laudos de patologias construtivas disponíveis em segundo plano'
    ],
    deliverables: [
      'Laudo Técnico de Avaliação (LTA) Completo e Fundamentado',
      'Pranchas de Projeto Arquitetônico Sanitário com Layout e Fluxogramas',
      'Memorial Descritivo de Atividades e Memorial das Instalações Sanitárias',
      'ART (Anotação de Responsabilidade Técnica) Registrada no CREA-SP',
      'Suporte técnico no protocolo e atendimento de comunique-se na Vigilância Sanitária'
    ],
    whatItInvolves: [
      'Vistoria técnica in loco para conferência das medidas, layout, revestimentos e ventilação;',
      'Estudo dos fluxos de trabalho para evitar contaminações cruzadas conforme a atividade;',
      'Desenho do projeto arquitetônico sanitário em pranchas técnicas regulamentares;',
      'Redação detalhada do memorial descritivo sanitário e especificação de materiais;',
      'Emissão e registro da ART no CREA-SP e orientação para o protocolo do LTA.'
    ],
    benefits: [
      'Obtenção e renovação da Licença de Funcionamento Sanitária (CMVS / CEVS);',
      'Impedimento de multas gravíssimas, notificações e interdição do estabelecimento;',
      'Aprovação célere através de projetos e laudos em estrita conformidade com a VISA;',
      'Adequação correta sem desperdício de recursos em reformas desnecessárias;',
      'Tranquilidade técnica perante conselhos de classe (CRM, CRO, CRF) e órgãos reguladores.'
    ],
    whenNeeded: [
      'Abertura, mudança de endereço ou ampliação de clínicas médicas, odontológicas ou veterinárias;',
      'Instalação de drogarias, farmácias de manipulação ou distribuidoras de produtos de saúde;',
      'Adequação sanitária de laboratórios de análises clínicas, óticas e clínicas de estética;',
      'Exigência da Vigilância Sanitária para cozinhas industriais, restaurantes e indústrias de alimentos;',
      'Notificação ou fiscalização da COVISA/VISA exigindo regularização do LTA e projeto sanitário;',
      'Necessidade secundária de laudo pericial para patologias, trincas ou vistoria cautelar.'
    ]
  },
  {
    id: 'avcb-clcb',
    category: 'licenciamento',
    title: 'AVCB e CLCB',
    shortDescription: 'Assessoria técnica para processos relacionados à segurança contra incêndio e regularização junto ao Corpo de Bombeiros.',
    fullDescription: 'Assessoria técnica especializada em Segurança Contra Incêndio e Pânico perante o Corpo de Bombeiros da Polícia Militar (CBPMESP). Cuidamos da elaboração do Projeto Técnico de Proteção Contra Incêndio, especificação dos equipamentos obrigatórios (extintores, iluminação de emergência, hidrantes, sinalização e alarmes), vistorias prévias e emissão ou renovação do AVCB e CLCB.',
    iconName: 'ShieldAlert',
    badge: 'Corpo de Bombeiros',
    normaRef: 'Instruções Técnicas do Corpo de Bombeiros e Decreto Estadual',
    estimatedTime: '10 a 25 dias úteis',
    highlights: [
      'Elaboração de Projeto Técnico Simplificado (PTS) ou Completo (PT)',
      'Inspeção prévia in loco de todos os sistemas preventivos',
      'Emissão de laudos de elétrica, gás e instalações preventivas com ART',
      'Protocolo e acompanhamento no sistema Via Fácil Bombeiros',
      'Acompanhamento presencial da vistoria oficial dos Bombeiros'
    ],
    deliverables: [
      'Auto de Vistoria do Corpo de Bombeiros (AVCB) ou CLCB Aprovado',
      'Pranchas do Projeto de Incêndio Aprovadas',
      'Laudos Técnicos e ARTs Específicas Registradas no CREA',
      'Checklist de Manutenção Preventiva Periódica'
    ],
    whatItInvolves: [
      'Avaliação da carga de incêndio, área, altura e ocupação da edificação;',
      'Dimensionamento dos itens de segurança exigidos pelas Instruções Técnicas;',
      'Vistoria de funcionamento de extintores, bombas, alarmes e rotas de fuga;',
      'Montagem do processo e inserção das ARTs no portal dos Bombeiros;',
      'Acompanhamento das etapas até o deferimento e emissão do certificado.'
    ],
    benefits: [
      'Garantia irrestrita da segurança física de moradores, clientes e colaboradores;',
      'Condição indispensável para emissão e renovação de Alvará de Funcionamento;',
      'Validade integral de apólices de seguro predial e patrimonial;',
      'Prevenção de multas graves, notificações e interdições de estabelecimentos;',
      'Tranquilidade jurídica e operacional para síndicos e administradores.'
    ],
    whenNeeded: [
      'Construção nova ou reforma de edifícios comerciais, residenciais ou galpões;',
      'Abertura ou regularização de estabelecimentos comerciais, clínicas ou escolas;',
      'Vencimento da validade do AVCB ou CLCB do imóvel;',
      'Adequação de rotas de fuga, saídas de emergência e portas corta-fogo.'
    ]
  },
  {
    id: 'usucapiao',
    category: 'regularizacao',
    title: 'Usucapião',
    shortDescription: 'Apoio técnico e documentação necessária para processos de usucapião.',
    fullDescription: 'Apoio técnico de engenharia para subsidiar procedimentos de usucapião judicial ou extrajudicial perante Cartórios de Notas e Registro de Imóveis. Realizamos o levantamento topográfico planimétrico cadastral, memorial descritivo minucioso com coordenadas georreferenciadas, planta de situação, identificação de confrontantes e laudo de constatação de posse.',
    iconName: 'ScrollText',
    badge: 'Apoio Jurídico & Cartório',
    normaRef: 'Lei de Registros Públicos nº 6.015 e Provimento CNJ nº 65',
    estimatedTime: '10 a 20 dias úteis',
    highlights: [
      'Levantamento topográfico planimétrico com amarração de coordenadas',
      'Elaboração de planta perimétrica e memorial descritivo tabular',
      'Identificação precisa de todos os imóveis e proprietários confrontantes',
      'Laudo técnico de constatação de posse, benfeitorias e tempo de ocupação',
      'Compatibilidade técnica com as exigências dos Cartórios e juizados'
    ],
    deliverables: [
      'Planta Georreferenciada para Ação de Usucapião',
      'Memorial Descritivo Tabular Rigoroso com Confrontações',
      'Laudo Técnico de Caracterização e Benfeitorias',
      'ART de Levantamento Topográfico Registrada no CREA'
    ],
    whatItInvolves: [
      'Vistoria minuciosa e medição topográfica com equipamentos de alta precisão;',
      'Levantamento das características construtivas, idade aparente e benfeitorias;',
      'Confrontação das divisas físicas com as descrições dos registros vizinhos;',
      'Elaboração do memorial técnico segundo o padrão exigido pelas normas da CGJ;',
      'Interlocução técnica direta com o advogado ou defensor do caso.'
    ],
    benefits: [
      'Base técnica sólida para evitar exigências cartorárias e indeferimentos;',
      'Agilização da obtenção do título de propriedade e escritura definitiva;',
      'Delimitação inequívoca do perímetro, prevenindo conflitos com vizinhos;',
      'Transformação da mera posse em propriedade legal registrada com matrícula própria;',
      'Aumento expressivo do valor de mercado e liquidez do imóvel.'
    ],
    whenNeeded: [
      'Imóvel ocupado de forma mansa e pacífica sem escritura ou matrícula formal;',
      'Contratos de gaveta ou recibos antigos de compra e venda pendentes de regularização;',
      'Necessidade de instruir ação de usucapião judicial ou extrajudicial em cartório;',
      'Solicitação formal do advogado para elaboração da planta e memorial técnico.'
    ]
  },
  {
    id: 'emissao-art',
    category: 'engenharia',
    title: 'Emissão de ART',
    shortDescription: 'Emissão de Anotação de Responsabilidade Técnica para serviços e atividades de engenharia.',
    fullDescription: 'Emissão ágil e responsável de Anotação de Responsabilidade Técnica (ART) junto ao CREA, acompanhada de laudos técnicos, planos de reforma e atestados de conformidade para obras, reformas em apartamentos e instalações comerciais. Garantimos a legalidade dos serviços, o respaldo técnico profissional e o atendimento às normas de reforma (como a ABNT NBR 16280).',
    iconName: 'Award',
    badge: 'CREA • Agilidade',
    normaRef: 'ABNT NBR 16280 e Normativas do CREA',
    estimatedTime: '24 a 48 horas',
    highlights: [
      'Análise prévia do escopo de serviços e intervenções pretendidas',
      'Avaliação de possíveis interferências em alvenarias e sistemas prediais',
      'Elaboração do Plano de Reforma detalhado assinado por Engenheiro Civil',
      'Emissão e recolhimento tempestivo da ART no sistema do CREA',
      'Suporte técnico para liberação de início de obra com síndicos e condomínios'
    ],
    deliverables: [
      'ART (Anotação de Responsabilidade Técnica) Registrada e Quitada',
      'Plano de Reforma conforme NBR 16280 assinado por Engenheiro',
      'Declaração Técnica de Conformidade para Apresentação ao Condomínio'
    ],
    whatItInvolves: [
      'Recebimento e triagem do memorial de serviços e projetos da reforma;',
      'Conferência da integridade estrutural e ausência de riscos para o condomínio;',
      'Preenchimento das atividades técnicas no portal do CREA;',
      'Emissão do boleto, confirmação de quitação e geração do documento autenticado;',
      'Atendimento a eventuais dúvidas ou esclarecimentos solicitados pela administração.'
    ],
    benefits: [
      'Liberação rápida dos prestadores de serviço e início das obras sem atrasos;',
      'Total proteção jurídica do proprietário contra penalidades e embargos pelo síndico;',
      'Certificação de que a intervenção respeita a segurança estrutural do edifício;',
      'Formalização da responsabilidade técnica perante os órgãos de fiscalização;',
      'Atendimento pontual com agilidade para demandas urgentes de cronograma.'
    ],
    whenNeeded: [
      'Reformas em condomínios edilícios (apartamentos ou salas comerciais);',
      'Abertura de vãos em paredes, troca de revestimentos, modificação de layout;',
      'Instalação de ar-condicionado, fechamento de sacadas ou sobrecargas de piso;',
      'Instalações elétricas, hidrossanitárias ou substituição de tubulações de gás;',
      'Exigência formal da administração predial antes de permitir a entrada de operários.'
    ]
  },
  {
    id: 'acompanhamento-obras',
    category: 'engenharia',
    title: 'Acompanhamento de obras',
    shortDescription: 'Acompanhamento técnico da execução, verificando etapas, qualidade, conformidade e evolução dos serviços.',
    fullDescription: 'Acompanhamento e fiscalização técnica presencial da execução de construções e reformas civis. O engenheiro atua como os olhos técnicos do cliente no canteiro de obras, verificando se a mão de obra segue fielmente os projetos aprovados, as boas práticas da engenharia, o controle de qualidade dos materiais e o cronograma físico estabelecido.',
    iconName: 'HardHat',
    badge: 'Fiscalização Presencial',
    normaRef: 'Normas Técnicas da ABNT e Boas Práticas Construtivas',
    estimatedTime: 'Durante o período da obra',
    highlights: [
      'Visitas periódicas programadas para inspeção no canteiro',
      'Verificação do cumprimento das especificações de projeto',
      'Controle do alinhamento, prumo, nível, traços e cura de materiais',
      'Relatórios periódicos ilustrados de evolução dos serviços',
      'Suporte técnico na tomada de decisões e resolução de imprevistos'
    ],
    deliverables: [
      'Relatórios Técnicos Periódicos de Evolução com Fotos',
      'Diário de Obra com Registro de Ocorrências e Orientações',
      'Checklists de Verificação de Etapas Executadas',
      'Atestado Técnico de Conformidade na Conclusão'
    ],
    whatItInvolves: [
      'Inspeção presencial dos métodos construtivos e materiais empregados;',
      'Conferência milimétrica das cotas, esquadros e armaduras antes da concretagem;',
      'Fiscalização de impermeabilizações e testes de estanqueidade preventiva;',
      'Orientação aos mestres de obras e empreiteiros sobre correções necessárias;',
      'Emissão de relatórios claros para o proprietário acompanhar o progresso real.'
    ],
    benefits: [
      'Redução de desperdícios, retrabalhos e custos desnecessários em obra;',
      'Garantia de que a execução reflete a qualidade dos projetos contratados;',
      'Cumprimento rigoroso do cronograma, evitando prorrogações sem motivo;',
      'Tranquilidade para quem não tem tempo ou domínio técnico para fiscalizar pedreiros;',
      'Prevenção de vícios construtivos futuros (infiltrações, fissuras, desníveis).'
    ],
    whenNeeded: [
      'Construção de casas, sobrados ou reformas residenciais de médio e grande porte;',
      'Execução de reformas comerciais onde o prazo de abertura é crucial;',
      'Obras prediais em condomínios (recuperação de fachada, reformas de áreas comuns);',
      'Proprietários que residem longe da obra ou trabalham em horário integral.'
    ]
  },
  {
    id: 'vistoria-chaves',
    category: 'vistorias',
    title: 'Vistoria de entrega de chaves',
    shortDescription: 'Vistoria técnica para identificação de possíveis problemas, pendências, acabamentos e não conformidades em imóveis novos ou usados.',
    fullDescription: 'Vistoria técnica especializada e independente realizada antes do aceite definitivo do imóvel novo entregue pela construtora ou na locação/aquisição de usados. Inspecionamos minuciosamente o caimento de ralos, nivelamento de contrapiso, esquadrias, portas, tomadas elétricas, instalações hidráulicas e peças cerâmicas ocas ou trincadas, emitindo laudo conclusivo para exigir os reparos devidos da construtora.',
    iconName: 'CheckSquare',
    badge: 'Checklist Completo',
    normaRef: 'ABNT NBR 15575 (Norma de Desempenho) e NBR 13752',
    estimatedTime: 'Laudo emitido em até 48h',
    highlights: [
      'Auditoria técnica presencial com trena laser, nível óptico e detector elétrico',
      'Inspeção detalhada de contrapisos, caimentos em banheiros e sacadas',
      'Teste de percussão em pisos e revestimentos para detecção de peças ocas',
      'Conferência de funcionamento de portas, fechaduras, janelas e vedações',
      'Relatório fotográfico ilustrado com notificação formal das inconformidades'
    ],
    deliverables: [
      'Laudo Fotográfico Técnico de Vistoria de Recebimento',
      'Relatório de Não Conformidades para Notificação da Construtora',
      'Termo de Vistoria com Parecer de Aceite ou Recusa Fundamentado'
    ],
    whatItInvolves: [
      'Acompanhamento do comprador no dia agendado pela construtora;',
      'Aplicação de roteiro metódico de checagem com mais de 45 itens técnicos;',
      'Testes elétricos em todas as tomadas e pontos de iluminação;',
      'Testes hidráulicos de vazão, escoamento e verificação de sifões e ralos;',
      'Verificação do padrão de acabamento e atendimento ao memorial descritivo da compra.'
    ],
    benefits: [
      'Garantia de que a construtora arque com 100% dos reparos necessários;',
      'Prevenção de custos imprevistos logo após a compra do imóvel;',
      'Evita que defeitos de construção prejudiquem a instalação de móveis planejados;',
      'Fundamentação técnica irrefutável para recusar as chaves até a correção;',
      'Segurança e tranquilidade na realização do sonho do imóvel próprio.'
    ],
    whenNeeded: [
      'Convocação da construtora para vistoria de entrega de apartamento ou sala comercial;',
      'Segunda vistoria (re-vistoria) para verificar se as pendências foram sanadas;',
      'Recebimento de imóvel novo construído por empreiteira em condomínio fechado;',
      'Vistoria de entrada ou saída em locações comerciais ou residenciais.'
    ]
  }
];

export const ADVISORY_SERVICE_ITEM: ServiceItem = {
  id: 'assessoria-administrativa',
  category: 'assessoria',
  title: 'Assessoria administrativa',
  shortDescription: 'Apoio administrativo e financeiro para micro e pequenas empresas que buscam organização, rotinas e controle da gestão.',
  fullDescription: 'Assessoria administrativa e financeira para micro e pequenas empresas, prestadores de serviços e profissionais liberais que precisam de mais organização, controle e acompanhamento da gestão. Estruturamos rotinas operacionais, organizamos o fluxo de caixa, contas a pagar e receber, padronizamos processos internos e acompanhamos indicadores para que você tenha clareza dos números e tempo para focar no seu negócio.',
  iconName: 'Briefcase',
  badge: 'Serviço Complementar',
  normaRef: 'Gestão Empresarial & Rotinas Administrativas',
  estimatedTime: 'Acompanhamento contínuo ou pontual',
  highlights: [
    'Estruturação de rotinas operacionais e administrativas',
    'Organização financeira e conciliação de fluxo de caixa',
    'Controle rigoroso de contas a pagar e receber',
    'Mapeamento e padronização de processos operacionais',
    'Indicadores de desempenho e acompanhamento de resultados'
  ],
  deliverables: [
    'Diagnóstico Operacional e Financeiro Inicial',
    'Estruturação do Fluxo de Caixa e Rotinas Financeiras',
    'Controle e Cronograma de Contas a Pagar e Receber',
    'Mapeamento de Processos e Procedimentos Padrão',
    'Relatórios Periódicos de Indicadores e Resultados'
  ],
  whatItInvolves: [
    'Mapeamento das tarefas administrativas e identificação de gargalos operacionais;',
    'Classificação e conciliação das entradas e saídas financeiras;',
    'Implementação de rotinas para controle de pagamentos, cobranças e notas fiscais;',
    'Elaboração de procedimentos padronizados para execução de rotinas;',
    'Reuniões periódicas para apresentação de indicadores e alinhamento de metas.'
  ],
  benefits: [
    'Mais organização, clareza e previsibilidade na gestão do negócio;',
    'Fim de juros e multas por esquecimento ou descontrole de vencimentos;',
    'Separação definitiva das contas pessoais e da empresa;',
    'Redução de retrabalho e mais tempo do empresário dedicado às vendas;',
    'Decisões seguras baseadas em dados e indicadores reais.'
  ],
  whenNeeded: [
    'Empresas que sentem desorganização nas rotinas diárias e financeiras;',
    'Dificuldade em manter controle pontual de contas a pagar e receber;',
    'Falta de tempo do gestor para cuidar das tarefas administrativas;',
    'Ausência de relatórios e indicadores claros sobre o desempenho da empresa;',
    'Necessidade de estruturar processos para crescer com segurança.'
  ]
};

// 10 cards for home and overview (9 engineering + 1 advisory alongside vistoria-chaves)
export const ALL_SERVICES: ServiceItem[] = [...ENGINEERING_SERVICES, ADVISORY_SERVICE_ITEM];

// SERVIÇO COMPLEMENTAR: ASSESSORIA ADMINISTRATIVA & FINANCEIRA PARA MICRO E PEQUENAS EMPRESAS
export const COMPLEMENTARY_ADVISORY = {
  title: 'Soluções complementares para empresas',
  subtitle: 'Assessoria administrativa e financeira para micro e pequenas empresas',
  description: 'Além da atuação em engenharia, a TSI oferece assessoria administrativa e financeira para micro e pequenas empresas que precisam de mais organização, controle e acompanhamento da gestão.',
  services: [
    {
      title: 'Acompanhamento administrativo',
      description: 'Estruturação de rotinas operacionais, apoio na organização interna e acompanhamento de tarefas para manter a empresa organizada e produtiva.'
    },
    {
      title: 'Organização financeira',
      description: 'Mapeamento e classificação de entradas e saídas, conciliação e organização do fluxo de caixa para clareza sobre a saúde do negócio.'
    },
    {
      title: 'Contas a pagar e receber',
      description: 'Controle rigoroso de prazos, agendamentos, cobranças preventivas e acompanhamento de compromissos para evitar juros e inadimplência.'
    },
    {
      title: 'Organização de processos',
      description: 'Padronização de métodos de trabalho, eliminação de gargalos e melhoria contínua na operação cotidiana da empresa.'
    },
    {
      title: 'Indicadores de desempenho',
      description: 'Criação e acompanhamento de métricas essenciais e relatórios simples para tomada de decisão fundamentada em dados reais.'
    },
    {
      title: 'Acompanhamento de resultados',
      description: 'Reuniões periódicas de alinhamento com análise do desempenho financeiro e orientação prática para o crescimento sustentável.'
    }
  ]
};

// Aliases for compatibility
export const SERVICES = ENGINEERING_SERVICES;
