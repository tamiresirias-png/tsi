import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { 
  Award, 
  Clock, 
  ShieldCheck, 
  FileCheck2, 
  Send, 
  Building2, 
  CheckCircle, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';

interface ArtLaudoExpressProps {
  onOpenQuoteModal: (serviceType?: string) => void;
}

export const ArtLaudoExpress: React.FC<ArtLaudoExpressProps> = ({ onOpenQuoteModal }) => {
  const [apartmentName, setApartmentName] = useState('');
  const [reformaType, setReformaType] = useState('Paredes / Alvenaria');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmitExpress = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert('Por favor, informe seu nome e telefone.');
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceType: 'emissao-art-reformas',
          name: clientName,
          phone: clientPhone,
          propertyType: 'Apartamento em Condomínio',
          description: `Solicitação Expressa de ART NBR 16280 para reforma de: ${reformaType}. Condomínio/Edifício: ${apartmentName || 'Não informado'}`,
          urgency: 'alta'
        })
      });

      const data = await response.json();
      if (data.success) {
        setSuccessMessage(`Solicitação expressa de ART recebida com sucesso! Código de acompanhamento: ${data.trackingCode}. Nosso engenheiro entrará em contato em minutos.`);
        setClientName('');
        setClientPhone('');
        setApartmentName('');
      } else {
        alert('Erro ao enviar solicitação. Tente novamente ou use o WhatsApp.');
      }
    } catch (err) {
      // Fallback to direct WhatsApp
      const waText = `Olá TSI Engenharia! Preciso de emissão urgente de ART (NBR 16280) para reforma de ${reformaType} no condomínio ${apartmentName}. Nome: ${clientName}, Fone: ${clientPhone}.`;
      window.open(COMPANY_INFO.getWhatsappUrl(waText), '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="art-laudos" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold text-amber-400">
              <Award className="w-3.5 h-3.5" />
              <span>Emissão Expressa de A.R.T. em até 24 Horas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Precisa de <span className="text-amber-400">A.R.T. para Reforma</span> no seu Condomínio?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O síndico exigiu ART NBR 16280 e Plano de Reforma para liberar a obra do seu apartamento? Emitimos com respaldo técnico e agilidade para você não atrasar seus pedreiros e fornecedores.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Atendimento Rápido</h4>
                  <p className="text-xs text-slate-400">Análise técnica dos croquis e emissão no CREA em até 24 a 48h.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">100% de Acordo com a NBR 16280</h4>
                  <p className="text-xs text-slate-400">Plano de reforma completo exigido pelas administradoras de condomínio.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Para Todas as Modificações</h4>
                  <p className="text-xs text-slate-400">Remoção/abertura de paredes, instalações elétricas, gás, gesso, piso e fechamento de sacadas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Express Form Side */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-amber-400" />
                <span>Solicitação Expressa de A.R.T.</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Preencha os dados básicos abaixo para análise técnica imediata pelo nosso engenheiro.
              </p>
            </div>

            {successMessage ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle className="w-5 h-5" />
                  <span>Solicitação Confirmada!</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">{successMessage}</p>
                <button
                  onClick={() => setSuccessMessage(null)}
                  className="bg-emerald-600 text-white font-bold text-xs px-4 py-2 rounded-lg"
                >
                  Fazer outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitExpress} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Seu Nome Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Eduardo Silva"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">WhatsApp / Telefone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 96546-9664"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Tipo de Intervenção</label>
                    <select
                      value={reformaType}
                      onChange={(e) => setReformaType(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Demolição/Remoção de Paredes">Demolição / Remoção de Paredes</option>
                      <option value="Instalação Elétrica / Ar Condicionado">Instalação Elétrica / Ar Condicionado</option>
                      <option value="Troca de Revestimento e Piso">Troca de Revestimento e Piso</option>
                      <option value="Fechamento de Sacada / Vidro">Fechamento de Sacada / Envidraçamento</option>
                      <option value="Reforma Geral do Apartamento">Reforma Geral do Apartamento</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Nome do Condomínio / Edifício</label>
                  <input
                    type="text"
                    placeholder="Ex: Condomínio Residencial Bella Vista"
                    value={apartmentName}
                    onChange={(e) => setApartmentName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Processando solicitação...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitação de ART Urgente</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Retorno garantido no mesmo dia por Engenheiro Responsável.</span>
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
