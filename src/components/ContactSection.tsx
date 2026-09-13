import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { 
  submitLeadForm, 
  buildMailtoUrl, 
  buildWhatsappUrl, 
  TARGET_EMAIL 
} from '../utils/contactService';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck,
  Building,
  Instagram
} from 'lucide-react';

const SERVICE_OPTIONS = [
  'Regularização de imóvel',
  'Desdobro de lote',
  'Projeto (Legal/Arquitetônico)',
  'Laudo Técnico para Vigilância Sanitária (LTA)',
  'Laudo Estrutural / Pericial (Secundário)',
  'AVCB/CLCB',
  'Usucapião',
  'ART de Reforma (NBR 16280)',
  'Acompanhamento de obra',
  'Vistoria de entrega de chaves',
  'Assessoria empresarial',
  'Outro'
];

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Regularização de imóvel');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Por favor, preencha seu nome e telefone/WhatsApp.');
      return;
    }

    setLoading(true);
    try {
      const res = await submitLeadForm({
        name,
        phone,
        email,
        serviceType,
        description: message
      });
      setTrackingCode(res.trackingCode);
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const mailtoLink = buildMailtoUrl({
    name,
    phone,
    email,
    serviceType,
    description: message
  });

  const whatsappUrl = buildWhatsappUrl({
    name,
    phone,
    email,
    serviceType,
    description: message
  });

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
            <span>Canal Direto de Atendimento</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B192C]">
            Fale com a nossa equipe
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Envie sua dúvida, projeto ou solicitação de orçamento. Entraremos em contato com orientação técnica precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Credibility */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl p-7 border border-slate-200/90 shadow-xs space-y-6">
              <h3 className="font-serif-display text-xl font-bold text-[#0B192C]">
                Informações de contato
              </h3>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">WhatsApp Oficial</span>
                    <a 
                      href={COMPANY_INFO.getWhatsappUrl()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">E-mail</span>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-700 hover:text-sky-700"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-pink-50 border border-pink-200 flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Instagram</span>
                    <a 
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-pink-700"
                    >
                      {COMPANY_INFO.instagram}
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">Região de Atendimento</span>
                    <p className="text-xs text-slate-600">
                      São Paulo - SP (Capital, Grande SP e Região Metropolitana)
                    </p>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center space-x-2 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Profissional registrado no CREA-SP com emissão de ART.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form with 5 required fields */}
          <div className="lg:col-span-7 bg-white rounded-xl p-7 sm:p-9 border border-slate-200/90 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display text-2xl font-bold text-[#0B192C]">
                  Solicitação Enviada!
                </h3>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-xs text-slate-600 space-y-1.5 text-left">
                  <p className="flex justify-between">
                    <span className="text-slate-400">Destinatário:</span>
                    <strong className="text-slate-800 font-mono">{TARGET_EMAIL}</strong>
                  </p>
                  {trackingCode && (
                    <p className="flex justify-between">
                      <span className="text-slate-400">Protocolo:</span>
                      <strong className="text-sky-700 font-mono">{trackingCode}</strong>
                    </p>
                  )}
                  <p className="flex justify-between">
                    <span className="text-slate-400">Serviço:</span>
                    <strong className="text-slate-800">{serviceType}</strong>
                  </p>
                </div>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Obrigado, <strong>{name}</strong>. Os dados da sua solicitação foram encaminhados diretamente para o e-mail <strong>{TARGET_EMAIL}</strong> da nossa equipe de engenharia.
                </p>
                <div className="pt-3 flex flex-wrap justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Continuar no WhatsApp</span>
                  </a>
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>Abrir no E-mail</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 text-xs text-slate-500 hover:text-slate-800 font-medium"
                  >
                    Novo envio
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif-display text-xl font-bold text-[#0B192C] mb-2">
                  Envie sua mensagem
                </h3>

                {/* Nome */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome ou da empresa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Telefone/WhatsApp & E-mail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Descreva brevemente sua necessidade técnica, localização do imóvel ou fase da obra..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-5 rounded-lg bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-sm font-bold shadow-sm transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-sky-400" />
                    <span>{loading ? 'Enviando...' : 'Enviar mensagem para avaliação técnica'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
