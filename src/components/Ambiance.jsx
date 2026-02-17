import { useEffect, useRef, useState } from 'react'
import { ambiance } from '../data/eventData'
import './Ambiance.css'

function useInView(ref, threshold = 0.3) {
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

function EQBars() {
  return (
    <div className="ambiance__eq">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="ambiance__eq-bar"
          style={{ animationDelay: `${i * 0.08}s`, animationDuration: `${0.6 + Math.random() * 0.8}s` }}
        />
      ))}
    </div>
  )
}

export default function Ambiance() {
  const sectionRef = useRef(null)
  const visible = useInView(sectionRef, 0.2)

  const scrollToBilletterie = () => {
    document.getElementById('billetterie')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="ambiance" className="ambiance" ref={sectionRef}>
      <div className="ambiance__bg-pulse" />
      <EQBars />

      <div className={`ambiance__content ${visible ? 'ambiance__content--visible' : ''}`}>
        {ambiance.lines.map((line, i) => (
          <p
            key={i}
            className="ambiance__line"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {line}
          </p>
        ))}
        <button className="ambiance__cta" style={{ transitionDelay: `${ambiance.lines.length * 0.15}s` }} onClick={scrollToBilletterie}>
          Réserver maintenant
        </button>
      </div>
    </section>
  )
}
