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
3. Laudos Técnicos & Perícias (Vistoria Cautelar, Inspeção Predial, Estabilidade, Infiltrações/Patologias).
4. Vistoria de Entrega de Chaves (Acompanhamento no recebimento de imóvel novo/usado com checklist de mais de 45 itens).
5. Acompanhamento e Fiscalização de Obras (Diário de obra, controle de qualidade, cronograma e gestão).
6. Projetos de Engenharia (Arquitetônico, Estrutural, Elétrico, Hidrossanitário e PPCI - Bombeiros).
7. Assessoria Administrativa (Licenciamentos, Vigilância Sanitária, Cartórios e Suporte para Financiamento Imobiliário).

Sempre convide o cliente de forma gentil a solicitar um orçamento sem compromisso ou falar com nossa equipe de engenheiros pelo WhatsApp da TSI Engenharia.
Mantenha as respostas bem formatadas com tópicos limpos.`;

      // Build context from conversation history
      const formattedHistory = conversationHistory
        .map(
          (item: { role: string; content: string }) =>
            `${item.role === "user" ? "Cliente" : "Engenheiro TSI"}: ${item.content}`
        )
        .join("\n");

      const promptInput = `${systemPrompt}\n\nHistórico da Conversa:\n${formattedHistory}\n\nCliente: ${message}\nEngenheiro TSI:`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: promptInput,
      });

      const reply =
        response.text ||
        "Desculpe, tive um pequeno contratempo técnico. Por favor, tente novamente ou entre em contato direto com a TSI Engenharia via WhatsApp.";

      return res.json({ reply, source: "gemini" });
    } catch (error: any) {
      console.error("Erro na API de Chat:", error);
      return res.status(500).json({
        reply:
          "Olá! Ocorreu uma oscilação na conexão do assistente. Nossa equipe técnica da TSI Engenharia está à disposição via WhatsApp para te ajudar imediatamente!",
        error: error.message,
      });
    }
  });

  // Quote & Inspection Request API Endpoint
  app.post("/api/quote", (req, res) => {
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

      return res.json({
        success: true,
        trackingCode,
        message: "Solicitação recebida com sucesso! Um engenheiro da TSI entrará em contato em breve.",
        details: {
          serviceType,
          name,
          phone,
          city: city || "Não informado",
          urgency: urgency || "Normal",
        },
      });
    } catch (err: any) {
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
