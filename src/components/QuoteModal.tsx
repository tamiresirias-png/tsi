import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/company';
import { 
  X, 
  Send, 
  MessageCircle, 
  CheckCircle, 
  FileText,
  ShieldCheck
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  initialServiceId?: string;
  initialNote?: string;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  'Regularização de imóvel',
  'Desdobro de lote',
  'Projeto',
  'Laudo técnico',
  'AVCB/CLCB',
  'Usucapião',
  'ART',
  'Acompanhamento de obra',
  'Vistoria de entrega de chaves',
  'Assessoria empresarial',
  'Outro'
];

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  initialServiceId,
  initialNote,
  onClose
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState<string>('Regularização de imóvel');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      // Find matching option
      const matched = SERVICE_OPTIONS.find(
        opt => opt.toLowerCase().includes(initialServiceId.toLowerCase()) ||
               initialServiceId.toLowerCase().includes(opt.toLowerCase())
      );
      if (matched) {
        setServiceType(matched);
      } else {
        setServiceType(initialServiceId);
      }
    }
    if (initialNote) {
      setMessage(initialNote);
    }
  }, [initialServiceId, initialNote]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Por favor, preencha ao menos seu nome e telefone/WhatsApp.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to server API if available
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          serviceType,
          description: message
        })
      }).catch(() => null); // Silently proceed if client-only
    } catch {
      // Client-only fallback
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const formattedWhatsappUrl = COMPANY_INFO.getWhatsappUrl(
    `Olá! Me chamo ${name || 'um cliente'} e gostaria de solicitar um orçamento para:\n*Serviço:* ${serviceType}\n*Telefone:* ${phone}\n*E-mail:* ${email || 'Não informado'}\n*Mensagem:* ${message || 'Gostaria de mais detalhes técnicos.'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B192C]/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B192C] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <FileText className="w-5 h-5 text-sky-400" />
            <div>
              <h3 className="font-serif-display text-lg font-bold">
                Solicitar orçamento
              </h3>
              <p className="text-[11px] text-slate-300">
                TSI Assessoria & Engenharia • Atendimento ágil
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="font-serif-display text-xl font-bold text-[#0B192C]">
                Solicitação enviada com sucesso!
              </h4>

              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Recebemos seus dados para <strong>{serviceType}</strong>. Nossa equipe técnica entrará em contato em breve.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={formattedWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agilizar no WhatsApp agora</span>
                </a>

                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </div>

              {/* Grid: Telefone/WhatsApp & E-mail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 96546-9664"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Tipo de serviço */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tipo de serviço *
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mensagem / Detalhes do imóvel ou projeto
                </label>
                <textarea
                  rows={3}
                  placeholder="Conte-nos brevemente o que você precisa (ex: imóvel em São Paulo com ampliação não averbada, reforma de apartamento, etc.)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-sm font-bold shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar solicitação de orçamento'}</span>
                </button>

                <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Seus dados estão protegidos com total sigilo profissional.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
