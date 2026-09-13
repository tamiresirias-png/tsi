export const COMPANY_INFO = {
  name: 'TSI Assessoria & Engenharia',
  shortName: 'TSI Engenharia',
  tagline: 'Engenharia que resolve, regulariza e acompanha',
  phone: '(11) 96546-9664',
  phoneRaw: '5511965469664',
  email: 'tamiresirias@gmail.com',
  instagram: '@tsiassessoria',
  instagramUrl: 'https://instagram.com/tsiassessoria',
  crea: 'CREA-SP Registrado',
  region: 'São Paulo - SP e Região Metropolitana',
  
  getWhatsappUrl: (customMessage?: string) => {
    const text = customMessage || 'Olá! Gostaria de falar com a TSI Assessoria & Engenharia.';
    return `https://wa.me/5511965469664?text=${encodeURIComponent(text)}`;
  }
};
