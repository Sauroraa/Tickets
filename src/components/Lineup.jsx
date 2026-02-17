import { useEffect, useRef, useState } from 'react'
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

  return (
    <section id="lineup" className="lineup" ref={sectionRef}>
      <h2 className="section-title">LINE-UP</h2>

      {lineup.revealed ? (
        <div className={`lineup__timeline ${visible ? 'lineup__timeline--visible' : ''}`}>
          <div className="lineup__line" />
          {lineup.artists.map((artist, i) => (
            <div
              key={i}
              className={`lineup__slot ${artist.tag === 'IN CONFIRMATION' ? 'lineup__slot--pending' : ''}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="lineup__dot" />
              <span className="lineup__time">{artist.time}</span>
              <div className="lineup__info">
                <span className="lineup__name">{artist.name}</span>
                {artist.tag && (
                  <span className={`lineup__tag ${artist.tag === 'SHOWCASE' ? 'lineup__tag--showcase' : ''} ${artist.tag === 'IN CONFIRMATION' ? 'lineup__tag--pending' : ''} ${artist.tag.includes('BDAY') ? 'lineup__tag--special' : ''}`}>
                    {artist.tag}
                  </span>
                )}
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
