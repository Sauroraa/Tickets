import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ambiance from './components/Ambiance'
import Lineup from './components/Lineup'
import Info from './components/Info'
import Billetterie from './components/Billetterie'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Legal from './components/Legal'

export default function App() {
  const [legalOpen, setLegalOpen] = useState(false)

  const scrollToBilletterie = () => {
    document.getElementById('billetterie')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Ambiance />
      <Lineup />
      <Info />
      <Billetterie />
      <Faq />
      <Footer onLegalClick={() => setLegalOpen(true)} />
      <Legal open={legalOpen} onClose={() => setLegalOpen(false)} />

      <div className="mobile-cta">
        <button className="mobile-cta__btn" onClick={scrollToBilletterie}>
          PRENDRE MON TICKET
        </button>
      </div>
    </>
  )
}
