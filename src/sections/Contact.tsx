import { useTranslation } from 'react-i18next'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { profile } from '@/data/profile'

export function Contact() {
  const { t } = useTranslation()

  const channels = [
    {
      label: t('contact.email'),
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: HiOutlineMail,
    },
    {
      label: t('contact.linkedin'),
      value: '/in/ronielli',
      href: profile.linkedin,
      icon: FaLinkedin,
    },
    {
      label: t('contact.github'),
      value: '@ronielli',
      href: profile.github,
      icon: FaGithub,
    },
    {
      label: t('contact.instagram'),
      value: '@ronielli_jesus',
      href: profile.instagram,
      icon: FaInstagram,
    },
    {
      label: t('contact.facebook'),
      value: 'ronielli.jesus',
      href: profile.facebook,
      icon: FaFacebook,
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} delay={0.05 * index}>
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex h-full items-center gap-4 rounded-2xl border border-line bg-panel/65 p-5 transition hover:border-cyan/35"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-xl text-cyan">
                  <channel.icon />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-mute">{channel.label}</span>
                  <span className="block truncate font-medium text-white">{channel.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
