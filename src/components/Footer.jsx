import { socials } from '../data/eventData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">SAURORAA</span>

        <div className="footer__socials">
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href={`mailto:${socials.email}`}>Contact</a>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} SAURORAA. Tous droits réservés.</span>
          <span className="footer__sep">|</span>
          <span>Powered by Weezevent</span>
        </div>
      </div>
    </footer>
  )
}
