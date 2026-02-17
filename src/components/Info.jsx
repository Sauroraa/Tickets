import { event } from '../data/eventData'
import './Info.css'

export default function Info() {
  return (
    <section id="info" className="info">
      <h2 className="section-title">INFOS PRATIQUES</h2>

      <div className="info__grid">
        <div className="info__card">
          <div className="info__icon">📍</div>
          <h3>Lieu</h3>
          <p className="info__main">{event.lieu.nom}</p>
          <p className="info__sub">{event.lieu.adresse}</p>
          <a href={event.lieu.maps} target="_blank" rel="noopener noreferrer" className="info__link">
            Voir sur Google Maps
          </a>
        </div>

        <div className="info__card">
          <div className="info__icon">🕒</div>
          <h3>Horaires</h3>
          <p className="info__main">{event.horaires}</p>
          <p className="info__sub">{event.dateDisplay}</p>
        </div>

        <div className="info__card info__card--tarifs">
          <div className="info__icon">🎫</div>
          <h3>Tarifs</h3>
          <div className="info__tarifs">
            {event.tarifs.map((t, i) => (
              <div key={i} className={`info__tarif ${t.status === 'Disponible' ? 'info__tarif--active' : ''}`}>
                <div className="info__tarif-header">
                  <span className="info__tarif-nom">{t.nom}</span>
                  <span className="info__tarif-prix">{t.prix}</span>
                </div>
                <span className="info__tarif-status">{t.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
