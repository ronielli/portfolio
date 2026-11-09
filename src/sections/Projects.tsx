import { useTranslation } from 'react-i18next'
import { HiOutlineExternalLink, HiOutlineLockClosed } from 'react-icons/hi'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { Tag } from '@/components/Tag'
import { projects } from '@/data/projects'

export function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} />
        <div className="grid gap-8">
          {projects.map((project, index) => {
            const base = `projects.${project.id}`
            const highlights = t(`${base}.highlights`, {
              returnObjects: true,
            }) as string[]

            return (
              <Reveal key={project.id} delay={0.06 * index}>
                <article className="overflow-hidden rounded-3xl border border-line bg-panel/70">
                  <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                        <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
                          {t(`${base}.tagline`)}
                        </span>
                        {project.privateRepo ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1 text-xs text-mute">
                            <HiOutlineLockClosed />
                            {t('projects.private')}
                          </span>
                        ) : null}
                      </div>

                      <p className="text-mute">{t(`${base}.problem`)}</p>
                      <p className="mt-3 text-text/90">{t(`${base}.solution`)}</p>

                      <ul className="mt-5 space-y-2 text-sm text-mute">
                        {highlights.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary mt-6"
                        >
                          {t('projects.live')}
                          <HiOutlineExternalLink />
                        </a>
                      ) : null}
                    </div>

                    <div className="flex flex-col justify-between gap-6 bg-panel-2/40 p-6 sm:p-8">
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-mute">
                          {t('projects.architecture')}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          {project.architecture.map((node, nodeIndex) => (
                            <div key={node} className="flex items-center gap-2">
                              <span className="rounded-xl border border-cyan/25 bg-ink/50 px-3 py-2 text-sm font-medium text-mint">
                                {node}
                              </span>
                              {nodeIndex < project.architecture.length - 1 ? (
                                <span className="text-cyan/60">→</span>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
