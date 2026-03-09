import { Resend } from 'resend'

// Lazy init: il client viene creato solo a runtime, non durante la build
export function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

// Mittente: cambiare con noreply@tuodominio.it quando il dominio è pronto
export const EMAIL_FROM = 'Sito Pisanelli <onboarding@resend.dev>'
export const EMAIL_TO = process.env.CONTACT_EMAIL ?? 'autodemolizione.siriopisanelli@gmail.com'
