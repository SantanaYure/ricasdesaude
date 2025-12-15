import './App.css'
import { About } from './components/About'
import { Banner } from './components/Banner'
import { FAQ } from './components/FAQ'
import { MomentIdealCTA } from './components/MomentIdealCTA'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MfitPartner } from './components/MfitPartner'
import { Pricing } from './components/Pricing'
import { PrimeBonus } from './components/PrimeBonus'
import { Testimonials } from './components/Testimonials'

function App() {
 
  return (
    <main className="min-h-screen bg-dark-900 text-white selection:bg-primary selection:text-white">
      <Banner />
      <Header />
      <Hero />
      <Features />
      <MfitPartner />
      <PrimeBonus />
      <Testimonials />
      <Pricing />
      <About />
      <MomentIdealCTA />
      <FAQ />
      <Footer />
    </main>

  )
}

export default App
