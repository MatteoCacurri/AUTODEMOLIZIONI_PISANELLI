import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'
import SectionTitle from '@/components/ui/SectionTitle'
import { SERVICES } from '@/data/services'

export default function ServicesPreview() {
  return (
    <section className="bg-brand-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Cosa facciamo"
          title="I nostri Servizi"
          subtitle="Dalla demolizione alla vendita di ricambi, offriamo una gamma completa di servizi per privati e professionisti."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
              compact
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/servizi"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5"
          >
            Vedi tutti i servizi
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
