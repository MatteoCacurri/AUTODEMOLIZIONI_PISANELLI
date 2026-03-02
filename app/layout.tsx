import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { SITE_URL } from '@/lib/constants'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Autodemolizioni Pisanelli srl | Rottamazione e Ricambi Usati - Gerano (Roma)',
    template: '%s | Autodemolizioni Pisanelli',
  },
  description:
    'Autodemolizione autorizzata a Gerano (Roma). Rottamazione con ritiro gratuito, cancellazione PRA e ricambi usati. 40 anni di esperienza.',
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
    images: [
      {
        url: '/images/banner-panoramico.jpg',
        width: 1200,
        height: 630,
        alt: 'Autodemolizioni Pisanelli srl — Gerano (Roma)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/banner-panoramico.jpg'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoPartsStore',
  name: 'Autodemolizioni Pisanelli srl',
  description:
    'Autodemolizione autorizzata con 40 anni di esperienza. Rottamazione veicoli, ritiro gratuito, cancellazione PRA e vendita ricambi usati e rigenerati per auto, moto e scooter.',
  url: SITE_URL,
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
      closes: '12:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '14:30',
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
        <Analytics />
        {/* Iubenda Cookie Banner */}
        <Script
          src="https://embeds.iubenda.com/widgets/62c74194-927d-4594-88f3-2b5d958f47e7.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
