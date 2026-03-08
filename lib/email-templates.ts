const baseStyle = `
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  background: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
`

const headerStyle = `
  background: #c0392b;
  padding: 24px 32px;
  color: white;
`

const bodyStyle = `
  padding: 32px;
  background: white;
`

const rowStyle = `
  margin-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 12px;
`

const labelStyle = `
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #888;
  margin-bottom: 4px;
`

const valueStyle = `
  font-size: 15px;
  color: #222;
  font-weight: 600;
`

const footerStyle = `
  padding: 16px 32px;
  background: #f0f0f0;
  font-size: 12px;
  color: #999;
  text-align: center;
`

function row(label: string, value: string) {
  return `
    <div style="${rowStyle}">
      <div style="${labelStyle}">${label}</div>
      <div style="${valueStyle}">${value || '—'}</div>
    </div>
  `
}

function footer() {
  return `
    <div style="${footerStyle}">
      Richiesta ricevuta dal sito autodemolizioni-pisanelli.vercel.app
    </div>
  `
}

export function contattoTemplate(data: {
  nome: string
  telefono: string
  tipo: string
  messaggio: string
}) {
  return `
    <div style="${baseStyle}">
      <div style="${headerStyle}">
        <h2 style="margin:0;font-size:20px">Nuova richiesta di contatto</h2>
        <p style="margin:4px 0 0;font-size:13px;opacity:0.85">dal sito Autodemolizioni Pisanelli</p>
      </div>
      <div style="${bodyStyle}">
        ${row('Nome', data.nome)}
        ${row('Telefono / WhatsApp', data.telefono)}
        ${row('Tipo richiesta', data.tipo)}
        ${row('Messaggio', data.messaggio)}
      </div>
      ${footer()}
    </div>
  `
}

export function rottamazioneTemplate(data: {
  nome: string
  telefono: string
  tipoVeicolo: string
  note: string
}) {
  return `
    <div style="${baseStyle}">
      <div style="${headerStyle}">
        <h2 style="margin:0;font-size:20px">Nuova richiesta di rottamazione</h2>
        <p style="margin:4px 0 0;font-size:13px;opacity:0.85">dal sito Autodemolizioni Pisanelli</p>
      </div>
      <div style="${bodyStyle}">
        ${row('Nome', data.nome)}
        ${row('Telefono / WhatsApp', data.telefono)}
        ${row('Tipo veicolo', data.tipoVeicolo)}
        ${row('Note', data.note)}
      </div>
      ${footer()}
    </div>
  `
}

export function ricambioTemplate(data: {
  marcaModello: string
  anno: string
  ricambio: string
  telefono: string
}) {
  return `
    <div style="${baseStyle}">
      <div style="${headerStyle}">
        <h2 style="margin:0;font-size:20px">Nuova richiesta ricambio</h2>
        <p style="margin:4px 0 0;font-size:13px;opacity:0.85">dal sito Autodemolizioni Pisanelli</p>
      </div>
      <div style="${bodyStyle}">
        ${row('Marca e modello', data.marcaModello)}
        ${row('Anno', data.anno)}
        ${row('Ricambio cercato', data.ricambio)}
        ${row('Telefono / WhatsApp', data.telefono)}
      </div>
      ${footer()}
    </div>
  `
}
