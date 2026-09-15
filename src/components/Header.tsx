import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/company';
import { 
  Phone, 
  Menu, 
  X, 
  MessageCircle,
  FileText,
  Bot,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (serviceType?: string) => void;
  onOpenAiAssistant?: () => void;
  currentPage?: PageView;
  onNavigateToView?: (view: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenQuoteModal,
  onOpenAiAssistant,
  currentPage = 'home',
  onNavigateToView
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, view: PageView = 'home') => {
    setIsMobileMenuOpen(false);
    if (onNavigateToView) {
      onNavigateToView(view);
    }
    setTimeout(() => {
      if (view === 'home' && sectionId !== 'inicio') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const getNavLinkClass = (view: PageView) => {
    const isActive = currentPage === view;
    return `text-sm font-semibold transition-all relative py-1 ${
      isActive 
        ? 'text-[#0B192C] font-bold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-[#0B192C]' 
        : 'text-slate-600 hover:text-[#0B192C]'
    }`;
  };

  const whatsappUrl = COMPANY_INFO.getWhatsappUrl(
    'Olá! Gostaria de tirar dúvidas com a equipe da TSI Assessoria & Engenharia.'
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow duration-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Exact Official Emblem */}
          <div className="shrink-0 flex items-center">
            <Logo 
              theme="dark" 
              size="header" 
              variant="emblem"
              onClick={() => handleNavClick('inicio', 'home')} 
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('inicio', 'home')}
              className={getNavLinkClass('home')}
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('servicos', 'servicos')}
              className={getNavLinkClass('servicos')}
            >
              Nossos Serviços
            </button>
            <button
              onClick={() => handleNavClick('como-funciona', 'como-funciona')}
              className={getNavLinkClass('como-funciona')}
            >
              Como funciona
            </button>
            <button
              onClick={() => handleNavClick('sobre', 'sobre')}
              className={getNavLinkClass('sobre')}
            >
              Sobre nós
            </button>
            <button
              onClick={() => handleNavClick('contato', 'contato')}
              className={getNavLinkClass('contato')}
            >
              Contato
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2.5">
            {/* Assistente Virtual TSI */}
            {onOpenAiAssistant && (
              <button
                onClick={onOpenAiAssistant}
                className="inline-flex items-center space-x-1.5 text-xs font-bold px-3 py-2.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0B192C] border border-sky-300 shadow-2xs transition-all"
                title="Tirar dúvidas com o Assistente Virtual TSI"
              >
                <Bot className="w-3.5 h-3.5 text-sky-600" />
                <span>Assistente Virtual TSI</span>
              </button>
            )}

            {/* WhatsApp Quick Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold px-3.5 py-2.5 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors"
              title="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Highlighted Quote Request Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center space-x-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-[#0B192C] hover:bg-[#1E3A5F] text-white shadow-sm hover:shadow transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Solicitar orçamento</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            {onOpenAiAssistant && (
              <button
                onClick={onOpenAiAssistant}
                className="inline-flex items-center space-x-1 text-xs font-bold px-2.5 py-2 rounded-md bg-sky-100 text-sky-900 border border-sky-300"
                title="Assistente Virtual TSI"
              >
                <Bot className="w-3.5 h-3.5 text-sky-700" />
                <span>IA TSI</span>
              </button>
            )}
            <button
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden text-xs font-bold px-3 py-2 rounded-md bg-[#0B192C] text-white"
            >
              Orçamento
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick('inicio', 'home')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
              currentPage === 'home' ? 'bg-[#0B192C] text-white' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => handleNavClick('servicos', 'servicos')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
              currentPage === 'servicos' ? 'bg-[#0B192C] text-white' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Nossos Serviços
          </button>
          <button
            onClick={() => handleNavClick('como-funciona', 'como-funciona')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
              currentPage === 'como-funciona' ? 'bg-[#0B192C] text-white' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Como funciona
          </button>
          <button
            onClick={() => handleNavClick('sobre', 'sobre')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
              currentPage === 'sobre' ? 'bg-[#0B192C] text-white' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Sobre nós
          </button>
          <button
            onClick={() => handleNavClick('contato', 'contato')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
              currentPage === 'contato' ? 'bg-[#0B192C] text-white' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Contato
          </button>

          <div className="pt-3 border-t border-slate-100 space-y-2.5">
            {onOpenAiAssistant && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAiAssistant();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-300 text-[#0B192C] text-sm font-bold shadow-2xs"
              >
                <Bot className="w-4 h-4 text-sky-600" />
                <span>Assistente Virtual TSI</span>
              </button>
            )}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-[#0B192C] text-white text-sm font-bold shadow-sm"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Solicitar orçamento</span>
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg border border-emerald-300 text-emerald-800 bg-emerald-50 text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
