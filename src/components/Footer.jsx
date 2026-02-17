import { socials, legal } from '../data/eventData'
import './Footer.css'

export default function Footer({ onLegalClick }) {
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
          <button className="footer__legal-btn" onClick={onLegalClick}>Mentions légales</button>
          <span className="footer__sep">|</span>
          <span>Billetterie par Weezevent</span>
        </div>
      </div>
    </footer>
  )
}
