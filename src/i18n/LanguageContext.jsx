import { createContext, useContext, useState, useEffect } from 'react'
import fr from './fr'
import en from './en'
import nl from './nl'

const translations = { fr, en, nl }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('sauroraa-lang')
    if (saved && translations[saved]) return saved

    // Auto-detect from browser
    const browserLang = navigator.language?.slice(0, 2)?.toLowerCase()
    if (browserLang === 'nl') return 'nl'
    if (browserLang === 'en') return 'en'
    return 'fr'
  })

  useEffect(() => {
    localStorage.setItem('sauroraa-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useTranslation must be used within LanguageProvider')
  return context
}
