import { useState, useCallback } from 'react'
import { useTranslation } from './i18n/LanguageContext'
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
import Countdown from './components/Countdown'

function isBeforeOpenTime() {
  const open = new Date()
  open.setHours(18, 0, 0, 0)
  return new Date() < open
}

export default function App() {
  const [legalOpen, setLegalOpen] = useState(false)
  const [locked, setLocked] = useState(isBeforeOpenTime)
  const { t } = useTranslation()

  const handleOpen = useCallback(() => setLocked(false), [])

  const scrollToBilletterie = () => {
    document.getElementById('billetterie')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (locked) return <Countdown onOpen={handleOpen} />

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
          {t.mobileCta}
        </button>
      </div>
    </>
  )
}
