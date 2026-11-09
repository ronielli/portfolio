import { useTranslation } from 'react-i18next'
import { HiOutlineAcademicCap, HiOutlineBookmark } from 'react-icons/hi'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { education } from '@/data/education'

export function Education() {
  const { t } = useTranslation()

  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionTitle title={t('education.title')} subtitle={t('education.subtitle')} />
        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item, index) => {
            const Icon = item.kind === 'course' ? HiOutlineBookmark : HiOutlineAcademicCap
            return (
              <Reveal key={item.id} delay={0.05 * index}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-panel/65 p-5">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-xl text-cyan">
                    <Icon />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{t(item.titleKey)}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan">{t(item.placeKey)}</p>
                  <p className="mt-1 text-sm text-mute">{t(item.periodKey)}</p>
                  {item.detailKey ? (
                    <p className="mt-3 text-sm leading-relaxed text-mute">{t(item.detailKey)}</p>
                  ) : null}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
