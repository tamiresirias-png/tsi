import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "25mb" }));

  // Lazy-initialize Gemini AI
  let aiClient: GoogleGenAI | null = null;
  function getAI() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is not defined.");
      }
      aiClient = new GoogleGenAI({ apiKey });
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
          reply:
            "Olá! Sou o Assistente Técnico Virtual da TSI Engenharia & Assessoria em São Paulo (CREA-SP). Para que eu possa responder dúvidas específicas com inteligência artificial, configure a chave GEMINI_API_KEY nos seus painéis de segredos. Como posso te orientar sobre regularização, laudos ou emissão de ART hoje?",
          source: "fallback",
        });
      }

      const ai = getAI();

      const systemPrompt = `Você é o Engenheiro Virtual e Consultor Técnico Especialista da TSI Engenharia & Assessoria.
A TSI Engenharia & Assessoria é uma empresa especializada em engenharia civil, regularização de imóveis, laudos técnicos, emissão de ART (Anotação de Responsabilidade Técnica), acompanhamento de obras, vistoria de entrega de chaves, elaboração de projetos e assessoria burocrática/imobiliária.

Seu tom é técnico, porém altamente acessível, educado, solícito, transparente e profissional.
Responda a dúvidas dos clientes com base na legislação brasileira, normas da ABNT (como ABNT NBR 16280 para reformas, NBR 13752 e NBR 15575 para vistorias e desempenho, NBR 5410 para elétrica, etc.) e procedimentos municipais/cartorários (Habite-se, Alvarás, CND da Receita Federal, Averbações).

Oriente o usuário sobre:
1. Regularização de Imóveis (Habite-se, Usucapião, Remembramento, Desmembramento, CND/INSS).
2. Emissão de ART (CREA) para reformas em apartamentos/casas, modificações estruturais ou demolições.
3. Laudos Técnicos para Vigilância Sanitária (LTA - Laudo Técnico de Avaliação, projetos com fluxos sanitários, memoriais de atividades e adequações físicas para clínicas, consultórios, farmácias, estéticas e indústrias na VISA/COVISA/CVS; e em segundo plano, laudos estruturais e de patologias construtivas sob demanda).
4. Vistoria de Entrega de Chaves (Acompanhamento no recebimento de imóvel novo/usado com checklist de mais de 45 itens).
5. Acompanhamento e Fiscalização de Obras (Diário de obra, controle de qualidade, cronograma e gestão).
6. Projetos de Engenharia (Arquitetônico, Estrutural, Elétrico, Hidrossanitário e PPCI - Bombeiros).
7. Assessoria Administrativa (Licenciamentos, Vigilância Sanitária, Cartórios e Suporte para Financiamento Imobiliário).

Sempre convide o cliente de forma gentil a solicitar um orçamento sem compromisso ou falar com nossa equipe de engenheiros pelo WhatsApp da TSI Engenharia.
DIRETRIZES DE FORMATAÇÃO E CONTATO:
- Use Markdown limpo e bem estruturado.
- Utilize negrito com dois asteriscos (**termo**) para destacar palavras-chave, normas ABNT (ex: **ABNT NBR 16280**), documentos (ex: **ART no CREA-SP**, **Habite-se**) e prazos.
- Use listas com marcadores (-) para facilitar a leitura.
- Para contato ou link do WhatsApp, NUNCA escreva os dígitos do número de telefone no texto da resposta. Escreva SEMPRE e EXCLUSIVAMENTE a palavra **WhatsApp** como link markdown apontando para: [WhatsApp](https://wa.me/5511965469664). Exemplo de frase final: "Se preferir, você pode falar diretamente com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664)."`;

      // Build context from conversation history
      const formattedHistory = conversationHistory
        .map(
          (item: { role: string; content: string }) =>
            `${item.role === "user" ? "Cliente" : "Engenheiro TSI"}: ${item.content}`
        )
        .join("\n");

      const promptInput = `${systemPrompt}\n\nHistórico da Conversa:\n${formattedHistory}\n\nCliente: ${message}\nEngenheiro TSI:`;

      // Resilient model fallback chain
      const candidateModels = [
        "gemini-2.5-flash",
        "gemini-flash-latest",
        "gemini-3.8-flash",
        "gemini-3.1-flash-lite",
      ];

      let reply: string | null = null;
      let lastError: any = null;

      for (const modelName of candidateModels) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: promptInput,
          });
          if (response.text) {
            reply = response.text;
            break;
          }
        } catch (err: any) {
          lastError = err;
          console.warn(`Tentativa com ${modelName} falhou, tentando próximo modelo...`, err?.message || err);
        }
      }

      if (!reply) {
        // Technical fallback response if all AI models are temporarily saturated
        reply =
          "Olá! Sobre sua consulta técnica: na **TSI Assessoria & Engenharia**, analisamos cada caso com base na legislação municipal e normas técnicas ABNT (como a NBR 16280 para reformas e NBR 13752 para vistorias).\n\n" +
          "Para fornecer um parecer preliminar exato ou proposta sem compromisso, você pode clicar no botão de **Solicitar Orçamento** ou falar agora mesmo diretamente com nossa equipe de engenheiros pelo [WhatsApp](https://wa.me/5511965469664).";
      }

      return res.json({ reply, source: "gemini" });
    } catch (error: any) {
      console.error("Erro na API de Chat:", error);
      return res.json({
        reply:
          "Olá! Para agilizar seu atendimento técnico, nossa equipe de engenheiros da TSI está de prontidão no [WhatsApp](https://wa.me/5511965469664) para orientar sobre seu imóvel ou projeto!",
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
