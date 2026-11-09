import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { profile } from '@/data/profile'
import { useTypedRole } from '@/hooks/useTypedRole'

export function Hero() {
  const { t } = useTranslation()
  const role = useTypedRole()
  const reduceMotion = useReducedMotion()
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduceMotion) return
    const node = glowRef.current
    if (!node) return

    const onMove = (event: PointerEvent) => {
      const rect = node.parentElement?.getBoundingClientRect()
      if (!rect) return
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      node.style.background = `radial-gradient(500px circle at ${x}% ${y}%, rgba(34, 211, 238, 0.16), transparent 45%)`
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduceMotion])

  const fade = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay },
        }

  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-14">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div ref={glowRef} className="pointer-events-none absolute inset-0 transition-[background] duration-300" />
      <div className="section-shell relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div>
          <motion.p {...fade(0)} className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-mint">
            {t('hero.hello')}
          </motion.p>

          <motion.h1
            {...fade(0.05)}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.h2 {...fade(0.12)} className="mt-3 text-xl font-semibold text-white sm:text-2xl">
            {t('hero.title')}
          </motion.h2>

          <motion.p {...fade(0.18)} className="mt-3 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            {t('hero.subtitle')}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-4 flex items-center gap-2 text-sm text-mute">
            <span>{t('hero.typedPrefix')}</span>
            <span className="relative inline-flex min-h-[1.5rem] min-w-[12rem] font-semibold text-cyan">
              {reduceMotion ? (
                <span>{role}</span>
              ) : (
                <>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={role}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      {role}
                    </motion.span>
                  </AnimatePresence>
                  <span className="invisible">{role}</span>
                </>
              )}
            </span>
          </motion.div>

          <motion.div {...fade(0.3)} className="mt-6 flex flex-wrap gap-3">
            <a href="#solutions" className="btn-primary">
              {t('hero.ctaSolutions')}
            </a>
            <a href="#contact" className="btn-ghost">
              {t('hero.ctaContact')}
            </a>
          </motion.div>

          <motion.div {...fade(0.4)} className="mt-5 flex flex-wrap gap-4 text-xl text-mute">
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
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan/25 via-transparent to-emerald/25 blur-2xl" />
          <div className="glow-ring relative overflow-hidden rounded-full border border-cyan/30 bg-panel p-1.5">
            <picture>
              <source srcSet={profile.avatar} type="image/webp" />
              <img
                src={profile.avatarFallback}
                alt={profile.fullName}
                className="aspect-square w-full rounded-full object-cover"
                width={320}
                height={320}
                decoding="async"
              />
            </picture>
          </div>
          <div className="mt-4 space-y-0.5 text-center text-sm text-mute">
            <p className="font-medium text-white">{profile.fullName}</p>
            <p>
              {profile.location.city}, {profile.location.state} · {profile.location.country}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
