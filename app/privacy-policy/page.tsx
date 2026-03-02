import type { Metadata } from 'next'
import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sulla privacy e sul trattamento dei dati personali di Autodemolizioni Pisanelli srl.',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">
          Ultimo aggiornamento: marzo 2025
        </p>

        <section className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">1. Titolare del trattamento</h2>
            <p>
              {COMPANY.name}<br />
              P.IVA: {COMPANY.vatNumber}<br />
              {COMPANY.address.full}<br />
              Email: {COMPANY.contacts.email}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">2. Dati raccolti</h2>
            <p>
              Attraverso i form presenti sul sito raccogliamo i seguenti dati personali:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nome e cognome</li>
              <li>Numero di telefono</li>
              <li>Indirizzo email (ove richiesto)</li>
              <li>Dati del veicolo (targa, marca, modello, anno) per i form di rottamazione</li>
              <li>Messaggio libero</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">3. Finalità del trattamento</h2>
            <p>I dati vengono trattati esclusivamente per:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Rispondere alle richieste di preventivo e informazioni</li>
              <li>Gestire le pratiche di rottamazione veicoli</li>
              <li>Contattare l&apos;utente riguardo alla sua richiesta</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">4. Base giuridica</h2>
            <p>
              Il trattamento si basa sul consenso dell&apos;interessato (art. 6, par. 1, lett. a GDPR)
              espresso al momento della compilazione del form, e sull&apos;esecuzione di misure
              precontrattuali (art. 6, par. 1, lett. b GDPR).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">5. Conservazione dei dati</h2>
            <p>
              I dati sono conservati per il tempo strettamente necessario a gestire la richiesta
              e, in ogni caso, non oltre 12 mesi dalla raccolta, salvo obblighi di legge.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">6. Comunicazione a terzi</h2>
            <p>
              I dati non vengono ceduti, venduti o comunicati a terzi, salvo soggetti che forniscono
              servizi tecnici indispensabili (es. hosting) e che agiscono come responsabili del
              trattamento ai sensi dell&apos;art. 28 GDPR.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">7. Diritti dell&apos;interessato</h2>
            <p>Ai sensi del GDPR hai il diritto di:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Accedere ai tuoi dati personali</li>
              <li>Richiedere la rettifica o la cancellazione</li>
              <li>Opporti al trattamento o richiederne la limitazione</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)</li>
            </ul>
            <p className="mt-3">
              Per esercitare i tuoi diritti scrivi a:{' '}
              <a href={`mailto:${COMPANY.contacts.email}`} className="text-brand-red underline">
                {COMPANY.contacts.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">8. Cookie</h2>
            <p>
              Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento delle pagine.
              Non vengono utilizzati cookie di profilazione o di tracciamento di terze parti.
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
