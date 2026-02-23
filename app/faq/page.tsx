import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import FaqAccordion from '@/components/faq/FaqAccordion'
import { WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Domande Frequenti - Rottamazione e Ricambi Usati',
  description:
    'Risposte alle domande più comuni su rottamazione veicoli, documenti necessari, ritiro gratuito, ricambi usati, garanzie e spedizioni. Autodemolizioni Pisanelli, Gerano (Roma).',
}

const FAQ_GROUPS = [
  {
    title: 'Rottamazione veicoli',
    items: [
      {
        q: 'Quanto tempo ci vuole per rottamare un\'auto?',
        a: 'Di solito l\'intera procedura — dal contatto iniziale al rilascio del Certificato di Rottamazione — si conclude in 1-3 giorni lavorativi. Il ritiro può avvenire già il giorno successivo alla richiesta, in orario concordato.',
      },
      {
        q: 'Il ritiro a domicilio è davvero gratuito?',
        a: 'Sì, il ritiro è gratuito in tutta la provincia di Roma e nelle zone limitrofe. Per distanze maggiori contattaci e valutiamo insieme la situazione.',
      },
      {
        q: 'Cosa mi serve per rottamare il veicolo?',
        a: 'Sono necessari: carta d\'identità del proprietario, libretto di circolazione originale, certificato di proprietà (o atto di vendita), targhe del veicolo e codice fiscale. Se il veicolo ha situazioni particolari (erede, delega, ecc.) contattaci prima e ti guidiamo.',
      },
      {
        q: 'Posso rottamare un\'auto senza targa o con documenti mancanti?',
        a: 'Dipende dalla situazione. In molti casi è possibile procedere anche con documentazione incompleta. Contattaci direttamente per valutare il tuo caso specifico — troviamo sempre una soluzione.',
      },
      {
        q: 'Cosa mi viene rilasciato dopo la rottamazione?',
        a: 'Rilasciamo il Certificato di Rottamazione (ricevuta ufficiale di demolizione) e gestiamo per te la cancellazione al PRA. Riceverai anche copia di tutta la documentazione consegnata.',
      },
      {
        q: 'Rottamate anche moto, scooter e furgoni?',
        a: 'Sì, accettiamo qualsiasi tipo di veicolo: auto, moto, scooter, furgoni e veicoli commerciali, in qualsiasi condizione — funzionanti, non avviabili, incidentati o privi di targhe.',
      },
    ],
  },
  {
    title: 'Ricambi usati',
    items: [
      {
        q: 'Come verifico se il pezzo è compatibile con la mia auto?',
        a: 'Contattaci indicando marca, modello, anno e preferibilmente il codice motore o il numero di telaio (VIN). Il nostro personale verificherà la compatibilità prima di confermare la disponibilità.',
      },
      {
        q: 'I ricambi sono garantiti?',
        a: 'Ogni pezzo viene controllato dal nostro personale prima della consegna. In caso di problemi di compatibilità o difetti non rilevati in fase di controllo, contattaci: valutiamo insieme la soluzione migliore.',
      },
      {
        q: 'Fate spedizioni?',
        a: 'Sì, spediamo i ricambi in tutta Italia tramite corriere. I tempi e i costi di spedizione dipendono dal pezzo e dalla destinazione. Contattaci per un preventivo.',
      },
      {
        q: 'Come faccio a sapere se avete il pezzo che cerco?',
        a: 'Il modo più rapido è contattarci su WhatsApp o per telefono indicando marca, modello, anno e il ricambio che ti serve. Il nostro magazzino si aggiorna ogni giorno e spesso abbiamo pezzi non ancora catalogati online.',
      },
      {
        q: 'Cosa succede se il pezzo non va bene?',
        a: 'Contattaci appena possibile spiegando il problema. Valutiamo caso per caso: in genere troviamo una soluzione tra sostituzione del pezzo, credito o rimborso concordato.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_GROUPS.flatMap((g) =>
    g.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-gray-dark border-b border-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Hai dubbi?
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Domande Frequenti
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Le risposte alle domande più comuni su rottamazione e ricambi usati.
            Non trovi quello che cerchi? Scrivici direttamente.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion groups={FAQ_GROUPS} />

          {/* CTA finale */}
          <div className="mt-12 bg-brand-gray-dark border border-brand-gray rounded-2xl p-6 text-center">
            <p className="text-white font-semibold mb-2">Non hai trovato risposta alla tua domanda?</p>
            <p className="text-gray-400 text-sm mb-6">
              Scrivici su WhatsApp — rispondiamo entro 30 minuti in orario lavorativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Scrivici su WhatsApp
              </a>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center px-6 py-3 border border-brand-gray hover:border-brand-orange text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-200"
              >
                Tutti i contatti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
