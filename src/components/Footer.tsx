import { useTranslation } from 'react-i18next'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { profile } from '@/data/profile'

const links = [
  { href: '#home', key: 'nav.home' },
  { href: '#about', key: 'nav.about' },
  { href: '#solutions', key: 'nav.solutions' },
  { href: '#experience', key: 'nav.experience' },
  { href: '#education', key: 'nav.education' },
  { href: '#contact', key: 'nav.contact' },
] as const

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink/80">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-emerald text-sm font-bold text-ink">
              {profile.initials}
            </span>
            <div>
              <p className="font-semibold text-white">{t('footer.brand')}</p>
              <p className="text-sm text-mute">{t('footer.tagline')}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-mute">
            {t('footer.links')}
          </h4>
          <ul className="space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-text/80 transition hover:text-cyan">
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-mute">
            {t('footer.social')}
          </h4>
          <div className="flex flex-wrap gap-3 text-xl text-mute">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub className="transition hover:text-cyan" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="transition hover:text-cyan" />
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram className="transition hover:text-cyan" />
            </a>
            <a href={profile.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook className="transition hover:text-cyan" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <HiOutlineMail className="transition hover:text-cyan" />
            </a>
          </div>
        </div>
      </div>

      <div className="section-shell flex flex-col gap-2 border-t border-line py-6 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.fullName}. {t('footer.rights')}
        </p>
        <p>{t('footer.made')}</p>
      </div>
    </footer>
  )
}
