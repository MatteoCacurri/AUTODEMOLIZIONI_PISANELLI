import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-brand-red text-6xl font-bold mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3">Pagina non trovata</h1>
        <p className="text-gray-400 mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link
          href="/"
          className="inline-block bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Torna alla home
        </Link>
      </div>
    </main>
  )
}
