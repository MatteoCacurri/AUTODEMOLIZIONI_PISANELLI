import { NextRequest, NextResponse } from 'next/server'
import { getResend, EMAIL_FROM, EMAIL_TO } from '@/lib/resend'
import { rottamazioneTemplate } from '@/lib/email-templates'

const rateMap = new Map<string, { count: number; resetAt: number }>()
const LIMIT = 3
const WINDOW_MS = 10 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  if (entry.count >= LIMIT) return true

  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Troppe richieste. Riprova tra qualche minuto.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Richiesta non valida.' }, { status: 400 })
  }

  const { nome, telefono, tipoVeicolo, note } = body as Record<string, string>

  if (!nome?.trim() || !telefono?.trim() || !tipoVeicolo?.trim()) {
    return NextResponse.json({ error: 'Campi obbligatori mancanti.' }, { status: 400 })
  }

  const { error } = await getResend().emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: `[Sito] Richiesta rottamazione: ${tipoVeicolo}`,
    html: rottamazioneTemplate({ nome, telefono, tipoVeicolo, note: note ?? '' }),
  })

  if (error) {
    console.error('Resend error (rottamazione):', error)
    return NextResponse.json(
      { error: 'Errore nell\'invio. Riprova o contattaci per telefono.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
