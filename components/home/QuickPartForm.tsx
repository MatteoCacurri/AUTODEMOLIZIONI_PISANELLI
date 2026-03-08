'use client'

import { useState, FormEvent } from 'react'
import { Search, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function QuickPartForm() {
  const [marcaModello, setMarcaModello] = useState('')
  const [anno, setAnno] = useState('')
  const [ricambio, setRicambio] = useState('')
  const [telefono, setTelefono] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/ricambio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ marcaModello, anno, ricambio, telefono }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Errore nell\'invio.')
        setStatus('error')
        return
      }

      setStatus('success')
      setMarcaModello('')
      setAnno('')
      setRicambio('')
      setTelefono('')
    } catch {
      setErrorMsg('Errore di rete. Controlla la connessione e riprova.')
      setStatus('error')
    }
  }

  return (
    <section className="bg-brand-gray-dark py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Ricambio rapido
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Cerca il ricambio che ti serve
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Compila i campi e ti contatteremo entro 30 minuti in orario lavorativo.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-brand-black border border-brand-gray rounded-2xl p-8 flex flex-col items-center text-center gap-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
            <h3 className="text-white font-semibold text-lg">Richiesta inviata!</h3>
            <p className="text-gray-400 text-sm">
              Ti contatteremo entro 30 minuti per verificare la disponibilità.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-brand-orange hover:underline text-sm mt-2"
            >
              Cerca un altro ricambio
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-brand-black border border-brand-gray rounded-2xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="qp-marca" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
                  Marca e modello *
                </label>
                <input
                  id="qp-marca"
                  type="text"
                  required
                  value={marcaModello}
                  onChange={(e) => setMarcaModello(e.target.value)}
                  placeholder="es. Fiat Punto, Volkswagen Golf..."
                  className="w-full bg-brand-gray-dark border border-brand-gray rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="qp-anno" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
                  Anno
                </label>
                <input
                  id="qp-anno"
                  type="text"
                  value={anno}
                  onChange={(e) => setAnno(e.target.value)}
                  placeholder="es. 2015"
                  className="w-full bg-brand-gray-dark border border-brand-gray rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="qp-ricambio" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
                  Ricambio cercato *
                </label>
                <input
                  id="qp-ricambio"
                  type="text"
                  required
                  value={ricambio}
                  onChange={(e) => setRicambio(e.target.value)}
                  placeholder="es. Motore, cambio, specchio sx..."
                  className="w-full bg-brand-gray-dark border border-brand-gray rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="qp-telefono" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
                  Telefono / WhatsApp *
                </label>
                <input
                  id="qp-telefono"
                  type="tel"
                  required
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="333 000 0000"
                  className="w-full bg-brand-gray-dark border border-brand-gray rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-950/40 border border-red-900 rounded-lg px-4 py-3 mb-4">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Invio in corso...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Verifica Disponibilità
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
