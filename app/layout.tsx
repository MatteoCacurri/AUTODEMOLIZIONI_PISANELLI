import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { SITE_URL, GOOGLE_BUSINESS_URL, COMPANY } from '@/lib/constants'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Autodemolizioni Pisanelli | Rottamazione Auto – Gerano',
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
  verification: {
    google: 'f3FygiYyScYr5nJS2w3N12E419Y4tbqMBmUZ_pzBfs0',
  },
}

const sameAs = [
  GOOGLE_BUSINESS_URL,
].filter(Boolean) as string[]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoPartsStore',
  '@id': `${SITE_URL}/#organization`,
  name: 'Autodemolizioni Pisanelli srl',
  description:
    'Autodemolizione autorizzata con 40 anni di esperienza. Rottamazione veicoli, ritiro gratuito, cancellazione PRA e vendita ricambi usati e rigenerati per auto, moto e scooter.',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/banner-panoramico.jpg`,
  telephone: ['+393520512406', '+390774798896', '+393349025620', '+393355224195'],
  email: COMPANY.contacts.email,
  vatID: COMPANY.vatNumber,
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
  ...(sameAs.length > 0 && { sameAs }),
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T9SCKWSXM2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
            });

            gtag('js', new Date());
            gtag('config', 'G-T9SCKWSXM2');
          `}
        </Script>
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
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
