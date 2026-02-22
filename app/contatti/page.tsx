import type { Metadata } from 'next'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  ShoppingBag,
} from 'lucide-react'
import { COMPANY, WHATSAPP_URL, EMAIL_MAILTO, MAPS_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contatti e Dove Siamo',
  description:
    'Contatta Autodemolizioni Pisanelli: telefoni, email, WhatsApp e mappa. Via della Mola snc, 00025 Gerano (Roma). Aperto Lun-Ven 8:30-17:00 e Sab 8:30-12:30.',
}

const PHONES = [
  COMPANY.contacts.phone.ufficio,
  COMPANY.contacts.phone.magazzino,
  COMPANY.contacts.phone.tiziano,
  COMPANY.contacts.phone.sirio,
]

export default function ContattiPage() {
  return (
    <>
      {/* Hero compatto */}
      <section className="bg-brand-gray-dark border-b border-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Siamo qui per te
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contatti e Dove Siamo
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Hai domande o vuoi un preventivo? Scrivici o chiamaci direttamente.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Contatti */}
            <div className="space-y-8">

              {/* Telefoni */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-brand-orange" />
                  Telefoni
                </h2>
                <div className="space-y-3">
                  {PHONES.map((phone) => (
                    <div
                      key={phone.label}
                      className="flex items-center justify-between bg-brand-gray-dark border border-brand-gray rounded-xl px-5 py-4"
                    >
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                          {phone.label}
                        </div>
                        <a
                          href={`tel:${phone.tel}`}
                          className="text-white font-semibold text-lg hover:text-brand-orange transition-colors"
                        >
                          {phone.number}
                        </a>
                      </div>
                      {phone.label === 'Tiziano' && (
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-white bg-[#25D366] hover:bg-[#1ebe57] px-3 py-1.5 rounded-full transition-colors"
                          aria-label="Scrivi su WhatsApp a Tiziano"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          WhatsApp
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-brand-orange" />
                  Email
                </h2>
                <div className="bg-brand-gray-dark border border-brand-gray rounded-xl px-5 py-4 flex items-center justify-between gap-4 flex-wrap">
                  <span className="text-gray-300 text-sm break-all">
                    {COMPANY.contacts.email}
                  </span>
                  <a
                    href={EMAIL_MAILTO}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold rounded-lg transition-colors flex-shrink-0"
                  >
                    <Mail className="w-4 h-4" />
                    Invia Email
                  </a>
                </div>
              </div>

              {/* Orari */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-orange" />
                  Orari di apertura
                </h2>
                <div className="bg-brand-gray-dark border border-brand-gray rounded-xl overflow-hidden">
                  {COMPANY.hours.map((h, i) => (
                    <div
                      key={h.days}
                      className={`flex justify-between items-center px-5 py-3.5 ${
                        i < COMPANY.hours.length - 1 ? 'border-b border-brand-gray' : ''
                      }`}
                    >
                      <span className="text-gray-300 font-medium">{h.days}</span>
                      <span className={h.morning ? 'text-white text-sm text-right' : 'text-gray-500 text-sm italic'}>
                        {h.morning
                          ? h.afternoon
                            ? `${h.morning} / ${h.afternoon}`
                            : h.morning
                          : 'Chiuso'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indirizzo */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                  Indirizzo
                </h2>
                <div className="bg-brand-gray-dark border border-brand-gray rounded-xl px-5 py-4">
                  <p className="text-gray-300 mb-3">{COMPANY.address.full}</p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-dark text-sm font-medium transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Apri in Google Maps
                  </a>
                </div>
              </div>

              {/* Social */}
              <div>
                <h2 className="text-white font-semibold text-xl mb-4">Social</h2>
                <div className="flex gap-3">
                  <span
                    className="flex items-center gap-2 px-4 py-3 bg-brand-gray-dark border border-brand-gray rounded-xl text-gray-500 cursor-not-allowed select-none text-sm"
                    title="Pagina Facebook in arrivo"
                    aria-disabled="true"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook (In arrivo)</span>
                  </span>
                  <span
                    className="flex items-center gap-2 px-4 py-3 bg-brand-gray-dark border border-brand-gray rounded-xl text-gray-500 cursor-not-allowed select-none text-sm"
                    title="Negozio eBay in arrivo"
                    aria-disabled="true"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>eBay (In arrivo)</span>
                  </span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Tiziano
                </a>
                <a
                  href={EMAIL_MAILTO}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-xl text-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail className="w-5 h-5" />
                  Invia Email
                </a>
              </div>
            </div>

            {/* Right: Mappa */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-brand-gray flex-1 min-h-[400px]">
                <iframe
                  title="Mappa Autodemolizioni Pisanelli"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.5!2d12.9786!3d41.9345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258b6a2c7c1f3d%3A0x0!2sVia+della+Mola%2C+00025+Gerano+RM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info box sotto mappa */}
              <div className="bg-brand-gray-dark border border-brand-gray rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                  Come raggiungerci
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Siamo situati a Gerano, in provincia di Roma, facilmente raggiungibili in auto.
                  Ampio piazzale di sosta disponibile.
                </p>
                <div className="text-sm text-gray-300">
                  <span className="text-brand-orange font-medium">Indirizzo: </span>
                  {COMPANY.address.full}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
