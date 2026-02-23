import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ClipboardList,
  FileCheck,
  Truck,
  BadgeCheck,
  Car,
  Bike,
  Boxes,
  ShieldCheck,
  MapPin,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'
import RottamazioneForm from '@/components/rottamazione/RottamazioneForm'

export const metadata: Metadata = {
  title: 'Rottamazione Auto Provincia di Roma - Ritiro Gratuito',
  description:
    'Rottamazione veicoli autorizzata con ritiro gratuito in tutta la provincia di Roma. Pratiche PRA incluse, Certificato di Rottamazione garantito. Risposta entro 30 minuti. Autodemolizioni Pisanelli, Gerano.',
}

const STEPS = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Richiesta',
    description: 'Contattaci per telefono, WhatsApp o tramite il modulo qui sotto. Ti risponderemo entro 30 minuti in orario lavorativo.',
  },
  {
    icon: FileCheck,
    step: '02',
    title: 'Verifica documenti',
    description: 'Ti indichiamo i documenti necessari. Verifichiamo insieme la situazione del veicolo per procedere senza intoppi.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'Ritiro o Conferimento',
    description: 'Veniamo noi da te con carro attrezzi o bisarca, oppure puoi conferire il veicolo direttamente presso il nostro impianto a Gerano.',
  },
  {
    icon: BadgeCheck,
    step: '04',
    title: 'Certificato e pratiche',
    description: 'Rilasciamo il Certificato di Rottamazione e gestiamo la cancellazione PRA. Tutto completato, senza code agli sportelli.',
  },
]

const VEICOLI = [
  { icon: Car, label: 'Autovetture' },
  { icon: Bike, label: 'Moto e Scooter' },
  { icon: Truck, label: 'Furgoni' },
  { icon: Boxes, label: 'Veicoli commerciali' },
]

const DOCUMENTI = [
  "Carta d'identità del proprietario (o del delegato con delega scritta)",
  'Libretto di circolazione originale',
  'Certificato di proprietà (atto di vendita o foglio complementare)',
  'Targhe del veicolo (salvo diversa indicazione normativa)',
  'Codice fiscale del proprietario',
]

const RILASCIAMO = [
  'Certificato di Rottamazione (ricevuta demolizione)',
  'Ricevuta cancellazione PRA (o avvio pratica)',
  'Copia documentazione consegnata',
]

export default function RottamazionePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 flex items-center justify-center">
        <Image
          src="/images/piazzale-escavatore.jpg"
          alt="Piazzale Autodemolizioni Pisanelli"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/65 to-brand-black/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Impianto autorizzato
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Rottamazione Veicoli
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Ritiro gratuito a domicilio, pratiche PRA incluse e Certificato di Rottamazione garantito.
            Un unico partner, risposta immediata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#modulo"
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg text-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Richiedi Ritiro Gratuito
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-lg text-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Diretto
            </a>
          </div>
        </div>
      </section>

      {/* Processo 4 step */}
      <section className="bg-brand-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
              Come funziona
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Processo di rottamazione in 4 step
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ icon: Icon, step, title, description }, i) => (
              <div key={step} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] w-8 h-px bg-brand-orange/30 z-10" />
                )}
                <div className="bg-brand-gray-dark border border-brand-gray rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-brand-orange/10 border border-brand-orange/30 rounded-xl flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-orange" />
                    </div>
                    <span className="text-4xl font-black text-brand-orange/20 leading-none">{step}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veicoli accettati + Documenti + Cosa rilasciamo */}
      <section className="bg-brand-gray-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Veicoli accettati */}
            <div className="bg-brand-black border border-brand-gray rounded-2xl p-6">
              <h2 className="text-white font-semibold text-xl mb-6 flex items-center gap-2">
                <Car className="w-5 h-5 text-brand-orange" />
                Veicoli accettati
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {VEICOLI.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-brand-gray-dark rounded-xl px-4 py-3">
                    <Icon className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                Accettiamo veicoli in qualsiasi condizione: funzionanti, non avviabili, incidentati, senza targhe.
              </p>
            </div>

            {/* Documenti necessari */}
            <div className="bg-brand-black border border-brand-gray rounded-2xl p-6">
              <h2 className="text-white font-semibold text-xl mb-6 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-brand-orange" />
                Documenti necessari
              </h2>
              <ul className="space-y-3">
                {DOCUMENTI.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                Hai dubbi sui documenti? Contattaci prima del ritiro, ti guidiamo passo dopo passo.
              </p>
            </div>

            {/* Cosa rilasciamo */}
            <div className="bg-brand-black border border-brand-gray rounded-2xl p-6">
              <h2 className="text-white font-semibold text-xl mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-orange" />
                Cosa ti rilasciamo
              </h2>
              <ul className="space-y-3 mb-6">
                {RILASCIAMO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <BadgeCheck className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-brand-gray-dark rounded-xl px-4 py-3 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-semibold">Ritiro gratuito</div>
                  <div className="text-gray-400 text-xs">Provincia di Roma e zone limitrofe</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form lead rottamazione */}
      <section id="modulo" className="bg-brand-black py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
              Richiesta ritiro
            </span>
            <h2 className="text-3xl font-bold text-white">
              Richiedi il ritiro del tuo veicolo
            </h2>
            <p className="text-gray-400 mt-2">
              Compila il modulo, ti contatteremo entro 30 minuti in orario lavorativo.
            </p>
          </div>

          <div className="bg-brand-gray-dark border border-brand-gray rounded-2xl p-6 sm:p-8">
            <RottamazioneForm />
          </div>
        </div>
      </section>
    </>
  )
}
