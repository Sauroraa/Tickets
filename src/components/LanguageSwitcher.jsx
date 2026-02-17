import { useTranslation } from '../i18n/LanguageContext'
import './LanguageSwitcher.css'

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'nl', label: 'NL' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation()

  return (
    <div className="lang-switcher">
      {languages.map((l) => (
        <button
          key={l.code}
          className={`lang-switcher__btn ${lang === l.code ? 'lang-switcher__btn--active' : ''}`}
          onClick={() => setLang(l.code)}
          aria-label={l.label}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
