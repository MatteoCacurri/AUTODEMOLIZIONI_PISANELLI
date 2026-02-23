import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Autodemolizioni Pisanelli srl | Rottamazione e Ricambi Usati - Gerano (Roma)',
    template: '%s | Autodemolizioni Pisanelli',
  },
  description:
    'Autodemolizione autorizzata a Gerano (Roma). Rottamazione veicoli con ritiro gratuito in tutta la provincia, cancellazione PRA inclusa. Ricambi usati e rigenerati per auto, moto e scooter. 40 anni di esperienza.',
  keywords: [
    'autodemolizioni Gerano',
    'autodemolizioni Roma',
    'rottamazione auto Roma',
    'rottamazione auto provincia Roma',
    'ritiro auto da rottamare Roma',
    'ricambi auto usati Roma',
    'ricambi usati Gerano',
    'demolizione veicoli Roma',
    'cancellazione PRA',
    'acquisto auto incidentate Roma',
    'autodemolizione autorizzata Roma',
  ],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Autodemolizioni Pisanelli srl',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoPartsStore',
  name: 'Autodemolizioni Pisanelli srl',
  description:
    'Autodemolizione autorizzata con 40 anni di esperienza. Rottamazione veicoli, ritiro gratuito, cancellazione PRA e vendita ricambi usati e rigenerati per auto, moto e scooter.',
  url: 'https://www.autodemolizionipiesanelli.it',
  telephone: ['+390774798896', '+393349025620'],
  email: 'autodemolizione.siriopisanelli@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via della Mola snc',
    addressLocality: 'Gerano',
    postalCode: '00025',
    addressRegion: 'RM',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.9345,
    longitude: 12.9786,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:30',
      closes: '12:30',
    },
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Provincia di Roma',
  },
  priceRange: '€€',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-brand-black text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
