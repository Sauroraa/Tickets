import { useTranslation } from '../i18n/LanguageContext'
import { event } from '../data/eventData'
import './Info.css'

export default function Info() {
  const { t } = useTranslation()

  return (
    <section id="info" className="info">
      <h2 className="section-title">{t.info.title}</h2>

      <div className="info__grid">
        <div className="info__card">
          <div className="info__icon">📍</div>
          <h3>{t.info.lieu}</h3>
          <p className="info__main">{event.lieu.nom}</p>
          <p className="info__sub">{event.lieu.adresse}</p>
          <a href={event.lieu.maps} target="_blank" rel="noopener noreferrer" className="info__link">
            {t.info.mapsLink}
          </a>
        </div>

        <div className="info__card">
          <div className="info__icon">🕒</div>
          <h3>{t.info.horaires}</h3>
          <p className="info__main">{event.horaires}</p>
          <p className="info__sub">{t.event.dateDisplay}</p>
        </div>

        <div className="info__card info__card--tarifs">
          <div className="info__icon">🎫</div>
          <h3>{t.info.tarifs}</h3>
          <div className="info__tarifs">
            {t.event.tarifs.map((tarif, i) => (
              <div key={i} className={`info__tarif ${tarif.status === t.info.enVente ? 'info__tarif--active' : ''}`}>
                <div className="info__tarif-header">
                  <span className="info__tarif-nom">{tarif.nom}</span>
                  <span className="info__tarif-prix">{event.tarifs[i].prix}</span>
                </div>
                <span className="info__tarif-status">{tarif.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
