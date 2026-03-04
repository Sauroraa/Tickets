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
  if (tag === 'RETURN SET') return 'lineup__tag--return'
  if (tag.includes('BDAY')) return 'lineup__tag--special'
  if (tag === 'SOLO SET') return 'lineup__tag--solo'
  if (tag === 'SAURORAA') return 'lineup__tag--sauroraa'
  if (tag === 'MONO AUDIO') return 'lineup__tag--mono'
  if (tag === 'UNDERGROUND WAVES') return 'lineup__tag--uw'
  if (tag === 'EQUINOXX') return 'lineup__tag--eq'
  return 'lineup__tag--showcase'
}

function TierSection({ artists, tierClass, delayStart, showTimes }) {
  return artists.map((artist, i) => (
    <div
      key={`${tierClass}-${i}`}
      className={`lineup__row lineup__row--${tierClass}`}
      style={{ transitionDelay: `${(delayStart + i) * 0.06}s` }}
    >
      {showTimes && <span className="lineup__time">{artist.time}</span>}
      <span className="lineup__name">{artist.name}</span>
      {artist.tag && (
        <span className={`lineup__tag ${getTagClass(artist.tag)}`}>{artist.tag}</span>
      )}
    </div>
  ))
}

export default function Lineup() {
  const sectionRef = useRef(null)
  const visible = useInView(sectionRef)
  const { t } = useTranslation()

  const showTimes = new Date() >= new Date(lineup.timesRevealDate)

  const headliners = lineup.artists.filter(a => a.tier === 'headliner')
  const showcases  = lineup.artists.filter(a => a.tier === 'showcase')
  const support    = lineup.artists.filter(a => a.tier === 'support')

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

          <div className="lineup__tier-label">{t.lineup.tiers.headliners}</div>
          <TierSection artists={headliners} tierClass="headliner" delayStart={0} showTimes={showTimes} />

          <div className="lineup__tier-label">{t.lineup.tiers.showcases}</div>
          <TierSection artists={showcases} tierClass="showcase" delayStart={2} showTimes={showTimes} />

          <div className="lineup__tier-label">{t.lineup.tiers.support}</div>
          <TierSection artists={support} tierClass="support" delayStart={6} showTimes={showTimes} />

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
