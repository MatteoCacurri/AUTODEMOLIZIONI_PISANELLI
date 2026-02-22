import {
  Wrench,
  FileText,
  Truck,
  Car,
  Settings,
  ShoppingCart,
  CheckCircle,
  LucideIcon,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Wrench,
  FileText,
  Truck,
  Car,
  Settings,
  ShoppingCart,
}

interface ServiceCardProps {
  title: string
  description: string
  iconName: string
  features?: string[]
  compact?: boolean
}

export default function ServiceCard({
  title,
  description,
  iconName,
  features,
  compact = false,
}: ServiceCardProps) {
  const Icon = ICON_MAP[iconName] ?? Settings

  return (
    <div className="group bg-brand-gray-dark border border-brand-gray hover:border-brand-orange/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/10 flex flex-col">
      {/* Icon */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-brand-orange/10 group-hover:bg-brand-orange/20 rounded-lg transition-colors flex-shrink-0">
          <Icon className="w-6 h-6 text-brand-orange" />
        </div>
        <h3 className="text-white font-semibold text-lg leading-tight">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed flex-grow">
        {description}
      </p>

      {/* Features */}
      {!compact && features && features.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {features.map((feat) => (
            <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
