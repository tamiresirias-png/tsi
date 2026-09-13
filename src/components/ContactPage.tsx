import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  Building,
  ArrowRight
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Regularização de imóveis',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 600);
  };

  const whatsappUrl = COMPANY_INFO.getWhatsappUrl(
    `Olá! Meu nome é ${formData.name || 'Cliente'} e gostaria de solicitar um orçamento para ${formData.serviceType}.`
  );

  return (
    <div className="w-full bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="bg-[#0B192C] text-white py-14 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-sky-300 px-3.5 py-1 rounded-full text-xs font-semibold backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Atendimento Técnico Especializado</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Fale com a TSI Assessoria & Engenharia
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Tire suas dúvidas, solicite uma vistoria técnica ou peça uma proposta personalizada para o seu imóvel ou empresa.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Channels & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-serif-display text-2xl font-medium text-[#0B192C] mb-3">
                  Canais de Atendimento
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Priorizamos a agilidade e a transparência. Você pode conversar diretamente com nossa equipe técnica pelo WhatsApp ou enviar sua solicitação pelo formulário.
                </p>
              </div>

              {/* Direct Cards */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={COMPANY_INFO.getWhatsappUrl('Olá! Gostaria de conversar com a equipe técnica da TSI Assessoria & Engenharia.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-emerald-50/40 p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 flex items-start space-x-4 transition-all shadow-2xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      WhatsApp Oficial
                    </h3>
                    <p className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {COMPANY_INFO.phone}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Atendimento rápido e direto com engenheiro
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="bg-white hover:bg-sky-50/40 p-5 rounded-2xl border border-slate-200 hover:border-sky-300 flex items-start space-x-4 transition-all shadow-2xs group"
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      E-mail Técnico
                    </h3>
                    <p className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {COMPANY_INFO.email}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Envio de projetos, plantas e notificações
                    </p>
                  </div>
                </a>

                {/* Região */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-start space-x-4 shadow-2xs">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                      Área de Atuação
                    </h3>
                    <p className="text-sm font-semibold text-slate-900">
                      São Paulo - SP & Região Metropolitana
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Capital, ABC Paulista, Osasco, Barueri e Grande SP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 5-Field Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-10 border border-slate-200/90 shadow-sm">
              <div className="mb-6">
                <h3 className="font-serif-display text-2xl font-medium text-[#0B192C]">
                  Solicitar Proposta ou Atendimento
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Preencha os dados abaixo. Retornaremos com uma estimativa técnica em até 24h úteis.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif-display text-2xl font-medium text-[#0B192C]">
                    Mensagem Recebida com Sucesso!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Obrigado pelo contato, <strong>{formData.name}</strong>. Nossa equipe de engenharia analisará sua demanda e entrará em contato pelo telefone/WhatsApp ou e-mail informado.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Enviar outra mensagem
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors inline-flex items-center space-x-1.5"
                    >
                      <span>Continuar pelo WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field 1: Nome completo */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Nome completo *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>

                  {/* Dual row: Telefone / WhatsApp & E-mail */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Field 2: Telefone / WhatsApp */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="(11) 96546-9664"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>

                    {/* Field 3: E-mail */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        E-mail *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Field 4: Tipo de serviço */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Tipo de serviço *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    >
                      <optgroup label="Serviços de Engenharia Civil">
                        <option value="Regularização de imóveis">Regularização de imóveis</option>
                        <option value="Desdobro de lote">Desdobro de lote</option>
                        <option value="Projetos (Legal, Estrutural ou Complementares)">Projetos (Legal, Estrutural ou Complementares)</option>
                        <option value="Laudos técnicos e perícias">Laudos técnicos e perícias</option>
                        <option value="AVCB e CLCB (Corpo de Bombeiros)">AVCB e CLCB (Corpo de Bombeiros)</option>
                        <option value="Usucapião (Topografia e Memorial)">Usucapião (Topografia e Memorial)</option>
                        <option value="Emissão de ART (Reformas NBR 16280)">Emissão de ART (Reformas NBR 16280)</option>
                        <option value="Acompanhamento de obras">Acompanhamento de obras</option>
                        <option value="Vistoria de entrega de chaves">Vistoria de entrega de chaves</option>
                      </optgroup>
                      <optgroup label="Assessoria Administrativa & Financeira">
                        <option value="Assessoria Administrativa Completa">Assessoria Administrativa Completa</option>
                        <option value="Organização Financeira e Fluxo de Caixa">Organização Financeira e Fluxo de Caixa</option>
                        <option value="Contas a Pagar e Receber">Contas a Pagar e Receber</option>
                        <option value="Organização de Processos e Rotinas">Organização de Processos e Rotinas</option>
                      </optgroup>
                      <optgroup label="Outros">
                        <option value="Outro serviço técnico">Outro serviço técnico / Dúvidas</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Field 5: Mensagem */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Mensagem ou Detalhes da Demanda *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Descreva brevemente a situação do imóvel ou da empresa, endereço/bairro ou se possui alguma notificação..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#F8FAFC] border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0B192C] hover:bg-[#1E3A5F] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSending ? (
                        <span>Enviando mensagem...</span>
                      ) : (
                        <>
                          <span>Enviar Solicitação de Orçamento</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      Seus dados estão protegidos de acordo com a LGPD e não serão compartilhados com terceiros.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
