import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import { COMPANY_INFO } from '../data/company';
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  MessageSquare, 
  MessageCircle,
  ExternalLink,
  X, 
  HardHat, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { ChatMessage } from '../types';

interface AiEngineerAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: (serviceType?: string) => void;
}

const PRESET_QUESTIONS = [
  "Como funciona o Laudo Técnico (LTA) para Vigilância Sanitária?",
  "Preciso de ART para derrubar uma parede drywall no meu apartamento?",
  "Qual a diferença entre Alvará de Aprovação e Habite-se?",
  "O que o engenheiro testa na Vistoria de Entrega de Chaves?",
  "Quanto tempo leva para regularizar um imóvel já construído em SP?"
];

export const AiEngineerAssistant: React.FC<AiEngineerAssistantProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Olá! Sou o **Assistente Virtual TSI**.\n\nComo posso orientar você hoje sobre **laudos técnicos para vigilância sanitária (LTA), regularização de imóveis, emissão de ART (NBR 16280), habite-se ou vistorias de entrega de chaves**?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const queryText = textToSend || inputMessage;
    if (!queryText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: queryText,
          conversationHistory: messages.map(m => ({ role: m.sender, content: m.text }))
        })
      });

      const data = await response.json();

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply || 'Desculpe, não consegui obter a resposta no momento. Entre em contato direto com a TSI Engenharia via WhatsApp.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        sender: 'bot',
        text: `Olá! Tivemos uma breve oscilação de conexão. Nossa equipe técnica de engenheiros está online no [WhatsApp](https://wa.me/5511965469664) para te atender prontamente!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl h-[650px] max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-800">
        
        {/* Header */}
        <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center shadow-sm">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-sm font-bold text-slate-900">Assistente Virtual TSI</h3>
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </span>
              </div>
              <p className="text-[11px] text-slate-500">Tira-dúvidas técnico • Legislação e Normas ABNT</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/70">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-sky-600 text-white font-medium rounded-tr-none'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                }`}
              >
                {msg.sender === 'user' ? (
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                ) : (
                  <div className="space-y-2">
                    <Markdown
                      components={{
                        strong: ({ children }) => (
                          <strong className="font-bold text-slate-950">{children}</strong>
                        ),
                        b: ({ children }) => (
                          <strong className="font-bold text-slate-950">{children}</strong>
                        ),
                        a: ({ href, children }) => {
                          const isWhatsapp = href?.includes('wa.me') || href?.includes('whatsapp');
                          return (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={
                                isWhatsapp
                                  ? 'inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors my-1 shadow-xs no-underline'
                                  : 'text-sky-700 hover:text-sky-900 font-bold underline underline-offset-2 decoration-sky-300 hover:decoration-sky-600 transition-colors inline-flex items-center gap-0.5'
                              }
                            >
                              {isWhatsapp && <MessageCircle className="w-3.5 h-3.5" />}
                              <span>{children}</span>
                              {!isWhatsapp && <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />}
                            </a>
                          );
                        },
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0 leading-relaxed text-slate-700">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="my-2 ml-4 list-disc space-y-1 text-slate-700">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="my-2 ml-4 list-decimal space-y-1 text-slate-700">{children}</ol>
                        ),
                        li: ({ children }) => (
                          <li className="leading-relaxed pl-1">{children}</li>
                        ),
                        h1: ({ children }) => (
                          <h4 className="font-bold text-slate-900 text-sm mt-3 mb-1.5">{children}</h4>
                        ),
                        h2: ({ children }) => (
                          <h4 className="font-bold text-slate-900 text-sm mt-3 mb-1.5">{children}</h4>
                        ),
                        h3: ({ children }) => (
                          <h5 className="font-bold text-sky-800 text-xs tracking-wide uppercase mt-3 mb-1">{children}</h5>
                        ),
                        hr: () => (
                          <hr className="my-3 border-slate-200" />
                        ),
                        code: ({ children }) => (
                          <code className="bg-slate-100 text-sky-800 font-mono text-[11px] px-1.5 py-0.5 rounded border border-slate-200">
                            {children}
                          </code>
                        )
                      }}
                    >
                      {msg.text}
                    </Markdown>
                  </div>
                )}
                <div className={`text-[10px] text-right mt-2 ${msg.sender === 'user' ? 'text-sky-100' : 'text-slate-400'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700 shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center space-x-2 text-xs text-sky-900 bg-sky-50 p-3 rounded-xl border border-sky-200 w-fit">
              <RefreshCw className="w-4 h-4 animate-spin text-sky-600" />
              <span>Analisando normas técnicas ABNT e diretrizes em São Paulo...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Preset Questions Chips */}
        {messages.length < 3 && (
          <div className="p-3 bg-white border-t border-slate-200 space-y-1.5">
            <span className="text-[11px] text-slate-500 font-bold block">Perguntas Rápidas:</span>
            <div className="flex flex-wrap gap-1.5">
              {PRESET_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="text-[11px] bg-slate-100 hover:bg-sky-50 hover:border-sky-300 text-slate-700 hover:text-slate-900 border border-slate-200 px-2.5 py-1.5 rounded-lg text-left transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 space-y-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Digite sua dúvida sobre laudos, ART, regularização, vistoria..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10"
            />

            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold p-3 rounded-xl transition-all disabled:opacity-50 shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 pt-0.5">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              TSI Engenharia • CREA-SP Habilitado
            </span>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/5511965469664"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1.5 hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <span className="text-slate-300">•</span>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="text-sky-700 hover:underline font-bold flex items-center gap-1"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
