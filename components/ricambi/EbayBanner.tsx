import { Search, ShoppingCart, Package, ExternalLink, ShieldCheck, Star } from 'lucide-react'
import { EBAY_STORE_URL } from '@/lib/constants'

const STEPS = [
  { icon: Search, label: 'Cerca il ricambio', desc: 'Trova il pezzo che ti serve tra i nostri annunci' },
  { icon: ShoppingCart, label: 'Acquista sicuro', desc: 'Pagamento protetto dalla garanzia acquirenti eBay' },
  { icon: Package, label: 'Ricevi a casa', desc: 'Spedizione in tutta Italia, imballaggio curato' },
]

export default function EbayBanner() {
  return (
    <section className="bg-gradient-to-br from-[#0a1929] via-brand-black to-[#0a1929] border-t border-b border-[#3665f3]/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#3665f3]/10 border border-[#3665f3]/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#3665f3] animate-pulse" />
            <span className="text-[#3665f3] text-xs font-semibold uppercase tracking-widest">Vendita Online</span>
          </div>

          {/* eBay logo text */}
          <h2 className="text-4xl sm:text-5xl font-black mb-3 leading-none">
            Compra su{' '}
            <span>
              <span style={{ color: '#e53238' }}>e</span>
              <span style={{ color: '#0064d2' }}>b</span>
              <span style={{ color: '#f5af02' }}>a</span>
              <span style={{ color: '#86b817' }}>y</span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            I nostri ricambi usati sono disponibili online con pagamento sicuro e spedizione in tutta Italia.
          </p>
        </div>

        {/* 3 step */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {STEPS.map(({ icon: Icon, label, desc }, i) => (
            <div key={label} className="relative flex flex-col items-center text-center">
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-7 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px border-t border-dashed border-[#3665f3]/30" />
              )}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#3665f3]/10 border border-[#3665f3]/30 mb-4">
                <Icon className="w-6 h-6 text-[#3665f3]" />
              </div>
              <div className="text-xs font-bold text-[#3665f3] uppercase tracking-widest mb-1">Step {i + 1}</div>
              <div className="text-white font-semibold mb-1">{label}</div>
              <div className="text-gray-400 text-sm">{desc}</div>
            </div>
          ))}
        </div>

        {/* Trust + CTA */}
        <div className="flex flex-col items-center gap-6">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-brand-gray-dark border border-brand-gray rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-300 text-sm font-medium">100% Feedback positivo</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-gray-dark border border-brand-gray rounded-full px-4 py-2">
              <ShieldCheck className="w-4 h-4 text-[#3665f3]" />
              <span className="text-gray-300 text-sm font-medium">Venditore verificato eBay</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-gray-dark border border-brand-gray rounded-full px-4 py-2">
              <Package className="w-4 h-4 text-brand-orange" />
              <span className="text-gray-300 text-sm font-medium">Spedizione in tutta Italia</span>
            </div>
          </div>

          {/* CTA */}
          {EBAY_STORE_URL ? (
            <a
              href={EBAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-10 py-4 bg-[#3665f3] hover:bg-[#2851d6] text-white font-bold text-lg rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3665f3]/30"
            >
              <ExternalLink className="w-5 h-5" />
              Vai al Negozio eBay
            </a>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <span className="inline-flex items-center gap-2.5 px-10 py-4 bg-brand-gray-dark border border-brand-gray text-gray-500 font-bold text-lg rounded-xl cursor-not-allowed select-none">
                <ExternalLink className="w-5 h-5" />
                Negozio in arrivo
              </span>
              <span className="text-gray-500 text-xs">Il profilo eBay sarà attivo a breve</span>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
