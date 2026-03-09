import { Resend } from 'resend'

// Lazy init: il client viene creato solo a runtime, non durante la build
export function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export const EMAIL_FROM = 'Autodemolizioni Pisanelli <noreply@autodemolizionipisanelli.it>'
export const EMAIL_TO = process.env.CONTACT_EMAIL ?? 'autodemolizione.siriopisanelli@gmail.com'
