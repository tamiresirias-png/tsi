import React, { useState } from 'react';
import { PageView } from '../types';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/company';
import { 
  Phone, 
  Mail, 
  Instagram, 
  ShieldCheck, 
  ArrowUp,
  X
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onNavigateToView?: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenQuoteModal, 
  onNavigateToSection,
  onNavigateToView 
}) => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    if (onNavigateToView) {
      onNavigateToView('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (view: PageView) => {
    if (onNavigateToView) {
      onNavigateToView(view);
    } else {
      onNavigateToSection(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B192C] text-slate-300 text-xs border-t border-slate-800 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Compact Row: Brand + Essential Contacts + Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Brand & Concept */}
          <div className="space-y-2 max-w-sm">
            <Logo 
              theme="light" 
              size="sm" 
              variant="emblem"
              onClick={scrollToTop} 
            />
            <p className="text-slate-400 text-xs leading-relaxed">
              Engenharia que resolve, regulariza e acompanha. Soluções técnicas para imóveis, obras e regularização documental com responsabilidade CREA-SP.
            </p>
          </div>

          {/* Essential Direct Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 text-xs">
            {/* Telefone / WhatsApp */}
            <a
              href={COMPANY_INFO.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800/60">
                <Phone className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">WhatsApp / Fone</span>
                <span className="text-white font-semibold group-hover:text-emerald-300 transition-colors">
                  {COMPANY_INFO.phone}
                </span>
              </div>
            </a>

            {/* E-mail */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-950/80 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800/60">
                <Mail className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">E-mail</span>
                <span className="text-white font-semibold group-hover:text-sky-300 transition-colors">
                  {COMPANY_INFO.email}
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-pink-950/60 text-pink-400 flex items-center justify-center shrink-0 border border-pink-800/60">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Instagram</span>
                <span className="text-white font-semibold group-hover:text-pink-300 transition-colors">
                  {COMPANY_INFO.instagram}
                </span>
              </div>
            </a>
          </div>

        </div>

        {/* Compact Bottom Bar: Quick Links, Copyright, Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          {/* Quick navigation */}
          <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-5">
            <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
              Início
            </button>
            <button onClick={() => handleNav('servicos')} className="hover:text-white transition-colors">
              Nossos Serviços
            </button>
            <button onClick={() => handleNav('como-funciona')} className="hover:text-white transition-colors">
              Como funciona
            </button>
            <button onClick={() => handleNav('sobre')} className="hover:text-white transition-colors">
              Sobre a empresa
            </button>
            <button onClick={() => handleNav('contato')} className="hover:text-white transition-colors">
              Contato
            </button>
            <button 
              onClick={() => setIsPrivacyModalOpen(true)} 
              className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-4"
            >
              Privacidade
            </button>
          </nav>

          {/* Legal and Top button */}
          <div className="flex items-center space-x-4 text-[11px]">
            <span>&copy; {new Date().getFullYear()} TSI Assessoria &amp; Engenharia</span>
            <button 
              onClick={scrollToTop} 
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Discrete Privacy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-serif-display text-lg font-bold text-[#0B192C]">
                Política de Privacidade &amp; LGPD
              </h3>
              <button 
                onClick={() => setIsPrivacyModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-slate-600 leading-relaxed space-y-2">
              <p>
                A <strong>TSI Assessoria &amp; Engenharia</strong> preza pela segurança e confidencialidade das informações de seus clientes.
              </p>
              <p>
                Os dados enviados por meio de formulários ou WhatsApp (nome, telefone, e-mail e informações sobre o imóvel) são utilizados estritamente para o dimensionamento técnico, elaboração de orçamentos e prestação de serviços de engenharia civil.
              </p>
              <p>
                Contato para requisições de privacidade: <strong>{COMPANY_INFO.email}</strong> ou pelo WhatsApp <strong>{COMPANY_INFO.phone}</strong>.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#0B192C] text-white text-xs font-bold"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
