import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { profile } from '@/data/profile'

export function useTypedRole(intervalMs = 2200) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % profile.roleKeys.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs])

  const key = profile.roleKeys[index]
  return t(`hero.roles.${key}`)
}
