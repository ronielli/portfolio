import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { LangSwitcher } from './LangSwitcher'
import { profile } from '@/data/profile'

const links = [
  { href: '#home', key: 'nav.home' },
  { href: '#about', key: 'nav.about' },
  { href: '#solutions', key: 'nav.solutions' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#experience', key: 'nav.experience' },
  { href: '#education', key: 'nav.education' },
  { href: '#contact', key: 'nav.contact' },
] as const

export function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open ? 'glass border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-emerald text-sm font-bold text-ink">
            {profile.initials}
          </span>
          <span className="hidden text-white sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mute transition hover:text-white"
            >
              {t(link.key)}
            </a>
          ))}
          <LangSwitcher />
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <LangSwitcher />
          <button
            type="button"
            className="rounded-lg border border-line p-2 text-white"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <HiOutlineX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-ink-soft/95 px-4 py-6 xl:hidden">
          <div className="section-shell flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-text"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
