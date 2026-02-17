import { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import './Faq.css'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)
  const { t } = useTranslation()

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="faq">
      <h2 className="section-title">{t.faq.title}</h2>

      <div className="faq__list">
        {t.faq.items.map((item, i) => (
          <div key={i} className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`}>
            <button className="faq__question" onClick={() => toggle(i)}>
              <span>{item.question}</span>
              <span className="faq__chevron">{openIndex === i ? '−' : '+'}</span>
            </button>
            <div className="faq__answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
