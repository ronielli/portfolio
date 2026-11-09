import { useTranslation } from 'react-i18next'

export function LangSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('en') ? 'en' : 'pt'

  function setLang(lang: 'pt' | 'en') {
    void i18n.changeLanguage(lang)
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line bg-panel/80 p-1 text-xs font-semibold">
      {(['pt', 'en'] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLang(lang)}
          className={`rounded-full px-2.5 py-1 transition ${
            current === lang
              ? 'bg-gradient-to-r from-cyan to-emerald text-ink'
              : 'text-mute hover:text-white'
          }`}
          aria-pressed={current === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
