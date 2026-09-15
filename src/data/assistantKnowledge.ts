// Comprehensive technical engineering knowledge base
export function getTechnicalKnowledgeReply(message: string): string {
  const q = (message || '').toLowerCase();

  // 1. Vigilância Sanitária / LTA / COVISA / CMVS
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
    return `Olá! Seja muito bem-vindo à **TSI Engenharia & Assessoria**.

O **Laudo Técnico de Avaliação (LTA)** é o documento emitido pela Vigilância Sanitária (**COVISA** em São Paulo ou **CVS** estadual) que aprova previamente as adequações físicas e os fluxos de trabalho de um estabelecimento antes da concessão da **Licença de Funcionamento Sanitária** ou do **CMVS**.

Ele é obrigatório para estabelecimentos com atividades de saúde ou interesse à saúde, como consultórios médicos e odontológicos, clínicas de estética, farmácias e manipulação, estúdios de tatuagem, laboratórios e indústrias de alimentos/cosméticos.

**Como a TSI conduz o processo do seu LTA:**
- **Vistoria Técnica Presencial:** Verificação de dimensões, iluminação, ventilação e materiais de acabamento impermeáveis e laváveis;
- **Projeto Básico de Arquitetura (PBA):** Mapeamento dos fluxos sanitários sem cruzamento de contaminação, conforme **RDC 50 da ANVISA** e Código Sanitário Estadual;
- **Memoriais Descritivos:** Elaboração do Memorial de Atividades e Memorial de Materiais e Acabamentos;
- **Emissão da ART no CREA-SP:** Responsabilidade técnica legal do engenheiro;
- **Protocolo e Acompanhamento:** Gestão do processo até o despacho deferitório final, cumprindo eventuais comunique-se.

Para que nossa equipe possa analisar a planta ou o local da sua empresa e elaborar uma proposta sem compromisso, fale agora mesmo diretamente com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664).`;
  }

  // 2. Perícia Judicial / Extrajudicial / Assistente Técnico / CPC / Quesitos
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
    return `Olá! Na **TSI Engenharia & Assessoria**, atuamos com excelência em **Perícia Judicial e Extrajudicial** e **Assistência Técnica Pericial** no âmbito cível.

Quando há um litígio judicial envolvendo vícios construtivos, desabamentos, infiltrações, desapropriações ou medições de obras, o juiz nomeia um Perito Judicial. As partes (autor e réu) têm o direito garantido pelo **Código de Processo Civil (Art. 466 do CPC)** de indicar o seu próprio **Assistente Técnico de Engenharia**.

**Nossa atuação estratégica abrange:**
- **Análise Prévia dos Autos:** Estudo detalhado da petição inicial, contestações e documentos técnicos acostados aos autos;
- **Formulação de Quesitos Estratégicos:** Quesitos técnicos direcionados para esclarecer pontos cruciais e proteger os interesses do contratante;
- **Acompanhamento Presencial da Diligência:** Presença do nosso engenheiro no dia da vistoria oficial do Perito do Juízo, fiscalizando a metodologia de inspeção;
- **Parecer Técnico Conclusivo:** Elaboração de Parecer Técnico Pericial convergente ou divergente, fundamentado na norma **ABNT NBR 13752** (Perícias de Engenharia na Construção Civil);
- **Impugnações e Quesitos Suplementares:** Resposta e esclarecimento sobre laudos periciais judiciais que apresentem falhas metodológicas.

Para indicar a TSI como assistente técnica ou solicitar um parecer preliminar para instrução da ação, entre em contato diretamente com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664).`;
  }

  // 3. ART de Reforma / Drywall / Paredes / ABNT NBR 16280
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
    return `Olá! Essa é uma das dúvidas mais frequentes que recebemos na **TSI Engenharia & Assessoria**.

De acordo com a norma **ABNT NBR 16280 (Reforma em Edificações)** e as regras da maioria dos condomínios residenciais e comerciais, **é obrigatória a emissão de ART (Anotação de Responsabilidade Técnica)** no CREA para quaisquer alterações que possam impactar a segurança, a estrutura ou os sistemas prediais.

**Exigem emissão de ART e Plano de Reforma:**
- Demolição ou alteração de paredes (mesmo divisórias em drywall ou alvenaria sem função estrutural, para atestar que não comprometem a estrutura do edifício);
- Abertura de vãos em alvenaria estrutural (estritamente vedado sem estudo e reforço estrutural específico);
- Alteração ou ampliação de instalações elétricas (**ABNT NBR 5410**), hidráulicas ou de gás;
- Instalação de ar-condicionado (carga elétrica e sobrepeso em fachadas/sacadas);
- Envidraçamento de sacada e troca de revestimentos pesados (porcelanatos de grande formato com sobrecarga de laje).

**Como funciona o nosso atendimento:**
1. Realizamos a vistoria técnica e a análise das alterações pretendidas;
2. Elaboramos o **Plano de Reforma detalhado** exigido pela administradora e pelo síndico;
3. Emitimos a **ART registrada no CREA-SP** com agilidade;
4. Oferecemos suporte completo para aprovação junto ao condomínio.

Precisa de ART para sua reforma com rapidez? Fale agora com nossa equipe pelo [WhatsApp](https://wa.me/5511965469664).`;
  }

  // 4. Habite-se / Alvará de Aprovação / Regularização de Imóvel / Anistia / Tempo
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
    q.includes("averb") ||
    q.includes("tempo") ||
    q.includes("prazo")
  ) {
    return `Olá! A **TSI Engenharia & Assessoria** é especialista em regularização completa de imóveis residenciais, comerciais e industriais em São Paulo e Região Metropolitana.

**A diferença entre Alvará de Aprovação e Habite-se:**
- **Alvará de Aprovação / Execução:** É a licença expedida pela Prefeitura **antes** do início da construção ou reforma, autorizando a execução do projeto conforme a Lei de Zoneamento e o Código de Obras;
- **Habite-se (Certificado de Conclusão de Obra):** É o documento emitido pela Prefeitura **após a conclusão**, atestando que a edificação foi construída em conformidade com o projeto aprovado e possui condições plenas de habitabilidade e segurança.

**Por que o Habite-se e a regularização são indispensáveis?**
Sem o Habite-se, você não consegue obter a **CND da Receita Federal (SERO)** nem registrar a averbação da construção na matrícula do Cartório de Imóveis, o que inviabiliza financiamentos bancários (Caixa, bancos privados) e sujeita o imóvel a multas municipais. O prazo médio de análise municipal costuma variar de 30 a 90 dias úteis dependendo do tipo de processo.

**Etapas do processo com a TSI:**
- Levantamento arquitetônico cadastral in loco (*As-Built*);
- Emissão de ART no CREA-SP e montagem do processo administrativo;
- Protocolo eletrônico e atendimento a exigências da Prefeitura;
- Apoio para CND do INSS e Averbação em Cartório de Registro de Imóveis.

Quer regularizar seu imóvel ou tirar o Habite-se? Fale diretamente com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664).`;
  }

  // 5. Vistoria de Entrega de Chaves / Recebimento de Imóvel
  if (
    q.includes("chave") ||
    q.includes("vistoria") ||
    q.includes("entrega") ||
    q.includes("vicio") ||
    q.includes("vício") ||
    q.includes("construtora") ||
    q.includes("apartamento novo")
  ) {
    return `Olá! A **Vistoria de Entrega de Chaves** da **TSI Engenharia** é um dos serviços mais importantes para quem adquiriu um imóvel novo na planta ou usado.

O engenheiro civil atua ao seu lado no dia agendado pela construtora para realizar uma inspeção técnica rigorosa baseada na **ABNT NBR 13752** e **ABNT NBR 15575** (Norma de Desempenho).

**O que verificamos no checklist de mais de 45 itens:**
- **Nivelamento e Prumos:** Teste de esquadro e desníveis em paredes, pisos e tetos;
- **Instalações Hidráulicas:** Teste de estanqueidade, pressão da água em torneiras e chuveiros, caimento de ralos em áreas molhadas para evitar poças;
- **Instalações Elétricas:** Teste de continuidade em todas as tomadas, disjuntores, aterramento e identificação do quadro de força (**NBR 5410**);
- **Esquadrias e Vidros:** Funcionamento de portas, janelas, fechaduras, vedação de borrachas e ausência de riscos ou trincas;
- **Pisos e Revestimentos:** Verificação de peças ocas (*som cavo*), trincas ou rejuntes mal executados;
- **Memorial Descritivo:** Conferência se as marcas de louças, metais e materiais entregues conferem exatamente com o contratado.

Ao final, emitimos um **Laudo Técnico Fotográfico com ART** para que a construtora seja notificada a reparar todos os vícios antes da sua mudança!

Agende sua vistoria com a TSI falando com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664).`;
  }

  // 6. Bombeiros / AVCB / CLCB / PPCI
  if (
    q.includes("bombeiro") ||
    q.includes("avcb") ||
    q.includes("clcb") ||
    q.includes("ppci") ||
    q.includes("incendio") ||
    q.includes("incêndio")
  ) {
    return `Olá! A **TSI Engenharia** atua na elaboração de projetos de prevenção e combate a incêndio e obtenção/renovação de **AVCB** e **CLCB** junto ao Corpo de Bombeiros de SP via sistema Via Fácil.

- **CLCB (Certificado de Licença do Corpo de Bombeiros):** Aplicado a edificações de baixo potencial de risco (área de até 750 m² e até 3 pavimentos);
- **AVCB (Auto de Vistoria do Corpo de Bombeiros):** Aplicado a edificações de maior porte, condomínios e indústrias, com exigência de projeto técnico completo.

Cuidamos do dimensionamento de extintores, sinalização de emergência, iluminação de rota de fuga, laudos de instalações elétricas e ART de responsabilidade.

Fale com nossa equipe técnica pelo [WhatsApp](https://wa.me/5511965469664) para orientações sobre o seu estabelecimento.`;
  }

  // Generic comprehensive engineering response
  return `Olá! Seja muito bem-vindo à **TSI Engenharia & Assessoria**.

Somos uma empresa especializada em engenharia civil e assessoria técnica e documental em São Paulo e Região Metropolitana, devidamente habilitada junto ao **CREA-SP**.

**Nossas principais áreas de atuação:**
- **Regularização de Imóveis e Habite-se:** Processos completos na Prefeitura, anistia, alvarás e averbação em Cartório;
- **Laudo Técnico (LTA) para Vigilância Sanitária:** Adequação de clínicas, consultórios, farmácias e estéticas na COVISA/CVS;
- **Emissão de ART para Reformas (NBR 16280):** Liberação de obras em apartamentos e condomínios com plano de reforma;
- **Perícia Judicial e Assistência Técnica:** Engenharia diagnóstica, quesitos periciais e pareceres técnicos no CPC;
- **Vistoria de Entrega de Chaves:** Inspeção detalhada de recebimento de imóvel com checklist de 45+ itens e laudo técnico;
- **Projetos e AVCB/CLCB:** Projetos de arquitetura, estrutural, instalações e Corpo de Bombeiros.

Como podemos orientar você sobre o seu imóvel ou projeto hoje? Se preferir, você pode falar diretamente com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664) ou clicar em **Solicitar Orçamento**!`;
}
