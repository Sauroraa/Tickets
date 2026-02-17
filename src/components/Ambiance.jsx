import { useEffect, useRef, useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
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

export default function Ambiance() {
  const sectionRef = useRef(null)
  const visible = useInView(sectionRef, 0.2)
  const { t } = useTranslation()

  const scrollToBilletterie = () => {
    document.getElementById('billetterie')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="ambiance" className="ambiance" ref={sectionRef}>
      <div className={`ambiance__content ${visible ? 'ambiance__content--visible' : ''}`}>
        {t.ambiance.lines.map((line, i) => (
          <p
            key={i}
            className="ambiance__line"
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            {line}
          </p>
        ))}
        <button className="ambiance__cta" style={{ transitionDelay: `${t.ambiance.lines.length * 0.12}s` }} onClick={scrollToBilletterie}>
          {t.ambiance.cta}
        </button>
      </div>
    </section>
  )
}
