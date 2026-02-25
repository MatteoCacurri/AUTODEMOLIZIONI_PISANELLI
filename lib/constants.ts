export const COMPANY = {
  name: 'Autodemolizioni Pisanelli srl',
  shortName: 'Pisanelli',
  tagline: '40 anni di esperienza nel settore automotive',
  yearsExperience: 40,
  vatNumber: '16915681007',
  sdiCode: '5RU082D',
  address: {
    street: 'Via della Mola snc',
    zip: '00025',
    city: 'Gerano',
    province: 'Roma',
    full: 'Via della Mola snc, 00025 Gerano (Roma)',
  },
  contacts: {
    email: 'autodemolizione.siriopisanelli@gmail.com',
    phone: {
      ufficio: { label: 'Ufficio', number: '352.0512406', tel: '+393520512406' },
      magazzino: { label: 'Magazzino', number: '0774.798896', tel: '+390774798896' },
      tiziano: { label: 'Tiziano', number: '334.9025620', tel: '+393349025620' },
      sirio: { label: 'Sirio', number: '335.5224195', tel: '+393355224195' },
    },
  },
  hours: [
    { days: 'Lun – Ven', morning: '8:30 – 12:30', afternoon: '14:30 – 17:00' },
    { days: 'Sabato', morning: '8:30 – 12:30', afternoon: null },
    { days: 'Domenica', morning: null, afternoon: null },
  ],
  social: {
    facebook: null as string | null,
    ebay: null as string | null,
  },
} as const

export const EBAY_STORE_URL: string | null = null // aggiornare con URL del negozio eBay quando attivo
export const WHATSAPP_URL = 'https://wa.me/393349025620'
export const EMAIL_MAILTO = `mailto:${COMPANY.contacts.email}`
export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.0!2d12.9800!3d41.9300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+della+Mola%2C+Gerano+RM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit'
export const MAPS_LINK =
  'https://www.google.com/maps/search/Autodemolizioni+Pisanelli+Via+della+Mola+Gerano+Roma'
