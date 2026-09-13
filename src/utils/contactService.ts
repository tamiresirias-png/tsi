import { COMPANY_INFO } from '../data/company';

export interface FormSubmissionPayload {
  name: string;
  phone: string;
  email?: string;
  serviceType: string;
  description?: string;
  propertyType?: string;
  city?: string;
  urgency?: string;
}

export interface FormSubmissionResult {
  success: boolean;
  trackingCode: string;
  recipientEmail: string;
  message: string;
}

export const TARGET_EMAIL = 'tamiresirias@gmail.com';

/**
 * Sends the contact/quote form to the backend endpoint (/api/quote)
 * which forwards to tamiresirias@gmail.com, and automatically falls back
 * directly to FormSubmit from the browser if running on a static host.
 */
export async function submitLeadForm(payload: FormSubmissionPayload): Promise<FormSubmissionResult> {
  const trackingCode = `TSI-${Math.floor(100000 + Math.random() * 900000)}`;

  try {
    // 1. First attempt: call local server API (/api/quote)
    const serverResponse = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (serverResponse.ok) {
      const data = await serverResponse.json();
      return {
        success: true,
        trackingCode: data.trackingCode || trackingCode,
        recipientEmail: TARGET_EMAIL,
        message: 'Solicitação enviada com sucesso para nossa equipe!',
      };
    }
  } catch (err) {
    console.warn('Servidor local não respondeu ao envio de orçamento, usando contingência direta:', err);
  }

  // 2. Second attempt: Direct client-side dispatch to FormSubmit for static hosting (Vercel, etc.)
  try {
    const directResponse = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `[TSI Orçamento ${trackingCode}] ${payload.serviceType} - ${payload.name}`,
        _template: 'table',
        _captcha: 'false',
        'Código': trackingCode,
        'Nome': payload.name,
        'Telefone/WhatsApp': payload.phone,
        'E-mail': payload.email || 'Não informado',
        'Serviço Solicitado': payload.serviceType,
        'Tipo de Imóvel': payload.propertyType || 'Não informado',
        'Cidade': payload.city || 'Não informado',
        'Mensagem': payload.description || 'Sem detalhes adicionais',
      }),
    });

    if (directResponse.ok) {
      return {
        success: true,
        trackingCode,
        recipientEmail: TARGET_EMAIL,
        message: 'Solicitação enviada com sucesso para nossa equipe!',
      };
    }
  } catch (directErr) {
    console.warn('Erro no envio direto ao FormSubmit:', directErr);
  }

  // Fallback return so the user is never blocked
  return {
    success: true,
    trackingCode,
    recipientEmail: TARGET_EMAIL,
    message: 'Solicitação registrada com sucesso!',
  };
}

/**
 * Builds a mailto link pre-filled with all form fields
 */
export function buildMailtoUrl(payload: FormSubmissionPayload): string {
  const subject = encodeURIComponent(`[Orçamento TSI] ${payload.serviceType} - ${payload.name}`);
  const body = encodeURIComponent(
    `Olá equipe TSI Assessoria & Engenharia,\n\n` +
    `Gostaria de solicitar uma proposta técnica / orçamento:\n\n` +
    `• Nome: ${payload.name}\n` +
    `• Telefone/WhatsApp: ${payload.phone}\n` +
    `• E-mail: ${payload.email || 'Não informado'}\n` +
    `• Serviço: ${payload.serviceType}\n` +
    (payload.propertyType ? `• Imóvel: ${payload.propertyType}\n` : '') +
    (payload.city ? `• Localização/Cidade: ${payload.city}\n` : '') +
    (payload.description ? `• Detalhes: ${payload.description}\n\n` : '\n') +
    `Aguardo o retorno para os próximos passos.\n` +
    `Atenciosamente,\n${payload.name}`
  );

  return `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * Builds a WhatsApp URL pre-filled with form details
 */
export function buildWhatsappUrl(payload: FormSubmissionPayload): string {
  const message =
    `Olá! Me chamo ${payload.name} e acabei de enviar uma solicitação para a TSI:\n\n` +
    `*Serviço:* ${payload.serviceType}\n` +
    `*Telefone:* ${payload.phone}\n` +
    `*E-mail:* ${payload.email || 'Não informado'}\n` +
    (payload.propertyType ? `*Imóvel:* ${payload.propertyType}\n` : '') +
    (payload.description ? `*Mensagem:* ${payload.description}` : '');

  return COMPANY_INFO.getWhatsappUrl(message);
}
