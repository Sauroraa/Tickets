import { useState, useEffect } from 'react'
import { event } from '../data/eventData'
import './Hero.css'

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}

function getTimeLeft(target) {
  const diff = new Date(target) - new Date()
  if (diff <= 0) return { jours: 0, heures: 0, minutes: 0, secondes: 0 }
  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  }
}

export default function Hero() {
  const countdown = useCountdown(event.date)

  const scrollToBilletterie = () => {
    document.getElementById('billetterie')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__noise" />
      <div className="hero__glow" />

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-main">{event.name}</span>
          <span className="hero__title-sub">{event.tagline}</span>
        </h1>

        <div className="hero__meta">
          <span>{event.dateDisplay}</span>
          <span className="hero__separator">|</span>
          <span>{event.lieu.nom}</span>
          <span className="hero__separator">|</span>
          <span>{event.style}</span>
        </div>

        <div className="hero__countdown">
          {Object.entries(countdown).map(([label, value]) => (
            <div key={label} className="hero__countdown-item">
              <span className="hero__countdown-value">{String(value).padStart(2, '0')}</span>
              <span className="hero__countdown-label">{label}</span>
            </div>
          ))}
        </div>

        <button className="hero__cta" onClick={scrollToBilletterie}>
          PRENDRE MON TICKET
        </button>
      </div>
    </section>
  )
}
