import Image from 'next/image'

const GALLERY = [
  {
    src: '/images/showroom-ricambi.jpg',
    alt: 'Showroom ricambi - scaffali e bancone',
  },
  {
    src: '/images/autosilo-scaffali.jpg',
    alt: 'Autosilo con auto su scaffalature multi-livello',
  },
  {
    src: '/images/magazzino-interno.jpg',
    alt: 'Interno magazzino',
  },
  {
    src: '/images/esterno-mezzi.jpg',
    alt: 'Mezzi propri - carro attrezzi, furgone e bisarca',
  },
]

export default function GalleryStrip() {
  return (
    <section className="bg-brand-gray-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-2">
            La struttura
          </span>
          <h2 className="text-3xl font-bold text-white">Una realtà moderna e professionale</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((img) => (
            <div
              key={img.src}
              className="group relative aspect-[3/4] sm:aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
