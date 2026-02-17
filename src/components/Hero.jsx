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
    const count = Math.floor((canvas.width * canvas.height) / 15000)
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.2,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
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

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.02

        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10

        const glow = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(225, 6, 0, ${glow})`
        ctx.fill()

        if (p.size > 1) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(225, 6, 0, ${glow * 0.15})`
          ctx.fill()
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = dx * dx + dy * dy
          if (dist < 12000) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(225, 6, 0, ${0.06 * (1 - dist / 12000)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
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

function StrobeFlash() {
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    const trigger = () => {
      setFlash(true)
      setTimeout(() => setFlash(false), 80)
    }
    const interval = setInterval(trigger, 6000 + Math.random() * 4000)
    return () => clearInterval(interval)
  }, [])

  return flash ? <div className="hero__strobe" /> : null
}

export default function Hero() {
  const countdown = useCountdown(event.date)
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const trigger = () => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }
    const interval = setInterval(trigger, 4000 + Math.random() * 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToBilletterie = () => {
    document.getElementById('billetterie')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <Particles />
      <div className="hero__scanlines" />
      <div className="hero__glow" />
      <StrobeFlash />

      <div className="hero__content">
        <h1 className={`hero__title ${glitch ? 'hero__title--glitch' : ''}`}>
          <span className="hero__title-main" data-text={event.name}>{event.name}</span>
          <span className="hero__title-sub">{event.tagline}</span>
        </h1>

        <div className="hero__meta">
          <span className="hero__meta-item">{event.dateDisplay}</span>
          <span className="hero__separator" />
          <span className="hero__meta-item">{event.lieu.nom}</span>
          <span className="hero__separator" />
          <span className="hero__meta-item">{event.style}</span>
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
          <span className="hero__cta-text">PRENDRE MON TICKET</span>
          <span className="hero__cta-glow" />
        </button>
      </div>
    </section>
  )
}
