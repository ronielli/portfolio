import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { Tag } from '@/components/Tag'
import { experiences } from '@/data/experience'

export function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionTitle title={t('experience.title')} subtitle={t('experience.subtitle')} />
        <div className="relative space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-px before:bg-gradient-to-b before:from-cyan before:to-emerald sm:before:left-[15px]">
          {experiences.map((item, index) => (
            <Reveal key={item.id} delay={0.08 * index} className="relative pl-10 sm:pl-12">
              <span className="absolute top-3 left-1 h-3.5 w-3.5 rounded-full border-2 border-ink bg-cyan shadow-[0_0_16px_rgba(34,211,238,0.7)] sm:left-2" />
              <article className="rounded-2xl border border-line bg-panel/65 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">{t(item.titleKey)}</h3>
                  <span className="text-sm text-mute">{t(item.periodKey)}</span>
                </div>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-cyan transition hover:text-mint"
                    >
                      {item.company}
                    </a>
                  ) : (
                    <span className="font-medium text-cyan">{item.company}</span>
                  )}
                  {item.locationKey ? (
                    <>
                      <span className="text-line">·</span>
                      <span className="text-mute">{t(item.locationKey)}</span>
                    </>
                  ) : null}
                </p>
                <p className="mt-3 leading-relaxed text-mute">{t(item.descriptionKey)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tagKeys.map((tagKey) => (
                    <Tag key={tagKey}>{t(tagKey)}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
