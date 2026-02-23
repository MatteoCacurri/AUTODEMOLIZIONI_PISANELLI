import { Star, ExternalLink } from 'lucide-react'

// TODO: sostituire con recensioni reali dal profilo Google Business
const REVIEWS = [
  {
    name: 'Marco T.',
    date: 'gennaio 2026',
    rating: 5,
    text: 'Servizio eccellente. Ho chiamato la mattina per rottamare la mia Punto e nel pomeriggio erano già qui a ritirarla. Pratiche PRA gestite completamente da loro, zero pensieri.',
  },
  {
    name: 'Simona R.',
    date: 'novembre 2025',
    rating: 5,
    text: 'Avevo bisogno di uno specchio retrovisore sinistro per la mia Golf. L\'hanno trovato subito e il prezzo era più che onesto. Personale disponibile e professionale.',
  },
  {
    name: 'Officina F.lli Conti',
    date: 'ottobre 2025',
    rating: 5,
    text: 'Siamo clienti abituali per i ricambi. Sempre trovato pezzi di qualità e consegna puntuale. Affidabili come fornitori per la nostra officina.',
  },
]

// TODO: sostituire con il link reale al profilo Google Business
const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/Autodemolizioni+Pisanelli+Gerano+Roma'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
        />
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="bg-brand-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Cosa dicono di noi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Recensioni dei clienti
          </h2>
          {/* Rating aggregato */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-gray-400 text-sm">su Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-brand-gray-dark border border-brand-gray rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-white font-semibold">{review.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{review.date}</div>
                </div>
                {/* Logo Google stilizzato */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#4285F4]">
                  G
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-gray-400 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-brand-gray hover:border-brand-orange text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Leggi tutte le recensioni su Google
          </a>
        </div>
      </div>
    </section>
  )
}
