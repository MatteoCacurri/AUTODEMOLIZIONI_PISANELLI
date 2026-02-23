import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ChevronDown, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-esterno.jpg"
        alt="Autodemolizioni Pisanelli - struttura esterna"
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
          <span className="text-brand-orange text-sm font-medium">
            Oltre {COMPANY.yearsExperience} anni di esperienza
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Autodemolizioni
          <br />
          <span className="text-brand-orange">Pisanelli</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Il tuo partner di fiducia per demolizione,
          <br className="hidden sm:block" /> ricambi e molto altro
        </p>

        {/* Address */}
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-10">
          <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0" />
          <span className="text-sm">{COMPANY.address.full}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/rottamazione"
            className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg text-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/30 hover:-translate-y-0.5"
          >
            Richiedi Ritiro Gratuito
          </Link>
          <Link
            href="/ricambi"
            className="px-8 py-4 border-2 border-white/40 hover:border-white text-white font-semibold rounded-lg text-lg transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
          >
            Cerca un Ricambio
          </Link>
        </div>

        {/* Microcopy telefono */}
        <p className="mt-6 text-sm text-gray-400">
          Preferisci chiamare?{' '}
          <a
            href={`tel:${COMPANY.contacts.phone.magazzino.tel}`}
            className="text-white font-semibold hover:text-brand-orange transition-colors inline-flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            {COMPANY.contacts.phone.magazzino.number}
          </a>
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  )
}
