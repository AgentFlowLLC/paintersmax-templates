import ScrollProgress from '@/components/ScrollProgress'
import NavBar from '@/components/NavBar'
import HeroSlider from '@/components/HeroSlider'
import ServicesSection from '@/components/ServicesSection'
import ProofSection from '@/components/ProofSection'
import TransformationsSection from '@/components/TransformationsSection'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import ProcessSection from '@/components/ProcessSection'
import ContactSection from '@/components/ContactSection'
import SiteFooter from '@/components/SiteFooter'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <NavBar />
      <HeroSlider />
      <ServicesSection />
      <ProofSection />
      <TransformationsSection />
      <ServiceAreasSection />
      <ProcessSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
