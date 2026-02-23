'use client'

import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const TIPO_OPTIONS = [
  { value: '', label: 'Seleziona tipo richiesta...' },
  { value: 'rottamazione', label: 'Rottamazione / Ritiro veicolo' },
  { value: 'ricambio', label: 'Ricambio usato' },
  { value: 'acquisto', label: 'Acquisto vettura incidentata' },
  { value: 'altro', label: 'Altro' },
]

export default function ContactForm() {
  const [nome, setNome] = useState('')
  const [telefono, setTelefono] = useState('')
  const [tipo, setTipo] = useState('')
  const [messaggio, setMessaggio] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Richiesta dal sito: ${(TIPO_OPTIONS.find((o) => o.value === tipo)?.label ?? tipo) || 'Contatto'}`
    )
    const body = encodeURIComponent(
      `Nome: ${nome}\nTelefono: ${telefono}\nTipo richiesta: ${TIPO_OPTIONS.find((o) => o.value === tipo)?.label ?? tipo}\n\nMessaggio:\n${messaggio}`
    )
    window.location.href = `mailto:${COMPANY.contacts.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-nome" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
            Nome *
          </label>
          <input
            id="cf-nome"
            type="text"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Mario Rossi"
            className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors text-sm"
          />
        </div>
        <div>
          <label htmlFor="cf-telefono" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
            Telefono / WhatsApp *
          </label>
          <input
            id="cf-telefono"
            type="tel"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="333 000 0000"
            className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-tipo" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
          Tipo di richiesta *
        </label>
        <select
          id="cf-tipo"
          required
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors text-sm appearance-none"
        >
          {TIPO_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ''} className="bg-brand-gray-dark">
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-messaggio" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
          Messaggio
        </label>
        <textarea
          id="cf-messaggio"
          rows={4}
          value={messaggio}
          onChange={(e) => setMessaggio(e.target.value)}
          placeholder="Descrivi brevemente la tua richiesta..."
          className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
      >
        <Send className="w-4 h-4" />
        Invia Richiesta
      </button>

      <p className="text-xs text-gray-500 text-center">
        Risposta solitamente entro 30 minuti in orario lavorativo.
      </p>
    </form>
  )
}
