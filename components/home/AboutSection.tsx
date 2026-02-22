import Image from 'next/image'
import { Award, MapPin, Wrench } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const STATS = [
  { icon: Award, value: `${COMPANY.yearsExperience}+`, label: 'Anni di esperienza' },
  { icon: Wrench, value: '6', label: 'Servizi offerti' },
  { icon: MapPin, value: 'Gerano', label: 'Provincia di Roma' },
]

export default function AboutSection() {
  return (
    <section className="bg-brand-gray-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
              La nostra storia
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              {COMPANY.yearsExperience} anni al servizio
              <br />
              degli <span className="text-brand-orange">automobilisti</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Autodemolizioni Pisanelli nasce come punto di riferimento nel settore dei ricambi
                auto usati, con una storia di oltre {COMPANY.yearsExperience} anni di attività alle
                spalle. La nostra struttura, situata a Gerano (Roma), offre un servizio completo
                e professionale a privati e officine di tutta la provincia.
              </p>
              <p>
                La nostra missione è fornire ricambi di alta qualità per auto, moto e scooter
                usati e rigenerati di tutte le marche, garantendo professionalità, precisione
                e prezzi competitivi. Ogni pezzo che vendiamo è selezionato e controllato
                dal nostro personale esperto.
              </p>
              <p>
                Non siamo solo un&apos;autodemolizione: siamo un servizio completo che include
                il ritiro a domicilio, la cancellazione PRA, l&apos;acquisto di veicoli incidentati
                e molto altro ancora.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-brand-black/50 border border-brand-gray rounded-xl p-4 text-center"
                >
                  <Icon className="w-6 h-6 text-brand-orange mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <Image
                src="/images/piazzale-escavatore.jpg"
                alt="Piazzale con escavatore Atlas - Autodemolizioni Pisanelli"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-orange/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-orange/10 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
