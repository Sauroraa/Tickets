import { ambiance } from '../data/eventData'
import './Ambiance.css'

export default function Ambiance() {
  const scrollToBilletterie = () => {
    document.getElementById('billetterie')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="ambiance" className="ambiance">
      <div className="ambiance__laser" />
      <div className="ambiance__content">
        {ambiance.lines.map((line, i) => (
          <p key={i} className="ambiance__line">{line}</p>
        ))}
        <button className="ambiance__cta" onClick={scrollToBilletterie}>
          Réserver maintenant
        </button>
      </div>
    </section>
  )
}
