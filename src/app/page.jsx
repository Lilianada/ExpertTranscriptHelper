import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { Packages } from '@/components/Packages'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { HowItWorks } from '@/components/HowItWorks'
import { AccreditedSchools } from '@/components/AccreditedSchools'
import Contact from '@/components/Contact'
import YoutubeSection from '@/components/YoutubeSection'
import AboutUs from '@/components/AboutUs'
import Faq from '@/components/Faq'

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <YoutubeSection />
      <AccreditedSchools />
      <HowItWorks />
      <WhyChooseUs />
      <Packages />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
