# Piano d'Azione SEO — Autodemolizioni Pisanelli
**Data:** 25 febbraio 2026 | Score attuale: **64/100** | Target: **80+/100**

---

## 🔴 CRITICO — Fix immediati (entro 48 ore)

### C1. Creare `app/sitemap.ts`
**Impatto:** Indicizzazione, crawlabilità
```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.autodemolizionipiesanelli.it' // aggiornare con dominio reale

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/rottamazione`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/servizi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ricambi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contatti`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]
}
```

---

### C2. Creare `app/robots.ts`
**Impatto:** Controllo crawler, SEO
```ts
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.autodemolizionipiesanelli.it/sitemap.xml', // aggiornare
  }
}
```

---

### C3. Correggere typo URL e orari nel schema JSON-LD (`layout.tsx`)
**Impatto:** Knowledge Graph Google, Schema validation

**Problema 1 — URL typo** (`layout.tsx:46`):
```ts
// PRIMA (errato):
url: 'https://www.autodemolizionipiesanelli.it',

// DOPO (corretto — verificare dominio reale):
url: 'https://www.autodemolizionipesanelli.it', // o il dominio effettivo
```

**Problema 2 — Orari errati** (`layout.tsx:62-75`):
```ts
// PRIMA (errato — continuo senza pausa):
openingHoursSpecification: [
  { dayOfWeek: ['Monday',...,'Friday'], opens: '08:30', closes: '17:00' },
  { dayOfWeek: 'Saturday', opens: '08:30', closes: '12:30' },
]

// DOPO (corretto — con pausa pranzo):
openingHoursSpecification: [
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:30', closes: '12:30' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '14:30', closes: '17:00' },
  { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:30', closes: '12:30' },
],
```

---

### C4. Creare pagina `/privacy-policy`
**Impatto:** GDPR compliance, trust, E-E-A-T
Il sito raccoglie nomi, email, telefoni e targhe via 3 form diversi (`RottamazioneForm`, `ContactForm`, `QuickPartForm`). **Senza Privacy Policy è illegale** ai sensi del GDPR (Art. 13) e del D.Lgs. 196/2003.

**Azioni:**
1. Creare `app/privacy-policy/page.tsx` con metadata propri
2. Aggiungere link alla Privacy Policy nel footer e vicino a ogni form
3. Aggiungere checkbox consenso esplicito in ogni form
4. Valutare cookie banner per Google Maps (iframe = cookie di terza parte)

---

### C5. Rimuovere/sostituire le recensioni placeholder
**File:** `components/home/ReviewsSection.tsx`
**Impatto:** E-E-A-T, trust

**Opzioni (in ordine di priorità):**
1. **Integra Google Reviews API** con Place ID reale dell'azienda
2. **Rimuovi temporaneamente** la sezione recensioni fino all'integrazione dati reali
3. **Minimo:** Rimuovi il badge "5.0 su Google" fittizio; mantieni sezione solo con testo generico senza fingere che siano recensioni Google

---

## 🟠 ALTA PRIORITÀ — Entro 1 settimana

### H1. Aggiungere `og:image` e completare OpenGraph (`layout.tsx`)
**Impatto:** Condivisioni social, CTR da social media

```ts
openGraph: {
  type: 'website',
  locale: 'it_IT',
  siteName: 'Autodemolizioni Pisanelli srl',
  url: 'https://www.autodemolizionipiesanelli.it', // dominio reale
  images: [
    {
      url: '/images/hero-esterno.jpg', // o creare immagine OG dedicata 1200x630
      width: 1200,
      height: 630,
      alt: 'Autodemolizioni Pisanelli - Gerano Roma',
    },
  ],
},
twitter: {
  card: 'summary_large_image',
  title: 'Autodemolizioni Pisanelli | Rottamazione e Ricambi - Gerano Roma',
  description: 'Rottamazione auto con ritiro gratuito, cancellazione PRA e ricambi usati garantiti. 40 anni di esperienza. Gerano (Roma).',
  images: ['/images/hero-esterno.jpg'],
},
```

---

### H2. Accorciare le meta description (tutte le pagine)
**Impatto:** SERP CTR, qualità listing

| Pagina | Meta description corretta (≤155 char) |
|--------|--------------------------------------|
| Home | `Autodemolizione autorizzata a Gerano (Roma). Rottamazione veicoli con ritiro gratuito, cancellazione PRA inclusa. Ricambi usati per auto, moto e scooter. 40 anni di esperienza.` (172 → tagliare) |
| /servizi | `Demolizione veicoli, cancellazione PRA, ritiro a domicilio gratuito e vendita ricambi usati. Impianto autorizzato a Gerano (Roma). Autodemolizioni Pisanelli.` ≈150 ✅ |
| /rottamazione | `Rottamazione veicoli con ritiro gratuito in provincia di Roma. Pratiche PRA incluse, Certificato di Rottamazione garantito. Risposta entro 30 minuti. Gerano (Roma).` ≈165 → tagliare |
| /faq | `Risposte su rottamazione, documenti, ritiro gratuito e ricambi usati. Autodemolizioni Pisanelli, Gerano (Roma).` ≈110 ✅ |
| /ricambi | `Ricambi usati e rigenerati per auto, moto e scooter di tutte le marche. Motori, cambi, carrozzeria, elettronica. Autodemolizioni Pisanelli, Gerano (Roma).` ≈155 ✅ |
| /contatti | OK, 156 chars borderline — lasciare |

---

### H3. Aggiungere URL canonici espliciti
**Impatto:** Duplicate content prevention

In ogni `page.tsx`, aggiungere alla metadata:
```ts
alternates: {
  canonical: 'https://www.autodemolizionipiesanelli.it/PAGINA',
},
```

---

### H4. Aggiungere `BreadcrumbList` schema alle pagine interne
**Impatto:** Rich results, keyword context

```ts
// Esempio per /rottamazione/page.tsx
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://...' },
    { '@type': 'ListItem', position: 2, name: 'Rottamazione', item: 'https://.../rottamazione' },
  ],
}
```

---

### H5. Aggiungere AVIF a next.config.ts
**Impatto:** Performance, Core Web Vitals

```ts
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF prima (migliore compressione)
  },
};
```

---

### H6. Security Headers in next.config.ts
**Impatto:** Trust score, sicurezza

```ts
const nextConfig: NextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}
```

---

## 🟡 MEDIA PRIORITÀ — Entro 1 mese

### M1. Ottimizzare alt text delle immagini
Rendere gli alt text più descrittivi e keyword-rich (vedere sezione 6 del report).

### M2. Google Maps iframe — Lazy load con facade
Migliorare CWV rimuovendo il caricamento immediato dell'iframe Maps:
- Mostrare un'immagine statica della mappa (screenshot) con un bottone "Mostra mappa"
- Caricare l'iframe solo al click dell'utente

### M3. Completare i 4 numeri di telefono nel schema
Aggiungere `ufficio` e `sirio` alla lista `telephone` nel JSON-LD.

### M4. Sostituire logo PNG con SVG
`public/images/logo-navbar.png` → convertire in SVG per migliore scalabilità e performance.

### M5. Aggiungere `AggregateRating` schema
Quando le recensioni reali saranno integrate, aggiungere:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "47"
}
```

### M6. Tipo schema più appropriato
Considerare `{'@type': ['AutoPartsStore', 'LocalBusiness']}` o aggiungere un secondo schema di tipo `AutomotiveService` per coprire la demolizione.

### M7. Link building locale
- Iscriversi/aggiornare profilo su: Pagine Gialle, Kompass, TrustPilot IT, Autopartes.it
- Ottenere link da Comune di Gerano o Provincia di Roma (directory aziende locali)
- Contattare officine partner per link reciproci

---

## 🟢 BASSA PRIORITÀ — Backlog

### L1. Creare sezione Blog/News
**Argomenti suggeriti:**
- "Come rottamare un'auto nel Lazio nel 2026: guida completa"
- "Bonus rottamazione 2026: come funziona e come richiederlo"
- "Quanto vale la mia auto da rottamare? Come si calcola il valore"
- "Ricambi usati vs nuovi: quando conviene scegliere l'usato"
- "Cancellazione PRA: cosa succede se non si fa"

### L2. Attivare profili social
Facebook Business Page e eBay Store sono menzionati nel sito come "In arrivo". Fino all'attivazione, rimuovere i riferimenti dal footer e dalla pagina Contatti per non mostrare link morti/disabilitati.

### L3. Aggiungere `llms.txt`
Per migliorare la citabilità da parte di AI search engines:
```
# llms.txt
# Autodemolizioni Pisanelli srl

## About
Autodemolizione autorizzata con 40 anni di esperienza a Gerano (Roma).
Servizi: demolizione veicoli, rottamazione con ritiro gratuito, cancellazione PRA, vendita ricambi usati.
...
```

### L4. Certificati di autorizzazione
Aggiungere nella pagina Servizi un riferimento al numero di iscrizione all'Albo Nazionale Gestori Ambientali e all'autorizzazione regionale per il trattamento veicoli ELV. Migliora E-E-A-T e differenzia dai competitor non autorizzati.

### L5. Pagina HTML Sitemap (`/sitemap`)
Pagina con link a tutte le sezioni del sito — utile per utenti e crawler.

---

## Checklist Quick Reference

```
CRITICO (48h):
[ ] Creare app/sitemap.ts
[ ] Creare app/robots.ts
[ ] Correggere URL typo nello schema (piesanelli → pisanelli o dominio reale)
[ ] Correggere orari nello schema (aggiungere pausa pranzo 12:30-14:30)
[ ] Creare app/privacy-policy/page.tsx
[ ] Aggiungere consenso ai form
[ ] Sostituire/rimuovere recensioni hardcoded false

ALTA (1 settimana):
[ ] Aggiungere og:image e twitter:card in layout.tsx
[ ] Accorciare meta descriptions a ≤155 char
[ ] Aggiungere canonical URLs a tutte le pagine
[ ] Aggiungere BreadcrumbList schema alle pagine interne
[ ] Aggiungere AVIF a next.config.ts
[ ] Aggiungere security headers in next.config.ts

MEDIA (1 mese):
[ ] Ottimizzare alt text immagini
[ ] Lazy load Google Maps iframe
[ ] 4 telefoni nel schema
[ ] Sostituire logo PNG con SVG
[ ] AggregateRating schema (con dati reali)
[ ] Link building locale (Pagine Gialle, etc.)

BASSA (backlog):
[ ] Sezione blog con articoli SEO
[ ] Attivare/rimuovere social placeholder
[ ] Aggiungere llms.txt
[ ] Aggiungere dati autorizzazioni Albo Gestori Ambientali
[ ] Pagina /sitemap HTML
```

---

## ROI Stimato per Fix Critici

| Fix | Effort | Impatto atteso |
|-----|--------|----------------|
| sitemap.xml | 15 min | +15-30 URL indicizzate entro 2 settimane |
| robots.txt | 5 min | Controllo crawler immediato |
| Schema corretto | 10 min | Knowledge Panel più accurato su Google |
| Privacy Policy | 2-3h | Compliance legale, rimozione rischio sanzioni |
| og:image | 30 min | CTR social +200-400% potenziale |
| Canonical URLs | 20 min | Prevenzione duplicate content |
