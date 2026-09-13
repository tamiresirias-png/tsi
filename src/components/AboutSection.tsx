import React from 'react';
import { Award, Compass, Building, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image related to engineering / technical projects */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-white">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Plantas técnicas de engenharia civil e projetos de arquitetura"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center space-x-2 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4 text-sky-400" />
                  <span>Conhecimento Técnico & Registro</span>
                </div>
                <p className="text-sm font-medium text-slate-100">
                  Responsabilidade técnica e ética profissional em cada entrega.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
              <span>Sobre a TSI Assessoria & Engenharia</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B192C] leading-tight">
              Engenharia com visão prática.
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                A <strong className="text-[#0B192C] font-semibold">TSI Assessoria & Engenharia</strong> atua na área de engenharia oferecendo soluções técnicas para imóveis, obras e empreendimentos.
              </p>

              <p>
                Nosso trabalho une conhecimento técnico, organização e acompanhamento próximo para transformar processos complexos em soluções claras e eficientes.
              </p>

              <p>
                Da regularização à execução, buscamos entender cada situação individualmente e orientar nossos clientes em todas as etapas necessárias.
              </p>
            </div>

            {/* Practical Pillars */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="flex items-center space-x-3 bg-white p-3.5 rounded-lg border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="font-medium text-xs sm:text-sm">Foco em resolução e segurança jurídica</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3.5 rounded-lg border border-slate-200/70">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="font-medium text-xs sm:text-sm">Interlocução direta com o cliente</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
