import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import FermoAmministrativoBanner from '@/components/ui/FermoAmministrativoBanner'
import AboutSection from '@/components/home/AboutSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import EbaySection from '@/components/home/EbaySection'
import QuickPartForm from '@/components/home/QuickPartForm'
import ReviewsSection from '@/components/home/ReviewsSection'
import GalleryStrip from '@/components/home/GalleryStrip'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FermoAmministrativoBanner variant="banner" />
      <TrustBar />
      <AboutSection />
      <ServicesPreview />
      <EbaySection />
      <QuickPartForm />
      <ReviewsSection />
      <GalleryStrip />
    </>
  )
}
