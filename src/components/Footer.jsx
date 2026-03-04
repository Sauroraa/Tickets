import { useState, useEffect } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { socials, legal } from '../data/eventData'
import './Footer.css'

function usePageViews() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/tickets.sauroraa.be/pageviews')
      .then((r) => r.json())
      .then((d) => setCount(d.value))
      .catch(() => {})
  }, [])

  return count
}

export default function Footer({ onLegalClick }) {
  const { t } = useTranslation()
  const views = usePageViews()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">SAURORAA</span>

        <div className="footer__socials">
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={`mailto:${socials.email}`}>Contact</a>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} {legal.entreprise} &mdash; N&deg; {legal.numero}</span>
          <span className="footer__sep">|</span>
          <button className="footer__legal-btn" onClick={onLegalClick}>{t.footer.legal}</button>
          <span className="footer__sep">|</span>
          <span>{t.footer.weezevent}</span>
        </div>

        {views !== null && (
          <div className="footer__views">
            <span className="footer__views-dot" />
            {views.toLocaleString('fr-FR')} vue{views > 1 ? 's' : ''}
          </div>
        )}
      </div>
    </footer>
  )
}
