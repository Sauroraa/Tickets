import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ambiance from './components/Ambiance'
import Lineup from './components/Lineup'
import Info from './components/Info'
import Billetterie from './components/Billetterie'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
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
      <Footer />

      <div className="mobile-cta">
        <button className="mobile-cta__btn" onClick={scrollToBilletterie}>
          PRENDRE MON TICKET
        </button>
      </div>
    </>
  )
}
