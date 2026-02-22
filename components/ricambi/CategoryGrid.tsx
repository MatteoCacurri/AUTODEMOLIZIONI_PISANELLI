'use client'

import { useState } from 'react'
import {
  Cog,
  RefreshCw,
  Shield,
  Zap,
  GitBranch,
  Bike,
  CheckCircle,
  LucideIcon,
} from 'lucide-react'
import { PARTS_CATEGORIES, type VehicleType } from '@/data/parts-categories'

const ICON_MAP: Record<string, LucideIcon> = {
  Cog,
  RefreshCw,
  Shield,
  Zap,
  GitBranch,
  Bike,
}

type Filter = 'all' | VehicleType

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Tutte' },
  { value: 'auto', label: 'Auto' },
  { value: 'moto', label: 'Moto e Scooter' },
]

export default function CategoryGrid() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = PARTS_CATEGORIES.filter(
    (cat) => filter === 'all' || cat.vehicleType === filter
  )

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === f.value
                ? 'bg-brand-orange text-white'
                : 'bg-brand-gray-dark text-gray-400 hover:text-white hover:bg-brand-gray border border-brand-gray'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((cat) => {
          const Icon = ICON_MAP[cat.iconName] ?? Cog
          return (
            <div
              key={cat.id}
              className="bg-brand-gray-dark border border-brand-gray hover:border-brand-orange/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-brand-orange/10 rounded-lg flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="text-white font-semibold">{cat.label}</h3>
              </div>
              <ul className="space-y-1.5">
                {cat.subcategories.map((sub) => (
                  <li key={sub} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
