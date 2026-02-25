import type { Metadata } from 'next'
import Image from 'next/image'
import { MessageCircle, Mail, Info, ShieldCheck, RotateCcw, Headphones } from 'lucide-react'
import CategoryGrid from '@/components/ricambi/CategoryGrid'
import EbayBanner from '@/components/ricambi/EbayBanner'
import SectionTitle from '@/components/ui/SectionTitle'
import { WHATSAPP_URL, EMAIL_MAILTO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Ricambi Usati Auto Moto Scooter - Gerano (Roma)',
  description:
    'Ricambi usati e rigenerati per auto, moto e scooter di tutte le marche. Motori, cambi, carrozzeria, elettronica e molto altro. Pezzi selezionati e garantiti. Autodemolizioni Pisanelli, Gerano (Roma).',
}

export default function RicambiPage() {
  return (
    <>
      {/* Hero compatto */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/showroom-ricambi.jpg"
          alt="Showroom ricambi Autodemolizioni Pisanelli"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/70" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Il nostro catalogo
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            Ricambi Usati e Rigenerati
          </h1>
          <p className="text-gray-300 text-lg">Auto, Moto, Scooter</p>
        </div>
      </section>

      {/* Categorie */}
      <section className="bg-brand-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Cosa trovi da noi"
            title="Categorie di Ricambi"
            subtitle="Ampio magazzino con centinaia di pezzi selezionati e garantiti per auto, moto e scooter di tutte le marche."
          />

          <CategoryGrid />

          {/* Garanzia */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 bg-brand-gray-dark border border-brand-gray rounded-xl p-4">
              <ShieldCheck className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-white text-sm font-semibold mb-0.5">Pezzo verificato</div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Ogni ricambio viene controllato dal nostro personale prima della consegna.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-brand-gray-dark border border-brand-gray rounded-xl p-4">
              <RotateCcw className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-white text-sm font-semibold mb-0.5">Reso concordato</div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Il pezzo non va bene? Contattaci: valutiamo insieme la soluzione migliore.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-brand-gray-dark border border-brand-gray rounded-xl p-4">
              <Headphones className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-white text-sm font-semibold mb-0.5">Supporto pre-acquisto</div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Non sei sicuro della compatibilità? Ti aiutiamo a identificare il pezzo giusto.
                </p>
              </div>
            </div>
          </div>

          {/* Nota disponibilità */}
          <div className="mt-4 flex items-start gap-3 bg-brand-gray-dark/50 border border-brand-gray rounded-xl p-4">
            <Info className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
            <p className="text-gray-400 text-sm">
              Non trovi la categoria che cerchi? Contattaci direttamente — spesso abbiamo il pezzo
              anche se non è in lista. Il nostro magazzino si aggiorna ogni giorno.
            </p>
          </div>

        </div>
      </section>

      {/* eBay Store */}
      <EbayBanner />

      {/* CTA */}
      <section className="bg-brand-gray-dark py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Non trovi quello che cerchi?
          </h2>
          <p className="text-gray-400 mb-8">
            Contattaci direttamente. Grazie al nostro vasto network siamo spesso in grado
            di trovare il pezzo che ti serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-lg text-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Chiedici su WhatsApp
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
