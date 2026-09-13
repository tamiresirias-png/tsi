import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { HowItWorksPage } from './components/HowItWorksPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { AiEngineerAssistant } from './components/AiEngineerAssistant';
import { LogoManager } from './components/LogoManager';
import { Bot, Sparkles } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);
  const [quoteNote, setQuoteNote] = useState<string | undefined>(undefined);

  // Scroll to top whenever page view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleOpenQuoteModal = (serviceId?: string, note?: string) => {
    setQuoteServiceId(serviceId);
    setQuoteNote(note);
    setIsQuoteModalOpen(true);
  };

  const handleNavigateToSection = (sectionId: string) => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans flex flex-col justify-between selection:bg-sky-100 selection:text-slate-900">
      
      {/* 1. Fixed Header */}
      <Header 
        currentPage={currentView}
        onNavigateToView={(view) => setCurrentView(view)}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomePage 
            onNavigate={(view) => setCurrentView(view)}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
          />
        )}

        {currentView === 'servicos' && (
          <ServicesPage 
            onNavigate={(view) => setCurrentView(view)}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
          />
        )}

        {currentView === 'como-funciona' && (
          <HowItWorksPage 
            onNavigate={(view) => setCurrentView(view)}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentView === 'sobre' && (
          <AboutPage 
            onNavigate={(view) => setCurrentView(view)}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentView === 'contato' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onNavigateToSection={handleNavigateToSection}
        onNavigateToView={(view) => setCurrentView(view)}
      />

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        initialServiceId={quoteServiceId}
        initialNote={quoteNote}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* AI Assistant Modal for Simple Technical Questions */}
      <AiEngineerAssistant
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Floating Action Buttons */}
      {/* 1. AI Quick Questions Floating Button */}
      <button
        onClick={() => setIsAiAssistantOpen(true)}
        className="fixed bottom-20 right-6 z-40 bg-[#0A192F] hover:bg-[#1E3A5F] text-white px-4 py-2.5 rounded-full shadow-xl border border-sky-400/30 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 group ring-2 ring-sky-500/20"
        title="Assistente Virtual TSI"
        aria-label="Abrir Assistente Virtual TSI"
      >
        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shrink-0" />
        <Bot className="w-4 h-4 text-sky-300 shrink-0 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold text-slate-100">Assistente Virtual TSI</span>
      </button>

      {/* 2. Direct WhatsApp Contact Button */}
      <WhatsAppFloatingButton />

      {/* 3. Official Logo Upload & Sync Manager */}
      <LogoManager />
    </div>
  );
}
