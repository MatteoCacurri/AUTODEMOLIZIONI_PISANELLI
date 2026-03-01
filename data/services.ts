export interface Service {
  id: string
  title: string
  description: string
  iconName: string
  features: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'demolizione',
    title: 'Demolizione Veicoli',
    description:
      'Demoliamo qualsiasi tipo di veicolo in modo professionale e nel rispetto delle normative ambientali vigenti, con gestione completa della documentazione.',
    iconName: 'Wrench',
    features: ['Auto', 'Moto', 'Furgoni', 'Camion', 'Scooter'],
  },
  {
    id: 'cancellazione-pra',
    title: 'Cancellazione PRA',
    description:
      "Ci occupiamo di tutte le pratiche burocratiche per la cancellazione al Pubblico Registro Automobilistico del tuo veicolo. Zero stress, zero code.",
    iconName: 'FileText',
    features: ['Pratica completa', 'Senza pensieri', 'Documentazione garantita'],
  },
  {
    id: 'ritiro',
    title: 'Ritiro a Domicilio',
    description:
      'Ritiriamo il tuo veicolo direttamente presso la tua abitazione o qualsiasi luogo tu indichi. Servizio rapido e puntuale con mezzi propri.',
    iconName: 'Truck',
    features: ['Tutta Italia', 'Bisarca propria'],
  },
  {
    id: 'acquisto-incidentate',
    title: 'Acquisto Vetture Incidentate',
    description:
      "Acquistiamo veicoli incidentati, ammaccati o non funzionanti. Ogni veicolo viene valutato con serietà e trasparenza. Pagamento immediato.",
    iconName: 'Car',
    features: ['Valutazione gratuita', 'Pagamento immediato', 'Qualsiasi condizione'],
  },
  {
    id: 'ricambi',
    title: 'Vendita Ricambi',
    description:
      "Ampio magazzino di ricambi usati e rigenerati per auto, moto e scooter di tutte le marche. Pezzi selezionati, testati e garantiti.",
    iconName: 'Settings',
    features: ['Auto, Moto, Scooter', 'Tutte le marche', 'Usati e rigenerati'],
  },
  {
    id: 'vendita-auto',
    title: 'Vendita Autovetture Usate',
    description:
      'Selezione di autovetture disponibili per la vendita diretta. Veicoli accuratamente controllati dal nostro personale esperto.',
    iconName: 'ShoppingCart',
    features: ['Veicoli selezionati', 'Consulenza esperta', 'Prezzi competitivi'],
  },
]
