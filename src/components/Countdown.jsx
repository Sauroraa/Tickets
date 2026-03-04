import { useState, useEffect, useRef, useCallback } from 'react'
import { event } from '../data/eventData'
import './Countdown.css'

// Target: today at 18:00 local time
const OPEN_TIME = (() => {
  const d = new Date()
  d.setHours(18, 0, 0, 0)
  return d
})()

function getTimeLeft() {
  const diff = OPEN_TIME - new Date()
  if (diff <= 0) return null
  return {
    heures: Math.floor(diff / (1000 * 60 * 60)),
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
    const count = Math.floor((canvas.width * canvas.height) / 20000)
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
      for (const p of particlesRef.current) {
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

  return <canvas ref={canvasRef} className="countdown__particles" />
}

export default function Countdown({ onOpen }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const tick = setInterval(() => {
      const tl = getTimeLeft()
      if (!tl) {
        clearInterval(tick)
        onOpen()
      } else {
        setTimeLeft(tl)
      }
    }, 1000)
    return () => clearInterval(tick)
  }, [onOpen])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className="countdown">
      <Particles />
      <div className="countdown__vignette" />
      <div className="countdown__content">
        <div className="countdown__logo">
          <span className="countdown__name">{event.name}</span>
          <span className="countdown__tagline">{event.tagline}</span>
        </div>

        <p className="countdown__label">La billetterie ouvre dans</p>

        <div className="countdown__timer">
          <div className="countdown__unit">
            <div className="countdown__box">
              <span className="countdown__value">{pad(timeLeft?.heures ?? 0)}</span>
            </div>
            <span className="countdown__unit-label">Heures</span>
          </div>
          <span className="countdown__sep">:</span>
          <div className="countdown__unit">
            <div className="countdown__box">
              <span className="countdown__value">{pad(timeLeft?.minutes ?? 0)}</span>
            </div>
            <span className="countdown__unit-label">Minutes</span>
          </div>
          <span className="countdown__sep">:</span>
          <div className="countdown__unit">
            <div className="countdown__box">
              <span className="countdown__value">{pad(timeLeft?.secondes ?? 0)}</span>
            </div>
            <span className="countdown__unit-label">Secondes</span>
          </div>
        </div>

        <div className="countdown__meta">
          <span>{event.dateDisplay}</span>
          <span className="countdown__dot" />
          <span>{event.lieu.nom}</span>
        </div>
      </div>
    </div>
  )
}
