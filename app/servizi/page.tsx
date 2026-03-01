import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, Mail, Clock, Award, Truck } from 'lucide-react'
import ServiceGrid from '@/components/servizi/ServiceGrid'
import SectionTitle from '@/components/ui/SectionTitle'
import { WHATSAPP_URL, EMAIL_MAILTO, COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Servizi Demolizione e Rottamazione Veicoli - Roma',
  description:
    'Demolizione veicoli, cancellazione PRA, ritiro a domicilio gratuito, acquisto vetture incidentate e vendita ricambi usati. Impianto autorizzato. Autodemolizioni Pisanelli, Gerano (Roma).',
}

const WHY_US = [
  {
    icon: Award,
    title: `${COMPANY.yearsExperience} anni di esperienza`,
    description:
      'Una storia lunga decenni ci rende un punto di riferimento affidabile nel settore automotive della provincia di Roma.',
  },
  {
    icon: Truck,
    title: 'Ritiro a domicilio',
    description:
      'Non devi preoccuparti del trasporto. Veniamo noi da te con i nostri mezzi: carro attrezzi.',
  },
  {
    icon: Clock,
    title: 'Pratiche burocratiche incluse',
    description:
      'Gestiamo la cancellazione PRA e tutta la documentazione necessaria. Nessun problema, nessuna coda agli sportelli.',
  },
]

export default function ServiziPage() {
  return (
    <>
      {/* Hero compatto */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/esterno-mezzi.jpg"
          alt="Autodemolizioni Pisanelli - mezzi"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/70" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Cosa offriamo
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">I nostri Servizi</h1>
        </div>
      </section>

      {/* Grid servizi */}
      <section className="bg-brand-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Tutti i servizi"
            title="Cosa possiamo fare per te"
            subtitle="Dalla demolizione alla vendita, ogni aspetto gestito con professionalità e trasparenza."
          />
          <ServiceGrid />
        </div>
      </section>

      {/* Perché sceglierci */}
      <section className="bg-brand-gray-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="I nostri punti di forza"
            title="Perché sceglierci"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_US.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full mx-auto mb-4">
                  <Icon className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-brand-black py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Hai bisogno di informazioni?
          </h2>
          <p className="text-gray-400 mb-8">
            Contattaci su WhatsApp o via email. Solitamente rispondiamo entro 30 minuti in orario lavorativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-lg text-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Tiziano
            </a>
            <a
              href={EMAIL_MAILTO}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg text-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              Invia Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
