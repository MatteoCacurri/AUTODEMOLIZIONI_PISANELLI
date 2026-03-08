'use client'

import { useState, FormEvent } from 'react'
import { Send, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

const TIPO_VEICOLO_OPTIONS = [
  { value: '', label: 'Seleziona tipo veicolo...' },
  { value: 'Autovettura', label: 'Autovettura' },
  { value: 'Moto / Scooter', label: 'Moto / Scooter' },
  { value: 'Furgone', label: 'Furgone' },
  { value: 'Veicolo commerciale', label: 'Veicolo commerciale' },
  { value: 'Altro', label: 'Altro' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function RottamazioneForm() {
  const [nome, setNome] = useState('')
  const [telefono, setTelefono] = useState('')
  const [tipoVeicolo, setTipoVeicolo] = useState('')
  const [note, setNote] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/rottamazione', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, telefono, tipoVeicolo, note }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Errore nell\'invio.')
        setStatus('error')
        return
      }

      setStatus('success')
      setNome('')
      setTelefono('')
      setTipoVeicolo('')
      setNote('')
    } catch {
      setErrorMsg('Errore di rete. Controlla la connessione e riprova.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <CheckCircle className="w-12 h-12 text-green-500" />
        <h3 className="text-white font-semibold text-lg">Richiesta inviata!</h3>
        <p className="text-gray-400 text-sm">
          Ti ricontatteremo entro 30 minuti per organizzare il ritiro gratuito.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-brand-orange hover:underline text-sm mt-2"
        >
          Invia un'altra richiesta
        </button>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="rf-nome" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
              Nome *
            </label>
            <input
              id="rf-nome"
              type="text"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Mario Rossi"
              className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors text-sm"
            />
          </div>
          <div>
            <label htmlFor="rf-telefono" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
              Telefono / WhatsApp *
            </label>
            <input
              id="rf-telefono"
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
          <label htmlFor="rf-tipo" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
            Tipo di veicolo *
          </label>
          <select
            id="rf-tipo"
            required
            value={tipoVeicolo}
            onChange={(e) => setTipoVeicolo(e.target.value)}
            className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors text-sm appearance-none"
          >
            {TIPO_VEICOLO_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} disabled={o.value === ''} className="bg-brand-gray-dark">
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="rf-note" className="block text-xs text-gray-400 uppercase tracking-wider mb-1.5">
            Note (marca, modello, condizioni...)
          </label>
          <textarea
            id="rf-note"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="es. Fiat Punto 2010, non avviabile, senza targhe..."
            className="w-full bg-brand-black border border-brand-gray rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors text-sm resize-none"
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 text-sm bg-red-950/40 border border-red-900 rounded-lg px-4 py-3">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Invio in corso...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Richiedi Ritiro
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Risposta entro 30 minuti in orario lavorativo. Ritiro gratuito in tutta la provincia di Roma.
        </p>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-brand-gray" />
        </div>
        <div className="relative flex justify-center text-xs text-gray-500">
          <span className="bg-brand-gray-dark px-3">oppure contattaci direttamente</span>
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
      >
        <MessageCircle className="w-5 h-5" />
        Scrivi su WhatsApp
      </a>
    </>
  )
}
