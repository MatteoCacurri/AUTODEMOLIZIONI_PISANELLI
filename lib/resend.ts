import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

// Mittente: cambiare con noreply@tuodominio.it quando il dominio è pronto
export const EMAIL_FROM = 'Sito Pisanelli <onboarding@resend.dev>'
export const EMAIL_TO = process.env.CONTACT_EMAIL ?? 'autodemolizione.siriopisanelli@gmail.com'
