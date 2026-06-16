import { Navbar }            from '@/components/navbar'
import { Hero }               from '@/components/hero'
import { ProofSection }       from '@/components/proof-section'
import { Services }           from '@/components/services'
import { TransformationWall } from '@/components/transformation-wall'
import { WhyTrustUs }         from '@/components/why-trust-us'
import { Portfolio }          from '@/components/portfolio'
import { Testimonials }       from '@/components/testimonials'
import { ServiceAreas }       from '@/components/service-areas'
import { Contact }            from '@/components/contact'
import { Footer }             from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProofSection />
      <Services />
      <TransformationWall />
      <WhyTrustUs />
      <Portfolio />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
    </main>
  )
}
