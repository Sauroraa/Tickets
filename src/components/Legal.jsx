import { useTranslation } from '../i18n/LanguageContext'
import { legal, socials } from '../data/eventData'
import './Legal.css'

export default function Legal({ open, onClose }) {
  const { t } = useTranslation()

  if (!open) return null

  return (
    <div className="legal__overlay" onClick={onClose}>
      <div className="legal__modal" onClick={(e) => e.stopPropagation()}>
        <button className="legal__close" onClick={onClose} aria-label={t.legal.close}>&times;</button>

        <h2 className="legal__title">{t.legal.title}</h2>

        <div className="legal__section">
          <h3>{t.legal.editeur}</h3>
          <p>
            {legal.entreprise}<br />
            {t.legal.editeurNumero} : {legal.numero}<br />
            {t.legal.editeurEmail} : <a href={`mailto:${legal.email}`}>{legal.email}</a><br />
            {t.legal.editeurSite} : <a href={legal.site} target="_blank" rel="noopener noreferrer">{legal.site}</a>
          </p>
        </div>

        <div className="legal__section">
          <h3>{t.legal.hebergement}</h3>
          <p>{t.legal.hebergementText}</p>
        </div>

        <div className="legal__section">
          <h3>{t.legal.propriete}</h3>
          <p>{t.legal.proprieteText(legal.entreprise)}</p>
        </div>

        <div className="legal__section">
          <h3>{t.legal.billetterieTitle}</h3>
          <p>
            {t.legal.billetterieText}{' '}
            <a href="https://weezevent.com/fr/cgv/" target="_blank" rel="noopener noreferrer">weezevent.com/fr/cgv</a>.
          </p>
        </div>

        <div className="legal__section">
          <h3>{t.legal.remboursement}</h3>
          <p>{t.legal.remboursementText}</p>
        </div>

        <div className="legal__section">
          <h3>{t.legal.rgpd}</h3>
          <p>{t.legal.rgpdText1(legal.entreprise)}</p>
          <p>
            {t.legal.rgpdText2}{' '}
            <a href={`mailto:${legal.email}`}>{legal.email}</a>.
          </p>
        </div>

        <div className="legal__section">
          <h3>{t.legal.responsabilite}</h3>
          <p>{t.legal.responsabiliteText(legal.entreprise)}</p>
        </div>

        <div className="legal__section">
          <h3>{t.legal.droit}</h3>
          <p>{t.legal.droitText}</p>
        </div>

        <div className="legal__section">
          <h3>{t.legal.contact}</h3>
          <p>
            {t.legal.editeurEmail} : <a href={`mailto:${socials.email}`}>{socials.email}</a><br />
            Instagram : <a href={socials.instagram} target="_blank" rel="noopener noreferrer">@sauroraa.be</a><br />
            Facebook : <a href={socials.facebook} target="_blank" rel="noopener noreferrer">SAURORAA</a>
          </p>
        </div>
      </div>
    </div>
  )
}
