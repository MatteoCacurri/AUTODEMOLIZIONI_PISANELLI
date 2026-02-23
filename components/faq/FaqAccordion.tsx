'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  q: string
  a: string
}

interface FaqGroup {
  title: string
  items: FaqItem[]
}

function FaqRow({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-brand-gray last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-brand-gray-dark/50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-white font-medium text-sm leading-snug">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-brand-orange flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.title}>
          <h2 className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-3 px-1">
            {group.title}
          </h2>
          <div className="bg-brand-gray-dark border border-brand-gray rounded-2xl overflow-hidden">
            {group.items.map((item) => (
              <FaqRow key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
