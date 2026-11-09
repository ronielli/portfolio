import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { Tag } from '@/components/Tag'
import { skillGroups } from '@/data/skills'

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionTitle title={t('skills.title')} subtitle={t('skills.subtitle')} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={0.05 * index}>
              <article className="h-full rounded-2xl border border-line bg-panel/60 p-6 transition hover:border-cyan/30">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {t(group.titleKey)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
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
