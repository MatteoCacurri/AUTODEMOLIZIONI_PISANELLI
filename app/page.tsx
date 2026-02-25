import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import AboutSection from '@/components/home/AboutSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import EbaySection from '@/components/home/EbaySection'
import QuickPartForm from '@/components/home/QuickPartForm'
import ReviewsSection from '@/components/home/ReviewsSection'
import GalleryStrip from '@/components/home/GalleryStrip'

export default function HomePage() {
  return (
    <>
      <HeroSection />
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
