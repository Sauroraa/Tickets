import { useState, useEffect } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()

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
          <li onClick={() => scrollTo('ambiance')}>{t.nav.ambiance}</li>
          <li onClick={() => scrollTo('lineup')}>{t.nav.lineup}</li>
          <li onClick={() => scrollTo('info')}>{t.nav.info}</li>
          <li onClick={() => scrollTo('billetterie')}>{t.nav.billetterie}</li>
          <li onClick={() => scrollTo('faq')}>{t.nav.faq}</li>
        </ul>

        <div className="navbar__right">
          <LanguageSwitcher />
          <a href="#billetterie" className="navbar__cta" onClick={(e) => { e.preventDefault(); scrollTo('billetterie') }}>
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
