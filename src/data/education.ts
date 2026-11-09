export type EducationItem = {
  id: string
  kind: 'degree' | 'course'
  titleKey: string
  placeKey: string
  periodKey: string
  detailKey?: string
}

export const education: EducationItem[] = [
  {
    id: 'si',
    kind: 'degree',
    titleKey: 'education.si.title',
    placeKey: 'education.si.place',
    periodKey: 'education.si.period',
  },
  {
    id: 'tech',
    kind: 'degree',
    titleKey: 'education.tech.title',
    placeKey: 'education.tech.place',
    periodKey: 'education.tech.period',
  },
  {
    id: 'rocketseat',
    kind: 'course',
    titleKey: 'education.rocketseat.title',
    placeKey: 'education.rocketseat.place',
    periodKey: 'education.rocketseat.period',
    detailKey: 'education.rocketseat.detail',
  },
]
