# SEO Audit Completo — Autodemolizioni Pisanelli srl
**Data audit:** 25 febbraio 2026
**Stack:** Next.js 15 App Router · TypeScript · Tailwind CSS
**Business type:** Autodemolizione locale + vendita ricambi usati — Gerano (Roma)

---

## SEO Health Score: **64 / 100**

| Categoria | Peso | Score | Punteggio pesato |
|-----------|------|-------|-----------------|
| Technical SEO | 25% | 52/100 | 13.0 |
| Content Quality (E-E-A-T) | 25% | 68/100 | 17.0 |
| On-Page SEO | 20% | 72/100 | 14.4 |
| Schema / Structured Data | 10% | 55/100 | 5.5 |
| Performance (CWV) | 10% | 70/100 | 7.0 |
| Immagini | 5% | 80/100 | 4.0 |
| AI Search Readiness | 5% | 30/100 | 1.5 |
| **TOTALE** | 100% | — | **62.4 → 64** |

---

## Executive Summary

### Top 5 Problemi Critici
1. **Nessun `sitemap.xml`** — `app/sitemap.ts` non esiste. I crawler non hanno una mappa delle URL.
2. **Nessun `robots.txt`** — `app/robots.ts` non esiste. Nessun controllo sui crawler.
3. **Typo URL nello schema** — Il campo `url` in `localBusinessSchema` contiene `autodemolizionipiesanelli.it` (con 'e' in eccesso) invece del dominio corretto.
4. **Nessuna Privacy Policy** — I form raccolgono dati personali (nome, email, targa) ma non esiste una pagina `/privacy-policy`. **Violazione GDPR/D.Lgs. 196/2003.**
5. **Orari apertura errati nello schema** — Il JSON-LD mostra 08:30–17:00 continuo, ma gli orari reali prevedono una pausa pranzo (12:30–14:30). Dato errato in Knowledge Graph.

### Top 5 Quick Wins
1. Creare `app/sitemap.ts` (15 min di lavoro, impatto immediato)
2. Creare `app/robots.ts` (5 min)
3. Correggere il typo URL e gli orari nel schema JSON-LD (10 min)
4. Aggiungere `og:image` nei metadata OpenGraph (30 min)
5. Accorciare le meta description a ≤155 caratteri su tutte le pagine (20 min)

---

## 1. Technical SEO

### 1.1 Crawlabilità e Indicizzazione

| Check | Stato | Dettaglio |
|-------|-------|-----------|
| `robots.txt` | ❌ ASSENTE | `app/robots.ts` non esiste — nessuna direttiva per crawler |
| `sitemap.xml` | ❌ ASSENTE | `app/sitemap.ts` non esiste — 6 URL non mappate |
| Struttura URL | ✅ OK | URL corte e leggibili (`/rottamazione`, `/ricambi`, etc.) |
| `lang="it"` | ✅ OK | `<html lang="it">` nel layout |
| Trailing slash | ⚠️ N/D | Next.js default: nessuna trailing slash |
| Redirect 301 | N/D | Da verificare in prod (www vs non-www) |

### 1.2 Tag Canonici
**Problema:** Nessun `alternates.canonical` è definito in nessuna pagina. Next.js non inietta canonici automaticamente — possibile duplicate content se il sito è accessibile su `www.` e non-`www.`, o HTTP/HTTPS.

### 1.3 Sicurezza e Headers
L'audit del codice sorgente non rivela header di sicurezza personalizzati in `next.config.ts`. Si raccomanda di aggiungere:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Content-Security-Policy`
- `Referrer-Policy: strict-origin-when-cross-origin`

### 1.4 Core Web Vitals (analisi statica del codice)

| Metrica | Previsione | Note |
|---------|------------|------|
| LCP | ⚠️ A rischio | Hero image usa `priority` e `fill` ✓. Font Inter da Google Fonts può ritardare LCP. |
| CLS | ⚠️ A rischio | `iframe` Google Maps su `/contatti` senza `loading="lazy"` esplicito e senza altezza fissa definita in modo statico può causare layout shift. |
| INP | ✅ Probabile OK | Nessuna logica JS pesante visibile, componenti React server-side. |
| FCP | ✅ Probabile OK | Next.js SSR, font preload automatico. |

**Problema specifico - Google Maps iframe:**
```tsx
// contatti/page.tsx:225
<div className="rounded-2xl overflow-hidden ... flex-1 min-h-[400px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=..."
    style={{ border: 0, minHeight: '400px' }}
    // ↑ min-h solo via CSS/style non garantisce dimensione fissa pre-caricamento
  />
</div>
```
L'iframe carica immediatamente e senza dimensioni esplicitamente note al browser prima del rendering può causare CLS.

---

## 2. Content Quality (E-E-A-T)

### 2.1 Experience & Expertise ✅ Buono
- 40 anni di esperienza dichiarati in modo coerente su tutto il sito
- "Impianto autorizzato" menzionato (ma **non c'è link al registro/certificato Albo Gestori Ambientali**)
- Servizi dettagliati con lista feature per ogni servizio
- FAQ con 11 domande pratiche e risposte genuine

### 2.2 Authoritativeness ⚠️ Migliorabile
- P.IVA presente nel footer ✓
- Indirizzo fisico completo ✓
- Orari di apertura ✓
- **Mancano:** link a Albo Gestori Ambientali, autorizzazioni regionali, iscrizioni CNA/FIAT
- **Mancano:** profili social attivi (Facebook "In arrivo", eBay "In arrivo")

### 2.3 Trustworthiness ⚠️ RISCHIO

**Problema critico: recensioni placeholder**
```tsx
// components/home/ReviewsSection.tsx:3
// TODO: sostituire con recensioni reali dal profilo Google Business
const REVIEWS = [
  { name: 'Marco T.', date: 'gennaio 2026', rating: 5, text: '...' },
  ...
]
```
Le recensioni sono **hardcoded e fittizie**. Il componente mostra "5.0 su Google" ma con dati inventati. Se Google scansiona e confronta, questo **abbassa l'E-E-A-T**. Sostituire urgentemente con:
1. Embedding del widget Google Reviews reale, oppure
2. Rimozione temporanea fino a integrazione dati reali, oppure
3. Schema `Review` con markup onesto (senza fingersi Google)

**Problema GDPR:**
I form (`RottamazioneForm`, `ContactForm`, `QuickPartForm`) raccolgono nomi, email, telefoni e targhe senza:
- Link a Privacy Policy
- Checkbox di consenso esplicito
- Nessuna pagina `/privacy-policy` esistente

### 2.4 Contenuto thin / Opportunità mancate
- **Nessun blog/news** — settore automotive con molte keyword informazionali ("come rottamare auto 2026", "bonus rottamazione", etc.)
- La pagina `/ricambi` mostra categorie ma non ha contenuto testuale approfondito
- La pagina `/servizi` dipende da `ServiceGrid` (componente esterno) senza testo SEO below-the-fold

---

## 3. On-Page SEO

### 3.1 Title Tags

| Pagina | Title (con template) | Lunghezza | Stato |
|--------|---------------------|-----------|-------|
| Home | "Autodemolizioni Pisanelli srl \| Rottamazione e Ricambi Usati - Gerano (Roma)" | 78 chars | ⚠️ Troppo lungo |
| /servizi | "Servizi Demolizione e Rottamazione Veicoli - Roma \| Autodemolizioni Pisanelli" | 80 chars | ❌ Troppo lungo |
| /rottamazione | "Rottamazione Auto Provincia di Roma - Ritiro Gratuito \| Autodemolizioni Pisanelli" | 84 chars | ❌ Troppo lungo |
| /faq | "Domande Frequenti - Rottamazione e Ricambi Usati \| Autodemolizioni Pisanelli" | 79 chars | ⚠️ Troppo lungo |
| /ricambi | "Ricambi Usati Auto Moto Scooter - Gerano (Roma) \| Autodemolizioni Pisanelli" | 77 chars | ⚠️ Troppo lungo |
| /contatti | "Contatti e Dove Siamo \| Autodemolizioni Pisanelli" | 50 chars | ✅ OK ma poco specifico |

Il template `%s | Autodemolizioni Pisanelli` aggiunge ~25 chars. La maggior parte dei title supera i **60 caratteri** raccomandati (desktop) e i **70** prima del troncamento in SERP.

### 3.2 Meta Description

| Pagina | Lunghezza | Stato |
|--------|-----------|-------|
| Home | 214 chars | ❌ Troppo lunga (limite ~155) |
| /servizi | 216 chars | ❌ Troppo lunga |
| /rottamazione | 218 chars | ❌ Troppo lunga |
| /faq | 205 chars | ❌ Troppo lunga |
| /ricambi | 210 chars | ❌ Troppo lunga |
| /contatti | 156 chars | ⚠️ Borderline OK |

### 3.3 Struttura Heading

| Pagina | H1 | Problemi |
|--------|----| ---------|
| Home | "Autodemolizioni / Pisanelli" (in HeroSection) | H1 in componente — OK |
| /servizi | "I nostri Servizi" | ✅ |
| /rottamazione | "Rottamazione Veicoli" | ✅ |
| /faq | "Domande Frequenti" | ✅ |
| /ricambi | "Ricambi Usati e Rigenerati" | ✅ |
| /contatti | "Contatti e Dove Siamo" | ✅ |

Ogni pagina ha un H1 corretto. Bene.

### 3.4 Internal Linking
- Footer con link a tutte le pagine ✓
- CTA interne (es. `/rottamazione` dalla Home) ✓
- Mancano link anchor testuali nel corpo del contenuto tra le pagine (es. dalla pagina Servizi verso la pagina Rottamazione con anchor text keyword-rich)

### 3.5 OpenGraph / Social Sharing

```ts
// layout.tsx:33-37
openGraph: {
  type: 'website',
  locale: 'it_IT',
  siteName: 'Autodemolizioni Pisanelli srl',
  // ❌ MANCANO: images, url, title, description espliciti
}
```

**Mancano:**
- `og:image` — senza immagine le preview sui social sono vuote
- `og:url` — dominio canonico non specificato
- `twitter:card` — nessun metadata Twitter

---

## 4. Schema / Structured Data

### 4.1 Schema Implementato

**`layout.tsx` — `AutoPartsStore`:**
```json
{
  "@type": "AutoPartsStore",
  "url": "https://www.autodemolizionipiesanelli.it",  // ← TYPO: "pie" invece di "pi"
  "telephone": ["+390774798896", "+393349025620"],    // ← Solo 2 numeri su 4
  "openingHoursSpecification": [
    { "dayOfWeek": ["Monday",...,"Friday"], "opens": "08:30", "closes": "17:00" }
    // ← ERRORE: manca pausa pranzo 12:30-14:30
  ]
}
```

**`faq/page.tsx` — `FAQPage`:** ✅ Implementato correttamente con 11 domande.

### 4.2 Problemi Schema

| Problema | Severità | File |
|----------|----------|------|
| Typo URL (`piesanelli` vs `pisanelli`) | 🔴 Critico | `layout.tsx:46` |
| Orari senza pausa pranzo | 🔴 Critico | `layout.tsx:63-74` |
| Solo 2 telefoni su 4 | 🟡 Medio | `layout.tsx:47` |
| Manca `aggregateRating` | 🟡 Medio | `layout.tsx` |
| Manca schema `BreadcrumbList` | 🟡 Medio | Pagine interne |
| Manca `Review` schema | 🟡 Medio | Home page |
| Il tipo `AutoPartsStore` non copre la demolizione | 🟡 Medio | `layout.tsx:43` |

### 4.3 Schema Mancanti da Aggiungere

- **`AutoWrecked` / `AutomotiveService`** per il servizio demolizione
- **`BreadcrumbList`** su ogni pagina interna
- **`Service`** schema per ogni servizio specifico
- **`AggregateRating`** quando si integrano le recensioni reali

---

## 5. Performance (Analisi Statica)

### 5.1 Immagini
| File | Dimensione | Formato | Ottimizzazione |
|------|-----------|---------|---------------|
| hero-esterno.jpg | 228KB | JPEG→WebP | ✅ next/image |
| biglietto-visita.jpg | 312KB | JPEG→WebP | ✅ next/image |
| showroom-ricambi.jpg | 300KB | JPEG→WebP | ✅ next/image |
| logo-navbar.png | 20KB | PNG | ⚠️ Dovrebbe essere SVG |

**Note:** Next.js converte automaticamente a WebP in produzione (configurato). Le dimensioni JPEG originali sono ragionevoli. Nessun'immagine supera i 400KB.

**Mancanza AVIF:** `next.config.ts` configura solo `["image/webp"]`. Aggiungere `"image/avif"` per un 30-50% di risparmio aggiuntivo sui browser moderni.

### 5.2 Font
- Inter da `next/font/google` — ottimizzato automaticamente da Next.js ✓
- Subset 'latin' — corretto per il testo italiano ✓

### 5.3 Third-party Scripts
- **Google Maps iframe** su `/contatti` — impatto su CWV (LCP, CLS)
  - Raccomandazione: usare **Lite YouTube** pattern (mostra screenshot statico, carica iframe al click)
- **WhatsApp link** — solo link, nessun script esterno ✓

---

## 6. Immagini — SEO

| Immagine | Alt text | Stato |
|----------|----------|-------|
| hero-esterno.jpg | "Autodemolizioni Pisanelli - struttura esterna" | ✅ |
| piazzale-escavatore.jpg | "Piazzale Autodemolizioni Pisanelli" | ⚠️ Generico |
| esterno-mezzi.jpg | "Autodemolizioni Pisanelli - mezzi" | ⚠️ Generico |
| autosilo-scaffali.jpg | "Magazzino ricambi Autodemolizioni Pisanelli" | ✅ |
| showroom-ricambi.jpg | "Showroom ricambi Autodemolizioni Pisanelli" | ✅ |
| banner-panoramico.jpg | "Autodemolizioni Pisanelli - vista panoramica" | ⚠️ Generico |

**Raccomandazione:** Alt text più descrittivi e keyword-rich:
- `"piazzale-escavatore.jpg"` → `"Escavatore Autodemolizioni Pisanelli Gerano Roma - piazzale smaltimento veicoli"`
- `"esterno-mezzi.jpg"` → `"Carro attrezzi e mezzi di ritiro Autodemolizioni Pisanelli Gerano"`

---

## 7. AI Search Readiness (GEO)

| Check | Stato | Dettaglio |
|-------|-------|-----------|
| `llms.txt` | ❌ Assente | Nessun file per AI crawler |
| `robots.txt` AI directives | ❌ Assente | Nessun file robots |
| Struttura dati schema | ⚠️ Parziale | LocalBusiness + FAQ schema presenti ma con errori |
| Passage citability | ⚠️ Medio | FAQ ben strutturate, buone per citazioni AI |
| Entity signals | ✅ OK | Nome, indirizzo, telefono, P.IVA chiari |
| Brand mentions | 🟡 Basso | Nessun backlink/mention esterno rilevato |

**Opportunità:** La pagina FAQ con 11 domande pratiche è il contenuto più citabile da AI search (Perplexity, ChatGPT). Migliorare le risposte aggiungendo dati più specifici (es. "entro quanto tempo", "quale normativa").

---

## 8. Mancanze Critiche — Pagine non Presenti

| Pagina | Priorità | Motivo |
|--------|----------|--------|
| `/privacy-policy` | 🔴 CRITICO | GDPR obbligatorio, form raccolgono dati personali |
| `/cookie-policy` | 🔴 CRITICO | Legge italiana cookie (D.Lgs. 69/2012) |
| `sitemap.xml` | 🔴 CRITICO | Indicizzazione |
| `robots.txt` | 🔴 CRITICO | Controllo crawler |
| Cookie banner/consent | 🔴 CRITICO | GDPR — qualsiasi analytics/embed richiede consenso |
| `/sitemap` (HTML) | 🟡 Medio | UX + SEO aggiuntivo |
| Blog/News | 🟡 Medio | Contenuto long-tail ("bonus rottamazione 2026") |

---

## Keyword Analysis

### Keyword Target Principali (stimate)
| Keyword | Volume stimato/mese | Difficoltà | Pagina target |
|---------|--------------------|-----------|----|
| rottamazione auto roma | 1.000-5.000 | Alta | /rottamazione |
| autodemolizioni roma | 500-1.000 | Media | / |
| ricambi auto usati roma | 500-2.000 | Media | /ricambi |
| rottamazione auto provincia di roma | 100-500 | Media | /rottamazione |
| ritiro auto da rottamare roma | 100-500 | Bassa | /rottamazione |
| autodemolizioni gerano | <100 | Bassa | / |
| cancellazione pra auto | 200-500 | Media | /servizi, /rottamazione |
| ricambi usati gerano | <100 | Molto bassa | /ricambi |

**Gap:** Nessuna pagina targettizza specificatamente "bonus rottamazione 2026" o "rottamazione incentivi" che hanno volumi stagionali alti.

---

## Note Finali

Il sito presenta una **base tecnica solida** (Next.js, schema JSON-LD, immagini ottimizzate, metadata API) ma ha **lacune critiche** che limitano l'indicizzazione e la compliance legale. I fix critici (sitemap, robots, privacy policy, correzioni schema) richiedono **2-3 ore di sviluppo** e hanno impatto immediato su indicizzazione e compliance.
