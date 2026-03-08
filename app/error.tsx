'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-brand-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-brand-orange text-6xl font-bold mb-4">!</p>
        <h1 className="text-2xl font-bold mb-3">Qualcosa è andato storto</h1>
        <p className="text-gray-400 mb-8">
          Si è verificato un errore imprevisto. Riprova o torna alla home.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Riprova
          </button>
          <Link
            href="/"
            className="inline-block bg-brand-gray-dark hover:bg-brand-gray border border-brand-gray text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </main>
  )
}
