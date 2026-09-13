export type PageView = 'home' | 'servicos' | 'como-funciona' | 'sobre' | 'cobertura' | 'contato';

export interface ServiceItem {
  id: string;
  category: 'engenharia' | 'assessoria' | 'regularizacao' | 'licenciamento' | 'vistorias' | 'projetos' | 'laudos';
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge?: string;
  highlights: string[];
  deliverables: string[];
  whatItInvolves: string[];
  benefits: string[];
  whenNeeded: string[];
  estimatedTime?: string;
  normaRef?: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  serviceType: string;
  propertyType: string;
  urgency: 'alta' | 'media' | 'normal';
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  clientType: string;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  badge: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'engenharia' | 'art' | 'regularizacao' | 'vistorias' | 'assessoria';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
