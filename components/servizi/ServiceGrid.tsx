import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICES } from '@/data/services'

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {SERVICES.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          description={service.description}
          iconName={service.iconName}
          features={service.features}
        />
      ))}
    </div>
  )
}
