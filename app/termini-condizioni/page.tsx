import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Termini e Condizioni',
  description: 'Termini e condizioni di utilizzo del sito Autodemolizioni Pisanelli srl.',
  robots: { index: false, follow: false },
}

export default function TerminiCondizioniPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Termini e Condizioni</h1>
        <p className="text-gray-400 text-sm mb-10">
          Ultimo aggiornamento: marzo 2026
        </p>

        <section className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Titolare del sito</h2>
            <p>
              {COMPANY.name}<br />
              P.IVA: {COMPANY.vatNumber} · Cod. SDI: {COMPANY.sdiCode}<br />
              {COMPANY.address.full}<br />
              Email: {COMPANY.contacts.email}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Oggetto</h2>
            <p>
              Il presente sito web fornisce informazioni sui servizi di autodemolizione,
              rottamazione veicoli e vendita di ricambi usati offerti da {COMPANY.name}.
              L&apos;utilizzo del sito implica l&apos;accettazione dei presenti termini e condizioni.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. Trattamento dei dati nei form</h2>
            <p>
              I dati inseriti nei form del sito (nome, numero di telefono, messaggio) vengono
              utilizzati esclusivamente per rispondere alla richiesta dell&apos;utente.
              Per la trasmissione delle email viene utilizzato il servizio Resend (Resend Inc.),
              che elabora i dati al solo fine della consegna e non li conserva per finalità
              di marketing. Per maggiori informazioni consultare la{' '}
              <a
                href="https://www.iubenda.com/privacy-policy/36659174"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline"
              >
                Privacy Policy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. Servizi del sito</h2>
            <p>Attraverso il sito è possibile:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Richiedere preventivi per la rottamazione del proprio veicolo</li>
              <li>Informarsi sui ricambi usati disponibili</li>
              <li>Contattare lo staff per informazioni sui servizi</li>
            </ul>
            <p className="mt-3">
              Le richieste effettuate tramite i form del sito non costituiscono contratto.
              Il contratto si perfeziona esclusivamente con la conferma scritta o verbale
              da parte di {COMPANY.name}.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Prezzi e preventivi</h2>
            <p>
              I preventivi comunicati telefonicamente, via WhatsApp o tramite i form del sito
              sono indicativi e soggetti a verifica delle condizioni effettive del veicolo o
              del pezzo richiesto. Il prezzo definitivo viene concordato al momento del ritiro
              o della consegna.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Responsabilità</h2>
            <p>
              {COMPANY.name} non è responsabile per eventuali imprecisioni nelle informazioni
              presenti sul sito, per interruzioni del servizio o per danni derivanti dall&apos;utilizzo
              delle informazioni pubblicate. Le immagini presenti sono a scopo illustrativo.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Proprietà intellettuale</h2>
            <p>
              Tutti i contenuti del sito (testi, immagini, loghi, grafica) sono di proprietà
              di {COMPANY.name} o utilizzati con regolare licenza. È vietata la riproduzione
              senza autorizzazione scritta.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Legge applicabile</h2>
            <p>
              I presenti termini sono regolati dalla legge italiana. Per qualsiasi controversia
              è competente il Foro di Roma.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">9. Modifiche</h2>
            <p>
              {COMPANY.name} si riserva il diritto di modificare i presenti termini in qualsiasi
              momento. Le modifiche entrano in vigore dalla pubblicazione sul sito.
            </p>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-brand-gray">
          <Link href="/" className="text-brand-red hover:underline text-sm">
            ← Torna alla home
          </Link>
        </div>
      </div>
    </main>
  )
}
