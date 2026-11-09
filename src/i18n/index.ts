import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from './pt.json'
import en from './en.json'

const stored =
  typeof window !== 'undefined' ? localStorage.getItem('portfolio-lang') : null

void i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: stored === 'en' || stored === 'pt' ? stored : 'pt',
  fallbackLng: 'pt',
  interpolation: { escapeValue: false },
})

export default i18n
