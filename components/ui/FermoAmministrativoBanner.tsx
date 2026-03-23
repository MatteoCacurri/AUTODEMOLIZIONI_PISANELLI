import Link from 'next/link'
import { Gavel, ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { WHATSAPP_URL, COMPANY } from '@/lib/constants'

interface FermoAmministrativoBannerProps {
  variant: 'banner' | 'inline'
}

export default function FermoAmministrativoBanner({ variant }: FermoAmministrativoBannerProps) {
  if (variant === 'banner') {
    return (
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
            {/* Icona */}
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-brand-orange rounded-2xl shadow-lg shadow-brand-orange/30">
              <Gavel className="w-8 h-8 text-white" />
            </div>

            {/* Testo */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">
                Caso speciale? Nessun problema
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-black leading-tight">
                Rottamiamo veicoli con{' '}
                <span className="text-brand-orange">fermo amministrativo</span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Pendenze burocratiche o legali non sono un ostacolo. Gestiamo la pratica con te dalla A alla Z.
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <Link
                href="/rottamazione"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shadow-md shadow-brand-orange/20"
              >
                Richiedi informazioni
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // variant === 'inline'
  return (
    <section className="bg-brand-orange py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left">
          {/* Icona */}
          <div className="flex-shrink-0 bg-white/20 rounded-2xl p-4">
            <Gavel className="w-10 h-10 text-white" />
          </div>

          {/* Testo */}
          <div className="flex-1">
            <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">
              Caso speciale? Nessun problema
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Rottamiamo veicoli con fermo amministrativo
            </h2>
            <p className="text-white/80 text-sm mt-2 max-w-xl lg:max-w-none">
              Pendenze burocratiche o legali non sono un ostacolo.
              Siamo esperti nella gestione di questi casi particolari.
            </p>
          </div>

          {/* CTA doppio */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-brand-orange font-bold rounded-lg hover:bg-white/90 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${COMPANY.contacts.phone.tiziano.tel}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/20 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Chiama ora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
