import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { profile } from '@/data/profile'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionTitle title={t('about.title')} />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-text/90">{t('about.body')}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {profile.stats.map((stat, index) => (
              <Reveal key={stat.labelKey} delay={0.08 * index}>
                <div className="rounded-2xl border border-line bg-panel/70 p-5">
                  <p className="font-display text-4xl font-extrabold tracking-tight text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-mute">{t(stat.labelKey)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
