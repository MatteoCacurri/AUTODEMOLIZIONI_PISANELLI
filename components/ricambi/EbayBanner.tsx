import { ShoppingBag, ExternalLink } from 'lucide-react'

export default function EbayBanner() {
  return (
    <div className="mt-12 bg-brand-gray-dark border border-brand-orange/30 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
      <div className="flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-xl flex-shrink-0">
        <ShoppingBag className="w-8 h-8 text-brand-orange" />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1 mb-2">
          <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wide">In arrivo</span>
        </div>
        <h3 className="text-white font-bold text-xl mb-1">
          Trova i ricambi anche su{' '}
          <span className="text-brand-orange">eBay</span>
        </h3>
        <p className="text-gray-400 text-sm">
          Stiamo preparando il nostro negozio eBay. Presto potrai acquistare i nostri ricambi
          direttamente online in modo semplice e sicuro.
        </p>
      </div>
      <span
        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gray border border-brand-gray text-gray-500 font-semibold rounded-lg cursor-not-allowed select-none flex-shrink-0"
        title="Profilo eBay in arrivo"
        aria-disabled="true"
      >
        <ExternalLink className="w-4 h-4" />
        Profilo in arrivo
      </span>
    </div>
  )
}
