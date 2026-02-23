'use client'

import { useState, FormEvent } from 'react'
import { Search } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function QuickPartForm() {
  const [marcaModello, setMarcaModello] = useState('')
  const [anno, setAnno] = useState('')
  const [ricambio, setRicambio] = useState('')
  const [telefono, setTelefono] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent('Richiesta ricambio dal sito')
    const body = encodeURIComponent(
      `Marca e modello: ${marcaModello}\nAnno: ${anno}\nRicambio cercato: ${ricambio}\nTelefono/WhatsApp: ${telefono}`
    )
    window.location.href = `mailto:${COMPANY.contacts.email}?subject=${subject}&body=${body}`
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
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

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/30"
          >
            <Search className="w-5 h-5" />
            Verifica Disponibilità
          </button>
        </form>
      </div>
    </section>
  )
}
