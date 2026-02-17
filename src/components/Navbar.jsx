import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <span className="navbar__logo" onClick={() => scrollTo('hero')}>SAURORAA</span>

        <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li onClick={() => scrollTo('ambiance')}>Ambiance</li>
          <li onClick={() => scrollTo('lineup')}>Line-Up</li>
          <li onClick={() => scrollTo('info')}>Infos</li>
          <li onClick={() => scrollTo('billetterie')}>Billetterie</li>
          <li onClick={() => scrollTo('faq')}>FAQ</li>
        </ul>

        <a href="#billetterie" className="navbar__cta" onClick={(e) => { e.preventDefault(); scrollTo('billetterie') }}>
          PRENDRE MON TICKET
        </a>
      </div>
    </nav>
  )
}
