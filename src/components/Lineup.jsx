import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { lineup } from '../data/eventData'
import './Lineup.css'

function useInView(ref, threshold = 0.1) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, threshold])

  return visible
}

export default function Lineup() {
  const sectionRef = useRef(null)
  const visible = useInView(sectionRef)
  const { t } = useTranslation()

  const getTagLabel = (tag) => {
    if (!tag) return null
    if (tag === 'SHOWCASE') return t.lineup.tags.showcase
    if (tag === 'IN CONFIRMATION') return t.lineup.tags.pending
    if (tag.includes('BDAY')) return tag
    return tag
  }

  return (
    <section id="lineup" className="lineup" ref={sectionRef}>
      <h2 className="section-title">{t.lineup.title}</h2>

      {lineup.revealed ? (
        <div className={`lineup__list ${visible ? 'lineup__list--visible' : ''}`}>
          {lineup.artists.map((artist, i) => (
            <div
              key={i}
              className={`lineup__row ${artist.tag === 'IN CONFIRMATION' ? 'lineup__row--pending' : ''} ${artist.blur ? 'lineup__row--blur' : ''}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className="lineup__time">{artist.blur ? '??h?? - ??h??' : artist.time}</span>
              <span className="lineup__name">{artist.blur ? '???????????' : artist.name}</span>
              {artist.tag && !artist.blur && (
                <span className={`lineup__tag ${
                  artist.tag === 'SHOWCASE' ? 'lineup__tag--showcase' :
                  artist.tag === 'IN CONFIRMATION' ? 'lineup__tag--pending' :
                  artist.tag.includes('BDAY') ? 'lineup__tag--special' : ''
                }`}>
                  {getTagLabel(artist.tag)}
                </span>
              )}
              {artist.blur && (
                <span className="lineup__tag lineup__tag--pending">{t.lineup.tags.tba}</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="lineup__coming">
          <p className="lineup__coming-title">{t.lineup.comingSoon}</p>
          <p className="lineup__coming-sub">{t.lineup.comingSub}</p>
        </div>
      )}
    </section>
  )
}
