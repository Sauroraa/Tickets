import { lineup } from '../data/eventData'
import './Lineup.css'

export default function Lineup() {
  return (
    <section id="lineup" className="lineup">
      <h2 className="section-title">LINE-UP</h2>

      {lineup.revealed ? (
        <div className="lineup__grid">
          {lineup.artists.map((artist, i) => (
            <div key={i} className="lineup__card">
              <div className="lineup__card-img" style={{ backgroundImage: `url(${artist.image})` }} />
              <div className="lineup__card-info">
                <h3>{artist.name}</h3>
                <span className="lineup__card-label">{artist.label}</span>
                <span className="lineup__card-meta">{artist.style} — {artist.country}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="lineup__coming">
          <p className="lineup__coming-title">LINE-UP DROP SOON</p>
          <p className="lineup__coming-sub">Stay locked.</p>
        </div>
      )}
    </section>
  )
}
