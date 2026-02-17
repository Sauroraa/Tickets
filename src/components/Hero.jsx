import { useState, useEffect, useRef, useCallback } from 'react'
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

function Particles() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const particlesRef = useRef([])

  const init = useCallback((canvas) => {
    const particles = []
    const count = Math.floor((canvas.width * canvas.height) / 25000)
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.3 - 0.1,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.3 + 0.05,
        pulse: Math.random() * Math.PI * 2,
      })
    }
    particlesRef.current = particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init(canvas)
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particlesRef.current

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.015

        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10

        const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(225, 6, 0, ${alpha})`
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [init])

  return <canvas ref={canvasRef} className="hero__particles" />
}

export default function Hero() {
  const countdown = useCountdown(event.date)

  const scrollToBilletterie = () => {
    document.getElementById('billetterie')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <Particles />
      <div className="hero__vignette" />

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-main">{event.name}</span>
          <span className="hero__title-sub">{event.tagline}</span>
        </h1>

        <div className="hero__meta">
          <span>{event.dateDisplay}</span>
          <span className="hero__dot" />
          <span>{event.lieu.nom}</span>
          <span className="hero__dot" />
          <span>{event.style}</span>
        </div>

        <div className="hero__countdown">
          {Object.entries(countdown).map(([label, value]) => (
            <div key={label} className="hero__countdown-item">
              <div className="hero__countdown-box">
                <span className="hero__countdown-value">{String(value).padStart(2, '0')}</span>
              </div>
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
