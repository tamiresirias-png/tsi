import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

import { getTechnicalKnowledgeReply } from "./src/data/assistantKnowledge.ts";

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

Seu tom é técnico, porém altamente acessível, cordial, transparente e profissional.

DIRETRIZES ABSOLUTAS DE RESPOSTA:
1. ENTENDA E RESPONDA EXATAMENTE AO QUE FOI PERGUNTADO:
   - Identifique com precisão a dúvida do usuário e responda diretamente a ela. Não responda com textos promocionais genéricos ou apresentações institucionais repetitivas se o cliente fez uma pergunta pontual (ex: se perguntou "quanto tempo demora", explique prazos e etapas; se perguntou se precisa de ART para drywall, responda sobre a NBR 16280 e as exigências do condomínio).

2. SE NÃO TIVER A INFORMAÇÃO ESPECÍFICA:
   - Se o cliente perguntar algo sobre o qual você não tenha informações suficientes (como regras particulares de um condomínio específico não informadas, andamento de um processo interno sem número de protocolo, dados particulares que dependem de análise in loco dos documentos, ou dúvidas fora do escopo de engenharia da TSI), SEJA TRANSPARENTE:
   - Explique claramente que não possui essa informação específica no momento e oriente o cliente a entrar em contato com a equipe de engenheiros da TSI pelo [WhatsApp](https://wa.me/5511965469664) para que possam analisar a situação individualmente.

3. PERGUNTAS SOBRE VALORES, CUSTOS, PREÇOS E ORÇAMENTOS (REGRA ESSENCIAL):
   - Se o cliente perguntar sobre valores, custos, preços, taxas ou orçamentos (ex: "quanto custa?", "qual o valor da ART?", "quanto cobram pelo laudo?", "qual o preço do Habite-se?"):
   - NUNCA invente preços ou forneça valores fixos de tabela.
   - Explique educadamente que serviços de engenharia civil, laudos e regularizações NÃO possuem preço fixo de prateleira, pois o investimento depende diretamente das características técnicas e legais de cada caso:
     * Metragem quadrada e área construída do imóvel ou da intervenção;
     * Grau de complexidade técnica (intervenção estrutural, fluxos de saúde da RDC 50, vícios construtivos, laudo pericial cível, etc.);
     * Localização do imóvel e exigências do órgão competente (Prefeitura, CREA-SP, COVISA/CVS, Corpo de Bombeiros);
     * Taxas públicas oficiais (taxa de registro da ART no CREA-SP e emolumentos municipais/cartorários).
   - Explique que, por essa razão técnica e ética, a TSI avalia cada imóvel individualmente para apresentar uma proposta precisa, justa e sem custos imprevistos.
   - Peça expressamente que o cliente entre em contato diretamente com os engenheiros da TSI pelo [WhatsApp](https://wa.me/5511965469664) informando os dados básicos do imóvel/obra para receber um orçamento detalhado e sem compromisso.

DIRETRIZES DE FORMATAÇÃO E CONTATO:
- Responda em no máximo 3 ou 4 parágrafos objetivos e bem estruturados.
- Use Markdown limpo.
- Utilize negrito com dois asteriscos (**termo**) para destacar palavras-chave, normas ABNT (ex: **ABNT NBR 16280**), documentos (ex: **ART no CREA-SP**, **Habite-se**) e órgãos.
- Use listas com marcadores (-) quando elencar itens ou etapas.
- Para contato ou link do WhatsApp, NUNCA escreva os dígitos do número de telefone no texto da resposta. Escreva SEMPRE e EXCLUSIVAMENTE a palavra **WhatsApp** como link markdown apontando para: [WhatsApp](https://wa.me/5511965469664). Exemplo de frase final: "Para maiores informações e solicitar um orçamento personalizado para o seu caso, fale diretamente com nossos engenheiros pelo [WhatsApp](https://wa.me/5511965469664)."`;

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
