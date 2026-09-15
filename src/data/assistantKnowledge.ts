// Comprehensive technical engineering knowledge base and intent handler
export function getTechnicalKnowledgeReply(message: string): string {
  const q = (message || '').toLowerCase();

  const isValueQuery =
    q.includes("quanto custa") ||
    q.includes("qual o valor") ||
    q.includes("qual o preco") ||
    q.includes("qual o preço") ||
    q.includes("quanto cobram") ||
    q.includes("quanto fica") ||
    q.includes("quanto sai") ||
    q.includes("tabela de preço") ||
    q.includes("tabela de preco") ||
    q.includes("valores") ||
    q.includes("preços") ||
    q.includes("precos") ||
    q.includes("orçamento") ||
    q.includes("orcamento") ||
    q.includes("honorário") ||
    q.includes("honorario") ||
    q.includes("custo") ||
    q.includes("custos") ||
    (q.includes("valor") && !q.includes("vigilancia sanitária") && !q.includes("vigilância sanitária")) ||
    (q.includes("preço") && !q.includes("vigilancia sanitária")) ||
    (q.includes("preco") && !q.includes("vigilancia sanitária"));

  const isTimeQuery =
    q.includes("quanto tempo") ||
    q.includes("qual o prazo") ||
    q.includes("quantos dias") ||
    q.includes("demora muito") ||
    q.includes("demora quanto") ||
    q.includes("prazo de entrega");

  // ==========================================
  // 1. TRATAMENTO ESPECÍFICO PARA PERGUNTAS DE VALORES / PREÇOS
  // ==========================================
  if (isValueQuery) {
    // Se for sobre ART de Reforma
    if (q.includes("art") || q.includes("reforma") || q.includes("drywall") || q.includes("parede")) {
      return `Olá! Em relação aos **valores para emissão de ART de Reforma (ABNT NBR 16280)**:

Não trabalhamos com um valor fixo imediato, pois os honorários técnicos dependem das características específicas da sua obra:
- **Tipo de Intervenção:** Se envolve apenas pintura e acabamentos, demolição de alvenaria/drywall, ou alterações elétricas, hidráulicas e estruturais;
- **Metragem e Localização:** Área do apartamento/imóvel e condomínio em que a obra será realizada;
- **Taxa Oficial do CREA-SP:** A taxa pública de registro da ART é recolhida diretamente ao CREA e varia conforme a faixa de valor da obra;
- **Vistoria Técnica e Plano de Reforma:** A TSI realiza a vistoria prévia e elabora o plano detalhado exigido pelo síndico.

Por não termos esses dados do seu imóvel neste momento, não é possível informar um valor exato agora. Para receber um **orçamento preciso e sem compromisso**, entre em contato direto com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664).`;
    }

    // Se for sobre LTA / Vigilância Sanitária
    if (q.includes("lta") || q.includes("vigilancia") || q.includes("vigilância") || q.includes("sanitaria") || q.includes("sanitária") || q.includes("clinica") || q.includes("clínica")) {
      return `Olá! Em relação ao **valor do processo de LTA (Laudo Técnico de Avaliação)** para a Vigilância Sanitária:

O investimento em um LTA não possui preço fixo tabelado, pois cada estabelecimento possui exigências sanitárias exclusivas estabelecidas pela **ANVISA (RDC 50)** e pela COVISA/CVS:
- **Atividade e Risco Sanitário:** Consultório simples, clínica médica com procedimentos invasivos, farmácia de manipulação ou estética avançada;
- **Área do Imóvel:** Metragem total e complexidade do layout físico;
- **Documentação Existente:** Se já há planta arquitetônica atualizada ou se a TSI precisará realizar o levantamento cadastral (*As-Built*);
- **Projetos e Memoriais:** Elaboração do Projeto Básico de Arquitetura (PBA), memorial de atividades e fluxo sanitário, além da taxa de ART no CREA-SP e emolumentos da Vigilância.

Por essas razões técnicas, não temos como passar um valor sem avaliar a sua planta ou atividade. Para maiores informações e para receber uma proposta personalizada, fale diretamente com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664).`;
    }

    // Se for sobre Habite-se / Regularização de Imóvel
    if (q.includes("habite") || q.includes("regulariz") || q.includes("alvara") || q.includes("alvará")) {
      return `Olá! Em relação aos **custos para obter o Habite-se ou regularizar um imóvel**:

Não é possível informar um valor fechado de imediato, pois a regularização imobiliária envolve duas frentes de custos distintas:
1. **Honorários Técnicos de Engenharia:** Levantamento arquitetônico no local (*As-Built*), elaboração das plantas para a Prefeitura, laudo técnico de estabilidade/segurança e emissão de ART no CREA-SP (que variam conforme a área construída e a complexidade);
2. **Taxas Públicas e Impostos:** Taxas municipais de protocolo na Prefeitura, eventuais multas ou outorga onerosa, guia de ISS da obra, **CND da Receita Federal (SERO)** e emolumentos do Cartório de Registro de Imóveis para averbação.

Como cada imóvel possui uma situação cadastral única, precisamos consultar o número do contribuinte (IPTU) e a documentação para calcular os custos reais. Entre em contato com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664) para uma análise preliminar gratuita do seu imóvel!`;
    }

    // Se for sobre Vistoria de Entrega de Chaves
    if (q.includes("chave") || q.includes("vistoria") || q.includes("entrega") || q.includes("vicio") || q.includes("vício")) {
      return `Olá! Em relação ao **valor da Vistoria de Entrega de Chaves (Recebimento de Imóvel)**:

O custo da vistoria varia principalmente de acordo com:
- **Metragem Privativa do Imóvel:** Apartamentos compactos, unidades padrão ou coberturas/casas de maior metragem;
- **Áreas Inclusas:** Vistoria de vagas de garagem, depósitos privativos e áreas técnicas;
- **Escopo do Laudo:** Emissão de Laudo Técnico Fotográfico minucioso com apontamento de não conformidades (normas **ABNT NBR 13752** e **NBR 15575**) e ART registrada no CREA-SP.

Por não termos a metragem do seu imóvel no momento, não temos um valor fixo para informar aqui. Para receber o valor exato para o seu imóvel rapidamente, entre em contato pelo [WhatsApp](https://wa.me/5511965469664).`;
    }

    // Se for sobre Perícia Judicial / Assistente Técnico
    if (q.includes("pericia") || q.includes("perícia") || q.includes("judicial") || q.includes("processo") || q.includes("assistente")) {
      return `Olá! Em relação aos **honorários para Perícia Judicial e Assistência Técnica Cível (Art. 466 do CPC)**:

Os honorários periciais de assistência técnica são calculados com base na complexidade da demanda judicial:
- **Volume e Fase Processual:** Análise da petição inicial, contestações e documentos já anexados aos autos;
- **Número de Quesitos:** Formulação de quesitos técnicos iniciais, presença na diligência presencial do Perito Judicial e elaboração de parecer divergente/convergente fundamentado na **ABNT NBR 13752**;
- **Gravidade dos Fatos:** Vícios construtivos estruturais, infiltrações, desabamentos ou desapropriações.

Por depender da análise prévia do processo, não dispomos dessa informação de valores de forma imediata. Para que nossos engenheiros possam analisar os autos e enviar uma estimativa de honorários, fale conosco pelo [WhatsApp](https://wa.me/5511965469664).`;
    }

    // Resposta geral sobre valores
    return `Olá! Em relação a **valores, custos e orçamentos**:

A **TSI Engenharia & Assessoria** não trabalha com valores fixos pré-definidos, pois na engenharia civil cada serviço é personalizado e depende diretamente de fatores técnicos como:
- **Área e Metragem:** Tamanho do imóvel ou volume da reforma/projeto;
- **Grau de Complexidade:** Se envolve estrutura, vigilância sanitária (RDC 50), laudos judiciais ou apenas regularização cadastral;
- **Localização e Exigências:** Órgãos competentes (Prefeitura, CREA-SP, COVISA ou Bombeiros);
- **Taxas Oficiais de Terceiros:** Emolumentos públicos e taxas de órgãos emissores.

Para que você não tenha surpresas e receba uma proposta honesta, precisa e sem compromisso, pedimos que entre em contato diretamente com nossa equipe de engenheiros pelo [WhatsApp](https://wa.me/5511965469664) ou clique no botão **Solicitar Orçamento** informando os dados básicos do seu imóvel!`;
  }

  // ==========================================
  // 2. TRATAMENTO ESPECÍFICO PARA PRAZOS / TEMPO
  // ==========================================
  if (isTimeQuery) {
    if (q.includes("habite") || q.includes("regulariz") || q.includes("imovel") || q.includes("imóvel")) {
      return `Olá! Em relação ao **prazo para regularização de imóveis ou emissão de Habite-se**:

O tempo total é composto por duas etapas:
1. **Etapa Técnica (TSI Engenharia):** Realização da vistoria, levantamento das medidas (*As-Built*), elaboração das plantas e emissão da ART — leva em média de **5 a 15 dias úteis**;
2. **Etapa Administrativa (Prefeitura):** Análise dos técnicos da Prefeitura, vistorias fiscais e despacho do Habite-se — em São Paulo e região metropolitana costuma variar entre **30 a 90 dias úteis**, dependendo da demanda da subprefeitura e da necessidade de atender a exigências (comunique-se).

Para saber o prazo estimado para o seu endereço específico, fale com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664).`;
    }

    if (q.includes("art") || q.includes("reforma")) {
      return `Olá! O prazo para emissão de **ART de Reforma (NBR 16280)** com a TSI Engenharia costuma ser muito rápido:
- Após a vistoria técnica e a definição do escopo de reforma, elaboramos o **Plano de Reforma** e registramos a **ART no CREA-SP** no prazo de **24 a 48 horas úteis**.

Para dar início imediato e liberar sua obra no condomínio, fale conosco pelo [WhatsApp](https://wa.me/5511965469664).`;
    }

    if (q.includes("lta") || q.includes("vigilancia") || q.includes("vigilância")) {
      return `Olá! Em relação ao **prazo do processo de LTA (Laudo Técnico de Avaliação)**:
- **Elaboração Técnica (TSI):** Levantamento das instalações, desenho do Projeto Básico de Arquitetura (PBA) com fluxos sanitários e memoriais descritivos — em média **10 a 20 dias úteis**;
- **Aprovação na Vigilância Sanitária (COVISA/CVS):** O protocolo é analisado pelos agentes sanitários, com prazo legal que costuma variar de **30 a 60 dias úteis**, a depender do órgão local.

Para agilizar o seu processo, entre em contato com nossa equipe pelo [WhatsApp](https://wa.me/5511965469664).`;
    }
  }

  // ==========================================
  // 3. TRATAMENTO POR SERVIÇO ESPECÍFICO
  // ==========================================

  // Vigilância Sanitária / LTA / COVISA / CMVS
  if (
    q.includes("lta") ||
    q.includes("vigilancia") ||
    q.includes("vigilância") ||
    q.includes("sanitaria") ||
    q.includes("sanitária") ||
    q.includes("covisa") ||
    q.includes("cmvs") ||
    q.includes("clinica") ||
    q.includes("clínica") ||
    q.includes("farmacia") ||
    q.includes("farmácia")
  ) {
    return `Olá! O **Laudo Técnico de Avaliação (LTA)** é a aprovação prévia emitida pela Vigilância Sanitária (**COVISA** municipal ou **CVS** estadual) para estabelecimentos com atividades de saúde ou interesse à saúde (clínicas médicas, odontológicas, estéticas, farmácias, laboratórios e indústrias de alimentos).

**Como a TSI atua no seu LTA:**
- **Vistoria Técnica In Loco:** Análise das condições físicas, ventilação, iluminação e revestimentos impermeáveis e laváveis;
- **Projeto Básico de Arquitetura (PBA):** Mapeamento detalhado dos fluxos operacionais sem cruzamento de contaminação, conforme as normas da **ANVISA (RDC 50)**;
- **Memoriais Descritivos:** Memorial de atividades e memorial de materiais e acabamentos;
- **Emissão da ART no CREA-SP:** Responsabilidade técnica legal do engenheiro;
- **Acompanhamento até o Deferimento:** Gestão do processo até a aprovação e emissão da licença.

Para analisar a planta do seu estabelecimento ou agendar uma vistoria, entre em contato pelo [WhatsApp](https://wa.me/5511965469664).`;
  }

  // Perícia Judicial / Extrajudicial / Assistente Técnico / CPC / Quesitos
  if (
    q.includes("pericia") ||
    q.includes("perícia") ||
    q.includes("judicial") ||
    q.includes("assistente tecnico") ||
    q.includes("assistente técnico") ||
    q.includes("quesito") ||
    q.includes("processo") ||
    q.includes("laudo pericial") ||
    q.includes("cpc")
  ) {
    return `Olá! Na **TSI Engenharia**, atuamos em **Perícia Judicial e Extrajudicial** e como **Assistente Técnico Pericial** no âmbito cível.

De acordo com o **Artigo 466 do Código de Processo Civil (CPC)**, a parte envolvida em litígio tem o direito de indicar um Assistente Técnico para acompanhar a perícia do Perito nomeado pelo Juiz.

**Nossa atuação abrange:**
- **Análise Preliminar dos Autos:** Estudo aprofundado dos fatos e documentos técnicos;
- **Formulação de Quesitos Técnicos:** Elaboração de perguntas estratégicas para direcionar a perícia a favor da verdade técnica;
- **Acompanhamento Presencial da Diligência:** Nosso engenheiro comparece no dia da inspeção oficial com o perito judicial;
- **Parecer Técnico Conclusivo:** Emissão de laudo técnico fundamentado na **ABNT NBR 13752** para anexação aos autos;
- **Impugnações:** Manifestação técnica fundamentada caso o laudo do perito judicial apresente falhas ou omissões.

Para indicar a TSI como assistente técnica no seu processo, fale diretamente com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664).`;
  }

  // ART de Reforma / Drywall / Paredes / NBR 16280
  if (
    q.includes("art") ||
    q.includes("reforma") ||
    q.includes("drywall") ||
    q.includes("parede") ||
    q.includes("apartamento") ||
    q.includes("condominio") ||
    q.includes("condomínio") ||
    q.includes("16280")
  ) {
    return `Olá! Conforme a norma **ABNT NBR 16280 (Reforma em Edificações)** e o regimento interno dos condomínios, qualquer intervenção que possa alterar a segurança, os sistemas ou a estrutura predial exige **ART de Engenheiro e Plano de Reforma**.

**Exigem emissão de ART:**
- Demolição ou remanejamento de paredes (inclusive drywall ou alvenaria de vedação);
- Modificações em instalações elétricas (**NBR 5410**), hidráulicas ou de gás;
- Instalação de ar-condicionado (carga elétrica e fixação externa);
- Envidraçamento de sacada e troca de revestimentos pesados.

A TSI realiza a vistoria prévia, emite o plano de reforma com memorial descritivo e registra a **ART no CREA-SP** para liberação imediata junto ao condomínio. Fale com nossa equipe pelo [WhatsApp](https://wa.me/5511965469664).`;
  }

  // Habite-se / Alvará / Regularização de Imóvel
  if (
    q.includes("habite") ||
    q.includes("alvara") ||
    q.includes("alvará") ||
    q.includes("regulariz") ||
    q.includes("anistia") ||
    q.includes("construid") ||
    q.includes("construíd") ||
    q.includes("iptu") ||
    q.includes("cnd") ||
    q.includes("averb")
  ) {
    return `Olá! A **TSI Engenharia** é especializada na regularização integral de imóveis residenciais, comerciais e industriais.

**Diferença principal entre Alvará e Habite-se:**
- **Alvará de Aprovação/Execução:** Autorização expedida pela Prefeitura **antes** da obra começar;
- **Habite-se (Certificado de Conclusão de Obra):** Documento expedido **após a conclusão**, atestando que o imóvel foi construído conforme as leis e está seguro para ocupação.

Sem o Habite-se, o imóvel não pode ser financiado em bancos e não pode receber a averbação na matrícula do Cartório de Registro de Imóveis. Realizamos o levantamento cadastral (*As-Built*), aprovação na Prefeitura, regularização no INSS/Receita Federal (**SERO**) e averbação em Cartório.

Fale com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664) para analisarmos a situação do seu imóvel.`;
  }

  // Vistoria de Entrega de Chaves / Recebimento de Imóvel
  if (
    q.includes("chave") ||
    q.includes("vistoria") ||
    q.includes("entrega") ||
    q.includes("vicio") ||
    q.includes("vício") ||
    q.includes("construtora")
  ) {
    return `Olá! Na **Vistoria de Entrega de Chaves**, nosso engenheiro civil acompanha você no dia marcado pela construtora para fiscalizar minuciosamente o imóvel antes de você assinar o termo de recebimento.

Realizamos uma inspeção baseada nas normas **ABNT NBR 13752** e **ABNT NBR 15575** (Norma de Desempenho), checando:
- Testes hidráulicos (pressão, caimento de ralos e estanqueidade);
- Testes elétricos em todas as tomadas e disjuntores (**NBR 5410**);
- Esquadrias, prumos de paredes, pisos ocos e nivelamento;
- Conformidade com o Memorial Descritivo contratado.

Emitimos um **Laudo Técnico Fotográfico com ART** para exigir que a construtora corrija todos os defeitos antes da sua mudança. Agende sua vistoria pelo [WhatsApp](https://wa.me/5511965469664).`;
  }

  // Bombeiros / AVCB / CLCB / PPCI
  if (
    q.includes("bombeiro") ||
    q.includes("avcb") ||
    q.includes("clcb") ||
    q.includes("ppci") ||
    q.includes("incendio") ||
    q.includes("incêndio")
  ) {
    return `Olá! A **TSI Engenharia** cuida do dimensionamento e protocolo de projetos de proteção contra incêndio junto ao Corpo de Bombeiros de SP:
- **CLCB (Certificado de Licença do Corpo de Bombeiros):** Para edificações de menor porte (até 750 m² e baixo risco);
- **AVCB (Auto de Vistoria do Corpo de Bombeiros):** Para edificações de maior porte, com projeto técnico completo.

Emitimos as laudos e a ART para aprovação no sistema Via Fácil Bombeiros. Para consultar o seu caso, fale conosco pelo [WhatsApp](https://wa.me/5511965469664).`;
  }

  // ==========================================
  // 4. QUANDO NÃO HÁ INFORMAÇÃO ESPECÍFICA DISPONÍVEL
  // ==========================================
  return `Olá! Agradecemos pelo seu contato com a **TSI Engenharia & Assessoria**.

Não tenho essa informação específica disponível no momento para responder com exatidão à sua pergunta. A TSI Engenharia é especializada em engenharia civil consultiva, emissão de ART, laudos técnicos (LTA, vistorias de entrega de chaves), perícias judiciais e regularização de imóveis (Habite-se) em São Paulo e região.

Para maiores informações e para que nossos engenheiros possam analisar o seu caso específico com atenção aos detalhes técnicos, por favor entre em contato direto conosco pelo [WhatsApp](https://wa.me/5511965469664) ou clique no botão **Solicitar Orçamento** acima!`;
}
