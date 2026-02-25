import Link from 'next/link'
import { ExternalLink, ShieldCheck, Package } from 'lucide-react'
import { EBAY_STORE_URL } from '@/lib/constants'

export default function EbaySection() {
  return (
    <section className="bg-gradient-to-r from-[#0a1929] via-[#0d1f35] to-[#0a1929] py-16 border-t border-b border-[#3665f3]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Left: testo */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#3665f3]/10 border border-[#3665f3]/30 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3665f3] animate-pulse" />
              <span className="text-[#3665f3] text-xs font-semibold uppercase tracking-widest">Vendita Online</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
              Acquista i nostri ricambi su{' '}
              <span className="whitespace-nowrap">
                <span style={{ color: '#e53238' }}>e</span>
                <span style={{ color: '#0064d2' }}>b</span>
                <span style={{ color: '#f5af02' }}>a</span>
                <span style={{ color: '#86b817' }}>y</span>
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-lg">
              Centinaia di ricambi usati disponibili online. Pagamento sicuro, spedizione in tutta Italia, garanzia acquirenti eBay.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <ShieldCheck className="w-4 h-4 text-[#3665f3]" />
                Pagamento protetto
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Package className="w-4 h-4 text-brand-orange" />
                Spedizione in Italia
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-yellow-400 text-base">★</span>
                100% feedback positivo
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {EBAY_STORE_URL ? (
                <a
                  href={EBAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#3665f3] hover:bg-[#2851d6] text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3665f3]/30"
                >
                  <ExternalLink className="w-5 h-5" />
                  Vai al Negozio eBay
                </a>
              ) : (
                <span className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-gray-dark border border-brand-gray text-gray-500 font-bold rounded-xl cursor-not-allowed select-none">
                  <ExternalLink className="w-5 h-5" />
                  Negozio in arrivo
                </span>
              )}
              <Link
                href="/ricambi"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 hover:border-white/50 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
              >
                Sfoglia i ricambi
              </Link>
            </div>
          </div>

          {/* Right: visual card */}
          <div className="flex-shrink-0 w-full lg:w-80">
            <div className="bg-brand-gray-dark border border-[#3665f3]/20 rounded-2xl p-6 space-y-4">
              <div className="text-center pb-4 border-b border-brand-gray">
                <div className="text-4xl font-black tracking-tight">
                  <span style={{ color: '#e53238' }}>e</span>
                  <span style={{ color: '#0064d2' }}>b</span>
                  <span style={{ color: '#f5af02' }}>a</span>
                  <span style={{ color: '#86b817' }}>y</span>
                </div>
                <div className="text-gray-400 text-xs mt-1 uppercase tracking-widest">Negozio Ufficiale</div>
              </div>
              {[
                { label: 'Annunci attivi', value: '—', sub: 'disponibili online' },
                { label: 'Feedback', value: '100%', sub: 'positivo' },
                { label: 'Spedizione', value: '24/48h', sub: 'in tutta Italia' },
              ].map(({ label, value, sub }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{label}</span>
                  <div className="text-right">
                    <div className="text-white font-bold">{value}</div>
                    <div className="text-gray-500 text-xs">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
