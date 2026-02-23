import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Autodemolizioni Pisanelli srl | Gerano (Roma)',
    template: '%s | Autodemolizioni Pisanelli',
  },
  description:
    '40 anni di esperienza in demolizione veicoli, vendita ricambi usati e rigenerati, cancellazione PRA e ritiro a domicilio. Gerano (Roma).',
  keywords: [
    'autodemolizioni',
    'ricambi auto usati',
    'demolizione veicoli',
    'cancellazione PRA',
    'ricambi rigenerati',
    'Gerano',
    'Roma',
    'ritiro auto',
    'acquisto auto incidentate',
  ],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Autodemolizioni Pisanelli srl',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} font-sans bg-brand-black text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
