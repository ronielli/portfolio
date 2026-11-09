import { useTranslation } from 'react-i18next'
import {
  HiOutlineChip,
  HiOutlineDesktopComputer,
  HiOutlineEye,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { solutions } from '@/data/solutions'

const icons = {
  industry: HiOutlineOfficeBuilding,
  mobile: HiOutlineDesktopComputer,
  embedded: HiOutlineChip,
  vision: HiOutlineEye,
} as const

export function Solutions() {
  const { t } = useTranslation()

  return (
    <section id="solutions" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionTitle title={t('solutions.title')} subtitle={t('solutions.subtitle')} />
        <div className="grid gap-5 sm:grid-cols-2">
          {solutions.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.id} delay={0.06 * index}>
                <article className="h-full rounded-2xl border border-line bg-panel/60 p-6 transition hover:border-cyan/35">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-2xl text-cyan">
                    <Icon />
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {t(`solutions.items.${item.id}.title`)}
                  </h3>
                  <p className="mt-2 leading-relaxed text-mute">
                    {t(`solutions.items.${item.id}.description`)}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
