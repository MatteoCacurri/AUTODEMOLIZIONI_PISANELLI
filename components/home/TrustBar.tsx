import { Award, Car, Clock, MapPin, ShieldCheck } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const TRUST_ITEMS = [
  {
    icon: Award,
    value: `${COMPANY.yearsExperience}+`,
    label: 'Anni di attività',
  },
  {
    icon: Car,
    value: 'Migliaia',
    label: 'Veicoli trattati',
  },
  {
    icon: Clock,
    value: '< 30 min',
    label: 'Tempo medio risposta',
  },
  {
    icon: MapPin,
    value: 'Provincia di Roma',
    label: 'Area coperta',
  },
  {
    icon: ShieldCheck,
    value: 'Autorizzato',
    label: 'Impianto certificato',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x lg:divide-white/30">
          {TRUST_ITEMS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 lg:justify-center lg:px-6"
            >
              <Icon className="w-6 h-6 text-white/80 flex-shrink-0" />
              <div>
                <div className="text-white font-bold text-base leading-tight">{value}</div>
                <div className="text-white/75 text-xs leading-tight">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
