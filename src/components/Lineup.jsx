import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import { lineup } from '../data/eventData'
import './Lineup.css'

function useInView(ref, threshold = 0.05) {
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

function getTagClass(tag) {
  if (!tag) return ''
  if (tag === 'OLD SCHOOL SET') return 'lineup__tag--old-school'
  if (tag.includes('BDAY')) return 'lineup__tag--special'
  if (tag === 'SOLO SET') return 'lineup__tag--solo'
  if (tag === 'SAURORAA') return 'lineup__tag--sauroraa'
  if (tag === 'MONO AUDIO') return 'lineup__tag--mono'
  if (tag === 'UNDERGROUND WAVES') return 'lineup__tag--uw'
  if (tag === 'EQUINOXX') return 'lineup__tag--eq'
  return 'lineup__tag--showcase'
}

export default function Lineup() {
  const sectionRef = useRef(null)
  const visible = useInView(sectionRef)
  const { t } = useTranslation()

  const showTimes = new Date() >= new Date(lineup.timesRevealDate)

  return (
    <section id="lineup" className="lineup" ref={sectionRef}>
      <h2 className="section-title">{t.lineup.title}</h2>

      {!showTimes && (
        <div className="lineup__timetable-notice">
          <span className="lineup__timetable-icon">⏱</span>
          <span>{t.lineup.timetableReveal}</span>
        </div>
      )}

      {lineup.revealed ? (
        <div className={`lineup__list ${visible ? 'lineup__list--visible' : ''}`}>

          {/* Headliners */}
          <div className="lineup__tier-label">{t.lineup.tiers.headliners}</div>
          {lineup.artists.filter(a => a.tier === 'headliner').reverse().map((artist, i) => (
            <div key={`h-${i}`} className="lineup__row lineup__row--headliner" style={{ transitionDelay: `${i * 0.06}s` }}>
              {showTimes && <span className="lineup__time">{artist.time}</span>}
              <span className="lineup__name">{artist.name}</span>
              {artist.tag && (
                <span className={`lineup__tag ${getTagClass(artist.tag)}`}>{artist.tag}</span>
              )}
            </div>
          ))}

          {/* Main acts */}
          <div className="lineup__tier-label">{t.lineup.tiers.artists}</div>
          {lineup.artists.filter(a => a.tier === 'main').reverse().map((artist, i) => (
            <div key={`m-${i}`} className="lineup__row lineup__row--main" style={{ transitionDelay: `${(i + 2) * 0.06}s` }}>
              {showTimes && <span className="lineup__time">{artist.time}</span>}
              <span className="lineup__name">{artist.name}</span>
              {artist.tag && (
                <span className={`lineup__tag ${getTagClass(artist.tag)}`}>{artist.tag}</span>
              )}
            </div>
          ))}

          {/* Showcases */}
          <div className="lineup__tier-label">{t.lineup.tiers.showcases}</div>
          {lineup.artists.filter(a => a.tier === 'showcase').reverse().map((artist, i) => (
            <div key={`s-${i}`} className="lineup__row lineup__row--showcase" style={{ transitionDelay: `${(i + 6) * 0.06}s` }}>
              {showTimes && <span className="lineup__time">{artist.time}</span>}
              <span className="lineup__name">{artist.name}</span>
              {artist.tag && (
                <span className={`lineup__tag ${getTagClass(artist.tag)}`}>{artist.tag}</span>
              )}
            </div>
          ))}

          {/* Support */}
          <div className="lineup__tier-label">{t.lineup.tiers.support}</div>
          {lineup.artists.filter(a => a.tier === 'support').reverse().map((artist, i) => (
            <div key={`sup-${i}`} className="lineup__row lineup__row--support" style={{ transitionDelay: `${(i + 10) * 0.06}s` }}>
              {showTimes && <span className="lineup__time">{artist.time}</span>}
              <span className="lineup__name">{artist.name}</span>
              {artist.tag && (
                <span className={`lineup__tag ${getTagClass(artist.tag)}`}>{artist.tag}</span>
              )}
            </div>
          ))}

          {/* MCs */}
          {lineup.mcs && (
            <div className="lineup__mcs" style={{ transitionDelay: '0.9s' }}>
              <span className="lineup__mcs-label">HOSTED BY MCS</span>
              <span className="lineup__mcs-names">{lineup.mcs.join(' \u2022 ')}</span>
            </div>
          )}
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
