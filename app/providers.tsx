'use client'

import { useEffect } from 'react'
import i18n from '@/i18n'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem('portfolio-lang')
    const lang = stored === 'en' || stored === 'pt' ? stored : 'pt'
    if (i18n.language !== lang) {
      void i18n.changeLanguage(lang)
    }
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
  }, [])

  return <>{children}</>
}
