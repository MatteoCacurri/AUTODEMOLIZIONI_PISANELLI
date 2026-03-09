import { NextRequest, NextResponse } from 'next/server'
import { getResend, EMAIL_FROM, EMAIL_TO } from '@/lib/resend'
import { ricambioTemplate } from '@/lib/email-templates'

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

  const { marcaModello, anno, ricambio, telefono } = body as Record<string, string>

  if (!marcaModello?.trim() || !ricambio?.trim() || !telefono?.trim()) {
    return NextResponse.json({ error: 'Campi obbligatori mancanti.' }, { status: 400 })
  }

  const { error } = await getResend().emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: `[Sito] Ricambio: ${ricambio} – ${marcaModello}`,
    html: ricambioTemplate({ marcaModello, anno: anno ?? '', ricambio, telefono }),
  })

  if (error) {
    console.error('Resend error (ricambio):', error)
    return NextResponse.json(
      { error: 'Errore nell\'invio. Riprova o contattaci per telefono.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
