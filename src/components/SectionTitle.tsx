import { Reveal } from './Reveal'

type SectionTitleProps = {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Reveal className="mb-8 max-w-2xl sm:mb-10">
      <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-mute sm:text-lg">{subtitle}</p>
      ) : null}
      <div className="mt-5 h-px w-20 bg-gradient-to-r from-cyan to-emerald" />
    </Reveal>
  )
}
