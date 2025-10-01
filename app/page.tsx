import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import InsightsDashboard from '@/components/InsightsDashboard'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <InsightsDashboard />
      <Testimonials />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
} 