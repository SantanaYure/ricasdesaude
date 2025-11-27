import './App.css'
import { About } from './components/About'
import { Comparison } from './components/Comparison'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MfitPartner } from './components/MfitPartner'
import { Pricing } from './components/Pricing'
import { PrimeBonus } from './components/PrimeBonus'
import { Testimonials } from './components/Testimonials'

function App() {
 
  return (
    <main className="min-h-screen bg-dark-900 text-white selection:bg-primary selection:text-white">
      <Hero />
      <Features />
      <Comparison />
      <MfitPartner />
      <PrimeBonus />
      <Testimonials />
      <Pricing />
      <About />
      <FAQ />
      <Footer />
    </main>

  )
}

export default App
