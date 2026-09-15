import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Comprehensive technical engineering knowledge base fallback
function getTechnicalKnowledgeReply(message: string): string {
  const q = message.toLowerCase();

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

  // 4. Habite-se / Alvará de Aprovação / Regularização de Imóvel / Anistia
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
    return `Olá! A **TSI Engenharia & Assessoria** é especialista em regularização completa de imóveis residenciais, comerciais e industriais em São Paulo e Região Metropolitana.

**A diferença entre Alvará de Aprovação e Habite-se:**
- **Alvará de Aprovação / Execução:** É a licença expedida pela Prefeitura **antes** do início da construção ou reforma, autorizando a execução do projeto conforme a Lei de Zoneamento e o Código de Obras;
- **Habite-se (Certificado de Conclusão de Obra):** É o documento emitido pela Prefeitura **após a conclusão**, atestando que a edificação foi construída em conformidade com o projeto aprovado e possui condições plenas de habitabilidade e segurança.

**Por que o Habite-se é indispensável?**
Sem o Habite-se, você não consegue obter a **CND da Receita Federal (SERO)** nem registrar a averbação da construção na matrícula do Cartório de Imóveis, o que inviabiliza financiamentos bancários (Caixa, bancos privados) e sujeita o proprietário a multas.

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

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "25mb" }));

  // Lazy-initialize Gemini AI
  let aiClient: GoogleGenAI | null = null;
  function getAI(): GoogleGenAI | null {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return null;
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return aiClient;
  }

  // Health check route
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "TSI Engenharia & Assessoria Backend" });
  });

  // Check if logo-tsi.png exists on disk
  app.get("/api/logo-status", (_req, res) => {
    const publicLogo = path.join(process.cwd(), "public", "logo-tsi.png");
    const exists = fs.existsSync(publicLogo);
    res.json({ exists, url: "/logo-tsi.png" });
  });

  // Save the exact logo file sent by the user
  app.post("/api/upload-logo", (req, res) => {
    try {
      const { base64Data } = req.body;
      if (!base64Data) {
        return res.status(400).json({ error: "Nenhum dado de imagem fornecido." });
      }

      const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(cleanBase64, "base64");

      const targets = [
        path.join(process.cwd(), "public", "logo-tsi.png"),
        path.join(process.cwd(), "dist", "logo-tsi.png"),
      ];

      targets.forEach((targetPath) => {
        const dir = path.dirname(targetPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(targetPath, buffer);
      });

      console.log("Saved exact logo-tsi.png to disk successfully.");
      return res.json({ success: true, url: "/logo-tsi.png" });
    } catch (err) {
      console.error("Error saving logo:", err);
      return res.status(500).json({ error: "Erro ao salvar arquivo." });
    }
  });

  // AI Virtual Engineer Assistant API Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, conversationHistory = [] } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Mensagem é obrigatória." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          reply: getTechnicalKnowledgeReply(message),
          source: "knowledge_base",
        });
      }

      const ai = getAI();
      if (!ai) {
        return res.json({
          reply: getTechnicalKnowledgeReply(message),
          source: "knowledge_base",
        });
      }

      const systemPrompt = `Você é o Engenheiro Virtual e Consultor Técnico Especialista da TSI Engenharia & Assessoria em São Paulo (CREA-SP).
A TSI Engenharia & Assessoria é uma empresa especializada em engenharia civil, regularização de imóveis, laudos técnicos, emissão de ART (Anotação de Responsabilidade Técnica), perícia judicial e extrajudicial, vistoria de entrega de chaves, elaboração de projetos e assessoria burocrática/imobiliária.

Seu tom é técnico, porém altamente acessível, educado, solícito, transparente e profissional.
Responda de forma ágil, clara e objetiva com base na legislação brasileira, normas da ABNT (como ABNT NBR 16280 para reformas, NBR 13752 e NBR 15575 para vistorias e desempenho, NBR 5410 para elétrica) e procedimentos municipais/cartorários (Habite-se, Alvarás, CND da Receita Federal, Averbações).

Oriente o usuário sobre:
1. Regularização de Imóveis (Habite-se, Usucapião, Remembramento, Desmembramento, CND/INSS).
2. Emissão de ART (CREA) para reformas em apartamentos/casas, modificações estruturais ou demolições (ABNT NBR 16280).
3. Laudos Técnicos para Vigilância Sanitária (LTA - Laudo Técnico de Avaliação, projetos com fluxos sanitários conforme RDC 50, memoriais de atividades e adequações físicas para clínicas, consultórios, farmácias, estéticas e indústrias na VISA/COVISA/CVS).
4. Vistoria de Entrega de Chaves (Acompanhamento no recebimento de imóvel novo/usado com checklist de mais de 45 itens e laudo para a construtora).
5. Perícia Judicial e Extrajudicial (Engenharia diagnóstica, assistência técnica pericial no âmbito cível - CPC Art. 466, formulação de quesitos estratégicos, pareceres técnicos fundamentados na NBR 13752).
6. Projetos de Engenharia (Arquitetônico, Estrutural, Elétrico, Hidrossanitário e PPCI - AVCB/CLCB Bombeiros).
7. Assessoria Administrativa (Licenciamentos, Vigilância Sanitária, Cartórios e Averbações).

DIRETRIZES DE FORMATAÇÃO E CONTATO:
- Responda em no máximo 3 ou 4 parágrafos bem estruturados e diretos.
- Use Markdown limpo.
- Utilize negrito com dois asteriscos (**termo**) para destacar palavras-chave, normas ABNT (ex: **ABNT NBR 16280**), documentos (ex: **ART no CREA-SP**, **Habite-se**) e órgãos.
- Use listas com marcadores (-) quando elencar itens ou etapas.
- Para contato ou link do WhatsApp, NUNCA escreva os dígitos do número de telefone no texto da resposta. Escreva SEMPRE e EXCLUSIVAMENTE a palavra **WhatsApp** como link markdown apontando para: [WhatsApp](https://wa.me/5511965469664). Exemplo de frase final: "Se preferir, você pode falar diretamente com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664)."`;

      // Build context from conversation history (limit to last 4 interactions to keep prompts compact & fast)
      const recentHistory = conversationHistory.slice(-4);
      const formattedHistory = recentHistory
        .map(
          (item: { role: string; content: string }) =>
            `${item.role === "user" ? "Cliente" : "Engenheiro TSI"}: ${item.content}`
        )
        .join("\n");

      const promptInput = `${systemPrompt}\n\nHistórico da Conversa:\n${formattedHistory}\n\nCliente: ${message}\nEngenheiro TSI:`;

      // Official supported candidate models with fast timeout to avoid long hanging
      const candidateConfigs = [
        { model: "gemini-3.1-flash-lite", thinkingLevel: ThinkingLevel.MINIMAL, timeoutMs: 5000 },
        { model: "gemini-flash-latest", thinkingLevel: ThinkingLevel.LOW, timeoutMs: 4000 },
      ];

      let reply: string | null = null;

      for (const config of candidateConfigs) {
        try {
          const fetchPromise = ai.models.generateContent({
            model: config.model,
            contents: promptInput,
            config: {
              thinkingConfig: {
                thinkingLevel: config.thinkingLevel,
              },
            },
          });

          const timeoutPromise = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error(`Timeout after ${config.timeoutMs}ms`)), config.timeoutMs)
          );

          const response: any = await Promise.race([fetchPromise, timeoutPromise]);
          if (response?.text) {
            reply = response.text;
            break;
          }
        } catch (err: any) {
          console.warn(`Tentativa com ${config.model} falhou:`, err?.message || err);
        }
      }

      if (!reply) {
        // High-quality contextual knowledge base fallback
        reply = getTechnicalKnowledgeReply(message);
        return res.json({ reply, source: "knowledge_base" });
      }

      return res.json({ reply, source: "gemini" });
    } catch (error: any) {
      console.error("Erro na API de Chat:", error);
      const fallbackReply = getTechnicalKnowledgeReply(req.body?.message || "");
      return res.json({
        reply: fallbackReply,
        source: "fallback",
      });
    }
  });

  // Quote & Inspection Request API Endpoint
  app.post("/api/quote", async (req, res) => {
    try {
      const {
        serviceType,
        name,
        email,
        phone,
        city,
        propertyType,
        description,
        urgency,
      } = req.body;

      if (!name || !phone || !serviceType) {
        return res
          .status(400)
          .json({ error: "Nome, telefone e tipo de serviço são obrigatórios." });
      }

      // Generate a tracking reference
      const trackingCode = `TSI-${Math.floor(100000 + Math.random() * 900000)}`;

      console.log(`[ORÇAMENTO TSI ${trackingCode}] Recebido para tamiresirias@gmail.com:`, {
        name,
        phone,
        email: email || "Não informado",
        serviceType,
        propertyType: propertyType || "Não informado",
        city: city || "Não informado",
        urgency: urgency || "Normal",
        description: description || "Sem detalhes",
      });

      // Forward request to tamiresirias@gmail.com via FormSubmit
      try {
        await fetch("https://formsubmit.co/ajax/tamiresirias@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Origin": "https://tsiengenharia.com.br",
            "Referer": "https://tsiengenharia.com.br",
          },
          body: JSON.stringify({
            _subject: `[TSI Orçamento ${trackingCode}] ${serviceType} - ${name}`,
            _template: "table",
            _captcha: "false",
            "Código de Rastreio": trackingCode,
            "Nome do Cliente": name,
            "Telefone / WhatsApp": phone,
            "E-mail do Cliente": email || "Não informado",
            "Serviço Solicitado": serviceType,
            "Tipo de Imóvel": propertyType || "Não informado",
            "Cidade / Localidade": city || "Não informado",
            "Urgência": urgency || "Normal",
            "Mensagem / Descrição": description || "Sem detalhes adicionais",
            "Data/Hora": new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
          }),
        });
      } catch (forwardErr) {
        console.warn("Aviso ao despachar e-mail via FormSubmit:", forwardErr);
      }

      return res.json({
        success: true,
        trackingCode,
        recipientEmail: "tamiresirias@gmail.com",
        message: "Solicitação recebida com sucesso e encaminhada para o e-mail da engenharia!",
        details: {
          serviceType,
          name,
          phone,
          email,
          city: city || "Não informado",
          urgency: urgency || "Normal",
        },
      });
    } catch (err: any) {
      console.error("Erro ao processar solicitação de orçamento:", err);
      return res.status(500).json({ error: "Erro ao processar solicitação de orçamento." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor TSI Engenharia & Assessoria rodando em http://localhost:${PORT}`);
  });
}

startServer();
